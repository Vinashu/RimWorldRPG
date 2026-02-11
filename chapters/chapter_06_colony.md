# Chapter 6: Colony Management

[Art: chapter_art/ch06_colony_management_01.png
Purpose: Chapter opener establishing colony-building and management tone]

Building a thriving colony requires more than just survival; it requires industry, research, and expansion.

---

## Base Management

### Base Stats

**When it applies**
When evaluating the colony’s overall strength and comfort.

**How it works**
* **Security**: Your ability to repel raids. **Security = Sum of Defenses**.
* **Efficiency**: Bonus to work speed from **Workshops + Power**.
* **Comfort**: Bonus to Stress recovery from **Bedrooms + Recreation**.
* **Wealth Score**: Total points from Tech + Buildings + Defenses + Colonists. **Higher Score = Harder Raids**.

**Edge cases**
* Wealth Score calculations are detailed later in this chapter.

**Example: Base Stats**
A colony has **2 Mini Turrets (5 each)** and **10 Stone Walls (1 each)**. Security = 10 + 10 = **20**. Their Wealth Score is calculated using the full rules below.

[Art: spot/ch06_base_stats_01.png
Purpose: Visual overview of base stats: Security, Efficiency, Comfort, Wealth]

---

### Resources

**When it applies**
When tracking colony stockpiles and production.

**How it works**
Track five abstract resource categories:
* **Food**: Meals, pemmican, raw meat/veg.
* **Textile**: Leather, cloth, wool.
* **Ore**: Steel, plasteel, gold.
* **Components**: Machinery parts, electronics.
* **Medicine**: Herbal meds, glitterworld meds.

**Edge cases**
* Item conversion and crafting costs appear in [Chapter 5: Equipment & Economy](chapter_05_equipment.md).

**Example: Resources**
After a hunt and harvest, the colony gains **2 Food** and **1 Textile** for the day.

[Art: spot/ch06_resources_01.png
Purpose: Anchor the five resource categories with a simple visual]

---

## The Day Loop

### Daily Planning

**When it applies**
At the start of each in-game day.

**How it works**
1. The day is divided into **4 Periods**: **Morning, Afternoon, Evening, Night**.
2. Each player assigns one task per Period.
3. Night is usually used for Rest/Sleep.

[Art: diagrams/ch06_day_loop_01.png
Purpose: Visual timeline of the four daily periods and task assignment]

**Edge cases**
* Period structure aligns with [Chapter 1: Core Mechanics](chapter_01_core.md).

**Example: Daily Planning**
Viper plans **Hunting (Morning)**, **Building (Afternoon)**, **Research (Evening)**, and **Sleep (Night)**.

---

### Daily Action Resolution

**When it applies**
When resolving a planned task during a Period.

**How it works**
Make the listed Skill Check and apply the Tier result.

| Action | Roll | Tier 1 (11-) | Tier 2 (12–16) | Tier 3 (17+) |
| :--- | :--- | :--- | :--- | :--- |
| **Farming** | **Mind + Plants** | **1 Food** | **2 Food, 1 Textile** | **4 Food, 2 Textile** |
| **Hunting** | **Dexterity + Shooting** | **1 Food** | **2 Food, 1 Textile** | **4 Food, 2 Textile** |
| **Mining** | **Vigor + Mining** | **1 Ore** | **2 Ore** | **3 Ore, 1 Component** |
| **Cooking** | **Dexterity + Cooking** | Convert **2 Food → 2 Meals** | **2 Food → 3 Meals** | **2 Food → 4 Meals** |
| **Crafting** | **Dexterity + Crafting** | **1 CP** | **3 CP** | **5 CP** |
| **Building** | **Vigor + Construction** | **2 CP** | **5 CP** | **10 CP** |
| **Researching** | **Mind + Intellectual** | **20 RP** | **50 RP** | **100 RP** |
| **Social** | **Spirit + Social** | Maintain Relations | **+1 Relation** | **+2 Relation** or **Trade Bonus** |
| **Healing** | **Mind + Medical** | Tend **1 Wound** | Tend **2 Wounds** | Tend **All Wounds** |
| **Artistic** | **Spirit + Artistic** | **1 CP** | **3 CP** | **5 CP** |

