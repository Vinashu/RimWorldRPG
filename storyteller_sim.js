const fs = require('fs');
const path = require('path');

// --- Load Data ---
const dataPath = path.join(__dirname, 'data', 'events.json');
const rawData = fs.readFileSync(dataPath);
const EVENTS = JSON.parse(rawData);

class Storyteller {
    constructor(name = "Cassandra") {
        this.name = name;
        this.daysPassed = 0;
        this.wealth = 1000;
        this.lastMajorEventDay = -10;
    }

    dailyUpdate() {
        this.daysPassed++;
        this.wealth += Math.floor(Math.random() * 150) + 50;

        console.log(`\n--- Day ${this.daysPassed} (Wealth: ${this.wealth}) ---`);

        let chance = 0;
        if (this.name === "Cassandra") {
            const daysSinceMajor = this.daysPassed - this.lastMajorEventDay;
            chance = daysSinceMajor > 4 ? 80 : 10;
        } else if (this.name === "Randy") {
            chance = 50;
        }

        const roll = Math.floor(Math.random() * 100) + 1;
        if (roll <= chance) {
            this.triggerEvent();
        } else {
            console.log("  No major events. The colony works quietly.");
        }
    }

    triggerEvent() {
        const threatLevel = this.wealth / 1000;
        let eventType = "minor";

        if (threatLevel > 5 && Math.random() < 0.5) eventType = "major";
        if (threatLevel > 10) {
            const r = Math.random();
            if (r < 0.3) eventType = "extreme";
            else if (r < 0.6) eventType = "major";
        }

        const possibleEvents = EVENTS[eventType];
        const eventName = possibleEvents[Math.floor(Math.random() * possibleEvents.length)];

        console.log(`  [ALERT] ${eventType.toUpperCase()} Event: ${eventName}`);

        // Story Die Roll
        const baseDie = Math.floor(Math.random() * 10) + 1;
        const storyDie = Math.floor(Math.random() * 10) + 1;
        console.log(`  > Story Die Roll: [${baseDie}, ${storyDie}]`);

        if (storyDie === 1) {
            console.log("  > TWIST OF FATE! Something unexpected but positive happens.");
            this.wealth += 20; // Bonus wealth or luck
        } else if (storyDie === 10) {
            console.log("  > COMPLICATION! Something dangerous happens.");
            this.wealth -= 20; // Minor setback
        }

        if (eventType === "major" || eventType === "extreme") {
            this.lastMajorEventDay = this.daysPassed;
            const damage = Math.floor(Math.random() * 100);

            // Story Die affects outcome
            let finalDamage = damage;
            if (storyDie === 1) finalDamage = Math.floor(damage / 2);
            if (storyDie === 10) finalDamage = Math.floor(damage * 1.5);

            if (finalDamage > 50) {
                console.log(`  > The colony took damage (${finalDamage}).`);
                this.wealth -= finalDamage * 2;
            } else {
                console.log("  > The colony defended successfully.");
                this.wealth += 50;
            }
        }
    }
}

// --- Run ---
if (require.main === module) {
    const st = new Storyteller("Cassandra");
    console.log(`Simulation Start: ${st.name}`);
    for (let i = 0; i < 15; i++) {
        st.dailyUpdate();
    }
}
