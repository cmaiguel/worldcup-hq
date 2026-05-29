import type { TeamStat } from '@/lib/types';
import { sortTeamsByPoints } from '@/lib/utils';

interface GroupTableProps {
  stats: TeamStat[];
  group: string;
}

export default function GroupTable({ stats, group }: GroupTableProps) {
  const sorted = sortTeamsByPoints(stats.filter(s => s.group === group));

  return (
    <div className="retro-card overflow-hidden">
      <div className="px-4 py-2.5 bg-[#141430] border-b border-[#1e1e3a] flex items-center justify-between">
        <span className="text-xs font-bold font-mono text-white">GROUP {group}</span>
        <span className="text-[10px] text-[#444466] font-mono">P W D L GF GA PTS</span>
      </div>
      <table className="w-full text-xs">
        <tbody>
          {sorted.map((row, i) => (
            <tr
              key={row.teamId}
              className={`border-b border-[#1e1e3a] last:border-0 hover:bg-[#141430] transition-colors ${
                i < 2 ? 'border-l-2 border-l-[#00ff88]' : ''
              }`}
            >
              <td className="py-2 pl-3 pr-1 w-6 text-[#444466] font-mono">{i + 1}</td>
              <td className="py-2 px-2">
                <div className="flex items-center gap-1.5">
                  <span>{row.teamFlag}</span>
                  <span className="font-medium text-white truncate max-w-[80px] sm:max-w-none">{row.teamName}</span>
                </div>
              </td>
              <td className="py-2 px-1.5 text-center text-[#8888bb] font-mono">{row.played}</td>
              <td className="py-2 px-1.5 text-center text-[#8888bb] font-mono">{row.wins}</td>
              <td className="py-2 px-1.5 text-center text-[#8888bb] font-mono">{row.draws}</td>
              <td className="py-2 px-1.5 text-center text-[#8888bb] font-mono">{row.losses}</td>
              <td className="py-2 px-1.5 text-center text-[#8888bb] font-mono">{row.goalsFor}</td>
              <td className="py-2 px-1.5 text-center text-[#8888bb] font-mono">{row.goalsAgainst}</td>
              <td className="py-2 px-3 text-center font-bold font-mono text-white">{row.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
