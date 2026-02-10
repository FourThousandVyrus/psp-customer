'use client';

import { useState } from 'react';
import { Plus, Webhook, MoreVertical, Check, X, ExternalLink, Copy } from 'lucide-react';

export default function WebhooksPage() {
  const [showAddModal, setShowAddModal] = useState(false);

  const webhooks = [
    {
      id: '1',
      url: 'https://api.example.com/webhooks/links-payments',
      events: ['payment.succeeded', 'payment.failed', 'refund.updated'],
      status: 'active',
      lastDelivery: '2 minutes ago',
    },
    {
      id: '2',
      url: 'https://staging.example.com/webhooks',
      events: ['payment.succeeded'],
      status: 'active',
      lastDelivery: '1 hour ago',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Webhooks</h1>
          <p className="text-gray-600 mt-1">Receive real-time notifications about events in your account</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add endpoint
        </button>
      </div>

      {/* Info Banner */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <Webhook className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-gray-900 mb-1">Webhook endpoints</p>
            <p className="text-sm text-gray-700">
              Webhooks allow you to be notified when certain events happen. Each endpoint can listen to specific event types.
            </p>
            <a href="#" className="text-sm text-blue-600 hover:text-blue-700 font-medium mt-2 inline-flex items-center">
              Learn more about webhooks
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Webhooks List */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Endpoints</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {webhooks.map((webhook) => (
            <div key={webhook.id} className="p-6 hover:bg-gray-50">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <code className="text-sm font-mono text-gray-900 bg-gray-100 px-2 py-1 rounded">
                      {webhook.url}
                    </code>
                    <button className="text-gray-400 hover:text-gray-600">
                      <Copy className="w-4 h-4" />
                    </button>
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                      webhook.status === 'active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {webhook.status === 'active' ? (
                        <>
                          <Check className="w-3 h-3 mr-1" />
                          Active
                        </>
                      ) : (
                        'Inactive'
                      )}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span>Last delivery: {webhook.lastDelivery}</span>
                    <span>•</span>
                    <span>{webhook.events.length} events</span>
                  </div>
                </div>
                <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {webhook.events.map((event) => (
                  <span key={event} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded font-mono">
                    {event}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Event Types Reference */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Available event types</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <code className="text-sm font-mono text-blue-600">payment.succeeded</code>
              <p className="text-sm text-gray-600 mt-2">Occurs when a payment is successfully completed</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <code className="text-sm font-mono text-blue-600">payment.failed</code>
              <p className="text-sm text-gray-600 mt-2">Occurs when a payment attempt fails</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <code className="text-sm font-mono text-blue-600">payment.pending</code>
              <p className="text-sm text-gray-600 mt-2">Occurs when a payment is awaiting processing</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <code className="text-sm font-mono text-blue-600">refund.updated</code>
              <p className="text-sm text-gray-600 mt-2">Occurs when a refund status changes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
