import { cn } from '@/lib/utils';

type Status = 'Pending' | 'In Progress' | 'Completed';

interface StatusBadgeProps {
  status: Status;
  className?: string;
}

const statusStyles: Record<Status, string> = {
  'Pending': 'status-badge-pending',
  'In Progress': 'status-badge-progress',
  'Completed': 'status-badge-completed',
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        statusStyles[status],
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current mr-1.5 animate-pulse" />
      {status}
    </span>
  );
}
