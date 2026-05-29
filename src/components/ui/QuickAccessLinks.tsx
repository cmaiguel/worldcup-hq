'use client';

import Link from 'next/link';

const LINKS = [
  { href: '/teams',    label: 'All 48 Teams',    icon: '🛡️' },
  { href: '/stadiums', label: '16 Host Venues',  icon: '🏟️' },
  { href: '/stats',    label: 'Group Standings', icon: '📊' },
  { href: '/matches',  label: 'Full Schedule',   icon: '📅' },
];

export default function QuickAccessLinks() {
  return (
    <div className="card p-4 space-y-2">
      <p className="font-mono text-[10px] tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--cream-muted)' }}>
        Quick Access
      </p>
      {LINKS.map(({ href, label, icon }) => (
        <Link key={href} href={href}
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all"
          style={{ background: 'var(--navy-elevated)', border: '1px solid var(--border)' }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-gold)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; }}
        >
          <span className="text-lg">{icon}</span>
          <span className="text-sm font-semibold" style={{ color: 'var(--cream)' }}>{label}</span>
          <span className="ml-auto text-xs" style={{ color: 'var(--gold)' }}>→</span>
        </Link>
      ))}
    </div>
  );
}
