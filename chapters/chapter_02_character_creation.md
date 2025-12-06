# Chapter 2: Character Creation

In RimWorld, no one is a blank slate. Every colonist has a history—a childhood on a glitterworld, a career as a space marine, or a dark past as a pirate.

We use a **Lifepath System** to generate your Colonist. You will roll for your background, survive terms of service, and emerge as a scarred but capable survivor.

> **Example: The Table**
>
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
>
> **John**: "Mary, you need to assign values to your four attributes using this array: +2, +1, 0, -1. Think about what your character is good at."
>
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
| 2 | **Vatgrown** | +1 Vigor (Attr), +10 Shooting | **Dull**: +1 Bane to Social rolls, but +10 Mood. |
| 3 | **Noble Scion** | +1 Spirit (Attr), +10 Social | **Greedy**: Stress penalty if owning fewer/worse items than allies. |
| 4 | **Midworld Student** | +1 Mind (Attr), +10 Intellectual | **Fast Learner**: +1 XP gain per session. |
| 5 | **Feral Child** | +10 Animals, +10 Plants | **Wild**: Cannot do Intellectual tasks. |
| 6 | **War Refugee** | +10 Shooting, +10 Medical | **Pessimist**: -5 Mood permanently. |
| 7 | **Caveworld Tender** | +10 Mining, +10 Plants | **Undergrounder**: Immune to "Cabin Fever". Recover Stress indoors. -1 Mood/Day if outdoors > 8h. |
| 8 | **Industrial Orphan** | +10 Crafting, +10 Construction | **Industrious**: +1 Edge to all Construction rolls. |
| 9 | **Sheriff** | +10 Shooting, +10 Melee | **Trigger-Happy**: +1 Bane on Attack actions, but +1 Action per turn. |
| 10 | **Pop Idol** | +20 Social | **Beautiful**: +1 Edge to all Social interactions. |

> **Example: Childhood**
>
> **John**: "Okay, now we need to know where she came from. You can choose or roll for a Childhood."
>
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
    *   *Success*: You survive unscathed, gain the career title.
    *   *Failure*: You gain a **Scar** or **Addiction** (see Effects below), but you still complete the term.
    *   **Critical Failure (Natural 1)**: You barely survive. Gain a **Random Negative Trait** (Roll on Table B).
3.  **Gain Skills**: Chose 2 skills from your career and add 5 skill points to each. If increasing a skill would push it above the **30 Point** cap, you must allocate the excess points to any other skill listed in your current Career.
4.  **Roll Event (1d10)**: Each career has a 10-line table. When you hit an entry, resolve the **first outcome** listed. If you roll that same entry again in a later term, take the **second outcome**, then the third, then the fourth—no duplicate re-rolls needed.
    *   **Critical Success (Natural 10)**: You have a life-changing moment. Gain a **Random Positive Trait** (Roll on Table A) in addition to the Event result.

> **Example: First Term**
>
> **John**: "Now, let's see how she fares in her first term."
>
> **Mary**: "For her first term, she tried to find peace. I'll choose the **Drifter** career."
>
> **John**: "Roll for Survival. You need a 12 using Dexterity."
>
> **Mary**: *(Rolls 2d10 + 0)* "I got a 14! She survived."
>
> **John**: "Great. Now pick two skills and roll for an event."
>
> **Mary**: "I'll take **Social** and **Plants**. For the event..." *(Rolls a 10)* "Found Treasure! I start with a Masterwork item."

### Career List

#### **Space Marine**
*   **Titles**: Marine (1) -> Sergeant (2) -> Veteran (3) -> War Hero (4).
*   **Survival**: Vigor (DC 12)
*   **Skills**: Shooting, Melee, Medical, Construction.
*   **Events (1d10)**:
    *   **1**: **Disaster** — (1) Unit wiped out; gain **PTSD** (Trait). (2) Salvage a shotgun from the wreckage. (3) Lose your left eye. (4) Receive a bionic eye and **+5** to each Space Marine skill.
    *   **2-3**: **Live Fire Drills** — (1) **+5** Shooting. (2) Gain a **Shooting Passion**. (3) **+10** Shooting. (4) **+10** Shooting and a Shooting Passion.
    *   **4-5**: **Boarding Action** — (1) **+5** Melee. (2) Gain a **Melee Passion**. (3) **+10** Melee. (4) **+10** Melee and a Melee Passion.
    *   **6-7**: **Field Medic** — (1) **+5** Medical. (2) Gain a **Medical Passion**. (3) **+10** Medical. (4) **+10** Medical and a Medical Passion.
    *   **8-9**: **Combat Engineer** — (1) **+5** Construction. (2) Gain a **Construction Passion**. (3) **+10** Construction. (4) **+10** Construction and a Construction Passion.
    *   **10**: **Legend of the Rim** — (1) Gain **Iron Will** (Trait). (2) Lose your left hand. (3) Gain a prosthetic hand. (4) Gain a bionic hand and **+5** to each Space Marine skill.

