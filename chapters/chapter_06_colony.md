# Chapter 6: Colony Management

Building a thriving colony requires more than just survival; it requires industry, research, and expansion.

---

## Base Management

The Base is the heart of the game. It has its own stats and resources.

### Base Stats
The Colony is a character in itself.
*   **Security**: Your ability to repel raids. (Sum of Defenses).
*   **Efficiency**: Bonus to work speed. (Workshops + Power).
*   **Comfort**: Bonus to Stress recovery. (Bedrooms + Recreation).
*   **Wealth**: The total value of your items/buildings. **Higher Wealth = Harder Raids.**

### Resources
We track 5 abstract resource categories:
1.  **Food**: Meals, pemmican, raw meat/veg.
2.  **Textile**: Leather, cloth, wool.
3.  **Ore**: Steel, plasteel, gold.
4.  **Components**: Machinery parts, electronics.
5.  **Medicine**: Herbal meds, glitterworld meds.

### Daily Actions
The day is divided into **4 Periods**: **Morning, Afternoon, Evening, and Night**.

**1. Planning Phase**: At the start of the day, each player decides what their character will do for each of the 4 periods. You can assign a specific task (Farming, Building, etc.) or choose to **Rest/Sleep**.

**2. Resolution Phase**: Once all plans are set, players make the necessary Skill Checks for each active period.

| Action | Roll | Tier 1 (11-) | Tier 2 (12-16) | Tier 3 (17+) |
| :--- | :--- | :--- | :--- | :--- |
| **Farming** | **Mind + Plants** | **1 Food** | **2 Food, 1 Textile** | **4 Food, 2 Textile** |
| **Hunting** | **Dexterity + Shooting** | **1 Food** | **2 Food, 1 Textile** (Leather) | **4 Food, 2 Textile** |
| **Mining** | **Vigor + Mining** | **1 Ore** | **2 Ore** | **3 Ore, 1 Component** |
| **Cooking** | **Dexterity + Cooking** | Convert **2 Food** -> **2 Meals** | Convert **2 Food** -> **3 Meals** | Convert **2 Food** -> **4 Meals** |
| **Crafting** | **Dexterity + Crafting** | **1 CP** towards Item | **3 CP** towards Item | **5 CP** towards Item |
| **Building** | **Vigor + Construction** | **2 CP** towards Building | **5 CP** towards Building | **10 CP** towards Building |
| **Researching** | **Mind + Intellectual** | **20 RP** | **50 RP** | **100 RP** |
| **Social** | **Spirit + Social** | Maintain Relations | **+1 Relation** | **+2 Relation** or **Trade Bonus** |
| **Healing** | **Mind + Medical** | Tend **1 Wound** | Tend **2 Wounds** | Tend **All Wounds** |
| **Artistic** | **Spirit + Artistic** | **1 CP** towards Art | **3 CP** towards Art | **5 CP** towards Art |

> **Example: Daily Planning**
>
> **John**: "It's a new day. The colony is low on food and we need those sandbags finished. What is Viper's plan?"
>
> **Mary**: "Okay, here is my schedule:
> *   **Morning**: Hunting. We need meat.
> *   **Afternoon**: Building. I want to finish the sandbags.
> *   **Evening**: Researching. I'll put in some hours on Gunsmithing.
> *   **Night**: Sleeping."
>
> **John**: "Sounds like a busy day. Let's resolve the rolls."
>
> **Mary**: "First, **Hunting** (Dex + Shooting)... *(Rolls 14)*. Tier 2! **2 Food, 1 Textile**."
>
> **Mary**: "Next, **Building** (Vigor + Construction)... *(Rolls 18)*. Tier 3! **5 CP**. The sandbags are done!"
>
> **Mary**: "Finally, **Research** (Mind + Intellectual)... *(Rolls 9)*. Tier 1. Just **20 RP**."
>
> **John**: "A productive day. Viper collapses into bed, exhausted but satisfied."

---

