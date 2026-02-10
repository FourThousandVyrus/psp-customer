'use client';

import { useState } from 'react';
import { ChevronDown, Building2, Plus, X, Edit, Info, Lightbulb, FileText, ArrowUpDown } from 'lucide-react';

export default function BalancesPage() {
  const [showPayoutsDropdown, setShowPayoutsDropdown] = useState(false);
  const [showBankModal, setShowBankModal] = useState(false);
  const [showRecommendation, setShowRecommendation] = useState(true);
  const [activeTab, setActiveTab] = useState<'payouts' | 'topups' | 'all'>('payouts');

  return (
    <div className="space-y-6">
      {/* Page Header with Inline Balance */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <h1 className="text-3xl font-bold text-gray-900">Balances</h1>
          <span className="text-3xl font-bold text-gray-900">GH₵ 45,280.00</span>
          <button className="p-1 text-gray-400 hover:text-gray-600">
            <Info className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Manage Payouts Dropdown */}
      <div className="relative">
        <button
          onClick={() => setShowPayoutsDropdown(!showPayoutsDropdown)}
          className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700"
        >
          Manage payouts
          <ChevronDown className={`ml-2 w-4 h-4 transition-transform ${showPayoutsDropdown ? 'rotate-180' : ''}`} />
        </button>

        {/* Dropdown Menu */}
        {showPayoutsDropdown && (
          <>
            <div
              className="fixed inset-0 z-10"
              onClick={() => setShowPayoutsDropdown(false)}
            />
            <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-20">
              <button
                onClick={() => {
                  setShowBankModal(true);
                  setShowPayoutsDropdown(false);
                }}
                className="w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors flex items-center space-x-2 text-sm text-gray-700"
              >
                <Building2 className="w-4 h-4 text-gray-500" />
                <span>Manage bank accounts</span>
              </button>
            </div>
          </>
        )}
      </div>

      {/* Recommendation Banner */}
      {showRecommendation && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start justify-between">
          <div className="flex items-start space-x-3">
            <Lightbulb className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-gray-900 mb-1">Recommendation</p>
              <p className="text-sm text-gray-700">
                Keep a minimum amount in your balance so that funds are available for refunds, disputes, and fees.
              </p>
              <button className="text-sm text-blue-600 hover:text-blue-700 font-medium mt-2">
                Set your minimum balance
              </button>
            </div>
          </div>
          <button
            onClick={() => setShowRecommendation(false)}
            className="text-gray-400 hover:text-gray-600 flex-shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Balance Summary Section */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Balance summary</h2>
            </div>

            {/* Table Header */}
            <div className="px-6 py-3 bg-gray-50 border-b border-gray-200">
              <div className="grid grid-cols-2">
                <div className="text-xs font-medium text-gray-500 uppercase">Payments type</div>
                <div className="text-xs font-medium text-gray-500 uppercase text-right">Amount</div>
              </div>
            </div>

            {/* Balance Types */}
            <div className="divide-y divide-gray-200">
              <div className="px-6 py-4 grid grid-cols-2 items-center">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-900">Incoming</span>
                </div>
                <div className="text-sm text-gray-900 text-right font-medium">GH₵ 8,500.00</div>
              </div>

              <div className="px-6 py-4 grid grid-cols-2 items-center">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-900">Available</span>
                </div>
                <div className="text-sm text-gray-900 text-right font-medium">GH₵ 32,780.00</div>
              </div>

              <div className="px-6 py-4 grid grid-cols-2 items-center">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-900">On hold</span>
                </div>
                <div className="text-sm text-gray-900 text-right font-medium">GH₵ 4,000.00</div>
              </div>
            </div>
          </div>
        </div>

        {/* Reports Section */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Reports</h2>
            </div>
            <div className="p-6 space-y-4">
              <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex items-center space-x-3">
                  <FileText className="w-5 h-5 text-gray-400" />
                  <div className="text-left">
                    <p className="text-sm font-medium text-gray-900">Balance summary</p>
                    <p className="text-xs text-gray-500">Jan 2026</p>
                  </div>
                </div>
              </button>
              <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex items-center space-x-3">
                  <ArrowUpDown className="w-5 h-5 text-gray-400" />
                  <div className="text-left">
                    <p className="text-sm font-medium text-gray-900">Payout reconciliation</p>
                    <p className="text-xs text-gray-500">Jan 2026</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Recent activity</h2>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200">
          <div className="flex px-6">
            <button
              onClick={() => setActiveTab('payouts')}
              className={`py-3 px-1 mr-8 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'payouts'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Payouts
            </button>
            <button
              onClick={() => setActiveTab('topups')}
              className={`py-3 px-1 mr-8 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'topups'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Top-ups
            </button>
            <button
              onClick={() => setActiveTab('all')}
              className={`py-3 px-1 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'all'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              All activity
            </button>
          </div>
        </div>

        {/* Activity Content */}
        <div className="flex flex-col items-center justify-center py-16 px-6">
          <p className="text-gray-500 text-sm">
            {activeTab === 'payouts' && 'Your payout history will appear here'}
            {activeTab === 'topups' && 'Your top-up history will appear here'}
            {activeTab === 'all' && 'All your account activity will appear here'}
          </p>
        </div>
      </div>

      {/* Bank Account Modal */}
      {showBankModal && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setShowBankModal(false)}
          />
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <div className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full">
                {/* Modal Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-900">Bank accounts</h2>
                  <button
                    onClick={() => setShowBankModal(false)}
                    className="p-1 hover:bg-gray-100 rounded transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>

                <div className="p-6">
                  {/* Current Bank Account */}
                  <div className="mb-4">
                    <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-blue-100 rounded flex items-center justify-center">
                            <Building2 className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">GCB Bank</p>
                            <p className="text-gray-500 text-sm">•••• •••• •••• 4567</p>
                          </div>
                        </div>
                        <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-50 text-blue-700">
                          Primary
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-3 text-sm mb-3">
                        <div>
                          <p className="text-gray-500 text-xs">Account Name</p>
                          <p className="font-medium text-gray-900 mt-0.5">Demo Merchant</p>
                        </div>
                        <div>
                          <p className="text-gray-500 text-xs">Account Type</p>
                          <p className="font-medium text-gray-900 mt-0.5">Business Checking</p>
                        </div>
                      </div>
                      <button className="inline-flex items-center px-3 py-1.5 text-sm border border-gray-300 rounded hover:bg-gray-50 transition-colors font-medium text-gray-700">
                        <Edit className="w-3.5 h-3.5 mr-1.5" />
                        Edit account
                      </button>
                    </div>
                  </div>

                  {/* Add Bank Account Button */}
                  <button className="w-full border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-gray-400 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-center space-x-2">
                      <Plus className="w-5 h-5 text-gray-500" />
                      <span className="text-sm font-medium text-gray-700">Add bank account</span>
                    </div>
                  </button>
                </div>

                {/* Modal Footer */}
                <div className="px-6 py-4 border-t border-gray-200 flex justify-end">
                  <button
                    onClick={() => setShowBankModal(false)}
                    className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors font-medium"
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
