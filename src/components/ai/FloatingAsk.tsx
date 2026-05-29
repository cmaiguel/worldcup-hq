'use client';

import { useState } from 'react';
import AskBar from './AskBar';

export default function FloatingAsk() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)} />
      )}

      {/* Panel */}
      {open && (
        <div className="fixed bottom-20 right-4 z-50 w-full max-w-md"
          style={{ filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.6))' }}>
          <div className="flex justify-end mb-2">
            <button onClick={() => setOpen(false)}
              className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all"
              style={{ background: 'var(--navy-elevated)', border: '1px solid var(--border-mid)', color: 'var(--cream-dim)' }}>
              ✕
            </button>
          </div>
          <AskBar />
        </div>
      )}

      {/* FAB */}
      <button onClick={() => setOpen(o => !o)}
        className="fixed bottom-4 right-4 z-50 flex items-center gap-2 px-4 py-3 rounded-xl font-black text-sm shadow-2xl transition-all"
        style={{ background: 'var(--gold)', color: '#070b18', boxShadow: '0 4px 20px rgba(212,168,67,0.4)' }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--gold-bright)'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--gold)'; }}
      >
        <span className="text-base">✦</span>
        <span className="tracking-wide">ASK AI</span>
      </button>
    </>
  );
}
