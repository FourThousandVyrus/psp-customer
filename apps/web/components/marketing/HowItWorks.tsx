import { Code, Zap, CheckCircle, ArrowRight } from 'lucide-react';

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started in three simple steps. From signup to first payment in minutes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Step 1 */}
          <div className="relative">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 h-full">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Create Your Account
              </h3>
              <p className="text-gray-600 mb-4">
                Sign up in seconds and get your test API keys immediately. No credit card required.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Instant test environment</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Free API keys generated</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Full dashboard access</span>
                </li>
              </ul>
            </div>
            {/* Arrow */}
            <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
              <ArrowRight className="w-8 h-8 text-green-600" />
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 h-full">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Integrate the API
              </h3>
              <p className="text-gray-600 mb-4">
                Use our simple API to integrate payments into your app or website. Takes less than 10 minutes.
              </p>
              <div className="bg-gray-900 rounded-lg p-4 text-sm">
                <code className="text-green-400">
                  <span className="text-purple-400">const</span> payment = <span className="text-yellow-400">await</span> links.payments.create({'{'}
                  <br />
                  <span className="ml-4">amount: <span className="text-blue-400">10000</span>,</span>
                  <br />
                  <span className="ml-4">phone: <span className="text-orange-400">&quot;+233244123456&quot;</span></span>
                  <br />
                  {'}'});
                </code>
              </div>
            </div>
            {/* Arrow */}
            <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
              <ArrowRight className="w-8 h-8 text-blue-600" />
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 h-full">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-purple-600">3</span>
            </div>
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Start Accepting Payments
            </h3>
            <p className="text-gray-600 mb-4">
              Go live and start accepting real mobile money payments from your customers instantly.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <span>Real-time payment processing</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <span>Instant webhook notifications</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <span>Dashboard analytics</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Code Example */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
          <div className="bg-gray-900 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-gray-400 text-sm font-mono">example.js</span>
          </div>
          <div className="p-6 bg-gray-900">
            <pre className="text-sm overflow-x-auto">
              <code className="text-gray-300">
                <span className="text-gray-500">// Initialize Links Payments</span>
                {'\n'}
                <span className="text-purple-400">const</span> <span className="text-blue-300">Links</span> = <span className="text-yellow-400">require</span>(<span className="text-orange-400">'@links/payments'</span>);
                {'\n'}
                <span className="text-purple-400">const</span> links = <span className="text-purple-400">new</span> <span className="text-blue-300">Links</span>(<span className="text-orange-400">'sk_test_your_api_key'</span>);
                {'\n\n'}
                <span className="text-gray-500">// Create a payment</span>
                {'\n'}
                <span className="text-purple-400">const</span> payment = <span className="text-purple-400">await</span> links.payments.create({'{'}
                {'\n'}
                {'  '}amount: <span className="text-blue-400">10000</span>, <span className="text-gray-500">// 100 GHS in pesewas</span>
                {'\n'}
                {'  '}phone: <span className="text-orange-400">'+233244123456'</span>,
                {'\n'}
                {'  '}provider: <span className="text-orange-400">'MTN'</span>,
                {'\n'}
                {'  '}reference: <span className="text-orange-400">'ORDER-123'</span>
                {'\n'}
                {'}'});
                {'\n\n'}
                <span className="text-gray-500">// Check payment status</span>
                {'\n'}
                console.log(payment.status); <span className="text-gray-500">// 'success'</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
