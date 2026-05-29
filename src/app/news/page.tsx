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

interface PageProps {
  searchParams: Promise<Record<string, string>>;
}

const CATEGORIES: NewsCategory[] = [
  'Tournament', 'Match Preview', 'Match Report', 'Team News',
  'Transfer', 'Injury', 'Analysis', 'History',
];

export default async function NewsPage({ searchParams }: PageProps) {
  const params = await searchParams;

  const filters: FilterOptions = {
    category: (params.category as NewsCategory) || undefined,
  };

  const news = await getNews(filters);

  const filterConfig = [
    {
      key: 'category',
      label: 'Category',
      allLabel: 'All Categories',
      options: CATEGORIES.map(c => ({ value: c, label: c })),
    },
  ];

  const featured = news.filter(n => n.featured);
  const regular = news.filter(n => !n.featured);

  return (
    <div className="p-4 md:p-6 max-w-7xl mx-auto space-y-6">
      <SectionHeader
        title="World Cup News"
        subtitle={`${news.length} article${news.length !== 1 ? 's' : ''}`}
        accent="Latest"
      />

      <Suspense>
        <div className="retro-card p-3">
          <FilterBar filters={filterConfig} />
        </div>
      </Suspense>

      <Suspense fallback={<LoadingGrid />}>
        {news.length === 0 ? (
          <EmptyState
            icon="📰"
            title="No articles found"
            description="Try a different category."
          />
        ) : (
          <>
            {featured.length > 0 && !filters.category && (
              <section>
                <p className="text-[10px] font-mono text-[#00ff88] tracking-[0.2em] uppercase mb-3">
                  Featured Stories
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {featured.map(item => (
                    <NewsCard key={item.id} item={item} featured />
                  ))}
                </div>
              </section>
            )}

            {regular.length > 0 && (
              <section>
                {!filters.category && featured.length > 0 && (
                  <p className="text-[10px] font-mono text-[#444466] tracking-[0.2em] uppercase mb-3">
                    More Stories
                  </p>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {(filters.category ? news : regular).map(item => (
                    <NewsCard key={item.id} item={item} />
                  ))}
                </div>
              </section>
            )}
          </>
        )}
      </Suspense>
    </div>
  );
}
