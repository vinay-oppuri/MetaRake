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
        href: '/ingest',
        icon: <Upload className="h-4 w-4" />,
      },
      {
        title: 'Datasets',
        href: '/datasets',
        icon: <Database className="h-4 w-4" />,
      },
    ],
  },
  {
    title: 'Planning',
    items: [
      {
        title: 'Candidates',
        href: '/candidates',
        icon: <Combine className="h-4 w-4" />,
      },
      {
        title: 'Optimize',
        href: '/optimize',
        icon: <GitFork className="h-4 w-4" />,
      },
      {
        title: 'Plans',
        href: '/plans',
        icon: <List className="h-4 w-4" />,
      },
    ],
  },
  {
    title: 'Operations',
    items: [
      {
        title: 'Replan',
        href: '/replan',
        icon: <RefreshCw className="h-4 w-4" />,
      },
      {
        title: 'Simulate',
        href: '/simulate',
        icon: <PlayCircle className="h-4 w-4" />,
      },
    ],
  },
  {
    title: 'Intelligence',
    items: [
      {
        title: 'Models',
        href: '/models',
        icon: <BrainCircuit className="h-4 w-4" />,
      },
    ],
  },
  {
    title: 'System',
    items: [
      {
        title: 'Monitor',
        href: '/monitor',
        icon: <Monitor className="h-4 w-4" />,
      },
    ],
  },
];
