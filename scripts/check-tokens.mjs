// Fails if a hex colour or a font name appears outside the token/theme files,
// or if app/theme.css is out of date with the token JSON.
// Run: npm run check:tokens
import { execFileSync } from 'node:child_process';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const SCAN = ['app', 'components', 'content', 'lib'];
const EXTENSIONS = /\.(tsx?|css|mjs|js)$/;
// The only files allowed to hold colour values and font names.
const ALLOWED = new Set(['app/theme.css', 'app/fonts.ts']);

const rules = [
  { name: 'hex colour', pattern: /#[0-9a-f]{3,8}\b/gi },
  { name: 'font name', pattern: /\b(Clash|Switzer|Arial|Helvetica|Inter|Geist|Roboto)\b|-apple-system|system-ui|sans-serif|serif\b/g },
];

function walk(dir) {
  return readdirSync(`${root}${dir}`).flatMap((entry) => {
    const path = `${dir}/${entry}`;
    return statSync(`${root}${path}`).isDirectory() ? walk(path) : [path];
  });
}

const problems = [];
for (const file of SCAN.flatMap(walk)) {
  if (!EXTENSIONS.test(file) || ALLOWED.has(file)) continue;
  readFileSync(`${root}${file}`, 'utf8')
    .split('\n')
    .forEach((text, i) => {
      for (const rule of rules) {
        for (const match of text.matchAll(rule.pattern)) {
          problems.push(`${file}:${i + 1}  ${rule.name} "${match[0]}"`);
        }
      }
    });
}

if (problems.length) {
  console.error(`Use tokens instead of literal values:\n${problems.join('\n')}`);
  process.exit(1);
}
console.log(`No hex colours or font names outside ${[...ALLOWED].join(', ')}.`);

execFileSync('node', [`${root}scripts/build-tokens.mjs`, '--check'], { stdio: 'inherit' });
