import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  accent?: string;
  className?: string;
  action?: React.ReactNode;
}

export default function SectionHeader({ title, subtitle, accent, className, action }: SectionHeaderProps) {
  return (
    <div className={cn('flex items-start justify-between gap-4 mb-5', className)}>
      <div>
        {accent && (
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase mb-1.5" style={{ color: 'var(--gold)' }}>
            {accent}
          </p>
        )}
        <h2 className="text-xl font-black tracking-tight" style={{ color: 'var(--cream)' }}>{title}</h2>
        {subtitle && (
          <p className="text-sm mt-0.5 font-medium" style={{ color: 'var(--cream-muted)' }}>{subtitle}</p>
        )}
      </div>
      {action}
    </div>
  );
}
