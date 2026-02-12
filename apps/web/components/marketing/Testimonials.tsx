'use client';

import { useState, useEffect } from 'react';
import { Star, TrendingUp } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Kwame Mensah',
    role: 'CEO, TechStart Ghana',
    content: 'Links Payments made it incredibly easy to accept mobile money. Our customers love it and integration took just 15 minutes.',
    rating: 5,
    avatar: 'KM',
  },
  {
    id: 2,
    name: 'Ama Osei',
    role: 'Founder, E-commerce Hub',
    content: 'The best payment solution we have used. Fast, reliable, and the support team is amazing. Highly recommended!',
    rating: 5,
    avatar: 'AO',
  },
  {
    id: 3,
    name: 'Kofi Boateng',
    role: 'Startup Founder',
    content: 'Switched from a competitor and could not be happier. The analytics dashboard is beautiful and intuitive.',
    rating: 5,
    avatar: 'KB',
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[activeIndex];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Metrics */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
            <p className="text-gray-600">Active Businesses</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">GH₵10M+</div>
            <p className="text-gray-600">Processed Annually</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">99.9%</div>
            <p className="text-gray-600">Uptime Guarantee</p>
          </div>
        </div>

        {/* Testimonial Carousel */}
        <div className="bg-gradient-to-br from-green-50 to-white p-8 sm:p-12 rounded-2xl border border-green-100">
          <div className="flex items-start justify-between mb-6">
            <div className="flex gap-1">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <TrendingUp className="w-6 h-6 text-green-600" />
          </div>

          <p className="text-xl text-gray-700 mb-8 italic leading-relaxed">
            "{current.content}"
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center font-semibold">
                {current.avatar}
              </div>
              <div>
                <p className="font-semibold text-gray-900">{current.name}</p>
                <p className="text-sm text-gray-600">{current.role}</p>
              </div>
            </div>

            {/* Carousel indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === activeIndex ? 'bg-green-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Customer Avatars */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Trusted by leading businesses in Ghana</p>
          <div className="flex justify-center -space-x-2">
            {['KM', 'AO', 'KB', 'EK', 'NA'].map((initials, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white flex items-center justify-center font-semibold text-sm border-2 border-white"
              >
                {initials}
              </div>
            ))}
            <div className="w-10 h-10 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center font-semibold text-sm border-2 border-white">
              +495
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
