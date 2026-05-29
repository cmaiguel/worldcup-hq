import type { Stadium } from '@/lib/types';
import { formatCapacity } from '@/lib/utils';
import Badge from '@/components/ui/Badge';

const COUNTRY_VARIANT: Record<string, 'sky' | 'green' | 'red'> = { USA: 'sky', Mexico: 'green', Canada: 'red' };
const COUNTRY_FLAG: Record<string, string> = { USA: '🇺🇸', Mexico: '🇲🇽', Canada: '🇨🇦' };

export default function StadiumCard({ stadium }: { stadium: Stadium }) {
  const isLargest = stadium.id === 'metlife';
  const isFinalVenue = stadium.id === 'metlife';

  return (
    <div className="card group cursor-pointer overflow-hidden transition-all duration-200"
      style={isFinalVenue ? { border: '1px solid var(--border-gold)' } : {}}>
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-2.5"
        style={{ background: 'var(--navy-elevated)', borderBottom: '1px solid var(--border)' }}>
        <Badge label={stadium.country} variant={COUNTRY_VARIANT[stadium.country] ?? 'gray'} />
        {isFinalVenue && <Badge label="Final Venue" variant="gold" dot />}
      </div>

      <div className="p-4">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
            style={{ background: 'var(--navy-elevated)', border: '1px solid var(--border)' }}>
            🏟️
          </div>
          <div className="min-w-0">
            <h3 className="font-black text-sm transition-colors group-hover:text-[var(--gold-bright)] leading-tight"
              style={{ color: 'var(--cream)' }}>
              {stadium.name}
            </h3>
            <p className="text-xs mt-0.5" style={{ color: 'var(--cream-muted)' }}>
              {COUNTRY_FLAG[stadium.country]} {stadium.city}{stadium.state ? `, ${stadium.state}` : ''}
            </p>
          </div>
        </div>

        {/* Stat grid */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { l: 'Capacity',  v: formatCapacity(stadium.capacity), accent: isLargest },
            { l: 'Matches',   v: String(stadium.matchesHosted) },
            { l: 'Opened',    v: String(stadium.openedYear) },
          ].map(({ l, v, accent }) => (
            <div key={l} className="rounded-lg p-2.5 text-center"
              style={{ background: 'var(--navy-elevated)', border: '1px solid var(--border)' }}>
              <p className="font-mono text-[9px] tracking-wider uppercase mb-1" style={{ color: 'var(--cream-muted)' }}>{l}</p>
              <p className="font-mono font-black text-sm" style={{ color: accent ? 'var(--gold)' : 'var(--cream)' }}>{v}</p>
            </div>
          ))}
        </div>

        {/* Surface + match dots */}
        <div className="flex items-center justify-between mt-3">
          <span className="font-mono text-[10px]" style={{ color: 'var(--cream-muted)' }}>
            {stadium.surface}
          </span>
          <div className="flex items-center gap-1">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full transition-colors"
                style={{ background: i < stadium.matchesHosted ? 'var(--gold)' : 'var(--border-mid)' }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
