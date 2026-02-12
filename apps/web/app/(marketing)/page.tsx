import Link from 'next/link';
import { ArrowRight, Zap, Shield, BarChart3, Smartphone, CheckCircle2, Clock } from 'lucide-react';
import { HowItWorks } from '@/components/marketing/HowItWorks';
import { Pricing } from '@/components/marketing/Pricing';
import { MobileNav } from '@/components/marketing/MobileNav';
import { Testimonials } from '@/components/marketing/Testimonials';
import { TrustBadges } from '@/components/marketing/TrustBadges';

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
              <MobileNav />
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
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-green-100">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
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
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
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
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-green-100">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
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
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
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

      {/* Testimonials Section */}
      <Testimonials />

      {/* Trust Badges Section */}
      <TrustBadges />

      {/* Pricing Section */}
      <Pricing />

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-green-600 to-green-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to start accepting payments?
          </h2>
          <p className="text-xl text-green-50 mb-8 max-w-2xl mx-auto">
            Join 500+ businesses already using Links Payments to grow their revenue
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center bg-white text-green-600 px-8 py-4 rounded-lg hover:bg-green-50 transition-colors font-semibold text-lg group"
            >
              Sign Up Now
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
      <footer className="bg-gray-900 text-gray-300">
        {/* Trust Section */}
        <div className="border-b border-gray-800 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm text-gray-400 mb-4">
              Enterprise Security & Compliance
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-green-600 rounded-full"></div>
                <span>PCI DSS Level 1</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-green-600 rounded-full"></div>
                <span>256-bit SSL Encryption</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-green-600 rounded-full"></div>
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-green-600 rounded-full"></div>
                <span>99.9% Uptime SLA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-5 gap-8 mb-8">
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
                {/* Social Links */}
                <div className="flex gap-4 pt-4">
                  <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20v-7.21H5.5V9.25h2.79V7.07c0-2.77 1.69-4.28 4.16-4.28 1.18 0 2.2.09 2.49.13v2.89h-1.71c-1.34 0-1.6.64-1.6 1.57v2.06h3.21l-4.18 3.54V20" /></svg>
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 9 1.5 11-5a4.5 4.5 0 00-6-5" /></svg>
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54h2.86l3.32-4.04-2.43 1.5z" /></svg>
                  </Link>
                </div>
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

              <div>
                <h4 className="font-semibold text-white mb-4">Newsletter</h4>
                <p className="text-sm text-gray-400 mb-3">Get updates on new features and updates</p>
                <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 rounded bg-gray-800 text-white placeholder:text-gray-500 text-sm outline-none focus:ring-2 focus:ring-green-600"
                  />
                  <button className="px-3 py-2 rounded bg-green-600 hover:bg-green-700 transition-colors text-white text-sm font-medium">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-400">
                © 2026 Links Payments. All rights reserved.
              </p>
              <p className="text-sm text-gray-400 mt-4 md:mt-0">
                Built for Ghana's mobile money ecosystem
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
