# Chapter 6: Colony Management

Building a thriving colony requires more than just survival; it requires industry, research, and expansion.

---

## Base Management

The Base is the heart of the game. It has its own stats and resources.

### Resources
We track 5 abstract resource categories:
1.  **Food**: Meals, pemmican, raw meat/veg.
2.  **Textile**: Leather, cloth, wool.
3.  **Ore**: Steel, plasteel, gold.
4.  **Components**: Machinery parts, electronics.
5.  **Medicine**: Herbal meds, glitterworld meds.

### Daily Actions
Players assign Colonists to tasks during the Colony Phase. Roll to determine the outcome.

| Action | Roll | Tier 1 (11-) | Tier 2 (12-16) | Tier 3 (17+) |
| :--- | :--- | :--- | :--- | :--- |
| **Farming** | **Mind + Plants** | **1 Food** | **2 Food, 1 Textile** | **4 Food, 2 Textile** |
| **Animal Husbandry** | **Spirit + Animals** | **1 Food** (Milk/Eggs) | **1 Food, 1 Textile** (Wool) | **2 Food, 2 Textile** OR **+1 Taming** |
| **Hunting** | **Dexterity + Shooting** | **1 Food** | **2 Food, 1 Textile** (Leather) | **4 Food, 2 Textile** |
| **Mining** | **Vigor + Mining** | **1 Ore** | **2 Ore** | **3 Ore, 1 Component** |
| **Cooking** | **Dexterity + Cooking** | Convert **2 Food** -> **2 Meals** | Convert **2 Food** -> **3 Meals** | Convert **2 Food** -> **4 Meals** |
| **Crafting** | **Dexterity + Crafting** | **1 CP** towards Item | **3 CP** towards Item | **5 CP** towards Item |
| **Building** | **Vigor + Construction** | **1 CP** towards Building | **3 CP** towards Building | **5 CP** towards Building |
| **Researching** | **Mind + Intellectual** | **20 RP** | **50 RP** | **100 RP** |
| **Social** | **Spirit + Social** | Maintain Relations | **+1 Relation** | **+2 Relation** or **Trade Bonus** |
| **Healing** | **Mind + Medical** | Tend **1 Wound** | Tend **2 Wounds** | Tend **All Wounds** |
| **Artistic** | **Spirit + Artistic** | **1 CP** towards Art | **3 CP** towards Art | **5 CP** towards Art |

---

## Construction & Infrastructure

Building structures requires **Materials** and **Construction Points (CP)**.
*   **Construction Speed**: A character generates CP equal to their **Construction Skill × 10** per hour.

### Structures
| Building | Materials | CP | Tech Req | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **Wall (Wood)** | 5 Wood | 10 | - | Flammable. |
| **Wall (Stone)** | 5 Stone Blocks | 20 | Medieval 1 | Durable. Fireproof. |
| **Door** | 25 Material | 30 | - | Slows movement if not held open. |
| **Bed** | 45 Wood/Steel | 60 | Neolithic 2 | Rest Effectiveness 100%. |
| **Table (2x2)** | 30 Wood/Steel | 50 | Neolithic 2 | Eating without table: -3 Mood. |
| **Research Bench** | 75 Steel, 25 Wood | 100 | - | Required for research. |
| **Comms Console** | 120 Steel, 4 Comp | 200 | Industrial 3 | Trade with orbital ships. |

### Power
| Building | Materials | CP | Tech Req | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **Wood Generator** | 100 Steel, 2 Comp | 150 | Industrial 1 | Consumes Wood. |
| **Solar Panel** | 100 Steel, 3 Comp | 200 | Industrial 3 | Power only during day. |
| **Battery** | 50 Steel, 2 Comp | 100 | Industrial 2 | Stores power. Explodes if wet. |

### Security & Defense
| Building | Materials | CP | Tech Req | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **Sandbags** | 5 Cloth | 10 | - | Provides Cover. |
| **Barricade** | 10 Wood/Steel | 20 | - | Provides Cover. |
| **Spike Trap** | 45 Material | 40 | - | 10 Dmg to first enemy stepping on it. |
| **Mini-Turret** | 100 Steel, 3 Comp | 250 | Industrial 2 | Auto-fires (Range 25, Dmg 4). |

