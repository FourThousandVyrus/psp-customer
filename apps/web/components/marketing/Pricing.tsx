'use client';

import Link from 'next/link';
import { Check, Zap } from 'lucide-react';
import { PricingToggle } from './PricingToggle';
import { useState } from 'react';

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const getMonthlyPrice = (monthlyPrice: number) => {
    if (isAnnual) {
      return Math.round(monthlyPrice * 12 * 0.8);
    }
    return monthlyPrice;
  };

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            No hidden fees. No setup costs. Pay only for successful transactions.
          </p>
        </div>

        <PricingToggle onToggle={setIsAnnual} />

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Free Tier */}
          <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-gray-300 transition-colors">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Test Mode</h3>
              <p className="text-gray-600">Perfect for development and testing</p>
            </div>
            <div className="mb-6">
              <div className="flex items-baseline">
                <span className="text-5xl font-bold text-gray-900">Free</span>
              </div>
              <p className="text-gray-600 mt-2">Forever</p>
            </div>
            <Link
              href="/signup"
              className="block w-full bg-gray-900 text-white text-center py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold mb-6"
            >
              Get Started
            </Link>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Unlimited test transactions</span>
              </li>
              <li className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Full API access</span>
              </li>
              <li className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Dashboard analytics</span>
              </li>
              <li className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Webhook support</span>
              </li>
              <li className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Email support</span>
              </li>
            </ul>
          </div>

          {/* Standard Tier */}
          <div className="bg-gradient-to-br from-green-600 to-green-400 p-8 rounded-2xl shadow-xl relative transform scale-105">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                <Zap className="w-4 h-4" />
                <span>Most Popular</span>
              </span>
            </div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Standard</h3>
              <p className="text-green-50">For growing businesses</p>
            </div>
            <div className="mb-6">
              <div className="flex items-baseline">
                <span className="text-5xl font-bold text-white">2.5%</span>
                <span className="text-green-50 ml-2">per transaction</span>
              </div>
              <p className="text-green-50 mt-2">+ GH₵0.50 flat fee</p>
            </div>
            <Link
              href="/signup"
              className="block w-full bg-white text-green-600 text-center py-3 rounded-lg hover:bg-green-50 transition-colors font-semibold mb-6"
            >
              Get Started
            </Link>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <span className="text-white">Everything in Test Mode</span>
              </li>
              <li className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <span className="text-white">Live payment processing</span>
              </li>
              <li className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <span className="text-white">All mobile money providers</span>
              </li>
              <li className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <span className="text-white">Advanced analytics</span>
              </li>
              <li className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <span className="text-white">Priority email support</span>
              </li>
              <li className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <span className="text-white">Custom branding</span>
              </li>
            </ul>
          </div>

          {/* Enterprise Tier */}
          <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-gray-300 transition-colors">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <p className="text-gray-600">For large-scale operations</p>
            </div>
            <div className="mb-6">
              <div className="flex items-baseline">
                <span className="text-5xl font-bold text-gray-900">Custom</span>
              </div>
              <p className="text-gray-600 mt-2">Volume discounts available</p>
            </div>
            <Link
              href="#"
              className="block w-full bg-gray-900 text-white text-center py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold mb-6"
            >
              Contact Sales
            </Link>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Everything in Standard</span>
              </li>
              <li className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Volume-based pricing</span>
              </li>
              <li className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Dedicated account manager</span>
              </li>
              <li className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">24/7 phone support</span>
              </li>
              <li className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Custom integrations</span>
              </li>
              <li className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">SLA guarantee</span>
              </li>
            </ul>
          </div>
        </div>

        {/* FAQ or Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            All plans include access to our developer API, webhooks, and test environment
          </p>
          <p className="text-sm text-gray-500">
            Need help choosing? <Link href="#" className="text-green-600 hover:text-green-700 font-medium">Contact our sales team</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
