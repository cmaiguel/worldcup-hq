import type { MatchWithStadium } from '@/lib/types';
import { formatMatchDate, formatMatchTime } from '@/lib/utils';

const COUNTRY_FLAG: Record<string, string> = { USA: '🇺🇸', Mexico: '🇲🇽', Canada: '🇨🇦' };

interface Props { match: MatchWithStadium }

export default function OpeningMatchBanner({ match }: Props) {
  const home = match.homeTeam;
  const away = match.awayTeam;

  return (
    <div className="relative overflow-hidden rounded-2xl"
      style={{
        background: 'linear-gradient(135deg, #1a0a00 0%, #0f1824 40%, #07111f 100%)',
        border: '1px solid var(--border-gold)',
        boxShadow: '0 0 40px var(--gold-glow), 0 0 80px rgba(7,11,24,0.8)',
      }}>
      {/* Top accent bar */}
      <div className="h-0.5" style={{ background: 'linear-gradient(90deg, transparent 0%, var(--gold) 30%, var(--gold-bright) 50%, var(--gold) 70%, transparent 100%)' }} />

      {/* Background glow orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-20"
          style={{ background: home?.colors.primary ? `radial-gradient(circle, ${home.colors.primary}, transparent 70%)` : 'transparent' }} />
        <div className="absolute -right-12 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-20"
          style={{ background: away?.colors.primary ? `radial-gradient(circle, ${away.colors.primary}, transparent 70%)` : 'transparent' }} />
      </div>

      <div className="relative px-6 py-5">
        {/* Header row */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--gold)' }} />
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase font-black" style={{ color: 'var(--gold)' }}>
              Opening Match
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] tracking-wider uppercase" style={{ color: 'var(--cream-muted)' }}>
              Match {match.matchNumber}
            </span>
            <span className="font-mono text-[10px] px-2 py-0.5 rounded"
              style={{ background: 'var(--gold-dim)', color: 'var(--gold)', border: '1px solid var(--border-gold)' }}>
              Group {match.group}
            </span>
          </div>
        </div>

        {/* Teams */}
        <div className="flex items-center justify-between gap-4">
          {/* Home team */}
          <div className="flex-1 flex flex-col items-start gap-2">
            <span className="text-6xl md:text-7xl leading-none">{home?.flag ?? '🏴'}</span>
            <div>
              <p className="font-black text-xl md:text-2xl leading-tight" style={{ color: 'var(--cream)' }}>
                {home?.name ?? 'TBD'}
              </p>
              <p className="font-mono text-[11px]" style={{ color: 'var(--cream-muted)' }}>
                {home ? `FIFA #${home.fifaRanking}` : '—'}
              </p>
            </div>
          </div>

          {/* Center VS / date */}
          <div className="flex flex-col items-center gap-2 shrink-0">
            <div className="font-mono text-sm font-black px-4 py-2 rounded-xl"
              style={{ background: 'var(--gold-dim)', color: 'var(--gold)', border: '1px solid var(--border-gold)', letterSpacing: '0.12em' }}>
              VS
            </div>
            <div className="text-center">
              <p className="font-mono text-[11px] font-bold" style={{ color: 'var(--cream)' }}>
                {formatMatchDate(match.date)}
              </p>
              <p className="font-mono text-[10px]" style={{ color: 'var(--cream-muted)' }}>
                {formatMatchTime(match.date)}
              </p>
            </div>
          </div>

          {/* Away team */}
          <div className="flex-1 flex flex-col items-end gap-2">
            <span className="text-6xl md:text-7xl leading-none">{away?.flag ?? '🏴'}</span>
            <div className="text-right">
              <p className="font-black text-xl md:text-2xl leading-tight" style={{ color: 'var(--cream)' }}>
                {away?.name ?? 'TBD'}
              </p>
              <p className="font-mono text-[11px]" style={{ color: 'var(--cream-muted)' }}>
                {away ? `FIFA #${away.fifaRanking}` : '—'}
              </p>
            </div>
          </div>
        </div>

        {/* Stadium footer */}
        <div className="flex items-center justify-between mt-5 pt-4"
          style={{ borderTop: '1px solid rgba(214,171,87,0.15)' }}>
          <div className="flex items-center gap-2">
            <span>{COUNTRY_FLAG[match.stadium.country] ?? '🌎'}</span>
            <span className="font-medium text-sm" style={{ color: 'var(--cream-dim)' }}>
              {match.stadium.name}
            </span>
            <span className="font-mono text-[11px]" style={{ color: 'var(--cream-muted)' }}>
              · {match.stadium.city}
            </span>
          </div>
          <div className="font-mono text-[10px] font-bold px-2.5 py-1 rounded-lg"
            style={{ background: 'rgba(214,171,87,0.08)', color: 'var(--cream-muted)', border: '1px solid rgba(214,171,87,0.12)' }}>
            {match.stadium.country.toUpperCase()}
          </div>
        </div>
      </div>

      {/* Bottom accent bar */}
      <div className="h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(214,171,87,0.3), transparent)' }} />
    </div>
  );
}