### Defense Pool
Completed defensive structures add to the **Defense Pool**. During a Raid, players can spend Defense Points to:
*   **Negate an enemy success**.
*   **Reduce damage** taken by a Colonist.
*   **Prevent damage** to a building.

### Cover Mechanics
*   **Partial Cover**: Attacker suffers **Bane**.
*   **Full Cover**: Attacker suffers **Double Bane**.

---

## Research & Technology

Knowledge is power. To craft advanced items or build complex structures, you must first unlock the technology level required.

### The Research Process
1.  **Assign a Researcher**: A character spends an **Action Slot (4 hours)** working at a **Research Bench**.
2.  **Make a Research Check**: `Roll = 2d10 + Mind + Intellectual`
3.  **Determine Outcome**:
    *   **Tier 1 (≤11)**: **20 RP**. Progress is slow.
    *   **Tier 2 (12-16)**: **50 RP**. Steady progress.
    *   **Tier 3 (17+)**: **100 RP**. A breakthrough!

### Tech Categories
*   **Neolithic (Levels 1-4)**: Basic survival. Cost: Level × 100 RP.
*   **Medieval (Levels 1-5)**: Metalworking, smithing. Cost: Level × 300 RP.
*   **Industrial (Levels 1-6)**: Electricity, firearms. Cost: Level × 600 RP.
*   **Spacer (Levels 1-7)**: Bionics, spaceflight. Cost: Level × 1000 RP.

---

## Medical & Health

Long-term survival depends on managing both physical injuries and mental stability.

### Body Parts & Banes
RimWorld-style injuries matter. Track lost body parts and apply the following Banes (stacking).
*   **Missing Hand**: **+1 Bane** to fine motor skills (Shooting, Crafting, Medical). Cannot dual-wield.
*   **Missing Arm**: **+2 Bane** to fine motor skills and heavy lifting. Cannot use two-handed weapons.
*   **Missing Foot**: **+1 Bane** to Movement rolls. **-1 Speed**.
*   **Missing Leg**: **+2 Bane** to Movement rolls. **-2 Speed**. Cannot sprint.
*   **Missing Kidney**: **+1 Bane** to resist poison/disease. Healing rate -25%.
*   **Missing Lung**: **+1 Bane** on stamina rolls. Gain **+1 Stress** after exertion.
*   **Scars (Painful)**: Each scar imposes **-1 Mood**. 3+ scars adds **+1 Bane** to Social.

### Replacements
*   **Peg Leg/Hook Hand**: Cancels "missing" state but keeps **+1 Bane**. Halves Speed penalty.
*   **Prosthetic**: Removes Banes. Ignore Speed penalties.
*   **Bionic**: Removes Banes. Gain **Edge** once per Scene on a roll using that limb.

### Stress & Mental Breaks
Colonists accumulate **Stress** from pushing rolls, witnessing death, starvation, or low Mood.
*   **Panic Check**: Roll `1d6 + Current Stress`.

| Result | Break Type | Effect |
| :--- | :--- | :--- |
| **1-6** | **Anxious** | **-1 Penalty** to all rolls for 1 hour. |
| **7-9** | **Minor Break** | **Sad Wander**: Character leaves to be alone for 1d4 hours. <br> **Binge**: Consumes food/drugs immediately. |
| **10-12** | **Major Break** | **Tantrum**: Destroys furniture or items. <br> **Insulting Spree**: imposes -5 Mood on others. |
| **13+** | **Extreme Break** | **Murderous Rage**: Attacks a specific colonist. <br> **Catatonic**: Unconscious for 1d3 days. |

*   **Relief**: Stress resets to 0 after a full night's sleep in a decent bed or by succeeding on a "Relaxing Socially" check.

---

## Expeditions (Caravans)

Traveling the world map to trade or attack.

### Travel Mechanics
*   **Base Speed**: 1 Hex per day.
*   **Modifiers**: +1 if all have Mounts, -1 if carrying Heavy Load.
*   **Foraging**: Make a **Plants** check daily.
    *   **Success**: Find enough food.
    *   **Failure**: Consume rations. If empty, gain Stress.

### Ambush
*   **Visibility**: Large caravans are easier to spot.
*   **Stealth**: Roll **Animals/Intellectual** to avoid detection.

