'use client';

import { Plus, Layers, MoreVertical, Key, ExternalLink } from 'lucide-react';

export default function AppsPage() {
  const apps = [
    {
      id: '1',
      name: 'E-commerce Integration',
      description: 'Main payment integration for our online store',
      created: '2 months ago',
      apiCalls: '12.4K',
      status: 'active',
    },
    {
      id: '2',
      name: 'Mobile App',
      description: 'Payment processing for iOS and Android apps',
      created: '1 month ago',
      apiCalls: '8.2K',
      status: 'active',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Created Apps</h1>
          <p className="text-gray-600 mt-1">Manage your integrated applications</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
          <Plus className="w-4 h-4 mr-2" />
          Create app
        </button>
      </div>

      {/* Apps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {apps.map((app) => (
          <div key={app.id} className="bg-white rounded-lg border border-gray-200 hover:border-blue-500 transition-colors">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Layers className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{app.name}</h3>
                    <p className="text-sm text-gray-500">Created {app.created}</p>
                  </div>
                </div>
                <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>

              <p className="text-sm text-gray-600 mb-6">{app.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500 mb-1">API Calls (30d)</p>
                  <p className="text-lg font-bold text-gray-900">{app.apiCalls}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500 mb-1">Status</p>
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                    {app.status}
                  </span>
                </div>
              </div>

              <div className="flex space-x-3 pt-4 border-t border-gray-200">
                <button className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700 flex items-center justify-center">
                  <Key className="w-4 h-4 mr-2" />
                  API Keys
                </button>
                <button className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700 flex items-center justify-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State for more apps */}
      <div className="bg-white rounded-lg border-2 border-dashed border-gray-300 p-12 text-center">
        <Layers className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Create another app</h3>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          Set up a new application integration to manage API keys and configurations separately
        </p>
        <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
          <Plus className="w-4 h-4 mr-2" />
          Create app
        </button>
      </div>
    </div>
  );
}
