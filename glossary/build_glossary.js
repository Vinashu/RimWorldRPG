const fs = require('fs');
const path = require('path');

const GLOSSARY_PATH = path.join(__dirname, 'glossary.yml');
const SCHEMA_PATH = path.join(__dirname, 'glossary.schema.json');
const OUTPUT_PATH = path.join(__dirname, '..', 'chapters', 'ZZ_Glossary.md');

const SMALL_WORDS = new Set(['and', 'or', 'of', 'the', 'to', 'in', 'on', 'for', 'with', 'by']);

function slugify(term) {
  return term
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

function normalizeWhitespace(value) {
  return value.replace(/\s+/g, ' ').trim();
}

function normalizeCasing(term) {
  const cleaned = normalizeWhitespace(term);
  const tokens = cleaned.split(' ');
  return tokens
    .map((token, index) => {
      if (!token) return token;
      if (/[0-9]/.test(token)) return token;
      if (/[^A-Za-z]/.test(token)) return token;
      if (token.toUpperCase() === token) return token;
      const lower = token.toLowerCase();
      if (index !== 0 && SMALL_WORDS.has(lower)) return lower;
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join(' ');
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

function validateGlossary(glossary) {
  const errors = [];

  if (!fs.existsSync(SCHEMA_PATH)) {
    errors.push('Missing glossary.schema.json');
  }

  if (!glossary || typeof glossary !== 'object' || Array.isArray(glossary)) {
    errors.push('Glossary root must be an object with a terms array.');
  }

  if (!Array.isArray(glossary.terms)) {
    errors.push('Glossary must include a terms array.');
  }

  const allowedKeys = new Set(['term', 'definition']);
  const seen = new Map();

  if (Array.isArray(glossary.terms)) {
    glossary.terms.forEach((entry, index) => {
      if (!entry || typeof entry !== 'object' || Array.isArray(entry)) {
        errors.push(`Entry ${index + 1}: must be an object.`);
        return;
      }

      Object.keys(entry).forEach(key => {
        if (!allowedKeys.has(key)) {
          errors.push(`Entry ${index + 1}: invalid field "${key}".`);
        }
      });

      if (typeof entry.term !== 'string' || !entry.term.trim()) {
        errors.push(`Entry ${index + 1}: term is required.`);
      }
      if (typeof entry.definition !== 'string' || !entry.definition.trim()) {
        errors.push(`Entry ${index + 1}: definition is required.`);
      }

      if (typeof entry.term === 'string') {
        const normalizedWhitespace = normalizeWhitespace(entry.term);
        if (entry.term !== normalizedWhitespace) {
          errors.push(`Entry ${index + 1}: term spacing should be "${normalizedWhitespace}".`);
        }

        const normalizedCasing = normalizeCasing(entry.term);
        if (entry.term !== normalizedCasing) {
          errors.push(`Entry ${index + 1}: term casing should be "${normalizedCasing}".`);
        }

        const key = normalizedWhitespace.toLowerCase();
        if (seen.has(key)) {
          errors.push(`Entry ${index + 1}: duplicate term "${entry.term}" also appears as "${seen.get(key)}".`);
        } else {
          seen.set(key, entry.term);
        }
      }

      if (typeof entry.definition === 'string') {
        const normalizedDefinition = entry.definition.trim();
        if (entry.definition !== normalizedDefinition) {
          errors.push(`Entry ${index + 1}: definition has leading/trailing whitespace.`);
        }
      }
    });
  }

  if (errors.length) {
    const message = ['Glossary validation failed:', ...errors.map(err => `- ${err}`)].join('\n');
    throw new Error(message);
  }
}

function buildMarkdown(glossary) {
  const sortedTerms = [...glossary.terms].sort((a, b) =>
    a.term.localeCompare(b.term, 'en', { sensitivity: 'base' })
  );

  const lines = [
    '# Glossary',
    '',
    'Canonical terms used throughout the rulebook.',
    '',
    '<!-- Generated by glossary/build_glossary.js. Do not edit directly. -->',
    ''
  ];

  sortedTerms.forEach(entry => {
    const anchor = slugify(entry.term);
    lines.push(`<a id="${anchor}"></a>${entry.term}`);
    lines.push(`: ${entry.definition}`);
    lines.push('');
  });

  return `${lines.join('\n').trim()}\n`;
}

function loadGlossary() {
  if (!fs.existsSync(GLOSSARY_PATH)) {
    throw new Error(`Missing glossary file at ${GLOSSARY_PATH}`);
  }

  const contents = fs.readFileSync(GLOSSARY_PATH, 'utf-8');
  return parseGlossaryYaml(contents);
}

function main() {
  const args = new Set(process.argv.slice(2));
  const validateOnly = args.has('--validate');

  const glossary = loadGlossary();
  validateGlossary(glossary);

  if (validateOnly) {
    console.log('Glossary validation passed.');
    return;
  }

  const markdown = buildMarkdown(glossary);
  fs.writeFileSync(OUTPUT_PATH, markdown);
  console.log(`Glossary generated at ${OUTPUT_PATH}`);
}

main();
