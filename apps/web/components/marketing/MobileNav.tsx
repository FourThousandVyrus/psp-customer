'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#pricing', label: 'Pricing' },
    { href: '/login', label: 'Login' },
  ];

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {isOpen && (
        <div className="absolute top-20 left-0 right-0 bg-white shadow-lg rounded-b-lg py-4 z-50">
          <div className="flex flex-col space-y-4 px-4 sm:px-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-gray-900 transition-colors py-2 border-b border-gray-100 last:border-b-0"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/signup"
              className="bg-green-600 text-white px-4 py-2.5 rounded-lg hover:bg-green-700 transition-colors font-medium text-center"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
