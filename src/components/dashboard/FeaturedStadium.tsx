import { formatCapacity } from '@/lib/utils';

export default function FeaturedStadium() {
  return (
    <div className="card overflow-hidden" style={{ border: '1px solid var(--border-gold)', boxShadow: '0 0 24px var(--gold-glow)' }}>
      <div className="h-0.5" style={{ background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }} />
      <div className="px-4 py-3 flex items-center gap-2" style={{ borderBottom: '1px solid var(--border)' }}>
        <span className="font-mono text-[9px] tracking-[0.2em] uppercase" style={{ color: 'var(--gold)' }}>Final Venue</span>
        <div className="flex-1 h-px" style={{ background: 'var(--border-gold)' }} />
        <span className="font-mono text-[9px] tracking-wider uppercase" style={{ color: 'var(--cream-muted)' }}>Aug 2, 2026</span>
      </div>

      <div className="p-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
            style={{ background: 'var(--gold-dim)', border: '1px solid var(--border-gold)' }}>🏆</div>
          <div>
            <h3 className="font-black text-sm" style={{ color: 'var(--cream)' }}>MetLife Stadium</h3>
            <p className="text-xs" style={{ color: 'var(--cream-muted)' }}>🇺🇸 East Rutherford, New Jersey</p>
            <p className="text-[11px] font-semibold mt-0.5" style={{ color: 'var(--gold)' }}>Hosts the 2026 World Cup Final</p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {[
            { l: 'Capacity', v: formatCapacity(82500) },
            { l: 'Matches',  v: '8' },
            { l: 'Opened',   v: '2010' },
            { l: 'Surface',  v: 'Grass' },
          ].map(({ l, v }) => (
            <div key={l} className="text-center rounded-lg py-2" style={{ background: 'var(--navy-elevated)', border: '1px solid var(--border)' }}>
              <p className="font-mono text-[8px] tracking-wider uppercase" style={{ color: 'var(--cream-muted)' }}>{l}</p>
              <p className="font-mono font-black text-xs mt-0.5" style={{ color: 'var(--cream)' }}>{v}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