#### **Planetary Miner**
*   **Titles**: Digger (1) -> Blaster (2) -> Foreman (3) -> Deep Driller (4).
*   **Survival**: Vigor (DC 12)
*   **Skills**: Mining, Construction, Melee, Plants.
*   **Events (1d10)**:
    *   **1**: **Mine Collapse** — (1) Trapped for days; gain **Claustrophobia** (Trait). (2) Find a **Steel Pickaxe** (Weapon). (3) Crushed leg (Lose Leg). (4) Gain a **Bionic Leg** and **+5** to each Miner skill.
    *   **2-3**: **Deep Vein** — (1) **+5** Mining. (2) Gain a **Mining Passion**. (3) **+10** Mining. (4) **+10** Mining and a Mining Passion.
    *   **4-5**: **Tunnel Reinforcement** — (1) **+5** Construction. (2) Gain a **Construction Passion**. (3) **+10** Construction. (4) **+10** Construction and a Construction Passion.
    *   **6-7**: **Hydroponics Pilot** — (1) **+5** Plants. (2) Gain a **Plants Passion**. (3) **+10** Plants. (4) **+10** Plants and a Plants Passion.
    *   **8-9**: **Wildlife Lookout** — (1) **+5** Shooting. (2) Gain a **Shooting Passion**. (3) **+10** Shooting. (4) **+10** Shooting and a Shooting Passion.
    *   **10**: **Motherlode** — (1) Gain **Tough** (Trait). (2) Lose your right leg. (3) Gain a **Prosthetic Leg**. (4) Gain a **Bionic Leg** and **+5** to each Miner skill.

#### **Assassin**
*   **Titles**: Killer (1) -> Hitman (2) -> Slayer (3) -> Reaper (4).
*   **Survival**: Dexterity (DC 12)
*   **Skills**: Shooting, Melee, Crafting, Social.
*   **Events (1d10)**:
    *   **1**: **Hunted** — (1) Hunters are everywhere; gain **Nervous** (Trait). (2) Keep a **Plasteel Knife** from a target. (3) Lose your left arm escaping a trap. (4) Gain a **Bionic Arm** and **+5** to each Assassin skill.
    *   **2-3**: **Contract** — (1) **+5** Shooting. (2) Gain a **Shooting Passion**. (3) **+10** Shooting. (4) **+10** Shooting and a Shooting Passion.
    *   **4-5**: **Close Work** — (1) **+5** Melee. (2) Gain a **Melee Passion**. (3) **+10** Melee. (4) **+10** Melee and a Melee Passion.
    *   **6-7**: **Black Market Tools** — (1) **+5** Crafting. (2) Gain a **Crafting Passion**. (3) **+10** Crafting. (4) **+10** Crafting and a Crafting Passion.
    *   **8-9**: **Social Integration** — (1) **+5** Social. (2) Gain a **Social Passion**. (3) **+10** Social. (4) **+10** Social and a Social Passion.
    *   **10**: **Legend** — (1) Gain **Bloodlust** (Trait). (2) Lose your right arm in a duel. (3) Gain a **Prosthetic Arm**. (4) Gain a **Bionic Arm** and **+5** to each Assassin skill.

