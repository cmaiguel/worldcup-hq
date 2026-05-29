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

interface PageProps { searchParams: Promise<Record<string, string>>; }

export default async function StadiumsPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const filters: FilterOptions = { country: params.country || undefined };
  const [all, filtered] = await Promise.all([getStadiums(), getStadiums(filters)]);
  const totalCap = all.reduce((s, v) => s + v.capacity, 0);

  return (
    <div className="p-4 md:p-6 max-w-7xl mx-auto space-y-6 pb-24">
      <SectionHeader title="Host Stadiums" accent="16 Venues"
        subtitle={`${filtered.length} of 16 venues · USA, Mexico, Canada`} />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <StatCard label="Total Venues"    value={16}                       icon="🏟️" accent="sky"   />
        <StatCard label="Largest Venue"   value="MetLife"                  icon="👑" accent="gold"  subLabel={`${formatCapacity(82500)} capacity`} />
        <StatCard label="Combined Seats"  value={formatCapacity(totalCap)} icon="🪑" accent="green" />
        <StatCard label="Final Venue"     value="MetLife"                  icon="🏆" accent="red"   subLabel="East Rutherford, NJ" />
      </div>

      <Suspense>
        <div className="card p-3">
          <FilterBar filters={[{
            key: 'country', label: 'Host Nation', allLabel: 'All Nations',
            options: [
              { value: 'USA',    label: '🇺🇸 United States (11)' },
              { value: 'Mexico', label: '🇲🇽 Mexico (3)' },
              { value: 'Canada', label: '🇨🇦 Canada (2)' },
            ],
          }]} />
        </div>
      </Suspense>

      <Suspense fallback={<LoadingGrid />}>
        {filtered.length === 0 ? (
          <EmptyState icon="🏟️" title="No stadiums found" description="Try a different filter." />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map(s => <StadiumCard key={s.id} stadium={s} />)}
          </div>
        )}
      </Suspense>
    </div>
  );
}
