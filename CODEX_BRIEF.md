# Codex Brief

## Purpose
This repository contains the RimWorld RPG tabletop rulebook (chaptered Markdown) plus build scripts that assemble the full HTML rulebook. The goal is a complete, playable TTRPG adaptation of RimWorld’s survival, colony management, and storytelling loop.

## Primary Goal
Finish the rulebook first. Prioritize completing, polishing, and making the chapters internally consistent before adding new tools, expansions, or extra content.

## Definition Of Done (Rulebook)
The rulebook is done only when all of the following are true.
*   Chapters 1–9 are fully written and aligned to `rulebook_toc.md`.
*   No chapter contains TODOs, placeholders, or “TBD” sections.
*   Every mechanic has clear inputs, outputs, and required numbers (DCs, costs, durations, ranges).
*   Every rule or procedure has at least one fully worked example.
*   All tables follow `STYLE_GUIDE.md`, include units, and are complete.
*   All cross-references resolve and all terminology matches the glossary.
*   `scripts/build_rulebook.js` produces `output/RimWorldRPG_Rulebook.html` with no broken links or missing sections.
*   The Quickstart chapter is playable end-to-end with setup, objectives, and resolution guidance.
*   Spelling and consistency pass completed across all chapters.

## Chapter-By-Chapter Workflow
Apply this workflow to each chapter in order (1 through 9).
1.  Reconcile the chapter’s outline with `rulebook_toc.md` and ensure all planned sections exist.
2.  Draft or expand each section until it is rules-complete.
3.  Specify mechanics with exact numbers, dice, and outcomes.
4.  Add fully worked examples for each key rule or procedure.
5.  Add or update tables and verify their data and units.
6.  Run a terminology pass against the glossary for consistency.
7.  Run a formatting pass against `STYLE_GUIDE.md`.
8.  Mark the chapter complete only if it meets the Definition Of Done.