#### **Drifter**
*   **Titles**: Vagabond (1) -> Wanderer (2) -> Traveler (3) -> Cosmopolitan (4).
*   **Survival**: Dexterity (DC 12)
*   **Skills**: Social, Melee, Plants, Construction.
*   **Events (1d10)**:
    *   **1**: **Mugged** — (1) Beaten badly; gain **Wimp** (Trait). (2) Keep a **Shiv** used for defense. (3) Lose your left eye in a brawl. (4) Gain a **Bionic Eye** and **+5** to each Drifter skill.
    *   **2-3**: **Scavenged Tools** — (1) **+5** Construction. (2) Gain a **Construction Passion**. (3) **+10** Construction. (4) **+10** Construction and a Construction Passion.
    *   **4-5**: **Farmhand for Hire** — (1) **+5** Plants. (2) Gain a **Plants Passion**. (3) **+10** Plants. (4) **+10** Plants and a Plants Passion.
    *   **6-7**: **Streetwise** — (1) **+5** Social. (2) Gain a **Social Passion**. (3) **+10** Social. (4) **+10** Social and a Social Passion.
    *   **8-9**: **Bar Brawls** — (1) **+5** Melee. (2) Gain a **Melee Passion**. (3) **+10** Melee. (4) **+10** Melee and a Melee Passion.
    *   **10**: **Fortune** — (1) Gain **Beautiful** (Trait) after a makeover. (2) Lose your right eye to infection. (3) Gain a **Prosthetic Eye**. (4) Gain a **Bionic Eye** and **+5** to each Drifter skill.

#### **Glitterworld Surgeon**
*   **Titles**: Intern (1) -> Resident (2) -> Specialist (3) -> Head Surgeon (4).
*   **Survival**: Mind (DC 12)
*   **Skills**: Medical, Intellectual, Social, Crafting.
*   **Events (1d10)**:
    *   **1**: **Malpractice** — (1) Patient died; gain **Exiled** (Trait). (2) Steal a **Medkit** before fleeing. (3) Lose your left hand in a punishment ritual. (4) Gain a **Bionic Hand** and **+5** to each Surgeon skill.
    *   **2-3**: **Emergency Rotation** — (1) **+5** Medical. (2) Gain a **Medical Passion**. (3) **+10** Medical. (4) **+10** Medical and a Medical Passion.
    *   **4-5**: **Research Sabbatical** — (1) **+5** Intellectual. (2) Gain an **Intellectual Passion**. (3) **+10** Intellectual. (4) **+10** Intellectual and an Intellectual Passion.
    *   **6-7**: **Bedside Diplomacy** — (1) **+5** Social. (2) Gain a **Social Passion**. (3) **+10** Social. (4) **+10** Social and a Social Passion.
    *   **8-9**: **Prototype Implants** — (1) **+5** Crafting. (2) Gain a **Crafting Passion**. (3) **+10** Crafting. (4) **+10** Crafting and a Crafting Passion.
    *   **10**: **Breakthrough** — (1) Gain **Prostophile** (Trait). (2) Lose your right hand to experiment. (3) Gain a **Prosthetic Hand**. (4) Gain a **Bionic Hand** and **+5** to each Surgeon skill.

#### **Starship Engineer**
*   **Titles**: Greasemonkey (1) -> Tech (2) -> Chief Engineer (3) -> Shipwright (4).
*   **Survival**: Mind (DC 12)
*   **Skills**: Construction, Intellectual, Crafting, Shooting.
*   **Events (1d10)**:
    *   **1**: **Reactor Leak** — (1) Radiation burns; gain **Sickly** (Trait). (2) Salvage a box of **Components**. (3) Lose your left hand to plasma burn. (4) Gain a **Bionic Hand** and **+5** to each Engineer skill.
    *   **2-3**: **Jury-Rigging** — (1) **+5** Construction. (2) Gain a **Construction Passion**. (3) **+10** Construction. (4) **+10** Construction and a Construction Passion.
    *   **4-5**: **Sensor Arrays** — (1) **+5** Intellectual. (2) Gain an **Intellectual Passion**. (3) **+10** Intellectual. (4) **+10** Intellectual and an Intellectual Passion.
    *   **6-7**: **Fabrication** — (1) **+5** Crafting. (2) Gain a **Crafting Passion**. (3) **+10** Crafting. (4) **+10** Crafting and a Crafting Passion.
    *   **8-9**: **Turret Calibration** — (1) **+5** Shooting. (2) Gain a **Shooting Passion**. (3) **+10** Shooting. (4) **+10** Shooting and a Shooting Passion.
    *   **10**: **Archeotech Discovery** — (1) Gain **Transhumanist** (Trait). (2) Lose your right hand to a security bot. (3) Gain a **Prosthetic Hand**. (4) Gain a **Bionic Hand** and **+5** to each Engineer skill.

