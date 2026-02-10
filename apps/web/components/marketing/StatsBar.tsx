'use client';

import { motion } from 'framer-motion';
import { Building2, TrendingUp, Clock, Users } from 'lucide-react';

const stats = [
  {
    label: 'Businesses Onboarded',
    value: '500+',
    icon: Building2,
  },
  {
    label: 'Transactions Processed',
    value: 'GH$2M+',
    icon: TrendingUp,
  },
  {
    label: 'Uptime Guarantee',
    value: '99.9%',
    icon: Clock,
  },
  {
    label: 'Happy Customers',
    value: '12K+',
    icon: Users,
  },
];

export function StatsBar() {
  return (
    <section className="py-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center gap-2"
            >
              <stat.icon className="w-6 h-6 text-green-400 mb-1" />
              <span className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
                {stat.value}
              </span>
              <span className="text-sm text-gray-400 font-medium">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
