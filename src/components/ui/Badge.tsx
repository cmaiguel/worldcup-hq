import { cn } from '@/lib/utils';

type BadgeVariant = 'gold' | 'green' | 'red' | 'sky' | 'gray' | 'cream';

const STYLES: Record<BadgeVariant, React.CSSProperties> = {
  gold:  { background: 'var(--gold-dim)',  color: 'var(--gold-bright)', border: '1px solid var(--border-gold)' },
  green: { background: 'var(--green-dim)', color: 'var(--green-bright)', border: '1px solid var(--border-green)' },
  red:   { background: 'var(--red-dim)',   color: 'var(--red-bright)',  border: '1px solid var(--border-red)' },
  sky:   { background: 'var(--sky-dim)',   color: 'var(--sky)',         border: '1px solid rgba(74,144,217,0.28)' },
  gray:  { background: 'var(--navy-elevated)', color: 'var(--cream-dim)', border: '1px solid var(--border-mid)' },
  cream: { background: 'rgba(240,234,216,0.08)', color: 'var(--cream)', border: '1px solid rgba(240,234,216,0.15)' },
};

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  className?: string;
  dot?: boolean;
}

export default function Badge({ label, variant = 'gray', className, dot }: BadgeProps) {
  return (
    <span
      className={cn('inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-semibold tracking-wider uppercase', className)}
      style={STYLES[variant]}
    >
      {dot && <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'currentColor', opacity: 0.8 }} />}
      {label}
    </span>
  );
}
