'use client';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useCallback } from 'react';

export interface FilterOption {
  value: string;
  label: string;
}

interface FilterBarProps {
  filters: {
    key: string;
    label: string;
    options: FilterOption[];
    allLabel?: string;
  }[];
}

export default function FilterBar({ filters }: FilterBarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateFilter = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value === '') {
        params.delete(key);
      } else {
        params.set(key, value);
      }
      router.push(`${pathname}?${params.toString()}`);
    },
    [router, pathname, searchParams],
  );

  return (
    <div className="flex flex-wrap items-center gap-2">
      {filters.map(({ key, label, options, allLabel = 'All' }) => {
        const current = searchParams.get(key) ?? '';
        return (
          <div key={key} className="flex items-center gap-1.5">
            <span className="text-[10px] font-mono text-[#444466] uppercase tracking-wider whitespace-nowrap">
              {label}:
            </span>
            <select
              value={current}
              onChange={e => updateFilter(key, e.target.value)}
              className="bg-[#0d0d1e] border border-[#1e1e3a] text-white text-xs rounded px-2 py-1.5 appearance-none cursor-pointer hover:border-[#2a2a50] focus:outline-none focus:border-[#00ff88] transition-colors font-medium"
            >
              <option value="">{allLabel}</option>
              {options.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        );
      })}
    </div>
  );
}
