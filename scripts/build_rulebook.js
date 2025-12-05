const fs = require('fs');
const path = require('path');

// List of chapters in order
const chapters = [
    '../chapters/chapter_01_core.md',
    '../chapters/chapter_02_character_creation.md',
    '../chapters/chapter_03_skills_and_checks.md',
    '../chapters/chapter_04_combat_and_survival.md',
    '../chapters/chapter_05_equipment.md',
    '../chapters/chapter_06_colony.md',
    '../chapters/chapter_07_world.md',
    '../chapters/chapter_08_storyteller.md'
];

const outputFileName = '../output/RimWorldRPG_Rulebook.html';
const cssFileName = '../styles/rulebook_styles.css';

function buildRulebook() {
    console.log('Building Rulebook (Client-Side Rendering)...');

    let fullMarkdown = '';

    // Read and concatenate chapters
    chapters.forEach(chapter => {
        const filePath = path.join(__dirname, chapter);
        if (fs.existsSync(filePath)) {
            console.log(`Reading ${chapter}...`);
            const content = fs.readFileSync(filePath, 'utf-8');
            fullMarkdown += content + '\n\n';
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
