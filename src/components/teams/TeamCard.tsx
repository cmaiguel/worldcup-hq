import type { Team } from '@/lib/types';
import Badge from '@/components/ui/Badge';

interface TeamCardProps {
  team: Team;
}

const CONF_VARIANT: Record<string, 'blue' | 'green' | 'pink' | 'yellow' | 'gold'> = {
  UEFA: 'blue',
  CONMEBOL: 'green',
  CONCACAF: 'yellow',
  AFC: 'pink',
  CAF: 'gold',
  OFC: 'gray' as never,
};

export default function TeamCard({ team }: TeamCardProps) {
  return (
    <div className="retro-card p-4 hover:glow-border-green group cursor-pointer transition-all">
      {/* Flag & basic info */}
      <div className="flex items-start gap-3 mb-3">
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center text-3xl shrink-0 border border-[#1e1e3a]"
          style={{ background: `${team.colors.primary}22` }}
        >
          {team.flag}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-bold text-white text-sm truncate group-hover:text-[#00ff88] transition-colors">
            {team.name}
          </h3>
          <p className="text-[10px] font-mono text-[#444466] tracking-wider">{team.code}</p>
          <div className="flex items-center gap-1.5 mt-1">
            <Badge label={`Group ${team.group}`} variant="blue" />
            <Badge label={team.confederation} variant={CONF_VARIANT[team.confederation] ?? 'gray'} />
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 gap-2 py-3 border-y border-[#1e1e3a] mb-3">
        <div>
          <p className="text-[9px] font-mono text-[#444466] tracking-wider uppercase">FIFA Rank</p>
          <p className="text-lg font-bold text-[#00ff88] font-mono">#{team.fifaRanking}</p>
        </div>
        <div>
          <p className="text-[9px] font-mono text-[#444466] tracking-wider uppercase">Coach</p>
          <p className="text-xs text-white font-medium truncate">{team.coach}</p>
        </div>
      </div>

      {/* Key players */}
      <div>
        <p className="text-[9px] font-mono text-[#444466] tracking-wider uppercase mb-1.5">
          Key Players
        </p>
        <div className="flex flex-wrap gap-1">
          {team.keyPlayers.slice(0, 3).map(player => (
            <span
              key={player}
              className="text-[10px] px-1.5 py-0.5 rounded bg-[#141430] border border-[#1e1e3a] text-[#8888bb] font-medium"
            >
              {player}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
