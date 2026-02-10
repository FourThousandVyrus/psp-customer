'use client';

import { Save } from 'lucide-react';

export default function DeveloperSettingsPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Developer Settings</h1>
        <p className="text-gray-600 mt-1">Configure your developer preferences and integrations</p>
      </div>

      {/* Webhook Settings */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Webhook Configuration</h2>
          <p className="text-sm text-gray-600 mt-1">Set default webhook behavior</p>
        </div>
        <div className="p-6 space-y-4">
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                defaultChecked
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-3 text-sm font-medium text-gray-900">
                Retry failed webhook deliveries
              </span>
            </label>
            <p className="ml-7 text-sm text-gray-600">Automatically retry failed webhooks up to 3 times</p>
          </div>

          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                defaultChecked
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-3 text-sm font-medium text-gray-900">
                Include full event data
              </span>
            </label>
            <p className="ml-7 text-sm text-gray-600">Send complete event payload in webhook requests</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Webhook timeout (seconds)
            </label>
            <input
              type="number"
              defaultValue={10}
              className="block w-full max-w-xs px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <p className="mt-1 text-sm text-gray-600">Maximum time to wait for webhook response</p>
          </div>
        </div>
      </div>

      {/* API Settings */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">API Configuration</h2>
          <p className="text-sm text-gray-600 mt-1">Configure API behavior and limits</p>
        </div>
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              API Version
            </label>
            <select className="block w-full max-w-xs px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>2024-01-15 (Latest)</option>
              <option>2023-12-01</option>
              <option>2023-10-15</option>
            </select>
            <p className="mt-1 text-sm text-gray-600">Default API version for new requests</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Rate limit
            </label>
            <select className="block w-full max-w-xs px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>100 requests per minute</option>
              <option>500 requests per minute</option>
              <option>1000 requests per minute</option>
            </select>
            <p className="mt-1 text-sm text-gray-600">Maximum API requests allowed per minute</p>
          </div>

          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                defaultChecked
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-3 text-sm font-medium text-gray-900">
                Enable API request logging
              </span>
            </label>
            <p className="ml-7 text-sm text-gray-600">Log all API requests for debugging purposes</p>
          </div>
        </div>
      </div>

      {/* Security Settings */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Security</h2>
          <p className="text-sm text-gray-600 mt-1">Manage security preferences</p>
        </div>
        <div className="p-6 space-y-4">
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                defaultChecked
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-3 text-sm font-medium text-gray-900">
                Require webhook signature verification
              </span>
            </label>
            <p className="ml-7 text-sm text-gray-600">Use HMAC signatures to verify webhook authenticity</p>
          </div>

          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                defaultChecked
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-3 text-sm font-medium text-gray-900">
                IP allowlist enforcement
              </span>
            </label>
            <p className="ml-7 text-sm text-gray-600">Only allow API requests from whitelisted IP addresses</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Allowed IP addresses
            </label>
            <textarea
              rows={3}
              placeholder="192.168.1.1&#10;10.0.0.1"
              className="block w-full max-w-xl px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
            />
            <p className="mt-1 text-sm text-gray-600">One IP address per line</p>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
          <Save className="w-4 h-4 mr-2" />
          Save Changes
        </button>
      </div>
    </div>
  );
}
