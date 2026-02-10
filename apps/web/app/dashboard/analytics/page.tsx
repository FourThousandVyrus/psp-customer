'use client';

import { useState, useEffect } from 'react';
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
} from 'lucide-react';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

/* ---------- mock data ---------- */

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
  { provider: 'MTN', transactions: 648, revenue: 23546, successRate: 96, color: '#eab308' },
  { provider: 'Vodafone', transactions: 387, revenue: 14037, successRate: 94, color: '#ef4444' },
  { provider: 'AirtelTigo', transactions: 212, revenue: 7697, successRate: 91, color: '#3b82f6' },
];

const hourlyData = [
  { hour: '12am', transactions: 5 },
  { hour: '3am', transactions: 2 },
  { hour: '6am', transactions: 8 },
  { hour: '9am', transactions: 45 },
  { hour: '12pm', transactions: 78 },
  { hour: '3pm', transactions: 62 },
  { hour: '6pm', transactions: 52 },
  { hour: '9pm', transactions: 28 },
];

const providerPieData = providerData.map((p) => ({
  name: p.provider,
  value: p.transactions,
  color: p.color,
}));

/* ---------- tooltip helpers ---------- */

function RevenueTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-gray-900 text-white px-4 py-3 rounded-lg shadow-xl text-sm">
      <p className="font-semibold text-gray-300 mb-1">{label}</p>
      <p className="text-green-400 font-bold text-base">
        GH₵ {(payload[0].value / 100).toLocaleString('en-GB', { minimumFractionDigits: 2 })}
      </p>
      {payload[0].payload.transactions && (
        <p className="text-gray-400 text-xs mt-1">
          {payload[0].payload.transactions} transactions
        </p>
      )}
    </div>
  );
}

function HourlyTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-gray-900 text-white px-4 py-3 rounded-lg shadow-xl text-sm">
      <p className="font-semibold text-gray-300 mb-1">{label}</p>
      <p className="text-green-400 font-bold">{payload[0].value} transactions</p>
    </div>
  );
}

function ProviderPieTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div className="bg-gray-900 text-white px-4 py-3 rounded-lg shadow-xl text-sm">
      <p className="font-semibold mb-1">{d.name}</p>
      <p className="text-green-400 font-bold">{d.value} transactions</p>
    </div>
  );
}

/* ---------- skeleton ---------- */

function AnalyticsSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="w-28 h-8 bg-gray-200 rounded" />
          <div className="w-56 h-4 bg-gray-200 rounded mt-2" />
        </div>
        <div className="flex gap-3">
          <div className="w-40 h-10 bg-gray-200 rounded-lg" />
          <div className="w-32 h-10 bg-gray-200 rounded-lg" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-lg" />
              <div className="w-12 h-4 bg-gray-200 rounded" />
            </div>
            <div className="w-20 h-3 bg-gray-200 rounded mb-2" />
            <div className="w-28 h-7 bg-gray-200 rounded" />
          </div>
        ))}
      </div>
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="w-40 h-5 bg-gray-200 rounded mb-2" />
        <div className="w-56 h-3 bg-gray-200 rounded mb-6" />
        <div className="h-80 bg-gray-100 rounded-lg" />
      </div>
    </div>
  );
}

/* ---------- component ---------- */

