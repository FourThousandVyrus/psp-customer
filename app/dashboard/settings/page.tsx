import Link from 'next/link';
import { User, Mail, Code2, Building2, Shield, FileText, Award } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-1">Manage your account settings and preferences</p>
      </div>

      {/* Personal Settings */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Personal settings</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Personal Details */}
          <Link
            href="/dashboard/settings/profile"
            className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-md transition-all"
          >
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <User className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Personal details</h3>
                <p className="text-sm text-gray-600">
                  Contact information, password, authentication methods, and your active sessions.
                </p>
              </div>
            </div>
          </Link>

          {/* Communication Preferences */}
          <Link
            href="/dashboard/settings/communication"
            className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-md transition-all"
          >
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Communication preferences</h3>
                <p className="text-sm text-gray-600">
                  Customize the emails, SMS, and push notifications you receive.
                </p>
              </div>
            </div>
          </Link>

          {/* Developers */}
          <Link
            href="/dashboard/developers"
            className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-md transition-all"
          >
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Code2 className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Developers</h3>
                <p className="text-sm text-gray-600">
                  Workbench, developer tools, and more.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Account Settings */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Account settings</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Business */}
          <Link
            href="/dashboard/settings/business"
            className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-md transition-all"
          >
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Building2 className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Business</h3>
                <p className="text-sm text-gray-600">
                  Account details, account health, public info, payouts, legal entity, custom domains, and more.
                </p>
              </div>
            </div>
          </Link>

          {/* Team and Security */}
          <Link
            href="/dashboard/settings/team-security"
            className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-md transition-all"
          >
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Team and security</h3>
                <p className="text-sm text-gray-600">
                  Team members, roles, account security, authorized apps, and shared resources.
                </p>
              </div>
            </div>
          </Link>

          {/* Compliance and Documents */}
          <Link
            href="/dashboard/settings/compliance"
            className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-md transition-all"
          >
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Compliance and documents</h3>
                <p className="text-sm text-gray-600">
                  PCI compliance, documents, and legacy exports.
                </p>
              </div>
            </div>
          </Link>

          {/* Links Profile */}
          <Link
            href="/dashboard/settings/profile-public"
            className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-md transition-all"
          >
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Award className="w-5 h-5 text-pink-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Links profile</h3>
                <p className="text-sm text-gray-600">
                  Manage how you show up to other businesses.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
