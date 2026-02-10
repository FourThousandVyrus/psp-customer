'use client';

import { useState, useEffect } from 'react';
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  CreditCard,
  Users,
  CheckCircle,
  Clock,
  XCircle,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import { RevenueChart } from '@/components/dashboard/RevenueChart';
import { ProviderDonut } from '@/components/dashboard/ProviderDonut';
import {
  StatCardSkeleton,
  ChartSkeleton,
  TransactionSkeleton,
  DonutSkeleton,
} from '@/components/dashboard/Skeleton';

const stats = [
  {
    name: 'Total Revenue',
    value: 'GH₵ 45,280',
    change: '+23%',
    trend: 'up' as const,
    icon: DollarSign,
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600',
  },
  {
    name: 'Transactions',
    value: '1,247',
    change: '+12%',
    trend: 'up' as const,
    icon: CreditCard,
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600',
  },
  {
    name: 'Customers',
    value: '342',
    change: '+8%',
    trend: 'up' as const,
    icon: Users,
    bgColor: 'bg-gray-100',
    iconColor: 'text-gray-600',
  },
  {
    name: 'Success Rate',
    value: '94.2%',
    change: '-2%',
    trend: 'down' as const,
    icon: CheckCircle,
    bgColor: 'bg-gray-100',
    iconColor: 'text-gray-600',
  },
];

const recentTransactions = [
  {
    id: 'TXN-001',
    customer: '+233 24 123 4567',
    amount: 25000,
    status: 'success',
    provider: 'MTN',
    time: '2 minutes ago',
  },
  {
    id: 'TXN-002',
    customer: '+233 20 987 6543',
    amount: 18000,
    status: 'success',
    provider: 'Vodafone',
    time: '5 minutes ago',
  },
  {
    id: 'TXN-003',
    customer: '+233 27 456 7890',
    amount: 50000,
    status: 'success',
    provider: 'AirtelTigo',
    time: '10 minutes ago',
  },
  {
    id: 'TXN-004',
    customer: '+233 24 555 1234',
    amount: 12000,
    status: 'pending',
    provider: 'MTN',
    time: '15 minutes ago',
  },
  {
    id: 'TXN-005',
    customer: '+233 20 111 2222',
    amount: 8000,
    status: 'failed',
    provider: 'Vodafone',
    time: '20 minutes ago',
  },
];

export default function DashboardPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(t);
  }, []);

  if (loading) {
    return (
      <div className="space-y-8">
        <div>
          <div className="w-24 h-8 bg-gray-200 rounded animate-pulse" />
          <div className="w-64 h-4 bg-gray-200 rounded animate-pulse mt-2" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <StatCardSkeleton key={i} />
          ))}
        </div>
        <ChartSkeleton />
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <TransactionSkeleton />
          </div>
          <div className="space-y-6">
            <DonutSkeleton />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Page header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Home</h1>
        <p className="text-gray-600 mt-1">
          Welcome back! Here's what's happening today.
        </p>
      </div>

      {/* Stats grid -- uses static Tailwind classes so they won't be purged */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.name}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}
                >
                  <Icon className={`w-6 h-6 ${stat.iconColor}`} />
                </div>
                <div
                  className={`flex items-center gap-1 text-sm font-medium ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {stat.trend === 'up' ? (
                    <TrendingUp className="w-4 h-4" />
                  ) : (
                    <TrendingDown className="w-4 h-4" />
                  )}
                  <span>{stat.change}</span>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Revenue chart */}
      <RevenueChart />

      {/* Two column layout */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent transactions */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl border border-gray-200">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">
                Recent Transactions
              </h2>
              <Link
                href="/dashboard/transactions"
                className="text-sm text-green-600 hover:text-green-700 font-medium flex items-center gap-1"
              >
                <span>View all</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="divide-y divide-gray-200">
              {recentTransactions.map((tx) => (
                <div
                  key={tx.id}
                  className="p-6 hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {/* Provider badge */}
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          tx.provider === 'MTN'
                            ? 'bg-yellow-100'
                            : tx.provider === 'Vodafone'
                              ? 'bg-red-100'
                              : 'bg-blue-100'
                        }`}
                      >
                        <span
                          className={`text-xs font-bold ${
                            tx.provider === 'MTN'
                              ? 'text-yellow-700'
                              : tx.provider === 'Vodafone'
                                ? 'text-red-700'
                                : 'text-blue-700'
                          }`}
                        >
                          {tx.provider === 'MTN'
                            ? 'MTN'
                            : tx.provider === 'Vodafone'
                              ? 'VOD'
                              : 'ATL'}
                        </span>
                      </div>

                      {/* Transaction details */}
                      <div>
                        <p className="font-medium text-gray-900">
                          {tx.customer}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <p className="text-sm text-gray-500">{tx.id}</p>
                          <span className="text-gray-300">{'·'}</span>
                          <p className="text-sm text-gray-500">{tx.time}</p>
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="font-semibold text-gray-900">
                        GH₵ {(tx.amount / 100).toFixed(2)}
                      </p>
                      <div className="mt-1">
                        {tx.status === 'success' && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Success
                          </span>
                        )}
                        {tx.status === 'pending' && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            <Clock className="w-3 h-3 mr-1" />
                            Pending
                          </span>
                        )}
                        {tx.status === 'failed' && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                            <XCircle className="w-3 h-3 mr-1" />
                            Failed
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right sidebar */}
        <div className="space-y-6">
          {/* Provider donut chart */}
          <ProviderDonut />

          {/* Quick actions */}
          <div className="bg-gradient-to-br from-green-600 to-green-500 rounded-xl p-6 text-white">
            <h3 className="text-lg font-semibold mb-2">Ready to go live?</h3>
            <p className="text-green-50 text-sm mb-4">
              {"You're currently in test mode. Switch to live mode to start accepting real payments."}
            </p>
            <button className="w-full bg-white text-green-600 py-2.5 px-4 rounded-lg hover:bg-green-50 transition-colors font-semibold text-sm">
              Enable Live Mode
            </button>
          </div>

          {/* API status */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              System Status
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">API Status</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-green-600">
                    Operational
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Uptime</span>
                <span className="text-sm font-medium text-gray-900">99.9%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Response Time</span>
                <span className="text-sm font-medium text-gray-900">124ms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
