# Chapter 1: Introduction & Core Mechanics

[Art: chapter_art/ch01_intro_core_01.png
Purpose: Chapter opener establishing frontier survival tone and core cast]

## Welcome to the Rim

You are stranded. You are lightyears from the glitterworlds, on a lawless frontier planet known as a **Rimworld**. There is no government here, no safety net, and no faster-than-light travel to take you home.

[Art: flavor/ch01_welcome_rim_01.png
Purpose: Set frontier tone before core mechanics]

### What Is This Game
This is a Tabletop Roleplaying Game (TTRPG), a conversation between friends where you build a story together.

* **The Storyteller (ST)**: The host of the game. They describe the world, play the enemies (Raiders, Mechanoids), and control the flow of the story. They are not your enemy; they are the director of the drama.
* **The Players**: You. You each control a **Colonist** (your character). You make decisions, roll dice, and try to keep your colony alive.

[Art: spot/ch01_what_is_this_game_01.png
Purpose: Visualize the Storyteller + players conversation at the table]

### The Rim Experience
In this game, you will tell the story of your colony's struggle and triumph.
* **Build**: You will construct a base from scratch—bedrooms, freezers, killboxes, and hospitals.
* **Survive**: You will manage starvation, disease, and mental breaks.
* **Defend**: You will fight off raids from savage Tribals, high-tech Pirates, swarming Insects, and cold Mechanoids.
* **Explore**: You will form caravans to trade with neighbors, complete quests, and raid enemy outposts.
* **Escape**: Your ultimate goal is to survive long enough to build a ship and leave this cursed planet... or die trying.

---

## The Core Mechanic: The Story Die System

[Art: icons/ch01_story_die_system_01.png
Purpose: Mark the core resolution system for quick scanning]

When a Colonist attempts an action with an uncertain outcome—shooting a raider, performing surgery, or negotiating a trade—you make a **Colonist Roll (Skill Check)**.

### Colonist Roll

**When it applies**
Use a Colonist Roll for any action with an uncertain outcome.

**How it works**
1. Roll **2d10**: one **Base Die** and one **Story Die (red d10)**.
2. Add the relevant **Attribute**.
3. Add the **Skill Modifier**.
4. Compare the total to the **Tier of Success** table.

[Art: diagrams/ch01_colonist_roll_flow_01.png
Purpose: Flowchart of the Colonist Roll steps and Story Die triggers]

**Edge cases**
* **Skill Modifier** = `Floor(Skill Points / 10)`. See [Chapter 3: Skills & Checks](chapter_03_skills_and_checks.md).
* The Story Die effect applies even if its value is discarded by **Augmented** or **Impaired** rolls.

**Example: Colonist Roll**
Viper fires at a raider with **Dexterity +1** and **Shooting 20 (+2)**. She rolls **Base Die 6** and **Story Die 4**. Total = 6 + 4 + 1 + 2 = **13**, which is a **Tier 2 (Success)**. The Story Die is 4, so no special effect triggers.

[Art: spot/ch01_colonist_roll_example_01.png
Purpose: Visual anchor for the Colonist Roll example (Jax aiming from cover)]

### Tiers of Success

**When it applies**
After any Colonist Roll.

**How it works**
| Result | Tier | Outcome |
| :--- | :--- | :--- |
| **11 or lower** | **Tier 1 (Struggle)** | **Success with a Major Cost**. You hit the raider but deal half damage. You bandage the wound but use 2x Medicine. You make the deal but pay 20% more. |
| **12-16** | **Tier 2 (Success)** | **Standard Success**. You achieve your goal exactly as intended. |
| **17 or higher** | **Tier 3 (Triumph)** | **Critical Success**. You achieve your goal with style. You deal double damage, heal instantly, or get a discount. |

**Edge cases**
* **Double Edge** or **Double Bane** can shift the Tier up or down after you total the roll.
* Combat outcomes are resolved in [Chapter 4: Survival & Combat](chapter_04_combat_and_survival.md). Colony outcomes are resolved in [Chapter 6: Colony Management](chapter_06_colony.md).

**Example: Tier 1 (Struggle)**
Sana tries to pick a lock using **Dexterity +2** and **Crafting 10 (+1)**. She rolls **Base Die 3** and **Story Die 2**. Total = 3 + 2 + 2 + 1 = **8**, a **Tier 1 (Struggle)**. She gets the door open, but the picks break and she takes a minor cut.

### Modifiers

[Art: icons/ch01_modifiers_01.png
Purpose: Flag Edge/Bane rules for quick reference]

**When it applies**
When circumstances help or hinder a roll.

