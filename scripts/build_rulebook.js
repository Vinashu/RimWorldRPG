const fs = require('fs');
const path = require('path');

const glossaryPath = path.join(__dirname, '../glossary/glossary.yml');

// List of chapters in order
const chapters = [
    '../chapters/chapter_01_core.md',
    '../chapters/chapter_02_character_creation.md',
    '../chapters/chapter_03_skills_and_checks.md',
    '../chapters/chapter_04_combat_and_survival.md',
    '../chapters/chapter_05_equipment.md',
    '../chapters/chapter_06_colony.md',
    '../chapters/chapter_07_world.md',
    '../chapters/chapter_08_storyteller.md',
    '../chapters/chapter_09_quickstart.md',
    '../chapters/ZZ_Glossary.md'
];

const outputFileName = '../output/RimWorldRPG_Rulebook.html';
const cssFileName = '../styles/rulebook_styles.css';

function slugify(term) {
    return term
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-');
}

function escapeRegExp(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function normalizeWhitespace(value) {
    return value.replace(/\s+/g, ' ').trim();
}

function parseYamlValue(value) {
    const trimmed = value.trim();
    if (!trimmed) return '';
    if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
        return trimmed.slice(1, -1);
    }
    return trimmed;
}

function parseGlossaryYaml(text) {
    const lines = text.replace(/\r\n/g, '\n').split('\n');
    const terms = [];
    let inTerms = false;
    let current = null;

    for (let index = 0; index < lines.length; index += 1) {
        const raw = lines[index];
        const line = raw.replace(/\s+$/g, '');
        const trimmed = line.trim();

        if (!trimmed || trimmed.startsWith('#')) {
            continue;
        }

        if (!inTerms) {
            if (trimmed === 'terms:') {
                inTerms = true;
                continue;
            }
            throw new Error(`Line ${index + 1}: expected "terms:"`);
        }

        const listMatch = line.match(/^\s*-\s*(.*)$/);
        if (listMatch) {
            if (current) {
                terms.push(current);
            }
            current = {};
            const remainder = listMatch[1].trim();
            if (remainder) {
                const kvMatch = remainder.match(/^(term|definition):\s*(.*)$/);
                if (!kvMatch) {
                    throw new Error(`Line ${index + 1}: invalid list item`);
                }
                current[kvMatch[1]] = parseYamlValue(kvMatch[2]);
            }
            continue;
        }

        const kvMatch = line.match(/^\s*(term|definition):\s*(.*)$/);
        if (kvMatch) {
            if (!current) {
                throw new Error(`Line ${index + 1}: key/value outside list item`);
            }
            current[kvMatch[1]] = parseYamlValue(kvMatch[2]);
            continue;
        }

        throw new Error(`Line ${index + 1}: unrecognized content`);
    }

    if (current) {
        terms.push(current);
    }

    return { terms };
}

function loadGlossaryTerms() {
    if (!fs.existsSync(glossaryPath)) {
        console.warn('Warning: glossary/glossary.yml not found. Glossary links will be skipped.');
        return [];
    }

    const glossaryText = fs.readFileSync(glossaryPath, 'utf-8');
    const glossary = parseGlossaryYaml(glossaryText);
    if (!Array.isArray(glossary.terms)) {
        return [];
    }

    return glossary.terms
        .filter(entry => entry && typeof entry.term === 'string' && entry.term.trim())
        .map(entry => {
            const term = normalizeWhitespace(entry.term);
            return { term, anchor: slugify(term) };
        });
}

function buildTermMatcher(terms) {
    if (!terms.length) {
        return { regex: null, termMap: new Map() };
    }

    const sortedTerms = [...terms].sort((a, b) => b.term.length - a.term.length);
    const termMap = new Map(sortedTerms.map(entry => [entry.term.toLowerCase(), entry]));
    const pattern = sortedTerms.map(entry => escapeRegExp(entry.term)).join('|');
    const regex = new RegExp(pattern, 'gi');
    return { regex, termMap };
}

function isWordChar(char) {
    return /[A-Za-z0-9]/.test(char);
}

function replaceTerms(text, matcher) {
    if (!matcher.regex) {
        return text;
    }

    return text.replace(matcher.regex, (match, offset, full) => {
        const before = offset > 0 ? full[offset - 1] : '';
        const after = offset + match.length < full.length ? full[offset + match.length] : '';
        if (before && isWordChar(before)) return match;
        if (after && isWordChar(after)) return match;

        const entry = matcher.termMap.get(match.toLowerCase());
        if (!entry) return match;
        return `[${entry.term}](#${entry.anchor})`;
    });
}

function replaceOutsideLinks(text, matcher) {
    if (!matcher.regex) {
        return text;
    }

    const linkRegex = /!?\[[^\]]*\]\([^\)]*\)/g;
    let result = '';
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text))) {
        result += replaceTerms(text.slice(lastIndex, match.index), matcher);
        result += match[0];
        lastIndex = match.index + match[0].length;
    }

    result += replaceTerms(text.slice(lastIndex), matcher);
    return result;
}

