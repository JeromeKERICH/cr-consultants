import { EnvelopeIcon, BookOpenIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export default function InsightsHero() {
  return (
    <section className="relative bg-gray-900 overflow-hidden ">
      
      <div className="absolute inset-0">
        <img
          src="/assets/ihero.jpg" 
          alt="Global business connections"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-secondary/50" />
        
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          {/* Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Insights & <span className="text-secondary">Thought Leadership</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-l md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
            Stay ahead with expert analysis, Africa–UAE investment trends, and success stories that shape the future of cross-border business.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/subscribe"
              className="flex items-center justify-center px-6 py-3 bg-secondary text-primary font-semibold rounded-lg hover:bg-secondary-light transition-colors"
            >
              <EnvelopeIcon className="h-5 w-5 mr-2" />
              Subscribe for Updates
            </Link>
            
          </div>
        </div>
      </div>
    </section>
  );
}