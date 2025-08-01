import { CalendarIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export default function PackagesHero() {
  return (
    <section className="relative bg-gray-900 overflow-hidden">
      
      <div className="absolute inset-0">
        <img
          src="/assets/phero.jpg"
          alt="Global business solutions"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-secondary/50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          {/* Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6">
            Our Packages
          </h1>
          
          {/* Subheadline */}
          <p className="text-l md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
            Whether you're entering African markets, setting up in the UAE, or facilitating cross-border trade, our structured packages give you clarity, compliance, and confidence.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-primary hover:text-primary transition-colors"
            >
              <PhoneIcon className="h-5 w-5 mr-2" />
              Request Quotation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}




