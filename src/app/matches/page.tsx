import type { Metadata } from 'next';
import { getMatches, getStadiums } from '@/lib/data/adapters';
import MatchCard from '@/components/matches/MatchCard';
import FilterBar from '@/components/ui/FilterBar';
import EmptyState from '@/components/ui/EmptyState';
import SectionHeader from '@/components/ui/SectionHeader';
import { Suspense } from 'react';
import { LoadingGrid } from '@/components/ui/LoadingCard';
import type { FilterOptions, Stage } from '@/lib/types';

export const metadata: Metadata = { title: 'Match Calendar' };

interface PageProps {
  searchParams: Promise<Record<string, string>>;
}

const STAGES: Stage[] = [
  'Group Stage', 'Round of 32', 'Round of 16',
  'Quarter-Final', 'Semi-Final', 'Third Place', 'Final',
];

export default async function MatchesPage({ searchParams }: PageProps) {
  const params = await searchParams;

  const filters: FilterOptions = {
    group: params.group || undefined,
    stage: (params.stage as Stage) || undefined,
    stadiumId: params.stadium || undefined,
    country: params.country || undefined,
    teamId: params.team || undefined,
  };

  const [matches, stadiums] = await Promise.all([
    getMatches(filters),
    getStadiums(),
  ]);

  const filterConfig = [
    {
      key: 'stage',
      label: 'Stage',
      allLabel: 'All Stages',
      options: STAGES.map(s => ({ value: s, label: s })),
    },
    {
      key: 'group',
      label: 'Group',
      allLabel: 'All Groups',
      options: 'ABCDEFGHIJKL'.split('').map(g => ({ value: g, label: `Group ${g}` })),
    },
    {
      key: 'country',
      label: 'Country',
      allLabel: 'All Countries',
      options: [
        { value: 'USA', label: '🇺🇸 United States' },
        { value: 'Mexico', label: '🇲🇽 Mexico' },
        { value: 'Canada', label: '🇨🇦 Canada' },
      ],
    },
    {
      key: 'stadium',
      label: 'Stadium',
      allLabel: 'All Stadiums',
      options: stadiums.map(s => ({ value: s.id, label: s.name })),
    },
  ];

  return (
    <div className="p-4 md:p-6 max-w-7xl mx-auto space-y-6">
      <SectionHeader
        title="Match Calendar"
        subtitle={`${matches.length} match${matches.length !== 1 ? 'es' : ''} found`}
        accent="Schedule"
      />

      <Suspense>
        <div className="retro-card p-3">
          <FilterBar filters={filterConfig} />
        </div>
      </Suspense>

      <Suspense fallback={<LoadingGrid />}>
        {matches.length === 0 ? (
          <EmptyState
            icon="📅"
            title="No matches found"
            description="Try adjusting your filters to see more matches."
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {matches.map(match => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        )}
      </Suspense>
    </div>
  );
}
