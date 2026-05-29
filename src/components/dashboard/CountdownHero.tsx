'use client';

import { useState, useEffect } from 'react';
import { getCountdownParts } from '@/lib/utils';

const TOURNAMENT_START = '2026-06-11T20:00:00-06:00';

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-16 sm:w-20 h-16 sm:h-20 rounded-xl overflow-hidden flex items-center justify-center"
        style={{ background: 'var(--navy-elevated)', border: '1px solid var(--border-gold)', boxShadow: '0 0 20px var(--gold-glow), inset 0 1px 0 rgba(212,168,67,0.15)' }}>
        {/* flip line */}
        <div className="absolute inset-x-0 top-1/2 h-px" style={{ background: 'var(--navy)' }} />
        <span className="font-score text-2xl sm:text-3xl font-black relative z-10" style={{ color: 'var(--gold-bright)' }}>
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="font-mono text-[9px] tracking-[0.2em] uppercase" style={{ color: 'var(--cream-muted)' }}>{label}</span>
    </div>
  );
}

function Sep() {
  return <span className="text-2xl font-black mb-6" style={{ color: 'var(--border-mid)' }}>:</span>;
}

export default function CountdownHero() {
  const [parts, setParts] = useState(getCountdownParts(TOURNAMENT_START));

  useEffect(() => {
    const id = setInterval(() => setParts(getCountdownParts(TOURNAMENT_START)), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-2xl"
      style={{ background: 'var(--navy-card)', border: '1px solid var(--border-gold)', boxShadow: '0 0 40px var(--gold-glow)' }}>
      {/* Grid bg */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      {/* Pitch glow */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 110%, rgba(46,158,91,0.08) 0%, transparent 70%)' }} />
      {/* Gold top edge */}
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }} />

      <div className="relative z-10 px-6 py-8 md:py-12 text-center">
        {/* Pre-label */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6"
          style={{ background: 'var(--navy-elevated)', border: '1px solid var(--border-mid)' }}>
          <span className="w-1.5 h-1.5 rounded-full animate-pulse-slow" style={{ background: 'var(--green)' }} />
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase" style={{ color: 'var(--cream-dim)' }}>
            Countdown to Kickoff · Azteca, Mexico City
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-black text-4xl sm:text-5xl md:text-7xl leading-none tracking-tighter mb-2">
          <span className="text-cream-gradient">FIFA World Cup</span>
        </h1>
        <div className="font-mono font-black text-2xl sm:text-3xl tracking-[0.15em] mb-1"
          style={{ color: 'var(--gold)' }}>2026</div>
        <p className="text-sm font-medium mb-8" style={{ color: 'var(--cream-muted)' }}>
          🇺🇸 United States &nbsp;·&nbsp; 🇲🇽 Mexico &nbsp;·&nbsp; 🇨🇦 Canada
        </p>

        {/* Countdown */}
        {parts.expired ? (
          <p className="text-2xl font-black tracking-wide" style={{ color: 'var(--gold-bright)' }}>
            🏆 THE TOURNAMENT IS LIVE!
          </p>
        ) : (
          <div className="flex items-end justify-center gap-2 sm:gap-4">
            <Unit value={parts.days}    label="Days" />
            <Sep />
            <Unit value={parts.hours}   label="Hours" />
            <Sep />
            <Unit value={parts.minutes} label="Min" />
            <Sep />
            <Unit value={parts.seconds} label="Sec" />
          </div>
        )}

        {/* Tournament facts */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 pt-6"
          style={{ borderTop: '1px solid var(--border)' }}>
          {[
            { v: '48',   l: 'Teams' },
            { v: '104',  l: 'Matches' },
            { v: '16',   l: 'Stadiums' },
            { v: '3',    l: 'Nations' },
            { v: '53',   l: 'Days' },
          ].map(({ v, l }) => (
            <div key={l} className="text-center">
              <p className="font-mono font-black text-xl" style={{ color: 'var(--gold-bright)' }}>{v}</p>
              <p className="font-mono text-[10px] tracking-[0.15em] uppercase" style={{ color: 'var(--cream-muted)' }}>{l}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
