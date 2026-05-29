'use client';

import type { TeamStat } from '@/lib/types';
import { sortTeamsByPoints } from '@/lib/utils';

export default function GroupTable({ stats, group }: { stats: TeamStat[]; group: string }) {
  const sorted = sortTeamsByPoints(stats.filter(s => s.group === group));

  return (
    <div className="card overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2.5"
        style={{ background: 'var(--navy-elevated)', borderBottom: '1px solid var(--border)' }}>
        <div className="flex items-center gap-2">
          <span className="font-mono font-black text-sm" style={{ color: 'var(--gold-bright)' }}>GROUP {group}</span>
        </div>
        <span className="font-mono text-[9px] tracking-wider" style={{ color: 'var(--cream-muted)' }}>
          P  W  D  L  GF  GA  PTS
        </span>
      </div>
      <div>
        {sorted.map((row, i) => (
          <div key={row.teamId}
            className="flex items-center gap-2 px-3 py-2 transition-colors"
            style={{
              borderBottom: i < sorted.length - 1 ? '1px solid var(--border)' : 'none',
              borderLeft: `3px solid ${i < 2 ? 'var(--green)' : 'transparent'}`,
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--navy-elevated)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
          >
            <span className="w-4 font-mono text-[11px]" style={{ color: 'var(--cream-muted)' }}>{i + 1}</span>
            <span className="text-base">{row.teamFlag}</span>
            <span className="flex-1 text-[12px] font-semibold truncate" style={{ color: 'var(--cream)' }}>{row.teamName}</span>
            <div className="flex items-center gap-3 font-mono text-xs" style={{ color: 'var(--cream-dim)' }}>
              <span className="w-4 text-center">{row.played}</span>
              <span className="w-4 text-center">{row.wins}</span>
              <span className="w-4 text-center">{row.draws}</span>
              <span className="w-4 text-center">{row.losses}</span>
              <span className="w-4 text-center">{row.goalsFor}</span>
              <span className="w-4 text-center">{row.goalsAgainst}</span>
              <span className="w-6 text-center font-black" style={{ color: 'var(--cream)' }}>{row.points}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
