interface EmptyStateProps {
  icon?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export default function EmptyState({ icon = '🔍', title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-6 text-center">
      <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-4"
        style={{ background: 'var(--navy-card)', border: '1px solid var(--border)' }}>
        {icon}
      </div>
      <h3 className="text-base font-bold mb-2" style={{ color: 'var(--cream)' }}>{title}</h3>
      {description && (
        <p className="text-sm max-w-xs mb-6" style={{ color: 'var(--cream-muted)' }}>{description}</p>
      )}
      {action}
    </div>
  );
}
