'use client';

import { useSyncExternalStore, useCallback } from 'react';

const STORAGE_KEY = 'wc2026_followed_teams';

// Cache the last snapshot so useSyncExternalStore gets a stable reference
// when localStorage hasn't changed. Without this, JSON.parse() always returns
// a new array, causing an infinite re-render loop.
let _cachedRaw: string | null = null;
let _cachedSnapshot: string[] = [];

function readSnapshot(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === _cachedRaw) return _cachedSnapshot;
    _cachedRaw = raw;
    _cachedSnapshot = raw ? (JSON.parse(raw) as string[]) : [];
    return _cachedSnapshot;
  } catch {
    return _cachedSnapshot;
  }
}

const _serverSnapshot: string[] = [];

const _listeners = new Set<() => void>();

function subscribe(cb: () => void) {
  _listeners.add(cb);
  window.addEventListener('storage', cb);
  return () => {
    _listeners.delete(cb);
    window.removeEventListener('storage', cb);
  };
}

function notifyAll() {
  _cachedRaw = null; // bust cache so next readSnapshot re-parses
  _listeners.forEach(cb => cb());
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
  const followed = useSyncExternalStore(subscribe, readSnapshot, () => _serverSnapshot);
  const toggle = useCallback((teamId: string) => toggleFollow(teamId), []);
  return { followed, toggle };
}
