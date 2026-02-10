'use client';

import Link from 'next/link';
import { Book, Code2, Key, Webhook, Terminal, ExternalLink, ArrowUpRight, TrendingUp } from 'lucide-react';

export default function DevelopersOverviewPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Developer Overview</h1>
        <p className="text-gray-600 mt-1">Get started with Links Payments integration</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">API Requests</p>
            <TrendingUp className="w-4 h-4 text-green-600" />
          </div>
          <p className="text-2xl font-bold text-gray-900">12,847</p>
          <p className="text-xs text-green-600 mt-1">+18% this week</p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Success Rate</p>
            <ArrowUpRight className="w-4 h-4 text-green-600" />
          </div>
          <p className="text-2xl font-bold text-gray-900">99.2%</p>
          <p className="text-xs text-green-600 mt-1">+0.5% improvement</p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Active Keys</p>
            <Key className="w-4 h-4 text-blue-600" />
          </div>
          <p className="text-2xl font-bold text-gray-900">2</p>
          <p className="text-xs text-gray-600 mt-1">Test & Live</p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Webhooks</p>
            <Webhook className="w-4 h-4 text-purple-600" />
          </div>
          <p className="text-2xl font-bold text-gray-900">3</p>
          <p className="text-xs text-gray-600 mt-1">All active</p>
        </div>
      </div>

      {/* Getting Started */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-3">Get Started with Links Payments</h2>
        <p className="text-blue-100 mb-6 max-w-2xl">
          Integrate mobile money payments into your application in minutes. Follow our step-by-step guide
          or explore our comprehensive API documentation.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
          >
            <Book className="w-4 h-4 mr-2" />
            View Documentation
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
          <Link
            href="/dashboard/settings/api-keys"
            className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg hover:bg-white/20 transition-colors font-medium"
          >
            <Key className="w-4 h-4 mr-2" />
            Get API Keys
          </Link>
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Documentation */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Documentation</h2>
          </div>
          <div className="p-6 space-y-3">
            <a
              href="#"
              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <Code2 className="w-5 h-5 text-gray-600" />
                <div>
                  <p className="text-sm font-medium text-gray-900">API Reference</p>
                  <p className="text-xs text-gray-600">Complete endpoint documentation</p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400" />
            </a>

            <a
              href="#"
              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <Book className="w-5 h-5 text-gray-600" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Integration Guides</p>
                  <p className="text-xs text-gray-600">Step-by-step tutorials</p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400" />
            </a>

            <a
              href="#"
              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <Terminal className="w-5 h-5 text-gray-600" />
                <div>
                  <p className="text-sm font-medium text-gray-900">SDKs & Libraries</p>
                  <p className="text-xs text-gray-600">Client libraries for popular languages</p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400" />
            </a>
          </div>
        </div>

        {/* Tools */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Developer Tools</h2>
          </div>
          <div className="p-6 space-y-3">
            <Link
              href="/dashboard/developers/webhooks"
              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <Webhook className="w-5 h-5 text-gray-600" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Webhooks</p>
                  <p className="text-xs text-gray-600">Configure event notifications</p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-gray-400" />
            </Link>

            <Link
              href="/dashboard/developers/logs"
              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <Terminal className="w-5 h-5 text-gray-600" />
                <div>
                  <p className="text-sm font-medium text-gray-900">API Logs</p>
                  <p className="text-xs text-gray-600">Debug requests and responses</p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-gray-400" />
            </Link>

            <Link
              href="/dashboard/developers/events"
              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <Code2 className="w-5 h-5 text-gray-600" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Events</p>
                  <p className="text-xs text-gray-600">View and replay events</p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-gray-400" />
            </Link>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Recent API Activity</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-gray-200">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">POST /v1/payments</p>
                  <p className="text-xs text-gray-600">2 minutes ago • 200 OK</p>
                </div>
              </div>
              <span className="text-xs text-gray-500">124ms</span>
            </div>

            <div className="flex items-center justify-between py-3 border-b border-gray-200">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">GET /v1/customers</p>
                  <p className="text-xs text-gray-600">5 minutes ago • 200 OK</p>
                </div>
              </div>
              <span className="text-xs text-gray-500">89ms</span>
            </div>

            <div className="flex items-center justify-between py-3">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">POST /v1/refunds</p>
                  <p className="text-xs text-gray-600">12 minutes ago • 200 OK</p>
                </div>
              </div>
              <span className="text-xs text-gray-500">156ms</span>
            </div>
          </div>

          <Link
            href="/dashboard/developers/logs"
            className="block text-center mt-4 pt-4 border-t border-gray-200 text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            View all logs →
          </Link>
        </div>
      </div>
    </div>
  );
}
