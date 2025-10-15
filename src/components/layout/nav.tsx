import {
  BrainCircuit,
  Combine,
  Database,
  GitFork,
  LayoutDashboard,
  List,
  Monitor,
  PlayCircle,
  RefreshCw,
  Upload,
} from 'lucide-react';

export type NavItem = {
  title: string;
  href: string;
  icon: React.ReactNode;
};

export type NavCategory = {
  title: string;
  items: NavItem[];
};

export const navConfig: NavCategory[] = [
  {
    title: 'Overview',
    items: [
      {
        title: 'Dashboard',
        href: '/',
        icon: <LayoutDashboard className="h-4 w-4" />,
      },
    ],
  },
  {
    title: 'Data',
    items: [
      {
        title: 'Ingest',
        href: '/data/ingest',
        icon: <Upload className="h-4 w-4" />,
      },
      {
        title: 'Datasets',
        href: '/data/datasets',
        icon: <Database className="h-4 w-4" />,
      },
    ],
  },
  {
    title: 'Planning',
    items: [
      {
        title: 'Candidates',
        href: '/planning/candidates',
        icon: <Combine className="h-4 w-4" />,
      },
      {
        title: 'Optimize',
        href: '/planning/optimize',
        icon: <GitFork className="h-4 w-4" />,
      },
      {
        title: 'Plans',
        href: '/planning/plans',
        icon: <List className="h-4 w-4" />,
      },
      {
        title: 'Replan',
        href: '/planning/replan',
        icon: <RefreshCw className="h-4 w-4" />,
      },
    ],
  },
  {
    title: 'Insights',
    items: [
      {
        title: 'Simulate',
        href: '/insights/simulate',
        icon: <PlayCircle className="h-4 w-4" />,
      },
      {
        title: 'Models',
        href: '/insights/models',
        icon: <BrainCircuit className="h-4 w-4" />,
      },
      {
        title: 'Monitor',
        href: '/insights/monitor',
        icon: <Monitor className="h-4 w-4" />,
      },
    ],
  },
];