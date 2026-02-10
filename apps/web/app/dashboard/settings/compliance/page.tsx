'use client';

import Link from 'next/link';
import { FileText, Upload, ArrowLeft } from 'lucide-react';

export default function CompliancePage() {
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
        <h1 className="text-2xl font-bold text-gray-900">Compliance and Documents</h1>
        <p className="text-gray-600 mt-1">Manage compliance requirements and documents</p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
            <FileText className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-lg font-semibold text-gray-900">Business Documents</h2>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Business Registration Certificate
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-gray-400 transition-colors">
              <div className="flex flex-col items-center justify-center">
                <Upload className="w-10 h-10 text-gray-400 mb-3" />
                <button className="text-sm font-medium text-blue-600 hover:text-blue-700 mb-1">
                  Click to upload
                </button>
                <p className="text-xs text-gray-500">PDF, PNG or JPG (max. 5MB)</p>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Tax Identification Certificate
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-gray-400 transition-colors">
              <div className="flex flex-col items-center justify-center">
                <Upload className="w-10 h-10 text-gray-400 mb-3" />
                <button className="text-sm font-medium text-blue-600 hover:text-blue-700 mb-1">
                  Click to upload
                </button>
                <p className="text-xs text-gray-500">PDF, PNG or JPG (max. 5MB)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
