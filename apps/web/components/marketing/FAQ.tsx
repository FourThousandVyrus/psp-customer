'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'How long does settlement take?',
    a: 'Standard settlement is T+1 (next business day). Enterprise customers can access same-day or instant settlement for an additional fee.',
  },
  {
    q: 'What are the KYC requirements?',
    a: 'You need a valid Ghana Card or passport, business registration documents (for business accounts), and a bank account in the business name. The entire verification process takes less than 24 hours.',
  },
  {
    q: 'Is there a minimum transaction amount?',
    a: 'The minimum transaction amount is GH$1.00 and the maximum is GH$10,000 per single transaction. Higher limits are available for Enterprise customers.',
  },
  {
    q: 'Which mobile money providers do you support?',
    a: 'We support all major providers in Ghana: MTN Mobile Money, Vodafone Cash, and AirtelTigo Money. We are actively working on adding bank transfer and card payments.',
  },
  {
    q: 'Can I test before going live?',
    a: 'Absolutely. Every account gets free, unlimited access to our test environment with simulated payments, webhooks, and dashboard analytics. No credit card required.',
  },
  {
    q: 'Do you offer refunds and reversals?',
    a: 'Yes. You can issue full or partial refunds directly from the dashboard or via our API. Refunds are processed within 1-2 business days back to the customer\'s wallet.',
  },
];

function FaqItem({ faq }: { faq: { q: string; a: string } }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
        aria-expanded={open}
      >
        <span className="font-semibold text-gray-900 group-hover:text-green-700 transition-colors">
          {faq.q}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-gray-600 leading-relaxed">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently asked questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about Links Payments
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-2xl border border-gray-200 divide-y-0 px-6"
        >
          {faqs.map((faq) => (
            <FaqItem key={faq.q} faq={faq} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
