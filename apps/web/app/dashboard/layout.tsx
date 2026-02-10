'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
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
  Webhook,
  Calendar,
  FileText,
  ChevronRight,
  ExternalLink,
  Layers,
  Terminal,
} from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Balances', href: '/dashboard/balances', icon: Wallet },
  { name: 'Transactions', href: '/dashboard/transactions', icon: CreditCard },
  { name: 'Customers', href: '/dashboard/customers', icon: Users },
  { name: 'Analytics', href: '/dashboard/analytics', icon: BarChart3 },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [developersMenuOpen, setDevelopersMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-gray-900/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-white border-r border-gray-200 transform transition-transform duration-200 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
            <Link href="/dashboard" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-green-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Links</span>
            </Link>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
            {navigation.map((item) => {
              const isActive = pathname === item.href || pathname?.startsWith(item.href + '/');
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg ${
                    isActive
                      ? 'bg-green-50 text-green-600'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Developers section */}
          <div className="border-t border-gray-200">
            {/* Developers Dropdown Menu - Shows above the button */}
            {developersMenuOpen && (
              <>
                <div
                  className="fixed inset-0 z-10 lg:hidden"
                  onClick={() => setDevelopersMenuOpen(false)}
                />
                <div className="border-b border-gray-200 bg-gray-50">
                  {/* Workbench Section */}
                  <div className="py-2 border-b border-gray-200">
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase">Workbench</div>
                    <Link
                      href="/dashboard/developers/overview"
                      onClick={() => {
                        setDevelopersMenuOpen(false);
                        setSidebarOpen(false);
                      }}
                      className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <span>Overview</span>
                    </Link>
                    <Link
                      href="/dashboard/developers/webhooks"
                      onClick={() => {
                        setDevelopersMenuOpen(false);
                        setSidebarOpen(false);
                      }}
                      className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <span>Webhooks</span>
                    </Link>
                    <Link
                      href="/dashboard/developers/events"
                      onClick={() => {
                        setDevelopersMenuOpen(false);
                        setSidebarOpen(false);
                      }}
                      className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <span>Events</span>
                    </Link>
                    <Link
                      href="/dashboard/developers/logs"
                      onClick={() => {
                        setDevelopersMenuOpen(false);
                        setSidebarOpen(false);
                      }}
                      className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <span>Logs</span>
                    </Link>
                    <button className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <span>More</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Documentation Section */}
                  <div className="py-2 border-b border-gray-200">
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase">Documentation</div>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <span>API reference</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <span>SDKs</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <span>Links.js</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <span>CLI</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Quick Links */}
                  <div className="py-2">
                    <Link
                      href="/dashboard/settings/api-keys"
                      onClick={() => {
                        setDevelopersMenuOpen(false);
                        setSidebarOpen(false);
                      }}
                      className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <span>API keys</span>
                    </Link>
                    <Link
                      href="/dashboard/developers/apps"
                      onClick={() => {
                        setDevelopersMenuOpen(false);
                        setSidebarOpen(false);
                      }}
                      className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <span>Created apps</span>
                    </Link>
                    <Link
                      href="/dashboard/developers/settings"
                      onClick={() => {
                        setDevelopersMenuOpen(false);
                        setSidebarOpen(false);
                      }}
                      className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <span>Developer settings</span>
                    </Link>
                  </div>
                </div>
              </>
            )}

            {/* Developers Button */}
            <div className="p-4">
              <button
                onClick={() => setDevelopersMenuOpen(!developersMenuOpen)}
                className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer"
              >
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Code2 className="w-4 h-4 text-gray-600" />
                </div>
                <div className="flex-1 min-w-0 text-left">
                  <p className="text-sm font-medium text-gray-900">Developers</p>
                </div>
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${developersMenuOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <header className="fixed top-0 right-0 left-0 lg:left-64 z-30 bg-white border-b border-gray-200">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
            {/* Left side */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden text-gray-400 hover:text-gray-600"
              >
                <Menu className="w-6 h-6" />
              </button>

              {/* Search bar */}
              <div className="hidden md:block">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search transactions..."
                    className="block w-64 pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              {/* Mode Toggle */}
              <div className="hidden sm:flex items-center bg-gray-100 rounded-lg p-1">
                <button className="px-3 py-1.5 text-xs font-medium bg-white text-gray-900 rounded-md shadow-sm">
                  Test
                </button>
                <button className="px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-gray-900">
                  Live
                </button>
              </div>

              {/* Settings */}
              <Link
                href="/dashboard/settings"
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg"
              >
                <Settings className="w-5 h-5" />
              </Link>

              {/* Notifications */}
              <button className="relative p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              {/* User menu */}
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-green-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">DM</span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-400 hidden sm:block" />
                </button>

                {/* Dropdown */}
                {userMenuOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setUserMenuOpen(false)}
                    />
                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-20">
                      <div className="px-4 py-3 border-b border-gray-200">
                        <p className="text-sm font-medium text-gray-900">Demo Merchant</p>
                        <p className="text-xs text-gray-500">demo@merchant.com</p>
                      </div>
                      <Link
                        href="/dashboard/settings/profile"
                        className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <User className="w-4 h-4" />
                        <span>Profile</span>
                      </Link>
                      <Link
                        href="/dashboard/settings/api-keys"
                        className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <Key className="w-4 h-4" />
                        <span>API Keys</span>
                      </Link>
                      <Link
                        href="/dashboard/settings"
                        className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <Settings className="w-4 h-4" />
                        <span>Settings</span>
                      </Link>
                      <div className="border-t border-gray-200 my-1"></div>
                      <button className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                        <LogOut className="w-4 h-4" />
                        <span>Logout</span>
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="pt-24 px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8 min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
}
