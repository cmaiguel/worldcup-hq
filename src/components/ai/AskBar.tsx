'use client';

import { useState, useRef, useTransition } from 'react';
import type { AskResponse } from '@/lib/types';

const PROMPTS = [
  'When does Argentina play?',
  'Which games are in Mexico?',
  'Show me matches at MetLife Stadium',
  'When does Brazil play?',
  'Who are the top scorers?',
  'What teams are in Group D?',
];

export default function AskBar({ featured = false }: { featured?: boolean }) {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<AskResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, start] = useTransition();
  const ref = useRef<HTMLInputElement>(null);

  const submit = (q: string) => {
    if (!q.trim()) return;
    setResponse(null);
    setError(null);
    setQuery(q);
    start(async () => {
      try {
        const res = await fetch('/api/ask', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ question: q }),
        });
        const data = await res.json() as { answer?: string; error?: string };
        if (!res.ok) setError(data.error ?? 'Something went wrong.');
        else setResponse({ answer: data.answer ?? '', confidence: 'high' });
      } catch {
        setError('Could not reach the server.');
      }
    });
  };

  return (
    <div className="card overflow-hidden" style={{ border: '1px solid var(--border-gold)', boxShadow: '0 0 24px var(--gold-glow)' }}>
      {/* Header bar */}
      <div className="flex items-center gap-3 px-4 py-3" style={{ background: 'var(--navy-elevated)', borderBottom: '1px solid var(--border)' }}>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full" style={{ background: 'var(--red)' }} />
          <span className="w-2 h-2 rounded-full" style={{ background: 'var(--gold)' }} />
          <span className="w-2 h-2 rounded-full" style={{ background: 'var(--green)' }} />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-base">✦</span>
          <span className="font-mono font-bold text-[11px] tracking-[0.15em] uppercase" style={{ color: 'var(--gold-bright)' }}>
            Ask World Cup HQ
          </span>
          <span className="font-mono text-[10px]" style={{ color: 'var(--cream-muted)' }}>· Claude AI</span>
        </div>
        <div className="ml-auto flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full animate-pulse-slow" style={{ background: 'var(--green)' }} />
          <span className="font-mono text-[9px] tracking-widest" style={{ color: 'var(--green)' }}>ONLINE</span>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Description — only in featured mode */}
        {featured && !response && (
          <p className="text-sm" style={{ color: 'var(--cream-dim)' }}>
            Ask anything about the 2026 World Cup — schedules, teams, stadiums, statistics, and more. Powered by real tournament data.
          </p>
        )}

        {/* Input row */}
        <form onSubmit={e => { e.preventDefault(); submit(query); }} className="flex gap-2">
          <div className="flex-1 flex items-center gap-2 rounded-lg px-3"
            style={{ background: 'var(--navy)', border: '1px solid var(--border-mid)' }}>
            <span style={{ color: 'var(--cream-muted)', fontSize: '13px' }}>›</span>
            <input ref={ref} type="text" value={query} onChange={e => setQuery(e.target.value)}
              placeholder="Ask about any match, team, or stadium…"
              className="flex-1 bg-transparent py-2.5 text-sm outline-none font-medium placeholder:text-[var(--cream-muted)]"
              style={{ color: 'var(--cream)' }}
              disabled={isPending} />
          </div>
          <button type="submit" disabled={isPending || !query.trim()}
            className="px-5 py-2.5 rounded-lg text-sm font-black tracking-wide transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            style={{ background: 'var(--gold)', color: '#070b18' }}
            onMouseEnter={e => { if (!isPending) (e.currentTarget as HTMLElement).style.background = 'var(--gold-bright)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--gold)'; }}
          >
            {isPending ? '…' : 'ASK'}
          </button>
        </form>

        {/* Suggestions */}
        {!response && !isPending && (
          <div className="flex flex-wrap gap-1.5">
            {PROMPTS.map(p => (
              <button key={p} onClick={() => { setQuery(p); submit(p); }}
                className="text-[11px] px-2.5 py-1 rounded-md font-medium transition-all"
                style={{ background: 'var(--navy-elevated)', border: '1px solid var(--border-mid)', color: 'var(--cream-dim)' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--border-gold)'; el.style.color = 'var(--gold)'; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--border-mid)'; el.style.color = 'var(--cream-dim)'; }}
              >
                {p}
              </button>
            ))}
          </div>
        )}

        {/* Loading */}
        {isPending && (
          <div className="flex items-center gap-3 py-2">
            <div className="flex gap-1">
              {[0,1,2].map(i => (
                <span key={i} className="w-1.5 h-1.5 rounded-full animate-pulse-slow"
                  style={{ background: 'var(--gold)', animationDelay: `${i * 0.15}s` }} />
              ))}
            </div>
            <span className="font-mono text-xs" style={{ color: 'var(--cream-muted)' }}>
              Querying World Cup data…
            </span>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="rounded-lg p-3 text-sm font-medium"
            style={{ background: 'var(--red-dim)', border: '1px solid var(--border-red)', color: 'var(--red-bright)' }}>
            ⚠ {error}
          </div>
        )}

        {/* Response */}
        {response && (
          <div className="rounded-lg overflow-hidden" style={{ border: '1px solid var(--border-gold)' }}>
            <div className="px-3 py-2 flex items-center gap-2"
              style={{ background: 'var(--gold-dim)', borderBottom: '1px solid var(--border-gold)' }}>
              <span style={{ color: 'var(--gold)' }}>✦</span>
              <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: 'var(--gold)' }}>
                World Cup HQ Response
              </span>
            </div>
            <div className="p-3">
              <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: 'var(--cream)' }}>
                {response.answer}
              </p>
              <button onClick={() => { setResponse(null); setQuery(''); ref.current?.focus(); }}
                className="mt-3 font-mono text-[10px] transition-colors"
                style={{ color: 'var(--cream-muted)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--gold)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--cream-muted)'; }}>
                ← Ask another question
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
