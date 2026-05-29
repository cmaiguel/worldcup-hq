'use client';

import { useState, useRef, useTransition } from 'react';
import type { AskResponse } from '@/lib/types';

const SUGGESTIONS = [
  'When does Argentina play?',
  'Which games are in New York?',
  'Show me matches in Mexico',
  'Who are the top scorers?',
  'What teams are in Group B?',
  'Which stadium has the highest capacity?',
];

export default function AskBar() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<AskResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const inputRef = useRef<HTMLInputElement>(null);

  const submit = (q: string) => {
    if (!q.trim()) return;
    setResponse(null);
    setError(null);
    setQuery(q);

    startTransition(async () => {
      try {
        const res = await fetch('/api/ask', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ question: q }),
        });
        const data = await res.json() as { answer?: string; error?: string };
        if (!res.ok) {
          setError(data.error ?? 'Something went wrong. Please try again.');
        } else {
          setResponse({ answer: data.answer ?? '', confidence: 'high' });
        }
      } catch {
        setError('Failed to reach the server. Please check your connection.');
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submit(query);
  };

  return (
    <div className="retro-card p-4">
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <div className="w-6 h-6 rounded bg-[#00ff88]/10 border border-[#00ff88]/30 flex items-center justify-center text-xs">
          ✦
        </div>
        <span className="text-xs font-mono text-[#00ff88] tracking-wider uppercase">Ask AI</span>
        <span className="text-[10px] text-[#444466] font-mono ml-1">· Powered by Claude</span>
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Ask anything about the World Cup 2026..."
          className="flex-1 bg-[#050510] border border-[#1e1e3a] rounded px-3 py-2 text-sm text-white placeholder-[#444466] focus:outline-none focus:border-[#00ff88] transition-colors font-medium"
          disabled={isPending}
        />
        <button
          type="submit"
          disabled={isPending || !query.trim()}
          className="px-4 py-2 bg-[#00ff88] text-black text-sm font-bold rounded hover:bg-[#00dd77] disabled:opacity-40 disabled:cursor-not-allowed transition-colors whitespace-nowrap"
        >
          {isPending ? '...' : 'Ask'}
        </button>
      </form>

      {/* Suggestions */}
      {!response && !isPending && (
        <div className="flex flex-wrap gap-1.5 mt-2">
          {SUGGESTIONS.map(s => (
            <button
              key={s}
              onClick={() => { setQuery(s); submit(s); }}
              className="text-[10px] px-2 py-1 rounded bg-[#0d0d1e] border border-[#1e1e3a] text-[#8888bb] hover:text-white hover:border-[#2a2a50] transition-all font-medium"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Loading */}
      {isPending && (
        <div className="mt-3 flex items-center gap-2 text-xs text-[#8888bb] font-mono">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-pulse" />
          Querying World Cup data...
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="mt-3 p-3 rounded bg-[#ff0080]/10 border border-[#ff0080]/30 text-xs text-[#ff0080]">
          {error}
        </div>
      )}

      {/* Response */}
      {response && (
        <div className="mt-3 p-3 rounded bg-[#00ff88]/5 border border-[#00ff88]/20">
          <p className="text-[10px] font-mono text-[#00ff88] mb-1.5 tracking-wider">RESPONSE</p>
          <p className="text-sm text-white leading-relaxed whitespace-pre-line">{response.answer}</p>
          <button
            onClick={() => { setResponse(null); setQuery(''); inputRef.current?.focus(); }}
            className="mt-2 text-[10px] text-[#444466] hover:text-[#8888bb] font-mono transition-colors"
          >
            ← Ask another question
          </button>
        </div>
      )}
    </div>
  );
}
