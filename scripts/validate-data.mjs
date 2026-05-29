#!/usr/bin/env node
/**
 * validate-data.mjs
 * Pure Node.js (no TypeScript compilation needed) validation of seed.ts.
 * Checks data correctness directly against the source file.
 * Exits with code 1 if any check fails — safe to run in CI.
 *
 * Usage: npm run validate:data
 */

import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dir = dirname(fileURLToPath(import.meta.url));
const seedPath = resolve(__dir, '../src/lib/data/seed.ts');
const seed = readFileSync(seedPath, 'utf-8');

const errors = [];
let passed = 0;

function check(label, condition, detail = '') {
  if (condition) {
    console.log(`  ✓  ${label}`);
    passed++;
  } else {
    errors.push(`${label}${detail ? ': ' + detail : ''}`);
    console.log(`  ✗  ${label}${detail ? ' — ' + detail : ''}`);
  }
}

console.log('\n══ World Cup HQ · Data Validation ══\n');

// ── 1. Team count ──────────────────────────────────────────────────────────
const teamGroupEntries = (seed.match(/group: '[A-L]'/g) ?? []).length;
check('48 qualified teams', teamGroupEntries === 48, `found ${teamGroupEntries}`);

// ── 2. 12 groups, 4 teams each ────────────────────────────────────────────
for (const g of 'ABCDEFGHIJKL') {
  const n = (seed.match(new RegExp(`group: '${g}'`, 'g')) ?? []).length;
  check(`Group ${g} — 4 teams`, n === 4, `found ${n}`);
}

// ── 3. All 48 required (teamId, group) assignments ────────────────────────
const assignments = [
  // Group A
  ['mex','A'], ['rsa','A'], ['kor','A'], ['cze','A'],
  // Group B
  ['can','B'], ['bih','B'], ['qat','B'], ['sui','B'],
  // Group C
  ['bra','C'], ['mar','C'], ['hai','C'], ['sco','C'],
  // Group D
  ['usa','D'], ['par','D'], ['aus','D'], ['tur','D'],
  // Group E
  ['ger','E'], ['cuw','E'], ['civ','E'], ['ecu','E'],
  // Group F
  ['ned','F'], ['jap','F'], ['swe','F'], ['tun','F'],
  // Group G
  ['bel','G'], ['egy','G'], ['irn','G'], ['nzl','G'],
  // Group H
  ['esp','H'], ['cpv','H'], ['ksa','H'], ['uru','H'],
  // Group I
  ['fra','I'], ['sen','I'], ['irq','I'], ['nor','I'],
  // Group J
  ['arg','J'], ['alg','J'], ['aut','J'], ['jor','J'],
  // Group K
  ['por','K'], ['cod','K'], ['uzb','K'], ['col','K'],
  // Group L
  ['eng','L'], ['cro','L'], ['gha','L'], ['pan','L'],
];

for (const [id, grp] of assignments) {
  // match id: 'xxx' ... group: 'Y' within the same team object (flexible)
  const pattern = new RegExp(`id:\\s*'${id}'[^}]*?group:\\s*'${grp}'`, 's');
  check(`  ${id.padEnd(4)} → Group ${grp}`, pattern.test(seed));
}

// ── 4. Opening match: Mexico vs South Africa ──────────────────────────────
const hasOpeningMatch =
  /match\('m001'[^)]*'mex'[^)]*'rsa'/.test(seed) ||
  /match\('m001'[^)]*'rsa'[^)]*'mex'/.test(seed);
check('Opening match m001: Mexico vs South Africa', hasOpeningMatch);
check('Opening match date: June 11 2026', seed.includes('2026-06-11'));

// ── 5. Final ──────────────────────────────────────────────────────────────
check('Final date: July 19 2026', seed.includes('2026-07-19'));
check('Final venue: MetLife',     seed.includes("'metlife'") || seed.includes('"metlife"'));

// ── 6. Correct official naming ────────────────────────────────────────────
check("Uses 'Türkiye' (not Turkey)",              seed.includes('Türkiye'));
check("Uses 'IR Iran' (not Iran)",                seed.includes('IR Iran'));
check("Uses 'Korea Republic' (not South Korea)",  seed.includes('Korea Republic'));
check("Uses 'Czechia' (not Czech Republic)",      seed.includes('Czechia'));
check("Uses 'Côte d'Ivoire'",                     seed.includes("Côte d'Ivoire"));
check("Uses 'Cabo Verde' (not Cape Verde)",       seed.includes('Cabo Verde'));
check("Uses 'Congo DR'",                          seed.includes('Congo DR'));
check("Uses 'Bosnia and Herzegovina'",            seed.includes('Bosnia and Herzegovina') || seed.includes('Bosnia-Herzegovina'));

// ── 7. No removed / non-qualifying team IDs ───────────────────────────────
const banned = ['mex2','mex3','nig','pol','ita','den','svk','chi','svn','ven','gre','isr','srb','crc'];
for (const id of banned) {
  check(`No banned ID '${id}'`, !new RegExp(`id:\\s*'${id}'`).test(seed));
}

// ── 8. 72 group stage matches ─────────────────────────────────────────────
// Count only match() function calls — not bestFinish: 'Group Stage' fields
const groupMatches = (seed.match(/match\('[^']+',\s*\d+,\s*'Group Stage'/g) ?? []).length;
check('72 group stage matches', groupMatches === 72, `found ${groupMatches}`);

// ── Summary ───────────────────────────────────────────────────────────────
console.log('\n══════════════════════════════════════════');
if (errors.length === 0) {
  console.log(`\n✅  ALL ${passed} CHECKS PASSED — data is tournament-correct.\n`);
} else {
  console.log(`\n❌  ${errors.length} CHECK(S) FAILED:\n`);
  errors.forEach(e => console.log(`     • ${e}`));
  console.log('');
  process.exit(1);
}
