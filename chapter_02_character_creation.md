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
4.  **Roll Event (1d10)**: Each career has a 10-line table. When you hit an entry, resolve the **first outcome** listed. If you roll that same entry again in a later term, take the **second outcome**, then the third, then the fourth—no duplicate re-rolls needed.

### Career List

#### **Space Marine**
*   **Titles**: Marine (1) -> Sergeant (2) -> Veteran (3) -> War Hero (4).
*   **Survival**: Vigor
*   **Skills**: Shooting, Melee, Medical, Construction.
*   **Events (1d10)**:
    *   **1**: **Disaster** — (1) Unit wiped out; gain **PTSD** (Trait). (2) Salvage a shotgun from the wreckage. (3) Lose your left eye. (4) Receive a bionic eye and **+5** to each Space Marine skill.
    *   **2-3**: **Live Fire Drills** — (1) **+5** Shooting. (2) Gain a **Shooting Passion**. (3) **+10** Shooting. (4) **+10** Shooting and a Shooting Passion.
    *   **4-5**: **Boarding Action** — (1) **+5** Melee. (2) Gain a **Melee Passion**. (3) **+10** Melee. (4) **+10** Melee and a Melee Passion.
    *   **6-7**: **Field Medic** — (1) **+5** Medical. (2) Gain a **Medical Passion**. (3) **+10** Medical. (4) **+10** Medical and a Medical Passion.
    *   **8-9**: **Combat Engineer** — (1) **+5** Construction. (2) Gain a **Construction Passion**. (3) **+10** Construction. (4) **+10** Construction and a Construction Passion.
    *   **10**: **Legend of the Rim** — (1) Gain **Iron Will** (Trait). (2) Lose your left hand. (3) Gain a prosthetic hand. (4) Gain a bionic hand and **+5** to each Space Marine skill.

#### **Glitterworld Surgeon**
*   **Titles**: Intern (1) -> Resident (2) -> Specialist (3) -> Head Surgeon (4).
*   **Survival**: Mind
*   **Skills**: Medical, Intellectual, Social, Crafting.
*   **Events (1d10)**:
    *   **1**: **Malpractice** — (1) Patient died; you are **Exiled** to the Rim. (2) Reputation in tatters: start with **0 Silver** and **-10 Relations** with Glitterworld factions. (3) Surgical guilt leaves a **Scar** and **-5 Mood**. (4) You reinvent yourself as a trauma expert: **+5** Medical and a Masterwork **medkit**.
    *   **2-3**: **Emergency Rotation** — (1) **+5** Medical. (2) Gain a **Medical Passion**. (3) **+10** Medical. (4) **+10** Medical and a Medical Passion.
    *   **4-5**: **Research Sabbatical** — (1) **+5** Intellectual. (2) Gain an **Intellectual Passion**. (3) **+10** Intellectual. (4) **+10** Intellectual and an Intellectual Passion.
    *   **6-7**: **Bedside Diplomacy** — (1) **+5** Social. (2) Gain a **Social Passion**. (3) **+10** Social. (4) **+10** Social and a Social Passion.
    *   **8-9**: **Prototype Implants** — (1) **+5** Crafting. (2) Gain a **Crafting Passion**. (3) **+10** Crafting. (4) **+10** Crafting and a Crafting Passion.
    *   **10**: **Breakthrough** — (1) Gain **Prostophile** (Trait). (2) Fit yourself with a **prosthetic hand** for delicate work. (3) Upgrade to a **bionic hand**; **+5** to each Surgeon skill. (4) Publish the technique: **+5** to each Surgeon skill and start with **Improved medicine**.

