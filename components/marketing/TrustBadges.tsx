import { Shield, Zap, Lock } from 'lucide-react';

export function TrustBadges() {
  return (
    <section className="py-12 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Security Certifications */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">PCI DSS Level 1</h3>
              <p className="text-sm text-gray-600">Highest security certification for payment processing</p>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Zap className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">99.9% Uptime</h3>
              <p className="text-sm text-gray-600">Avg response time &lt;200ms, globally distributed infrastructure</p>
            </div>
          </div>

          {/* Encryption */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Lock className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">256-bit Encryption</h3>
              <p className="text-sm text-gray-600">Bank-level security for all transactions and data</p>
            </div>
          </div>
        </div>

        {/* Partner Logos Section */}
        <div className="mt-12 pt-12 border-t border-gray-200">
          <p className="text-center text-gray-600 text-sm font-medium mb-8">
            TRUSTED BY LEADING FINANCIAL INSTITUTIONS
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-gray-200 rounded-lg flex items-center justify-center text-gray-600 font-semibold text-sm">
                Bank A
              </div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-gray-200 rounded-lg flex items-center justify-center text-gray-600 font-semibold text-sm">
                Bank B
              </div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-gray-200 rounded-lg flex items-center justify-center text-gray-600 font-semibold text-sm">
                Bank C
              </div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-gray-200 rounded-lg flex items-center justify-center text-gray-600 font-semibold text-sm">
                Bank D
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
