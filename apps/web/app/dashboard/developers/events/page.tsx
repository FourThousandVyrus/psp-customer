'use client';

import { useState } from 'react';
import { Search, Filter, ChevronRight, CheckCircle, XCircle, Clock } from 'lucide-react';

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

  const events = [
    {
      id: 'evt_1',
      type: 'payment.succeeded',
      status: 'delivered',
      created: '2 minutes ago',
      data: {
        amount: 15000,
        currency: 'GHS',
        customer: '+233244567890',
        provider: 'MTN',
      },
    },
    {
      id: 'evt_2',
      type: 'payment.failed',
      status: 'delivered',
      created: '15 minutes ago',
      data: {
        amount: 5000,
        currency: 'GHS',
        customer: '+233201234567',
        provider: 'Vodafone',
      },
    },
    {
      id: 'evt_3',
      type: 'payment.pending',
      status: 'pending',
      created: '1 hour ago',
      data: {
        amount: 25000,
        currency: 'GHS',
        customer: '+233271234567',
        provider: 'AirtelTigo',
      },
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'failed':
        return <XCircle className="w-5 h-5 text-red-600" />;
      default:
        return <Clock className="w-5 h-5 text-orange-600" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Events</h1>
        <p className="text-gray-600 mt-1">View and inspect events from your account</p>
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
              placeholder="Search events by ID, type, or customer..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
          </div>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </button>
        </div>
      </div>

      {/* Events List */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Events List Column */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="px-4 py-3 border-b border-gray-200 bg-gray-50">
              <p className="text-sm font-medium text-gray-900">Recent Events</p>
            </div>
            <div className="divide-y divide-gray-200 max-h-[600px] overflow-y-auto">
              {events.map((event) => (
                <button
                  key={event.id}
                  onClick={() => setSelectedEvent(event.id)}
                  className={`w-full text-left p-4 hover:bg-gray-50 transition-colors ${
                    selectedEvent === event.id ? 'bg-blue-50 border-l-4 border-blue-600' : ''
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <code className="text-xs font-mono text-gray-600">{event.id}</code>
                    {getStatusIcon(event.status)}
                  </div>
                  <p className="text-sm font-medium text-gray-900 mb-1">{event.type}</p>
                  <p className="text-xs text-gray-500">{event.created}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Event Detail Column */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Event Details</h2>
            </div>
            {selectedEvent ? (
              <div className="p-6">
                {(() => {
                  const event = events.find((e) => e.id === selectedEvent);
                  if (!event) return null;
                  return (
                    <div className="space-y-6">
                      {/* Event Info */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Event ID</p>
                          <code className="text-sm font-mono text-gray-900">{event.id}</code>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Type</p>
                          <p className="text-sm font-medium text-gray-900">{event.type}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Status</p>
                          <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                            event.status === 'delivered'
                              ? 'bg-green-100 text-green-800'
                              : event.status === 'failed'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-orange-100 text-orange-800'
                          }`}>
                            {event.status}
                          </span>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Created</p>
                          <p className="text-sm text-gray-900">{event.created}</p>
                        </div>
                      </div>

                      {/* Event Data */}
                      <div>
                        <p className="text-sm font-semibold text-gray-900 mb-3">Event Data</p>
                        <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                          <pre className="text-xs text-green-400 font-mono">
{JSON.stringify({
  id: event.id,
  type: event.type,
  created: event.created,
  data: event.data,
}, null, 2)}
                          </pre>
                        </div>
                      </div>

                      {/* Webhook Deliveries */}
                      <div>
                        <p className="text-sm font-semibold text-gray-900 mb-3">Webhook Deliveries</p>
                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-600" />
                              <div>
                                <p className="text-sm font-medium text-gray-900">https://api.example.com/webhooks</p>
                                <p className="text-xs text-gray-500">Delivered successfully • 200 OK</p>
                              </div>
                            </div>
                            <ChevronRight className="w-5 h-5 text-gray-400" />
                          </div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex space-x-3 pt-4 border-t border-gray-200">
                        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700">
                          Resend event
                        </button>
                        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700">
                          Copy JSON
                        </button>
                      </div>
                    </div>
                  );
                })()}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 px-6">
                <Clock className="w-12 h-12 text-gray-400 mb-4" />
                <p className="text-gray-500 text-sm">Select an event to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
