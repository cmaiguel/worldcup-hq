import type { Team } from '@/lib/types';
import Badge from '@/components/ui/Badge';

const CONF_VARIANT: Record<string, 'sky' | 'green' | 'gold' | 'red' | 'gray'> = {
  UEFA: 'sky', CONMEBOL: 'green', CONCACAF: 'gold', AFC: 'red', CAF: 'gray', OFC: 'gray',
};

export default function TeamCard({ team }: { team: Team }) {
  return (
    <div className="card group cursor-pointer overflow-hidden transition-all duration-200 flex flex-col">
      {/* Color bar */}
      <div className="h-1" style={{ background: `linear-gradient(90deg, ${team.colors.primary}, ${team.colors.secondary})` }} />

      {/* Top section */}
      <div className="p-4 flex items-start gap-3">
        <div className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl shrink-0 border"
          style={{ background: `${team.colors.primary}18`, borderColor: `${team.colors.primary}44` }}>
          {team.flag}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-black text-sm leading-tight mb-1 transition-colors group-hover:text-[var(--gold-bright)]"
            style={{ color: 'var(--cream)' }}>
            {team.name}
          </h3>
          <div className="flex flex-wrap gap-1">
            <Badge label={`Group ${team.group}`} variant="sky" />
            <Badge label={team.confederation} variant={CONF_VARIANT[team.confederation] ?? 'gray'} />
          </div>
        </div>
        <div className="text-right shrink-0">
          <p className="font-mono font-black text-xl" style={{ color: 'var(--gold)' }}>#{team.fifaRanking}</p>
          <p className="font-mono text-[9px] tracking-wider uppercase" style={{ color: 'var(--cream-muted)' }}>FIFA</p>
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-3 divider" style={{ borderTop: '1px solid var(--border)' }}>
        {[
          { l: 'Coach',   v: team.coach.split(' ').pop() ?? team.coach },
          { l: 'Captain', v: team.captain.split(' ').pop() ?? team.captain },
          { l: 'WC Apps', v: String(team.worldCupAppearances) },
        ].map(({ l, v }) => (
          <div key={l} className="px-3 py-2.5 text-center" style={{ borderRight: '1px solid var(--border)' }}>
            <p className="font-mono text-[9px] tracking-[0.15em] uppercase mb-0.5" style={{ color: 'var(--cream-muted)' }}>{l}</p>
            <p className="font-semibold text-[11px] truncate" style={{ color: 'var(--cream-dim)' }}>{v}</p>
          </div>
        ))}
      </div>

      {/* Best finish */}
      <div className="px-4 py-2.5 flex items-center gap-2" style={{ borderBottom: '1px solid var(--border)' }}>
        <span style={{ color: 'var(--gold)', fontSize: '12px' }}>🏆</span>
        <span className="font-mono text-[10px] tracking-wider uppercase" style={{ color: 'var(--cream-muted)' }}>Best Finish:</span>
        <span className="text-[11px] font-semibold" style={{ color: 'var(--gold)' }}>{team.bestFinish}</span>
      </div>

      {/* Bio */}
      <div className="px-4 py-3 flex-1">
        <p className="text-[12px] leading-relaxed line-clamp-3" style={{ color: 'var(--cream-dim)' }}>
          {team.bio}
        </p>
      </div>

      {/* Star player */}
      <div className="px-4 py-2.5 flex items-center gap-2" style={{ borderTop: '1px solid var(--border)', background: 'var(--navy-elevated)' }}>
        <span style={{ color: 'var(--gold)', fontSize: '11px' }}>★</span>
        <span className="font-mono text-[9px] tracking-wider uppercase" style={{ color: 'var(--cream-muted)' }}>Star Player</span>
        <span className="font-bold text-[11px] ml-auto" style={{ color: 'var(--cream)' }}>{team.starPlayer}</span>
      </div>
    </div>
  );
}
