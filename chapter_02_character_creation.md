# Chapter 2: Character Creation

In RimWorld, no one is a blank slate. Every colonist has a history—a childhood on a glitterworld, a career as a space marine, or a dark past as a pirate.

We use a **Lifepath System** to generate your Colonist. You will roll for your background, survive terms of service, and emerge as a scarred but capable survivor.

> **Example: The Table**
> John and Mary are ready to start playing. John will act as the Storyteller (ST), and Mary will be a Player (Colonist).

---

## Step 1: Attributes
Every Colonist starts with the following array. Assign these numbers to your 4 Attributes:
> **+2, +1, +0, -1**

*   **Vigor**: Physical power and endurance.
*   **Dexterity**: Precision and speed.
*   **Mind**: Intellect and analysis.
*   **Spirit**: Empathy and willpower.

> **Example: Choosing Attributes**
> **John**: "Mary, you need to assign values to your four attributes using this array: +2, +1, 0, -1. Think about what your character is good at."
> **Mary**: "I want to create a female colonist. She will be very smart, so I'll put the **+2 in Mind**. She's wise and determined, so **+1 in Spirit**. She likes physical activities but isn't a soldier, so **0 in Dexterity** and **-1 in Vigor**."

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

> **Example: Childhood**
> **John**: "Okay, now we need to know where she came from. You can choose or roll for a Childhood."
> **Mary**: "I'll let the dice decide." *(Rolls a 6)*. "Oh, nice! I'm a **War Refugee**. That fits. She had to be smart to survive the war."
> **John**: "Perfect. That gives you **+10 Shooting** and **+10 Medical**, and the **Pessimist** trait."

---

## Step 3: Adulthood (The Terms)
You serve **Terms** of 4 years. You must take at least **1 Term**, and can take up to **4**.
*   **Age**: Start at 14 + (4 x Terms).
*   **Skill Cap**: You cannot start with more than **30 Points** (+3) in any skill.

**For each Term:**
1.  **Choose a Career**.
2.  **Roll Survival (1d10 + Attribute)** vs DC 12.
    *   *Success*: You survive unscathed.
    *   *Failure*: You gain a **Scar** or **Addiction** (see Effects below), but you still complete the term.
    *   **Critical Failure (Natural 1)**: You barely survive. Gain a **Random Negative Trait** (Roll on Table B).
3.  **Gain Skills**: Increase the skill points. If increasing a skill would push it above the **30 Point** cap, you must allocate the excess points to any other skill listed in your current Career.
4.  **Roll Event (1d10)**: Each career has a 10-line table. When you hit an entry, resolve the **first outcome** listed. If you roll that same entry again in a later term, take the **second outcome**, then the third, then the fourth—no duplicate re-rolls needed.
    *   **Critical Success (Natural 10)**: You have a life-changing moment. Gain a **Random Positive Trait** (Roll on Table A) in addition to the Event result.

> **Example: First Term**
> **Mary**: "For her first term, she tried to find peace. I'll choose the **Drifter** career."
> **John**: "Roll for Survival. You need a 12 using Dexterity."
> **Mary**: *(Rolls 2d10 + 0)* "I got a 14! She survived."
> **John**: "Great. Now pick two skills and roll for an event."
> **Mary**: "I'll take **Social** and **Plants**. For the event..." *(Rolls a 10)* "Found Treasure! I start with a Masterwork item."

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

## Step 4: Personality
After completing your terms, you must determine your final personality quirks.
**Roll 1d100** on **Table A (Positive)** and **Roll 1d100** on **Table B (Negative)**. You gain both traits.
*   *Note*: If you roll a trait you already have (from Childhood or Events), reroll.

> **Example: Final Touches**
> **John**: "Last step. Let's see what quirks she developed. Roll d100 for a positive and negative trait."
> **Mary**: "Positive... 15. **Fast Learner**. That goes great with her high Mind! Negative... 26. **Gourmand**. She loves food a bit too much."
> **John**: "So we have a smart, pessimistic war refugee who wanders the rim looking for good meals. What's her name?"
> **Mary**: "Viper."

