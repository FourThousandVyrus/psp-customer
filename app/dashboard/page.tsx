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

// Mock data - will be replaced with real API calls
const stats = [
  {
    name: 'Total Revenue',
    value: 'GH₵ 45,280',
    change: '+23%',
    trend: 'up',
    icon: DollarSign,
    color: 'green',
  },
  {
    name: 'Transactions',
    value: '1,247',
    change: '+12%',
    trend: 'up',
    icon: CreditCard,
    color: 'blue',
  },
  {
    name: 'Customers',
    value: '342',
    change: '+8%',
    trend: 'up',
    icon: Users,
    color: 'purple',
  },
  {
    name: 'Success Rate',
    value: '94.2%',
    change: '-2%',
    trend: 'down',
    icon: CheckCircle,
    color: 'orange',
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

const providerStats = [
  { name: 'MTN', percentage: 52, amount: 'GH₵ 23,546', color: 'bg-yellow-500' },
  { name: 'Vodafone', percentage: 31, amount: 'GH₵ 14,037', color: 'bg-red-500' },
  { name: 'AirtelTigo', percentage: 17, amount: 'GH₵ 7,697', color: 'bg-blue-500' },
];

// Forex-style candlestick data
const candlestickData = [
  { day: 'Mon', open: 3000, close: 3200, high: 3400, low: 2900 },
  { day: 'Tue', open: 3200, close: 4100, high: 4300, low: 3100 },
  { day: 'Wed', open: 4100, close: 3800, high: 4200, low: 3600 },
  { day: 'Thu', open: 3800, close: 5200, high: 5400, low: 3700 },
  { day: 'Fri', open: 5200, close: 6800, high: 7000, low: 5100 },
  { day: 'Sat', open: 6800, close: 7200, high: 7500, low: 6600 },
  { day: 'Sun', open: 7200, close: 5900, high: 7300, low: 5700 },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Page header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Home</h1>
        <p className="text-gray-600 mt-1">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.name}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 text-${stat.color}-600`} />
                </div>
                <div className={`flex items-center space-x-1 text-sm font-medium ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
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

      {/* Revenue Analytics Chart */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Revenue Performance</h2>
            <p className="text-sm text-gray-500 mt-1">Daily revenue range • Last 7 days</p>
          </div>
          <div className="flex items-center space-x-3">
            <button className="px-3 py-1.5 text-xs font-medium bg-green-50 text-green-600 rounded-lg">
              7 Days
            </button>
            <button className="px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50 rounded-lg">
              30 Days
            </button>
            <button className="px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50 rounded-lg">
              90 Days
            </button>
          </div>
        </div>

        {/* Chart */}
        <div className="relative h-80 bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 border border-gray-100">
          {/* Price labels */}
          <div className="absolute right-8 top-6 bottom-6 w-16 flex flex-col justify-between text-xs text-gray-500">
            <span className="text-right">GH₵8k</span>
            <span className="text-right">GH₵7k</span>
            <span className="text-right">GH₵6k</span>
            <span className="text-right">GH₵5k</span>
            <span className="text-right">GH₵4k</span>
            <span className="text-right">GH₵3k</span>
            <span className="text-right">GH₵2k</span>
          </div>

          {/* Chart area */}
          <div className="h-full mr-24">
            {/* Grid lines */}
            <div className="absolute left-6 right-28 top-6 bottom-12 flex flex-col justify-between">
              {[...Array(7)].map((_, i) => (
                <div key={i} className="border-t border-gray-200"></div>
              ))}
            </div>

            {/* Candlesticks */}
            <div className="relative h-full flex items-end justify-around px-6 pb-10">
              {candlestickData.map((candle, index) => {
                const isPositive = candle.close >= candle.open;
                const bodyTop = Math.max(candle.open, candle.close);
                const bodyBottom = Math.min(candle.open, candle.close);
                const bodyHeight = Math.abs(candle.close - candle.open);
                const maxPrice = 8000;

                return (
                  <div key={candle.day} className="relative flex flex-col items-center group" style={{ width: '12%' }}>
                    {/* High-Low Line */}
                    <div
                      className={`w-0.5 ${isPositive ? 'bg-green-600' : 'bg-red-600'}`}
                      style={{
                        height: `${((candle.high - candle.low) / maxPrice) * 100}%`,
                        position: 'absolute',
                        bottom: `${(candle.low / maxPrice) * 100}%`,
                      }}
                    />

                    {/* Revenue Bar */}
                    <div
                      className={`w-full ${
                        isPositive
                          ? 'bg-gradient-to-t from-green-500 to-green-400 border border-green-600'
                          : 'bg-gradient-to-t from-red-500 to-red-400 border border-red-600'
                      } rounded hover:shadow-lg transition-all cursor-pointer relative`}
                      style={{
                        height: bodyHeight === 0 ? '3px' : `${(bodyHeight / maxPrice) * 100}%`,
                        position: 'absolute',
                        bottom: `${(bodyBottom / maxPrice) * 100}%`,
                        minHeight: '3px',
                      }}
                    >
                      {/* Hover Tooltip */}
                      <div className="opacity-0 group-hover:opacity-100 absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-4 py-3 bg-white border-2 border-gray-200 rounded-lg shadow-xl text-xs whitespace-nowrap z-10 transition-opacity">
                        <p className="font-semibold text-gray-900 mb-2 border-b border-gray-200 pb-2">{candle.day}</p>
                        <div className="text-gray-700 space-y-1.5">
                          <div className="flex justify-between space-x-4">
                            <span className="text-gray-500">Opening:</span>
                            <span className="font-semibold">GH₵ {candle.open.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between space-x-4">
                            <span className="text-gray-500">Peak:</span>
                            <span className="font-semibold text-green-600">GH₵ {candle.high.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between space-x-4">
                            <span className="text-gray-500">Low:</span>
                            <span className="font-semibold text-red-600">GH₵ {candle.low.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between space-x-4 pt-1.5 border-t border-gray-200">
                            <span className="text-gray-500">Closing:</span>
                            <span className={`font-bold ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                              GH₵ {candle.close.toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* X-axis labels */}
          <div className="absolute bottom-2 left-6 right-28 flex justify-around text-xs text-gray-600 font-medium">
            {candlestickData.map((candle) => (
              <span key={candle.day}>{candle.day}</span>
            ))}
          </div>
        </div>

        {/* Performance Summary */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-lg p-4 border border-blue-200">
            <p className="text-xs text-blue-600 font-medium mb-1">Week Opening</p>
            <p className="text-xl font-bold text-blue-900">GH₵ 3,000</p>
            <p className="text-xs text-blue-600 mt-1">Monday</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-lg p-4 border border-purple-200">
            <p className="text-xs text-purple-600 font-medium mb-1">Week Closing</p>
            <p className="text-xl font-bold text-purple-900">GH₵ 5,900</p>
            <p className="text-xs text-green-600 mt-1 font-medium">+96.7% growth</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-lg p-4 border border-green-200">
            <p className="text-xs text-green-600 font-medium mb-1">Peak Revenue</p>
            <p className="text-xl font-bold text-green-900">GH₵ 7,500</p>
            <p className="text-xs text-green-600 mt-1">Saturday</p>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-lg p-4 border border-orange-200">
            <p className="text-xs text-orange-600 font-medium mb-1">Average Daily</p>
            <p className="text-xl font-bold text-orange-900">GH₵ 5,171</p>
            <p className="text-xs text-orange-600 mt-1">per day</p>
          </div>
        </div>
      </div>

      {/* Two column layout */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent transactions */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl border border-gray-200">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Recent Transactions</h2>
              <Link
                href="/dashboard/transactions"
                className="text-sm text-green-600 hover:text-green-700 font-medium flex items-center space-x-1"
              >
                <span>View all</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="divide-y divide-gray-200">
              {recentTransactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="p-6 hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {/* Provider badge */}
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          transaction.provider === 'MTN'
                            ? 'bg-yellow-100'
                            : transaction.provider === 'Vodafone'
                            ? 'bg-red-100'
                            : 'bg-blue-100'
                        }`}
                      >
                        <span
                          className={`text-xs font-bold ${
                            transaction.provider === 'MTN'
                              ? 'text-yellow-700'
                              : transaction.provider === 'Vodafone'
                              ? 'text-red-700'
                              : 'text-blue-700'
                          }`}
                        >
                          {transaction.provider === 'MTN' ? 'MTN' : transaction.provider === 'Vodafone' ? 'VOD' : 'ATL'}
                        </span>
                      </div>

                      {/* Transaction details */}
                      <div>
                        <p className="font-medium text-gray-900">{transaction.customer}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <p className="text-sm text-gray-500">{transaction.id}</p>
                          <span className="text-gray-300">•</span>
                          <p className="text-sm text-gray-500">{transaction.time}</p>
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="font-semibold text-gray-900">
                        GH₵ {(transaction.amount / 100).toFixed(2)}
                      </p>
                      <div className="mt-1">
                        {transaction.status === 'success' && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Success
                          </span>
                        )}
                        {transaction.status === 'pending' && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            <Clock className="w-3 h-3 mr-1" />
                            Pending
                          </span>
                        )}
                        {transaction.status === 'failed' && (
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
          {/* Provider breakdown */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Payment Providers</h2>
            <div className="space-y-4">
              {providerStats.map((provider) => (
                <div key={provider.name}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-900">{provider.name}</span>
                    <span className="text-sm text-gray-600">{provider.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className={`${provider.color} h-full rounded-full transition-all duration-500`}
                      style={{ width: `${provider.percentage}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{provider.amount}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick actions */}
          <div className="bg-gradient-to-br from-green-600 to-green-400 rounded-xl p-6 text-white">
            <h3 className="text-lg font-semibold mb-2">Ready to go live?</h3>
            <p className="text-green-50 text-sm mb-4">
              You're currently in test mode. Switch to live mode to start accepting real payments.
            </p>
            <button className="w-full bg-white text-green-600 py-2.5 px-4 rounded-lg hover:bg-green-50 transition-colors font-semibold text-sm">
              Enable Live Mode
            </button>
          </div>

          {/* API status */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">System Status</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">API Status</span>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-green-600">Operational</span>
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