### Biome Modifiers
Your starting location dictates your struggle.
*   **Temperate Forest**: No modifiers.
*   **Arid Shrubland / Desert**: **-2 Bane** on Farming. **+1 Defense** (Clear sightlines).
*   **Boreal Forest / Tundra**: **-1 Bane** on Farming (Winter). **+1 Security** (Cold damages attackers).
*   **Tropical Rainforest**: **+1 Edge** on Farming. **-1 Health** (High Disease rate). **-1 Defense** (Dense cover for enemies).
*   **Mountain**: **+1 Edge** on Mining. **+2 Security** (Natural choke points). **-2 Bane** on Farming.

---

## Construction & Infrastructure

Building structures requires **Materials** and **Construction Points (CP)**.
*   **Generation**: Characters generate CP via Daily Rolls (Tier 1 = 2 CP, Tier 2 = 5 CP, Tier 3 = 10 CP).

> **Example: Building**
>
> **Mary**: "We need a Wall. It costs **5 CP**."
>
> **John**: "Roll **Vigor + Construction**."
>
> **Mary**: *(Rolls 18)*. "Tier 3! I generate **10 CP**. I build TWO wall sections!"

### Facilities (Rooms)
Instead of placing individual furniture, you build functional **Facilities**.
*   **Cost**: Includes all necessary furniture (tables, chairs, vents).
*   **Bonus**: Applies to all relevant checks within the colony.

| Facility | Cost (CP) | Materials | Tech | Effect |
| :--- | :--- | :--- | :--- | :--- |
| **Barracks** | 20 | 50 Wood | - | Sleeping spots. **+0 Comfort**. |
| **Bedroom (Private)** | 40 | 80 Wood | Neolithic 2 | Private room. **+1 Comfort**. |
| **Kitchen** | 50 | 50 Steel, 20 Wood | Industrial 1 | **Reduces Food Poisoning**. Clean cooking. |
| **Workshop** | 80 | 100 Steel | Medieval 1 | **+1 Efficiency** (Crafting/Building). |
| **Hospital** | 100 | 50 Steel, 5 Medicine | Industrial 2 | **+2 on Medical Checks**. |
| **Rec Room** | 60 | 50 Wood, 10 Cloth | Neolithic 2 | **+1 Comfort**. Unlocks specific Recreation. |
| **Research Lab** | 100 | 75 Steel, 25 Wood | - | Required for Research. **+1 Efficiency** (Research). |

### Power
| Building | Materials | CP | Tech Req | Effect |
| :--- | :--- | :--- | :--- | :--- |
| **Wood Generator** | 100 Steel, 2 Comp | 150 | Industrial 1 | Powers 2 Facilities. Consumes Wood. |
| **Solar Panel** | 100 Steel, 3 Comp | 200 | Industrial 3 | Powers 1 Facility (Day only). |
| **Battery** | 50 Steel, 2 Comp | 100 | Industrial 2 | Stores power for Night/Eclipses. |

### Security & Defense
Raids target your **Security Score**.
*   **Base Defense**: 0.
*   **structures**: Add to your **Defense Pool**.

| Structure | Cost (CP) | Materials | HP | Defense Pts | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Wall (Wood)** | 5 | 5 Wood | 20 | 1 | Flammable. |
| **Wall (Stone)** | 10 | 5 Blocks | 100 | 2 | Fireproof. High HP. |
| **Sandbags** | 5 | 5 Cloth | - | 1 | Partial Cover. |
| **turret (Mini)** | 50 | 100 Steel, 3 Comp | 40 | 5 | Auto-attacks (Dmg 4). |
| **Mortar** | 80 | 150 Steel, 5 Comp | 50 | 0 | Attacks Siege Camps. |

### The Defense Pool
During a Raid, the Colony generates **Defense Points (DP)** equal to the sum of all defensive structures.
Players spend DP as vivid reactions to enemy actions:
*   **1 DP**: Negate an enemy Tier 2 Success (Turn hit into miss).
*   **2 DP**: Reduce Damage to a Colonist by one Tier (e.g. Critical -> Normal).
*   **3 DP**: Prevent damage to a structure (Wall takes 0 damage).

