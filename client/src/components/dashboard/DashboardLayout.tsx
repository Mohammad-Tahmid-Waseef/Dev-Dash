import { useState } from 'react';
import { Sidebar } from './Sidebar';
import { MilestonesSection } from './MilestonesSection';
import { GitHubStatsCard, StackOverflowCard } from './StatsCards';
import { Zap, Activity } from 'lucide-react';

export function DashboardLayout() {
  const [activeSection, setActiveSection] = useState('milestones');

  return (
    <div className="flex min-h-screen w-full bg-background">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />

      <main className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-1">
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-primary text-sm font-medium">Developer Dashboard</span>
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Welcome back, Developer
            </h1>
            <p className="text-muted-foreground">
              Track your progress and stay on top of your goals.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="stat-card flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <Activity className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">12</p>
                <p className="text-sm text-muted-foreground">Active Projects</p>
              </div>
            </div>
            <div className="stat-card flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-status-progress/20 flex items-center justify-center">
                <Activity className="w-6 h-6 text-status-progress" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">5</p>
                <p className="text-sm text-muted-foreground">In Progress</p>
              </div>
            </div>
            <div className="stat-card flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-status-completed/20 flex items-center justify-center">
                <Activity className="w-6 h-6 text-status-completed" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">28</p>
                <p className="text-sm text-muted-foreground">Completed</p>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Milestones - Takes 2 columns */}
            <div className="lg:col-span-2">
              <MilestonesSection />
            </div>

            {/* Stats Sidebar */}
            <div className="space-y-6">
              <GitHubStatsCard />
              <StackOverflowCard />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
