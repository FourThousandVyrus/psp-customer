'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Key, Plus, Copy, Eye, EyeOff, MoreVertical, AlertCircle, ArrowLeft } from 'lucide-react';

export default function ApiKeysPage() {
  const [showTestKey, setShowTestKey] = useState(false);
  const [showLiveKey, setShowLiveKey] = useState(false);

  const apiKeys = [
    {
      id: '1',
      name: 'Test Key',
      key: 'sk_test_51Abc...XYZ123',
      created: '2 months ago',
      lastUsed: '5 minutes ago',
      type: 'test',
    },
    {
      id: '2',
      name: 'Live Key',
      key: 'sk_live_51Def...ABC456',
      created: '1 month ago',
      lastUsed: '2 days ago',
      type: 'live',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <div className="pt-6 pb-8">
        <Link
          href="/dashboard/settings"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border-2 border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-colors shadow-sm"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Settings
        </Link>
      </div>

      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">API Keys</h1>
        <p className="text-gray-600 mt-1">Manage your API credentials and access tokens</p>
      </div>

      {/* Warning Banner */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start space-x-3">
        <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-medium text-yellow-900">Keep your API keys secure</p>
          <p className="text-sm text-yellow-700 mt-1">
            Never share your API keys publicly or commit them to version control. Anyone with your keys can access your account.
          </p>
        </div>
      </div>

      {/* API Keys List */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Your API Keys</h2>
            <p className="text-sm text-gray-600 mt-1">Use these keys to authenticate API requests</p>
          </div>
          <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
            <Plus className="w-4 h-4 mr-2" />
            Create new key
          </button>
        </div>

        <div className="divide-y divide-gray-200">
          {apiKeys.map((apiKey) => (
            <div key={apiKey.id} className="p-6 hover:bg-gray-50">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    apiKey.type === 'test' ? 'bg-blue-100' : 'bg-green-100'
                  }`}>
                    <Key className={`w-5 h-5 ${
                      apiKey.type === 'test' ? 'text-blue-600' : 'text-green-600'
                    }`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{apiKey.name}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                        apiKey.type === 'test'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {apiKey.type === 'test' ? 'Test Mode' : 'Live Mode'}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>

              <div className="bg-gray-50 rounded-lg p-3 mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 flex-1">
                    <code className="text-sm font-mono text-gray-900">
                      {(apiKey.type === 'test' && showTestKey) || (apiKey.type === 'live' && showLiveKey)
                        ? apiKey.key
                        : '••••••••••••••••••••••••••••'}
                    </code>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => {
                        if (apiKey.type === 'test') setShowTestKey(!showTestKey);
                        else setShowLiveKey(!showLiveKey);
                      }}
                      className="p-2 text-gray-400 hover:text-gray-600 hover:bg-white rounded transition-colors"
                    >
                      {((apiKey.type === 'test' && showTestKey) || (apiKey.type === 'live' && showLiveKey)) ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-white rounded transition-colors">
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Created</p>
                  <p className="font-medium text-gray-900 mt-0.5">{apiKey.created}</p>
                </div>
                <div>
                  <p className="text-gray-500">Last used</p>
                  <p className="font-medium text-gray-900 mt-0.5">{apiKey.lastUsed}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Documentation */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Getting Started</h2>
        <p className="text-sm text-gray-600 mb-4">
          Use your API keys to authenticate requests to the Links Payments API. Include the key in the Authorization header:
        </p>
        <div className="bg-gray-900 rounded-lg p-4">
          <code className="text-sm text-green-400 font-mono">
            curl https://api.linkspay.com/v1/payments \<br />
            &nbsp;&nbsp;-H "Authorization: Bearer YOUR_API_KEY"
          </code>
        </div>
        <a
          href="#"
          className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 mt-4"
        >
          View full API documentation →
        </a>
      </div>
    </div>
  );
}