**How it works**
* **Edge (+2)**: Minor advantage.
* **Bane (-2)**: Minor disadvantage.
* **Double Edge**: If you have 2+ sources of Edge, shift the result **up one Tier**.
* **Double Bane**: If you have 2+ sources of Bane, shift the result **down one Tier**.
* **Cancel**: If you have at least one Edge and at least one Bane, cancel one of each. If one side remains, apply **one** Edge or **one** Bane.
* **Augmented (3d10)**: Major advantage. Roll **3d10 (keep highest 2)**. Replaces Edge and Bane.
* **Impaired (3d10)**: Major disadvantage. Roll **3d10 (keep lowest 2)**. Replaces Edge and Bane.

**Edge cases**
* Edge and Bane are additive before you check for Double Edge or Double Bane.
* Augmented or Impaired replaces the standard 2d10 roll and does not stack with Edge or Bane.
* The Story Die effect always applies, even if its value is discarded.
* Cover, lighting, and terrain sources of Edge/Bane are defined in [Chapter 4: Survival & Combat](chapter_04_combat_and_survival.md).

**Example: Edge and Bane**
Marla shoots in darkness (**Bane**) but from high ground (**Edge**). The modifiers cancel. She rolls **Base Die 5** and **Story Die 7**, adds **Dexterity 0** and **Shooting 20 (+2)**. Total = 5 + 7 + 0 + 2 = **14**, a **Tier 2 (Success)**.

**Example: Augmented**
Ivo performs surgery with a glitterworld kit (**Augmented**). He rolls **3d10**: **Base Die 9**, **Story Die 1**, and **extra die 7**. He keeps **9 + 7 = 16**, then adds **Mind +2** and **Medical 30 (+3)** for a total of **21**. That is a **Tier 3 (Triumph)**. The Story Die was **1**, so a **Twist of Fate** triggers.

### Pushing Your Luck

**When it applies**
When you choose to risk extra stress for a better outcome.

**How it works**
1. Declare a **Push** on the roll.
2. Roll **1d6** and add it to the total.
3. If the **d6** shows **1**, you trigger a **Panic Check** after the action.

**Edge cases**
* Panic Checks are resolved in [Chapter 4: Survival & Combat](chapter_04_combat_and_survival.md).

**Example: Push**
Oren is building a barricade with **Vigor +1** and **Construction 10 (+1)**. He rolls **Base Die 4** and **Story Die 3** for a total of 4 + 3 + 1 + 1 = **9** (Tier 1). He **Pushes**, rolls **1d6 = 5**, and the new total is **14** (Tier 2). If that d6 had been a **1**, he would trigger a Panic Check.

[Art: spot/ch01_push_example_01.png
Purpose: Show the risk-reward moment of a Push (Tala building a barricade)]

---

## The Story Die Effects

[Art: icons/ch01_story_die_effects_01.png
Purpose: Mark narrative twist section]

The Story Die adds narrative twists beyond simple numbers.

### Twist of Fate (Story Die 1)

**When it applies**
When the Story Die shows **1** on a Colonist Roll.

**How it works**
* Gain **1 Inspiration Point** or **Edge** on your next roll.
* Resolve the Tier result normally.

**Edge cases**
* The Twist triggers even if the Story Die result is discarded by Augmented or Impaired.

**Example: Twist of Fate**
Tess tries to hack a console with **Mind +2** and **Intellectual 10 (+1)**. She rolls **Base Die 6** and **Story Die 1**. Total = 6 + 1 + 2 + 1 = **10** (Tier 1). She succeeds with a cost, but also gains **1 Inspiration Point** from the Twist.

[Art: flavor/ch01_story_die_twist_01.png
Purpose: Add narrative flavor for Twist/Complication moments]

### Complication (Story Die 10)

**When it applies**
When the Story Die shows **10** on a Colonist Roll.

**How it works**
* Gain **Bane** on your next roll or apply a narrative complication.
* Resolve the Tier result normally.

**Edge cases**
* Complications that add Stress or Mood changes are resolved in [Chapter 4: Survival & Combat](chapter_04_combat_and_survival.md).

**Example: Complication**
Sana snipes a mechanoid with **Dexterity +2** and **Shooting 30 (+3)**. She rolls **Base Die 8** and **Story Die 10**. Total = 8 + 10 + 2 + 3 = **23** (Tier 3). The shot is a Triumph, but the Complication gives her **Bane** on her next attack as the rifle overheats.

### Inspiration Points

**When it applies**
When you gain Inspiration from a Twist of Fate or other rewards.

**How it works**
* **Reroll one die** in a future roll.
* **Add +1d6** to a future roll.
* **Avoid a Mental Break** by reducing **Stress by 1d4**.
* **Give Edge** to a colonist.
* **Give Bane** to an enemy.

**Edge cases**
* Stress and Mental Break rules are in [Chapter 4: Survival & Combat](chapter_04_combat_and_survival.md).

