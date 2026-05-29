import { formatCapacity } from '@/lib/utils';

// MetLife — the Final venue
const FEATURED = {
  name: 'MetLife Stadium',
  city: 'East Rutherford, NJ',
  country: '🇺🇸 United States',
  capacity: 82500,
  matchesHosted: 8,
  openedYear: 2010,
  surface: 'Grass',
  note: 'Hosts the 2026 World Cup Final — August 2, 2026',
};

export default function FeaturedStadium() {
  return (
    <div className="retro-card p-5 hover:glow-border-gold group transition-all" style={{ '--tw-shadow': '0 0 0 1px #ffd700, 0 0 15px rgba(255,215,0,0.2)' } as React.CSSProperties}>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-[10px] font-mono text-[#ffd700] tracking-[0.2em] uppercase">Featured Venue</span>
        <div className="flex-1 h-px bg-[#1e1e3a]" />
        <span className="text-[10px] font-mono text-[#444466]">Final Stage</span>
      </div>

      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-xl bg-[#ffd700]/10 border border-[#ffd700]/30 flex items-center justify-center text-3xl shrink-0">
          🏟️
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-white group-hover:text-[#ffd700] transition-colors">
            {FEATURED.name}
          </h3>
          <p className="text-sm text-[#8888bb]">{FEATURED.city} · {FEATURED.country}</p>
          <p className="text-xs text-[#ffd700] mt-1 font-medium">{FEATURED.note}</p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-3 mt-4 pt-4 border-t border-[#1e1e3a]">
        {[
          { label: 'Capacity', value: formatCapacity(FEATURED.capacity) },
          { label: 'Matches', value: FEATURED.matchesHosted },
          { label: 'Opened', value: FEATURED.openedYear },
          { label: 'Surface', value: FEATURED.surface },
        ].map(({ label, value }) => (
          <div key={label} className="text-center">
            <p className="text-[9px] font-mono text-[#444466] tracking-wider uppercase">{label}</p>
            <p className="text-sm font-bold text-white mt-0.5">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
