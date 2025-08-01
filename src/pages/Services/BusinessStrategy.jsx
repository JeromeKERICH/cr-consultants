import { CalendarIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';
import { BriefcaseIcon, BuildingOfficeIcon, ShieldCheckIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { HandRaisedIcon } from '@heroicons/react/24/solid';


export default function BusinessStrategyService() {
  const features = [
    {
      icon: <BriefcaseIcon className="h-8 w-8 text-secondary" />,
      title: "Market Entry Strategies",
      description: "Tailored go-to-market roadmaps for Africa & UAE."
    },
    {
      icon: <BuildingOfficeIcon className="h-8 w-8 text-secondary" />,
      title: "Operational Frameworks",
      description: "Legal, tax, and governance models to ensure compliance"
    },
    {
      icon: <HandRaisedIcon className="h-8 w-8 text-secondary" />,
      title: "Partnerships & Local Networks",
      description: "Access to vetted partners and institutions"
    },
    {
      icon: <ShieldCheckIcon className="h-8 w-8 text-secondary" />,
      title: "Risk Mitigation",
      description: "Proactive advisory to minimize regulatory, cultural, and financial risks"
    },
    {
      icon: <GlobeAltIcon className="h-8 w-8 text-secondary" />,
      title: "Cross-Border Scaling",
      description: "Strategies for regional integration and sustainable expansion"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-900">
        <img
          src="/assets/s1.png"
          alt="Business strategy meeting"
          className="w-full h-full object-cover absolute inset-0 opacity-40"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Business Strategy & Expansion Consultancy
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
              We help businesses and investors design market entry strategies, operational frameworks, and governance models to expand confidently across Africa and the UAE.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-5 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Key Features of This Service
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="mx-auto flex items-center justify-center h-16 w-16 bg-primary/10 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Service is For */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose-lg text-gray-700 mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Who This Service is For
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-2">Foreign investors seeking structured entry into African markets</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-2">UAE-based businesses exploring African expansion</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-2">African corporates entering the UAE</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-2">Family offices & high-net-worth individuals considering regional investment</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm">
            <div className="flex items-center mb-4">
              <div className="bg-secondary/10 text-secondary p-2 rounded-lg">
                <BriefcaseIcon className="h-6 w-6" />
              </div>
              <h2 className="ml-3 text-2xl font-bold text-gray-900">
                Case Study: Supporting a UAE Retail Brand in East Africa
              </h2>
            </div>
            <div className="prose-lg text-gray-700">
              <p>
                We developed a market-entry strategy for a UAE-based retail brand expanding into Kenya. By structuring their local entity, connecting them with distribution partners, and guiding compliance, the client launched successfully within 6 months — avoiding costly missteps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose-lg text-gray-700 mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Choose Us for This Service
            </h2>
            <p className="mb-6">
              Unlike general business consultants, we bring:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-2">Licensed legal expertise across African jurisdictions</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-2">Strategic presence in Dubai for global connectivity</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-2">Proven track record in cross-border trade and investment</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-2">Leadership with 14+ years of Africa–UAE advisory experience</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Let's Design Your Expansion Strategy
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8">
            Your business deserves clarity and confidence in cross-border growth. Book a consultation today and let's map your Africa–UAE journey.
          </p>
          <button
            onClick={() => window.Calendly.initPopupWidget({ url: 'https://calendly.com/your-username' })}
            className="flex items-center justify-center mx-auto px-6 py-3 bg-secondary text-primary font-semibold rounded-lg hover:bg-secondary-light transition-colors"
          >
            <CalendarIcon className="h-5 w-5 mr-2" />
            Book Consultation
          </button>
        </div>
      </section>
    </div>
  );
}