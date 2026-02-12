'use client';

import { useState } from 'react';

const codeExamples = {
  javascript: `// Initialize Links Payments
const Links = require('@links/payments');
const links = new Links('sk_test_your_api_key');

// Create a payment
const payment = await links.payments.create({
  amount: 10000, // 100 GHS in pesewas
  phone: '+233244123456',
  provider: 'MTN',
  reference: 'ORDER-123'
});

// Check payment status
console.log(payment.status); // 'success'`,

  python: `# Initialize Links Payments
from links_payments import Links

links = Links(api_key='sk_test_your_api_key')

# Create a payment
payment = links.payments.create(
    amount=10000,  # 100 GHS in pesewas
    phone='+233244123456',
    provider='MTN',
    reference='ORDER-123'
)

# Check payment status
print(payment.status)  # 'success'`,

  php: `<?php
// Initialize Links Payments
require_once 'vendor/autoload.php';
use LinksPay\\Links;

$links = new Links('sk_test_your_api_key');

// Create a payment
$payment = $links->payments->create([
    'amount' => 10000,  // 100 GHS in pesewas
    'phone' => '+233244123456',
    'provider' => 'MTN',
    'reference' => 'ORDER-123'
]);

// Check payment status
echo $payment->status; // 'success'
?>`,
};

export function CodeTabs() {
  const [activeTab, setActiveTab] = useState<'javascript' | 'python' | 'php'>('javascript');

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
      {/* Tab Headers */}
      <div className="bg-gray-900 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex gap-6 ml-4">
            {['javascript', 'python', 'php'].map((lang) => (
              <button
                key={lang}
                onClick={() => setActiveTab(lang as 'javascript' | 'python' | 'php')}
                className={`text-sm font-medium transition-colors ${
                  activeTab === lang
                    ? 'text-green-400 border-b-2 border-green-400 pb-2'
                    : 'text-gray-400 hover:text-gray-300 pb-2'
                }`}
              >
                {lang.charAt(0).toUpperCase() + lang.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <span className="text-gray-400 text-sm font-mono">example.{activeTab === 'python' ? 'py' : activeTab === 'php' ? 'php' : 'js'}</span>
      </div>

      {/* Code Content */}
      <div className="p-6 bg-gray-900 overflow-x-auto">
        <pre className="text-sm">
          <code className="text-gray-300 font-mono">
            {codeExamples[activeTab].split('\n').map((line, i) => (
              <div key={i}>
                {line.startsWith('//') || line.startsWith('#') ? (
                  <span className="text-gray-500">{line}</span>
                ) : line.includes('const') || line.includes('let') || line.includes('import') || line.includes('require') || line.includes('from') || line.includes('use') ? (
                  <span className="text-purple-400">{line}</span>
                ) : line.includes("'") || line.includes('"') || line.includes('`') ? (
                  <span className="text-orange-400">{line}</span>
                ) : (
                  <span>{line}</span>
                )}
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}
