/**
 * RimWorld RPG Character Sheet Manager
 * Handles HP calculations, skill modifiers, and equipment management
 */

// ==========================================
// Character Sheet Equipment Manager
// ==========================================
let weaponsData = null;
let armorData = null;

function updateHP() {
    const vigor = parseInt(document.getElementById('attr-vigor').value || 0);
    const maxHP = 15 + (vigor * 2);
    document.getElementById('max-hp').innerText = maxHP;
    // Assume current HP is full on Vigor change
    document.getElementById('current-hp').innerText = maxHP;
    document.getElementById('hp-bar').style.width = '100%';
}

function updateSkillMod(input) {
    const points = parseInt(input.value || 0);
    const modifier = Math.floor(points / 10);
    const modSpan = input.nextElementSibling;
    modSpan.innerText = '+' + modifier;
}

// Load equipment data and populate dropdowns
async function loadEquipmentData() {
    try {
        console.log('[Character Sheet] Loading equipment data...');

        // Load weapons and armor data
        weaponsData = await RimWorldData.load('weapons.json');
        armorData = await RimWorldData.load('armor.json');

        // Populate weapon dropdown
        populateWeaponDropdown();

        // Populate armor dropdown
        populateArmorDropdown();

        console.log('[Character Sheet] Equipment data loaded successfully');
    } catch (error) {
        console.error('[Character Sheet] Failed to load equipment data:', error);
        alert('Warning: Could not load equipment data. Make sure the data files are accessible.');
    }
}

function populateWeaponDropdown() {
    const select = document.getElementById('weapon-select');
    if (!weaponsData || !select) return;

    // Clear existing options (except the first "Select" option)
    while (select.options.length > 1) {
        select.remove(1);
    }

    // Add melee weapons
    if (weaponsData.melee) {
        const meleeGroup = document.createElement('optgroup');
        meleeGroup.label = 'Melee Weapons';
        weaponsData.melee.forEach(weapon => {
            const option = document.createElement('option');
            option.value = `melee:${weapon.id}`;
            option.textContent = `${weapon.name} (${weapon.damage} dmg, ${weapon.ap} AP)`;
            meleeGroup.appendChild(option);
        });
        select.appendChild(meleeGroup);
    }

    // Add ranged weapons
    if (weaponsData.ranged) {
        const rangedGroup = document.createElement('optgroup');
        rangedGroup.label = 'Ranged Weapons';
        weaponsData.ranged.forEach(weapon => {
            const option = document.createElement('option');
            option.value = `ranged:${weapon.id}`;
            option.textContent = `${weapon.name} (${weapon.damage} dmg, ${weapon.band})`;
            rangedGroup.appendChild(option);
        });
        select.appendChild(rangedGroup);
    }

    // Add grenades
    if (weaponsData.grenades) {
        const grenadeGroup = document.createElement('optgroup');
        grenadeGroup.label = 'Grenades';
        weaponsData.grenades.forEach(weapon => {
            const option = document.createElement('option');
            option.value = `grenades:${weapon.id}`;
            option.textContent = `${weapon.name} (${weapon.damage} dmg, ${weapon.area})`;
            grenadeGroup.appendChild(option);
        });
        select.appendChild(grenadeGroup);
    }
}

function populateArmorDropdown() {
    const select = document.getElementById('armor-select');
    if (!armorData || !select) return;

    // Clear existing options
    while (select.options.length > 1) {
        select.remove(1);
    }

    // Add armor pieces
    if (armorData.apparel) {
        armorData.apparel.forEach(armor => {
            const option = document.createElement('option');
            option.value = armor.id;
            option.textContent = `${armor.name} (Armor ${armor.rating})`;
            select.appendChild(option);
        });
    }
}

function updateWeaponStats() {
    const select = document.getElementById('weapon-select');
    const statsDiv = document.getElementById('weapon-stats');

    if (!select.value) {
        statsDiv.style.display = 'none';
        return;
    }

    const [category, id] = select.value.split(':');
    const weapon = RimWorldData.getItemById(weaponsData, category, id);

    if (!weapon) {
        console.error('Weapon not found:', category, id);
        return;
    }

    // Update stats display
    document.getElementById('weapon-damage').textContent = weapon.damage;
    document.getElementById('weapon-ap').textContent = weapon.ap;
    document.getElementById('weapon-band').textContent = weapon.band || 'Melee';
    document.getElementById('weapon-value').textContent = weapon.marketValue;
    document.getElementById('weapon-tech').textContent = RimWorldData.formatTech(weapon.tech);
    document.getElementById('weapon-materials').textContent = RimWorldData.formatMaterials(weapon.materials);

    const notesDiv = document.getElementById('weapon-notes');
    if (weapon.notes) {
        notesDiv.textContent = weapon.notes;
        notesDiv.style.display = 'block';
    } else {
        notesDiv.style.display = 'none';
    }

    statsDiv.style.display = 'block';
}

function updateArmorStats() {
    const select = document.getElementById('armor-select');
    const statsDiv = document.getElementById('armor-stats');

    if (!select.value) {
        statsDiv.style.display = 'none';
        return;
    }

    const armor = RimWorldData.getItemById(armorData, 'apparel', select.value);

    if (!armor) {
        console.error('Armor not found:', select.value);
        return;
    }

    // Update stats display
    document.getElementById('armor-rating').textContent = armor.rating;
    document.getElementById('armor-speed').textContent = armor.speedPenalty || 0;
    document.getElementById('armor-coverage').textContent = armor.coverage || 'Body';
    document.getElementById('armor-value').textContent = armor.marketValue;
    document.getElementById('armor-tech').textContent = RimWorldData.formatTech(armor.tech);
    document.getElementById('armor-materials').textContent = RimWorldData.formatMaterials(armor.materials);

    // Display bonuses if any
    const bonusDiv = document.getElementById('armor-bonus');
    if (armor.bonus) {
        const bonusText = Object.entries(armor.bonus)
            .map(([key, value]) => `+${value} ${key}`)
            .join(', ');
        bonusDiv.textContent = `Bonus: ${bonusText}`;
        bonusDiv.style.display = 'block';
    } else {
        bonusDiv.style.display = 'none';
    }

    // Display notes
    const notesDiv = document.getElementById('armor-notes');
    if (armor.notes) {
        notesDiv.textContent = armor.notes;
        notesDiv.style.display = 'block';
    } else {
        notesDiv.style.display = 'none';
    }

    // Display shield if applicable
    if (armor.shield) {
        const shieldNote = `Shield: ${armor.shield} HP (Recharges)`;
        notesDiv.textContent = (armor.notes ? armor.notes + '. ' : '') + shieldNote;
        notesDiv.style.display = 'block';
    }

    statsDiv.style.display = 'block';
}

// Initialize on load
window.onload = async function () {
    updateHP();
    // Update all skill modifiers
    document.querySelectorAll('.skill-points').forEach(input => {
        updateSkillMod(input);
    });

    // Load equipment data
    await loadEquipmentData();
};