**Edge cases**
* Skill checks follow [Chapter 3: Skills & Checks](chapter_03_skills_and_checks.md).
* Research progression is detailed later in this chapter.

**Example: Daily Action**
Viper rolls **2d10 + Vigor + Construction** and totals **18**. That is **Tier 3**, so she produces **10 CP** toward a wall.

---

### Biome Modifiers

**When it applies**
When your colony’s starting biome affects daily work.

**How it works**
Apply the modifiers below.

* **Temperate Forest**: No modifiers.
* **Arid Shrubland / Desert**: **-2 Bane** on Farming. **+1 Defense**.
* **Boreal Forest / Tundra**: **-1 Bane** on Farming (Winter). **+1 Security**.
* **Tropical Rainforest**: **+1 Edge** on Farming. **-1 Health**. **-1 Defense**.
* **Mountain**: **+1 Edge** on Mining. **+2 Security**. **-2 Bane** on Farming.

**Edge cases**
* Biome descriptions appear in [Chapter 7: The Rim](chapter_07_world.md).

**Example: Biome Modifiers**
A colony in **Mountain** terrain gains **+1 Edge** on Mining but suffers **-2 Bane** on Farming.

---

## Construction and Infrastructure

### Construction Points (CP)

**When it applies**
When building structures or crafting items.

**How it works**
* CP is generated through **Building** or **Crafting** actions (see Daily Action table).
* When accumulated CP meets or exceeds a cost, the structure or item is completed.

**Edge cases**
* Item costs are listed in [Chapter 5: Equipment & Economy](chapter_05_equipment.md).

**Example: CP**
A **Wall** costs **5 CP**. Marla rolls a **Tier 2** Building result for **5 CP** and completes one wall section.

---

### Facilities (Rooms)

**When it applies**
When constructing functional rooms for colony bonuses.

**How it works**
Build the facility and apply its effect.

| Facility | Cost (CP) | Materials | Tech | Effect |
| :--- | ---: | :--- | :--- | :--- |
| **Barracks** | 20 | 50 Wood | - | Sleeping spots. **+0 Comfort**. |
| **Bedroom (Private)** | 40 | 80 Wood | Neolithic 2 | Private room. **+1 Comfort**. |
| **Kitchen** | 50 | 50 Steel, 20 Wood | Industrial 1 | **Reduces Food Poisoning**. |
| **Workshop** | 80 | 100 Steel | Medieval 1 | **+1 Efficiency** (Crafting/Building). |
| **Hospital** | 100 | 50 Steel, 5 Medicine | Industrial 2 | **+2 on Medical Checks**. |
| **Rec Room** | 60 | 50 Wood, 10 Cloth | Neolithic 2 | **+1 Comfort**. Unlocks Recreation. |
| **Research Lab** | 100 | 75 Steel, 25 Wood | - | Required for Research. **+1 Efficiency** (Research). |

**Edge cases**
* Medical check rules are in [Chapter 3: Skills & Checks](chapter_03_skills_and_checks.md).

**Example: Facility**
The colony spends **60 CP** and **50 Wood + 10 Cloth** to build a **Rec Room**, gaining **+1 Comfort**.

[Art: spot/ch06_facilities_01.png
Purpose: Visual snapshot of a facility and its comfort bonus]

---

### Power

**When it applies**
When powering facilities and defenses.

**How it works**
Build generators and storage.

| Building | Materials | CP | Tech Req | Effect |
| :--- | :--- | ---: | :--- | :--- |
| **Wood Generator** | 100 Steel, 2 Comp | 150 | Industrial 1 | Powers **2 Facilities**. Consumes Wood. |
| **Solar Panel** | 100 Steel, 3 Comp | 200 | Industrial 3 | Powers **1 Facility** (Day only). |
| **Battery** | 50 Steel, 2 Comp | 100 | Industrial 2 | Stores power for Night/Eclipses. |

**Edge cases**
* Power affects Efficiency where applicable (Base Stats).

**Example: Power**
A colony builds **1 Wood Generator** and powers a **Workshop** and **Research Lab** (2 facilities).

