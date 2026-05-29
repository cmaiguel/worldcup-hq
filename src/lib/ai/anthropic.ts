import Anthropic from '@anthropic-ai/sdk';
import { serverEnv } from '../env';
import { getAppData } from '../data/adapters';
import type { AskResponse } from '../types';

function buildContext(data: Awaited<ReturnType<typeof getAppData>>): string {
  const upcomingMatches = data.matches
    .filter(m => m.date >= new Date().toISOString() && m.status === 'scheduled')
    .slice(0, 20)
    .map(m => {
      const home = m.homeTeam ? `${m.homeTeam.flag} ${m.homeTeam.name}` : 'TBD';
      const away = m.awayTeam ? `${m.awayTeam.flag} ${m.awayTeam.name}` : 'TBD';
      const date = new Date(m.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      return `${home} vs ${away} | ${date} | ${m.stadium.name}, ${m.stadium.city} | Stage: ${m.stage}${m.group ? ` Group ${m.group}` : ''}`;
    })
    .join('\n');

  const teams = data.teams
    .map(t => `${t.flag} ${t.name} (${t.code}) — Group ${t.group} — FIFA Ranking: #${t.fifaRanking} — Confederation: ${t.confederation}`)
    .join('\n');

  const stadiums = data.stadiums
    .map(s => `${s.name} — ${s.city}, ${s.country} — Capacity: ${s.capacity.toLocaleString()} — Hosts: ${s.matchesHosted} matches`)
    .join('\n');

  return `
=== FIFA WORLD CUP 2026 DATA ===
Tournament: FIFA World Cup 2026
Hosts: USA, Canada, Mexico
Format: 48 teams, 104 matches, 16 stadiums
Opening match: Mexico vs South Africa at Estadio Azteca on June 11, 2026
Final: July 19, 2026 at MetLife Stadium, New York/New Jersey

=== UPCOMING MATCHES (next 20) ===
${upcomingMatches}

=== ALL 48 TEAMS ===
${teams}

=== STADIUMS ===
${stadiums}
`.trim();
}

export async function askWorldCup(question: string): Promise<AskResponse> {
  const client = new Anthropic({ apiKey: serverEnv.anthropicApiKey });
  const appData = await getAppData();
  const context = buildContext(appData);

  const systemPrompt = `You are World Cup HQ's AI assistant — an expert on the FIFA World Cup 2026.
You have access to official tournament data below. Answer questions accurately using ONLY the provided data.
If data is missing or you're unsure, say so clearly — never hallucinate facts.
Keep answers concise, friendly, and enthusiastic. Use emoji where appropriate.
Format match information clearly with dates, teams, stadiums, and cities.

${context}`;

  const response = await client.messages.create({
    model: 'claude-opus-4-7',
    max_tokens: 1024,
    system: systemPrompt,
    messages: [{ role: 'user', content: question }],
  });

  const content = response.content[0];
  const answer = content.type === 'text' ? content.text : 'Unable to generate a response.';

  return { answer, confidence: 'high' };
}
