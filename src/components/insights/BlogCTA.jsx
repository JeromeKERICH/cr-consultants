import { EnvelopeIcon, ArrowRightIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SubscriptionModal from '../layout/SubscriptionModal';
import ConsultationModal from '../layout/ConsultationModal';

export default function InsightsCTA() {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  

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
                We don't just analyze markets, we help you win in them. Book a consultation today and let's design your Africa–UAE strategy.
              </p>
              <button
                onClick={() => setOpen(true)}
                className="inline-flex items-center px-6 py-3 bg-secondary text-primary font-semibold rounded-lg hover:bg-secondary-light transition-colors"
              >
                Start Your Journey
                <ArrowRightIcon className="h-4 w-4 ml-2" />
              </button>
              <ConsultationModal open={open} onClose={() => setOpen(false)} />
            </div>

            {/* Newsletter Signup */}
            <div className="p-8 md:p-10">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Stay Informed</h3>
              <p className="text-gray-600 mb-6">
                Stay updated on Africa–UAE trade and investment trends.
              </p>
              <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center justify-center px-6 py-3 bg-secondary text-primary font-semibold rounded-lg hover:bg-secondary-light transition-colors"
                >
                  <EnvelopeIcon className="h-5 w-5 mr-2" />
                  Subscribe for Updates
                </button>

                <SubscriptionModal
                  open={isModalOpen} 
                  onClose={() => setIsModalOpen(false)} 
                />
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}