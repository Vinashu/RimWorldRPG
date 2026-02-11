Implement a glossary system.

Add:
- glossary/glossary.yml (with 10–20 initial core terms found in the rulebook)
- glossary/build_glossary.js that generates chapters/ZZ_Glossary.md using definition list format
- glossary/glossary.schema.json and a validation step (Node) that ensures unique terms, valid fields, and normalized casing
- package.json scripts: glossary:build, glossary:validate, build

Do not change gameplay mechanics. Keep diffs small.
After changes, run the glossary scripts and the rulebook build script; report success.
