import { CalendarIcon, ChatBubbleBottomCenterTextIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

export default function PackagesCTA() {
  const openCalendly = () => {
    window.Calendly.initPopupWidget({
      url: 'https://calendly.com/your-username'
    });
  };

  return (
    <section className="bg-gray-200 text-primary py-5 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Heading */}
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Start YourJ ourney
          </h2>
          
          {/* Subtext */}
          <p className="text-l md:xl text-primary-100 max-w-3xl mx-auto mb-10">
            From UAE freezones to African market intelligence — we provide end-to-end guidance tailored to your goals. Let's structure your growth with confidence.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* Calendly Button */}
            <button
              onClick={openCalendly}
              className="flex items-center justify-center px-6 py-3 bg-secondary text-primary font-semibold rounded-lg hover:bg-secondary-light transition-colors"
            >
              <CalendarIcon className="h-5 w-5 mr-2" />
              Book Consultation
            </button>
            
           
            
            {/* Email Button */}
            <a
              href="mailto:contact@crglobaladvisory.com?subject=Custom%20Package%20Request"
              className="flex items-center justify-center px-6 py-3 border-2 border-secondary text-secondary font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors"
            >
              <EnvelopeIcon className="h-5 w-5 mr-2" />
              Request Custom Quotation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}