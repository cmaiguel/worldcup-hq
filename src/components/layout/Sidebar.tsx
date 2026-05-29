'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV = [
  { href: '/',         label: 'Dashboard',  icon: '⚡' },
  { href: '/matches',  label: 'Matches',    icon: '📅' },
  { href: '/teams',    label: 'Teams',      icon: '🛡️' },
  { href: '/stadiums', label: 'Stadiums',   icon: '🏟️' },
  { href: '/stats',    label: 'Statistics', icon: '📊' },
  { href: '/news',     label: 'News',       icon: '📰' },
];

const GROUPS = 'ABCDEFGHIJKL'.split('');

const HOST_NATIONS = [
  { flag: '🇺🇸', name: 'United States', count: 11, country: 'USA' },
  { flag: '🇲🇽', name: 'Mexico',        count: 3,  country: 'Mexico' },
  { flag: '🇨🇦', name: 'Canada',        count: 2,  country: 'Canada' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex flex-col w-56 shrink-0 overflow-y-auto"
      style={{ background: 'var(--navy)', borderRight: '1px solid var(--border)' }}>

      {/* Main nav */}
      <nav className="p-3 pt-4 space-y-0.5">
        <p className="label px-2 pb-2">Navigation</p>
        {NAV.map(({ href, label, icon }) => {
          const active = href === '/' ? pathname === '/' : pathname.startsWith(href);
          return (
            <Link key={href} href={href}
              className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] font-semibold transition-all"
              style={active
                ? { background: 'var(--gold-dim)', color: 'var(--gold-bright)', borderLeft: '3px solid var(--gold)' }
                : { color: 'var(--cream-dim)', borderLeft: '3px solid transparent' }
              }
              onMouseEnter={e => { if (!active) { (e.currentTarget as HTMLElement).style.color = 'var(--cream)'; (e.currentTarget as HTMLElement).style.background = 'var(--navy-card)'; } }}
              onMouseLeave={e => { if (!active) { (e.currentTarget as HTMLElement).style.color = 'var(--cream-dim)'; (e.currentTarget as HTMLElement).style.background = 'transparent'; } }}
            >
              <span className="text-base w-5 text-center leading-none">{icon}</span>
              {label}
            </Link>
          );
        })}
      </nav>

      {/* Groups */}
      <div className="p-3 pt-2" style={{ borderTop: '1px solid var(--border)' }}>
        <p className="label px-2 py-2">Groups A–L</p>
        <div className="grid grid-cols-4 gap-1">
          {GROUPS.map(g => (
            <Link key={g} href={`/teams?group=${g}`}
              className="flex items-center justify-center h-8 rounded-md text-xs font-mono font-bold transition-all"
              style={{ border: '1px solid var(--border)', color: 'var(--cream-muted)', background: 'var(--navy-card)' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.color = 'var(--gold)'; el.style.borderColor = 'var(--border-gold)'; el.style.background = 'var(--gold-dim)'; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.color = 'var(--cream-muted)'; el.style.borderColor = 'var(--border)'; el.style.background = 'var(--navy-card)'; }}
            >
              {g}
            </Link>
          ))}
        </div>
      </div>

      {/* Host nations */}
      <div className="p-3 mt-auto" style={{ borderTop: '1px solid var(--border)' }}>
        <p className="label px-2 pb-2">Host Nations</p>
        <div className="space-y-1.5">
          {HOST_NATIONS.map(({ flag, name, count, country }) => (
            <Link key={name} href={`/stadiums?country=${country}`}
              className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg transition-all"
              style={{ background: 'var(--navy-card)', border: '1px solid var(--border)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-gold)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; }}
            >
              <span className="text-xl">{flag}</span>
              <div>
                <p className="text-[12px] font-semibold" style={{ color: 'var(--cream)' }}>{name}</p>
                <p className="text-[10px] font-mono" style={{ color: 'var(--cream-muted)' }}>{count} venues</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
