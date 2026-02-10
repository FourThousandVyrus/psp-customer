'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Plus, MoreVertical, Shield, Users, Key, Smartphone, Globe, Lock, AlertTriangle, ArrowLeft } from 'lucide-react';

export default function TeamSecurityPage() {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);

  const teamMembers = [
    {
      id: '1',
      name: 'Demo Merchant',
      email: 'demo@merchant.com',
      role: 'Owner',
      status: 'Active',
      lastActive: '2 minutes ago',
    },
    {
      id: '2',
      name: 'John Doe',
      email: 'john@merchant.com',
      role: 'Admin',
      status: 'Active',
      lastActive: '1 hour ago',
    },
    {
      id: '3',
      name: 'Jane Smith',
      email: 'jane@merchant.com',
      role: 'Developer',
      status: 'Active',
      lastActive: '3 days ago',
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
        <h1 className="text-2xl font-bold text-gray-900">Team and security</h1>
        <p className="text-gray-600 mt-1">Manage team members, roles, and account security settings</p>
      </div>

      {/* Team Members Section */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Team members</h2>
            <p className="text-sm text-gray-600 mt-1">Invite and manage team members</p>
          </div>
          <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
            <Plus className="w-4 h-4 mr-2" />
            Invite member
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last active
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {teamMembers.map((member) => (
                <tr key={member.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-semibold text-sm">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{member.name}</div>
                        <div className="text-sm text-gray-500">{member.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {member.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {member.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {member.lastActive}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Security Settings Section */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Security settings</h2>
          <p className="text-sm text-gray-600 mt-1">Manage your account security and authentication</p>
        </div>

        <div className="p-6 space-y-6">
          {/* Two-Factor Authentication */}
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Smartphone className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900">Two-factor authentication</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Add an extra layer of security to your account using an authenticator app.
                </p>
                {twoFactorEnabled && (
                  <div className="mt-2 flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-green-600" />
                    <span className="text-xs font-medium text-green-600">Enabled via Authenticator App</span>
                  </div>
                )}
              </div>
            </div>
            <button
              onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                twoFactorEnabled
                  ? 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {twoFactorEnabled ? 'Manage' : 'Enable'}
            </button>
          </div>

          <div className="border-t border-gray-200"></div>

          {/* Password */}
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Key className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900">Password</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Last changed 3 months ago. We recommend changing your password every 90 days.
                </p>
              </div>
            </div>
            <button className="px-4 py-2 text-sm font-medium border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              Change password
            </button>
          </div>

          <div className="border-t border-gray-200"></div>

          {/* Active Sessions */}
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Globe className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900">Active sessions</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Manage and log out your active sessions on other devices.
                </p>
                <p className="text-xs text-gray-500 mt-2">2 active sessions</p>
              </div>
            </div>
            <button className="px-4 py-2 text-sm font-medium border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              View sessions
            </button>
          </div>

          <div className="border-t border-gray-200"></div>

          {/* Authorized Apps */}
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Lock className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900">Authorized applications</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Third-party applications with access to your account.
                </p>
                <p className="text-xs text-gray-500 mt-2">3 authorized apps</p>
              </div>
            </div>
            <button className="px-4 py-2 text-sm font-medium border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              Manage apps
            </button>
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-white rounded-lg border border-red-200">
        <div className="px-6 py-4 border-b border-red-200 bg-red-50">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            <h2 className="text-lg font-semibold text-red-900">Danger zone</h2>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Delete account</h3>
              <p className="text-sm text-gray-600 mt-1">
                Permanently delete your account and all associated data. This action cannot be undone.
              </p>
            </div>
            <button className="px-4 py-2 text-sm font-medium bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
              Delete account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
