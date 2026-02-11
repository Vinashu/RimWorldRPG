# 🚀 RIMWORLDRPG — LAYOUT + ART PIPELINE FOR CODEX

---

# 🧠 Big Idea

Separate the system into:

### 1️⃣ Content Layer

(Markdown chapters, glossary, rules)

### 2️⃣ Visual Layer

(Images, icons, diagrams)

### 3️⃣ Layout Layer

(How content + visuals combine)

Codex works best when these are modular.

---

# 📁 1) Suggested Folder Structure

Add structure so Codex doesn’t improvise:

```
/chapters
/art
  /chapter_art
  /spot
  /icons
  /diagrams
  /flavor
/art_prompts
/layout
  layout_rules.md
  page_templates.md
/glossary
/output
```

---

# 🎨 2) Art Pipeline Workflow

## Step 1 — Codex detects art opportunities

Codex scans chapters and flags:

* Dense text blocks
* New mechanics
* Chapter starts
* Examples needing visuals

### Prompt for Codex

```
Scan this chapter and suggest:
- where a diagram would help
- where a spot illustration would help
- whether a chapter opener is needed

Do not generate art, only suggestions.
```

This prevents random art generation.

---

## Step 2 — Codex generates prompts, not images

Codex writes prompts using your art bible.

Example output:

```
ART NEEDED: Spot Illustration
Location: Combat chapter, Taking Cover section
Prompt: [formatted prompt]
Purpose: clarify cover usage
```

Saved to:

```
/art_prompts/chapter_X_prompts.md
```

You then batch-generate images yourself.

👉 This keeps humans as art directors.

---

## Step 3 — Human Review Gate (important)

You approve:
✔ Style consistency
✔ Character consistency
✔ Clarity

Then images go to `/art/...`

Codex should NEVER auto-accept images blindly.

---

## Step 4 — Codex places art references in chapters

Codex inserts:

```
[Art: spot/taking_cover_01.png
Purpose: Taking cover example]
```

Not final layout — just placeholders.

---

# 📐 3) Layout Pipeline

Codex follows layout rules from:

`/layout/layout_rules.md`

Example rules:

* Chapter opener art after H1
* Diagram after first rule explanation
* Spot art after dense text blocks
* Max 1 visual anchor per 2-page equivalent

---

## Layout Prompt for Codex

```
Apply layout_rules.md to this chapter.

Insert art placeholders where helpful.
Do not overuse visuals.
Preserve readability.
```

---

# 🔁 4) Iteration Loop

Your real workflow:

1. Write/refine chapter
2. Codex suggests visuals
3. Codex writes prompts
4. You generate art
5. Codex inserts placeholders
6. Final layout pass

Clean. Predictable. Scalable.

---

# ⚡ 5) Efficiency Trick (huge time saver)

Batch similar art:

Generate:

* 5 icons at once
* 5 spot illustrations at once
* 3 diagrams at once

Instead of one-by-one.

---

# 🧩 6) Codex Guardrails

Tell Codex explicitly:

❌ Don’t redesign art style
❌ Don’t regenerate approved prompts
❌ Don’t move art randomly
❌ Don’t exceed layout density rules

AI needs fences to be useful.

---

# 🧠 Pro Insight (Anne’s honest take)

Most indie projects fail visually because:

* Art is generated randomly
* No placement logic
* No consistency rules

You now have:
👉 a system
👉 a pipeline
👉 a repeatable workflow

That’s pro-level already.
