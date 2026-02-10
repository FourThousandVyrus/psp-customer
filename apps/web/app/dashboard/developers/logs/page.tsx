'use client';

import { useState } from 'react';
import { Search, Filter, CheckCircle, XCircle, AlertCircle, ChevronDown } from 'lucide-react';

export default function LogsPage() {
  const [selectedLog, setSelectedLog] = useState<string | null>(null);

  const logs = [
    {
      id: 'req_1',
      method: 'POST',
      endpoint: '/v1/payments',
      status: 200,
      duration: '124ms',
      timestamp: '2 minutes ago',
      ip: '192.168.1.1',
    },
    {
      id: 'req_2',
      method: 'GET',
      endpoint: '/v1/customers/cus_123',
      status: 200,
      duration: '89ms',
      timestamp: '5 minutes ago',
      ip: '192.168.1.1',
    },
    {
      id: 'req_3',
      method: 'POST',
      endpoint: '/v1/payments',
      status: 400,
      duration: '45ms',
      timestamp: '12 minutes ago',
      ip: '192.168.1.2',
    },
    {
      id: 'req_4',
      method: 'GET',
      endpoint: '/v1/transactions',
      status: 200,
      duration: '156ms',
      timestamp: '18 minutes ago',
      ip: '192.168.1.1',
    },
    {
      id: 'req_5',
      method: 'POST',
      endpoint: '/v1/refunds',
      status: 500,
      duration: '234ms',
      timestamp: '25 minutes ago',
      ip: '192.168.1.3',
    },
  ];

  const getStatusBadge = (status: number) => {
    if (status >= 200 && status < 300) {
      return (
        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
          <CheckCircle className="w-3 h-3 mr-1" />
          {status}
        </span>
      );
    } else if (status >= 400 && status < 500) {
      return (
        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-orange-100 text-orange-800">
          <AlertCircle className="w-3 h-3 mr-1" />
          {status}
        </span>
      );
    } else {
      return (
        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
          <XCircle className="w-3 h-3 mr-1" />
          {status}
        </span>
      );
    }
  };

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'GET':
        return 'text-blue-600 bg-blue-50';
      case 'POST':
        return 'text-green-600 bg-green-50';
      case 'PUT':
        return 'text-orange-600 bg-orange-50';
      case 'DELETE':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">API Logs</h1>
        <p className="text-gray-600 mt-1">Monitor and debug your API requests</p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by request ID, endpoint, or IP..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
          </div>
          <div className="flex gap-2">
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700">
              <Filter className="w-4 h-4 mr-2" />
              Method
            </button>
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700">
              <Filter className="w-4 h-4 mr-2" />
              Status
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <p className="text-sm text-gray-600 mb-1">Total Requests</p>
          <p className="text-2xl font-bold text-gray-900">1,247</p>
          <p className="text-xs text-green-600 mt-1">+12% from yesterday</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <p className="text-sm text-gray-600 mb-1">Success Rate</p>
          <p className="text-2xl font-bold text-gray-900">98.2%</p>
          <p className="text-xs text-green-600 mt-1">+0.5% improvement</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <p className="text-sm text-gray-600 mb-1">Avg Response Time</p>
          <p className="text-2xl font-bold text-gray-900">124ms</p>
          <p className="text-xs text-green-600 mt-1">-15ms faster</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <p className="text-sm text-gray-600 mb-1">Error Rate</p>
          <p className="text-2xl font-bold text-gray-900">1.8%</p>
          <p className="text-xs text-red-600 mt-1">+0.3% increase</p>
        </div>
      </div>

      {/* Logs Table */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Request Logs</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Request ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Method
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Endpoint
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Duration
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Timestamp
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {logs.map((log) => (
                <tr key={log.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <code className="text-xs font-mono text-gray-600">{log.id}</code>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getMethodColor(log.method)}`}>
                      {log.method}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <code className="text-sm text-gray-900">{log.endpoint}</code>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(log.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {log.duration}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {log.timestamp}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button
                      onClick={() => setSelectedLog(log.id)}
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
