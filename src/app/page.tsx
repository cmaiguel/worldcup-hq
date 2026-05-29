import type { Metadata } from 'next';
import CountdownHero from '@/components/dashboard/CountdownHero';
import QuickStats from '@/components/dashboard/QuickStats';
import FeaturedStadium from '@/components/dashboard/FeaturedStadium';
import MatchCard from '@/components/matches/MatchCard';
import NewsCard from '@/components/news/NewsCard';
import CommandCenter from '@/components/ai/CommandCenter';
import MyTeams from '@/components/teams/MyTeams';
import SectionHeader from '@/components/ui/SectionHeader';
import ViewAllLink from '@/components/ui/ViewAllLink';
import QuickAccessLinks from '@/components/ui/QuickAccessLinks';
import { getUpcomingMatches, getFeaturedNews, getTeams } from '@/lib/data/adapters';

export const metadata: Metadata = {
  title: 'World Cup HQ — FIFA World Cup 2026 Dashboard',
};

export default async function HomePage() {
  const [upcoming, featured, allTeams] = await Promise.all([
    getUpcomingMatches(6),
    getFeaturedNews(4),
    getTeams(),
  ]);

  return (
    <div className="p-4 md:p-6 space-y-10 max-w-7xl mx-auto pb-24">
      {/* Hero countdown */}
      <CountdownHero />

      {/* Tournament overview */}
      <section>
        <SectionHeader title="Tournament at a Glance" accent="2026 Overview" />
        <QuickStats />
      </section>

      {/* My Teams — personalized */}
      <section>
        <SectionHeader
          title="My Teams"
          accent="Following"
          subtitle="Follow teams on the Teams page to personalize this section"
          action={<ViewAllLink href="/teams" />}
        />
        <MyTeams teams={allTeams} />
      </section>

      {/* AI Command Center */}
      <section>
        <SectionHeader
          title="World Cup Command Center"
          accent="AI · Powered by Claude"
          subtitle="Ask anything about teams, fixtures, stadiums, and the 2026 tournament"
        />
        <CommandCenter />
      </section>

      {/* Upcoming matches */}
      <section>
        <SectionHeader title="Upcoming Matches" accent="Schedule"
          action={<ViewAllLink href="/matches" />} />
        {upcoming.length === 0 ? (
          <div className="card p-8 text-center">
            <p className="text-2xl mb-2">📅</p>
            <p className="text-sm" style={{ color: 'var(--cream-muted)' }}>
              Group stage begins June 11, 2026. Tournament kicks off at Estadio Azteca.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {upcoming.map(m => <MatchCard key={m.id} match={m} />)}
          </div>
        )}
      </section>

      {/* Latest news + sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <section className="lg:col-span-2">
          <SectionHeader title="Latest News" accent="News Room" action={<ViewAllLink href="/news" />} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {featured.map(item => <NewsCard key={item.id} item={item} featured />)}
          </div>
        </section>

        <aside className="space-y-6">
          <section>
            <SectionHeader title="Final Venue" accent="Featured Stadium" />
            <FeaturedStadium />
          </section>
          <QuickAccessLinks />
        </aside>
      </div>
    </div>
  );
}
