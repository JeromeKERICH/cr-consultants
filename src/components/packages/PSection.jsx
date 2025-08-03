import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRightIcon,
  BriefcaseIcon,
  GlobeAltIcon,
  ScaleIcon,
  ArrowsRightLeftIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline';

const DISPLAY_CURRENCIES = ['AED', 'USD', 'EUR', 'GBP', 'KES'];

export default function PackageGrid() {
  const [currency, setCurrency] = useState('AED');
  const [exchangeRates, setExchangeRates] = useState({
    AED: 1,
    USD: 0.27,
    EUR: 0.25,
    GBP: 0.21,
    KES: 42.5,
  });

  // Fetch live rates (simplified - in production fetch from your backend/cached source)
  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/AED');
        const data = await response.json();
        setExchangeRates({
          AED: 1,
          USD: data.rates?.USD || exchangeRates.USD,
          EUR: data.rates?.EUR || exchangeRates.EUR,
          GBP: data.rates?.GBP || exchangeRates.GBP,
          KES: data.rates?.KES || exchangeRates.KES,
        });
      } catch (error) {
        console.log('Using fallback rates', error);
      }
    };

    fetchRates();
    const interval = setInterval(fetchRates, 3600000); // hourly refresh
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const convert = (amountInAED, targetCurrency) => {
    const rate = exchangeRates[targetCurrency];
    if (!rate) return null;
    
    const converted = (amountInAED * rate).toFixed(2);
    return converted;
  };

  const packages = [
    {
      id: 1,
      slug: 'africa-market-entry',
      title: 'Africa Market Entry Package',
      priceAED: 9000,
      icon: <GlobeAltIcon className="h-8 w-8 text-secondary" />,
      features: [
        'Market intelligence and regulatory overview report',
        'Country overview and Doing Business report',
        'Advisory session on expansion readiness',
      ],
      bestFor: 'Foreign investors exploring African opportunities',
    },
    {
      id: 2,
      slug: 'uae-company-setup-comprehensive',
      title: 'UAE Company Setup Comprehensive Advisory',
      priceAED: 10800,
      icon: <BriefcaseIcon className="h-8 w-8 text-secondary" />,
      features: [
        'Business incorporation advisory (Mainland & Freezone)',
        'Structuring guidance and banking setup support',
        'Tax & regulatory framework briefing',
      ],
      bestFor: 'Corporates & entrepreneurs setting up in Dubai',
    },
    {
      id: 3,
      slug: 'uae-mainland-setup',
      title: 'UAE Mainland Company Setup',
      priceAED: 10800,
      icon: <ScaleIcon className="h-8 w-8 text-secondary" />,
      features: [
        'Full mainland company registration',
        'Local sponsorship coordination',
        'Trade license processing',
        'Visa application support',
      ],
      bestFor: 'Businesses needing local market access',
    },
    {
      id: 4,
      slug: 'uae-freezone-setup',
      title: 'UAE Freezone Company Setup',
      priceAED: 7200,
      icon: <BriefcaseIcon className="h-8 w-8 text-secondary" />,
      features: [
        'Freezone company registration',
        '100% ownership facilitation',
        'Office space solutions',
        'License processing',
      ],
      bestFor: 'International businesses with export focus',
    },
    {
      id: 5,
      slug: 'africa-uae-trade-facilitation',
      title: 'Africa–UAE Trade Facilitation Package',
      priceAED: 14400,
      icon: <ArrowsRightLeftIcon className="h-8 w-8 text-secondary" />,
      features: [
        'Partner sourcing',
        'Trade documentation guidance',
        'Access to UAE–Africa trade networking events',
        'Customs clearance advisory',
      ],
      bestFor: 'Exporters, importers, and cross-border partners',
    },
    {
      id: 6,
      slug: 'leadership-governance',
      title: 'Leadership & Governance Package',
      priceAED: 7200,
      icon: <AcademicCapIcon className="h-8 w-8 text-secondary" />,
      features: [
        'Board governance & ESG training',
        'Corporate strategy workshop for executive teams',
        'Leadership development program',
      ],
      bestFor: 'Boards, executives, women, and youth leaders',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-3xl font-bold">Our Service Packages</h2>
          <div className="flex gap-2 items-center">
            <label htmlFor="currency" className="text-sm font-medium mr-2">
              Display currency:
            </label>
            <select
              id="currency"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="border rounded px-2 py-1"
            >
              {DISPLAY_CURRENCIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg) => {
          const converted = convert(pkg.priceAED, currency);
          const displayPrice = currency === 'AED' ? `AED ${pkg.priceAED.toLocaleString()}` : `${currency} ${converted}`;
          return (
            <div
              key={pkg.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-200"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">{pkg.icon}</div>
                  <span className="inline-block bg-secondary/10 text-secondary px-3 py-1 text-sm font-semibold rounded-full">
                    {displayPrice}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{pkg.title}</h3>

                <ul className="space-y-2 mb-4 flex-1">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="ml-2 text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Best for:</span> {pkg.bestFor}
                  </p>
                </div>

                <div className="mt-auto">
                  <Link
                    to={`/packages/enquire/${pkg.slug}`}
                    className="inline-flex items-center justify-center w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none"
                  >
                    Enquire Now
                    <ArrowRightIcon className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
