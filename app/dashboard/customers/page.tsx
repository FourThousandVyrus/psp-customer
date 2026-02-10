'use client';

import { useState } from 'react';
import {
  Search,
  Filter,
  Download,
  Users,
  TrendingUp,
  DollarSign,
  ShoppingBag,
  Phone,
  Mail,
  Calendar,
  ArrowRight,
  ChevronDown,
  X,
  ExternalLink,
  Tag,
} from 'lucide-react';

// Mock customers data
const mockCustomers = [
  {
    id: 'cust_1',
    name: 'Kwame Mensah',
    phone: '+233 24 123 4567',
    email: 'kwame.mensah@email.com',
    totalSpent: 125000,
    transactionCount: 8,
    lastTransaction: '2026-02-04T10:30:00Z',
    firstTransaction: '2026-01-15T14:20:00Z',
    successRate: 100,
    preferredProvider: 'MTN',
    tags: ['VIP', 'Frequent'],
  },
  {
    id: 'cust_2',
    name: 'Ama Owusu',
    phone: '+233 20 987 6543',
    email: null,
    totalSpent: 89000,
    transactionCount: 5,
    lastTransaction: '2026-02-04T10:25:00Z',
    firstTransaction: '2026-01-20T09:15:00Z',
    successRate: 100,
    preferredProvider: 'Vodafone',
    tags: [],
  },
  {
    id: 'cust_3',
    name: 'Kofi Asante',
    phone: '+233 24 555 1234',
    email: 'kofi.asante@email.com',
    totalSpent: 67000,
    transactionCount: 12,
    lastTransaction: '2026-02-04T10:15:00Z',
    firstTransaction: '2026-01-10T11:30:00Z',
    successRate: 92,
    preferredProvider: 'MTN',
    tags: ['Frequent'],
  },
  {
    id: 'cust_4',
    name: 'Abena Boateng',
    phone: '+233 27 333 4444',
    email: 'abena.b@email.com',
    totalSpent: 156000,
    transactionCount: 6,
    lastTransaction: '2026-02-04T10:05:00Z',
    firstTransaction: '2026-01-25T16:45:00Z',
    successRate: 100,
    preferredProvider: 'AirtelTigo',
    tags: ['VIP'],
  },
  {
    id: 'cust_5',
    name: 'Yaw Appiah',
    phone: '+233 24 777 8888',
    email: null,
    totalSpent: 45000,
    transactionCount: 3,
    lastTransaction: '2026-02-04T10:00:00Z',
    firstTransaction: '2026-01-28T13:20:00Z',
    successRate: 67,
    preferredProvider: 'MTN',
    tags: [],
  },
  {
    id: 'cust_6',
    name: null,
    phone: '+233 20 111 2222',
    email: null,
    totalSpent: 23000,
    transactionCount: 2,
    lastTransaction: '2026-02-04T10:10:00Z',
    firstTransaction: '2026-02-01T08:30:00Z',
    successRate: 50,
    preferredProvider: 'Vodafone',
    tags: [],
  },
];

// Mock transaction history for selected customer
const mockTransactionHistory = [
  {
    id: 'txn_1',
    amount: 25000,
    status: 'success',
    provider: 'MTN',
    reference: 'ORDER-1001',
    date: '2026-02-04T10:30:00Z',
  },
  {
    id: 'txn_2',
    amount: 18000,
    status: 'success',
    provider: 'MTN',
    reference: 'ORDER-989',
    date: '2026-02-02T14:20:00Z',
  },
  {
    id: 'txn_3',
    amount: 32000,
    status: 'success',
    provider: 'MTN',
    reference: 'ORDER-945',
    date: '2026-01-30T09:15:00Z',
  },
];

