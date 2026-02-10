'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Eye, Server } from 'lucide-react';

const items = [
  {
    icon: ShieldCheck,
    title: 'PCI DSS Compliant',
    description:
      'We meet the highest industry standard for payment security, ensuring cardholder and wallet data is always protected.',
  },
  {
    icon: Lock,
    title: 'End-to-End Encryption',
    description:
      'All data in transit and at rest is encrypted using AES-256 and TLS 1.3. Your transactions are never exposed.',
  },
  {
    icon: Eye,
    title: 'Fraud Monitoring',
    description:
      'Real-time fraud detection flags suspicious activity before it impacts your business, with automatic alerts and blocking.',
  },
  {
    icon: Server,
    title: 'SOC 2 Audit Ready',
    description:
      'Our infrastructure follows SOC 2 Type II controls for data security, availability, and confidentiality.',
  },
];

export function Security() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4 text-balance">
            Security you can trust
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto text-pretty">
            We take the security of your payments and data seriously so you can focus on growing your business
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-gray-800/60 border border-gray-700 rounded-2xl p-6 flex flex-col items-start gap-4"
            >
              <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
