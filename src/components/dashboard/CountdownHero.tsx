'use client';

import { useState, useEffect } from 'react';
import { getCountdownParts } from '@/lib/utils';

// Opening match: June 11, 2026 at Estadio Azteca
const TOURNAMENT_START = '2026-06-11T20:00:00-06:00';

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="w-16 sm:w-20 h-16 sm:h-20 bg-[#0d0d1e] border border-[#1e1e3a] rounded-lg flex items-center justify-center overflow-hidden">
          {/* Top half shine */}
          <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-[#ffffff08] to-transparent" />
          {/* Center line */}
          <div className="absolute inset-x-0 top-1/2 h-px bg-[#050510]" />
          <span className="font-score text-2xl sm:text-3xl font-bold text-[#00ff88] relative z-10">
            {String(value).padStart(2, '0')}
          </span>
        </div>
      </div>
      <span className="text-[9px] font-mono text-[#444466] tracking-[0.2em] uppercase mt-2">
        {label}
      </span>
    </div>
  );
}

export default function CountdownHero() {
  const [parts, setParts] = useState(getCountdownParts(TOURNAMENT_START));

  useEffect(() => {
    const id = setInterval(() => {
      setParts(getCountdownParts(TOURNAMENT_START));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-xl border border-[#1e1e3a] bg-[#0d0d1e]">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Neon glow accents */}
      <div className="absolute -top-20 left-1/4 w-60 h-60 bg-[#00ff88]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-1/4 w-60 h-60 bg-[#00d4ff]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 p-6 md:p-10 text-center">
        {/* Label */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#050510] border border-[#1e1e3a] mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-pulse-neon" />
          <span className="text-[10px] font-mono text-[#8888bb] tracking-[0.2em] uppercase">
            Countdown to Kickoff
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-2 leading-tight">
          <span className="gradient-text">FIFA World Cup</span>
        </h1>
        <p className="text-[#00ff88] font-mono text-xl sm:text-2xl font-bold tracking-widest mb-2">
          2026
        </p>
        <p className="text-[#8888bb] text-sm mb-8">
          🇺🇸 USA &bull; 🇲🇽 Mexico &bull; 🇨🇦 Canada &nbsp;·&nbsp; June 11 – August 2
        </p>

        {/* Countdown */}
        {parts.expired ? (
          <p className="text-xl font-bold text-[#00ff88] font-mono glow-green">
            THE TOURNAMENT IS LIVE!
          </p>
        ) : (
          <div className="flex items-end justify-center gap-3 sm:gap-6">
            <CountdownUnit value={parts.days} label="Days" />
            <span className="text-2xl text-[#1e1e3a] font-mono mb-8 font-bold">:</span>
            <CountdownUnit value={parts.hours} label="Hours" />
            <span className="text-2xl text-[#1e1e3a] font-mono mb-8 font-bold">:</span>
            <CountdownUnit value={parts.minutes} label="Minutes" />
            <span className="text-2xl text-[#1e1e3a] font-mono mb-8 font-bold">:</span>
            <CountdownUnit value={parts.seconds} label="Seconds" />
          </div>
        )}

        {/* Sub-info */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
          {[
            { value: '48', label: 'Teams' },
            { value: '104', label: 'Matches' },
            { value: '16', label: 'Stadiums' },
            { value: '3', label: 'Nations' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-lg font-bold font-mono text-white">{value}</p>
              <p className="text-[10px] font-mono text-[#444466] tracking-wider uppercase">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