---

## Security and Defense

### Defensive Structures

**When it applies**
When building defenses and calculating Security or Defense Points.

**How it works**
Use the table below for structure costs and Defense Points.
* **Base Defense** starts at **0**.
* Defensive structures add to your **Defense Pool**.

| Structure | Cost (CP) | Materials | HP | Defense Pts | Notes |
| :--- | ---: | :--- | ---: | ---: | :--- |
| **Wall (Wood)** | 5 | 5 Wood | 20 | 1 | Flammable. |
| **Wall (Stone)** | 10 | 5 Blocks | 100 | 2 | Fireproof. High HP. |
| **Sandbags** | 5 | 5 Cloth | - | 1 | Partial Cover. |
| **Turret (Mini)** | 50 | 100 Steel, 3 Comp | 40 | 5 | Auto-attacks (Dmg 4). |
| **Mortar** | 80 | 150 Steel, 5 Comp | 50 | 0 | Attacks Siege Camps. |

**Edge cases**
* Combat resolution is in [Chapter 4: Survival & Combat](chapter_04_combat_and_survival.md).

**Example: Defense Build**
The colony builds **2 Stone Walls** and **1 Mini Turret**, adding **2 + 2 + 5 = 9 Defense Points**.

---

### Defense Pool

**When it applies**
During raids or colony defense scenes.

**How it works**
The colony generates **Defense Points (DP)** equal to the sum of defensive structures. Spend DP as reactions.

* **1 DP**: Negate an enemy Tier 2 Success (turn the hit into a miss).
* **2 DP**: Reduce damage to a Colonist by one Tier (Critical → Normal).
* **3 DP**: Prevent damage to a structure (Wall takes 0 damage).

[Art: diagrams/ch06_defense_pool_01.png
Purpose: Show Defense Pool spend options at a glance]

**Edge cases**
* If DP reaches 0, enemies breach the perimeter.

**Example: Defense Pool**
The colony has **10 DP**. The Storyteller spends **2 DP** to reduce a critical hit to a normal hit, leaving **8 DP**.

---

## Research and Technology

### Research Process

**When it applies**
When unlocking new technology.

**How it works**
1. Assign a Researcher to a **Research Bench** for a Period.
2. Roll **2d10 + Mind + Intellectual**.
3. Apply Research Points (RP) based on the Tier.

| Tier | RP |
| :--- | ---: |
| **Tier 1 (≤11)** | 20 RP |
| **Tier 2 (12–16)** | 50 RP |
| **Tier 3 (17+)** | 100 RP |

**Edge cases**
* A **Research Lab** is required for research.

**Example: Research**
Tess rolls **2d10 + Mind + Intellectual** and totals **14**. She gains **50 RP** toward **Gunsmithing**.

[Art: spot/ch06_research_process_01.png
Purpose: Visualize research work during a daily Period]

---

### Tech Categories

**When it applies**
When purchasing research projects.

**How it works**
Each Tech Level costs **Level × RP**.

| Tech Category | Levels | RP per Level |
| :--- | :--- | ---: |
| **Neolithic** | 1–4 | 100 RP |
| **Medieval** | 1–5 | 300 RP |
| **Industrial** | 1–6 | 600 RP |
| **Spacer** | 1–7 | 1000 RP |

**Edge cases**
* Tech Level requirements appear in [Chapter 5: Equipment & Economy](chapter_05_equipment.md).

**Example: Tech Cost**
Industrial **Level 2** costs **2 × 600 = 1200 RP**.

---

## Medical and Health

### Body Parts and Banes

**When it applies**
When a colonist loses a body part.

**How it works**
Apply the penalties below. These stack.

* **Missing Hand**: **+1 Bane** to Shooting, Crafting, Medical. Cannot dual-wield.
* **Missing Arm**: **+2 Bane** to fine motor skills and heavy lifting. Cannot use two-handed weapons.
* **Missing Foot**: **+1 Bane** to Movement rolls. **-1 Speed**.
* **Missing Leg**: **+2 Bane** to Movement rolls. **-2 Speed**. Cannot sprint.
* **Missing Kidney**: **+1 Bane** vs poison/disease. Healing rate -25%.
* **Missing Lung**: **+1 Bane** on stamina rolls. Gain **+1 Stress** after exertion.
* **Scars (Painful)**: Each scar imposes **-1 Mood**. 3+ scars adds **+1 Bane** to Social.

