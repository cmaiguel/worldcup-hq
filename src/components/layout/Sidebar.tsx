'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV = [
  { href: '/', label: 'Dashboard', icon: '⚡' },
  { href: '/matches', label: 'Matches', icon: '📅' },
  { href: '/teams', label: 'Teams', icon: '🛡️' },
  { href: '/stadiums', label: 'Stadiums', icon: '🏟️' },
  { href: '/stats', label: 'Statistics', icon: '📊' },
  { href: '/news', label: 'News', icon: '📰' },
];

const GROUPS = 'ABCDEFGHIJKL'.split('');

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex flex-col w-52 shrink-0 border-r border-[#1e1e3a] bg-[#050510] overflow-y-auto">
      {/* Main nav */}
      <nav className="p-3 space-y-0.5">
        <p className="text-[9px] font-mono text-[#444466] tracking-[0.2em] px-2 pt-2 pb-1">
          NAVIGATION
        </p>
        {NAV.map(({ href, label, icon }) => {
          const active = href === '/' ? pathname === '/' : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-2.5 px-2.5 py-2 rounded text-sm transition-all duration-150 ${
                active
                  ? 'bg-[#00ff88]/10 text-[#00ff88] border-l-2 border-[#00ff88]'
                  : 'text-[#8888bb] hover:text-white hover:bg-[#0d0d1e] border-l-2 border-transparent'
              }`}
            >
              <span className="text-base leading-none">{icon}</span>
              <span className="font-medium">{label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Quick group filter */}
      <div className="p-3 border-t border-[#1e1e3a]">
        <p className="text-[9px] font-mono text-[#444466] tracking-[0.2em] px-2 pt-1 pb-2">
          GROUPS
        </p>
        <div className="grid grid-cols-4 gap-1">
          {GROUPS.map(g => (
            <Link
              key={g}
              href={`/teams?group=${g}`}
              className="flex items-center justify-center h-7 rounded text-xs font-mono font-bold text-[#8888bb] hover:text-[#00ff88] hover:bg-[#00ff88]/10 border border-[#1e1e3a] hover:border-[#00ff88]/30 transition-all"
            >
              {g}
            </Link>
          ))}
        </div>
      </div>

      {/* Host nations */}
      <div className="p-3 border-t border-[#1e1e3a] mt-auto">
        <p className="text-[9px] font-mono text-[#444466] tracking-[0.2em] px-2 pb-2">
          HOST NATIONS
        </p>
        <div className="space-y-1">
          {[
            { flag: '🇺🇸', name: 'United States', stadiums: 11 },
            { flag: '🇲🇽', name: 'Mexico', stadiums: 3 },
            { flag: '🇨🇦', name: 'Canada', stadiums: 2 },
          ].map(({ flag, name, stadiums }) => (
            <div
              key={name}
              className="flex items-center gap-2 px-2 py-1.5 rounded bg-[#0d0d1e] border border-[#1e1e3a]"
            >
              <span className="text-base">{flag}</span>
              <div className="min-w-0">
                <p className="text-xs font-medium text-white truncate">{name}</p>
                <p className="text-[10px] text-[#444466]">{stadiums} venues</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