*If Defense Points reach 0, the enemy breaches the perimeter.*

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

> **Example: Researching**
>
> **Mary**: "Viper spends the evening at the research bench. We need **Gunsmithing** (Industrial 2)."
>
> **John**: "Okay, roll **Mind + Intellectual**. You're using a simple bench for Industrial tech, so no bonus."
>
> **Mary**: *(Rolls 11)*. "Tier 1... only **20 RP**."
>
> **John**: "It's slow going. You're scratching your head over the blueprints."

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

> **Example: Mental Break**
>
> **John**: "Viper is starving (+1 Stress) and witnessed a death yesterday (+1 Stress). Her current Stress is 5. Roll a Panic Check."
>
> **Mary**: "Rolling 1d6 + 5..." *(Rolls 4)*. "Total 9. That's a **Minor Break**."
>
> **John**: "Viper snaps. She goes on a **Binge**, eating the raw meat you just hunted."

---

## Expeditions (Caravans)

Traveling the world map to trade or attack.

### Travel Mechanics
*   **Base Speed**: 1 Hex per day.
*   **Modifiers**: +1 if all have Mounts, -1 if carrying Heavy Load.
*   **Foraging**: Make a **Plants** check daily.
    *   **Success**: Find enough food.
    *   **Failure**: Consume rations. If empty, gain Stress.

> **Example: Foraging**
>
> **John**: "You're traveling to the nearby settlement. Make your daily **Plants** check to forage."
>
> **Mary**: *(Rolls 9)*. "Failure. I can't find anything edible."
>
> **John**: "You have to eat your rations. If you run out, you'll start gaining Stress."

### Ambush
*   **Visibility**: Large caravans are easier to spot.
*   **Stealth**: Roll **Animals/Intellectual** to avoid detection.

---

## Colony Wealth & Recruits

As your colony grows richer, word spreads that you have food, walls, and maybe even spare beds. People drift in: refugees, specialists, mercenaries, weirdos. Some stay—if you can afford them.

This section explains how **Wealth** affects how many extra colonists you can support as **Recruits**.

---

### Wealth and Capacity

Your colony already tracks **Wealth** as a Base Stat:

* **Wealth**: The total value of your buildings, items, and colonists.
  Higher Wealth means **harder raids** (see Chapter 8: Storyteller).

Wealth also controls how many **Recruits** your colony can realistically maintain:

* More Wealth = more beds, food, medicine, and gear → more people can stay.
* Losing Wealth (ruined buildings, stolen items, dead colonists) can make your colony feel less viable, and some Recruits may decide to leave.

Recruits are semi-PC colonists controlled with help from the Storyteller: spare workers, guards, specialists, researchers, and hangers-on.

> **Recruits vs Player Characters**
>
> In fiction, Recruits are still colonists. The only difference is mechanical:
>
> * **Recruits** use simplified rules and mainly cover skill gaps, off-screen work, and drama.
> * **Player characters** are controlled directly by players and **do not** count against the Recruit limit.

---

### Wealth Bands & Recruit Limit

Use your total **Colony Wealth in Silver** (see Chapter 8: Wealth Management) to determine how many Recruits you can have at once.

| Total Wealth (Silver) | Colony Tier | Max Recruits |
| :-------------------- | :---------- | :----------- |
| **0–9,999**           | Struggling  | 0            |
| **10,000–24,999**     | Stable      | 1            |
| **25,000–49,999**     | Established | 2            |
| **50,000–99,999**     | Prosperous  | 3            |
| **100,000+**          | Powerhouse  | 4            |

* You can always **dismiss** a Recruit (or let them leave) to free a slot.
* If your Wealth drops below your current band, the Storyteller decides which Recruits leave, turn hostile, or drift away over time.
* You can adjust these thresholds if you change how Wealth works or how harsh you want the game to be.

