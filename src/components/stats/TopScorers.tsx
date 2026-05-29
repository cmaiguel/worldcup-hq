import type { PlayerStat } from '@/lib/types';
import { sortPlayersByGoals } from '@/lib/utils';

interface TopScorersProps {
  players: PlayerStat[];
  limit?: number;
}

const MEDAL: Record<number, { color: string; label: string }> = {
  0: { color: 'text-[#ffd700]', label: '🥇' },
  1: { color: 'text-[#c0c0c0]', label: '🥈' },
  2: { color: 'text-[#cd7f32]', label: '🥉' },
};

export default function TopScorers({ players, limit = 10 }: TopScorersProps) {
  const sorted = sortPlayersByGoals(players).slice(0, limit);

  if (sorted.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-[#444466] font-mono text-sm">Tournament hasn&apos;t started yet.</p>
        <p className="text-[#8888bb] text-xs mt-1">Stats will appear once matches are played.</p>
      </div>
    );
  }

  return (
    <div className="space-y-1">
      {sorted.map((player, i) => (
        <div
          key={player.id}
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#0d0d1e] transition-colors group"
        >
          <span className="w-6 text-center text-sm">
            {MEDAL[i] ? MEDAL[i].label : (
              <span className="text-[#444466] font-mono text-xs">{i + 1}</span>
            )}
          </span>
          <span className="text-xl">{player.teamFlag}</span>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-white group-hover:text-[#00ff88] transition-colors truncate">
              {player.name}
            </p>
            <p className="text-[10px] text-[#444466] font-mono">{player.teamCode} · {player.position}</p>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <div className="text-center">
              <p className="text-sm font-bold font-mono text-[#00ff88]">{player.goals}</p>
              <p className="text-[9px] font-mono text-[#444466] uppercase">Goals</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-bold font-mono text-[#00d4ff]">{player.assists}</p>
              <p className="text-[9px] font-mono text-[#444466] uppercase">Ast</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
