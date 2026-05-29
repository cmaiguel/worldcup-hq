import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  accent?: string;
  className?: string;
  action?: React.ReactNode;
}

export default function SectionHeader({
  title, subtitle, accent, className, action,
}: SectionHeaderProps) {
  return (
    <div className={cn('flex items-start justify-between gap-4 mb-6', className)}>
      <div>
        {accent && (
          <p className="text-[10px] font-mono text-[#00ff88] tracking-[0.2em] uppercase mb-1">
            {accent}
          </p>
        )}
        <h2 className="text-xl font-bold text-white">{title}</h2>
        {subtitle && (
          <p className="text-sm text-[#8888bb] mt-0.5">{subtitle}</p>
        )}
      </div>
      {action}
    </div>
  );
}
