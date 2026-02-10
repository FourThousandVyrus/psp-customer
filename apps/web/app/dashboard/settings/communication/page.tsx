'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Bell, MessageSquare, Smartphone, ArrowLeft } from 'lucide-react';

type Tab = 'account' | 'transactions' | 'api' | 'team' | 'updates';

export default function CommunicationPage() {
  const [activeTab, setActiveTab] = useState<Tab>('account');

  const [emailSettings, setEmailSettings] = useState({
    transactionReceipts: true,
    dailySummary: true,
    weeklyReports: false,
    productUpdates: true,
    marketingEmails: false,
  });

  const [notificationSettings, setNotificationSettings] = useState({
    pushNotifications: true,
    smsAlerts: false,
    paymentSuccess: true,
    paymentFailure: true,
    largeTransactions: true,
    customerDisputes: true,
  });

  const tabs = [
    { id: 'account' as Tab, label: 'Account' },
    { id: 'transactions' as Tab, label: 'Transactions and Balances' },
    { id: 'api' as Tab, label: 'API' },
    { id: 'team' as Tab, label: 'Team' },
    { id: 'updates' as Tab, label: 'Links updates' },
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
        <h1 className="text-2xl font-bold text-gray-900">Communication preferences</h1>
        <p className="text-gray-600 mt-1">Manage how we communicate with you</p>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                py-4 px-1 border-b-2 font-medium text-sm transition-colors
                ${activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === 'account' && (
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <tbody className="divide-y divide-gray-200">
                {/* Account risk and compliance */}
                <tr className="border-b-2 border-gray-300">
                  <td className="px-6 py-4 text-left text-base font-semibold text-gray-900">Account risk and compliance</td>
                  <td className="px-4 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Email</td>
                  <td className="px-4 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">SMS</td>
                  <td className="px-4 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Push</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">Account status information requests</td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">Balance collection notice</td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">Fraud investigations on your account</td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">Payout capability issues</td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">Reserve-related information needed</td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">Security related alerts</td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">Unusual activity on your account</td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                </tr>

                {/* Account updates */}
                <tr className="border-b-2 border-gray-300">
                  <td className="px-6 pt-8 pb-4 text-left text-base font-semibold text-gray-900">Account updates</td>
                  <td className="px-4 pt-8 pb-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Email</td>
                  <td className="px-4 pt-8 pb-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">SMS</td>
                  <td className="px-4 pt-8 pb-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Push</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">Account activity summary</td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">App installs or uninstalls</td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">Connect integration optimizations and suggestions</td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">Data migrations between accounts</td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">Email domain verifications</td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">Service provider list changes</td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">Updates to your business information</td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                </tr>

                {/* Team management */}
                <tr className="border-b-2 border-gray-300">
                  <td className="px-6 pt-8 pb-4 text-left text-base font-semibold text-gray-900">Team management</td>
                  <td className="px-4 pt-8 pb-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Email</td>
                  <td className="px-4 pt-8 pb-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">SMS</td>
                  <td className="px-4 pt-8 pb-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Push</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">Note mentions by teammates</td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">Single sign-on settings and domain changes</td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">Team member changes on your account</td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">Team settings</td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'transactions' && (
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <tbody className="divide-y divide-gray-200">
                {/* Transaction notifications */}
                <tr className="border-b-2 border-gray-300">
                  <td className="px-6 py-4 text-left text-base font-semibold text-gray-900">Transaction notifications</td>
                  <td className="px-4 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Email</td>
                  <td className="px-4 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">SMS</td>
                  <td className="px-4 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Push</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">Transaction receipts</td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">Payment success</td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">Payment failure</td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">Large transactions (over GH₵ 10,000)</td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">Customer disputes and chargebacks</td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                </tr>

                {/* Balance notifications */}
                <tr className="border-b-2 border-gray-300">
                  <td className="px-6 pt-8 pb-4 text-left text-base font-semibold text-gray-900">Balance notifications</td>
                  <td className="px-4 pt-8 pb-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Email</td>
                  <td className="px-4 pt-8 pb-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">SMS</td>
                  <td className="px-4 pt-8 pb-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Push</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">Payout arrivals</td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">Low balance alerts</td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'api' && (
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <tbody className="divide-y divide-gray-200">
                {/* API notifications */}
                <tr className="border-b-2 border-gray-300">
                  <td className="px-6 py-4 text-left text-base font-semibold text-gray-900">API notifications</td>
                  <td className="px-4 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Email</td>
                  <td className="px-4 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">SMS</td>
                  <td className="px-4 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Push</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">Webhook failures</td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">API usage alerts</td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">API key changes</td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">Rate limit warnings</td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'team' && (
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <tbody className="divide-y divide-gray-200">
                {/* Team notifications */}
                <tr className="border-b-2 border-gray-300">
                  <td className="px-6 py-4 text-left text-base font-semibold text-gray-900">Team notifications</td>
                  <td className="px-4 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Email</td>
                  <td className="px-4 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">SMS</td>
                  <td className="px-4 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Push</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">New team members</td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">Permission changes</td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">Team member removal</td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">Team member invitations</td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">Role changes</td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'updates' && (
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <tbody className="divide-y divide-gray-200">
                {/* Product and platform updates */}
                <tr className="border-b-2 border-gray-300">
                  <td className="px-6 py-4 text-left text-base font-semibold text-gray-900">Product and platform updates</td>
                  <td className="px-4 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Email</td>
                  <td className="px-4 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">SMS</td>
                  <td className="px-4 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Push</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">New features and improvements</td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">Platform maintenance and downtime</td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">Product education and tips</td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                </tr>

                {/* Marketing communications */}
                <tr className="border-b-2 border-gray-300">
                  <td className="px-6 pt-8 pb-4 text-left text-base font-semibold text-gray-900">Marketing communications</td>
                  <td className="px-4 pt-8 pb-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Email</td>
                  <td className="px-4 pt-8 pb-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">SMS</td>
                  <td className="px-4 pt-8 pb-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Push</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">Promotional offers and campaigns</td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">Case studies and success stories</td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">Webinars and events</td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                </tr>

                {/* Developer updates */}
                <tr className="border-b-2 border-gray-300">
                  <td className="px-6 pt-8 pb-4 text-left text-base font-semibold text-gray-900">Developer updates</td>
                  <td className="px-4 pt-8 pb-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Email</td>
                  <td className="px-4 pt-8 pb-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">SMS</td>
                  <td className="px-4 pt-8 pb-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Push</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">API changes and new endpoints</td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">SDK updates and releases</td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">Developer resources and documentation</td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                </tr>

                {/* Security announcements */}
                <tr className="border-b-2 border-gray-300">
                  <td className="px-6 pt-8 pb-4 text-left text-base font-semibold text-gray-900">Security announcements</td>
                  <td className="px-4 pt-8 pb-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Email</td>
                  <td className="px-4 pt-8 pb-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">SMS</td>
                  <td className="px-4 pt-8 pb-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Push</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">Security updates and patches</td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">Best practices and security tips</td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">Compliance and regulatory changes</td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
