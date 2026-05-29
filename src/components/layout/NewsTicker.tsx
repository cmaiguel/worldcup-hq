import { getNews } from '@/lib/data/adapters';

export default async function NewsTicker() {
  const news = await getNews();
  const items = news.slice(0, 8);
  // Duplicate for seamless loop
  const tickerItems = [...items, ...items];

  return (
    <div className="bg-[#0d0d1e] border-b border-[#1e1e3a] overflow-hidden h-8 flex items-center">
      <div className="shrink-0 bg-[#00ff88] px-3 h-full flex items-center z-10">
        <span className="text-[10px] font-mono font-bold text-black tracking-widest whitespace-nowrap">
          ⚡ BREAKING
        </span>
      </div>
      <div className="overflow-hidden flex-1 relative">
        <div className="flex animate-ticker whitespace-nowrap">
          {tickerItems.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-3 px-6 text-xs text-[#8888bb] font-medium">
              <span className="text-[#00ff88] font-mono">◆</span>
              {item.title}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