> **Example: Hitting a New Band**
>
> The colony improves its walls, adds turrets, and finishes a research lab. The Storyteller recalculates Wealth and finds it just crossed **25,000 Silver**.
>
> The colony moves into the **Established** tier and can now support **2 Recruits** instead of 1. On the next “quiet” event roll, the Storyteller adds a possible **“New Arrival”** result to reflect word spreading about this growing base.

---

### The Colony as Home Base

In some games, you’d call this a “stronghold.” In RimWorld, it’s just **the colony**.

Your **colony base** is:

* The main map where your buildings, stockpiles, workshops, and bedrooms are.
* Where most Recruits live and work.
* The anchor point for long-term projects and defenses.

Many Recruit benefits only apply when they are **at or near the colony base**.
When the PCs leave on a quest or caravan, most Recruits stay behind to keep the place running.

---

### Recruit Roles

When a new colonist joins as a Recruit, assign them a **role** based on how they mostly help:

* **Specialist (Crafter / Worker)**
  Builds, crafts, farms, cooks, mines—keeps the colony alive.
* **Retainer (Guard / Hunter)**
  Focuses on combat: defending the colony, escorting caravans, hunting dangerous wildlife.
* **Sage (Researcher / Advisor)**
  Handles research, medicine, and specialized knowledge.

Roles don’t limit what they can do in the fiction. They just package their **starting Stats, Skills, and special bonuses**.

---

### Creating a Recruit

When an event (see Chapter 8: Storyteller) introduces a possible new colonist, you don’t need full Lifepath. Use this quick procedure.

#### 1. Pick a Role

Choose the role that best fills a gap:

* Combat (Retainer).
* Production / Building / Food (Specialist).
* Research / Medicine / Advice (Sage).
* Social / Trade (either Specialist or Sage, depending on focus).

#### 2. Assign Attributes

Use a simple array for Recruits: **+2, +1, 0, -1**.

* Put **+2** in the Attribute that supports their main Skill.
* Put **+1** in a secondary Attribute.
* Assign **0** and **-1** to the rest.

#### 3. Assign Skills

* Give them one **primary Skill** at **+30** (their main job).
* Give them one **secondary Skill** at **+20**.
* Optionally give one or two minor Skills at **+10** if needed.

#### 4. Traits and Hooks

Give each Recruit **1–2 Traits** (see Traits in Character Creation). Then decide on a **hook**:

* Owes a debt to a faction.
* Has an addiction or risky vice.
* Is fleeing raiders, mechs, or justice.
* Has family or enemies somewhere else.
* Carries a secret that might matter later.

#### 5. Loyalty

Each Recruit has a **Loyalty** score from 0–5:

* **0**: Enemy (prisoner, saboteur, about to leave or turn).
* **1**: Resentful (only staying because they must).
* **2**: Wary (baseline refugee).
* **3**: Willing (standard recruit).
* **4**: Devoted (would fight for the colony).
* **5**: Zealous (fanatic, family, or soulmate).

Most new Recruits start at **Loyalty 2–3**, depending on how they joined.

---

### Role Details

These packages plug directly into existing Colony rules (Daily Actions, CP, RP, Defense, etc.).

#### Specialist (Crafter / Worker)

**Role**: Builds, crafts, farms, cooks, mines—keeps the place running.

* Primary Skill **+30** in one of: **Construction, Crafting, Plants, Cooking, or Mining**.
* Secondary Skill **+20** in something that supports their job (Intellectual, Social, Animals, etc.).
* While working at the **colony base**, a Specialist:

  * Can handle routine tasks in their specialty at **Tier 2** without a roll, as long as conditions are normal.
  * Once per day, can grant **Edge** on a related check made by a player character (e.g. building complex structures, crafting rare gear, managing a large harvest).

#### Retainer (Guard / Hunter)

**Role**: Defends the colony, hunts threats, and fights so others can work.

* Primary Skill **+30** in **Shooting** or **Melee**.
* Secondary Skill **+20** in the other combat Skill, **Animals**, or a modest **Medical** rating.
* In combat:

  * Once per round, if a Retainer is in position to help, they can **Assist** a PC’s Attack, granting **Edge** (or cancelling Bane).
  * When defending the colony base, the Storyteller can treat one minor skirmish per day as “handled off-screen” by Retainers, unless the event is meant to be a major scene.

