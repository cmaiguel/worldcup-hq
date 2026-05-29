import type { Metadata } from 'next';
import CountdownHero from '@/components/dashboard/CountdownHero';
import QuickStats from '@/components/dashboard/QuickStats';
import FeaturedStadium from '@/components/dashboard/FeaturedStadium';
import MatchCard from '@/components/matches/MatchCard';
import NewsCard from '@/components/news/NewsCard';
import AskBar from '@/components/ai/AskBar';
import SectionHeader from '@/components/ui/SectionHeader';
import Link from 'next/link';
import { getUpcomingMatches, getFeaturedNews } from '@/lib/data/adapters';

export const metadata: Metadata = {
  title: 'World Cup HQ — FIFA World Cup 2026 Dashboard',
};

export default async function HomePage() {
  const [upcomingMatches, featuredNews] = await Promise.all([
    getUpcomingMatches(6),
    getFeaturedNews(4),
  ]);

  return (
    <div className="p-4 md:p-6 space-y-8 max-w-7xl mx-auto">
      {/* Countdown Hero */}
      <CountdownHero />

      {/* Quick Stats */}
      <section>
        <SectionHeader
          title="Tournament at a Glance"
          accent="Overview"
        />
        <QuickStats />
      </section>

      {/* Upcoming Matches */}
      <section>
        <SectionHeader
          title="Upcoming Matches"
          accent="Schedule"
          action={
            <Link
              href="/matches"
              className="text-xs text-[#00ff88] hover:text-white font-mono border border-[#00ff88]/30 px-3 py-1.5 rounded hover:bg-[#00ff88]/10 transition-all whitespace-nowrap"
            >
              View all →
            </Link>
          }
        />
        {upcomingMatches.length === 0 ? (
          <div className="retro-card p-8 text-center">
            <p className="text-[#8888bb] text-sm">
              Group stage matches begin June 11, 2026. Check back closer to the tournament.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {upcomingMatches.map(match => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        )}
      </section>

      {/* Two-col: News + Ask AI */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* News */}
        <section className="lg:col-span-2">
          <SectionHeader
            title="Latest News"
            accent="News"
            action={
              <Link
                href="/news"
                className="text-xs text-[#00ff88] hover:text-white font-mono border border-[#00ff88]/30 px-3 py-1.5 rounded hover:bg-[#00ff88]/10 transition-all whitespace-nowrap"
              >
                View all →
              </Link>
            }
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {featuredNews.map(item => (
              <NewsCard key={item.id} item={item} featured />
            ))}
          </div>
        </section>

        {/* Sidebar: AI + Stadium */}
        <aside className="space-y-6">
          <section>
            <SectionHeader title="Ask AI" accent="Powered by Claude" />
            <AskBar />
          </section>
          <section>
            <SectionHeader title="Final Venue" accent="Featured Stadium" />
            <FeaturedStadium />
          </section>
        </aside>
      </div>
    </div>
  );
}
