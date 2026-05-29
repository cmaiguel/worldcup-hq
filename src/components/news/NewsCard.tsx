import type { NewsItem } from '@/lib/types';
import Badge from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

type BadgeVariant = 'gold' | 'green' | 'red' | 'sky' | 'gray';

const CAT_VARIANT: Record<string, BadgeVariant> = {
  'Match Preview':  'sky',
  'Match Report':   'green',
  'Team News':      'gold',
  'Transfer':       'red',
  'Injury':         'gray',
  'Tournament':     'gold',
  'History':        'gray',
  'Analysis':       'red',
};

interface NewsCardProps {
  item: NewsItem;
  featured?: boolean;
}

export default function NewsCard({ item, featured = false }: NewsCardProps) {
  const hasLink = !!item.sourceUrl;
  const Tag = hasLink ? 'a' : 'div';
  const linkProps = hasLink
    ? { href: item.sourceUrl, target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <Tag {...linkProps}
      className={cn(
        'card group overflow-hidden transition-all duration-200 flex flex-col',
        hasLink && 'cursor-pointer',
        featured && 'lg:col-span-1',
      )}>
      {/* Gold top bar for featured */}
      {item.featured && (
        <div className="h-0.5" style={{ background: 'linear-gradient(90deg, var(--gold), var(--gold-bright), var(--gold))' }} />
      )}

      <div className="p-4 flex flex-col gap-3 flex-1">
        {/* Badges */}
        <div className="flex items-center gap-2 flex-wrap">
          <Badge label={item.category} variant={CAT_VARIANT[item.category] ?? 'gray'} />
          {item.featured && <Badge label="Featured" variant="gold" dot />}
        </div>

        {/* Title */}
        <h3 className={cn(
          'font-black leading-snug transition-colors',
          featured ? 'text-[15px]' : 'text-[13px]',
          hasLink && 'group-hover:text-[var(--gold-bright)]',
        )} style={{ color: 'var(--cream)' }}>
          {item.title}
        </h3>

        {/* Excerpt */}
        <p className="text-xs leading-relaxed line-clamp-3 flex-1" style={{ color: 'var(--cream-dim)' }}>
          {item.excerpt}
        </p>

        {/* Tags */}
        {item.tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {item.tags.slice(0, 3).map(tag => (
              <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded font-medium"
                style={{ background: 'var(--navy-elevated)', border: '1px solid var(--border)', color: 'var(--cream-muted)' }}>
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-2.5"
        style={{ borderTop: '1px solid var(--border)', background: 'var(--navy-elevated)' }}>
        <div className="flex items-center gap-2 min-w-0">
          {hasLink && (
            <span className="text-[10px]" style={{ color: 'var(--green)' }}>↗</span>
          )}
          <span className="text-[11px] font-bold truncate" style={{ color: hasLink ? 'var(--green-bright)' : 'var(--cream-muted)' }}>
            {item.source}
          </span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <time className="font-mono text-[10px]" dateTime={item.publishedAt} style={{ color: 'var(--cream-muted)' }}>
            {new Date(item.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
          </time>
          <span style={{ color: 'var(--border-mid)' }}>·</span>
          <span className="font-mono text-[10px]" style={{ color: 'var(--cream-muted)' }}>{item.readTime}m read</span>
        </div>
      </div>
    </Tag>
  );
}
