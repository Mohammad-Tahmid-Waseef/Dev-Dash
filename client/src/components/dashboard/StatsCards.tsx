import { Github, MessageSquare, GitCommit, Star, GitPullRequest, Award } from 'lucide-react';

// Mock data for GitHub and Stack Overflow
const githubStats = {
  commits: 247,
  stars: 128,
  pullRequests: 34,
  contributions: 892,
};

const stackOverflowStats = {
  reputation: 4526,
  answers: 156,
  questionsAsked: 23,
  badges: { gold: 2, silver: 18, bronze: 45 },
};

export function GitHubStatsCard() {
  return (
    <div className="stat-card">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
          <Github className="w-5 h-5 text-foreground" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">GitHub Stats</h3>
          <p className="text-xs text-muted-foreground">Last 30 days</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-muted-foreground">
            <GitCommit className="w-4 h-4" />
            <span className="text-xs">Commits</span>
          </div>
          <p className="text-2xl font-bold text-primary">{githubStats.commits}</p>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Star className="w-4 h-4" />
            <span className="text-xs">Stars</span>
          </div>
          <p className="text-2xl font-bold text-foreground">{githubStats.stars}</p>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-2 text-muted-foreground">
            <GitPullRequest className="w-4 h-4" />
            <span className="text-xs">Pull Requests</span>
          </div>
          <p className="text-2xl font-bold text-foreground">{githubStats.pullRequests}</p>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Award className="w-4 h-4" />
            <span className="text-xs">Contributions</span>
          </div>
          <p className="text-2xl font-bold text-foreground">{githubStats.contributions}</p>
        </div>
      </div>
    </div>
  );
}

export function StackOverflowCard() {
  return (
    <div className="stat-card">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
          <MessageSquare className="w-5 h-5 text-status-pending" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">Stack Overflow</h3>
          <p className="text-xs text-muted-foreground">Profile stats</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground text-sm">Reputation</span>
          <span className="text-xl font-bold text-primary">{stackOverflowStats.reputation.toLocaleString()}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-muted-foreground text-sm">Answers</span>
          <span className="text-lg font-semibold text-foreground">{stackOverflowStats.answers}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-muted-foreground text-sm">Questions</span>
          <span className="text-lg font-semibold text-foreground">{stackOverflowStats.questionsAsked}</span>
        </div>

        <div className="pt-2 border-t border-border/50">
          <span className="text-muted-foreground text-xs mb-2 block">Badges</span>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="text-sm font-medium">{stackOverflowStats.badges.gold}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-gray-400" />
              <span className="text-sm font-medium">{stackOverflowStats.badges.silver}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-amber-700" />
              <span className="text-sm font-medium">{stackOverflowStats.badges.bronze}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
