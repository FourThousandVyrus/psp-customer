'use client';

import Link from 'next/link';
import { Code2, Webhook, Calendar, FileText, Terminal, Key, Layers, Book, ExternalLink } from 'lucide-react';

export default function DevelopersPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Developers</h1>
        <p className="text-gray-600 mt-1">Build and manage your integration with Links Payments</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Key className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-xs font-medium text-gray-500 uppercase">Active</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">2</p>
          <p className="text-sm text-gray-600 mt-1">API Keys</p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Webhook className="w-6 h-6 text-green-600" />
            </div>
            <span className="text-xs font-medium text-gray-500 uppercase">Configured</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">3</p>
          <p className="text-sm text-gray-600 mt-1">Webhooks</p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-purple-600" />
            </div>
            <span className="text-xs font-medium text-gray-500 uppercase">Last 30 days</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">1,247</p>
          <p className="text-sm text-gray-600 mt-1">API Requests</p>
        </div>
      </div>

      {/* Workbench */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Workbench</h2>
          <p className="text-sm text-gray-600 mt-1">Tools for testing and debugging your integration</p>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/dashboard/developers/webhooks"
              className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
            >
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Webhook className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Webhooks</h3>
                <p className="text-sm text-gray-600 mt-1">Configure and test webhook endpoints</p>
              </div>
            </Link>

            <Link
              href="/dashboard/developers/events"
              className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
            >
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Calendar className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Events</h3>
                <p className="text-sm text-gray-600 mt-1">View and replay event history</p>
              </div>
            </Link>

            <Link
              href="/dashboard/developers/logs"
              className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
            >
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Logs</h3>
                <p className="text-sm text-gray-600 mt-1">Debug API requests and responses</p>
              </div>
            </Link>

            <Link
              href="/dashboard/settings/api-keys"
              className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
            >
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Key className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">API Keys</h3>
                <p className="text-sm text-gray-600 mt-1">Manage your API credentials</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Documentation */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Documentation</h2>
          <p className="text-sm text-gray-600 mt-1">Get started with our APIs and SDKs</p>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="#"
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <Book className="w-5 h-5 text-gray-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">API Reference</h3>
                  <p className="text-sm text-gray-600">Complete API documentation</p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400" />
            </a>

            <a
              href="#"
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <Code2 className="w-5 h-5 text-gray-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">SDKs</h3>
                  <p className="text-sm text-gray-600">Client libraries for popular languages</p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400" />
            </a>

            <a
              href="#"
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <Layers className="w-5 h-5 text-gray-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Links.js</h3>
                  <p className="text-sm text-gray-600">JavaScript library for web integration</p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400" />
            </a>

            <a
              href="#"
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <Terminal className="w-5 h-5 text-gray-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">CLI</h3>
                  <p className="text-sm text-gray-600">Command-line interface tools</p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
