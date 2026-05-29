'use client';

import type { PlayerStat } from '@/lib/types';
import { sortPlayersByGoals } from '@/lib/utils';

const MEDALS: Record<number, string> = { 0: '🥇', 1: '🥈', 2: '🥉' };

export default function TopScorers({ players, limit = 10 }: { players: PlayerStat[]; limit?: number }) {
  const sorted = sortPlayersByGoals(players).slice(0, limit);
  const maxGoals = sorted[0]?.goals ?? 0;

  if (sorted.length === 0 || maxGoals === 0) {
    return (
      <div className="text-center py-10 px-4">
        <p className="text-3xl mb-2">⚽</p>
        <p className="font-bold text-sm mb-1" style={{ color: 'var(--cream)' }}>No Goals Scored Yet</p>
        <p className="text-xs" style={{ color: 'var(--cream-muted)' }}>
          The tournament begins June 11, 2026. Stats update in real-time.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-1.5 p-2">
      {sorted.map((p, i) => (
        <div key={p.id}
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all group cursor-pointer"
          style={{ background: i === 0 ? 'var(--gold-dim)' : 'transparent' }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--navy-elevated)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = i === 0 ? 'var(--gold-dim)' : 'transparent'; }}
        >
          <span className="w-6 text-center text-sm shrink-0">
            {MEDALS[i] ?? <span className="font-mono text-xs" style={{ color: 'var(--cream-muted)' }}>{i + 1}</span>}
          </span>
          <span className="text-xl shrink-0">{p.teamFlag}</span>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold truncate" style={{ color: 'var(--cream)' }}>{p.name}</p>
            {/* Bar */}
            <div className="flex items-center gap-2 mt-1">
              <div className="flex-1 h-1 rounded-full overflow-hidden" style={{ background: 'var(--border-mid)' }}>
                <div className="h-full rounded-full animate-bar"
                  style={{
                    width: maxGoals > 0 ? `${(p.goals / maxGoals) * 100}%` : '0%',
                    background: i === 0 ? 'var(--gold)' : 'var(--green)',
                  }} />
              </div>
              <span className="font-mono text-[9px] shrink-0" style={{ color: 'var(--cream-muted)' }}>
                {p.position.slice(0,3).toUpperCase()}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <div className="text-center">
              <p className="font-mono font-black text-lg leading-none" style={{ color: i === 0 ? 'var(--gold)' : 'var(--green-bright)' }}>
                {p.goals}
              </p>
              <p className="font-mono text-[9px]" style={{ color: 'var(--cream-muted)' }}>G</p>
            </div>
            <div className="text-center">
              <p className="font-mono font-black text-lg leading-none" style={{ color: 'var(--sky)' }}>{p.assists}</p>
              <p className="font-mono text-[9px]" style={{ color: 'var(--cream-muted)' }}>A</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
