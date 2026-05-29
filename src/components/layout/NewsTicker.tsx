import { getNews } from '@/lib/data/adapters';

export default async function NewsTicker() {
  const news = await getNews();
  const items = [...news.slice(0, 8), ...news.slice(0, 8)]; // duplicate for loop

  return (
    <div className="overflow-hidden h-8 flex items-center shrink-0"
      style={{ background: 'var(--navy-elevated)', borderBottom: '1px solid var(--border)' }}>
      {/* Label */}
      <div className="shrink-0 flex items-center gap-1.5 px-3 h-full z-10"
        style={{ background: 'var(--gold)', minWidth: '7rem' }}>
        <span className="w-1.5 h-1.5 rounded-full animate-pulse-slow" style={{ background: '#070b18' }} />
        <span className="font-mono font-black text-[10px] tracking-[0.18em]" style={{ color: '#070b18' }}>
          BREAKING
        </span>
      </div>

      {/* Ticker */}
      <div className="overflow-hidden flex-1 relative">
        <div className="flex animate-ticker whitespace-nowrap">
          {items.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-2 px-5 text-[11px] font-medium"
              style={{ color: 'var(--cream-dim)' }}>
              <span style={{ color: 'var(--gold)', fontSize: '8px' }}>◆</span>
              {item.title}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