#### **Drifter**
*   **Titles**: Vagabond (1) -> Wanderer (2) -> Traveler (3) -> Cosmopolitan (4).
*   **Survival**: Dexterity
*   **Skills**: Social, Melee, Plants, Construction.
*   **Events (1d10)**:
    *   **1**: **Addiction** — (1) Hooked on Smokeleaf or Wake-up (**Addiction**). (2) Spiraling costs: start with **-50 Silver** debt to a dealer. (3) Hard detox scars you (**Scar**, -5 Mood). (4) You beat it: clear Addiction and gain **Iron-Willed**.
    *   **2-3**: **Scavenged Tools** — (1) **+5** Construction. (2) Gain a **Construction Passion**. (3) **+10** Construction. (4) **+10** Construction and a Construction Passion.
    *   **4-5**: **Farmhand for Hire** — (1) **+5** Plants. (2) Gain a **Plants Passion**. (3) **+10** Plants. (4) **+10** Plants and a Plants Passion.
    *   **6-7**: **Streetwise** — (1) **+5** Social. (2) Gain a **Social Passion**. (3) **+10** Social. (4) **+10** Social and a Social Passion.
    *   **8-9**: **Bar Brawls** — (1) **+5** Melee. (2) Gain a **Melee Passion**. (3) **+10** Melee. (4) **+10** Melee and a Melee Passion.
    *   **10**: **Found Treasure** — (1) Start with a **Masterwork** item. (2) Add **+50 Silver**. (3) The stash includes a **rare tech relic** (Storyteller places). (4) Gain **Beautiful** (Trait) after a lavish makeover.

#### **Planetary Miner**
*   **Titles**: Digger (1) -> Blaster (2) -> Foreman (3) -> Deep Driller (4).
*   **Survival**: Vigor
*   **Skills**: Mining, Construction, Melee, Plants.
*   **Events (1d10)**:
    *   **1**: **Mine Collapse** — (1) Crushed leg: gain **Peg Leg**. (2) Company payout fits you with a **prosthetic leg**. (3) Repeat payout upgrades to a **bionic leg**. (4) You become a safety icon: **+5** to each Miner skill.
    *   **2-3**: **Deep Vein** — (1) **+5** Mining. (2) Gain a **Mining Passion**. (3) **+10** Mining. (4) **+10** Mining and a Mining Passion.
    *   **4-5**: **Tunnel Reinforcement** — (1) **+5** Construction. (2) Gain a **Construction Passion**. (3) **+10** Construction. (4) **+10** Construction and a Construction Passion.
    *   **6-7**: **Hydroponics Pilot** — (1) **+5** Plants. (2) Gain a **Plants Passion**. (3) **+10** Plants. (4) **+10** Plants and a Plants Passion.
    *   **8-9**: **Wildlife Lookout** — (1) **+5** Shooting. (2) Gain a **Shooting Passion**. (3) **+10** Shooting. (4) **+10** Shooting and a Shooting Passion.
    *   **10**: **Union Rep** — (1) Gain **Tough** (Trait). (2) Your advocacy earns **+1 Relations** with worker factions. (3) Receive a **Masterwork hardhat**. (4) Become legendary: **+5** to each Miner skill.

#### **Assassin**
*   **Titles**: Killer (1) -> Hitman (2) -> Slayer (3) -> Reaper (4).
*   **Survival**: Dexterity
*   **Skills**: Shooting, Melee, Crafting, Social.
*   **Events (1d10)**:
    *   **1-2**: **Hunted** — (1) A faction marks you for death (**Hunted**). (2) Bounty doubles: start with **-100 Silver** debt. (3) You maim the hunter: **+5** Melee and a Melee Passion. (4) You turn the tables: clear **Hunted** and gain **+10 Relations** with an enemy faction.
    *   **3-4**: **Contract** — (1) **+5** Shooting. (2) Gain a **Shooting Passion**. (3) **+10** Shooting. (4) **+10** Shooting and a Shooting Passion.
    *   **5-6**: **Close Work** — (1) **+5** Melee. (2) Gain a **Melee Passion**. (3) **+10** Melee. (4) **+10** Melee and a Melee Passion.
    *   **7-8**: **Black Market Tools** — (1) **+5** Crafting. (2) Gain a **Crafting Passion**. (3) **+10** Crafting. (4) **+10** Crafting and a Crafting Passion.
    *   **9-10**: **Legend** — (1) Gain **Bloodlust** (Trait). (2) Start with a **legendary blade**. (3) Your name spreads: **+1 Action** on the first combat round. (4) Your myth is sealed: **+5** to each Assassin skill.

---

## Step 4: Traits & Effects Defined

These lists pull the iconic RimWorld traits (Iron Will, Tough, Bloodlust, etc.) but are not exhaustive—feel free to import any missing favorites from the video game if your table wants them.

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
*   **Addicted**: Mirrors the Addiction effect below; you start play dependent on your chosen drug.
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

