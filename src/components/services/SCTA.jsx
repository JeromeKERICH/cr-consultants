import { CalendarIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function ServiceCTA() {
  const openCalendly = () => {
    // Replace with your actual Calendly URL
    window.open('https://calendly.com/cr-info-consultants/30min', '_blank');
  };

  return (
    <section className="bg-gray-900 text-white py-5 md:py-15 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Heading */}
          <h2 className="text-2xl sm:text-4xl font-bold mb-4">
            Ready to Expand With Confidence?
          </h2>
          
          {/* Subheading */}
          <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-10">
            Your Africa–UAE strategy starts here. Let's design the right pathway for your business, wealth, or project.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* Calendly Button */}
            <button
              onClick={openCalendly}
              className="flex items-center justify-center px-6 py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary-light transition-colors"
            >
              <CalendarIcon className="h-5 w-5 mr-2" />
              Book 1:1 Consultation
              
            </button>
            
            
            
          </div>
        </div>
      </div>
    </section>
  );
}