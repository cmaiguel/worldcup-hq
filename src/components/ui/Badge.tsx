import { cn } from '@/lib/utils';

type BadgeVariant = 'green' | 'pink' | 'blue' | 'yellow' | 'gray' | 'gold';

const VARIANTS: Record<BadgeVariant, string> = {
  green:  'bg-[#00ff88]/10 text-[#00ff88] border-[#00ff88]/30',
  pink:   'bg-[#ff0080]/10 text-[#ff0080] border-[#ff0080]/30',
  blue:   'bg-[#00d4ff]/10 text-[#00d4ff] border-[#00d4ff]/30',
  yellow: 'bg-[#ffe600]/10 text-[#ffe600] border-[#ffe600]/30',
  gray:   'bg-[#1e1e3a] text-[#8888bb] border-[#2a2a50]',
  gold:   'bg-[#ffd700]/10 text-[#ffd700] border-[#ffd700]/30',
};

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  className?: string;
}

export default function Badge({ label, variant = 'gray', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-medium border tracking-wider uppercase',
        VARIANTS[variant],
        className,
      )}
    >
      {label}
    </span>
  );
}
