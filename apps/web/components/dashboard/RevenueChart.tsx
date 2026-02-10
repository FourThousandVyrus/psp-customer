'use client';

import { useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data7d = [
  { day: 'Mon', revenue: 3200, transactions: 42 },
  { day: 'Tue', revenue: 4100, transactions: 58 },
  { day: 'Wed', revenue: 3800, transactions: 51 },
  { day: 'Thu', revenue: 5200, transactions: 73 },
  { day: 'Fri', revenue: 6800, transactions: 95 },
  { day: 'Sat', revenue: 7200, transactions: 101 },
  { day: 'Sun', revenue: 5900, transactions: 82 },
];

const data30d = [
  { day: 'Week 1', revenue: 12400, transactions: 172 },
  { day: 'Week 2', revenue: 18600, transactions: 258 },
  { day: 'Week 3', revenue: 15900, transactions: 221 },
  { day: 'Week 4', revenue: 22800, transactions: 316 },
];

const data90d = [
  { day: 'Oct', revenue: 28500, transactions: 395 },
  { day: 'Nov', revenue: 34200, transactions: 474 },
  { day: 'Dec', revenue: 41800, transactions: 580 },
  { day: 'Jan', revenue: 45280, transactions: 628 },
];

const ranges: Record<string, typeof data7d> = {
  '7d': data7d,
  '30d': data30d,
  '90d': data90d,
};

function CustomTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-gray-900 text-white px-4 py-3 rounded-lg shadow-xl text-sm">
      <p className="font-semibold mb-1.5 text-gray-300">{label}</p>
      <p className="text-green-400 font-bold text-base">
        GH₵ {payload[0].value.toLocaleString()}
      </p>
      {payload[0].payload.transactions && (
        <p className="text-gray-400 text-xs mt-1">
          {payload[0].payload.transactions} transactions
        </p>
      )}
    </div>
  );
}

export function RevenueChart() {
  const [range, setRange] = useState<'7d' | '30d' | '90d'>('7d');
  const activeData = ranges[range];

  const totalRevenue = activeData.reduce((s, d) => s + d.revenue, 0);
  const totalTx = activeData.reduce((s, d) => s + d.transactions, 0);

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Revenue Performance</h2>
          <p className="text-sm text-gray-500 mt-1">
            GH₵ {totalRevenue.toLocaleString()} across {totalTx} transactions
          </p>
        </div>
        <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
          {(['7d', '30d', '90d'] as const).map((r) => (
            <button
              key={r}
              onClick={() => setRange(r)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                range === r
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {r === '7d' ? '7 Days' : r === '30d' ? '30 Days' : '90 Days'}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={activeData} margin={{ top: 8, right: 8, left: -12, bottom: 0 }}>
            <defs>
              <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#16a34a" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#16a34a" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" vertical={false} />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#9ca3af' }}
              dy={8}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#9ca3af' }}
              tickFormatter={(v) => `GH₵${(v / 1000).toFixed(0)}k`}
              dx={-4}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#16a34a', strokeWidth: 1, strokeDasharray: '4 4' }} />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#16a34a"
              strokeWidth={2.5}
              fill="url(#revenueGradient)"
              dot={{ r: 4, fill: '#16a34a', stroke: '#fff', strokeWidth: 2 }}
              activeDot={{ r: 6, fill: '#16a34a', stroke: '#fff', strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Summary cards */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-green-50 rounded-lg p-4 border border-green-100">
          <p className="text-xs text-green-700 font-medium mb-1">Peak Revenue</p>
          <p className="text-xl font-bold text-gray-900">
            GH₵ {Math.max(...activeData.map((d) => d.revenue)).toLocaleString()}
          </p>
        </div>
        <div className="bg-green-50 rounded-lg p-4 border border-green-100">
          <p className="text-xs text-green-700 font-medium mb-1">Avg. Daily</p>
          <p className="text-xl font-bold text-gray-900">
            GH₵ {Math.round(totalRevenue / activeData.length).toLocaleString()}
          </p>
        </div>
        <div className="bg-green-50 rounded-lg p-4 border border-green-100">
          <p className="text-xs text-green-700 font-medium mb-1">Growth</p>
          <p className="text-xl font-bold text-gray-900">
            +{(
              ((activeData[activeData.length - 1].revenue - activeData[0].revenue) /
                activeData[0].revenue) *
              100
            ).toFixed(1)}%
          </p>
        </div>
        <div className="bg-green-50 rounded-lg p-4 border border-green-100">
          <p className="text-xs text-green-700 font-medium mb-1">Total Txns</p>
          <p className="text-xl font-bold text-gray-900">{totalTx.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}
