import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getTeamBySlug, getPlayersByTeam, getMatches } from '@/lib/data/adapters';
import PlayerCard from '@/components/teams/PlayerCard';
import MatchCard from '@/components/matches/MatchCard';
import FollowButton from '@/components/teams/FollowButton';
import Badge from '@/components/ui/Badge';
import SectionHeader from '@/components/ui/SectionHeader';
import Link from 'next/link';
import { formatMatchDate, formatMatchTime } from '@/lib/utils';

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

const COUNTRY_FLAG: Record<string, string> = { USA: '🇺🇸', Mexico: '🇲🇽', Canada: '🇨🇦' };

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

  // group rivals — opponents in the group stage
  const groupOpponents = teamMatches.slice(0, 3).map(m => {
    const opponent = m.homeTeam?.id === team.id ? m.awayTeam : m.homeTeam;
    return { match: m, opponent };
  });

  return (
    <div className="pb-24" style={{ '--team-primary': primary, '--team-secondary': secondary } as React.CSSProperties}>
      {/* ── HERO ── */}
      <div className="relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${primary}55 0%, ${primary}28 45%, var(--navy) 100%)`,
          borderBottom: `1px solid ${primary}44`,
        }}>
        {/* Thin animated color bar at very top */}
        <div className="h-1" style={{ background: `linear-gradient(90deg, ${primary}, ${secondary}, ${primary})` }} />

        {/* Large radial glow behind flag */}
        <div className="absolute top-0 left-0 w-[600px] h-[400px] pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 25% 50%, ${primary}30 0%, transparent 65%)`,
          }} />

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8">
            <Link href="/teams"
              className="font-mono text-[10px] tracking-wider uppercase transition-colors hover:opacity-80"
              style={{ color: 'var(--cream-muted)' }}>
              ← All Teams
            </Link>
            <span style={{ color: 'var(--border-mid)' }}>/</span>
            <span className="font-mono text-[10px] tracking-wider uppercase" style={{ color: 'var(--cream-dim)' }}>
              {team.name}
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-10">
            {/* LARGE FLAG */}
            <div className="relative shrink-0">
              <div
                className="w-36 h-36 rounded-3xl flex items-center justify-center"
                style={{
                  fontSize: '5.5rem',
                  background: `radial-gradient(circle, ${primary}35 0%, ${primary}10 60%, transparent 100%)`,
                  border: `2px solid ${primary}55`,
                  boxShadow: `0 0 60px ${primary}40, 0 0 120px ${primary}18, 0 8px 32px rgba(0,0,0,0.5)`,
                }}>
                {team.flag}
              </div>
              {/* Confederation badge overlaid */}
              <div className="absolute -bottom-2 -right-2">
                <Badge label={team.confederation} variant={CONF_VARIANT[team.confederation] ?? 'gray'} />
              </div>
            </div>

            {/* Name + info */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <Badge label={`Group ${team.group}`} variant="sky" />
                {team.bestFinish.includes('Champions') && <Badge label="🏆 Champions" variant="gold" dot />}
              </div>
              <h1 className="font-black text-4xl md:text-5xl mb-2 leading-none tracking-tight"
                style={{ color: 'var(--cream)' }}>
                {team.name}
              </h1>
              <p className="font-mono text-[11px] tracking-wider" style={{ color: 'var(--cream-muted)' }}>
                {team.worldCupAppearances} World Cup appearances · Best: {team.bestFinish}
              </p>
            </div>

            {/* Rank + Follow */}
            <div className="flex flex-row md:flex-col items-center md:items-end gap-4 md:gap-2 shrink-0">
              <div className="text-right">
                <p className="font-mono font-black text-5xl leading-none" style={{ color: primary, textShadow: `0 0 30px ${primary}66` }}>
                  #{team.fifaRanking}
                </p>
                <p className="font-mono text-[9px] tracking-[0.18em] uppercase mt-0.5" style={{ color: 'var(--cream-muted)' }}>
                  FIFA Rank
                </p>
              </div>
              <FollowButton team={team} size="md" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-10 pt-8">
        {/* ── STATS STRIP ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: 'Head Coach',  value: team.coach },
            { label: 'Captain',     value: team.captain },
            { label: 'Star Player', value: team.starPlayer },
            { label: 'Best Finish', value: team.bestFinish },
          ].map(({ label, value }) => (
            <div key={label} className="card p-4"
              style={{ borderLeft: `2px solid ${primary}55` }}>
              <p className="font-mono text-[9px] tracking-[0.15em] uppercase mb-1" style={{ color: 'var(--cream-muted)' }}>{label}</p>
              <p className="font-bold text-sm leading-snug" style={{ color: 'var(--cream)' }}>{value}</p>
            </div>
          ))}
        </div>

        {/* ── BIO + GROUP PATH ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Bio */}
          <div className="lg:col-span-2 card p-5">
            <p className="font-mono text-[9px] tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--cream-muted)' }}>
              About {team.name}
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--cream-dim)' }}>{team.bio}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {team.keyPlayers.map(p => (
                <span key={p} className="text-[11px] px-2.5 py-1 rounded-lg font-medium"
                  style={{ background: `${primary}18`, border: `1px solid ${primary}33`, color: 'var(--cream-dim)' }}>
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* Group Stage Path */}
          <div className="card p-5">
            <p className="font-mono text-[9px] tracking-[0.2em] uppercase mb-4" style={{ color: 'var(--cream-muted)' }}>
              Group {team.group} · Tournament Path
            </p>
            {groupOpponents.length > 0 ? (
              <div className="space-y-3">
                {groupOpponents.map(({ match, opponent }) => (
                  <div key={match.id} className="flex items-center gap-3 py-2 rounded-lg px-2 transition-colors hover:bg-white/[0.03]"
                    style={{ borderBottom: '1px solid var(--border)' }}>
                    <span className="text-2xl shrink-0">{opponent?.flag ?? '🏴'}</span>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-[12px] truncate" style={{ color: 'var(--cream)' }}>
                        {opponent?.name ?? 'TBD'}
                      </p>
                      <p className="font-mono text-[9px]" style={{ color: 'var(--cream-muted)' }}>
                        {formatMatchDate(match.date)} · {formatMatchTime(match.date)}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-mono text-[10px]" style={{ color: 'var(--cream-dim)' }}>
                        {COUNTRY_FLAG[match.stadium.country] ?? ''} {match.stadium.city}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-3">
                {/* Placeholder rows if no match data */}
                <div className="flex items-center gap-3 py-2 px-2 rounded-lg"
                  style={{ background: 'var(--navy-elevated)', border: '1px dashed var(--border)' }}>
                  <span className="font-mono text-[10px]" style={{ color: 'var(--cream-muted)' }}>
                    Group stage fixtures TBD
                  </span>
                </div>
              </div>
            )}
            {/* WC Appearances footer */}
            <div className="mt-4 pt-3 flex items-center justify-between"
              style={{ borderTop: '1px solid var(--border)' }}>
              <span className="font-mono text-[10px]" style={{ color: 'var(--cream-muted)' }}>WC Appearances</span>
              <span className="font-mono font-black text-2xl" style={{ color: primary, textShadow: `0 0 20px ${primary}44` }}>
                {team.worldCupAppearances}
              </span>
            </div>
          </div>
        </div>

        {/* ── SQUAD ── */}
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

        {/* ── FIXTURES ── */}
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
