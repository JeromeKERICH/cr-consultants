import { EnvelopeIcon, ArrowRightIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function InsightsCTA() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your newsletter signup logic here
    console.log('Submitted email:', email);
    // Reset form
    setEmail('');
  };

  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Consultation CTA */}
            <div className="bg-primary p-8 md:p-10 text-white">
              <div className="flex items-center mb-4">
                <ChartBarIcon className="h-8 w-8 text-secondary" />
                <h3 className="ml-3 text-xl font-bold">Turn Insights Into Action</h3>
              </div>
              <p className="text-primary-100 mb-6">
                We don't just analyze markets — we help you win in them. Book a consultation today and let's design your Africa–UAE strategy.
              </p>
              <Link
                to="/book"
                className="inline-flex items-center px-6 py-3 bg-secondary text-primary font-semibold rounded-lg hover:bg-secondary-light transition-colors"
              >
                Start Your Journey
                <ArrowRightIcon className="h-4 w-4 ml-2" />
              </Link>
            </div>

            {/* Newsletter Signup */}
            <div className="p-8 md:p-10">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Stay Informed</h3>
              <p className="text-gray-600 mb-6">
                Stay updated on Africa–UAE trade and investment trends.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="focus:ring-primary focus:border-primary block w-full pl-10 pr-12 py-3 border-gray-300 rounded-md"
                      placeholder="Your email address"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center">
                      <button
                        type="submit"
                        className="px-4 py-2 bg-primary text-white rounded-r-md hover:bg-primary-dark focus:outline-none"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-500">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}