import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getTeamBySlug, getPlayersByTeam, getMatches } from '@/lib/data/adapters';
import PlayerCard from '@/components/teams/PlayerCard';
import MatchCard from '@/components/matches/MatchCard';
import FollowButton from '@/components/teams/FollowButton';
import Badge from '@/components/ui/Badge';
import SectionHeader from '@/components/ui/SectionHeader';
import Link from 'next/link';

interface PageProps { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const team = await getTeamBySlug(slug);
  if (!team) return { title: 'Team Not Found' };
  return { title: `${team.name} — World Cup 2026` };
}

const CONF_VARIANT: Record<string, 'sky' | 'green' | 'gold' | 'red' | 'gray'> = {
  UEFA: 'sky', CONMEBOL: 'green', CONCACAF: 'gold', AFC: 'red', CAF: 'gray', OFC: 'gray',
};

const POS_ORDER = ['GK', 'CB', 'LB', 'RB', 'CDM', 'CM', 'CAM', 'LW', 'RW', 'ST', 'CF'];

export default async function TeamPage({ params }: PageProps) {
  const { slug } = await params;
  const team = await getTeamBySlug(slug);
  if (!team) notFound();

  const [squadPlayers, allMatches] = await Promise.all([
    getPlayersByTeam(team.id),
    getMatches(),
  ]);

  const sortedPlayers = [...squadPlayers].sort(
    (a, b) => POS_ORDER.indexOf(a.position) - POS_ORDER.indexOf(b.position),
  );

  const teamMatches = allMatches
    .filter(m => m.homeTeam?.id === team.id || m.awayTeam?.id === team.id)
    .slice(0, 6);

  const primary = team.colors.primary;
  const secondary = team.colors.secondary;

  return (
    <div className="pb-24" style={{ '--team-primary': primary, '--team-secondary': secondary } as React.CSSProperties}>
      {/* Hero */}
      <div className="relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${primary}22 0%, var(--navy-card) 60%, var(--navy) 100%)`,
          borderBottom: `1px solid ${primary}33`,
        }}>
        <div className="h-1" style={{ background: `linear-gradient(90deg, ${primary}, ${secondary}, ${primary})` }} />

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/teams" className="font-mono text-[10px] tracking-wider uppercase transition-colors"
              style={{ color: 'var(--cream-muted)' }}>
              ← All Teams
            </Link>
            <span style={{ color: 'var(--border-mid)' }}>/</span>
            <span className="font-mono text-[10px] tracking-wider uppercase" style={{ color: 'var(--cream-dim)' }}>
              {team.name}
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="w-24 h-24 rounded-2xl flex items-center justify-center text-5xl shrink-0"
              style={{
                background: `${primary}18`,
                border: `2px solid ${primary}55`,
                boxShadow: `0 0 40px ${primary}22`,
              }}>
              {team.flag}
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <Badge label={`Group ${team.group}`} variant="sky" />
                <Badge label={team.confederation} variant={CONF_VARIANT[team.confederation] ?? 'gray'} />
                {team.bestFinish.includes('Champions') && <Badge label="🏆 Champions" variant="gold" dot />}
              </div>
              <h1 className="font-black text-3xl md:text-4xl mb-1" style={{ color: 'var(--cream)' }}>
                {team.name}
              </h1>
              <p className="font-mono text-[11px] tracking-wider" style={{ color: 'var(--cream-muted)' }}>
                {team.confederation} · FIFA Rank #{team.fifaRanking} · {team.worldCupAppearances} World Cup appearances
              </p>
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <div className="text-center">
                <p className="font-mono font-black text-4xl" style={{ color: primary }}>#{team.fifaRanking}</p>
                <p className="font-mono text-[9px] tracking-wider uppercase" style={{ color: 'var(--cream-muted)' }}>FIFA Rank</p>
              </div>
              <FollowButton team={team} size="md" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-10 pt-8">
        {/* Stats strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: 'Head Coach',  value: team.coach },
            { label: 'Captain',     value: team.captain },
            { label: 'Star Player', value: team.starPlayer },
            { label: 'Best Finish', value: team.bestFinish },
          ].map(({ label, value }) => (
            <div key={label} className="card p-4">
              <p className="font-mono text-[9px] tracking-[0.15em] uppercase mb-1" style={{ color: 'var(--cream-muted)' }}>{label}</p>
              <p className="font-bold text-sm leading-snug" style={{ color: 'var(--cream)' }}>{value}</p>
            </div>
          ))}
        </div>

        {/* Bio + team identity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 card p-5">
            <p className="font-mono text-[9px] tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--cream-muted)' }}>
              About {team.name}
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--cream-dim)' }}>{team.bio}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {team.keyPlayers.map(p => (
                <span key={p} className="text-[11px] px-2.5 py-1 rounded-lg font-medium"
                  style={{ background: 'var(--navy-elevated)', border: '1px solid var(--border)', color: 'var(--cream-dim)' }}>
                  {p}
                </span>
              ))}
            </div>
          </div>

          <div className="card p-5 space-y-4">
            <p className="font-mono text-[9px] tracking-[0.2em] uppercase" style={{ color: 'var(--cream-muted)' }}>
              Team Identity
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg border" style={{ background: primary, borderColor: `${primary}66` }} />
              <div>
                <p className="font-mono text-[9px] uppercase" style={{ color: 'var(--cream-muted)' }}>Primary</p>
                <p className="font-mono text-[11px] font-bold" style={{ color: 'var(--cream)' }}>{primary}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg border" style={{ background: secondary, borderColor: `${secondary}66` }} />
              <div>
                <p className="font-mono text-[9px] uppercase" style={{ color: 'var(--cream-muted)' }}>Secondary</p>
                <p className="font-mono text-[11px] font-bold" style={{ color: 'var(--cream)' }}>{secondary}</p>
              </div>
            </div>
            <div className="pt-3 border-t space-y-2" style={{ borderColor: 'var(--border)' }}>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px]" style={{ color: 'var(--cream-muted)' }}>WC Appearances</span>
                <span className="font-mono font-black text-xl" style={{ color: primary }}>{team.worldCupAppearances}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px]" style={{ color: 'var(--cream-muted)' }}>Group</span>
                <span className="font-mono font-black text-xl" style={{ color: 'var(--sky)' }}>Group {team.group}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Squad */}
        <section>
          <SectionHeader
            title={`${team.name} Squad`}
            accent={sortedPlayers.length > 0 ? `${sortedPlayers.length} Players` : 'Squad'}
          />
          {sortedPlayers.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {sortedPlayers.map(p => <PlayerCard key={p.id} player={p} />)}
            </div>
          ) : (
            <div className="card p-10 text-center">
              <p className="text-3xl mb-2">⏳</p>
              <p className="font-bold text-sm mb-1" style={{ color: 'var(--cream)' }}>Squad Data Coming Soon</p>
              <p className="text-xs" style={{ color: 'var(--cream-muted)' }}>
                Full squad rosters will be confirmed closer to the tournament.
              </p>
            </div>
          )}
        </section>

        {/* Fixtures */}
        {teamMatches.length > 0 && (
          <section>
            <SectionHeader title="Group Stage Fixtures" accent={`${teamMatches.length} Matches`} />
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {teamMatches.map(m => <MatchCard key={m.id} match={m} />)}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
