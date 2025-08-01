
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, BriefcaseIcon, GlobeAltIcon, ScaleIcon, ArrowsRightLeftIcon, AcademicCapIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

export default function PackageGrid() {
  const [currency, setCurrency] = useState('AED');
  const [exchangeRates, setExchangeRates] = useState({
    AED: 1,
    USD: 0.27,
    EUR: 0.25,
    GBP: 0.21,
    KES: 42.5
  });

  // Fetch live rates (simplified - in production use API)
  useEffect(() => {
    // This would be replaced with actual API call in production
    const fetchRates = async () => {
      try {
        // Simulating API fetch
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/AED');
        const data = await response.json();
        setExchangeRates({
          AED: 1,
          USD: data.rates.USD || 0.27,
          EUR: data.rates.EUR || 0.25,
          GBP: data.rates.GBP || 0.21,
          KES: data.rates.KES || 42.5
        });
      } catch (error) {
        console.log("Using default rates", error);
        // Fallback to default rates if API fails
      }
    };
    
    fetchRates();
    const interval = setInterval(fetchRates, 3600000); // Refresh hourly
    
    return () => clearInterval(interval);
  }, []);

  const packages = [
    {
      id: 1,
      title: "Africa Market Entry Package",
      price: "AED 9,000",
      icon: <GlobeAltIcon className="h-8 w-8 text-secondary" />,
      features: [
        "Market intelligence and regulatory overview report",
        "Country overview and Doing Business report",
        "Advisory session on expansion readiness"
      ],
      bestFor: "Foreign investors exploring African opportunities"
    },
    {
      id: 2,
      title: "UAE Company Setup Comprehensive Advisory",
      price: "AED 10,800",
      icon: <BriefcaseIcon className="h-8 w-8 text-secondary" />,
      features: [
        "Business incorporation advisory (Mainland & Freezone)",
        "Structuring guidance and banking setup support",
        "Tax & regulatory framework briefing"
      ],
      bestFor: "Corporates & entrepreneurs setting up in Dubai"
    },
    {
      id: 3,
      title: "UAE Mainland Company Setup",
      price: "AED 10,800",
      icon: <ScaleIcon className="h-8 w-8 text-secondary" />,
      features: [
        "Full mainland company registration",
        "Local sponsorship coordination",
        "Trade license processing",
        "Visa application support"
      ],
      bestFor: "Businesses needing local market access"
    },
    {
      id: 4,
      title: "UAE Freezone Company Setup",
      price: "AED 7,200",
      icon: <BriefcaseIcon className="h-8 w-8 text-secondary" />,
      features: [
        "Freezone company registration",
        "100% ownership facilitation",
        "Office space solutions",
        "License processing"
      ],
      bestFor: "International businesses with export focus"
    },
    {
      id: 5,
      title: "Africa–UAE Trade Facilitation Package",
      price: "AED 14,400",
      icon: <ArrowsRightLeftIcon className="h-8 w-8 text-secondary" />,
      features: [
        "Partner sourcing",
        "Trade documentation guidance",
        "Access to UAE–Africa trade networking events",
        "Customs clearance advisory"
      ],
      bestFor: "Exporters, importers, and cross-border partners"
    },
    {
      id: 6,
      title: "Leadership & Governance Package",
      price: "AED 7,200",
      icon: <AcademicCapIcon className="h-8 w-8 text-secondary" />,
      features: [
        "Board governance & ESG training",
        "Corporate strategy workshop for executive teams",
        "Leadership development program"
      ],
      bestFor: "Boards, executives, women, and youth leaders"
    }
  ];



  return (
    <section className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-200 m-3">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    {pkg.icon}
                  </div>
                  <span className="inline-block bg-secondary/10 text-secondary px-3 py-1 text-sm font-semibold rounded-full">
                    {pkg.price}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {pkg.title}
                </h3>
                
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="ml-2 text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Best for:</span> {pkg.bestFor}
                  </p>
                </div>
                
                <div className="mt-6">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none"
                  >
                    Enquire Now
                    <ArrowRightIcon className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
        ))}

    </div>
    </section>
  );
}