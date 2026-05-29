import type { Metadata } from 'next';
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import RetroHeader from '@/components/layout/RetroHeader';
import Sidebar from '@/components/layout/Sidebar';
import NewsTicker from '@/components/layout/NewsTicker';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['300', '400', '500', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: {
    default: 'World Cup HQ',
    template: '%s | World Cup HQ',
  },
  description:
    'Your ultimate destination for FIFA World Cup 2026 — live scores, schedules, teams, stadiums, and AI-powered insights.',
  keywords: ['FIFA', 'World Cup 2026', 'football', 'soccer', 'schedule', 'teams', 'stadiums'],
  openGraph: {
    type: 'website',
    siteName: 'World Cup HQ',
    title: 'World Cup HQ — FIFA World Cup 2026',
    description: 'Your ultimate destination for FIFA World Cup 2026',
  },
  twitter: { card: 'summary_large_image', title: 'World Cup HQ' },
  metadataBase: new URL('https://worldcuphq.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#050510] text-white min-h-screen flex flex-col">
        <RetroHeader />
        <NewsTicker />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <main className="flex-1 min-w-0 overflow-y-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