export default function AnalyticsPage() {
  const [dateRange, setDateRange] = useState('30days');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(t);
  }, []);

  const formatAmount = (amount: number) =>
    `GH₵ ${(amount / 100).toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  if (loading) return <AnalyticsSkeleton />;

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
          <p className="text-gray-600 mt-1">
            Track your performance and gain insights
          </p>
        </div>
        <div className="flex items-center gap-3">
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
            </select>
            <Calendar className="w-4 h-4 text-gray-400 absolute right-3 top-3 pointer-events-none" />
          </div>
          <button className="inline-flex items-center justify-center px-4 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium text-sm">
            <Download className="w-4 h-4 mr-2" />
            Export
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
            <div className="flex items-center gap-1 text-sm font-medium text-green-600">
              <ArrowUp className="w-4 h-4" />
              <span>23%</span>
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-1">Total Revenue</p>
          <p className="text-2xl font-bold text-gray-900">GH₵ 45,280</p>
          <p className="text-xs text-gray-500 mt-1">+GH₵ 8,450 from last period</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-green-600" />
            </div>
            <div className="flex items-center gap-1 text-sm font-medium text-green-600">
              <ArrowUp className="w-4 h-4" />
              <span>12%</span>
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-1">Transactions</p>
          <p className="text-2xl font-bold text-gray-900">1,247</p>
          <p className="text-xs text-gray-500 mt-1">+133 from last period</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-gray-600" />
            </div>
            <div className="flex items-center gap-1 text-sm font-medium text-green-600">
              <ArrowUp className="w-4 h-4" />
              <span>8%</span>
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-1">Avg. Transaction</p>
          <p className="text-2xl font-bold text-gray-900">GH₵ 36.31</p>
          <p className="text-xs text-gray-500 mt-1">+GH₵ 2.68 from last period</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-gray-600" />
            </div>
            <div className="flex items-center gap-1 text-sm font-medium text-red-600">
              <ArrowDown className="w-4 h-4" />
              <span>2%</span>
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-1">Success Rate</p>
          <p className="text-2xl font-bold text-gray-900">94.2%</p>
          <p className="text-xs text-gray-500 mt-1">-1.8% from last period</p>
        </div>
      </div>

      {/* Revenue trend -- area chart */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Revenue Trend</h2>
            <p className="text-sm text-gray-500 mt-1">Daily revenue over time</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-600 rounded-full" />
            <span className="text-sm text-gray-600">Revenue</span>
          </div>
        </div>

        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={revenueData} margin={{ top: 8, right: 8, left: -12, bottom: 0 }}>
              <defs>
                <linearGradient id="analyticsRevenueGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#16a34a" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#16a34a" stopOpacity={0.02} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" vertical={false} />
              <XAxis
                dataKey="date"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#9ca3af' }}
                dy={8}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#9ca3af' }}
                tickFormatter={(v) => `GH₵${(v / 100).toFixed(0)}`}
                dx={-4}
              />
              <Tooltip content={<RevenueTooltip />} cursor={{ stroke: '#16a34a', strokeWidth: 1, strokeDasharray: '4 4' }} />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#16a34a"
                strokeWidth={2.5}
                fill="url(#analyticsRevenueGrad)"
                dot={{ r: 4, fill: '#16a34a', stroke: '#fff', strokeWidth: 2 }}
                activeDot={{ r: 6, fill: '#16a34a', stroke: '#fff', strokeWidth: 2 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Two column -- provider performance + hourly activity */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Provider performance with pie chart */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Provider Performance</h2>
            <p className="text-sm text-gray-500 mt-1">
              Breakdown by mobile money provider
            </p>
          </div>

          {/* Mini pie + legend */}
          <div className="flex items-center gap-6 mb-6">
            <div className="relative w-32 h-32 flex-shrink-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={providerPieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={32}
                    outerRadius={52}
                    paddingAngle={3}
                    dataKey="value"
                    strokeWidth={0}
                  >
                    {providerPieData.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<ProviderPieTooltip />} />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <p className="text-xs font-bold text-gray-900">1,247</p>
              </div>
            </div>
            <div className="flex-1 space-y-2">
              {providerPieData.map((p) => (
                <div key={p.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: p.color }} />
                    <span className="text-sm text-gray-700">{p.name}</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{p.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed cards */}
          <div className="space-y-4">
            {providerData.map((provider) => (
              <div key={provider.provider} className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
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
                        {provider.provider === 'MTN'
                          ? 'MTN'
                          : provider.provider === 'Vodafone'
                            ? 'VOD'
                            : 'ATL'}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{provider.provider}</p>
                      <p className="text-xs text-gray-500">
                        {provider.transactions} transactions
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{formatAmount(provider.revenue)}</p>
                    <p className="text-xs text-gray-500">{provider.successRate}% success</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-white rounded-md p-2">
                    <p className="text-xs text-gray-500">Share</p>
                    <p className="text-sm font-semibold text-gray-900">
                      {((provider.transactions / 1247) * 100).toFixed(1)}%
                    </p>
                  </div>
                  <div className="bg-white rounded-md p-2">
                    <p className="text-xs text-gray-500">Avg.</p>
                    <p className="text-sm font-semibold text-gray-900">
                      {formatAmount(Math.round(provider.revenue / provider.transactions))}
                    </p>
                  </div>
                  <div className="bg-white rounded-md p-2">
                    <p className="text-xs text-gray-500">Success</p>
                    <p className="text-sm font-semibold text-gray-900">{provider.successRate}%</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hourly activity -- bar chart */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Hourly Activity</h2>
            <p className="text-sm text-gray-500 mt-1">
              Transaction volume by time of day
            </p>
          </div>

          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={hourlyData} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" vertical={false} />
                <XAxis
                  dataKey="hour"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 11, fill: '#9ca3af' }}
                  dy={8}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#9ca3af' }}
                />
                <Tooltip content={<HourlyTooltip />} cursor={{ fill: '#f3f4f6' }} />
                <Bar dataKey="transactions" radius={[6, 6, 0, 0]} maxBarSize={40}>
                  {hourlyData.map((entry, i) => (
                    <Cell
                      key={i}
                      fill={entry.transactions >= 60 ? '#16a34a' : entry.transactions >= 30 ? '#4ade80' : '#d1d5db'}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Peak hours */}
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-green-900">
                  Peak Hours: 12:00 - 15:00
                </p>
                <p className="text-sm text-green-700 mt-1">
                  78% of transactions occur during business hours (9am - 6pm)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom insights */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-green-600 to-green-500 rounded-xl p-6 text-white">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Best Day</h3>
          <p className="text-3xl font-bold mb-1">Feb 4</p>
          <p className="text-green-50 text-sm">GH₵ 452.80 revenue</p>
          <p className="text-green-50 text-sm">156 transactions</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4">
            <Users className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Repeat Customers
          </h3>
          <p className="text-3xl font-bold text-gray-900 mb-1">67%</p>
          <p className="text-sm text-gray-500">229 of 342 customers</p>
          <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-green-600 rounded-full" style={{ width: '67%' }} />
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <TrendingDown className="w-6 h-6 text-gray-600" />
            </div>
            <span className="text-sm font-medium text-green-600">-15%</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Avg. Processing Time
          </h3>
          <p className="text-3xl font-bold text-gray-900 mb-1">4.2s</p>
          <p className="text-sm text-gray-500">0.7s faster than last month</p>
        </div>
      </div>
    </div>
  );
}
