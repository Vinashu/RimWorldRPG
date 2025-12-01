# Survival & Combat Rules

## Stress & Mental Breaks

Life on the Rim is hard. Colonists accumulate **Stress** which can lead to a **Mental Break**.

### Gaining Stress
*   **Pushing a Roll**: +1 Stress (voluntary).
*   **Witnessing Death**: +1 Stress.
*   **Starvation/Exhaustion**: +1 Stress per day.
*   **Low Mood**: If Mood < Threshold, gain +1 Stress per scene.

### The Stress Die
For every point of Stress, add **1d6** to your dice pool for ALL rolls.
*   **Benefit**: The d6 result adds to your total (helping you hit Tier 2/3).
*   **Risk**: If you roll a **1** on any Stress Die, you trigger a **Panic Check**.

### Panic Check (Mental Break)
Roll `1d6 + Current Stress`. Consult the table:

| Result | Break Type | Effect |
| :--- | :--- | :--- |
| **1-6** | **Anxious** | **Trembling**: -2 to all Agility rolls for 1 hour. |
| **7-9** | **Minor Break** | **Hide in Room**: Character refuses to act for 1d4 hours. |
| **10-12** | **Major Break** | **Sad Wander**: Character walks towards danger, ignoring commands. |
| **13+** | **Extreme Break** | **Berserk**: Character attacks nearest creature (friend or foe) for 1d6 rounds. |

*Relief*: Stress is reset to 0 after a full night's sleep in a decent bed, or by "relaxing socially" (Social check).

---

## Combat

Combat is played in **Rounds**.

### Initiative
Roll `Agility + Shooting/Melee`. Highest acts first.

### Actions
On your turn, you can Move and take one Action.
*   **Attack**: Make a Colonist Roll (Shooting or Melee).
*   **Take Cover**: Gain **Edge** on defense.
*   **Rescue**: Drag a downed ally.

### Damage & Wounds
We do not use HP for everything. We use a **Wound System** for major hits.

*   **Tier 1 Hit (Glance)**: Target loses 1d4 HP.
*   **Tier 2 Hit (Solid)**: Target loses 1d10 HP.
*   **Tier 3 Hit (Critical)**: Target takes a **Wound** (e.g., Bleeding, Broken Bone) AND loses 1d10 HP.

**Death**: If HP reaches 0, the Colonist is **Downed** (unconscious, bleeding out). They die in `Vigor` rounds unless tended.

### Body Parts, Banes, and Replacements
RimWorld-style injuries matter because they change how you play. Track lost body parts and apply the following Banes (stacking with other penalties). If multiple entries apply, use the highest Bane for that limb.

*   **Missing Hand**: **+1 Bane** to Shooting, Melee (parries/grapples), Construction, Crafting, and Medical checks that require fine motor control. Cannot dual-wield.
*   **Missing Arm**: **+2 Bane** to the same skills as a missing hand and to any roll that assumes two-handed lifting (Athletics, Mining, hauling). Cannot use two-handed weapons or shields.
*   **Missing Foot**: **+1 Bane** to Athletics/Stealth/Acrobatics movement rolls. **-1 Movement**.
*   **Missing Leg**: **+2 Bane** to Athletics/Stealth/Acrobatics and any roll that requires bracing (recoil control in Shooting, charging in Melee). **-2 Movement**; cannot sprint.
*   **Missing Kidney**: **+1 Bane** on Vigor checks to resist poison, disease, or toxic buildup. Reduce natural healing rates by 25%.
*   **Missing Lung**: **+1 Bane** on running, swimming, or stealth rolls that rely on breath control. Gain **+1 Stress** after any Scene that includes a sprint or extended exertion.
*   **Scars (Painful)**: Each noticeable scar imposes **-1 Mood** (stacks). After **3+ scars**, add **+1 Bane** to Social checks (appearance/pain tells).

**Replacements**
*   **Peg Leg/Hook Hand**: Cancels the “missing” state but keeps the **+1 Bane** listed above and halves the Movement penalty (rounded up).
*   **Prosthetic**: Removes Banes from the missing part but not Stress triggers; ignore Movement penalties.
*   **Bionic**: Removes Banes and Stress triggers; gain **Edge** once per Scene on one roll that uses the replaced limb.

### Cover
*   **Partial Cover**: Attacker suffers **Bane**.
*   **Full Cover**: Attacker suffers **Double Bane**.

---

## Base Building (The Colony Phase)

The Base is the heart of the game. It has its own stats and resources.

### Resources
We track 5 abstract resource categories:
1.  **Food**: Meals, pemmican, raw meat/veg.
2.  **Textile**: Leather, cloth, wool.
3.  **Ore**: Steel, plasteel, gold.
4.  **Components**: Machinery parts, electronics.
5.  **Medicine**: Herbal meds, glitterworld meds.

### Construction & Defense
*   **Construction Points (CP)**: Every building project has a cost (e.g., Turret = 5 CP).
    *   **Construction Roll**: Tier 1 = 1 CP, Tier 2 = 3 CP, Tier 3 = 5 CP.
*   **Defense Pool**: Completed defensive structures (walls, sandbags, turrets) add to the **Defense Pool**.
    *   **Burn Defense**: During a Raid, players can spend Defense Points to:
        *   Negate an enemy success.
        *   Reduce damage taken by a Colonist.
        *   Prevent damage to a building.

### Daily Actions
Players assign Colonists to tasks:
*   **Farming** (Plants): High Food, Low Textile.
*   **Animal husbandry** (Animals): Low Food, High Textile or points twards taiming.
*   **Hunting** (Shooting/Animals): Medium Food, Medium Textile.
*   **Mining** (Mining): High Ore, Low Components.
*   **Cooking** (Cooking): Convert Food into Meals (think about medicine production as well)
*   **Crafting** (Crafting): Convert Ore/Textile into Weapons/Apparel.
*   **Building** (Construction): Convert Ore/Textile into buildings projects.
*   **Researching** (Intellectual): Gain research points to unlock new technologies.
*   **Social**: (Social): Improve faction relation (must have a representative in the colony or Comms Link)
*   **Healing**: (Medicine): Treat medical conditions.
*   **Artistic**: (Artistic): Need to think how to use it

---

## Caravan (The Expedition Phase)

Traveling the world map to trade or attack.

### Travel Speed
*   **Base Speed**: 1 Hex per day.
*   **Modifiers**: +1 if all have Mounts (Animals), -1 if carrying Heavy Load.

### Foraging
*   Make a **Plants** check daily.
    *   **Success**: Find enough food for the day.
    *   **Failure**: Consume rations. If no rations, gain Stress.

### Ambush
*   **Visibility**: Large caravans are easier to spot.
*   **Stealth**: Roll **Animals/Intellectual** to avoid detection.

