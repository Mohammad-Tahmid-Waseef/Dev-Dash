import { useState } from 'react';
import { Plus, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MilestonesList } from './MilestonesList';
import { CreateMilestoneModal } from './CreateMilestoneModal';

export function MilestonesSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
            <Target className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground">Milestones</h2>
            <p className="text-sm text-muted-foreground">Track your project goals</p>
          </div>
        </div>

        <Button
          onClick={() => setIsModalOpen(true)}
          className="bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <Plus className="w-4 h-4 mr-2" />
          Create Milestone
        </Button>
      </div>

      <MilestonesList />

      <CreateMilestoneModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
}
