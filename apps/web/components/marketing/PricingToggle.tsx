'use client';

import { useState } from 'react';

interface PricingToggleProps {
  onToggle: (isAnnual: boolean) => void;
}

export function PricingToggle({ onToggle }: PricingToggleProps) {
  const [isAnnual, setIsAnnual] = useState(false);

  const handleToggle = () => {
    const newValue = !isAnnual;
    setIsAnnual(newValue);
    onToggle(newValue);
  };

  return (
    <div className="flex items-center justify-center gap-4 mb-16">
      <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
        Monthly
      </span>

      {/* Toggle Switch */}
      <button
        onClick={handleToggle}
        className={`relative inline-flex w-14 h-7 items-center rounded-full transition-colors ${
          isAnnual ? 'bg-green-600' : 'bg-gray-300'
        }`}
        role="switch"
        aria-checked={isAnnual}
        aria-label="Toggle between monthly and annual billing"
      >
        <span
          className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
            isAnnual ? 'translate-x-7' : 'translate-x-0.5'
          }`}
        />
      </button>

      <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
        Annual
      </span>

      {isAnnual && (
        <span className="ml-4 inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
          Save 20%
        </span>
      )}
    </div>
  );
}
