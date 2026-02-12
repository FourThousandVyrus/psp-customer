import Link from 'next/link';
import {
  LayoutDashboard,
  CreditCard,
  Users,
  BarChart3,
  Settings,
  Menu,
  X,
  Bell,
  Search,
  ChevronDown,
  LogOut,
  User,
  Key,
  Wallet,
  Code2,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';
import DashboardClientWrapper from './dashboard-client-wrapper';

const navigation = [
  { name: 'Home', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Balances', href: '/dashboard/balances', icon: Wallet },
  { name: 'Transactions', href: '/dashboard/transactions', icon: CreditCard },
  { name: 'Customers', href: '/dashboard/customers', icon: Users },
  { name: 'Analytics', href: '/dashboard/analytics', icon: BarChart3 },
];

const developersLinks = {
  workbench: [
    { name: 'Overview', href: '/dashboard/developers/overview' },
    { name: 'Webhooks', href: '/dashboard/developers/webhooks' },
    { name: 'Events', href: '/dashboard/developers/events' },
    { name: 'Logs', href: '/dashboard/developers/logs' },
  ],
  documentation: [
    { name: 'API reference', href: '#', external: true },
    { name: 'SDKs', href: '#', external: true },
    { name: 'Links.js', href: '#', external: true },
    { name: 'CLI', href: '#', external: true },
  ],
  quickLinks: [
    { name: 'API keys', href: '/dashboard/settings/api-keys' },
    { name: 'Created apps', href: '/dashboard/developers/apps' },
    { name: 'Developer settings', href: '/dashboard/developers/settings' },
  ],
};

const userMenuLinks = [
  { name: 'Profile', href: '/dashboard/settings/profile', icon: User },
  { name: 'API Keys', href: '/dashboard/settings/api-keys', icon: Key },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardClientWrapper
      navigation={navigation}
      developersLinks={developersLinks}
      userMenuLinks={userMenuLinks}
    >
      {children}
    </DashboardClientWrapper>
  );
}
