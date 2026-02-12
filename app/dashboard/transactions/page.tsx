'use client';

import { useState } from 'react';
import {
  Search,
  Filter,
  Download,
  ChevronDown,
  CheckCircle,
  Clock,
  XCircle,
  RefreshCw,
  ExternalLink,
  Copy,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

// Mock transactions data
const mockTransactions = [
  {
    id: 'txn_1a2b3c4d',
    customer: { phone: '+233 24 123 4567', name: 'Kwame Mensah' },
    amount: 25000,
    status: 'success',
    provider: 'MTN',
    reference: 'ORDER-1001',
    createdAt: '2026-02-04T10:30:00Z',
  },
  {
    id: 'txn_2b3c4d5e',
    customer: { phone: '+233 20 987 6543', name: 'Ama Owusu' },
    amount: 18000,
    status: 'success',
    provider: 'Vodafone',
    reference: 'ORDER-1002',
    createdAt: '2026-02-04T10:25:00Z',
  },
  {
    id: 'txn_3c4d5e6f',
    customer: { phone: '+233 27 456 7890', name: null },
    amount: 50000,
    status: 'success',
    provider: 'AirtelTigo',
    reference: 'ORDER-1003',
    createdAt: '2026-02-04T10:20:00Z',
  },
  {
    id: 'txn_4d5e6f7g',
    customer: { phone: '+233 24 555 1234', name: 'Kofi Asante' },
    amount: 12000,
    status: 'pending',
    provider: 'MTN',
    reference: 'ORDER-1004',
    createdAt: '2026-02-04T10:15:00Z',
  },
  {
    id: 'txn_5e6f7g8h',
    customer: { phone: '+233 20 111 2222', name: null },
    amount: 8000,
    status: 'failed',
    provider: 'Vodafone',
    reference: 'ORDER-1005',
    createdAt: '2026-02-04T10:10:00Z',
  },
  {
    id: 'txn_6f7g8h9i',
    customer: { phone: '+233 27 333 4444', name: 'Abena Boateng' },
    amount: 35000,
    status: 'success',
    provider: 'AirtelTigo',
    reference: 'ORDER-1006',
    createdAt: '2026-02-04T10:05:00Z',
  },
  {
    id: 'txn_7g8h9i0j',
    customer: { phone: '+233 24 777 8888', name: 'Yaw Appiah' },
    amount: 22000,
    status: 'success',
    provider: 'MTN',
    reference: 'ORDER-1007',
    createdAt: '2026-02-04T10:00:00Z',
  },
  {
    id: 'txn_8h9i0j1k',
    customer: { phone: '+233 20 999 0000', name: null },
    amount: 15000,
    status: 'pending',
    provider: 'Vodafone',
    reference: 'ORDER-1008',
    createdAt: '2026-02-04T09:55:00Z',
  },
];

export default function TransactionsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [providerFilter, setProviderFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState<any>(null);

  const formatAmount = (amount: number) => {
    return `GH₵ ${(amount / 100).toFixed(2)}`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);

    if (minutes < 60) return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    if (hours < 24) return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'success':
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <CheckCircle className="w-3 h-3 mr-1" />
            Success
          </span>
        );
      case 'pending':
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            <Clock className="w-3 h-3 mr-1" />
            Pending
          </span>
        );
      case 'failed':
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
            <XCircle className="w-3 h-3 mr-1" />
            Failed
          </span>
        );
      default:
        return null;
    }
  };

  const getProviderBadge = (provider: string) => {
    const config = {
      MTN: { bg: 'bg-yellow-100', text: 'text-yellow-700', label: 'MTN' },
      Vodafone: { bg: 'bg-red-100', text: 'text-red-700', label: 'VOD' },
      AirtelTigo: { bg: 'bg-blue-100', text: 'text-blue-700', label: 'ATL' },
    }[provider] || { bg: 'bg-gray-100', text: 'text-gray-700', label: provider };

    return (
      <span className={`inline-flex items-center justify-center px-2 py-1 rounded text-xs font-semibold ${config.bg} ${config.text}`}>
        {config.label}
      </span>
    );
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // TODO: Show toast notification
  };

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Transactions</h1>
          <p className="text-gray-600 mt-1">View and manage all your payment transactions</p>
        </div>
        <button className="inline-flex items-center justify-center px-4 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium">
          <Download className="w-4 h-4 mr-2" />
          Export
        </button>
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <p className="text-sm text-gray-600">Total Transactions</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">1,247</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <p className="text-sm text-gray-600">Successful</p>
          <p className="text-2xl font-bold text-green-600 mt-1">1,175</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <p className="text-sm text-gray-600">Pending</p>
          <p className="text-2xl font-bold text-yellow-600 mt-1">48</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <p className="text-sm text-gray-600">Failed</p>
          <p className="text-2xl font-bold text-red-600 mt-1">24</p>
        </div>
      </div>

      {/* Filters */}
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
                placeholder="Search by phone, reference, or transaction ID..."
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
            {/* Status filter */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm font-medium"
            >
              <option value="all">All Status</option>
              <option value="success">Success</option>
              <option value="pending">Pending</option>
              <option value="failed">Failed</option>
            </select>

            {/* Provider filter */}
            <select
              value={providerFilter}
              onChange={(e) => setProviderFilter(e.target.value)}
              className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm font-medium"
            >
              <option value="all">All Providers</option>
              <option value="MTN">MTN</option>
              <option value="Vodafone">Vodafone</option>
              <option value="AirtelTigo">AirtelTigo</option>
            </select>

            {/* Date range */}
            <select className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm font-medium">
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="custom">Custom Range</option>
            </select>
          </div>
        </div>

        {/* Mobile filters (collapsible) */}
        {showFilters && (
          <div className="lg:hidden mt-4 pt-4 border-t border-gray-200 space-y-3">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm font-medium"
            >
              <option value="all">All Status</option>
              <option value="success">Success</option>
              <option value="pending">Pending</option>
              <option value="failed">Failed</option>
            </select>

            <select
              value={providerFilter}
              onChange={(e) => setProviderFilter(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm font-medium"
            >
              <option value="all">All Providers</option>
              <option value="MTN">MTN</option>
              <option value="Vodafone">Vodafone</option>
              <option value="AirtelTigo">AirtelTigo</option>
            </select>

            <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm font-medium">
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="custom">Custom Range</option>
            </select>
          </div>
        )}
      </div>

      {/* Transactions table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        {/* Desktop table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Transaction
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Provider
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockTransactions.map((transaction) => (
                <tr
                  key={transaction.id}
                  className="hover:bg-gray-50 cursor-pointer transition-colors"
                  onClick={() => setSelectedTransaction(transaction)}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{transaction.id}</div>
                        <div className="text-sm text-gray-500">{transaction.reference}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{transaction.customer.name || 'Unknown'}</div>
                    <div className="text-sm text-gray-500">{transaction.customer.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getProviderBadge(transaction.provider)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-semibold text-gray-900">
                      {formatAmount(transaction.amount)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(transaction.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(transaction.createdAt)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedTransaction(transaction);
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

        {/* Mobile list */}
        <div className="md:hidden divide-y divide-gray-200">
          {mockTransactions.map((transaction) => (
            <div
              key={transaction.id}
              className="p-4 hover:bg-gray-50 cursor-pointer"
              onClick={() => setSelectedTransaction(transaction)}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{transaction.customer.name || transaction.customer.phone}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{transaction.id}</p>
                </div>
                {getStatusBadge(transaction.status)}
              </div>
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center space-x-3">
                  {getProviderBadge(transaction.provider)}
                  <span className="text-sm font-semibold text-gray-900">
                    {formatAmount(transaction.amount)}
                  </span>
                </div>
                <span className="text-xs text-gray-500">
                  {formatDate(transaction.createdAt)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="bg-white rounded-lg border border-gray-200 px-4 py-3 flex items-center justify-between">
        <div className="flex-1 flex justify-between sm:hidden">
          <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            Previous
          </button>
          <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            Next
          </button>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to <span className="font-medium">8</span> of{' '}
              <span className="font-medium">1,247</span> results
            </p>
          </div>
          <div>
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
              <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-green-50 text-sm font-medium text-green-600">
                1
              </button>
              <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                2
              </button>
              <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                3
              </button>
              <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <ChevronRight className="h-5 w-5" />
              </button>
            </nav>
          </div>
        </div>
      </div>

      {/* Transaction detail modal */}
      {selectedTransaction && (
        <>
          <div
            className="fixed inset-0 bg-gray-900/50 z-40"
            onClick={() => setSelectedTransaction(null)}
          />
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <div className="relative bg-white rounded-xl shadow-xl max-w-2xl w-full p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Transaction Details</h2>
                    <p className="text-sm text-gray-500 mt-1">{selectedTransaction.id}</p>
                  </div>
                  <button
                    onClick={() => setSelectedTransaction(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <XCircle className="w-6 h-6" />
                  </button>
                </div>

                {/* Status */}
                <div className="mb-6">
                  {getStatusBadge(selectedTransaction.status)}
                </div>

                {/* Details grid */}
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Amount</p>
                      <p className="text-lg font-semibold text-gray-900 mt-1">
                        {formatAmount(selectedTransaction.amount)}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Provider</p>
                      <div className="mt-1">
                        {getProviderBadge(selectedTransaction.provider)}
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600">Customer</p>
                    <p className="text-base font-medium text-gray-900 mt-1">
                      {selectedTransaction.customer.name || 'Unknown'}
                    </p>
                    <p className="text-sm text-gray-500">{selectedTransaction.customer.phone}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600">Reference</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <p className="text-base font-mono text-gray-900">{selectedTransaction.reference}</p>
                      <button
                        onClick={() => copyToClipboard(selectedTransaction.reference)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600">Transaction ID</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <p className="text-base font-mono text-gray-900">{selectedTransaction.id}</p>
                      <button
                        onClick={() => copyToClipboard(selectedTransaction.id)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600">Date & Time</p>
                    <p className="text-base text-gray-900 mt-1">
                      {new Date(selectedTransaction.createdAt).toLocaleString('en-GB', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-6 pt-6 border-t border-gray-200 flex flex-col sm:flex-row gap-3">
                  <button className="flex-1 inline-flex items-center justify-center px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Retry Payment
                  </button>
                  <button className="flex-1 inline-flex items-center justify-center px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Receipt
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