**Edge cases**
* Injury sources are in [Chapter 4: Survival & Combat](chapter_04_combat_and_survival.md).

**Example: Body Parts**
A colonist missing a leg suffers **-2 Speed** and **+2 Bane** on Movement rolls until replaced.

---

### Replacements

**When it applies**
When installing prosthetics or bionics.

**How it works**
* **Peg Leg/Hook Hand**: Cancels the missing state but keeps **+1 Bane**. Halves Speed penalty.
* **Prosthetic**: Removes Banes and Speed penalties.
* **Bionic**: Removes Banes and grants **Edge** once per Scene on a roll using that limb.

**Edge cases**
* Bionic items are listed in [Chapter 5: Equipment & Economy](chapter_05_equipment.md).

**Example: Replacement**
Viper installs a **Bionic Leg**. Her missing-leg penalties are removed, and she gains **Edge** once per scene on Movement rolls.

---

### Stress and Mental Breaks

**When it applies**
When a colonist accumulates Stress.

**How it works**
Roll a **Panic Check** when triggered. Use the Panic Check table and relief options in [Chapter 4: Survival & Combat](chapter_04_combat_and_survival.md).

**Edge cases**
* Full Stress rules and Panic Check triggers are in [Chapter 4: Survival & Combat](chapter_04_combat_and_survival.md).

**Example: Mental Break**
Viper has **5 Stress** and rolls **1d6 + 5 = 9**. She suffers a **Minor Break** and goes on a Binge.

---

## Expeditions (Caravans)

### Travel Mechanics

**When it applies**
When traveling the world map.

**How it works**
* **Base Speed**: 1 Hex per day.
* **Modifiers**: +1 if all have Mounts, -1 if carrying Heavy Load.

**Edge cases**
* Hex scale is in [Chapter 1: Core Mechanics](chapter_01_core.md).

**Example: Travel**
A caravan with mounts and no heavy load moves **2 Hexes per day**.

---

### Foraging

**When it applies**
Each day of caravan travel.

**How it works**
* Make a **Plants** check daily.
* **Success**: Find enough food.
* **Failure**: Consume rations. If empty, gain Stress.

**Edge cases**
* Foraging DCs are defined in [Chapter 4: Survival & Combat](chapter_04_combat_and_survival.md).

**Example: Foraging**
The caravan fails a Plants check and consumes rations. If rations hit **0**, they start gaining Stress.

---

### Ambush

**When it applies**
When the Storyteller calls for a caravan encounter.

**How it works**
* Large caravans are easier to spot.
* Roll **Animals** or **Intellectual** to avoid detection.
* Success spots the ambush; failure means surprise.

**Edge cases**
* Ambush rules are detailed in [Chapter 4: Survival & Combat](chapter_04_combat_and_survival.md).

**Example: Ambush**
Oren rolls **Animals** and gets a **Tier 2 Success**, spotting raiders before they strike.

---

## Colony Wealth and Recruits

### Wealth Score

**When it applies**
When scaling threats or determining recruit limits.

**How it works**
**Wealth Score = Tech Points + Building Points + Defense Points + Colonist Points**

[Art: diagrams/ch06_wealth_score_01.png
Purpose: Visual equation of the Wealth Score components]

**Edge cases**
* Raid scaling uses Wealth Score in [Chapter 8: The Storyteller](chapter_08_storyteller.md).

**Example: Wealth Score**
A colony has **Tech 14**, **Buildings 12**, **Defense 15**, **Colonists 30**. Wealth Score = **71**.

---

### Technology Points

**When it applies**
When calculating Wealth Score.

**How it works**
Sum the highest unlocked level in each category using the table.

| Tech Level | Points Per Level |
| :--- | ---: |
| **Neolithic (1–4)** | 1 |
| **Medieval (1–5)** | 2 |
| **Industrial (1–6)** | 4 |
| **Spacer (1–7)** | 8 |

