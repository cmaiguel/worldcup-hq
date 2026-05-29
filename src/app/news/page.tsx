import type { Metadata } from 'next';
import { getNews } from '@/lib/data/adapters';
import NewsCard from '@/components/news/NewsCard';
import FilterBar from '@/components/ui/FilterBar';
import EmptyState from '@/components/ui/EmptyState';
import SectionHeader from '@/components/ui/SectionHeader';
import { Suspense } from 'react';
import { LoadingGrid } from '@/components/ui/LoadingCard';
import type { FilterOptions, NewsCategory } from '@/lib/types';

export const metadata: Metadata = { title: 'News' };

interface PageProps { searchParams: Promise<Record<string, string>>; }

const CATEGORIES: NewsCategory[] = [
  'Tournament','Match Preview','Match Report','Team News','Transfer','Injury','Analysis','History',
];

export default async function NewsPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const filters: FilterOptions = { category: (params.category as NewsCategory) || undefined };
  const news = await getNews(filters);
  const featured = filters.category ? [] : news.filter(n => n.featured);
  const rest     = filters.category ? news : news.filter(n => !n.featured);

  return (
    <div className="p-4 md:p-6 max-w-7xl mx-auto space-y-6 pb-24">
      <SectionHeader title="World Cup News" accent="News Room"
        subtitle={`${news.length} article${news.length !== 1 ? 's' : ''} · Latest coverage`} />

      <Suspense>
        <div className="card p-3">
          <FilterBar filters={[{
            key: 'category', label: 'Category', allLabel: 'All Categories',
            options: CATEGORIES.map(c => ({ value: c, label: c })),
          }]} />
        </div>
      </Suspense>

      <Suspense fallback={<LoadingGrid />}>
        {news.length === 0 ? (
          <EmptyState icon="📰" title="No articles found" description="Try a different category." />
        ) : (
          <>
            {featured.length > 0 && (
              <section>
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--gold)' }}>
                  ★ Featured Stories
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {featured.map(item => <NewsCard key={item.id} item={item} featured />)}
                </div>
              </section>
            )}
            {rest.length > 0 && (
              <section>
                {!filters.category && featured.length > 0 && (
                  <p className="font-mono text-[10px] tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--cream-muted)' }}>
                    More Stories
                  </p>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {rest.map(item => <NewsCard key={item.id} item={item} />)}
                </div>
              </section>
            )}
          </>
        )}
      </Suspense>
    </div>
  );
}