export default function CustomersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState<any>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const formatAmount = (amount: number) => {
    return `GH₵ ${(amount / 100).toFixed(2)}`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  const getProviderColor = (provider: string) => {
    const colors = {
      MTN: 'text-yellow-700 bg-yellow-100',
      Vodafone: 'text-red-700 bg-red-100',
      AirtelTigo: 'text-blue-700 bg-blue-100',
    };
    return colors[provider as keyof typeof colors] || 'text-gray-700 bg-gray-100';
  };

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Customers</h1>
          <p className="text-gray-600 mt-1">Manage and view insights about your customers</p>
        </div>
        <div className="flex items-center gap-3">
          {/* View toggle */}
          <div className="hidden sm:flex items-center bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md ${
                viewMode === 'grid' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
              }`}
            >
              Grid
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md ${
                viewMode === 'list' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
              }`}
            >
              List
            </button>
          </div>
          <button className="inline-flex items-center justify-center px-4 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium">
            <Download className="w-4 h-4 mr-2" />
            Export
          </button>
        </div>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Customers</p>
              <p className="text-2xl font-bold text-gray-900">342</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">New This Month</p>
              <p className="text-2xl font-bold text-gray-900">28</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Avg. Spend</p>
              <p className="text-2xl font-bold text-gray-900">GH₵ 132</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Repeat Rate</p>
              <p className="text-2xl font-bold text-gray-900">67%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and filters */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search by name, phone, or email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
              />
            </div>
          </div>

          {/* Filter button (mobile) */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden inline-flex items-center justify-center px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm"
          >
            <Filter className="w-4 h-4 mr-2" />
            Filters
            <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </button>

          {/* Desktop filters */}
          <div className="hidden lg:flex items-center gap-3">
            <select className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm font-medium">
              <option value="all">All Customers</option>
              <option value="vip">VIP</option>
              <option value="frequent">Frequent</option>
              <option value="new">New</option>
            </select>

            <select className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm font-medium">
              <option value="all">All Time</option>
              <option value="month">This Month</option>
              <option value="week">This Week</option>
            </select>
          </div>
        </div>

        {/* Mobile filters */}
        {showFilters && (
          <div className="lg:hidden mt-4 pt-4 border-t border-gray-200 space-y-3">
            <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm font-medium">
              <option value="all">All Customers</option>
              <option value="vip">VIP</option>
              <option value="frequent">Frequent</option>
              <option value="new">New</option>
            </select>

            <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm font-medium">
              <option value="all">All Time</option>
              <option value="month">This Month</option>
              <option value="week">This Week</option>
            </select>
          </div>
        )}
      </div>

      {/* Grid view */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {mockCustomers.map((customer) => (
            <div
              key={customer.id}
              className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedCustomer(customer)}
            >
              {/* Customer header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {customer.name ? customer.name.charAt(0) : '?'}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {customer.name || 'Unknown Customer'}
                    </h3>
                    <p className="text-sm text-gray-500">{customer.phone}</p>
                  </div>
                </div>
                {customer.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {customer.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-xs text-gray-600">Total Spent</p>
                  <p className="text-lg font-bold text-gray-900">
                    {formatAmount(customer.totalSpent)}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-600">Transactions</p>
                  <p className="text-lg font-bold text-gray-900">{customer.transactionCount}</p>
                </div>
              </div>

              {/* Additional info */}
              <div className="space-y-2 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Success Rate</span>
                  <span className="font-medium text-gray-900">{customer.successRate}%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Preferred</span>
                  <span className={`px-2 py-0.5 rounded text-xs font-semibold ${getProviderColor(customer.preferredProvider)}`}>
                    {customer.preferredProvider}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Last Transaction</span>
                  <span className="text-gray-900">{formatDate(customer.lastTransaction)}</span>
                </div>
              </div>

              {/* View details link */}
              <button className="mt-4 w-full flex items-center justify-center space-x-2 text-sm font-medium text-green-600 hover:text-green-700">
                <span>View Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* List view */}
      {viewMode === 'list' && (
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Spent
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Transactions
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Success Rate
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Activity
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockCustomers.map((customer) => (
                <tr
                  key={customer.id}
                  className="hover:bg-gray-50 cursor-pointer transition-colors"
                  onClick={() => setSelectedCustomer(customer)}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-400 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">
                          {customer.name ? customer.name.charAt(0) : '?'}
                        </span>
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900">
                          {customer.name || 'Unknown'}
                        </div>
                        {customer.tags.length > 0 && (
                          <div className="flex gap-1 mt-1">
                            {customer.tags.map((tag) => (
                              <span
                                key={tag}
                                className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{customer.phone}</div>
                    <div className="text-sm text-gray-500">{customer.email || 'No email'}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-semibold text-gray-900">
                      {formatAmount(customer.totalSpent)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{customer.transactionCount}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{customer.successRate}%</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(customer.lastTransaction)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCustomer(customer);
                      }}
                      className="text-green-600 hover:text-green-900"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Customer detail modal */}
      {selectedCustomer && (
        <>
          <div
            className="fixed inset-0 bg-gray-900/50 z-40"
            onClick={() => setSelectedCustomer(null)}
          />
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <div className="relative bg-white rounded-xl shadow-xl max-w-4xl w-full">
                {/* Header */}
                <div className="flex items-start justify-between p-6 border-b border-gray-200">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-400 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">
                        {selectedCustomer.name ? selectedCustomer.name.charAt(0) : '?'}
                      </span>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        {selectedCustomer.name || 'Unknown Customer'}
                      </h2>
                      <p className="text-sm text-gray-500 mt-1">
                        Customer since {formatDate(selectedCustomer.firstTransaction)}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedCustomer(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="p-6">
                  {/* Stats grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-600 mb-1">Total Spent</p>
                      <p className="text-xl font-bold text-gray-900">
                        {formatAmount(selectedCustomer.totalSpent)}
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-600 mb-1">Transactions</p>
                      <p className="text-xl font-bold text-gray-900">
                        {selectedCustomer.transactionCount}
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-600 mb-1">Success Rate</p>
                      <p className="text-xl font-bold text-gray-900">{selectedCustomer.successRate}%</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-600 mb-1">Avg. Order</p>
                      <p className="text-xl font-bold text-gray-900">
                        {formatAmount(Math.round(selectedCustomer.totalSpent / selectedCustomer.transactionCount))}
                      </p>
                    </div>
                  </div>

                  {/* Contact info */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Information</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-900">{selectedCustomer.phone}</span>
                      </div>
                      {selectedCustomer.email && (
                        <div className="flex items-center space-x-3">
                          <Mail className="w-5 h-5 text-gray-400" />
                          <span className="text-gray-900">{selectedCustomer.email}</span>
                        </div>
                      )}
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-500">
                          Last transaction: {formatDate(selectedCustomer.lastTransaction)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Transaction history */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold text-gray-900">Recent Transactions</h3>
                      <button className="text-sm text-green-600 hover:text-green-700 font-medium flex items-center">
                        <span>View all</span>
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                    <div className="border border-gray-200 rounded-lg divide-y divide-gray-200">
                      {mockTransactionHistory.map((txn) => (
                        <div key={txn.id} className="p-4 hover:bg-gray-50">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                                txn.provider === 'MTN' ? 'bg-yellow-100' :
                                txn.provider === 'Vodafone' ? 'bg-red-100' : 'bg-blue-100'
                              }`}>
                                <span className={`text-xs font-bold ${
                                  txn.provider === 'MTN' ? 'text-yellow-700' :
                                  txn.provider === 'Vodafone' ? 'text-red-700' : 'text-blue-700'
                                }`}>
                                  {txn.provider === 'MTN' ? 'MTN' : txn.provider === 'Vodafone' ? 'VOD' : 'ATL'}
                                </span>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-900">{txn.reference}</p>
                                <p className="text-xs text-gray-500">{formatDate(txn.date)}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-semibold text-gray-900">
                                {formatAmount(txn.amount)}
                              </p>
                              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                                Success
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
