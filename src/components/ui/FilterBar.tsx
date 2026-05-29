'use client';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useCallback } from 'react';

export interface FilterOption { value: string; label: string; }

interface FilterBarProps {
  filters: { key: string; label: string; options: FilterOption[]; allLabel?: string; }[];
}

export default function FilterBar({ filters }: FilterBarProps) {
  const router   = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const update = useCallback((key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === '') params.delete(key); else params.set(key, value);
    router.push(`${pathname}?${params.toString()}`);
  }, [router, pathname, searchParams]);

  return (
    <div className="flex flex-wrap items-center gap-3">
      {filters.map(({ key, label, options, allLabel = 'All' }) => {
        const current = searchParams.get(key) ?? '';
        return (
          <label key={key} className="flex items-center gap-2">
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase whitespace-nowrap"
              style={{ color: 'var(--cream-muted)' }}>
              {label}
            </span>
            <select
              value={current}
              onChange={e => update(key, e.target.value)}
              className="appearance-none cursor-pointer text-xs font-semibold rounded-lg px-3 py-1.5 pr-6 transition-all"
              style={{
                background: 'var(--navy-elevated)',
                border: '1px solid var(--border-mid)',
                color: current ? 'var(--gold-bright)' : 'var(--cream)',
                outline: 'none',
              }}
            >
              <option value="">{allLabel}</option>
              {options.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </label>
        );
      })}
    </div>
  );
}