**Example: Spending Inspiration**
Marla rolls **Base Die 2** and **Story Die 6** on a Construction check. With **Vigor +2** and **Construction 20 (+2)**, the total is 2 + 6 + 2 + 2 = **12** (Tier 2). She spends **1 Inspiration Point** to **reroll the Base Die**, gets a **9**, and the new total is 9 + 6 + 2 + 2 = **19** (Tier 3).

---

## Time and Scale

[Art: icons/ch01_time_scale_01.png
Purpose: Highlight timekeeping and range bands section]

Time on the Rim is tracked in specific units to manage survival.

### The Day

**When it applies**
When planning colony activities and daily schedules.

**How it works**
* **Morning**: 5 hours.
* **Afternoon**: 5 hours.
* **Evening**: 5 hours.
* **Night**: 8 hours (Sleep/Rest).
* The remaining hour covers meals and transitions.

[Art: diagrams/ch01_day_quadrum_01.png
Purpose: Visual timeline for Day segments + Quadrum cycle]

**Edge cases**
* The day loop procedures are expanded in [Chapter 6: Colony Management](chapter_06_colony.md).

**Example: Daily Schedule**
On Day 3, Ivo plans **Morning: Hunting**, **Afternoon: Building**, **Evening: Research**, and **Night: Sleep**. Those action slots are resolved using the colony rules in Chapter 6.

### The Quadrum

**When it applies**
When tracking seasons and long-term survival.

**How it works**
* **Aprimay**: Early Spring.
* **Jugust**: Late Summer.
* **Septober**: Early Autumn.
* **Decembary**: Late Winter.
* Each Quadrum lasts **15 days**.

**Edge cases**
* Seasonal effects appear in [Chapter 7: The Rim](chapter_07_world.md).

**Example: Quadrum Tracking**
If the colony lands on **Aprimay 1**, then **Jugust 1** begins on Day 16.

### Range Bands

**When it applies**
During combat scenes.

**How it works**
* **Melee**: Hand-to-hand combat. You are engaged with the enemy.
* **Close**: Short range. Shotguns, pistols, and grenades are strong here.
* **Medium**: Standard combat range. Assault rifles and LMGs are optimal.
* **Far**: Long range. Sniper rifles and artillery dominate.

[Art: diagrams/ch01_range_bands_01.png
Purpose: Diagram of Melee/Close/Medium/Far with weapon icons]

**Edge cases**
* Entering **Melee** locks you in combat. Disengaging is defined in [Chapter 4: Survival & Combat](chapter_04_combat_and_survival.md).

**Example: Range Bands**
Viper starts at **Medium** range. She uses **Move** to shift to **Close** so her shotgun is in its optimal band.

### Tactical Actions

[Art: icons/ch01_tactical_actions_01.png
Purpose: Mark combat action options quickly]

**When it applies**
On your turn in combat.

**How it works**
* **Move (1 AP)**: Shift **one band** closer or farther.
* **Rush (2 AP)**: Shift **two bands**.
* **Engage**: Move into **Melee** to lock with a target.
* **Disengage (1 AP)**: Leave **Melee** (see Chapter 4 for risks).
* **Attack (2 AP)**: Make a ranged or melee attack (see Chapter 4).
* **Take Cover (1 AP)**: Gain cover within your band.
* **Light Cover**: Grants **Edge** to defense.
* **Heavy Cover**: Grants **Double Edge** to defense.

**Edge cases**
* Action Point economy and free attacks are defined in [Chapter 4: Survival & Combat](chapter_04_combat_and_survival.md).

**Example: Tactical Actions**
Marla has **4 AP**. She **Moves (1 AP)** from Medium to Close, **Takes Cover (1 AP)** behind sandbags, then **Attacks (2 AP)** with her rifle.

### Weapon Range

**When it applies**
When using a weapon outside its optimal range band.

**How it works**
* Apply **Bane** if you attack outside a weapon's optimal band.

**Edge cases**
* Multiple Banes can trigger **Double Bane** and shift the Tier down.

**Example: Weapon Range**
Sana fires a sniper rifle (optimal **Far**) from **Close** range. She suffers **Bane** on the attack, which may downgrade her Tier.

### Caravan Movement (World Map)

[Art: icons/ch01_caravan_movement_01.png
Purpose: Mark travel rules at a glance]

**When it applies**
When traveling between map tiles.

**How it works**
* **1 Hex** is roughly **1 day** of travel.
* **Roads** increase speed.
* **Mountains** and **Swamps** reduce speed.

**Edge cases**
* Detailed expedition rules are in [Chapter 4: Survival & Combat](chapter_04_combat_and_survival.md).

**Example: Caravan Travel**
A caravan needs to cross **3 Hexes** of road. At roughly **1 Hex per day**, they arrive in about **3 days**, faster if mounts or roads add speed.

[Art: spot/ch01_caravan_movement_01.png
Purpose: Simple caravan travel across a hex map]
