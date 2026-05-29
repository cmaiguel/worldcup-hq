'use client';

import Link from 'next/link';

export default function ViewAllLink({ href }: { href: string }) {
  return (
    <Link href={href}
      className="text-[12px] font-bold font-mono tracking-wider uppercase px-3 py-1.5 rounded-lg transition-all"
      style={{ border: '1px solid var(--border-gold)', color: 'var(--gold)', background: 'var(--gold-dim)' }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--gold)'; (e.currentTarget as HTMLElement).style.color = '#070b18'; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--gold-dim)'; (e.currentTarget as HTMLElement).style.color = 'var(--gold)'; }}
    >
      View All →
    </Link>
  );
}
