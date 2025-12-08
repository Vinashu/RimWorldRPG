#!/usr/bin/env node

/**
 * Data Validation Script for RimWorld RPG JSON Files
 * Validates all JSON files in the /data directory
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data');
const ERRORS = [];
const WARNINGS = [];

// Color codes for terminal output
const colors = {
    reset: '\x1b[0m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m'
};

function log(message, color = 'reset') {
    console.log(`${colors[color]}${message}${colors.reset}`);
}

function error(message) {
    ERRORS.push(message);
    log(`✗ ERROR: ${message}`, 'red');
}

function warn(message) {
    WARNINGS.push(message);
    log(`⚠ WARNING: ${message}`, 'yellow');
}

function success(message) {
    log(`✓ ${message}`, 'green');
}

function validateJSON(filePath) {
    const fileName = path.basename(filePath);
    log(`\nValidating ${fileName}...`, 'blue');

    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const data = JSON.parse(content);
        success(`${fileName} is valid JSON`);
        return data;
    } catch (err) {
        error(`${fileName} has invalid JSON: ${err.message}`);
        return null;
    }
}

function checkForDuplicateIds(data, fileName, category) {
    if (!data[category] || !Array.isArray(data[category])) {
        return;
    }

    const ids = new Set();
    const duplicates = [];

    data[category].forEach((item, index) => {
        if (!item.id) {
            warn(`${fileName}: ${category}[${index}] is missing 'id' field`);
            return;
        }

        if (ids.has(item.id)) {
            duplicates.push(item.id);
        } else {
            ids.add(item.id);
        }
    });

    if (duplicates.length > 0) {
        error(`${fileName}: Duplicate IDs in ${category}: ${duplicates.join(', ')}`);
    } else {
        success(`${fileName}: No duplicate IDs in ${category}`);
    }
}

function validateWeapons(data) {
    const requiredFields = ['id', 'name', 'damage', 'ap', 'marketValue'];

    ['melee', 'ranged', 'grenades'].forEach(category => {
        if (!data[category]) {
            warn(`weapons.json: Missing '${category}' category`);
            return;
        }

        checkForDuplicateIds(data, 'weapons.json', category);

        data[category].forEach((weapon, index) => {
            requiredFields.forEach(field => {
                if (weapon[field] === undefined) {
                    warn(`weapons.json: ${category}[${index}] (${weapon.name || 'unnamed'}) missing '${field}'`);
                }
            });
        });
    });
}

function validateArmor(data) {
    if (!data.apparel) {
        error('armor.json: Missing apparel array');
        return;
    }

    checkForDuplicateIds(data, 'armor.json', 'apparel');

    const requiredFields = ['id', 'name', 'rating', 'marketValue'];
    data.apparel.forEach((item, index) => {
        requiredFields.forEach(field => {
            if (item[field] === undefined) {
                warn(`armor.json: apparel[${index}] (${item.name || 'unnamed'}) missing '${field}'`);
            }
        });
    });
}

function validateItems(data) {
    ['medicine', 'drugs', 'bionics', 'utility', 'meals', 'components'].forEach(category => {
        if (data[category]) {
            checkForDuplicateIds(data, 'items.json', category);
        }
    });
}

function validateBuildings(data) {
    ['facilities', 'power', 'defenses'].forEach(category => {
        if (data[category]) {
            checkForDuplicateIds(data, 'buildings.json', category);
        } else {
            warn(`buildings.json: Missing '${category}' category`);
        }
    });
}

function validateBestiary(data) {
    ['animals', 'insects', 'mechanoids', 'humans'].forEach(category => {
        if (data[category]) {
            checkForDuplicateIds(data, 'bestiary.json', category);

            // Check for required attributes
            data[category].forEach((creature, index) => {
                if (!creature.attributes) {
                    warn(`bestiary.json: ${category}[${index}] missing 'attributes'`);
                }
                if (creature.hp === undefined) {
                    warn(`bestiary.json: ${category}[${index}] missing 'hp'`);
                }
            });
        }
    });
}

function validateGameData(data) {
    const requiredSections = ['attributes', 'skills', 'techCategories', 'wealthTiers'];

    requiredSections.forEach(section => {
        if (!data[section]) {
            error(`game_data.json: Missing required section '${section}'`);
        } else {
            success(`game_data.json: Found section '${section}'`);
        }
    });

    // Validate tech categories
    if (data.techCategories) {
        const expectedTechs = ['neolithic', 'medieval', 'industrial', 'spacer'];
        expectedTechs.forEach(tech => {
            if (!data.techCategories[tech]) {
                error(`game_data.json: Missing tech category '${tech}'`);
            }
        });
    }
}

function validateFactions(data) {
    if (!data.factions) {
        error('factions.json: Missing factions array');
        return;
    }

    checkForDuplicateIds(data, 'factions.json', 'factions');

    data.factions.forEach((faction, index) => {
        if (!faction.tech) {
            warn(`factions.json: factions[${index}] (${faction.name}) missing 'tech' field`);
        }
    });
}

// Main validation function
function main() {
    log('\n=== RimWorld RPG Data Validation ===\n', 'blue');

    if (!fs.existsSync(DATA_DIR)) {
        error(`Data directory not found: ${DATA_DIR}`);
        process.exit(1);
    }

    const files = {
        'weapons.json': validateWeapons,
        'armor.json': validateArmor,
        'items.json': validateItems,
        'buildings.json': validateBuildings,
        'bestiary.json': validateBestiary,
        'game_data.json': validateGameData,
        'factions.json': validateFactions
    };

    Object.entries(files).forEach(([fileName, validator]) => {
        const filePath = path.join(DATA_DIR, fileName);

        if (!fs.existsSync(filePath)) {
            error(`File not found: ${fileName}`);
            return;
        }

        const data = validateJSON(filePath);
        if (data && validator) {
            validator(data);
        }
    });

    // Summary
    log('\n=== Validation Summary ===\n', 'blue');
    log(`Errors: ${ERRORS.length}`, ERRORS.length > 0 ? 'red' : 'green');
    log(`Warnings: ${WARNINGS.length}`, WARNINGS.length > 0 ? 'yellow' : 'green');

    if (ERRORS.length === 0 && WARNINGS.length === 0) {
        log('\n🎉 All validations passed!', 'green');
        process.exit(0);
    } else if (ERRORS.length === 0) {
        log('\n✓ Validation passed with warnings', 'yellow');
        process.exit(0);
    } else {
        log('\n✗ Validation failed', 'red');
        process.exit(1);
    }
}

main();
