import type { NewsItem } from '@/lib/types';
import Badge from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

type BadgeVariant = 'green' | 'pink' | 'blue' | 'yellow' | 'gold' | 'gray';

const CATEGORY_VARIANT: Record<string, BadgeVariant> = {
  'Match Preview':  'blue',
  'Match Report':   'green',
  'Team News':      'yellow',
  'Transfer':       'pink',
  'Injury':         'gray',
  'Tournament':     'gold',
  'History':        'gray',
  'Analysis':       'pink',
};

interface NewsCardProps {
  item: NewsItem;
  featured?: boolean;
}

export default function NewsCard({ item, featured = false }: NewsCardProps) {
  const categoryVariant = CATEGORY_VARIANT[item.category] ?? 'gray';

  return (
    <article
      className={cn(
        'retro-card p-4 hover:glow-border-blue group cursor-pointer transition-all flex flex-col gap-3',
        featured && 'lg:flex-row lg:gap-4',
      )}
    >
      {/* Category & meta */}
      <div className={cn(featured && 'lg:flex-1')}>
        <div className="flex items-center gap-2 mb-2">
          <Badge label={item.category} variant={categoryVariant} />
          {item.featured && <Badge label="Featured" variant="gold" />}
        </div>

        <h3
          className={cn(
            'font-bold text-white group-hover:text-[#00d4ff] transition-colors leading-snug',
            featured ? 'text-base lg:text-lg' : 'text-sm',
          )}
        >
          {item.title}
        </h3>

        <p className="text-xs text-[#8888bb] mt-1.5 line-clamp-2">{item.excerpt}</p>

        {/* Tags */}
        {item.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {item.tags.slice(0, 3).map(tag => (
              <span
                key={tag}
                className="text-[10px] px-1.5 py-0.5 rounded bg-[#141430] border border-[#1e1e3a] text-[#444466]"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center gap-2 mt-3 pt-3 border-t border-[#1e1e3a]">
          <span className="text-[10px] font-medium text-[#00ff88] truncate">{item.source}</span>
          <span className="text-[#444466] text-[10px]">•</span>
          <time className="text-[10px] text-[#444466] font-mono" dateTime={item.publishedAt}>
            {new Date(item.publishedAt).toLocaleDateString('en-US', {
              month: 'short', day: 'numeric', year: 'numeric',
            })}
          </time>
        </div>
      </div>
    </article>
  );
}
