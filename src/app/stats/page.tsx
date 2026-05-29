import type { Metadata } from 'next';
import { getPlayerStats, getTeamStats } from '@/lib/data/adapters';
import TopScorers from '@/components/stats/TopScorers';
import GroupTable from '@/components/stats/GroupTable';
import SectionHeader from '@/components/ui/SectionHeader';
import StatCard from '@/components/stats/StatCard';

export const metadata: Metadata = { title: 'Statistics' };

const GROUPS = 'ABCDEFGHIJKL'.split('');

export default async function StatsPage() {
  const [players, teamStats] = await Promise.all([getPlayerStats(), getTeamStats()]);
  const totalGoals = players.reduce((s, p) => s + p.goals, 0);

  return (
    <div className="p-4 md:p-6 max-w-7xl mx-auto space-y-10 pb-24">
      <SectionHeader title="Tournament Statistics" accent="Live Stats"
        subtitle="Updated in real-time from June 11, 2026" />

      {/* Top stats row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <StatCard label="Goals Scored"    value={totalGoals} icon="⚽" accent="gold"  subLabel="Tournament total" />
        <StatCard label="Matches Played"  value={0}          icon="📅" accent="sky"   subLabel="of 104 total" />
        <StatCard label="Red Cards"       value={0}          icon="🟥" accent="red"   subLabel="Tournament total" />
        <StatCard label="Goals / Match"   value="—"          icon="📊" accent="green" subLabel="Avg per game" />
      </div>

      {/* Tournament leaders + top scorers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <section>
          <SectionHeader title="Golden Boot Race" accent="Top Scorers" />
          <div className="card overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2.5"
              style={{ background: 'var(--navy-elevated)', borderBottom: '1px solid var(--border)' }}>
              <span className="font-mono font-black text-[11px]" style={{ color: 'var(--gold-bright)' }}>⚽ GOLDEN BOOT STANDINGS</span>
              <span className="font-mono text-[9px]" style={{ color: 'var(--cream-muted)' }}>G · A</span>
            </div>
            <TopScorers players={players} limit={10} />
          </div>
        </section>

        <section>
          <SectionHeader title="Group A – D Standings" accent="Group Stage" />
          <div className="space-y-3">
            {GROUPS.slice(0, 4).map(g => <GroupTable key={g} stats={teamStats} group={g} />)}
          </div>
        </section>
      </div>

      {/* All 12 group tables */}
      <section>
        <SectionHeader title="All 12 Groups" accent="Full Standings" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {GROUPS.map(g => <GroupTable key={g} stats={teamStats} group={g} />)}
        </div>
      </section>

      {/* Cards discipline */}
      <section>
        <SectionHeader title="Disciplinary" accent="Cards" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <StatCard label="Yellow Cards"  value={0} icon="🟨" accent="gold"  />
          <StatCard label="Red Cards"     value={0} icon="🟥" accent="red"   />
          <StatCard label="Suspensions"   value={0} icon="⛔" accent="cream" />
          <StatCard label="Clean Sheets"  value={0} icon="🧤" accent="green" />
        </div>
      </section>
    </div>
  );
}
