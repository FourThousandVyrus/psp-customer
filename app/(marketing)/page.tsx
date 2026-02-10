import Link from 'next/link';
import { ArrowRight, Zap, Shield, BarChart3, Smartphone, CheckCircle2, Clock } from 'lucide-react';
import { HowItWorks } from '@/components/marketing/HowItWorks';
import { Pricing } from '@/components/marketing/Pricing';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-50 pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation */}
          <nav className="absolute top-0 left-0 right-0 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-400 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">L</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">Links Payments</span>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <Link href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Features
                </Link>
                <Link href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">
                  How It Works
                </Link>
                <Link href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Pricing
                </Link>
                <Link href="/login" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="bg-green-600 text-white px-6 py-2.5 rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </nav>

          {/* Hero Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mt-20">
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                <Zap className="w-4 h-4" />
                <span>Built for Ghana's Mobile Money</span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Accept Mobile Money
                <span className="block bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
                  Payments Instantly
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl text-gray-600 leading-relaxed">
                The easiest way to accept MTN, Vodafone, and AirtelTigo payments.
                Get started in minutes with our developer-friendly API.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors font-semibold text-lg group"
                >
                  Start for Free
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="#how-it-works"
                  className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-lg border-2 border-gray-200"
                >
                  See How It Works
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-600">No setup fees</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-600">Test mode included</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-600">Free API keys</span>
                </div>
              </div>
            </div>

            {/* Hero Image / Demo */}
            <div className="relative">
              <div className="bg-gradient-to-br from-green-600 to-green-400 rounded-2xl shadow-2xl overflow-hidden">
                <div className="p-8 bg-white/10 backdrop-blur-sm">
                  {/* Mock Dashboard Preview */}
                  <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-500">Total Revenue</p>
                        <p className="text-3xl font-bold text-gray-900">GH₵ 45,280</p>
                      </div>
                      <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                        +23%
                      </div>
                    </div>
                    <div className="space-y-3">
                      {/* Transaction Items */}
                      <div className="flex justify-between items-center py-3 border-b border-gray-100">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                            <span className="text-yellow-700 font-semibold text-xs">MTN</span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">+233 24 123 4567</p>
                            <p className="text-sm text-gray-500">2 minutes ago</p>
                          </div>
                        </div>
                        <p className="font-semibold text-gray-900">GH₵ 250</p>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-gray-100">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                            <span className="text-red-700 font-semibold text-xs">VOD</span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">+233 20 987 6543</p>
                            <p className="text-sm text-gray-500">5 minutes ago</p>
                          </div>
                        </div>
                        <p className="font-semibold text-gray-900">GH₵ 180</p>
                      </div>
                      <div className="flex justify-between items-center py-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <span className="text-blue-700 font-semibold text-xs">ATL</span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">+233 27 456 7890</p>
                            <p className="text-sm text-gray-500">10 minutes ago</p>
                          </div>
                        </div>
                        <p className="font-semibold text-gray-900">GH₵ 500</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 animate-pulse">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium">Payment Successful</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-20 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-300 rounded-full blur-3xl opacity-20 -z-10"></div>
      </section>

      {/* Provider Logos Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm font-medium mb-8">
            SUPPORTED MOBILE MONEY PROVIDERS
          </p>
          <div className="grid grid-cols-3 gap-8 items-center justify-items-center">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-24 h-24 bg-yellow-100 rounded-2xl flex items-center justify-center">
                <span className="text-yellow-700 font-bold text-3xl">MTN</span>
              </div>
              <span className="text-sm font-medium text-gray-600">MTN Mobile Money</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-24 h-24 bg-red-100 rounded-2xl flex items-center justify-center">
                <span className="text-red-700 font-bold text-3xl">VOD</span>
              </div>
              <span className="text-sm font-medium text-gray-600">Vodafone Cash</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-24 h-24 bg-blue-100 rounded-2xl flex items-center justify-center">
                <span className="text-blue-700 font-bold text-3xl">ATL</span>
              </div>
              <span className="text-sm font-medium text-gray-600">AirtelTigo Money</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything you need to accept payments
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built specifically for Ghana's mobile money ecosystem with developer-friendly tools
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-green-100">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Instant Payments
              </h3>
              <p className="text-gray-600">
                Accept mobile money payments in seconds. Real-time processing with instant confirmation.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Secure & Reliable
              </h3>
              <p className="text-gray-600">
                Bank-level security with encryption. Your data and your customers' data are always protected.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-100">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Powerful Analytics
              </h3>
              <p className="text-gray-600">
                Track revenue, transactions, and customer insights with beautiful real-time dashboards.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl border border-orange-100">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Mobile-First Design
              </h3>
              <p className="text-gray-600">
                Optimized for mobile devices. Beautiful checkout experience for your customers.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gradient-to-br from-pink-50 to-white p-8 rounded-2xl border border-pink-100">
              <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Quick Integration
              </h3>
              <p className="text-gray-600">
                Get started in minutes with our simple API. SDKs for Node.js, Python, and PHP.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gradient-to-br from-indigo-50 to-white p-8 rounded-2xl border border-indigo-100">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Test Mode
              </h3>
              <p className="text-gray-600">
                Free test environment with simulated payments. Perfect your integration before going live.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Pricing Section */}
      <Pricing />

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-green-600 to-green-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to start accepting payments?
          </h2>
          <p className="text-xl text-green-50 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses already using Links Payments to grow their revenue
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center bg-white text-green-600 px-8 py-4 rounded-lg hover:bg-green-50 transition-colors font-semibold text-lg group"
            >
              Get Started for Free
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center bg-green-700 text-white px-8 py-4 rounded-lg hover:bg-green-800 transition-colors font-semibold text-lg border-2 border-green-500"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-green-400 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">L</span>
                </div>
                <span className="text-xl font-bold text-white">Links Payments</span>
              </div>
              <p className="text-sm text-gray-400">
                Accept mobile money payments in Ghana with ease.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">API</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Documentation</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-white transition-colors">Privacy</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Terms</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Security</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2026 Links Payments. All rights reserved.
            </p>
            <p className="text-sm text-gray-400 mt-4 md:mt-0">
              Built with ❤️ for Ghana's mobile money ecosystem
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
