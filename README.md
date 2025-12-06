[![GitHub](./images/RimWorldRPG.png)](https://vinashu.github.io/RimWorldRPG/)
# RimWorld RPG
### *A Tabletop Roleplaying Game of Survival, Drama, and Colony Management*

![Version](https://img.shields.io/badge/version-0.1.4-blue.svg)
![Status](https://img.shields.io/badge/status-in%20development-orange.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

---

> *"You are stranded. You are lightyears from the glitterworlds, on a lawless frontier planet known as a Rimworld. There is no government here, no safety net, and no faster-than-light travel to take you home."*

**RimWorld RPG** is a tabletop roleplaying game adaptation of the hit sci-fi colony sim. It translates the complex simulation of survival, psychology, and combat into a narrative-driven TTRPG experience.

### 🎨 Design Inspirations

This system draws inspiration from several excellent TTRPGs:

*   **[Draw Steel](https://mcdmproductions.com/)** — The "heroic roll" mechanic where rolls always produce meaningful results (Tiers of Success).
*   **[Traveller](https://www.mongoosepublishing.com/collections/traveller-rpgs)** — The Lifepath character generation system that creates deep backstories.
*   **[Alien RPG](https://freeleaguepublishing.com/games/alien/)** — The "push your luck" Stress Die mechanic that adds tension and risk.

## 🚀 Key Features

### 🎲 The Story Die System
A unique **2d10 mechanic** that prioritizes narrative outcomes over binary pass/fail results.
*   **Tiers of Success**: Every roll results in a **Struggle** (success at a cost), **Success**, or **Triumph** (critical success).
*   **The Story Die**: One of your dice (the Red Die) introduces **Twists of Fate** (unexpected boons) or **Complications** (narrative hurdles), keeping the story dynamic.

### 🧬 Lifepath Character Creation
Build deep, flawed, and unique colonists using a **Lifepath System**.
*   **Childhood & Adulthood**: Combine backgrounds like *Vatgrown Soldier* or *Caveworld Tender* to determine stats.
*   **Traits**: Gain gameplay-altering traits like *Cannibal*, *Pyromaniac*, or *Kind*.
*   **Incapable**: Just like the game, some colonists simply *refuse* to do certain work (e.g., "Incapable of Violence").

### 🧠 Survival & Psychology
It's not just about hit points.
*   **Needs System**: Manage Food, Rest, Recreation, Beauty, and Comfort.
*   **Mood & Mental Breaks**: Push your colonists too hard, and they might snap—going on a **Food Binge**, wandering in a **Daze**, or starting a **Social Fight**.

### 🏰 Colony Management
*   **Base Building**: Construct walls, killboxes, freezers, and hospitals.
*   **Work Priorities**: Assign colonists to roles like Warden, Cook, or Hunter.
*   **Research**: Advance through the tech tree from Neolithic bows to Spacer charge rifles.

---

## 📚 Rulebook Contents

The rules are divided into modular chapters:

| Chapter | Description |
| :--- | :--- |
| **[Chapter 1: Core Mechanics](chapters/chapter_01_core.md)** | The Story Die, Tiers of Success, and Time. |
| **[Chapter 2: Character Creation](chapters/chapter_02_character_creation.md)** | The Lifepath system, Attributes, and Traits. |
| **[Chapter 3: Skills & Resolution](chapters/chapter_03_skills_and_checks.md)** | Detailed skill uses and social interactions. |
| **[Chapter 4: Combat & Survival](chapters/chapter_04_combat_and_survival.md)** | Combat rules, Needs, Mood, and Mental Breaks. |
| **[Chapter 5: Equipment & Crafting](chapters/chapter_05_equipment.md)** | Weapons, Armor, and Economy. |
| **[Chapter 6: Colony Management](chapters/chapter_06_colony.md)** | Base building and work priorities. |
| **[Chapter 7: The Rim](chapters/chapter_07_world.md)** | Biomes, Factions, and the Bestiary. |
| **[Chapter 8: The Storyteller](chapters/chapter_08_storyteller.md)** | GM guide for running events and raids. |

> *Note: Some chapters are currently being drafted and linked files may be placeholders.*

---

## 🛠️ Included Tools

This repository includes JavaScript utilities to help run your game:

*   `scripts/build_rulebook.js`: Generates the single HTML rulebook file.
*   `scripts/lifepath_generator.js`: A script to randomly generate colonists with valid attribute combinations.
*   `scripts/storyteller_sim.js`: A simulation tool for the Storyteller system to generate random events and raids.

## 📦 Getting Started

1.  **Clone the repo**:
    ```bash
    git clone https://github.com/Vinashu/RimWorldRPG.git
    cd RimWorldRPG
    ```
2.  **Generate Rulebook**:
    ```bash
    node scripts/build_rulebook.js
    ```
    Open `output/RimWorldRPG_Rulebook.html` in your browser.
3.  **Read Chapter 1**: Start with `chapters/chapter_01_core.md` or the HTML rulebook.
4.  **Create a Colonist**: Run `node scripts/lifepath_generator.js` or follow Chapter 2.
4.  **Survive**: Gather your friends, pick a Storyteller, and try not to become a cowboy hat.

---

## 🤖 AI Assistance Disclosure

This project was developed with the assistance of **Google Antigravity** and various AI agents (primarily **Gemini**). These tools were used to:

*   Refine and organize the rulebook content
*   Check grammar and spelling
*   Ensure consistency across chapters
*   Verify alignment with the source material ([RimWorld Wiki](https://rimworldwiki.com/))

The core game design, creative decisions, and overall vision remain the work of the human author.

---

## 📄 License & Legal

### Code
The software tools and scripts in this repository (`lifepath_generator.js`, `storyteller_sim.js`) are available under the [MIT License](LICENSE).

### Game Content & IP
This project is a fan-made Tabletop RPG adaptation of **RimWorld**.

> Portions of the materials used to create this content/mod are trademarks and/or copyrighted works of Ludeon Studios Inc. All rights reserved by Ludeon. This content/mod is not official and is not endorsed by Ludeon.

This project is **non-commercial** and free to use. It is not affiliated with Ludeon Studios.