### Table A: Positive Traits (d100)
| d100 | Trait | Effect |
| :--- | :--- | :--- |
| 01-04 | **Beautiful** | **+2 Edge** on all Social interactions. NPC initial attitude is always one step higher. |
| 05-08 | **Brawler** | **+2 Accuracy** on Melee attacks. **-2 Accuracy** on Shooting. |
| 09-12 | **Cannibal** | Eating human meat restores **1d6 Stress** and grants **+5 Mood** for 24h. No penalty for butchering people. |
| 13-16 | **Fast Learner** | Gain **+1 XP** at the end of every session. |
| 17-20 | **Fast Walker** | Base Movement is **6 Squares** (instead of 5). |
| 21-24 | **Great Memory** | You do not lose Skill Points from aging or trauma events. Once per session, reroll a **Mind** check. |
| 25-28 | **Hard Worker** | Reduce the time required for any **Long Task** (Crafting, Building) by **10%**. |
| 29-32 | **Industrious** | Reduce the time required for any **Long Task** by **20%**. |
| 33-36 | **Iron-Willed** | Your **Mental Break Threshold** is increased by **2** (Harder to break). |
| 37-40 | **Jogger** | Base Movement is **7 Squares**. |
| 41-44 | **Kind** | Once per day, make a **Social** check to remove **1 Stress** from an ally. You never start Social Fights. |
| 45-48 | **Masochist** | Gain **+1 Mood** whenever you take Damage. Gain **Edge** on checks to resist Pain or Torture. |
| 49-52 | **Nerves of Steel** | Immune to **Minor Mental Breaks**. You only suffer Major or Extreme breaks. |
| 53-56 | **Nimble** | **+2 Defense** against Melee attacks. |
| 57-60 | **Optimist** | Permanent **+4 Mood** bonus. |
| 61-64 | **Pretty** | **+1 Edge** on Social interactions. |
| 65-68 | **Prostophile** | **+2 Mood** per artificial part installed. **-4 Mood** if you have none. |
| 69-72 | **Psychopath** | Immune to Stress from **Witnessing Death** or **Butchering**. Cannot gain "Bonded" benefits. |
| 73-76 | **Quick Sleeper** | A Full Rest takes **4 hours** instead of 8. |
| 77-80 | **Sanguine** | Permanent **+8 Mood** bonus. |
| 81-84 | **Steadfast** | Your **Mental Break Threshold** is increased by **1**. |
| 85-88 | **Super-Immune** | Roll **Stress Die** twice and take the lower result when checking for Disease progression. |
| 89-92 | **Too Smart** | Gain **+2 XP** per session, but your **Mental Break Threshold** is decreased by **1** (Easier to break). |
| 93-96 | **Tough** | Reduce all incoming HP damage by **1** (Minimum 0). |
| 97-00 | **Player's Choice** | Pick any Positive Trait from the list. |

