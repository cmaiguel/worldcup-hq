import type { MatchWithStadium } from '@/lib/types';
import { formatMatchDate, formatMatchTime } from '@/lib/utils';
import Badge from '@/components/ui/Badge';

interface MatchCardProps {
  match: MatchWithStadium;
  compact?: boolean;
}

const STAGE_VARIANT: Record<string, 'green' | 'pink' | 'blue' | 'yellow' | 'gold'> = {
  'Group Stage': 'blue',
  'Round of 32': 'green',
  'Round of 16': 'green',
  'Quarter-Final': 'yellow',
  'Semi-Final': 'pink',
  'Third Place': 'gray' as never,
  'Final': 'gold',
};

export default function MatchCard({ match, compact = false }: MatchCardProps) {
  const home = match.homeTeam;
  const away = match.awayTeam;
  const hasScore = match.homeScore !== undefined && match.awayScore !== undefined;
  const stageVariant = STAGE_VARIANT[match.stage] ?? 'gray';

  return (
    <div className="retro-card p-4 hover:glow-border-blue group cursor-pointer">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Badge
            label={match.group ? `Group ${match.group}` : match.stage}
            variant={stageVariant as never}
          />
          {match.status === 'live' && (
            <Badge label="LIVE" variant="pink" />
          )}
        </div>
        <span className="text-[10px] font-mono text-[#444466]">#{match.matchNumber}</span>
      </div>

      {/* Teams & Score */}
      <div className="flex items-center gap-3 my-3">
        {/* Home */}
        <div className="flex-1 flex items-center gap-2 min-w-0">
          <span className="text-2xl leading-none">{home?.flag ?? '🏴'}</span>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-white truncate">
              {home?.name ?? 'TBD'}
            </p>
            {!compact && (
              <p className="text-[10px] font-mono text-[#444466]">{home?.code ?? '—'}</p>
            )}
          </div>
        </div>

        {/* Score / VS */}
        <div className="shrink-0 text-center">
          {hasScore ? (
            <div className="font-score text-xl font-bold text-white bg-[#0d0d1e] border border-[#1e1e3a] rounded px-3 py-1">
              {match.homeScore} <span className="text-[#444466] mx-0.5">—</span> {match.awayScore}
            </div>
          ) : (
            <div className="font-mono text-xs text-[#8888bb] bg-[#0d0d1e] border border-[#1e1e3a] rounded px-3 py-2">
              VS
            </div>
          )}
        </div>

        {/* Away */}
        <div className="flex-1 flex items-center gap-2 justify-end min-w-0">
          <div className="min-w-0 text-right">
            <p className="text-sm font-semibold text-white truncate">
              {away?.name ?? 'TBD'}
            </p>
            {!compact && (
              <p className="text-[10px] font-mono text-[#444466]">{away?.code ?? '—'}</p>
            )}
          </div>
          <span className="text-2xl leading-none">{away?.flag ?? '🏴'}</span>
        </div>
      </div>

      {/* Footer */}
      {!compact && (
        <div className="flex items-center justify-between pt-3 border-t border-[#1e1e3a]">
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] text-[#444466]">🏟️</span>
            <span className="text-[11px] text-[#8888bb] truncate">{match.stadium.name}</span>
          </div>
          <div className="text-right">
            <p className="text-[11px] text-white">{formatMatchDate(match.date)}</p>
            <p className="text-[10px] text-[#444466] font-mono">{formatMatchTime(match.date)}</p>
          </div>
        </div>
      )}
      {compact && (
        <p className="text-[10px] text-[#8888bb] font-mono">{formatMatchDate(match.date)}</p>
      )}
    </div>
  );
}
