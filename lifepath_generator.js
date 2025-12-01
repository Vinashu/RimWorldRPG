const fs = require('fs');
const path = require('path');

// --- Load Data ---
const dataPath = path.join(__dirname, 'data', 'lifepath.json');
const rawData = fs.readFileSync(dataPath);
const DATA = JSON.parse(rawData);

// --- Classes ---
class Character {
    constructor() {
        this.attributes = {};
        DATA.attributes.forEach(attr => this.attributes[attr] = 0);
        this.skills = {};
        this.traits = [];
        this.history = [];
        this.age = 18;
    }

    addSkill(skill, amount = 1) {
        if (!this.skills[skill]) {
            this.skills[skill] = 0;
        }
        this.skills[skill] += amount;
        if (this.skills[skill] > 3) this.skills[skill] = 3;
    }

    rollCheck(attribute) {
        const d10_1 = Math.floor(Math.random() * 10) + 1;
        const d10_2 = Math.floor(Math.random() * 10) + 1;
        return d10_1 + d10_2 + (this.attributes[attribute] || 0);
    }

    toString() {
        let s = `=== Colonist (Age ${this.age}) ===\n`;
        s += "Attributes: " + Object.entries(this.attributes).map(([k, v]) => `${k}: ${v >= 0 ? '+' : ''}${v}`).join(", ") + "\n";
        s += "Skills: " + Object.entries(this.skills).map(([k, v]) => `${k}: ${v}`).join(", ") + "\n";
        s += "Traits: " + this.traits.join(", ") + "\n";
        s += "History:\n";
        this.history.forEach(h => s += `  - ${h}\n`);
        return s;
    }
}

// --- Logic ---
function generateCharacter() {
    const char = new Character();

    // 1. Attributes
    const values = [2, 1, 0, -1];
    // Shuffle
    for (let i = values.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [values[i], values[j]] = [values[j], values[i]];
    }
    DATA.attributes.forEach((attr, i) => char.attributes[attr] = values[i]);

    // 2. Childhood
    const roll = Math.floor(Math.random() * DATA.childhoods.length);
    const childhood = DATA.childhoods[roll];
    char.history.push(`Childhood: ${childhood.name}`);
    char.traits.push(childhood.trait);

    for (const [key, val] of Object.entries(childhood.bonuses)) {
        if (DATA.attributes.includes(key)) {
            char.attributes[key] += val;
        } else {
            char.addSkill(key, val);
        }
    }

    // 3. Terms
    const numTerms = Math.floor(Math.random() * 4) + 1;
    const careerNames = Object.keys(DATA.careers);

    for (let i = 0; i < numTerms; i++) {
        char.age += 4;
        const careerName = careerNames[Math.floor(Math.random() * careerNames.length)];
        const career = DATA.careers[careerName];
        char.history.push(`Term: ${careerName}`);

        // Survival
        const survRoll = char.rollCheck(career.survival_attr);
        if (survRoll >= 12) {
            char.history.push(`  > Survived (Roll ${survRoll})`);
        } else {
            char.history.push(`  > MISHAP (Roll ${survRoll}): Injured/Scarred`);
            char.traits.push("Scarred");
        }

        // Skills (Pick 2 random)
        const shuffledSkills = [...career.skills].sort(() => 0.5 - Math.random());
        char.addSkill(shuffledSkills[0]);
        char.addSkill(shuffledSkills[1]);

        // Event (d10)
        const eventRoll = Math.floor(Math.random() * 10) + 1;
        const matchedEvent = matchEvent(career.events, eventRoll);
        const resolvedEvent = resolveEventStage(matchedEvent, careerName);

        char.history.push(`  > Event (Roll ${eventRoll}): ${resolvedEvent.name || matchedEvent.name} -> ${resolvedEvent.effect || matchedEvent.effect}`);

        if (resolvedEvent.trait && !char.traits.includes(resolvedEvent.trait)) {
            char.traits.push(resolvedEvent.trait);
        }

        if (resolvedEvent.skill) {
            char.addSkill(resolvedEvent.skill, resolvedEvent.skillGain || 1);
        }
    }

    return char;
}

function matchEvent(events, roll) {
    return events.find(e => {
        if (typeof e.roll === "number" && e.roll === roll) return true;
        if (Array.isArray(e.rolls) && e.rolls.includes(roll)) return true;
        if (Array.isArray(e.range) && roll >= e.range[0] && roll <= e.range[1]) return true;
        return false;
    }) || events.find(e => e.default);
}

const eventCounters = {};

function resolveEventStage(event, careerName) {
    if (!event.stages || event.stages.length === 0) return event;

    const key = `${careerName}:${event.id || event.name}`;
    const count = eventCounters[key] || 0;
    const stageIndex = Math.min(count, event.stages.length - 1);
    eventCounters[key] = count + 1;

    return event.stages[stageIndex];
}

// --- Run ---
if (require.main === module) {
    console.log(generateCharacter().toString());
}
