import type { Stadium } from '@/lib/types';
import { formatCapacity } from '@/lib/utils';
import Badge from '@/components/ui/Badge';

const COUNTRY_VARIANT: Record<string, 'blue' | 'green' | 'pink'> = {
  USA: 'blue',
  Mexico: 'green',
  Canada: 'pink',
};

const COUNTRY_FLAG: Record<string, string> = {
  USA: '🇺🇸',
  Mexico: '🇲🇽',
  Canada: '🇨🇦',
};

interface StadiumCardProps {
  stadium: Stadium;
}

export default function StadiumCard({ stadium }: StadiumCardProps) {
  return (
    <div className="retro-card p-4 hover:glow-border-pink group cursor-pointer transition-all">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-white text-sm group-hover:text-[#ff0080] transition-colors truncate">
            {stadium.name}
          </h3>
          <p className="text-xs text-[#8888bb] mt-0.5">
            {COUNTRY_FLAG[stadium.country]}&nbsp;
            {stadium.city}{stadium.state ? `, ${stadium.state}` : ''}
          </p>
        </div>
        <Badge
          label={stadium.country}
          variant={COUNTRY_VARIANT[stadium.country] ?? 'gray'}
        />
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-3 gap-2 py-3 border-y border-[#1e1e3a] mb-3">
        <div className="text-center">
          <p className="text-[9px] font-mono text-[#444466] tracking-wider uppercase">Capacity</p>
          <p className="text-sm font-bold text-[#00d4ff] font-mono mt-0.5">
            {formatCapacity(stadium.capacity)}
          </p>
        </div>
        <div className="text-center">
          <p className="text-[9px] font-mono text-[#444466] tracking-wider uppercase">Matches</p>
          <p className="text-sm font-bold text-[#00ff88] font-mono mt-0.5">{stadium.matchesHosted}</p>
        </div>
        <div className="text-center">
          <p className="text-[9px] font-mono text-[#444466] tracking-wider uppercase">Opened</p>
          <p className="text-sm font-bold text-white font-mono mt-0.5">{stadium.openedYear}</p>
        </div>
      </div>

      {/* Surface */}
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-mono text-[#444466]">Surface: {stadium.surface}</span>
        <div className="flex items-center gap-1">
          {Array.from({ length: Math.min(stadium.matchesHosted, 8) }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#1e1e3a] group-hover:bg-[#ff0080]/40 transition-colors" />
          ))}
        </div>
      </div>
    </div>
  );
}
