# Chapter 2: Character Creation

In RimWorld, no one is a blank slate. Every colonist has a history—a childhood on a glitterworld, a career as a space marine, or a dark past as a pirate.

We use a **Lifepath System** to generate your Colonist. You will roll for your background, survive terms of service, and emerge as a scarred but capable survivor.

---

## Step 1: Attributes
Every Colonist starts with the following array. Assign these numbers to your 4 Attributes:
> **+2, +1, +0, -1**

*   **Vigor**: Physical power and endurance.
*   **Dexterity**: Precision and speed.
*   **Mind**: Intellect and analysis.
*   **Spirit**: Empathy and willpower.

---

## Step 2: Childhood
Your early years define your potential. Choose or Roll (1d10) for your Childhood Backstory.
*   **Skill Points**: You gain raw points (0-30).
*   **Modifier**: Your Skill Modifier is `Floor(Skill Points / 10)`.
    *   *Example*: 15 Points = +1 Modifier. 20 Points = +2 Modifier.

| d10 | Backstory | Skill Points | Trait |
| :--- | :--- | :--- | :--- |
| 1 | **Urchin** | +10 Melee, +10 Social | **Scrapper**: Ignore the first Bane in melee combat. |
| 2 | **Vatgrown** | +1 Vigor (Attr), +10 Shooting | **Dull**: -2 to Social rolls, but +10 Mood. |
| 3 | **Noble Scion** | +1 Spirit (Attr), +10 Social | **Greedy**: Mood penalty if bedroom is not impressive. |
| 4 | **Midworld Student** | +1 Mind (Attr), +10 Intellectual | **Fast Learner**: +1 XP gain per session. |
| 5 | **Feral Child** | +10 Animals, +10 Plants | **Wild**: Cannot do Intellectual tasks. |
| 6 | **War Refugee** | +10 Shooting, +10 Medical | **Pessimist**: -5 Mood permanently. |
| 7 | **Caveworld Tender** | +10 Mining, +10 Plants | **Undergrounder**: No "Cabin Fever", hates outdoors. |
| 8 | **Industrial Orphan** | +10 Crafting, +10 Construction | **Industrious**: +1 to all Work Speed rolls. |
| 9 | **Sheriff** | +10 Shooting, +10 Melee | **Trigger-Happy**: -1 Accuracy, but +1 Action per turn. |
| 10 | **Pop Idol** | +20 Social | **Beautiful**: +2 to all Social interactions. |

---

## Step 3: Adulthood (The Terms)
You serve **Terms** of 4 years. You must take at least **1 Term**, and can take up to **4**.
*   **Age**: Start at 14 + (4 x Terms).
*   **Skill Cap**: You cannot start with more than **30 Points** (+3) in any skill.

**For each Term:**
1.  **Choose a Career**.
2.  **Roll Survival (2d10 + Attribute)** vs DC 12.
    *   *Success*: You survive unscathed.
    *   *Failure*: You gain a **Scar** or **Addiction** (see Effects below), but you still complete the term.
3.  **Gain Skills**: Distribute **20 Skill Points** among the Career Skills (max 10 per skill per term).
4.  **Roll Event (1d6)**: See what happened to you.
    *   *Duplicate Events*: If you roll the same event twice, gain **+1 Permanent Stress** instead of the duplicate effect.

### Career List

#### **Space Marine**
*   **Titles**: Marine (1) -> Sergeant (2) -> Veteran (3) -> War Hero (4).
*   **Survival**: Vigor
*   **Skills**: Shooting, Melee, Medical, Construction.
*   **Events**:
    *   1: **Disaster**: Unit wiped out. Gain **PTSD** (Trait).
    *   2-5: **Routine Patrol**: Gain +5 to one Career Skill.
    *   6: **Hero**: Promoted. Gain **Iron Will** (Trait).

#### **Glitterworld Surgeon**
*   **Titles**: Intern (1) -> Resident (2) -> Specialist (3) -> Head Surgeon (4).
*   **Survival**: Mind
*   **Skills**: Medical, Intellectual, Social, Crafting.
*   **Events**:
    *   1: **Malpractice**: Patient died. You are **Exiled** (Must flee to Rimworld).
    *   2-5: **Practice**: Gain +5 to Medical.
    *   6: **Breakthrough**: Invented a technique. Gain **Prostophile** (Trait).

