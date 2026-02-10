import Link from 'next/link';
import {
  ArrowRight,
  Zap,
  Shield,
  BarChart3,
  Smartphone,
  CheckCircle2,
  Clock,
} from 'lucide-react';
import { HowItWorks } from '@/components/marketing/HowItWorks';
import { Pricing } from '@/components/marketing/Pricing';
import { StatsBar } from '@/components/marketing/StatsBar';
import { Testimonials } from '@/components/marketing/Testimonials';
import { Security } from '@/components/marketing/Security';
import { FAQ } from '@/components/marketing/FAQ';
import { MobileNav } from '@/components/marketing/MobileNav';
import { AnimateIn } from '@/components/marketing/AnimateIn';
import { NewsletterForm } from '@/components/marketing/NewsletterForm';

const features = [
  {
    icon: Zap,
    title: 'Instant Payments',
    description:
      'Accept mobile money payments in seconds. Real-time processing with instant confirmation.',
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description:
      'Bank-level security with encryption. Your data and your customers\u2019 data are always protected.',
  },
  {
    icon: BarChart3,
    title: 'Powerful Analytics',
    description:
      'Track revenue, transactions, and customer insights with beautiful real-time dashboards.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    description:
      'Optimized for mobile devices. Beautiful checkout experience for your customers.',
  },
  {
    icon: Clock,
    title: 'Quick Integration',
    description:
      'Get started in minutes with our simple API. SDKs for Node.js, Python, and PHP.',
  },
  {
    icon: CheckCircle2,
    title: 'Test Mode',
    description:
      'Free test environment with simulated payments. Perfect your integration before going live.',
  },
];

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* ───────── Hero Section ───────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-50 pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation */}
          <nav className="absolute top-0 left-0 right-0 z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-400 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">L</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">
                  Links Payments
                </span>
              </div>

              {/* Desktop links */}
              <div className="hidden md:flex items-center gap-8">
                <Link
                  href="#features"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Features
                </Link>
                <Link
                  href="#how-it-works"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  How It Works
                </Link>
                <Link
                  href="#pricing"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Pricing
                </Link>
                <Link
                  href="#faq"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  FAQ
                </Link>
                <Link
                  href="/login"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="bg-green-600 text-white px-6 py-2.5 rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  Get Started
                </Link>
              </div>

              {/* Mobile hamburger */}
              <MobileNav />
            </div>
          </nav>

          {/* Hero Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mt-20">
            <AnimateIn className="flex flex-col gap-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium self-start">
                <Zap className="w-4 h-4" />
                <span>Built for Ghana&apos;s Mobile Money</span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight text-balance">
                Accept Mobile Money
                <span className="block bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
                  Payments Instantly
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl text-gray-600 leading-relaxed text-pretty">
                The easiest way to accept MTN, Vodafone, and AirtelTigo
                payments. Get started in minutes with our developer-friendly
                API.
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
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-600">No setup fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-600">
                    Test mode included
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-600">Free API keys</span>
                </div>
              </div>
            </AnimateIn>

            {/* Hero Image / Demo */}
            <AnimateIn delay={0.15} className="relative">
              <div className="bg-gradient-to-br from-green-600 to-green-400 rounded-2xl shadow-2xl overflow-hidden">
                <div className="p-8 bg-white/10 backdrop-blur-sm">
                  {/* Mock Dashboard Preview */}
                  <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-500">Total Revenue</p>
                        <p className="text-3xl font-bold text-gray-900">
                          GH&#8373; 45,280
                        </p>
                      </div>
                      <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                        +23%
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      {/* MTN */}
                      <div className="flex justify-between items-center py-3 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                            <span className="text-yellow-700 font-semibold text-xs">
                              MTN
                            </span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">
                              +233 24 123 4567
                            </p>
                            <p className="text-sm text-gray-500">
                              2 minutes ago
                            </p>
                          </div>
                        </div>
                        <p className="font-semibold text-gray-900">
                          GH&#8373; 250
                        </p>
                      </div>
                      {/* VOD */}
                      <div className="flex justify-between items-center py-3 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                            <span className="text-red-700 font-semibold text-xs">
                              VOD
                            </span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">
                              +233 20 987 6543
                            </p>
                            <p className="text-sm text-gray-500">
                              5 minutes ago
                            </p>
                          </div>
                        </div>
                        <p className="font-semibold text-gray-900">
                          GH&#8373; 180
                        </p>
                      </div>
                      {/* ATL */}
                      <div className="flex justify-between items-center py-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <span className="text-blue-700 font-semibold text-xs">
                              ATL
                            </span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">
                              +233 27 456 7890
                            </p>
                            <p className="text-sm text-gray-500">
                              10 minutes ago
                            </p>
                          </div>
                        </div>
                        <p className="font-semibold text-gray-900">
                          GH&#8373; 500
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating Card */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium text-gray-900">
                    Payment Successful
                  </span>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>

        {/* Decorative blurs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-20 -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-300 rounded-full blur-3xl opacity-20 -z-10" />
      </section>

      {/* ───────── Social Proof Stats ───────── */}
      <StatsBar />

      {/* ───────── Provider Logos ───────── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm font-medium mb-8 uppercase tracking-wider">
            Supported Mobile Money Providers
          </p>
          <div className="grid grid-cols-3 gap-8 items-center justify-items-center">
            <AnimateIn
              delay={0}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-24 h-24 bg-yellow-100 rounded-2xl flex items-center justify-center">
                <span className="text-yellow-700 font-bold text-3xl">MTN</span>
              </div>
              <span className="text-sm font-medium text-gray-600">
                MTN Mobile Money
              </span>
            </AnimateIn>
            <AnimateIn
              delay={0.1}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-24 h-24 bg-red-100 rounded-2xl flex items-center justify-center">
                <span className="text-red-700 font-bold text-3xl">VOD</span>
              </div>
              <span className="text-sm font-medium text-gray-600">
                Vodafone Cash
              </span>
            </AnimateIn>
            <AnimateIn
              delay={0.2}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-24 h-24 bg-blue-100 rounded-2xl flex items-center justify-center">
                <span className="text-blue-700 font-bold text-3xl">ATL</span>
              </div>
              <span className="text-sm font-medium text-gray-600">
                AirtelTigo Money
              </span>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ───────── Features ───────── */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-balance">
              Everything you need to accept payments
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
              Built specifically for Ghana&apos;s mobile money ecosystem with
              developer-friendly tools
            </p>
          </AnimateIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <AnimateIn
                key={f.title}
                delay={i * 0.08}
                className="bg-gradient-to-br from-green-50/60 to-white p-8 rounded-2xl border border-gray-200 hover:border-green-200 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {f.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {f.description}
                </p>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── How It Works ───────── */}
      <HowItWorks />

      {/* ───────── Testimonials ───────── */}
      <Testimonials />

      {/* ───────── Pricing ───────── */}
      <Pricing />

      {/* ───────── Security ───────── */}
      <Security />

      {/* ───────── FAQ ───────── */}
      <FAQ />

      {/* ───────── CTA ───────── */}
      <section className="py-24 bg-gradient-to-br from-green-600 to-green-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn>
            <h2 className="text-4xl font-bold text-white mb-6 text-balance">
              Ready to start accepting payments?
            </h2>
            <p className="text-xl text-green-50 mb-8 max-w-2xl mx-auto text-pretty">
              Join hundreds of businesses already using Links Payments to grow
              their revenue
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
                href="#faq"
                className="inline-flex items-center justify-center bg-green-700 text-white px-8 py-4 rounded-lg hover:bg-green-800 transition-colors font-semibold text-lg border-2 border-green-500"
              >
                Read the FAQ
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ───────── Footer ───────── */}
      <footer className="bg-gray-900 text-gray-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Brand + newsletter */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-green-400 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">L</span>
                </div>
                <span className="text-xl font-bold text-white">
                  Links Payments
                </span>
              </div>
              <p className="text-sm text-gray-400 max-w-xs">
                The modern payment infrastructure for Ghana&apos;s mobile money
                ecosystem. Accept payments, track analytics, and grow your
                business.
              </p>

              {/* Newsletter */}
              <NewsletterForm />
            </div>

            {/* Product */}
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="flex flex-col gap-2 text-sm">
                <li>
                  <Link
                    href="#features"
                    className="hover:text-white transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#pricing"
                    className="hover:text-white transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#how-it-works"
                    className="hover:text-white transition-colors"
                  >
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="#faq"
                    className="hover:text-white transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="flex flex-col gap-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="flex flex-col gap-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Security
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar with social links */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              &copy; 2026 Links Payments. All rights reserved.
            </p>

            {/* Social */}
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors"
                aria-label="X"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors"
                aria-label="TikTok"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
