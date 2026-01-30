import { useState } from 'react';
import { 
  LayoutDashboard, 
  Target, 
  Github, 
  MessageSquare, 
  Settings,
  ChevronLeft,
  ChevronRight,
  Zap
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  icon: React.ElementType;
  label: string;
  id: string;
}

const navItems: NavItem[] = [
  { icon: LayoutDashboard, label: 'Overview', id: 'overview' },
  { icon: Target, label: 'Milestones', id: 'milestones' },
  { icon: Github, label: 'GitHub Stats', id: 'github' },
  { icon: MessageSquare, label: 'Stack Overflow', id: 'stackoverflow' },
  { icon: Settings, label: 'Settings', id: 'settings' },
];

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        "h-screen sticky top-0 flex flex-col border-r border-border/50 transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
      style={{ background: 'linear-gradient(180deg, hsl(222 47% 6%), hsl(222 47% 4%))' }}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 p-4 border-b border-border/50">
        <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center cyber-glow">
          <Zap className="w-5 h-5 text-primary" />
        </div>
        {!collapsed && (
          <span className="font-semibold text-lg tracking-tight">Dev-Dash</span>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 px-2 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSectionChange(item.id)}
            className={cn(
              "nav-link w-full",
              activeSection === item.id && "active"
            )}
          >
            <item.icon className="w-5 h-5 flex-shrink-0" />
            {!collapsed && <span className="text-sm font-medium">{item.label}</span>}
          </button>
        ))}
      </nav>

      {/* Collapse Toggle */}
      <div className="p-2 border-t border-border/50">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="nav-link w-full justify-center"
        >
          {collapsed ? (
            <ChevronRight className="w-5 h-5" />
          ) : (
            <>
              <ChevronLeft className="w-5 h-5" />
              <span className="text-sm">Collapse</span>
            </>
          )}
        </button>
      </div>
    </aside>
  );
}