#### **Drifter**
*   **Titles**: Vagabond (1) -> Wanderer (2) -> Traveler (3) -> Cosmopolitan (4).
*   **Survival**: Dexterity
*   **Skills**: Social, Melee, Plants, Construction.
*   **Events**:
    *   1: **Addiction**: Hooked on Smokeleaf or Wake-up.
    *   2-5: **Odd Jobs**: Gain +5 to any Skill.
    *   6: **Found Treasure**: Start with a Masterwork item.

#### **Planetary Miner**
*   **Titles**: Digger (1) -> Blaster (2) -> Foreman (3) -> Deep Driller (4).
*   **Survival**: Vigor
*   **Skills**: Mining, Construction, Melee, Plants.
*   **Events**:
    *   1: **Cave-in**: Crushed leg. Start with **Peg Leg**.
    *   2-5: **Strike**: Gain +5 Mining.
    *   6: **Motherlode**: Start with 500 Silver.

#### **Assassin**
*   **Titles**: Killer (1) -> Hitman (2) -> Slayer (3) -> Reaper (4).
*   **Survival**: Dexterity
*   **Skills**: Shooting, Melee, Crafting, Social.
*   **Events**:
    *   1: **Hunted**: A faction is actively hunting you (Storyteller Note).
    *   2-5: **Contract**: Gain +5 Shooting.
    *   6: **Legend**: Gain **Bloodlust** (Trait).

---

## Step 4: Traits & Effects Defined

### Event Effects
*   **Addiction**: You must consume the drug every 3 days or suffer **-2 Bane** on all rolls (Withdrawal).
*   **Exiled**: You arrive on the Rim with **0 Silver** and **-10 Relations** with your home faction.
*   **Hunted**: A hostile raid will spawn specifically to kill you within the first Quadrum.
*   **Peg Leg**: Your Movement Speed is reduced by **-1 Square**.
*   **Scar**: You have a permanent painful scar. **-5 Mood** permanently.

### Positive Traits
*   **Cannibal**: Can eat human meat without mood penalty. Gets +10 Mood!
*   **Iron-Willed**: Mental Break Threshold is 10% lower.
*   **Jogger**: +1 Movement Speed.
*   **Kind**: Never insults others. +1 to Social checks to calm people.
*   **Nimble**: +2 Defense against Melee.
*   **Prostophile (Body Modder)**: +5 Mood per artificial part. -5 Mood if you have none.
*   **Super-Immune**: Advantage on Disease resistance rolls.
*   **Tough**: Take -1 Damage from all sources.

### Negative Traits
*   **Abrasive**: -2 to Social checks. Starts social fights.
*   **Depressive**: -12 Mood permanently.
*   **Gourmand**: Hunger rate is 1.5x. Binge eats on Mental Break.
*   **Jealous**: Mood penalty if anyone has a better bedroom.
*   **PTSD**: Randomly suffer a **Panic Check** when hearing loud noises (Combat).
*   **Pyromaniac**: Will start fires on Mental Break. Cannot do Firefighting.
*   **Wimp**: Downed instantly if takes any damage.

### Neutral/Mixed Traits
*   **Ascetic**: Prefers awful bedrooms. No mood penalty for raw food.
*   **Bloodlust**: Gets mood bonus after killing. 4x chance of social fights.
*   **Night Owl**: Mood bonus at night, penalty during day.
*   **Psychic Sensitive**: +2 effect from Psychic Drones (Good or Bad).

---

## Step 5: Arrival Scenario
How did you get here? (Group Decision)

1.  **Crashlanded**: Standard. 3 Colonists. Good tech, some food.
2.  **Rich Explorer**: 1 Colonist. High-tech gun, turrets, gold. Lonely.
3.  **Lost Tribe**: 5 Colonists. Low tech, pemmican, herbal meds.
4.  **Naked Brutality**: 1 Colonist. No items. No clothes. Good luck.

