// src/data/packages.js

export const packages = [
    {
      id: 1,
      slug: 'africa-market-entry',
      name: 'Africa Market Entry Package',
      priceAED: 9000,
      description: 'Market intelligence and regulatory overview to enter African markets with confidence.',
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
      name: 'UAE Company Setup Comprehensive Advisory',
      priceAED: 10800,
      description: 'Incorporation, structuring, banking and regulatory briefing for Dubai-based operations.',
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
      name: 'UAE Mainland Company Setup',
      priceAED: 10800,
      description: 'Full mainland registration with sponsorship, license processing and visas.',
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
      name: 'UAE Freezone Company Setup',
      priceAED: 7200,
      description: 'Freezone company registration with 100% ownership and office solutions.',
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
      name: 'Africa–UAE Trade Facilitation Package',
      priceAED: 14400,
      description: 'Partner sourcing, documentation, and trade enablement between Africa and the UAE.',
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
      name: 'Leadership & Governance Package',
      priceAED: 7200,
      description: 'Board governance, ESG training, and executive strategy workshops.',
      features: [
        'Board governance & ESG training',
        'Corporate strategy workshop for executive teams',
        'Leadership development program',
      ],
      bestFor: 'Boards, executives, women, and youth leaders',
    },
  ];
  
  // helper to get a package by slug
  export function getPackageBySlug(slug) {
    return packages.find((p) => p.slug === slug);
  }
  