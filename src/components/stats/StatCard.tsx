import { cn } from '@/lib/utils';

interface StatCardProps {
  label: string;
  value: string | number;
  subLabel?: string;
  icon?: string;
  accent?: 'green' | 'pink' | 'blue' | 'yellow' | 'gold';
  className?: string;
}

const ACCENT_CLASSES: Record<string, string> = {
  green:  'text-[#00ff88]',
  pink:   'text-[#ff0080]',
  blue:   'text-[#00d4ff]',
  yellow: 'text-[#ffe600]',
  gold:   'text-[#ffd700]',
};

export default function StatCard({
  label, value, subLabel, icon, accent = 'green', className,
}: StatCardProps) {
  return (
    <div className={cn('retro-card p-4', className)}>
      {icon && <span className="text-2xl mb-2 block">{icon}</span>}
      <p className="text-[10px] font-mono text-[#444466] tracking-wider uppercase mb-1">{label}</p>
      <p className={cn('text-3xl font-bold font-mono', ACCENT_CLASSES[accent])}>{value}</p>
      {subLabel && <p className="text-xs text-[#8888bb] mt-1">{subLabel}</p>}
    </div>
  );
}
