import {
    BanknotesIcon,
    BuildingLibraryIcon,
    ChartBarIcon,
    CheckCircleIcon,
    ClipboardDocumentCheckIcon,
    Cog6ToothIcon,
    CurrencyDollarIcon,
    DocumentCheckIcon,
    FingerPrintIcon,
    GlobeAltIcon,
    LightBulbIcon,
    ScaleIcon,
    ShieldCheckIcon,
    UserGroupIcon
  } from '@heroicons/react/24/outline';
  import { Link } from 'react-router-dom';
  
  export default function FamilyOfficeService() {
    return (
      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative bg-gray-900 overflow-hidden">
          {/* Background Image with Gradient Overlay */}
          <div className="absolute inset-0">
            <img
              src="/assets/s6.jpg" // Add your image to public/images/
              alt="Leadership team in discussion"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#002366]/90 via-[#002366]/70 to-[#D4AF37]/50" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
            <h1 className="text-2xl md:text-5xl font-bold text-secondary mb-6">
            Family Office & Wealth Structuring
            </h1>
            <p className="text-l md:text-xl text-blue-100 max-w-3xl mx-auto">
            Preserving and growing generational wealth across Africa and the UAE
            </p>
          </div>
        </section>
  
        {/* Overview Section */}
        <section className="py-5 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Wealth Beyond Borders</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Wealth is more than numbers, it's influence, legacy, and responsibility. For high-net-worth individuals and families, managing assets across multiple jurisdictions requires precision, compliance, and trusted advisory.
                </p>
                <div className="bg-white p-6 rounded-lg border-l-4 border-secondary shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">The Cross-Border Challenge</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      Assets scattered across complex regulatory regimes
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      Succession planning across multiple jurisdictions
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      Balancing family governance with investment growth
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-10 lg:mt-0">
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    
                    The UAE Advantage
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-start p-3 bg-blue-50 rounded-lg">
                      <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <div className="ml-3">
                        <h4 className="font-medium text-gray-900">Tax Efficiency</h4>
                        <p className="text-sm text-gray-600">No personal income, inheritance, or capital gains tax</p>
                      </div>
                    </div>
                    <div className="flex items-start p-3 bg-blue-50 rounded-lg">
                      <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <div className="ml-3">
                        <h4 className="font-medium text-gray-900">Stability</h4>
                        <p className="text-sm text-gray-600">Secure environment for wealth protection</p>
                      </div>
                    </div>
                    <div className="flex items-start p-3 bg-blue-50 rounded-lg">
                      <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <div className="ml-3">
                        <h4 className="font-medium text-gray-900">Global Connectivity</h4>
                        <p className="text-sm text-gray-600">Strategic hub between Europe, Asia and Africa</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Service Coverage */}
        <section className="py-5 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Wealth Solutions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {/* Family Office Setup */}
              <div className="bg-gray-50 p-8 rounded-xl border border-secondary">
                <div className="flex items-center mb-4">
                  
                  <h3 className="ml-3 text-xl font-bold text-gray-900">Family Office Setup</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Establishment of single or multi-family office structures</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2">UAE incorporation in DIFC or ADGM</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Governance policies and reporting frameworks</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Recruitment of dedicated family office teams</span>
                  </li>
                </ul>
              </div>
  
              {/* Wealth Structuring */}
              <div className="bg-gray-50 p-8 rounded-xl border border-secondary">
                <div className="flex items-center mb-4">
                  
                  <h3 className="ml-3 text-xl font-bold text-gray-900">Wealth Structuring</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Consolidation of global assets under efficient holding structures</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Asset protection through trusts and foundations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Tax-efficient investment portfolio optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Cross-border risk diversification</span>
                  </li>
                </ul>
              </div>
  
              {/* Succession Planning */}
              <div className="bg-gray-50 p-8 rounded-xl border border-secondary">
                <div className="flex items-center mb-4">
                  
                  <h3 className="ml-3 text-xl font-bold text-gray-900">Succession & Legacy Planning</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Multi-generational wealth transfer strategies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Cross-border estate planning compliant with African and UAE laws</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Integration of philanthropic goals</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Family governance frameworks to minimize disputes</span>
                  </li>
                </ul>
              </div>
  
              {/* Compliance & Advisory */}
              <div className="bg-gray-50 p-8 rounded-xl border border-secondary">
                <div className="flex items-center mb-4">
                  
                  <h3 className="ml-3 text-xl font-bold text-gray-900">Compliance & Investment Advisory</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Ongoing regulatory and tax compliance for multi-jurisdictional assets</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2">AML and KYC protocols</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Access to vetted cross-border investment opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Performance monitoring and reporting</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
  
        {/* Strategic Advantages */}
        <section className="py-5 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* UAE Advantages */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  
                  Why UAE for Family Offices?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-secondary/10 p-1 rounded-full mr-3">
                      <ShieldCheckIcon className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <span className="font-bold">Tax Neutrality:</span> No personal or corporate income taxes
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-secondary/10 p-1 rounded-full mr-3">
                      <ShieldCheckIcon className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <span className="font-bold">Confidentiality:</span> Discreet wealth management environment
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-secondary/10 p-1 rounded-full mr-3">
                      <ShieldCheckIcon className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <span className="font-medium">Financial Infrastructure:</span> World-class private banking and investment platforms
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-secondary/10 p-1 rounded-full mr-3">
                      <ShieldCheckIcon className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <span className="font-bold">Regulatory Support:</span> Dedicated family office frameworks in DIFC and ADGM
                    </div>
                  </li>
                </ul>
              </div>
  
              {/* African Families */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
               
                  Benefits for African Families
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-secondary/10 p-1 rounded-full mr-3">
                      <ShieldCheckIcon className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <span className="font-bold">Offshore Structuring:</span> Centralize international assets in a stable jurisdiction
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-secondary/10 p-1 rounded-full mr-3">
                      <ShieldCheckIcon className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <span className="font-bold">Global Access:</span> Easier participation in international investments
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-secondary/10 p-1 rounded-full mr-3">
                      <ShieldCheckIcon className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <span className="font-bold">Succession Clarity:</span> Streamline multi-generational wealth transfer
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-secondary/10 p-1 rounded-full mr-3">
                      <ShieldCheckIcon className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <span className="font-bold">Risk Mitigation:</span> Protect against political or economic instability
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
  
       
        {/* Our Process */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our 5-Step Wealth Structuring Process</h2>
            
            <div className="relative">
              {/* Progress line */}
              <div className="hidden md:block absolute left-0 right-0 top-8 h-1 bg-gray-200"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { 
                    icon: <DocumentCheckIcon className="h-6 w-6 text-white" />,
                    title: "Wealth Diagnostic",
                    desc: "Assess assets and family goals"
                  },
                  { 
                    icon: <Cog6ToothIcon className="h-6 w-6 text-white" />,
                    title: "Framework Design",
                    desc: "Create bespoke structuring plan"
                  },
                  { 
                    icon: <BanknotesIcon className="h-6 w-6 text-white" />,
                    title: "Implementation",
                    desc: "Incorporate entities and accounts"
                  },
                  { 
                    icon: <ClipboardDocumentCheckIcon className="h-6 w-6 text-white" />,
                    title: "Governance",
                    desc: "Establish policies and compliance"
                  },
                  { 
                    icon: <ChartBarIcon className="h-6 w-6 text-white" />,
                    title: "Ongoing Advisory",
                    desc: "Adapt to changing needs"
                  }
                ].map((step, index) => (
                  <div key={index} className="group relative">
                    {/* Number indicator */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 md:left-0 md:translate-x-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center border-4 border-white shadow-md z-10">
                      <span className="text-white font-bold text-xl">{index + 1}</span>
                    </div>
                    
                    {/* Step card */}
                    <div className="bg-white p-6 pt-12 rounded-lg shadow-sm hover:shadow-md transition-all h-full">
                      <div className="flex justify-center mb-4">
                        
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{step.title}</h3>
                      <p className="text-gray-600 text-sm text-center">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
  
        
  
        {/* Why Choose Us */}
        <section className="py-16 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Advisory</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <ScaleIcon className="h-8 w-8 text-secondary" />,
                  title: "Licensed Expertise",
                  desc: "Legal practice in African and UAE jurisdictions"
                },
                {
                  icon: <LightBulbIcon className="h-8 w-8 text-secondary" />,
                  title: "Proven Experience",
                  desc: "Structuring complex cross-border portfolios"
                },
                {
                  icon: <FingerPrintIcon className="h-8 w-8 text-secondary" />,
                  title: "Discreet Service",
                  desc: "Confidential handling of sensitive matters"
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-white/10 rounded-full">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-primary-100">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Final CTA */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Secure Your Family's Financial Legacy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Our wealth structuring specialists will design a personalized plan to protect and grow your generational assets.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/book"
                className="flex items-center justify-center px-6 py-3 bg-secondary text-primary font-semibold rounded-lg hover:bg-secondary-light transition-colors"
              >
                Begin Wealth Assessment
              </Link>
              <Link
                to="/contact"
                className="flex items-center justify-center px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                Request Family Office Guide
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }