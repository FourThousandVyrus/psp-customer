'use client';

import { useState } from 'react';
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  CreditCard,
  Users,
  Calendar,
  Download,
  ArrowUp,
  ArrowDown,
  ChevronDown,
} from 'lucide-react';

// Mock chart data
const revenueData = [
  { date: 'Jan 1', revenue: 12000, transactions: 45 },
  { date: 'Jan 5', revenue: 18000, transactions: 62 },
  { date: 'Jan 10', revenue: 15000, transactions: 53 },
  { date: 'Jan 15', revenue: 22000, transactions: 78 },
  { date: 'Jan 20', revenue: 28000, transactions: 95 },
  { date: 'Jan 25', revenue: 24000, transactions: 84 },
  { date: 'Jan 30', revenue: 32000, transactions: 112 },
  { date: 'Feb 4', revenue: 45280, transactions: 156 },
];

const providerData = [
  { provider: 'MTN', transactions: 648, revenue: 23546, successRate: 96 },
  { provider: 'Vodafone', transactions: 387, revenue: 14037, successRate: 94 },
  { provider: 'AirtelTigo', transactions: 212, revenue: 7697, successRate: 91 },
];

const hourlyData = [
  { hour: '00:00', transactions: 5 },
  { hour: '03:00', transactions: 2 },
  { hour: '06:00', transactions: 8 },
  { hour: '09:00', transactions: 45 },
  { hour: '12:00', transactions: 78 },
  { hour: '15:00', transactions: 62 },
  { hour: '18:00', transactions: 52 },
  { hour: '21:00', transactions: 28 },
];

