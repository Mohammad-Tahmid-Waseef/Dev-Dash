import { useQuery } from '@tanstack/react-query';
import { Calendar, Clock, AlertCircle } from 'lucide-react';
import { format } from 'date-fns';
import { milestonesApi, Milestone } from '@/lib/api';
import { StatusBadge } from './StatusBadge';
import { Skeleton } from '@/components/ui/skeleton';

interface MilestonesListProps {
  onRefresh?: () => void;
}

export function MilestonesList({ onRefresh }: MilestonesListProps) {
  const { data: milestones, isLoading, error, refetch } = useQuery({
    queryKey: ['milestones'],
    queryFn: milestonesApi.getAll,
    retry: 1,
  });

  if (isLoading) {
    return (
      <div className="space-y-3">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="stat-card">
            <div className="flex items-start justify-between">
              <div className="space-y-2 flex-1">
                <Skeleton className="h-5 w-48 bg-secondary" />
                <Skeleton className="h-4 w-72 bg-secondary" />
              </div>
              <Skeleton className="h-6 w-24 rounded-full bg-secondary" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="stat-card text-center py-8">
        <AlertCircle className="w-12 h-12 text-destructive mx-auto mb-3" />
        <h3 className="text-lg font-semibold mb-1">Connection Error</h3>
        <p className="text-muted-foreground text-sm mb-4">
          Unable to connect to the API. Make sure your backend is running at localhost:5000
        </p>
        <button
          onClick={() => refetch()}
          className="px-4 py-2 bg-primary/20 text-primary rounded-lg text-sm font-medium hover:bg-primary/30 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (!milestones || milestones.length === 0) {
    return (
      <div className="stat-card text-center py-8">
        <Clock className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
        <h3 className="text-lg font-semibold mb-1">No Milestones Yet</h3>
        <p className="text-muted-foreground text-sm">
          Create your first milestone to start tracking your progress
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {milestones.map((milestone: Milestone) => (
        <div
          key={milestone._id}
          className="stat-card group hover:border-primary/30 transition-all duration-200"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                {milestone.title}
              </h4>
              {milestone.description && (
                <p className="text-muted-foreground text-sm mt-1 line-clamp-2">
                  {milestone.description}
                </p>
              )}
              {milestone.deadline && (
                <div className="flex items-center gap-1.5 mt-2 text-xs text-muted-foreground">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Due {format(new Date(milestone.deadline), 'MMM d, yyyy')}</span>
                </div>
              )}
            </div>
            <StatusBadge status={milestone.status} />
          </div>
        </div>
      ))}
    </div>
  );
}
