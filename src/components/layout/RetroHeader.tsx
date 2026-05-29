'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/matches', label: 'Matches' },
  { href: '/teams', label: 'Teams' },
  { href: '/stadiums', label: 'Stadiums' },
  { href: '/stats', label: 'Stats' },
  { href: '/news', label: 'News' },
];

export default function RetroHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[#1e1e3a] bg-[#050510]/95 backdrop-blur-sm">
      <div className="flex items-center justify-between px-4 md:px-6 h-14">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <div className="relative">
            <div className="w-8 h-8 rounded bg-[#00ff88] flex items-center justify-center font-mono font-bold text-black text-sm leading-none">
              WC
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-[#ff0080] rounded-sm" />
          </div>
          <div className="hidden sm:block">
            <span className="font-bold text-white text-base tracking-tight leading-none block">
              WORLD CUP
            </span>
            <span className="text-[10px] text-[#00ff88] font-mono tracking-[0.2em] leading-none block">
              HQ &bull; 2026
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV.map(({ href, label }) => {
            const active = href === '/' ? pathname === '/' : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`px-3 py-1.5 rounded text-sm font-medium transition-all duration-150 ${
                  active
                    ? 'bg-[#00ff88]/10 text-[#00ff88] border border-[#00ff88]/30'
                    : 'text-[#8888bb] hover:text-white hover:bg-[#1e1e3a]'
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Right side badge */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-[#1e1e3a] bg-[#0d0d1e]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-pulse" />
            <span className="text-[10px] font-mono text-[#8888bb] tracking-wider">LIVE</span>
          </div>
          <div className="text-xs font-mono text-[#444466]">USA &bull; CAN &bull; MEX</div>
        </div>
      </div>

      {/* Mobile nav */}
      <nav className="md:hidden flex overflow-x-auto gap-1 px-4 pb-2 no-scrollbar">
        {NAV.map(({ href, label }) => {
          const active = href === '/' ? pathname === '/' : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`shrink-0 px-3 py-1 rounded text-xs font-medium transition-all ${
                active
                  ? 'bg-[#00ff88]/10 text-[#00ff88] border border-[#00ff88]/30'
                  : 'text-[#8888bb] border border-transparent hover:text-white'
              }`}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
