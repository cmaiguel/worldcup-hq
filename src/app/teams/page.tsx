import type { Metadata } from 'next';
import { getTeams } from '@/lib/data/adapters';
import TeamCard from '@/components/teams/TeamCard';
import FilterBar from '@/components/ui/FilterBar';
import EmptyState from '@/components/ui/EmptyState';
import SectionHeader from '@/components/ui/SectionHeader';
import { Suspense } from 'react';
import { LoadingGrid } from '@/components/ui/LoadingCard';
import type { FilterOptions, Confederation } from '@/lib/types';

export const metadata: Metadata = { title: 'Teams' };

interface PageProps { searchParams: Promise<Record<string, string>>; }

const CONFEDERATIONS: Confederation[] = ['UEFA', 'CONMEBOL', 'CONCACAF', 'AFC', 'CAF', 'OFC'];

export default async function TeamsPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const filters: FilterOptions = {
    group: params.group || undefined,
    confederation: (params.confederation as Confederation) || undefined,
  };

  const teams = await getTeams(filters);

  return (
    <div className="p-4 md:p-6 max-w-7xl mx-auto space-y-6 pb-24">
      <SectionHeader title="Qualified Teams" accent="48 Nations"
        subtitle={`${teams.length} team${teams.length !== 1 ? 's' : ''} · 12 groups · 6 confederations`} />

      <Suspense>
        <div className="card p-3">
          <FilterBar filters={[
            { key: 'group', label: 'Group', allLabel: 'All Groups',
              options: 'ABCDEFGHIJKL'.split('').map(g => ({ value: g, label: `Group ${g}` })) },
            { key: 'confederation', label: 'Confederation', allLabel: 'All Confederations',
              options: CONFEDERATIONS.map(c => ({ value: c, label: c })) },
          ]} />
        </div>
      </Suspense>

      <Suspense fallback={<LoadingGrid />}>
        {teams.length === 0 ? (
          <EmptyState icon="🛡️" title="No teams found" description="Try a different filter." />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {teams.map(team => <TeamCard key={team.id} team={team} />)}
          </div>
        )}
      </Suspense>
    </div>
  );
}