export default function AnalyticsPage() {
  const [dateRange, setDateRange] = useState('30days');

  const formatAmount = (amount: number) => {
    return `GH₵ ${(amount / 100).toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const getMaxValue = (data: any[], key: string) => {
    return Math.max(...data.map(item => item[key]));
  };

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
          <p className="text-gray-600 mt-1">Track your performance and gain insights</p>
        </div>
        <div className="flex items-center gap-3">
          {/* Date range selector */}
          <div className="relative">
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="appearance-none px-4 py-2.5 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm font-medium bg-white cursor-pointer"
            >
              <option value="7days">Last 7 days</option>
              <option value="30days">Last 30 days</option>
              <option value="90days">Last 90 days</option>
              <option value="year">This year</option>
              <option value="custom">Custom range</option>
            </select>
            <Calendar className="w-4 h-4 text-gray-400 absolute right-3 top-3 pointer-events-none" />
          </div>
          <button className="inline-flex items-center justify-center px-4 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </button>
        </div>
      </div>

      {/* Key metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
            <div className="flex items-center space-x-1 text-sm font-medium text-green-600">
              <ArrowUp className="w-4 h-4" />
              <span>23%</span>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Total Revenue</p>
            <p className="text-2xl font-bold text-gray-900">GH₵ 45,280</p>
            <p className="text-xs text-gray-500 mt-1">+GH₵ 8,450 from last period</p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex items-center space-x-1 text-sm font-medium text-green-600">
              <ArrowUp className="w-4 h-4" />
              <span>12%</span>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Transactions</p>
            <p className="text-2xl font-bold text-gray-900">1,247</p>
            <p className="text-xs text-gray-500 mt-1">+133 from last period</p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
            <div className="flex items-center space-x-1 text-sm font-medium text-green-600">
              <ArrowUp className="w-4 h-4" />
              <span>8%</span>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Avg. Transaction</p>
            <p className="text-2xl font-bold text-gray-900">GH₵ 36.31</p>
            <p className="text-xs text-gray-500 mt-1">+GH₵ 2.68 from last period</p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-orange-600" />
            </div>
            <div className="flex items-center space-x-1 text-sm font-medium text-red-600">
              <ArrowDown className="w-4 h-4" />
              <span>2%</span>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Success Rate</p>
            <p className="text-2xl font-bold text-gray-900">94.2%</p>
            <p className="text-xs text-gray-500 mt-1">-1.8% from last period</p>
          </div>
        </div>
      </div>

      {/* Revenue trend chart */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Revenue Trend</h2>
            <p className="text-sm text-gray-500 mt-1">Daily revenue over time</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-600 rounded-full"></div>
              <span className="text-sm text-gray-600">Revenue</span>
            </div>
          </div>
        </div>

        {/* Simple bar chart */}
        <div className="space-y-3">
          {revenueData.map((item, index) => {
            const maxRevenue = getMaxValue(revenueData, 'revenue');
            const percentage = (item.revenue / maxRevenue) * 100;

            return (
              <div key={index}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-600 w-16">{item.date}</span>
                  <span className="text-sm font-semibold text-gray-900">
                    {formatAmount(item.revenue)}
                  </span>
                </div>
                <div className="relative h-8 bg-gray-100 rounded-lg overflow-hidden">
                  <div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-600 to-green-400 rounded-lg transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                  />
                  <div className="absolute inset-0 flex items-center px-3">
                    <span className="text-xs font-medium text-gray-700">
                      {item.transactions} transactions
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Two column layout */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Provider performance */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Provider Performance</h2>
            <p className="text-sm text-gray-500 mt-1">Breakdown by mobile money provider</p>
          </div>

          <div className="space-y-6">
            {providerData.map((provider, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        provider.provider === 'MTN'
                          ? 'bg-yellow-100'
                          : provider.provider === 'Vodafone'
                          ? 'bg-red-100'
                          : 'bg-blue-100'
                      }`}
                    >
                      <span
                        className={`text-xs font-bold ${
                          provider.provider === 'MTN'
                            ? 'text-yellow-700'
                            : provider.provider === 'Vodafone'
                            ? 'text-red-700'
                            : 'text-blue-700'
                        }`}
                      >
                        {provider.provider === 'MTN' ? 'MTN' : provider.provider === 'Vodafone' ? 'VOD' : 'ATL'}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{provider.provider}</p>
                      <p className="text-sm text-gray-500">{provider.transactions} transactions</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{formatAmount(provider.revenue)}</p>
                    <p className="text-xs text-gray-500">{provider.successRate}% success</p>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`absolute inset-y-0 left-0 rounded-full ${
                      provider.provider === 'MTN'
                        ? 'bg-yellow-500'
                        : provider.provider === 'Vodafone'
                        ? 'bg-red-500'
                        : 'bg-blue-500'
                    }`}
                    style={{ width: `${(provider.transactions / 1247) * 100}%` }}
                  />
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3 mt-3">
                  <div className="bg-gray-50 rounded-lg p-2">
                    <p className="text-xs text-gray-600">Share</p>
                    <p className="text-sm font-semibold text-gray-900">
                      {((provider.transactions / 1247) * 100).toFixed(1)}%
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2">
                    <p className="text-xs text-gray-600">Avg. Amount</p>
                    <p className="text-sm font-semibold text-gray-900">
                      {formatAmount(Math.round(provider.revenue / provider.transactions))}
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2">
                    <p className="text-xs text-gray-600">Success</p>
                    <p className="text-sm font-semibold text-gray-900">{provider.successRate}%</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hourly activity */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Hourly Activity</h2>
            <p className="text-sm text-gray-500 mt-1">Transaction volume by time of day</p>
          </div>

          <div className="space-y-3">
            {hourlyData.map((item, index) => {
              const maxTransactions = getMaxValue(hourlyData, 'transactions');
              const percentage = (item.transactions / maxTransactions) * 100;

              return (
                <div key={index} className="flex items-center space-x-3">
                  <span className="text-sm text-gray-600 w-12">{item.hour}</span>
                  <div className="flex-1 relative h-6 bg-gray-100 rounded overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-500"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-900 w-8 text-right">
                    {item.transactions}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Peak hours indicator */}
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-start space-x-3">
              <TrendingUp className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-blue-900">Peak Hours: 12:00 - 15:00</p>
                <p className="text-sm text-blue-700 mt-1">
                  78% of transactions occur during business hours (9am - 6pm)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional insights */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Top performing day */}
        <div className="bg-gradient-to-br from-green-600 to-green-400 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-lg font-semibold mb-2">Best Day</h3>
          <p className="text-3xl font-bold mb-1">Feb 4</p>
          <p className="text-green-50 text-sm">GH₵ 452.80 revenue</p>
          <p className="text-green-50 text-sm">156 transactions</p>
        </div>

        {/* Customer retention */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Repeat Customers</h3>
          <p className="text-3xl font-bold text-gray-900 mb-1">67%</p>
          <p className="text-sm text-gray-500">229 of 342 customers</p>
          <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-purple-600 rounded-full" style={{ width: '67%' }} />
          </div>
        </div>

        {/* Average processing time */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <TrendingDown className="w-6 h-6 text-orange-600" />
            </div>
            <span className="text-sm font-medium text-green-600">-15%</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Avg. Processing Time</h3>
          <p className="text-3xl font-bold text-gray-900 mb-1">4.2s</p>
          <p className="text-sm text-gray-500">0.7s faster than last month</p>
        </div>
      </div>
    </div>
  );
}