**Example: Technology Points**
If you have **Medieval 3** and **Industrial 2**, points = (3 × 2) + (2 × 4) = **14**.

---

### Building Points

**When it applies**
When calculating Wealth Score.

**How it works**
Add points for each constructed facility.

| Facility | Points |
| :--- | ---: |
| **Barracks** | 2 |
| **Private Bedroom** | 3 |
| **Kitchen** | 4 |
| **Workshop** | 6 |
| **Hospital** | 8 |
| **Rec Room** | 5 |
| **Research Lab** | 8 |
| **Wood Generator** | 10 |
| **Solar Panel** | 12 |
| **Battery** | 8 |

**Power Bonus**: +2 points per powered facility.

**Example: Building Points**
A colony with **1 Kitchen (4)**, **1 Workshop (6)**, and **1 Solar Panel (12)** has **22 Building Points**, plus power bonuses for powered facilities.

---

### Defense Points

**When it applies**
When calculating Wealth Score.

**How it works**
Sum points from defensive structures.

| Structure | Points |
| :--- | ---: |
| **Wall Section (Wood)** | 0.5 |
| **Wall Section (Stone)** | 1 |
| **Sandbags** | 0.5 |
| **Mini Turret** | 5 |
| **Mortar** | 6 |

**Example: Defense Points**
Ten stone walls (10 points) and two turrets (10 points) total **20 Defense Points**.

---

### Colonist Points

**When it applies**
When calculating Wealth Score.

**How it works**
Use the table below.

| Type | Points |
| :--- | ---: |
| **Player Character** | 10 |
| **Recruit** | 5 |

**Example: Colonist Points**
Three PCs and two Recruits = (3 × 10) + (2 × 5) = **40 points**.

---

### Colony Tiers and Recruit Limit

**When it applies**
After calculating Wealth Score.

**How it works**
Use the table below to find your tier and Recruit limit.

| Wealth Score | Colony Tier | Max Recruits |
| :--- | :--- | ---: |
| **0–9** | Struggling | 0 |
| **10–24** | Stable | 1 |
| **25–49** | Established | 2 |
| **50–99** | Prosperous | 3 |
| **100+** | Powerhouse | 4 |

**Edge cases**
* If Wealth drops below your tier, the Storyteller decides which Recruits leave or turn hostile.
* Player Characters do not count against the Recruit limit.

**Example: Colony Tier**
A colony with **Wealth Score 57** is **Prosperous** and may keep **3 Recruits**.

---

### The Colony as Home Base

**When it applies**
During campaign downtime and long-term projects.

**How it works**
* The colony base is the main map where buildings and stockpiles are located.
* Most Recruits stay at the colony base while PCs travel.

**Example: Home Base**
The PCs leave on a caravan. Recruits stay behind to farm, craft, and defend the base.

---

### Recruit Roles

**When it applies**
When assigning a new Recruit’s role.

**How it works**
* **Specialist**: Crafter/Worker.
* **Retainer**: Guard/Hunter.
* **Sage**: Researcher/Advisor.
* Roles determine starting stats and skills but do not limit actions.

**Example: Recruit Role**
A new colonist with Medical skills is assigned **Sage** to boost research and healing.

---

### Creating a Recruit

**When it applies**
When a new recruit joins during play.

**How it works**
1. **Pick a Role** (Specialist, Retainer, Sage).
2. **Assign Attributes** using **+2, +1, 0, -1**.
3. **Assign Skills**: one primary at **30 (+3)**, one secondary at **20 (+2)**, optional minors at **10 (+1)**.
4. **Traits and Hooks**: Give 1–2 traits and a story hook.
5. **Loyalty**: Set Loyalty from **0–5**.

**Edge cases**
* Traits are listed in [Chapter 2: Character Creation](chapter_02_character_creation.md).

**Example: Creating a Recruit**
A **Specialist** gets **Construction 30 (+3)** and **Crafting 20 (+2)**, then a trait like **Industrious**, and starts at **Loyalty 2**.

[Art: spot/ch06_create_recruit_01.png
Purpose: Visualize assigning a recruit role and stats]

---

