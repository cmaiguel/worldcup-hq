import type { Player, PlayerPosition } from '@/lib/types';

const POS_META: Record<PlayerPosition, { label: string; color: string; bg: string }> = {
  GK:  { label: 'GK',  color: 'var(--gold)',        bg: 'var(--gold-dim)'  },
  CB:  { label: 'CB',  color: 'var(--sky)',          bg: 'var(--sky-dim)'   },
  LB:  { label: 'LB',  color: 'var(--sky)',          bg: 'var(--sky-dim)'   },
  RB:  { label: 'RB',  color: 'var(--sky)',          bg: 'var(--sky-dim)'   },
  CDM: { label: 'CDM', color: 'var(--green-bright)', bg: 'var(--green-dim)' },
  CM:  { label: 'CM',  color: 'var(--green-bright)', bg: 'var(--green-dim)' },
  CAM: { label: 'CAM', color: 'var(--green-bright)', bg: 'var(--green-dim)' },
  LW:  { label: 'LW',  color: 'var(--red-bright)',   bg: 'var(--red-dim)'   },
  RW:  { label: 'RW',  color: 'var(--red-bright)',   bg: 'var(--red-dim)'   },
  ST:  { label: 'ST',  color: 'var(--red-bright)',   bg: 'var(--red-dim)'   },
  CF:  { label: 'CF',  color: 'var(--red-bright)',   bg: 'var(--red-dim)'   },
};

export default function PlayerCard({ player }: { player: Player }) {
  const pos = POS_META[player.position];

  return (
    <div className="card overflow-hidden transition-all duration-200 flex flex-col" style={{ position: 'relative' }}>
      {/* Position stripe top */}
      <div className="h-0.5" style={{ background: pos.color }} />

      <div className="p-3 flex items-center gap-3">
        {/* Shirt number */}
        <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 font-mono font-black text-lg"
          style={{ background: pos.bg, color: pos.color, border: `1px solid ${pos.color}40` }}>
          {player.shirtNumber}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 mb-0.5">
            {player.isCaptain && (
              <span className="font-mono text-[9px] font-black px-1 rounded"
                style={{ background: 'var(--gold-dim)', color: 'var(--gold)', border: '1px solid var(--border-gold)' }}>C</span>
            )}
            {player.isStarPlayer && (
              <span style={{ color: 'var(--gold)', fontSize: '10px' }}>★</span>
            )}
            <p className="font-black text-[12px] truncate" style={{ color: 'var(--cream)' }}>{player.name}</p>
          </div>
          <p className="text-[10px] truncate" style={{ color: 'var(--cream-muted)' }}>{player.club}</p>
        </div>

        <div className="shrink-0 text-right">
          <div className="font-mono text-[9px] px-1.5 py-0.5 rounded font-bold"
            style={{ background: pos.bg, color: pos.color }}>
            {pos.label}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-3 pb-2.5">
        <span className="font-mono text-[10px]" style={{ color: 'var(--cream-muted)' }}>Age {player.age}</span>
        <span className="font-mono text-[10px] font-bold" style={{ color: 'var(--green-bright)' }}>{player.marketValue}</span>
      </div>
    </div>
  );
}
