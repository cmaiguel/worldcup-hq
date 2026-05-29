import { cn } from '@/lib/utils';

export default function LoadingCard({ className, lines = 3 }: { className?: string; lines?: number }) {
  return (
    <div className={cn('card p-4 animate-pulse', className)}>
      <div className="h-4 rounded w-2/3 mb-3" style={{ background: 'var(--border-mid)' }} />
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className={`h-3 rounded mb-2 ${i === lines - 1 ? 'w-1/2' : 'w-full'}`}
          style={{ background: 'var(--border)' }} />
      ))}
    </div>
  );
}

export function LoadingGrid({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: count }).map((_, i) => <LoadingCard key={i} />)}
    </div>
  );
}