### Role Details

#### Specialist (Crafter / Worker)

**How it works**
* Primary Skill **30 (+3)** in Construction, Crafting, Plants, Cooking, or Mining.
* Secondary Skill **20 (+2)** in a supporting skill.
* While at the colony base, a Specialist can handle routine tasks in their specialty at **Tier 2** without a roll if conditions are normal.
* Once per day, a Specialist can grant **Edge** on a related check made by a player character.

**Example: Specialist**
A Specialist with **Construction 30** completes a routine wall repair at **Tier 2** without a roll, and later grants **Edge** to a PC building a turret.

#### Retainer (Guard / Hunter)

**How it works**
* Primary Skill **30 (+3)** in **Shooting** or **Melee**.
* Secondary Skill **20 (+2)** in the other combat skill, **Animals**, or **Medical**.
* Once per round, if in position, a Retainer can **Assist** a PC attack, granting **Edge** or canceling **Bane**.
* When defending the colony base, the Storyteller can treat one minor skirmish per day as handled off-screen.

**Example: Retainer**
During a raid, the Retainer grants **Edge** to Viper’s shot once this round, helping her score a Tier 3 hit.

#### Sage (Researcher / Advisor)

**How it works**
* Primary Skill **30 (+3)** in **Intellectual**.
* Secondary Skill **20 (+2)** in **Medical**, **Social**, or another fitting skill.
* Add **+1 RP per day** to a Research project while at the colony base.
* Once per session, grant **Double Edge** on a check that uses their expertise.

**Example: Sage**
A Sage adds **+1 RP** to Gunsmithing each day and grants **Double Edge** to a planning check before a raid.

---

### Recruitment Checks

**When it applies**
When a potential Recruit appears.

**How it works**
1. The colonist with the highest **Social** rolls `2d10 + Spirit + Social`.
2. Use the suggested DCs.
3. Apply Tier results.

Suggested difficulty:
* **DC 13** for a neutral stranger.
* **DC 15+** for someone hostile or unwilling.

Tier results:
* **Tier 1 (11-)**: They refuse, or join at **Loyalty 1** with a Complication.
* **Tier 2 (12–16)**: They join at **Loyalty 2–3** with no major complications.
* **Tier 3 (17+)**: They join at **Loyalty 4** and bring a bonus.

Story Die effects:
* **Story Die 1 (Twist)**: Unexpected connection or positive reveal.
* **Story Die 10 (Complication)**: Someone is unhappy about the deal.

**Edge cases**
* Recruitment scenes are often tied to events in [Chapter 8: The Storyteller](chapter_08_storyteller.md).

**Example: Recruitment Check**
Mary rolls **2d10 + Spirit + Social** and totals **16**. The recruit joins at **Loyalty 3** with no major complications.

---

### Loyalty in Play

**When it applies**
When Recruits are treated well or poorly.

**How it works**
Increase Loyalty by **+1** when:
* You save a Recruit from serious danger.
* You give them good gear, a private room, or meaningful recognition.
* You support them in disputes or respect their beliefs.

Decrease Loyalty by **-1** when:
* You repeatedly send them on dangerous tasks without support.
* You neglect their Needs for long periods.
* You treat them as expendable.

If Loyalty hits **0**, they suffer a **Loyalty Break**:
* Leave in the night.
* Sabotage and flee.
* Lash out at a colonist.
* Join an enemy faction.

At **Loyalty 5**:
* Promote them to a full player character, or
* Treat them as a major story figure.

**Example: Loyalty**
A Recruit rescued from a raid gains **+1 Loyalty**. Later, after being denied food for days, they lose **-1 Loyalty**.

---

### Wealth, Events, and New Recruits

**When it applies**
When the colony crosses into a new tier with open Recruit slots.

**How it works**
The Storyteller can introduce **New Arrival** events:
* Refugees fleeing raids.
* Wandering specialists seeking safe homes.
* Mercenaries or nobles searching for work.

High Wealth Score also attracts dangerous arrivals:
* Criminals, spies, or raiders posing as harmless.

**Example: New Arrival**
After reaching **Prosperous** tier, a refugee Medic arrives and asks to join.
