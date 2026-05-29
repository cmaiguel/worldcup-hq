'use client';

import { useSyncExternalStore, useCallback } from 'react';

const STORAGE_KEY = 'wc2026_followed_teams';

function readSnapshot(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch { return []; }
}

const serverSnapshot: string[] = [];

const listeners = new Set<() => void>();

function subscribe(cb: () => void) {
  listeners.add(cb);
  window.addEventListener('storage', cb);
  return () => {
    listeners.delete(cb);
    window.removeEventListener('storage', cb);
  };
}

function notifyAll() {
  listeners.forEach(cb => cb());
}

export function toggleFollow(teamId: string) {
  const current = readSnapshot();
  const next = current.includes(teamId)
    ? current.filter(id => id !== teamId)
    : [...current, teamId];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  notifyAll();
}

export function useFollowedTeams() {
  const followed = useSyncExternalStore(subscribe, readSnapshot, () => serverSnapshot);
  const toggle = useCallback((teamId: string) => toggleFollow(teamId), []);
  return { followed, toggle };
}
