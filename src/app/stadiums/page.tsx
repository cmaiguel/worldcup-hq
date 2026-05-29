import type { Metadata } from 'next';
import { getStadiums } from '@/lib/data/adapters';
import StadiumCard from '@/components/stadiums/StadiumCard';
import FilterBar from '@/components/ui/FilterBar';
import EmptyState from '@/components/ui/EmptyState';
import SectionHeader from '@/components/ui/SectionHeader';
import StatCard from '@/components/stats/StatCard';
import { Suspense } from 'react';
import { LoadingGrid } from '@/components/ui/LoadingCard';
import type { FilterOptions } from '@/lib/types';
import { formatCapacity } from '@/lib/utils';

export const metadata: Metadata = { title: 'Stadiums' };

interface PageProps {
  searchParams: Promise<Record<string, string>>;
}

export default async function StadiumsPage({ searchParams }: PageProps) {
  const params = await searchParams;

  const filters: FilterOptions = {
    country: params.country || undefined,
  };

  const [all, filtered] = await Promise.all([
    getStadiums(),
    getStadiums(filters),
  ]);

  const totalCapacity = all.reduce((sum, s) => sum + s.capacity, 0);
  const largestStadium = all[0];

  const filterConfig = [
    {
      key: 'country',
      label: 'Host Nation',
      allLabel: 'All Nations',
      options: [
        { value: 'USA', label: '🇺🇸 United States' },
        { value: 'Mexico', label: '🇲🇽 Mexico' },
        { value: 'Canada', label: '🇨🇦 Canada' },
      ],
    },
  ];

  return (
    <div className="p-4 md:p-6 max-w-7xl mx-auto space-y-6">
      <SectionHeader
        title="Host Stadiums"
        subtitle={`${filtered.length} of 16 venues across 3 nations`}
        accent="Venues"
      />

      {/* Overview stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <StatCard label="Total Venues" value={16} icon="🏟️" accent="pink" />
        <StatCard
          label="Largest Venue"
          value={largestStadium.name.split(' ')[0]}
          subLabel={`${formatCapacity(largestStadium.capacity)} capacity`}
          icon="👑"
          accent="gold"
        />
        <StatCard
          label="Total Capacity"
          value={formatCapacity(totalCapacity)}
          subLabel="Combined seats"
          icon="🪑"
          accent="blue"
        />
        <StatCard label="Final Venue" value="MetLife" subLabel="East Rutherford, NJ" icon="🏆" accent="yellow" />
      </div>

      <Suspense>
        <div className="retro-card p-3">
          <FilterBar filters={filterConfig} />
        </div>
      </Suspense>

      <Suspense fallback={<LoadingGrid />}>
        {filtered.length === 0 ? (
          <EmptyState
            icon="🏟️"
            title="No stadiums found"
            description="Try adjusting your filters."
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map(stadium => (
              <StadiumCard key={stadium.id} stadium={stadium} />
            ))}
          </div>
        )}
      </Suspense>
    </div>
  );
}
