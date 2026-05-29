import { cn } from '@/lib/utils';

interface LoadingCardProps {
  className?: string;
  lines?: number;
}

export default function LoadingCard({ className, lines = 3 }: LoadingCardProps) {
  return (
    <div className={cn('retro-card p-4 animate-pulse', className)}>
      <div className="h-4 bg-[#1e1e3a] rounded w-2/3 mb-3" />
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className={`h-3 bg-[#1e1e3a] rounded mb-2 ${i === lines - 1 ? 'w-1/2' : 'w-full'}`} />
      ))}
    </div>
  );
}

export function LoadingGrid({ count = 6, className }: { count?: number; className?: string }) {
  return (
    <div className={cn('grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4', className)}>
      {Array.from({ length: count }).map((_, i) => (
        <LoadingCard key={i} />
      ))}
    </div>
  );
}