#### **Diplomat**
*   **Titles**: Envoy (1) -> Consul (2) -> Ambassador (3) -> High Chancellor (4).
*   **Survival**: Spirit (DC 12)
*   **Skills**: Social, Intellectual, Melee, Artistic.
*   **Events (1d10)**:
    *   **1**: **International Scandal** — (1) Disgraced; gain **Staggeringly Ugly** (Trait - Reputation). (2) Keep a **Fine Suit** from your old life. (3) Lose your jaw/tongue (cannot speak). (4) Gain a **Bionic Jaw** and **+5** to each Diplomat skill.
    *   **2-3**: **Treaty Negotiation** — (1) **+5** Social. (2) Gain a **Social Passion**. (3) **+10** Social. (4) **+10** Social and a Social Passion.
    *   **4-5**: **Legal Studies** — (1) **+5** Intellectual. (2) Gain an **Intellectual Passion**. (3) **+10** Intellectual. (4) **+10** Intellectual and an Intellectual Passion.
    *   **6-7**: **Honor Duels** — (1) **+5** Melee. (2) Gain a **Melee Passion**. (3) **+10** Melee. (4) **+10** Melee and a Melee Passion.
    *   **8-9**: **Cultural Exchange** — (1) **+5** Artistic. (2) Gain an **Artistic Passion**. (3) **+10** Artistic. (4) **+10** Artistic and an Artistic Passion.
    *   **10**: **Peacebringer** — (1) Gain **Kind** (Trait). (2) Lose your jaw to an assassin. (3) Gain a **Denture** (Prosthetic). (4) Gain a **Bionic Jaw** and **+5** to each Diplomat skill.

#### **Tribal Elder**
*   **Titles**: Gatherer (1) -> Healer (2) -> Shaman (3) -> High Chieftain (4).
*   **Survival**: Spirit (DC 12)
*   **Skills**: Medical, Animals, Plants, Social.
*   **Events (1d10)**:
    *   **1**: **Raid** — (1) Tribe wiped out; gain **Depressive** (Trait). (2) Save a pouch of **Herbal Medicine**. (3) Lose your left leg fleeing. (4) Gain a **Bionic Leg** (Archeotech gift) and **+5** to each Elder skill.
    *   **2-3**: **Herbalism** — (1) **+5** Medical. (2) Gain a **Medical Passion**. (3) **+10** Medical. (4) **+10** Medical and a Medical Passion.
    *   **4-5**: **Beast Taming** — (1) **+5** Animals. (2) Gain an **Animals Passion**. (3) **+10** Animals. (4) **+10** Animals and an Animals Passion.
    *   **6-7**: **Sacred Groves** — (1) **+5** Plants. (2) Gain a **Plants Passion**. (3) **+10** Plants. (4) **+10** Plants and a Plants Passion.
    *   **8-9**: **Council Meetings** — (1) **+5** Social. (2) Gain a **Social Passion**. (3) **+10** Social. (4) **+10** Social and a Social Passion.
    *   **10**: **Spirit Vision** — (1) Gain **Psychic Sensitivity** (Trait). (2) Lose your right leg to a spirit beast. (3) Gain a **Peg Leg**. (4) Gain a **Bionic Leg** (Archeotech gift) and **+5** to each Elder skill. 
---

## Step 4: Personality
After completing your terms, you must determine your final personality quirks.
**Roll 1d100** on **Table A (Positive)** and **Roll 1d100** on **Table B (Negative)**. You gain both traits.
*   *Note*: If you roll a trait you already have (from Childhood or Events), reroll.

> **Example: Final Touches**
>
> **John**: "Last step. Let's see what quirks she developed. Roll d100 for a positive and negative trait."
>
> **Mary**: "Positive... 15. **Fast Learner**. That goes great with her high Mind! Negative... 26. **Gourmand**. She loves food a bit too much."
>
> **John**: "So we have a smart, pessimistic war refugee who wanders the rim looking for good meals. What's her name?"
>
> **Mary**: "Viper."