function linkifyInlineCode(line, matcher) {
    if (!matcher.regex) {
        return line;
    }

    let result = '';
    let cursor = 0;

    while (true) {
        const tickStart = line.indexOf('`', cursor);
        if (tickStart === -1) {
            result += replaceOutsideLinks(line.slice(cursor), matcher);
            break;
        }

        let tickCount = 1;
        while (line[tickStart + tickCount] === '`') {
            tickCount += 1;
        }
        const fence = '`'.repeat(tickCount);
        const tickEnd = line.indexOf(fence, tickStart + tickCount);
        if (tickEnd === -1) {
            result += replaceOutsideLinks(line.slice(cursor), matcher);
            break;
        }

        result += replaceOutsideLinks(line.slice(cursor, tickStart), matcher);
        result += line.slice(tickStart, tickEnd + tickCount);
        cursor = tickEnd + tickCount;
    }

    return result;
}

function linkifyMarkdown(markdown, matcher) {
    if (!matcher.regex) {
        return markdown;
    }

    const lines = markdown.split('\n');
    let inFence = false;
    let fenceMarker = null;

    const processed = lines.map(line => {
        const trimmed = line.trim();
        const isFenceStart = !inFence && (trimmed.startsWith('```') || trimmed.startsWith('~~~'));
        if (isFenceStart) {
            inFence = true;
            fenceMarker = trimmed.startsWith('```') ? '```' : '~~~';
            return line;
        }

        if (inFence) {
            if (trimmed.startsWith(fenceMarker)) {
                inFence = false;
                fenceMarker = null;
            }
            return line;
        }

        return linkifyInlineCode(line, matcher);
    });

    return processed.join('\n');
}

function buildRulebook() {
    console.log('Building Rulebook (Client-Side Rendering)...');

    let fullMarkdown = '';
    const glossaryTerms = loadGlossaryTerms();
    const termMatcher = buildTermMatcher(glossaryTerms);

    // Read and concatenate chapters
    chapters.forEach(chapter => {
        const filePath = path.join(__dirname, chapter);
        if (fs.existsSync(filePath)) {
            console.log(`Reading ${chapter}...`);
            const content = fs.readFileSync(filePath, 'utf-8');
            const shouldLinkify = !chapter.endsWith('ZZ_Glossary.md');
            const processedContent = shouldLinkify ? linkifyMarkdown(content, termMatcher) : content;
            fullMarkdown += processedContent + '\n\n';
        } else {
            console.warn(`Warning: ${chapter} not found.`);
        }
    });

    // Escape backticks and script tags for embedding in JS string
    const escapedMarkdown = fullMarkdown
        .replace(/\\/g, '\\\\')
        .replace(/`/g, '\\`')
        .replace(/\${/g, '\\${')
        .replace(/<\/script>/g, '<\\/script>');

    // Read CSS
    let cssContent = '';
    const cssPath = path.join(__dirname, cssFileName);
    if (fs.existsSync(cssPath)) {
        cssContent = fs.readFileSync(cssPath, 'utf-8');
    } else {
        console.warn('Warning: CSS file not found.');
    }

    // HTML Template with Client-Side Rendering
    const finalHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RimWorld RPG Rulebook</title>
    <script src="https://cdn.jsdelivr.net/npm/markdown-it@14.0.0/dist/markdown-it.min.js"></script>
    <style>
        ${cssContent}
        /* Loading state */
        #content { display: none; }
        #loading { text-align: center; padding: 2rem; color: #ff9800; }
    </style>
</head>
<body>
    <div id="loading">Loading Rulebook...</div>
    <div id="content" class="container"></div>

    <script>
        // Initialize markdown-it
        const md = window.markdownit({
            html: true,
            linkify: true,
            typographer: true
        });

        // The full markdown content embedded directly
        const markdownContent = \`${escapedMarkdown}\`;

        // Render
        document.getElementById('content').innerHTML = md.render(markdownContent);
        
        // Show content
        document.getElementById('loading').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    </script>
</body>
</html>
    `;

    // Write output
    const outputPath = path.join(__dirname, outputFileName);
    fs.writeFileSync(outputPath, finalHtml);
    console.log(`Success! Rulebook generated at ${outputFileName}`);

    // Copy to docs/index.html for GitHub Pages
    const docsDir = path.join(__dirname, '../docs');
    if (!fs.existsSync(docsDir)) {
        fs.mkdirSync(docsDir, { recursive: true });
    }
    fs.copyFileSync(outputPath, path.join(docsDir, 'index.html'));
    console.log('Copied to docs/index.html for GitHub Pages.');
}

buildRulebook();
