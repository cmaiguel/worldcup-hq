import type { MatchWithStadium } from '@/lib/types';
import { formatMatchDate, formatMatchTime } from '@/lib/utils';
import Badge from '@/components/ui/Badge';

const STAGE_VARIANT: Record<string, 'sky' | 'green' | 'gold' | 'red' | 'gray'> = {
  'Group Stage':   'sky',
  'Round of 32':   'green',
  'Round of 16':   'green',
  'Quarter-Final': 'gold',
  'Semi-Final':    'red',
  'Third Place':   'gray',
  'Final':         'gold',
};

const COUNTRY_FLAG: Record<string, string> = { USA: '🇺🇸', Mexico: '🇲🇽', Canada: '🇨🇦' };

interface MatchCardProps { match: MatchWithStadium; compact?: boolean; }

export default function MatchCard({ match, compact = false }: MatchCardProps) {
  const home = match.homeTeam;
  const away = match.awayTeam;
  const hasScore = match.homeScore !== undefined && match.awayScore !== undefined;
  const stageVariant = STAGE_VARIANT[match.stage] ?? 'gray';
  const isFinal = match.stage === 'Final';

  return (
    <div className="card group cursor-pointer overflow-hidden transition-all duration-200"
      style={isFinal ? { border: '1px solid var(--border-gold)', boxShadow: '0 0 20px var(--gold-glow)' } : {}}>
      {/* Gold top bar for Final */}
      {isFinal && <div className="h-0.5" style={{ background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }} />}

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2.5"
        style={{ background: 'var(--navy-elevated)', borderBottom: '1px solid var(--border)' }}>
        <div className="flex items-center gap-2">
          <Badge label={match.group ? `Group ${match.group}` : match.stage} variant={stageVariant} />
          {match.status === 'live' && <Badge label="LIVE" variant="red" dot />}
        </div>
        <span className="font-mono text-[10px]" style={{ color: 'var(--cream-muted)' }}>
          Match {match.matchNumber}
        </span>
      </div>

      {/* Teams row */}
      <div className="px-4 py-4">
        <div className="flex items-center gap-3">
          {/* Home */}
          <div className="flex-1 flex items-center gap-2.5 min-w-0">
            <span className="text-3xl leading-none shrink-0">{home?.flag ?? '🏴'}</span>
            <div className="min-w-0">
              <p className="font-bold text-sm truncate transition-colors" style={{ color: 'var(--cream)' }}>
                {home?.name ?? 'TBD'}
              </p>
              <p className="font-mono text-[10px]" style={{ color: 'var(--cream-muted)' }}>
                {home ? `#${home.fifaRanking} FIFA` : '—'}
              </p>
            </div>
          </div>

          {/* Score / VS */}
          <div className="shrink-0 text-center px-1">
            {hasScore ? (
              <div className="font-score text-2xl font-black px-4 py-1.5 rounded-lg"
                style={{ background: 'var(--navy-elevated)', border: '1px solid var(--border-mid)', color: 'var(--cream)' }}>
                {match.homeScore}
                <span className="mx-1.5" style={{ color: 'var(--cream-muted)' }}>–</span>
                {match.awayScore}
              </div>
            ) : (
              <div className="font-mono text-xs font-bold px-3 py-2 rounded-lg"
                style={{ background: 'var(--navy-elevated)', border: '1px solid var(--border)', color: 'var(--cream-muted)' }}>
                VS
              </div>
            )}
          </div>

          {/* Away */}
          <div className="flex-1 flex items-center gap-2.5 justify-end min-w-0">
            <div className="min-w-0 text-right">
              <p className="font-bold text-sm truncate" style={{ color: 'var(--cream)' }}>
                {away?.name ?? 'TBD'}
              </p>
              <p className="font-mono text-[10px]" style={{ color: 'var(--cream-muted)' }}>
                {away ? `#${away.fifaRanking} FIFA` : '—'}
              </p>
            </div>
            <span className="text-3xl leading-none shrink-0">{away?.flag ?? '🏴'}</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      {!compact && (
        <div className="flex items-center gap-3 px-4 py-2.5 divider">
          <div className="flex items-center gap-1.5 flex-1 min-w-0">
            <span>{COUNTRY_FLAG[match.stadium.country]}</span>
            <span className="text-xs font-medium truncate" style={{ color: 'var(--cream-dim)' }}>
              {match.stadium.name}
            </span>
            <span className="text-[11px]" style={{ color: 'var(--cream-muted)' }}>· {match.stadium.city}</span>
          </div>
          <div className="text-right shrink-0">
            <p className="text-[11px] font-semibold" style={{ color: 'var(--cream)' }}>{formatMatchDate(match.date)}</p>
            <p className="font-mono text-[10px]" style={{ color: 'var(--cream-muted)' }}>{formatMatchTime(match.date)}</p>
          </div>
        </div>
      )}
    </div>
  );
}
