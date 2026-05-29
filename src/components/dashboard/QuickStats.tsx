import StatCard from '@/components/stats/StatCard';

export default function QuickStats() {
  const stats = [
    { label: 'Total Teams', value: 48, icon: '🛡️', accent: 'green' as const },
    { label: 'Total Matches', value: 104, icon: '⚽', accent: 'blue' as const },
    { label: 'Host Stadiums', value: 16, icon: '🏟️', accent: 'pink' as const },
    { label: 'Host Nations', value: 3, icon: '🌎', accent: 'yellow' as const },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {stats.map(s => (
        <StatCard key={s.label} {...s} />
      ))}
    </div>
  );
}
