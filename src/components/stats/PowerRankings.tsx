import type { Team, Player } from '@/lib/types';

interface Props {
  teams: Team[];
  players: Player[];
}

function parseMarketValue(mv: string): number {
  // "€180M" → 180, "€45M" → 45, "€8.5M" → 8.5
  const m = mv.replace(/[€£$]/g, '').replace('M', '');
  return parseFloat(m) || 0;
}

export default function PowerRankings({ teams, players }: Props) {
  const top16 = teams.slice(0, 16);
  // Use inverse ranking for bar width: #1 = 100%, #16 ≈ 60%
  const getBarPct = (rank: number) => Math.max(35, 100 - (rank - 1) * 4);

  const starPlayers = players
    .filter(p => p.isStarPlayer)
    .sort((a, b) => parseMarketValue(b.marketValue) - parseMarketValue(a.marketValue))
    .slice(0, 10);

  const maxValue = starPlayers.length > 0 ? parseMarketValue(starPlayers[0].marketValue) : 200;

  const CONF_COLOR: Record<string, string> = {
    UEFA: 'var(--sky)',
    CONMEBOL: 'var(--green-bright)',
    CONCACAF: 'var(--gold)',
    AFC: 'var(--red-bright)',
    CAF: 'var(--cream-dim)',
    OFC: 'var(--cream-muted)',
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* FIFA Power Rankings */}
      <div>
        <div className="mb-4">
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase mb-1" style={{ color: 'var(--gold)' }}>Pre-Tournament</p>
          <h2 className="text-xl font-black tracking-tight" style={{ color: 'var(--cream)' }}>FIFA Power Rankings</h2>
          <p className="text-sm mt-0.5 font-medium" style={{ color: 'var(--cream-muted)' }}>Top 16 teams entering the 2026 World Cup</p>
        </div>
        <div className="card overflow-hidden">
          <div className="px-4 py-2.5 flex items-center justify-between"
            style={{ background: 'var(--navy-elevated)', borderBottom: '1px solid var(--border)' }}>
            <span className="font-mono font-black text-[11px]" style={{ color: 'var(--gold-bright)' }}>🏆 FIFA WORLD RANKING</span>
            <span className="font-mono text-[9px]" style={{ color: 'var(--cream-muted)' }}>May 2026</span>
          </div>
          <div className="divide-y" style={{ '--tw-divide-color': 'var(--border)' } as React.CSSProperties}>
            {top16.map((team, idx) => (
              <div key={team.id} className="px-4 py-2.5 flex items-center gap-3 group hover:bg-white/[0.02] transition-colors">
                {/* Rank */}
                <span className="font-mono font-black text-sm w-6 text-right shrink-0"
                  style={{ color: idx < 3 ? 'var(--gold)' : 'var(--cream-muted)' }}>
                  {team.fifaRanking}
                </span>
                {/* Flag */}
                <span className="text-xl shrink-0">{team.flag}</span>
                {/* Name + bar */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-bold text-[12px] truncate" style={{ color: 'var(--cream)' }}>{team.name}</p>
                    <span className="font-mono text-[9px] ml-2 shrink-0" style={{ color: CONF_COLOR[team.confederation] ?? 'var(--cream-muted)' }}>
                      {team.confederation}
                    </span>
                  </div>
                  <div className="h-1 rounded-full overflow-hidden" style={{ background: 'var(--navy-elevated)' }}>
                    <div className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${getBarPct(team.fifaRanking)}%`,
                        background: idx === 0
                          ? `linear-gradient(90deg, var(--gold), var(--gold-bright))`
                          : idx < 3
                          ? `linear-gradient(90deg, ${team.colors.primary}, ${team.colors.secondary})`
                          : team.colors.primary,
                      }} />
                  </div>
                </div>
                {/* Best finish chip */}
                {team.bestFinish.includes('Champions') && (
                  <span className="font-mono text-[9px] px-1.5 py-0.5 rounded shrink-0"
                    style={{ background: 'var(--gold-dim)', color: 'var(--gold)', border: '1px solid var(--border-gold)' }}>
                    🏆
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Star Players by Market Value */}
      <div>
        <div className="mb-4">
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase mb-1" style={{ color: 'var(--gold)' }}>Ones to Watch</p>
          <h2 className="text-xl font-black tracking-tight" style={{ color: 'var(--cream)' }}>Top Star Players</h2>
          <p className="text-sm mt-0.5 font-medium" style={{ color: 'var(--cream-muted)' }}>Highest-value players at the tournament</p>
        </div>
        <div className="card overflow-hidden">
          <div className="px-4 py-2.5 flex items-center justify-between"
            style={{ background: 'var(--navy-elevated)', borderBottom: '1px solid var(--border)' }}>
            <span className="font-mono font-black text-[11px]" style={{ color: 'var(--gold-bright)' }}>★ MARKET VALUE LEADERS</span>
            <span className="font-mono text-[9px]" style={{ color: 'var(--cream-muted)' }}>Transfermarkt est.</span>
          </div>
          <div className="divide-y" style={{ '--tw-divide-color': 'var(--border)' } as React.CSSProperties}>
            {starPlayers.map((player, idx) => {
              const team = teams.find(t => t.id === player.teamId);
              const valuePct = Math.max(8, (parseMarketValue(player.marketValue) / maxValue) * 100);
              return (
                <div key={player.id} className="px-4 py-2.5 group hover:bg-white/[0.02] transition-colors">
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className="font-mono font-black text-sm w-5 text-right shrink-0"
                      style={{ color: idx < 3 ? 'var(--gold)' : 'var(--cream-muted)' }}>
                      {idx + 1}
                    </span>
                    <span className="text-lg shrink-0">{team?.flag ?? '🏴'}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="font-black text-[12px] truncate" style={{ color: 'var(--cream)' }}>{player.name}</p>
                        <span className="font-mono text-[11px] font-bold ml-2 shrink-0" style={{ color: 'var(--green-bright)' }}>
                          {player.marketValue}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[9px]" style={{ color: 'var(--cream-muted)' }}>{player.club}</span>
                        <span className="font-mono text-[9px] px-1 rounded"
                          style={{ background: 'var(--navy-elevated)', color: 'var(--cream-dim)' }}>
                          {player.position}
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Value bar */}
                  <div className="ml-8 h-0.5 rounded-full overflow-hidden" style={{ background: 'var(--navy-elevated)' }}>
                    <div className="h-full rounded-full"
                      style={{ width: `${valuePct}%`, background: 'var(--green-bright)', opacity: 0.7 }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
