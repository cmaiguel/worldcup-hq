'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV = [
  { href: '/',          label: 'Home' },
  { href: '/matches',   label: 'Matches' },
  { href: '/teams',     label: 'Teams' },
  { href: '/stadiums',  label: 'Stadiums' },
  { href: '/stats',     label: 'Stats' },
  { href: '/news',      label: 'News' },
];

export default function RetroHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b" style={{ borderColor: 'var(--border)', background: 'rgba(7,11,24,0.97)', backdropFilter: 'blur(12px)' }}>
      <div className="flex items-center justify-between px-4 md:px-6 h-14 gap-4">
        {/* Wordmark */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="relative flex items-center justify-center w-9 h-9 rounded-lg font-mono font-black text-sm"
            style={{ background: 'var(--gold)', color: '#070b18', letterSpacing: '-0.05em' }}>
            WC
            <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-sm"
              style={{ background: 'var(--red)' }} />
          </div>
          <div className="hidden sm:block leading-none">
            <div className="font-black text-[15px] tracking-tight" style={{ color: 'var(--cream)' }}>
              WORLD CUP <span style={{ color: 'var(--gold)' }}>HQ</span>
            </div>
            <div className="font-mono text-[9px] tracking-[0.22em]" style={{ color: 'var(--cream-muted)' }}>
              FIFA 2026 · USA · MEX · CAN
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-0.5">
          {NAV.map(({ href, label }) => {
            const active = href === '/' ? pathname === '/' : pathname.startsWith(href);
            return (
              <Link key={href} href={href}
                className="px-3.5 py-1.5 rounded-md text-[13px] font-semibold transition-all duration-150"
                style={active
                  ? { background: 'var(--gold-dim)', color: 'var(--gold-bright)', borderBottom: '2px solid var(--gold)' }
                  : { color: 'var(--cream-dim)' }
                }
                onMouseEnter={e => { if (!active) (e.currentTarget as HTMLElement).style.color = 'var(--cream)'; }}
                onMouseLeave={e => { if (!active) (e.currentTarget as HTMLElement).style.color = 'var(--cream-dim)'; }}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Right: status */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full border"
            style={{ borderColor: 'var(--border-mid)', background: 'var(--navy-card)' }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse-slow" style={{ background: 'var(--green)' }} />
            <span className="font-mono text-[10px] tracking-widest" style={{ color: 'var(--cream-muted)' }}>LIVE</span>
          </div>
          <div className="font-mono text-[11px]" style={{ color: 'var(--cream-muted)' }}>
            Jun 11 – Aug 2
          </div>
        </div>
      </div>

      {/* Mobile nav strip */}
      <nav className="md:hidden flex overflow-x-auto no-scrollbar gap-1 px-4 pb-2.5 pt-0.5">
        {NAV.map(({ href, label }) => {
          const active = href === '/' ? pathname === '/' : pathname.startsWith(href);
          return (
            <Link key={href} href={href}
              className="shrink-0 px-3 py-1 rounded text-xs font-semibold transition-all"
              style={active
                ? { background: 'var(--gold-dim)', color: 'var(--gold-bright)', border: '1px solid var(--border-gold)' }
                : { color: 'var(--cream-muted)', border: '1px solid transparent' }
              }>
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
