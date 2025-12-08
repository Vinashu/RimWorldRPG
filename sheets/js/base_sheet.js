/**
 * RimWorld RPG Base Sheet Manager
 * Handles colony wealth calculations, autosave, and construction projects
 */

// ================================
// Base Sheet Manager
// ================================
const BaseSheetManager = (function () {
    'use strict';

    // Constants
    const AUTOSAVE_KEY = 'rimworld_base_sheet_data';
    const AUTOSAVE_DEBOUNCE_MS = 1000;

    // Data from JSON
    let gameData = null;
    let buildingsData = null;

    // State
    let autosaveTimeout = null;
    let projectState = {};
    let colonyFacilities = [];
    let colonyDefenses = [];
    let currentDefensePool = 0;  // Track spent defense points

    // Load game data
    async function loadGameData() {
        try {
            console.log('[Base Sheet] Loading game data...');
            gameData = await RimWorldData.load('game_data.json');
            buildingsData = await RimWorldData.load('buildings.json');
            console.log('[Base Sheet] Game data loaded successfully');
        } catch (error) {
            console.error('[Base Sheet] Failed to load game data:', error);
            // Fallback to hardcoded data
            gameData = {
                wealthTiers: [
                    { min: 100, max: 999999, name: 'Powerhouse', maxRecruits: 4 },
                    { min: 50, max: 99, name: 'Prosperous', maxRecruits: 3 },
                    { min: 25, max: 49, name: 'Established', maxRecruits: 2 },
                    { min: 10, max: 24, name: 'Stable', maxRecruits: 1 },
                    { min: 0, max: 9, name: 'Struggling', maxRecruits: 0 }
                ]
            };
        }
    }

    // Utility: Debounced function
    function debounce(func, wait) {
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(autosaveTimeout);
                func(...args);
            };
            clearTimeout(autosaveTimeout);
            autosaveTimeout = setTimeout(later, wait);
        };
    }

    // Utility: Safe integer parse
    function safeParseInt(value, defaultValue = 0) {
        const parsed = parseInt(value, 10);
        return isNaN(parsed) ? defaultValue : parsed;
    }

    // Utility: Safe float parse
    function safeParseFloat(value, defaultValue = 0) {
        const parsed = parseFloat(value);
        return isNaN(parsed) ? defaultValue : parsed;
    }

    // Calculate wealth score
    function calculateWealth() {
        try {
            // Tech Points
            const techNeo = safeParseInt(document.getElementById('tech-neo')?.value) * 1;
            const techMed = safeParseInt(document.getElementById('tech-med')?.value) * 2;
            const techInd = safeParseInt(document.getElementById('tech-ind')?.value) * 4;
            const techSpacer = safeParseInt(document.getElementById('tech-spacer')?.value) * 8;
            const techTotal = techNeo + techMed + techInd + techSpacer;

            // Building Points (AUTO-CALCULATED from colonyFacilities array)
            const buildTotal = colonyFacilities.reduce((sum, facility) => {
                const quantity = facility.quantity || 1;
                return sum + ((facility.wealthPoints || 0) * quantity);
            }, 0);

            // Defense Points (AUTO-CALCULATED from colonyDefenses array)
            const defTotal = colonyDefenses.reduce((sum, defense) => {
                const quantity = defense.quantity || 1;
                return sum + ((defense.wealthPoints || 0) * quantity);
            }, 0);

            // Colonist Points
            const colPCs = safeParseInt(document.getElementById('col-pcs')?.value) * 10;
            const colRecruits = safeParseInt(document.getElementById('col-recruits')?.value) * 5;
            const colTotal = colPCs + colRecruits;

            // Total Wealth Score
            const totalWealth = techTotal + buildTotal + defTotal + colTotal;

            // Update subtotals
            updateElement('tech-total', techTotal);
            updateElement('build-total', buildTotal);
            updateElement('def-total', defTotal);
            updateElement('col-total', colTotal);

            // Update counts
            updateElement('building-count', colonyFacilities.length);
            updateElement('defense-count', colonyDefenses.length);

            // Update total displays
            updateElement('wealth-score-display', totalWealth);
            updateElement('total-wealth-score', totalWealth);
            updateElement('raid-points', totalWealth);

            // Determine colony tier from JSON data
            if (gameData && gameData.wealthTiers) {
                const tierInfo = RimWorldData.getWealthTier(gameData, totalWealth);
                if (tierInfo) {
                    updateElement('colony-tier', tierInfo.name);
                    updateElement('max-recruits', tierInfo.maxRecruits);
                    updateElement('wealth-tier-quick', tierInfo.name);
                }
            }

            // Trigger autosave
            debouncedAutosave();
        } catch (error) {
            console.error('Error calculating wealth:', error);
        }
    }

    // Update element text content safely
    function updateElement(id, value) {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = value;
        }
    }

    // Update progress bar
    function updateBar(barId, current, max) {
        const bar = document.getElementById(barId);
        if (!bar) return;

        const fill = bar.querySelector('.bar-fill');
        if (!fill) return;

        const percent = Math.min(100, Math.max(0, (current / max) * 100));
        fill.style.width = percent + '%';

        // Add visual feedback based on completion
        if (percent >= 100) {
            fill.style.background = 'var(--success)';
        } else if (percent >= 75) {
            fill.style.background = 'var(--warning)';
        } else {
            fill.style.background = 'var(--accent-color)';
        }
    }

    // Add construction points to a project
    function addCP(projectId, amount) {
        try {
            const label = document.getElementById(projectId + '-label');
            if (!label) return;

            const text = label.textContent.trim();
            // Parse "60/100 CP" format
            const match = text.match(/(\d+)\s*\/\s*(\d+)\s*CP/);

            if (!match) {
                console.warn(`Could not parse CP format for: ${text}`);
                return;
            }

            let current = safeParseInt(match[1]);
            const max = safeParseInt(match[2]);

            current = Math.min(current + amount, max);

            label.textContent = `${current}/${max} CP`;
            updateBar(projectId + '-bar', current, max);

            // Save project state
            projectState[projectId] = { current, max };
            debouncedAutosave();

            // Show feedback if project is complete
            if (current >= max) {
                showNotification(`${projectId} construction complete!`);
            }
        } catch (error) {
            console.error('Error adding CP:', error);
        }
    }

    // Show notification (simple implementation)
    function showNotification(message) {
        console.log('Notification:', message);
        // Could be enhanced with a toast notification UI
    }

    // Save data to localStorage
    function saveData() {
        try {
            const formData = new FormData(document.getElementById('wealth-calculator-form'));
            const data = {
                timestamp: new Date().toISOString(),
                colonyName: document.getElementById('colony-name')?.value || '',
                biome: document.getElementById('biome')?.value || '',
                techLevel: document.getElementById('tech-level-display')?.value || '',
                wealthInputs: Object.fromEntries(formData),
                projects: projectState,
                resources: getResourceData()
            };
            localStorage.setItem(AUTOSAVE_KEY, JSON.stringify(data));
            console.log('Data autosaved at', new Date().toLocaleTimeString());
        } catch (error) {
            console.error('Error saving data:', error);
        }
    }

    // Load data from localStorage
    function loadData() {
        try {
            const savedData = localStorage.getItem(AUTOSAVE_KEY);
            if (!savedData) return false;

            const data = JSON.parse(savedData);

            // Restore basic info
            if (data.colonyName) document.getElementById('colony-name').value = data.colonyName;
            if (data.biome) document.getElementById('biome').value = data.biome;
            if (data.techLevel) document.getElementById('tech-level-display').value = data.techLevel;

            // Restore wealth inputs
            if (data.wealthInputs) {
                Object.entries(data.wealthInputs).forEach(([key, value]) => {
                    const input = document.getElementById(key);
                    if (input) input.value = value;
                });
            }

            // Restore projects
            if (data.projects) {
                projectState = data.projects;
                Object.entries(data.projects).forEach(([projectId, state]) => {
                    const label = document.getElementById(projectId + '-label');
                    if (label) {
                        label.textContent = `${state.current}/${state.max} CP`;
                        updateBar(projectId + '-bar', state.current, state.max);
                    }
                });
            }

            // Restore resources
            if (data.resources) {
                setResourceData(data.resources);
            }

            console.log('Data loaded from', new Date(data.timestamp).toLocaleString());
            return true;
        } catch (error) {
            console.error('Error loading data:', error);
            return false;
        }
    }

    // Get resource input values
    function getResourceData() {
        const resources = {};
        document.querySelectorAll('.resource-box input[type="number"]').forEach(input => {
            if (input.id) {
                resources[input.id] = input.value;
            }
        });
        return resources;
    }

    // Set resource input values
    function setResourceData(resources) {
        Object.entries(resources).forEach(([id, value]) => {
            const input = document.getElementById(id);
            if (input) input.value = value;
        });
    }

    // Debounced autosave
    const debouncedAutosave = debounce(saveData, AUTOSAVE_DEBOUNCE_MS);

    // ========================================
    // Defense Rating Calculator
    // ========================================

    function calculateDefenseRating() {
        // Calculate total defense points from all defenses (accounting for quantities)
        const totalDefense = colonyDefenses.reduce((sum, defense) => {
            const quantity = defense.quantity || 1;
            return sum + ((defense.defensePoints || 0) * quantity);
        }, 0);

        // Initialize current pool if not set or if max changed
        if (currentDefensePool === 0 || currentDefensePool > totalDefense) {
            currentDefensePool = totalDefense;
        }

        // Update current and max displays
        updateElement('defense-rating-current', currentDefensePool);
        updateElement('defense-rating-max', totalDefense);

        // Create breakdown text
        let breakdown = '';
        if (colonyDefenses.length === 0) {
            breakdown = 'No defenses built';
        } else {
            // Build breakdown text with quantities
            const parts = colonyDefenses.map(defense => {
                const quantity = defense.quantity || 1;
                const total = (defense.defensePoints || 0) * quantity;
                if (quantity > 1) {
                    return `${quantity}× ${defense.name} (+${total})`;
                } else {
                    return `${defense.name} (+${total})`;
                }
            });
            breakdown = parts.join(' • ');
        }

        updateElement('defense-breakdown', breakdown);

        // Update visual indicators and recommendations
        updateDefenseVisuals(totalDefense);
        updateDefenseRecommendation(totalDefense);
    }

    // Update visual adequacy indicators
    function updateDefenseVisuals(currentDefense) {
        const recommended = getRecommendedDefense();
        const percent = recommended > 0 ? Math.min(100, (currentDefense / recommended) * 100) : 0;

        const bar = document.getElementById('defense-adequacy-bar');
        const status = document.getElementById('defense-status');

        if (!bar || !status) return;

        // Update progress bar width
        bar.style.width = percent + '%';

        // Update colors and status text based on adequacy
        if (currentDefense === 0) {
            bar.style.background = 'var(--error)';
            status.style.color = 'var(--error)';
            status.textContent = '❌ No Defenses';
        } else if (percent >= 100) {
            bar.style.background = 'var(--success)';
            status.style.color = 'var(--success)';
            status.textContent = '✅ Well-Defended';
        } else if (percent >= 80) {
            bar.style.background = 'var(--warning)';
            status.style.color = 'var(--warning)';
            status.textContent = '✓ Adequately Defended';
        } else if (percent >= 50) {
            bar.style.background = '#ff8800';
            status.style.color = '#ff8800';
            status.textContent = '⚠️ Under-Defended';
        } else {
            bar.style.background = 'var(--error)';
            status.style.color = 'var(--error)';
            status.textContent = '❌ Critically Under-Defended';
        }
    }

    // Update defense recommendation
    function updateDefenseRecommendation(currentDefense) {
        const recommended = getRecommendedDefense();
        const elem = document.getElementById('defense-recommendation');

        if (!elem) return;

        if (currentDefense === 0) {
            elem.textContent = '💡 Build defenses to protect your colony';
            elem.style.background = 'rgba(150,50,50,0.3)';
        } else if (currentDefense >= recommended) {
            elem.textContent = '✅ Your defenses are adequate for your wealth tier';
            elem.style.background = 'rgba(50,150,50,0.3)';
        } else {
            const needed = recommended - currentDefense;
            const tierName = getCurrentWealthTierName();
            elem.textContent = `💡 Add ${needed} more defense point${needed > 1 ? 's' : ''} for ${tierName} tier`;
            elem.style.background = 'rgba(150,100,50,0.3)';
        }
    }

    // Get recommended defense for current wealth
    function getRecommendedDefense() {
        const wealthElement = document.getElementById('wealth-score-display');
        if (!wealthElement) return 5;

        const totalWealth = safeParseInt(wealthElement.textContent);

        // Defense requirements by wealth tier
        if (totalWealth >= 100) return 50;  // Powerhouse
        if (totalWealth >= 50) return 30;   // Prosperous
        if (totalWealth >= 25) return 20;   // Established
        if (totalWealth >= 10) return 10;   // Stable
        return 5;                            // Struggling
    }

    // Get current wealth tier name
    function getCurrentWealthTierName() {
        const tierElement = document.getElementById('colony-tier');
        return tierElement ? tierElement.textContent : 'Unknown';
    }

    // Spend defense points (during combat)
    function spendDefensePoint(amount = 1) {
        if (currentDefensePool >= amount) {
            currentDefensePool -= amount;
            updateElement('defense-rating-current', currentDefensePool);
            debouncedAutosave();
            showNotification(`Spent ${amount} defense point(s)`);
        } else {
            showNotification('Not enough defense points!');
        }
    }

    // Reset defense pool to maximum
    function resetDefensePool() {
        const maxDefense = colonyDefenses.reduce((sum, defense) => {
            const quantity = defense.quantity || 1;
            return sum + ((defense.defensePoints || 0) * quantity);
        }, 0);
        currentDefensePool = maxDefense;
        updateElement('defense-rating-current', currentDefensePool);
        updateElement('defense-rating-max', maxDefense);
        debouncedAutosave();
        showNotification('Defense pool restored');
    }

    // ========================================
    // Facility and Defense Management
    // ========================================

    // Populate facility dropdown
    function populateFacilityDropdown() {
        const select = document.getElementById('facility-select');
        if (!buildingsData || !select) return;

        // Clear existing options (except first)
        while (select.options.length > 1) {
            select.remove(1);
        }

        // Add facilities
        if (buildingsData.facilities) {
            buildingsData.facilities.forEach(facility => {
                const option = document.createElement('option');
                option.value = facility.id;
                const techReq = facility.tech ? ` [${RimWorldData.formatTech(facility.tech)}]` : '';
                option.textContent = `${facility.name} (${facility.wealthPoints}pts, ${facility.cp}CP)${techReq}`;
                select.appendChild(option);
            });
        }
    }

    // Populate defense dropdown
    function populateDefenseDropdown() {
        const select = document.getElementById('defense-select');
        if (!buildingsData || !select) return;

        // Clear existing options
        while (select.options.length > 1) {
            select.remove(1);
        }

        // Add defenses
        if (buildingsData.defenses) {
            buildingsData.defenses.forEach(defense => {
                const option = document.createElement('option');
                option.value = defense.id;
                const techReq = defense.tech ? ` [${RimWorldData.formatTech(defense.tech)}]` : '';
                // Show defense points, wealth points, and CP
                option.textContent = `${defense.name} (+${defense.defensePoints} DEF, ${defense.wealthPoints}pts, ${defense.cp}CP)${techReq}`;
                select.appendChild(option);
            });
        }
    }

    // Add facility to colony
    function addFacility() {
        const select = document.getElementById('facility-select');
        if (!select.value) return;

        const facility = RimWorldData.getItemById(buildingsData, 'facilities', select.value);
        if (!facility) return;

        // Add to colony list
        const facilityWithId = {
            ...facility,
            uniqueId: Date.now() + Math.random() // Unique identifier
        };
        colonyFacilities.push(facilityWithId);

        // Render facility card
        renderFacilityList();
        select.value = ''; // Reset dropdown

        // Recalculate wealth
        calculateWealth();
    }

    // Remove facility from colony
    function removeFacility(uniqueId) {
        colonyFacilities = colonyFacilities.filter(f => f.uniqueId !== uniqueId);
        renderFacilityList();

        // Recalculate wealth
        calculateWealth();
        debouncedAutosave();
    }

    // Render facility list
    function renderFacilityList() {
        const container = document.getElementById('facility-list');
        if (!container) return;

        container.innerHTML = '';

        if (colonyFacilities.length === 0) {
            container.innerHTML = '<p style="color: #888; font-style: italic;">No facilities built yet</p>';
            return;
        }

        colonyFacilities.forEach(facility => {
            const card = document.createElement('div');
            card.style.cssText = 'padding: 12px; background: rgba(100,100,100,0.2); border-radius: 5px; border-left: 3px solid var(--success);';

            card.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: start;">
                    <div style="flex: 1;">
                        <strong>${facility.name}</strong>
                        <div style="font-size: 0.85em; color: #aaa; margin-top: 4px;">
                            ${facility.effect}
                        </div>
                        <div style="font-size: 0.8em; margin-top: 6px;">
                            <span style="color: var(--warning);">Wealth: ${facility.wealthPoints}pts</span> |
                            <span>CP: ${facility.cp}</span> |
                            <span>Materials: ${RimWorldData.formatMaterials(facility.materials)}</span>
                        </div>
                    </div>
                    <button onclick="removeFacility(${facility.uniqueId})" 
                            style="padding: 4px 8px; background: var(--error); border: none; border-radius: 3px; cursor: pointer; font-size: 0.85em;">
                        Remove
                    </button>
                </div>
            `;
            container.appendChild(card);
        });
    }

    // Add defense to colony
    function addDefense() {
        const select = document.getElementById('defense-select');
        if (!select.value) return;

        const defense = RimWorldData.getItemById(buildingsData, 'defenses', select.value);
        if (!defense) return;

        // Check if we already have this defense type
        const existing = colonyDefenses.find(d => d.id === defense.id);

        if (existing) {
            // Increment quantity of existing defense
            existing.quantity = (existing.quantity || 1) + 1;
        } else {
            // Add new defense with quantity = 1
            const defenseWithId = {
                ...defense,
                uniqueId: Date.now() + Math.random(),
                quantity: 1
            };
            colonyDefenses.push(defenseWithId);
        }

        // Render defense card
        renderDefenseList();
        select.value = ''; // Reset dropdown

        // Recalculate wealth and defense rating
        calculateWealth();
        calculateDefenseRating();
    }

    // Remove defense from colony (or decrease quantity)
    function removeDefense(uniqueId, removeAll = false) {
        const defense = colonyDefenses.find(d => d.uniqueId === uniqueId);

        if (!defense) return;

        if (removeAll || !defense.quantity || defense.quantity <= 1) {
            // Remove completely
            colonyDefenses = colonyDefenses.filter(d => d.uniqueId !== uniqueId);
        } else {
            // Decrease quantity
            defense.quantity--;
        }

        renderDefenseList();

        // Recalculate wealth and defense rating
        calculateWealth();
        calculateDefenseRating();
        debouncedAutosave();
    }

    // Increase defense quantity
    function increaseDefenseQuantity(uniqueId) {
        const defense = colonyDefenses.find(d => d.uniqueId === uniqueId);
        if (defense) {
            defense.quantity = (defense.quantity || 1) + 1;
            renderDefenseList();
            calculateWealth();
            calculateDefenseRating();
            debouncedAutosave();
        }
    }

    // Render defense list
    function renderDefenseList() {
        const container = document.getElementById('defense-list');
        if (!container) return;

        container.innerHTML = '';

        if (colonyDefenses.length === 0) {
            container.innerHTML = '<p style="color: #888; font-style: italic;">No defenses built yet</p>';
            return;
        }

        colonyDefenses.forEach(defense => {
            const card = document.createElement('div');
            card.style.cssText = 'padding: 12px; background: rgba(100,100,100,0.2); border-radius: 5px; border-left: 3px solid var(--warning);';

            const quantity = defense.quantity || 1;
            const hpDisplay = defense.hp > 0 ? `HP: ${defense.hp} | ` : '';
            const damageDisplay = defense.damage ? `Damage: ${defense.damage} | ` : '';
            const totalDefense = (defense.defensePoints || 0) * quantity;
            const totalWealth = (defense.wealthPoints || 0) * quantity;

            card.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: start;">
                    <div style="flex: 1;">
                        <strong>${defense.name}</strong>
                        ${quantity > 1 ? `<span style="color: var(--accent-color); font-weight: bold;"> × ${quantity}</span>` : ''}
                        <div style="font-size: 0.85em; color: #aaa; margin-top: 4px;">
                            ${defense.notes || 'Defensive structure'}
                        </div>
                        <div style="font-size: 0.8em; margin-top: 6px;">
                            ${hpDisplay}${damageDisplay}
                            <span style="color: var(--success);">Defense: +${totalDefense}</span> |
                            <span style="color: var(--warning);">Wealth: ${totalWealth}pts</span>
                        </div>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 4px;">
                        <div style="display: flex; gap: 4px;">
                            <button onclick="increaseDefenseQuantity(${defense.uniqueId})" 
                                    style="padding: 2px 6px; background: var(--success); border: none; border-radius: 2px; cursor: pointer; font-size: 0.8em;">
                                +
                            </button>
                            <button onclick="removeDefense(${defense.uniqueId})" 
                                    style="padding: 2px 6px; background: var(--warning); border: none; border-radius: 2px; cursor: pointer; font-size: 0.8em;">
                                −
                            </button>
                        </div>
                        <button onclick="removeDefense(${defense.uniqueId}, true)" 
                                style="padding: 4px 8px; background: var(--error); border: none; border-radius: 3px; cursor: pointer; font-size: 0.85em;">
                            Remove All
                        </button>
                    </div>
                </div>
            `;
            container.appendChild(card);
        });
    }

    // Display tech tree from game data
    function displayTechTree() {
        const container = document.getElementById('tech-categories');
        if (!gameData || !gameData.techCategories || !container) return;

        container.innerHTML = '';

        const techOrder = ['neolithic', 'medieval', 'industrial', 'spacer'];

        techOrder.forEach(techKey => {
            const tech = gameData.techCategories[techKey];
            if (!tech) return;

            const card = document.createElement('div');
            card.style.cssText = 'padding: 15px; background: rgba(80,80,120,0.2); border-radius: 8px; border-top: 3px solid var(--accent-color);';

            const description = tech.description || 'No description';
            const examples = tech.examples ? `<div style="font-size: 0.75em; color: #888; margin-top: 8px;"><em>Examples: ${tech.examples}</em></div>` : '';

            card.innerHTML = `
                <div style="font-size: 1.1em; font-weight: bold; color: var(--accent-color); text-transform: capitalize;">
                    ${techKey}
                </div>
                <div style="font-size: 0.9em; color: #aaa; margin-top: 6px;">
                    ${description}
                </div>
                <div style="margin-top: 10px; font-size: 0.85em;">
                    <div>Max Level: <strong>${tech.maxLevel}</strong></div>
                    <div>RP Cost/Level: <strong>${tech.researchCost}</strong></div>
                </div>
                ${examples}
            `;

            container.appendChild(card);
        });
    }

    // Initialization
    async function init() {
        console.log('Initializing Base Sheet Manager...');

        // Load game data first
        await loadGameData();

        // Try to load saved data
        const dataLoaded = loadData();

        // Calculate initial wealth (will use loaded or default values)
        calculateWealth();

        // Attach input listeners for autosave and recalculation
        const wealthForm = document.getElementById('wealth-calculator-form');
        if (wealthForm) {
            wealthForm.addEventListener('input', (e) => {
                if (e.target.tagName === 'INPUT') {
                    calculateWealth();
                }
            });
        }

        // Attach listeners to other inputs for autosave
        ['colony-name', 'biome', 'tech-level-display'].forEach(id => {
            const input = document.getElementById(id);
            if (input) {
                input.addEventListener('input', debouncedAutosave);
            }
        });

        // Attach listeners to resource inputs
        document.querySelectorAll('.resource-box input[type="number"]').forEach(input => {
            input.addEventListener('input', debouncedAutosave);
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + S to manually save
            if ((e.ctrlKey || e.metaKey) && e.key === 's') {
                e.preventDefault();
                saveData();
                showNotification('Data saved manually');
            }
        });

        // Populate facility and defense dropdowns
        populateFacilityDropdown();
        populateDefenseDropdown();

        // Display tech tree
        displayTechTree();

        // Initialize facility and defense lists
        renderFacilityList();
        renderDefenseList();

        // Calculate initial defense rating
        calculateDefenseRating();

        console.log('Base Sheet Manager initialized!', dataLoaded ? '(Data loaded)' : '(Default values)');
    }

    // Public API
    return {
        init,
        calculateWealth,
        updateBar,
        addCP,
        saveData,
        loadData,
        addFacility,
        removeFacility,
        addDefense,
        removeDefense,
        increaseDefenseQuantity,
        spendDefensePoint,
        resetDefensePool
    };
})();

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', BaseSheetManager.init);
} else {
    BaseSheetManager.init();
}

// Expose helper functions to global scope for inline onclick handlers
window.addCP = BaseSheetManager.addCP;
window.calculateWealth = BaseSheetManager.calculateWealth;
window.addFacility = BaseSheetManager.addFacility;
window.removeFacility = BaseSheetManager.removeFacility;
window.addDefense = BaseSheetManager.addDefense;
window.removeDefense = BaseSheetManager.removeDefense;
window.increaseDefenseQuantity = BaseSheetManager.increaseDefenseQuantity;
window.spendDefensePoint = BaseSheetManager.spendDefensePoint;
window.resetDefensePool = BaseSheetManager.resetDefensePool;
