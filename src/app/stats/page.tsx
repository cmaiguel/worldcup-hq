import type { Metadata } from 'next';
import { getPlayerStats, getTeamStats } from '@/lib/data/adapters';
import TopScorers from '@/components/stats/TopScorers';
import GroupTable from '@/components/stats/GroupTable';
import SectionHeader from '@/components/ui/SectionHeader';
import StatCard from '@/components/stats/StatCard';

export const metadata: Metadata = { title: 'Statistics' };

const GROUPS = 'ABCDEFGHIJKL'.split('');

export default async function StatsPage() {
  const [players, teamStats] = await Promise.all([
    getPlayerStats(),
    getTeamStats(),
  ]);

  const totalGoals = players.reduce((sum, p) => sum + p.goals, 0);
  const totalMatches = 0; // Pre-tournament

  return (
    <div className="p-4 md:p-6 max-w-7xl mx-auto space-y-8">
      <SectionHeader
        title="Tournament Statistics"
        subtitle="Live stats once matches begin on June 11, 2026"
        accent="Stats"
      />

      {/* Top-level stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <StatCard label="Goals Scored" value={totalGoals} icon="⚽" accent="green" subLabel="Pre-tournament" />
        <StatCard label="Matches Played" value={totalMatches} icon="📅" accent="blue" subLabel="of 104 total" />
        <StatCard label="Red Cards" value={0} icon="🟥" accent="pink" subLabel="Pre-tournament" />
        <StatCard label="Goals/Match" value="—" icon="📊" accent="yellow" subLabel="No data yet" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Top Scorers */}
        <section>
          <SectionHeader title="Top Scorers" accent="Golden Boot Race" />
          <div className="retro-card overflow-hidden">
            <div className="px-4 py-2.5 bg-[#141430] border-b border-[#1e1e3a] flex items-center justify-between">
              <span className="text-xs font-bold font-mono text-white">PLAYER</span>
              <span className="text-[10px] text-[#444466] font-mono">GOALS · AST</span>
            </div>
            <div className="p-2">
              <TopScorers players={players} limit={10} />
            </div>
          </div>
        </section>

        {/* Group Tables */}
        <section>
          <SectionHeader title="Group Standings" accent="Group Stage" />
          <div className="space-y-3">
            {GROUPS.slice(0, 4).map(g => (
              <GroupTable key={g} stats={teamStats} group={g} />
            ))}
          </div>
        </section>
      </div>

      {/* All Group Tables */}
      <section>
        <SectionHeader title="All Groups" accent="Full Standings" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {GROUPS.map(g => (
            <GroupTable key={g} stats={teamStats} group={g} />
          ))}
        </div>
      </section>
    </div>
  );
}