### Table A: Positive Traits (d100)
| d100 | Trait | Effect |
| :--- | :--- | :--- |
| 01-04 | **Beautiful** | **+1 Edge** on all Social interactions. NPC initial attitude is always one step higher. |
| 05-08 | **Brawler** | **+1 Edge** on Melee attacks. **+1 Bane** on Shooting. |
| 09-12 | **Cannibal** | Eating human meat restores **1d6 Stress** and grants **+5 Mood** for 24h. No penalty for butchering people. |
| 13-16 | **Fast Learner** | Gain **+1 XP** at the end of every session. |
| 17-20 | **Fast Walker** | Have one extra movement besides the 4 Action points. |
| 21-24 | **Great Memory** | You do not lose Skill Points from aging or trauma events. Once per session, reroll a **Mind** check. |
| 25-28 | **Hard Worker** | Gain **+1 Edge** to all Crafting rolls. |
| 29-32 | **Industrious** | Gain **+1 Edge** to all Construction rolls. |
| 33-36 | **Iron-Willed** | Your **Mental Break Threshold** is increased by **2** (Harder to break). |
| 37-40 | **Jogger** | **+1 Movement Range** (Zone) when taking a Move Action. |
| 41-44 | **Kind** | Once per day, make a **Social** check to remove **1 Stress** from an ally. You never start Social Fights. |
| 45-48 | **Masochist** | Gain **+1 Mood** whenever you take Damage. Gain **Edge** on checks to resist Pain or Torture. |
| 49-52 | **Nerves of Steel** | Immune to **Minor Mental Breaks**. You only suffer Major or Extreme breaks. |
| 53-56 | **Nimble** |Give **+1 Ban** on Melee attackers. |
| 57-60 | **Optimist** | Permanent **+4 Mood** bonus. |
| 61-64 | **Pretty** | **+1 Edge** on Social interactions. |
| 65-68 | **Prostophile** | **+2 Mood** per artificial part installed. **-4 Mood** if you have none. |
| 69-72 | **Psychopath** | Immune to Stress from **Witnessing Death** or **Butchering**. Cannot gain "Bonded" benefits. |
| 73-76 | **Quick Sleeper** | A Full Rest takes **4 hours** instead of 8 (1 extra daily activity in the Colony). |
| 77-80 | **Sanguine** | Permanent **+8 Mood** bonus. |
| 81-84 | **Steadfast** | Your **Mental Break Threshold** is increased by **1**. |
| 85-88 | **Super-Immune** | Roll **Stress Die** twice and take the lower result when checking for Disease progression. |
| 89-92 | **Too Smart** | Gain **+2 XP** per session, but your **Mental Break Threshold** is decreased by **1** (Easier to break). |
| 93-96 | **Tough** | Reduce all incoming HP damage by **1** (Minimum 0). |
| 97-00 | **Player's Choice** | Pick any Positive Trait from the list. |

### Table B: Negative Traits (d100)
| d100 | Trait | Effect |
| :--- | :--- | :--- |
| 01-03 | **Abrasive** | **+1 Bane** on Social checks. ST can trigger a **Social Fight** on a failed Social check. |
| 04-06 | **Addicted** | Start with a dependency. If not satisfied daily, suffer **+1 Bane** on all rolls. |
| 07-09 | **Annoying Voice** | **+1 Bane** on Social checks. |
| 10-12 | **Body Purist** | **-2 Mood** per artificial part on self. **+1 Bane** on Social checks vs people with bionics. |
| 13-15 | **Chemical Fascination** | Consume drug every **3 days** or gain **1 Stress/day**. On Mental Break, you *will* binge. |
| 16-18 | **Chemical Interest** | Consume drug every **5 days** or gain **1 Stress/day**. |
| 19-21 | **Creepy Breathing** | **+1 Bane** on Social checks. |
| 22-24 | **Depressive** | Permanent **-8 Mood** penalty. |
| 25-27 | **Gourmand** | Consume **2 Rations** per day. If you eat a "Poor" meal, gain **1 Stress**. |
| 28-30 | **Jealous** | **+1 Bane** on Social checks with allies who have better gear/quarters. Gain **1 Stress/Day** if not 'Top Dog'. |
| 31-33 | **Lazy** | -1 daily activity in the Colony. |
| 34-36 | **Misandrist** | **+1 Bane** on Social checks vs Men. |
| 37-39 | **Misogynist** | **+1 Bane** on Social checks vs Women. |
| 40-42 | **Nervous** | **Mental Break Threshold** is decreased by **1**. |
| 43-45 | **Neurotic** | +1 daily activity in the Colony, but **Mental Break Threshold** decreased by **1**. |
| 46-48 | **Pessimist** | Permanent **-4 Mood** penalty. |
| 49-51 | **PTSD** | When you hear a loud noise (gunshot, explosion), roll a **Panic Check** immediately. |
| 52-54 | **Pyromaniac** | On any Mental Break, you attempt to start fires. Cannot perform **Firefighting**. |
| 55-57 | **Sickly** | Reroll successful Disease resistance checks (take the worst). |
| 58-60 | **Slothful** | daily activities in the Colony are downgraded by 1 Tier. |
| 61-63 | **Slow Learner** | -1XP per session. |
| 64-66 | **Slowpoke** | Second movement cost is doubled. |
| 67-69 | **Staggeringly Ugly** | **+1 Bane** on Social checks. Everyone starts with "Dislike" attitude. |
| 70-72 | **Teetotaler** | Cannot consume drugs. If forced (e.g., surgery), gain **1d6 Stress**. |
| 73-75 | **Ugly** | **+1 Bane** on Social checks. |
| 76-78 | **Very Neurotic** | +1 dialy activity in the Colony with upgraded Tier, but **Mental Break Threshold** decreased by **2**. |
| 79-81 | **Volatile** | **Mental Break Threshold** decreased by **2**. |
| 82-84 | **Wimp** | If you take **any Damage**, make a **Vigor** save (DC 10) or be **Downed** (Stunned) 1 round. |
| 85-00 | **Player's Choice** | Pick any Negative Trait from the list. |

