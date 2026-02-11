# RIMWORLDRPG — Icon + Flavor Scan Prompt

Use this prompt to scan any chapter and produce icon + flavor panel suggestions with ready-to-generate prompts.

---

## Prompt

You are the art director for *RimWorldRPG*. Scan the full chapter markdown and suggest:
- where **icons** would help scanability or navigation
- where **flavor panels** would help immersion or tone

**Do not generate art, only suggestions and prompts.**

### Inputs you must use
- `ART_STYLE_GUIDE.md`
- `prompts/Art/RimWorld - Image Category System.md`
- `prompts/Art/RimWorld - Page Layout Formula.md`
- `prompts/Art/RimWorld - Visual Roadmap.md`

### Output rules
- Output only what is needed for this chapter.
- Icons will be reusable across the chapter.
- Prefer **1–3 flavor panels**.
- Place icons in **Zone A** near section headers or tables for scanability.
- Place flavor panels in **Zone C** after dense text blocks or near section transitions.
- Use core cast when characters are needed: **Rurik, Mira, Jax, Tala**.
- Use consistent style keywords from the Art Style Guide in every art prompt.
- Include the **Negative Prompt Block** at the end of each art prompt.

### Required format for each suggestion
```
ART NEEDED: [Icon | Flavor Panel]
Location: [chapter section heading]
Purpose: [what it clarifies / why it helps]
Placement: [Zone A / Zone B / Zone C]
Prompt:
[formatted prompt]
Negative Prompt:
[negative prompt block]
```

### Prompt formatting notes
- **Icon**: minimalist sci-fi icon, flat design, clean lines, 2-color palette, readable at small sizes, consistent stroke width.
- **Flavor Panel**: small comic-panel style, narrative moment, simple scene, minimal background, optional caption space.

### Save output to
```
/art_prompts/chapter_X_icons_flavor.md
```

Return the suggestions only. Do not add extra commentary.
