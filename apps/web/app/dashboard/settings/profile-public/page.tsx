'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Award, Globe, Save, ArrowLeft } from 'lucide-react';

export default function ProfilePublicPage() {
  const [publicInfo, setPublicInfo] = useState({
    displayName: 'Demo Merchant',
    tagline: 'Trusted payment solutions',
    website: 'https://demomerchant.com',
    description: '',
  });

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
        <h1 className="text-2xl font-bold text-gray-900">Links Profile</h1>
        <p className="text-gray-600 mt-1">Manage how you show up to other businesses</p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
            <Award className="w-5 h-5 text-pink-600" />
          </div>
          <h2 className="text-lg font-semibold text-gray-900">Public Profile Information</h2>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Display Name</label>
            <input
              type="text"
              value={publicInfo.displayName}
              onChange={(e) => setPublicInfo({ ...publicInfo, displayName: e.target.value })}
              className="block w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Tagline</label>
            <input
              type="text"
              value={publicInfo.tagline}
              onChange={(e) => setPublicInfo({ ...publicInfo, tagline: e.target.value })}
              className="block w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Website</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Globe className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="url"
                value={publicInfo.website}
                onChange={(e) => setPublicInfo({ ...publicInfo, website: e.target.value })}
                className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Description</label>
            <textarea
              rows={4}
              value={publicInfo.description}
              onChange={(e) => setPublicInfo({ ...publicInfo, description: e.target.value })}
              className="block w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Tell other businesses about your company..."
            />
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
