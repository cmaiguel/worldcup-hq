import { cn } from '@/lib/utils';

type Accent = 'gold' | 'green' | 'red' | 'sky' | 'cream';

const ACCENT: Record<Accent, string> = {
  gold:  'var(--gold-bright)',
  green: 'var(--green-bright)',
  red:   'var(--red-bright)',
  sky:   'var(--sky)',
  cream: 'var(--cream)',
};

interface StatCardProps {
  label: string;
  value: string | number;
  subLabel?: string;
  icon?: string;
  accent?: Accent;
  className?: string;
}

export default function StatCard({ label, value, subLabel, icon, accent = 'gold', className }: StatCardProps) {
  return (
    <div className={cn('card p-4', className)}>
      {icon && <span className="text-2xl mb-3 block">{icon}</span>}
      <p className="font-mono text-[10px] tracking-[0.18em] uppercase mb-1" style={{ color: 'var(--cream-muted)' }}>{label}</p>
      <p className="font-mono font-black text-3xl" style={{ color: ACCENT[accent] }}>{value}</p>
      {subLabel && <p className="text-xs mt-1.5 font-medium" style={{ color: 'var(--cream-muted)' }}>{subLabel}</p>}
    </div>
  );
}
