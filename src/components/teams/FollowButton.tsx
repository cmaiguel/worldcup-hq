'use client';

import type { Team } from '@/lib/types';
import { useFollowedTeams } from '@/hooks/useFollowedTeams';

export default function FollowButton({ team, size = 'sm' }: { team: Team; size?: 'sm' | 'md' }) {
  const { followed, toggle } = useFollowedTeams();
  const isFollowing = followed.includes(team.id);

  return (
    <button
      onClick={e => { e.preventDefault(); e.stopPropagation(); toggle(team.id); }}
      className={`font-mono font-black tracking-wider uppercase rounded-lg transition-all ${
        size === 'md' ? 'px-5 py-2.5 text-[12px]' : 'px-3 py-1.5 text-[11px]'
      }`}
      style={{
        background: isFollowing ? 'var(--gold)' : 'var(--gold-dim)',
        color: isFollowing ? '#070b18' : 'var(--gold)',
        border: `1px solid ${isFollowing ? 'var(--gold)' : 'var(--border-gold)'}`,
      }}
    >
      {isFollowing ? '★ Following' : '☆ Follow'}
    </button>
  );
}
