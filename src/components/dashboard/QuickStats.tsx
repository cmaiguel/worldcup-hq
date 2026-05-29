import StatCard from '@/components/stats/StatCard';

export default function QuickStats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      <StatCard label="Qualified Teams"  value={48}  icon="🛡️" accent="gold"  subLabel="From 6 confederations" />
      <StatCard label="Total Matches"    value={104} icon="⚽" accent="green" subLabel="Group stage to Final" />
      <StatCard label="Host Stadiums"    value={16}  icon="🏟️" accent="sky"   subLabel="Across 3 nations" />
      <StatCard label="Days of Football" value={53}  icon="📅" accent="red"   subLabel="Jun 11 – Aug 2, 2026" />
    </div>
  );
}
