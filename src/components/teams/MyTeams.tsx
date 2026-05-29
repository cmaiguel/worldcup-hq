'use client';

import Link from 'next/link';
import type { Team } from '@/lib/types';
import { useFollowedTeams } from '@/hooks/useFollowedTeams';

export default function MyTeams({ teams }: { teams: Team[] }) {
  const { followed } = useFollowedTeams();
  const followedTeams = teams.filter(t => followed.includes(t.id));

  if (followedTeams.length === 0) {
    return (
      <div className="card p-8 text-center" style={{ border: '1px dashed var(--border-gold)' }}>
        <p className="text-2xl mb-3">🌍</p>
        <p className="font-bold text-sm mb-1" style={{ color: 'var(--cream)' }}>No Teams Followed Yet</p>
        <p className="text-xs mb-4" style={{ color: 'var(--cream-muted)' }}>
          Follow teams to personalize your dashboard. Browse all 48 nations below.
        </p>
        <Link href="/teams"
          className="inline-block font-mono text-[11px] font-black uppercase tracking-wider px-4 py-2 rounded-lg"
          style={{ background: 'var(--gold-dim)', color: 'var(--gold)', border: '1px solid var(--border-gold)' }}>
          Browse 48 Teams →
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
      {followedTeams.map(team => (
        <Link key={team.id} href={`/teams/${team.code.toLowerCase()}`}
          className="card group overflow-hidden transition-all duration-200 hover:scale-[1.02]">
          <div className="h-1" style={{ background: `linear-gradient(90deg, ${team.colors.primary}, ${team.colors.secondary})` }} />
          <div className="p-3 text-center">
            <div className="text-3xl mb-2">{team.flag}</div>
            <p className="font-black text-[11px] leading-tight mb-1.5 group-hover:text-[var(--gold-bright)] transition-colors"
              style={{ color: 'var(--cream)' }}>
              {team.name}
            </p>
            <div className="flex items-center justify-center gap-1.5 flex-wrap">
              <span className="font-mono text-[9px] px-1.5 py-0.5 rounded"
                style={{ background: 'var(--sky-dim)', color: 'var(--sky)' }}>
                Grp {team.group}
              </span>
              <span className="font-mono text-[9px] font-bold" style={{ color: 'var(--gold)' }}>#{team.fifaRanking}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
