/**
 * RimWorld RPG Data Loader
 * Shared module for loading and caching JSON game data
 */

const RimWorldData = (function () {
    'use strict';

    // Configuration
    const DATA_PATH = '../data/';
    const CACHE_DURATION_MS = 5 * 60 * 1000; // 5 minutes

    // State
    const cache = {};
    const loading = {};

    /**
     * Load a JSON data file
     * @param {string} filename - Name of the JSON file (e.g., 'weapons.json')
     * @returns {Promise<Object>} The parsed JSON data
     */
    async function loadData(filename) {
        // Check cache first
        if (cache[filename]) {
            const cached = cache[filename];
            const age = Date.now() - cached.timestamp;

            if (age < CACHE_DURATION_MS) {
                console.log(`[DataLoader] Loaded ${filename} from cache`);
                return cached.data;
            }
        }

        // Check if already loading
        if (loading[filename]) {
            console.log(`[DataLoader] Waiting for ${filename} to load...`);
            return loading[filename];
        }

        // Load from server
        console.log(`[DataLoader] Fetching ${filename}...`);
        const promise = (async () => {
            try {
                const response = await fetch(DATA_PATH + filename);

                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
                }

                const data = await response.json();

                // Cache the data
                cache[filename] = {
                    data: data,
                    timestamp: Date.now()
                };

                console.log(`[DataLoader] Successfully loaded ${filename}`);
                delete loading[filename];
                return data;

            } catch (error) {
                console.error(`[DataLoader] Failed to load ${filename}:`, error);
                delete loading[filename];
                throw error;
            }
        })();

        loading[filename] = promise;
        return promise;
    }

    /**
     * Load multiple data files at once
     * @param {string[]} filenames - Array of filenames to load
     * @returns {Promise<Object>} Object with filename keys and data values
     */
    async function loadMultiple(filenames) {
        const promises = filenames.map(filename =>
            loadData(filename).then(data => ({ filename, data }))
        );

        const results = await Promise.all(promises);

        return results.reduce((acc, { filename, data }) => {
            acc[filename.replace('.json', '')] = data;
            return acc;
        }, {});
    }

    /**
     * Load all game data
     * @returns {Promise<Object>} Object containing all game data
     */
    async function loadAll() {
        const files = [
            'game_data.json',
            'weapons.json',
            'armor.json',
            'items.json',
            'buildings.json',
            'bestiary.json',
            'factions.json'
        ];

        return loadMultiple(files);
    }

    /**
     * Clear the cache
     */
    function clearCache() {
        Object.keys(cache).forEach(key => delete cache[key]);
        console.log('[DataLoader] Cache cleared');
    }

    /**
     * Get item by ID from a category
     * @param {Object} data - The loaded JSON data
     * @param {string} category - Category name (e.g., 'melee', 'apparel')
     * @param {string} id - Item ID
     * @returns {Object|null} The item or null if not found
     */
    function getItemById(data, category, id) {
        if (!data[category]) return null;
        return data[category].find(item => item.id === id) || null;
    }

    /**
     * Search items by name
     * @param {Object} data - The loaded JSON data
     * @param {string} query - Search query
     * @returns {Array} Array of matching items
     */
    function searchItems(data, query) {
        const results = [];
        const lowerQuery = query.toLowerCase();

        Object.keys(data).forEach(category => {
            if (Array.isArray(data[category])) {
                data[category].forEach(item => {
                    if (item.name && item.name.toLowerCase().includes(lowerQuery)) {
                        results.push({
                            ...item,
                            category: category
                        });
                    }
                });
            }
        });

        return results;
    }

    /**
     * Format material requirements as string
     * @param {Object} materials - Materials object
     * @returns {string} Formatted string
     */
    function formatMaterials(materials) {
        if (!materials || Object.keys(materials).length === 0) {
            return 'None';
        }

        return Object.entries(materials)
            .map(([resource, amount]) => `${amount} ${resource}`)
            .join(', ');
    }

    /**
     * Format tech requirement as string
     * @param {Object} tech - Tech object with category and level
     * @returns {string} Formatted string
     */
    function formatTech(tech) {
        if (!tech) return 'None';

        const categoryName = tech.category.charAt(0).toUpperCase() + tech.category.slice(1);
        return `${categoryName} ${tech.level}`;
    }

    /**
     * Get wealth tier from score
     * @param {Object} gameData - The game_data.json object
     * @param {number} score - Wealth score
     * @returns {Object} Wealth tier info
     */
    function getWealthTier(gameData, score) {
        if (!gameData.wealthTiers) return null;

        return gameData.wealthTiers.find(tier =>
            score >= tier.min && score <= tier.max
        );
    }

    // Public API
    return {
        load: loadData,
        loadMultiple: loadMultiple,
        loadAll: loadAll,
        clearCache: clearCache,
        getItemById: getItemById,
        searchItems: searchItems,
        formatMaterials: formatMaterials,
        formatTech: formatTech,
        getWealthTier: getWealthTier
    };
})();

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = RimWorldData;
}
