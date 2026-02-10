'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'MTN', value: 23546, percentage: 52, color: '#eab308' },
  { name: 'Vodafone', value: 14037, percentage: 31, color: '#ef4444' },
  { name: 'AirtelTigo', value: 7697, percentage: 17, color: '#3b82f6' },
];

const total = data.reduce((s, d) => s + d.value, 0);

function CustomTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div className="bg-gray-900 text-white px-4 py-3 rounded-lg shadow-xl text-sm">
      <p className="font-semibold mb-1">{d.name}</p>
      <p className="text-green-400 font-bold">GH₵ {d.value.toLocaleString()}</p>
      <p className="text-gray-400 text-xs mt-0.5">{d.percentage}% of total</p>
    </div>
  );
}

export function ProviderDonut() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Payment Providers</h2>

      {/* Donut */}
      <div className="relative h-52">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={85}
              paddingAngle={3}
              dataKey="value"
              strokeWidth={0}
            >
              {data.map((entry, i) => (
                <Cell key={i} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
        {/* Center label */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <p className="text-xs text-gray-500 font-medium">Total</p>
          <p className="text-lg font-bold text-gray-900">GH₵ {total.toLocaleString()}</p>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-4 space-y-3">
        {data.map((provider) => (
          <div key={provider.name} className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div
                className="w-3 h-3 rounded-full flex-shrink-0"
                style={{ backgroundColor: provider.color }}
              />
              <span className="text-sm font-medium text-gray-900">{provider.name}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500">
                GH₵ {provider.value.toLocaleString()}
              </span>
              <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full">
                {provider.percentage}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
