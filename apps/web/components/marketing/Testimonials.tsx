'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Kwame Asante',
    role: 'CEO, ShopAccra',
    quote:
      'Links Payments transformed how we handle mobile money. We went from losing 15% of sales to abandoned payments to nearly zero drop-offs. The API was integrated in under an hour.',
    rating: 5,
  },
  {
    name: 'Abena Mensah',
    role: 'CTO, DeliverGH',
    quote:
      'The developer experience is unmatched. Clear docs, test mode that actually works, and webhooks that fire instantly. We process over GH$200K monthly without a hitch.',
    rating: 5,
  },
  {
    name: 'Yaw Osei-Bonsu',
    role: 'Founder, EduPay Ghana',
    quote:
      'We collect school fees from parents across all three networks. Links handles the complexity so we can focus on education. Settlement is fast and the dashboard gives us full visibility.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-balance">
            Trusted by businesses across Ghana
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
            See why hundreds of companies rely on Links Payments for their mobile money infrastructure
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star
                    key={idx}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-700 font-semibold text-sm">
                    {t.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">
                    {t.name}
                  </p>
                  <p className="text-gray-500 text-sm">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