#### Sage (Researcher / Advisor)

**Role**: Advances tech, patches people up, and knows things others don’t.

* Primary Skill **+30** in **Intellectual**.
* Secondary Skill **+20** in either **Medical**, **Social**, or another fitting Skill.
* While working at the colony base:

  * Adds **+1 RP per day** to any single Research project they are assigned to.
  * Once per session, can grant **Double Edge** on a check that clearly uses their expertise (planning a defense, diagnosing an illness, understanding strange tech, etc.).

---

### Recruitment Checks

When a potential Recruit appears (refugee, traveler, rescued prisoner, wandering specialist), play out a short scene: negotiations at the gate, tending to their wounds, sharing food, arguing about terms.

Then make a **Recruitment Check**:

* The colonist with the highest **Social** Skill rolls:

  * `2d10 + Spirit + Social`.

Suggested difficulty:

* **DC 13** for a neutral stranger.
* **DC 15+** for someone from a hostile faction or with strong reasons not to join.

Use the Tier results:

* **Tier 1 (11-)**
  They refuse, or join at **Loyalty 1** with a clear **Complication** (hidden vice, angry faction, jealous colonist, etc.).
* **Tier 2 (12–16)**
  They join at **Loyalty 2–3** with no major complications.
* **Tier 3 (17+)**
  They join at **Loyalty 4** and bring a **bonus**: extra supplies, a useful contact, a rumor, or temporary aid.

Apply the **Story Die** as usual:

* Story Die **1 (Twist)**:
  There is some unexpected connection—maybe they know a PC from before, or reveal something that changes how the group sees them.
* Story Die **10 (Complication)**:
  Someone is unhappy about this deal—another colonist, a nearby faction, or an old enemy.

> **Example: Recruitment**
>
> **John (Storyteller)**: "At dusk, a limping woman approaches the gate. She’s a medic who fled a raider camp. She offers to work for you if you take her in."
>
> **Mary (Player)**: "I talk to her kindly, offer food, and show her the infirmary we’re building. I’ll try to convince her to stay."
>
> **John**: "Great. Make a Recruitment Check with **Spirit + Social**."
>
> **Mary**: *(Rolls a 16 total)*. "Tier 2!"
>
> **John**: "She joins at **Loyalty 3**. She has **Medical +30** and **Intellectual +20**—a perfect Sage for your research wing. Your Wealth goes up slightly from the extra colonist and the gear she brought."

---

### Loyalty in Play

Loyalty goes up or down based on how the colony treats its people.

Increase Loyalty by **+1** when:

* You save a Recruit from serious danger.
* You give them good gear, a private room, or meaningful recognition.
* You back them up in disputes or respect their beliefs and boundaries.

Decrease Loyalty by **–1** when:

* You repeatedly send them on dangerous tasks without support.
* You neglect their Needs (food, rest, recreation) for long periods.
* You treat them as expendable or side harshly against them.

When a Recruit’s Loyalty hits **0**, they suffer a **Loyalty Break**:

* They may leave in the night.
* They may sabotage something and flee.
* They may lash out at a specific colonist.
* In extreme cases, they may join an enemy faction.

When a Recruit reaches **Loyalty 5**, the group can choose to:

* Promote them to a **full player character** if someone wants to play them, or
* Treat them as a central story figure in future events.

---

### Wealth, Events, and New Recruits

Tie this into event generation (see Chapter 8):

* When the colony’s **Wealth crosses a new band** and you have an open Recruit slot, you can add a **“New Arrival”** option to your event rolls:

  * A refugee fleeing a raid.
  * A wandering medic or engineer looking for a safe home.
  * A disgraced noble or mercenary searching for work.
* High Wealth can also attract **dangerous** arrivals:

  * Desperate criminals, spies, or raiders pretending to be harmless.

Wealth tells the world that your colony is worth visiting—and worth attacking. Recruits are one of the rewards for surviving long enough to matter.
