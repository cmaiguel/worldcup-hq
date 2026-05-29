import type { Metadata } from 'next';
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import RetroHeader from '@/components/layout/RetroHeader';
import Sidebar from '@/components/layout/Sidebar';
import NewsTicker from '@/components/layout/NewsTicker';
import FloatingAsk from '@/components/ai/FloatingAsk';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: { default: 'World Cup HQ', template: '%s | World Cup HQ' },
  description: 'Your premium command center for FIFA World Cup 2026 — schedules, teams, stadiums, stats, and AI-powered insights.',
  keywords: ['FIFA', 'World Cup 2026', 'football', 'soccer', 'schedule', 'teams', 'stadiums'],
  openGraph: {
    type: 'website',
    siteName: 'World Cup HQ',
    title: 'World Cup HQ — FIFA World Cup 2026',
    description: 'Your premium command center for FIFA World Cup 2026',
  },
  twitter: { card: 'summary_large_image', title: 'World Cup HQ' },
  metadataBase: new URL('https://worldcuphq.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body style={{ background: 'var(--navy)', color: 'var(--cream)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <RetroHeader />
        <NewsTicker />
        <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
          <Sidebar />
          <main style={{ flex: 1, minWidth: 0, overflowY: 'auto' }}>{children}</main>
        </div>
        <FloatingAsk />
      </body>
    </html>
  );
}
