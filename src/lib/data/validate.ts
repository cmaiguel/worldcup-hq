/**
 * validate.ts — FIFA World Cup 2026 data integrity checks
 * Run via: npx ts-node -e "import('./src/lib/data/validate').then(m => m.runValidation())"
 * Or imported in tests.
 */

import { TEAMS, MATCHES } from './seed';

interface ValidationResult {
  passed: boolean;
  errors: string[];
  warnings: string[];
  summary: string;
}

export function runValidation(): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  // ── 1. Exactly 12 groups ──────────────────────────────────────────────────
  const groups = [...new Set(TEAMS.map(t => t.group))].sort();
  if (groups.length !== 12) {
    errors.push(`Expected 12 groups, found ${groups.length}: ${groups.join(', ')}`);
  } else {
    const expected = 'ABCDEFGHIJKL'.split('');
    const missing = expected.filter(g => !groups.includes(g));
    const extra = groups.filter(g => !expected.includes(g));
    if (missing.length) errors.push(`Missing groups: ${missing.join(', ')}`);
    if (extra.length) errors.push(`Unexpected groups: ${extra.join(', ')}`);
  }

  // ── 2. Exactly 4 teams per group ─────────────────────────────────────────
  const groupMap: Record<string, string[]> = {};
  for (const team of TEAMS) {
    if (!groupMap[team.group]) groupMap[team.group] = [];
    groupMap[team.group].push(team.name);
  }
  for (const [grp, members] of Object.entries(groupMap)) {
    if (members.length !== 4) {
      errors.push(`Group ${grp} has ${members.length} teams (expected 4): ${members.join(', ')}`);
    }
  }

  // ── 3. Total teams = 48 ───────────────────────────────────────────────────
  if (TEAMS.length !== 48) {
    errors.push(`Expected 48 teams, found ${TEAMS.length}`);
  }

  // ── 4. Every team has exactly one group ──────────────────────────────────
  const idCounts: Record<string, number> = {};
  for (const team of TEAMS) {
    idCounts[team.id] = (idCounts[team.id] ?? 0) + 1;
  }
  for (const [id, count] of Object.entries(idCounts)) {
    if (count > 1) errors.push(`Team ID '${id}' appears ${count} times`);
  }

  // ── 5. Required group assignments ────────────────────────────────────────
  const requiredAssignments: Array<[string, string, string]> = [
    ['mex', 'A', 'Mexico'],
    ['rsa', 'A', 'South Africa'],
    ['kor', 'A', 'Korea Republic'],
    ['cze', 'A', 'Czechia'],
    ['can', 'B', 'Canada'],
    ['bih', 'B', 'Bosnia-Herzegovina'],
    ['qat', 'B', 'Qatar'],
    ['sui', 'B', 'Switzerland'],
    ['bra', 'C', 'Brazil'],
    ['mar', 'C', 'Morocco'],
    ['hai', 'C', 'Haiti'],
    ['sco', 'C', 'Scotland'],
    ['usa', 'D', 'USA'],
    ['par', 'D', 'Paraguay'],
    ['aus', 'D', 'Australia'],
    ['tur', 'D', 'Türkiye'],
    ['ger', 'E', 'Germany'],
    ['cuw', 'E', 'Curaçao'],
    ['civ', 'E', 'Côte d\'Ivoire'],
    ['ecu', 'E', 'Ecuador'],
    ['ned', 'F', 'Netherlands'],
    ['jap', 'F', 'Japan'],
    ['swe', 'F', 'Sweden'],
    ['tun', 'F', 'Tunisia'],
    ['bel', 'G', 'Belgium'],
    ['egy', 'G', 'Egypt'],
    ['irn', 'G', 'IR Iran'],
    ['nzl', 'G', 'New Zealand'],
    ['esp', 'H', 'Spain'],
    ['cpv', 'H', 'Cabo Verde'],
    ['ksa', 'H', 'Saudi Arabia'],
    ['uru', 'H', 'Uruguay'],
    ['fra', 'I', 'France'],
    ['sen', 'I', 'Senegal'],
    ['irq', 'I', 'Iraq'],
    ['nor', 'I', 'Norway'],
    ['arg', 'J', 'Argentina'],
    ['alg', 'J', 'Algeria'],
    ['aut', 'J', 'Austria'],
    ['jor', 'J', 'Jordan'],
    ['por', 'K', 'Portugal'],
    ['cod', 'K', 'Congo DR'],
    ['uzb', 'K', 'Uzbekistan'],
    ['col', 'K', 'Colombia'],
    ['eng', 'L', 'England'],
    ['cro', 'L', 'Croatia'],
    ['gha', 'L', 'Ghana'],
    ['pan', 'L', 'Panama'],
  ];

  for (const [id, expectedGroup, label] of requiredAssignments) {
    const team = TEAMS.find(t => t.id === id);
    if (!team) {
      errors.push(`Team '${id}' (${label}) not found in TEAMS`);
    } else if (team.group !== expectedGroup) {
      errors.push(`${label} (${id}) is in Group ${team.group}, expected Group ${expectedGroup}`);
    }
  }

  // ── 6. Opening match: Mexico vs South Africa ──────────────────────────────
  const opening = MATCHES.find(m => m.id === 'm001');
  if (!opening) {
    errors.push('Opening match m001 not found');
  } else {
    const homeId = opening.homeTeam?.id;
    const awayId = opening.awayTeam?.id;
    const isMexVsRsa =
      (homeId === 'mex' && awayId === 'rsa') ||
      (homeId === 'rsa' && awayId === 'mex');
    if (!isMexVsRsa) {
      errors.push(`Opening match m001 is ${homeId ?? 'null'} vs ${awayId ?? 'null'}, expected mex vs rsa`);
    }
    // Verify date is June 11, 2026
    const openingDate = new Date(opening.date);
    if (openingDate.getUTCMonth() !== 5 || openingDate.getUTCDate() !== 11) {
      warnings.push(`Opening match date is ${opening.date}, expected June 11`);
    }
  }

  // ── 7. Final match: July 19 at MetLife ────────────────────────────────────
  const final = MATCHES.find(m => m.id === 'm104');
  if (!final) {
    warnings.push('Final match m104 not found');
  } else {
    const finalDate = new Date(final.date);
    if (finalDate.getUTCMonth() !== 6 || finalDate.getUTCDate() !== 19) {
      warnings.push(`Final match date is ${final.date}, expected July 19`);
    }
  }

  // ── 8. No banned/removed team IDs ────────────────────────────────────────
  const bannedIds = ['mex2', 'mex3', 'nig', 'pol', 'ita', 'den', 'svk', 'chi', 'svn', 'ven', 'gre', 'isr', 'srb', 'crc', 'sau_old'];
  for (const banned of bannedIds) {
    if (TEAMS.find(t => t.id === banned)) {
      errors.push(`Banned/removed team ID '${banned}' still present in TEAMS`);
    }
  }

  // ── 9. Group stage match count (should be 72) ────────────────────────────
  const groupMatches = MATCHES.filter(m => m.stage === 'Group Stage');
  if (groupMatches.length !== 72) {
    warnings.push(`Expected 72 group stage matches, found ${groupMatches.length}`);
  }

  // ── 10. Every group stage match has both teams in same group ─────────────
  let crossGroupMatches = 0;
  for (const match of groupMatches) {
    const home = match.homeTeam;
    const away = match.awayTeam;
    if (!home) {
      warnings.push(`Match ${match.id}: homeTeam is null`);
      continue;
    }
    if (!away) {
      warnings.push(`Match ${match.id}: awayTeam is null`);
      continue;
    }
    if (home.group !== away.group) {
      crossGroupMatches++;
      if (crossGroupMatches <= 5) {
        errors.push(`Match ${match.id}: ${home.name} (Group ${home.group}) vs ${away.name} (Group ${away.group}) — cross-group`);
      }
    }
  }
  if (crossGroupMatches > 5) {
    errors.push(`... and ${crossGroupMatches - 5} more cross-group matches`);
  }

  // ── 11. Each group has exactly 6 matches (4 teams, C(4,2) = 6) ───────────
  const matchesByGroup: Record<string, number> = {};
  for (const match of groupMatches) {
    const home = match.homeTeam;
    if (home) {
      matchesByGroup[home.group] = (matchesByGroup[home.group] ?? 0) + 1;
    }
  }
  for (const grp of 'ABCDEFGHIJKL'.split('')) {
    const count = matchesByGroup[grp] ?? 0;
    if (count !== 6) {
      warnings.push(`Group ${grp} has ${count} matches (expected 6)`);
    }
  }

  // ── Summary ──────────────────────────────────────────────────────────────
  const passed = errors.length === 0;
  const summary = passed
    ? `✅ ALL CHECKS PASSED — 48 teams, 12 groups of 4, correct assignments, ${groupMatches.length} group stage matches`
    : `❌ ${errors.length} ERROR(S), ${warnings.length} WARNING(S)`;

  if (process.env.NODE_ENV !== 'test') {
    console.log('\n══ FIFA World Cup 2026 Data Validation ══');
    if (errors.length === 0 && warnings.length === 0) {
      console.log(summary);
    } else {
      if (errors.length) {
        console.log('\n🔴 ERRORS:');
        errors.forEach(e => console.log('  ✗', e));
      }
      if (warnings.length) {
        console.log('\n🟡 WARNINGS:');
        warnings.forEach(w => console.log('  ⚠', w));
      }
      console.log('\n' + summary);
    }
    console.log('');
  }

  return { passed, errors, warnings, summary };
}
