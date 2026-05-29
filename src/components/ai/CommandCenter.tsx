'use client';

import { useState, useTransition, useRef, useEffect } from 'react';

const PROMPTS = [
  { icon: '🇧🇷', text: 'When does Brazil play their first match?' },
  { icon: '🏟️', text: 'Which games are played in Mexico?' },
  { icon: '🇦🇷', text: 'Show Argentina\'s group stage fixtures' },
  { icon: '⚽', text: 'Who are the tournament favorites?' },
  { icon: '📊', text: 'What are the group standings?' },
  { icon: '🏆', text: 'Tell me about the World Cup Final venue' },
];

export default function CommandCenter() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState('');
  const [isPending, startTransition] = useTransition();
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const answerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (answer && answerRef.current) {
      answerRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [answer]);

  const submit = (q: string) => {
    const trimmed = q.trim();
    if (!trimmed || isPending) return;
    setError('');
    setAnswer('');
    startTransition(async () => {
      try {
        const res = await fetch('/api/ask', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ question: trimmed }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error ?? 'Request failed');
        setAnswer(data.answer);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Something went wrong');
      }
    });
  };

  return (
    <div className="card overflow-hidden" style={{ border: '1px solid var(--border-gold)' }}>
      {/* Header bar */}
      <div className="flex items-center justify-between px-5 py-3"
        style={{ background: 'var(--navy-elevated)', borderBottom: '1px solid var(--border-gold)' }}>
        <div className="flex items-center gap-3">
          <div className="flex gap-1">
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--red)' }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--gold)' }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--green)' }} />
          </div>
          <span className="font-mono font-black text-[11px] tracking-[0.2em] uppercase"
            style={{ color: 'var(--gold-bright)' }}>
            ✦ World Cup HQ — Command Center
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full animate-pulse-slow" style={{ background: 'var(--green)' }} />
          <span className="font-mono text-[9px] tracking-wider uppercase" style={{ color: 'var(--green)' }}>Claude AI · Live</span>
        </div>
      </div>

      <div className="p-5 space-y-5">
        {/* Input area */}
        <div className="relative">
          <textarea
            ref={inputRef}
            value={question}
            onChange={e => setQuestion(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); submit(question); } }}
            rows={2}
            placeholder="Ask anything about the 2026 FIFA World Cup..."
            disabled={isPending}
            className="w-full resize-none rounded-xl px-4 py-3.5 pr-28 font-mono text-sm leading-relaxed transition-all outline-none no-scrollbar"
            style={{
              background: 'var(--navy-elevated)',
              border: '1px solid var(--border-gold)',
              color: 'var(--cream)',
            }}
          />
          <button
            onClick={() => submit(question)}
            disabled={!question.trim() || isPending}
            className="absolute right-3 top-1/2 -translate-y-1/2 font-mono font-black text-[11px] tracking-wider uppercase px-3 py-2 rounded-lg transition-all disabled:opacity-40"
            style={{ background: 'var(--gold)', color: '#070b18' }}
          >
            {isPending ? '...' : 'ASK →'}
          </button>
        </div>

        {/* Suggested prompts */}
        <div>
          <p className="font-mono text-[9px] tracking-[0.2em] uppercase mb-2.5" style={{ color: 'var(--cream-muted)' }}>
            Suggested Questions
          </p>
          <div className="flex flex-wrap gap-2">
            {PROMPTS.map(p => (
              <button key={p.text}
                onClick={() => { setQuestion(p.text); submit(p.text); }}
                disabled={isPending}
                className="text-[11px] px-3 py-1.5 rounded-lg font-medium transition-all disabled:opacity-50 text-left"
                style={{
                  background: 'var(--navy-elevated)',
                  border: '1px solid var(--border)',
                  color: 'var(--cream-dim)',
                }}
              >
                {p.icon} {p.text}
              </button>
            ))}
          </div>
        </div>

        {/* Loading state */}
        {isPending && (
          <div className="rounded-xl p-4 flex items-center gap-3"
            style={{ background: 'var(--navy-elevated)', border: '1px solid var(--border-gold)' }}>
            <div className="flex gap-1">
              {[0, 1, 2].map(i => (
                <div key={i} className="w-1.5 h-1.5 rounded-full animate-bounce"
                  style={{ background: 'var(--gold)', animationDelay: `${i * 0.15}s` }} />
              ))}
            </div>
            <span className="font-mono text-[11px]" style={{ color: 'var(--cream-muted)' }}>
              Analyzing tournament data...
            </span>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="rounded-xl p-4" style={{ background: 'var(--red-dim)', border: '1px solid var(--red)' }}>
            <p className="font-mono text-[11px] font-bold mb-1" style={{ color: 'var(--red-bright)' }}>⚠ Error</p>
            <p className="text-xs" style={{ color: 'var(--cream-dim)' }}>{error}</p>
          </div>
        )}

        {/* Answer */}
        {answer && !isPending && (
          <div ref={answerRef} className="rounded-xl p-5 space-y-3"
            style={{ background: 'var(--navy-elevated)', border: '1px solid var(--border-gold)' }}>
            <div className="flex items-center gap-2">
              <span className="font-mono font-black text-[10px] tracking-[0.2em] uppercase"
                style={{ color: 'var(--gold-bright)' }}>✦ HQ Response</span>
              <div className="flex-1 h-px" style={{ background: 'var(--border-gold)' }} />
            </div>
            <div className="font-mono text-[13px] leading-7 whitespace-pre-wrap" style={{ color: 'var(--cream)' }}>
              {answer}
            </div>
            <div className="flex items-center gap-2 pt-1">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--green)' }} />
              <span className="font-mono text-[9px] tracking-wider uppercase" style={{ color: 'var(--cream-muted)' }}>
                Powered by Claude AI · World Cup 2026 Data
              </span>
            </div>
          </div>
        )}

        {/* Empty state */}
        {!answer && !isPending && !error && (
          <div className="text-center py-4">
            <p className="text-3xl mb-2">🏆</p>
            <p className="font-mono text-[11px]" style={{ color: 'var(--cream-muted)' }}>
              Ask about fixtures, teams, stadiums, history, or anything World Cup 2026.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