### Table B: Negative Traits (d100)
| d100 | Trait | Effect |
| :--- | :--- | :--- |
| 01-03 | **Abrasive** | **-2 Bane** on Social checks. GM can trigger a **Social Fight** on a failed Social roll. |
| 04-06 | **Addicted** | Start with a dependency. If not satisfied daily, suffer **-2 Bane** on all rolls. |
| 07-09 | **Annoying Voice** | **-1 Bane** on Social checks. |
| 10-12 | **Body Purist** | **-5 Mood** per artificial part on self. **-1 Bane** on Social checks vs people with bionics. |
| 13-15 | **Chemical Fascination** | Consume drug every **3 days** or gain **1 Stress/day**. On Mental Break, you *will* binge. |
| 16-18 | **Chemical Interest** | Consume drug every **5 days** or gain **1 Stress/day**. |
| 19-21 | **Creepy Breathing** | **-1 Bane** on Social checks. |
| 22-24 | **Depressive** | Permanent **-8 Mood** penalty. |
| 25-27 | **Gourmand** | Consume **2 Rations** per day. If you eat a "Poor" meal, gain **1 Stress**. |
| 28-30 | **Jealous** | **-4 Mood** if any other colonist has a more impressive bedroom than you. |
| 31-33 | **Lazy** | Work speed on Long Tasks is **slower by 20%**. |
| 34-36 | **Misandrist** | **-2 Bane** on Social checks vs Men. |
| 37-39 | **Misogynist** | **-2 Bane** on Social checks vs Women. |
| 40-42 | **Nervous** | **Mental Break Threshold** is decreased by **1**. |
| 43-45 | **Neurotic** | Work speed **faster by 10%**, but **Mental Break Threshold** decreased by **1**. |
| 46-48 | **Pessimist** | Permanent **-4 Mood** penalty. |
| 49-51 | **PTSD** | When you hear a loud noise (gunshot, explosion), roll a **Panic Check** immediately. |
| 52-54 | **Pyromaniac** | On any Mental Break, you attempt to start fires. Cannot perform **Firefighting**. |
| 55-57 | **Sickly** | Reroll successful Disease resistance checks (take the worst). |
| 58-60 | **Slothful** | Work speed on Long Tasks is **slower by 35%**. |
| 61-63 | **Slow Learner** | XP cost to upgrade skills is **doubled**. |
| 64-66 | **Slowpoke** | Base Movement is **4 Squares**. |
| 67-69 | **Staggeringly Ugly** | **-2 Bane** on Social checks. Everyone starts with "Dislike" attitude. |
| 70-72 | **Teetotaler** | Cannot consume drugs. If forced (e.g., surgery), gain **1d6 Stress**. |
| 73-75 | **Ugly** | **-1 Bane** on Social checks. |
| 76-78 | **Very Neurotic** | Work speed **faster by 20%**, but **Mental Break Threshold** decreased by **2**. |
| 79-81 | **Volatile** | **Mental Break Threshold** decreased by **2**. |
| 82-84 | **Wimp** | If you take **any Damage**, make a **Vigor** save (DC 10) or be **Downed** (Stunned) 1 round. |
| 85-00 | **Player's Choice** | Pick any Negative Trait from the list. |

---

## Step 5: Other Traits (Neutral/Mixed)
These traits are usually acquired via specific Events or Childhoods, but you may choose to swap one of your Random Traits for one of these with Story Tellers approval.

*   **Ascetic**: No Mood penalty for "Awful" bedroom/food. Gain **+3 Mood** if bedroom is Awful.
*   **Asexual**: No attraction to others.
*   **Bisexual**: Attracted to men and women.
*   **Bloodlust**: Recover **1 Stress** when you kill an enemy. **2x chance** of starting Social Fights.
*   **Careful Shooter**: You can spend **2 Actions** to make a single Shooting attack with **+3 Accuracy**.
*   **Gay**: Attracted to same sex.
*   **Night Owl**: **+3 Mood** if awake at night (22:00-06:00). **-3 Mood** if awake during day (10:00-18:00).
*   **Nudist**: **+3 Mood** when naked. **-3 Mood** when wearing clothes.
*   **Psychic Sensitive**: Psychic events (Drones/Soothes) have **Double Effect** on you.
*   **Psychically Deaf**: Immune to Psychic events.
*   **Psychically Dull**: Psychic events have **Half Effect** on you.
*   **Undergrounder**: No Mood penalty for being indoors for long periods. **-3 Mood** if outdoors for >1 day.

> **Example: Swapping Traits**
> **Mary**: "Can I swap **Gourmand**? I don't think it fits the 'War Refugee' vibe to be obsessed with food."
> **John**: "Sure, you can swap one random trait for a Neutral one. Maybe **Night Owl** since she had to move at night to survive?"
> **Mary**: "Yes! That's perfect. She prefers the darkness."

---

## Step 6: Arrival Scenario
How did you get here? (Group Decision)

1.  **Crashlanded**: Standard. 3 Colonists. Good tech, some food.
2.  **Rich Explorer**: 1 Colonist. High-tech gun, turrets, gold. Lonely.
3.  **Lost Tribe**: 5 Colonists. Low tech, pemmican, herbal meds.
4.  **Naked Brutality**: 1 Colonist. No items. No clothes. Good luck.

> **Example: Arrival**
> **John**: "Okay, Viper is ready. Now, how does the group arrive on the Rim?"
> **Mary**: "Since we are doing a standard game, let's go with **Crashlanded**."
> **John**: "Crashlanded it is. You wake up to the screaming of sirens and tearing metal as your ship breaks apart in orbit..."