---

## Step 5: Other Traits (Neutral/Mixed)
These traits are usually acquired via specific Events or Childhoods, but you may choose to swap one of your Random Traits for one of these with Story Tellers approval.

*   **Ascetic**: Recover **1 Stress/Day** when eating Raw Food or sleeping on ground. **+1 Bane** if using Luxury items.
*   **Asexual**: No attraction to others.
*   **Bisexual**: Attracted to men and women.
*   **Bloodlust**: Recover **1 Stress** when you kill an enemy. **2x chance** of starting Social Fights.
*   **Careful Shooter**: Action: **Take Aim** (1 AP). Grants **+2 Edge** on next shot (normally +1).
*   **Gay**: Attracted to same sex.
*   **Night Owl**: cannot be surprised by night events.
*   **Nudist**: **+3 Mood** when naked. **-3 Mood** when wearing clothes.
*   **Psychic Sensitive**: Psychic events (Drones/Soothes) have **Double Effect** on you.
*   **Psychically Deaf**: Immune to Psychic events.
*   **Psychically Dull**: Psychic events have **Half Effect** on you.
*   **Undergrounder**: Immune to "Cabin Fever". Recover Stress indoors. -1 Mood/Day if outdoors > 8h.

> **Example: Swapping Traits**
>
> **John**: "Great! Now, let's talk about traits."
>
> **Mary**: "Can I swap **Gourmand**? I don't think it fits the 'War Refugee' vibe to be obsessed with food."
>
> **John**: "Sure, you can swap one random trait for a Neutral one. Maybe **Night Owl** since she had to move at night to survive?"
>
> **Mary**: "Yes! That's perfect. She prefers the darkness."

---

## Step 6: Arrival Scenario
How did you get here? (Group Decision).

1.  **Crashlanded** (Standard):
    *   **Tech Level: Industrial 2**. Good tech, some food.
    *   **Equipment**: Bolt-action Rifle, Revolver, Plasteel Knife, Flak Vest, 30 Packaged Meals, Medkit (x3).
2.  **Rich Explorer** (Solo Skilled):
    *   **Tech Level: Spacer 1**. High-tech gun, turrets, gold. Lonely.
    *   **Equipment**: Charge Rifle, Glitterworld Medicine (x5), Gold (200), Auto-Turret Blueprint.
3.  **Lost Tribe** (Group Survival):
    *   **Tech Level: Neolithic 4 (Max)**. Low tech, pemmican, herbal meds.
    *   **Equipment**: Recurve Bow (x2), Ikwa (x2), Pila (x1), Pemmican (100), Herbal Medicine (x10).
4.  **Naked Brutality** (Hardcore):
    *   **Tech Level: Neolithic 1**. No items. No clothes. Good luck.
    *   **Equipment**: None. You start with 0 Food and just your bare hands.

> **Example: Arrival**
>
> **John**: "Okay, Viper is ready. Now, how does the group arrive on the Rim?"
>
> **Mary**: "Since we are doing a standard game, let's go with **Crashlanded**."
>
> **John**: "Crashlanded it is. You wake up to the screaming of sirens and tearing metal as your ship breaks apart in orbit..."

