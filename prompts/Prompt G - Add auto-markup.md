Integrate automatic glossary term markup during the rulebook build.

Use a remark-based approach (or the simplest equivalent) so known glossary terms are linked to the glossary anchors in the final HTML.
Ensure:
- terms are not linked inside code blocks
- longest-term match wins (e.g., "Story Die" before "Die")
- case-insensitive matching with canonical display text preserved

Rebuild output and verify links work.
