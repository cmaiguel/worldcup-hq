import type { NewsItem } from '@/lib/types';
import Badge from '@/components/ui/Badge';

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

const CAT_COLOR: Record<string, string> = {
  'Match Preview':  '#4a90d9',
  'Match Report':   '#38c46e',
  'Team News':      '#e8c456',
  'Transfer':       '#e74c3c',
  'Injury':         '#6b6455',
  'Tournament':     '#e8c456',
  'History':        '#6b6455',
  'Analysis':       '#e74c3c',
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

  const accentColor = CAT_COLOR[item.category] ?? 'var(--gold)';

  return (
    <Tag {...linkProps}
      className={`card group overflow-hidden transition-all duration-200 flex flex-col ${hasLink ? 'cursor-pointer hover:scale-[1.01]' : ''}`}>
      {/* Featured accent bar */}
      {item.featured && (
        <div className="h-0.5" style={{ background: `linear-gradient(90deg, var(--gold), var(--gold-bright), var(--gold))` }} />
      )}

      {/* Image */}
      {item.imageUrl ? (
        <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to top, var(--navy-card) 0%, transparent 50%)',
          }} />
          {/* Category chip on image */}
          <div className="absolute top-3 left-3">
            <Badge label={item.category} variant={CAT_VARIANT[item.category] ?? 'gray'} />
          </div>
          {item.featured && (
            <div className="absolute top-3 right-3">
              <Badge label="Featured" variant="gold" dot />
            </div>
          )}
          {hasLink && (
            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="font-mono text-[10px] font-bold px-2 py-1 rounded"
                style={{ background: 'var(--navy)', color: 'var(--green-bright)', border: '1px solid var(--green)' }}>
                ↗ Read
              </span>
            </div>
          )}
        </div>
      ) : (
        /* No image: styled category banner */
        <div className="flex items-center justify-between px-4 py-3"
          style={{ background: `${accentColor}12`, borderBottom: `1px solid ${accentColor}28` }}>
          <Badge label={item.category} variant={CAT_VARIANT[item.category] ?? 'gray'} />
          {item.featured && <Badge label="Featured" variant="gold" dot />}
        </div>
      )}

      <div className="p-4 flex flex-col gap-2.5 flex-1">
        {/* Category row (no-image path already has it above) */}
        {item.imageUrl && null}

        {/* Title */}
        <h3 className={`font-black leading-snug transition-colors ${featured ? 'text-[15px]' : 'text-[13px]'} ${hasLink ? 'group-hover:text-[var(--gold-bright)]' : ''}`}
          style={{ color: 'var(--cream)' }}>
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
        <div className="flex items-center gap-1.5 min-w-0">
          {hasLink && <span className="text-[10px]" style={{ color: 'var(--green)' }}>↗</span>}
          <span className="text-[11px] font-bold truncate"
            style={{ color: hasLink ? 'var(--green-bright)' : 'var(--cream-muted)' }}>
            {item.source}
          </span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <time className="font-mono text-[10px]" dateTime={item.publishedAt} style={{ color: 'var(--cream-muted)' }}>
            {new Date(item.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
          </time>
          <span style={{ color: 'var(--border-mid)' }}>·</span>
          <span className="font-mono text-[10px]" style={{ color: 'var(--cream-muted)' }}>{item.readTime}m</span>
        </div>
      </div>
    </Tag>
  );
}
