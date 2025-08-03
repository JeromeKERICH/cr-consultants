import {
    AcademicCapIcon,
    ArrowPathIcon,
    ChartBarIcon,
    GlobeAltIcon,
    CheckCircleIcon,
    ClipboardDocumentCheckIcon,
    Cog6ToothIcon,
    DocumentCheckIcon,
    FlagIcon,
    LightBulbIcon,
    ScaleIcon,
    ShieldCheckIcon,
    SparklesIcon,
    UserGroupIcon,
    UsersIcon
  } from '@heroicons/react/24/outline';
  import { Link } from 'react-router-dom';
  
  export default function LeadershipDevelopmentService() {
    return (
      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative bg-gray-900 overflow-hidden">
          {/* Background Image with Gradient Overlay */}
          <div className="absolute inset-0">
            <img
              src="/assets/s4.jpg" // Add your image to public/images/
              alt="Leadership team in discussion"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#002366]/90 via-[#002366]/70 to-[#D4AF37]/50" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
            <h1 className="text-2xl md:text-5xl font-bold text-secondary mb-6">
              Leadership Development & Capacity Building
            </h1>
            <p className="text-l md:text-xl text-blue-100 max-w-3xl mx-auto">
              Transforming leaders who transform organizations across Africa and the UAE
            </p>
          </div>
        </section>
  
        {/* Overview Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">The Leadership Imperative</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Strong leadership is the engine that drives sustainable growth. In Africa and the UAE, where markets are dynamic, multi-cultural, and rapidly evolvin, leaders need vision, adaptability, governance expertise, and cultural intelligence.
                </p>
                <div className="bg-white p-6 rounded-lg border-l-4 border-secondary shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Why Invest in Leadership Development?</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      Navigate complex cross-cultural business environments
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      Meet investor demands for strong governance frameworks
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      Future-proof organizations against market volatility
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-10 lg:mt-0">
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    
                    Our Leadership Philosophy
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-start p-3 bg-blue-50 rounded-lg">
                      <ShieldCheckIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <div className="ml-3">
                        <h4 className="font-medium text-gray-900">Transformational</h4>
                        <p className="text-sm text-gray-600">Elevating leaders who drive meaningful change</p>
                      </div>
                    </div>
                    <div className="flex items-start p-3 bg-blue-50 rounded-lg">
                      <ShieldCheckIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <div className="ml-3">
                        <h4 className="font-medium text-gray-900">Governance-Focused</h4>
                        <p className="text-sm text-gray-600">Embedding best practices at all levels</p>
                      </div>
                    </div>
                    <div className="flex items-start p-3 bg-blue-50 rounded-lg">
                      <ShieldCheckIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <div className="ml-3">
                        <h4 className="font-medium text-gray-900">Contextual</h4>
                        <p className="text-sm text-gray-600">Tailored to Africa-UAE business realities</p>
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
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">Our Leadership Solutions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {/* Executive Coaching */}
              <div className="bg-gray-50 p-8 rounded-xl border border-secondary">
                <div className="flex items-center mb-4">
                  
                  <h3 className="ml-3 text-xl font-bold text-gray-900">Executive Mentorship & Coaching</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2">One-on-one coaching for CEOs and senior managers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Strategic decision-making and change leadership</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Personal brand positioning for executives</span>
                  </li>
                </ul>
              </div>
  
              {/* Board Governance */}
              <div className="bg-gray-50 p-8 rounded-xl border border-secondary">
                <div className="flex items-center mb-4">
                  
                  <h3 className="ml-3 text-xl font-bold text-gray-900">Board Governance & ESG Training</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Governance frameworks aligned with international standards</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2">ESG compliance and sustainability training</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Board evaluation and succession planning</span>
                  </li>
                </ul>
              </div>
  
              {/* Women in Leadership */}
              <div className="bg-gray-50 p-8 rounded-xl border border-secondary">
                <div className="flex items-center mb-4">
                  
                  <h3 className="ml-3 text-xl font-bold text-gray-900">Women in Leadership Programs</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Tailored mentorship for women executives</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Pan-African and UAE networking platforms</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Gender-balanced leadership pipeline development</span>
                  </li>
                </ul>
              </div>
  
              {/* Youth Leadership */}
              <div className="bg-gray-50 p-8 rounded-xl border border-secondary">
                <div className="flex items-center mb-4">
                  
                  <h3 className="ml-3 text-xl font-bold text-gray-900">Youth Leadership & Capacity Building</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Programs for emerging leaders (18-35 years)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Innovation and entrepreneurship training</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Leadership boot camps and global exchanges</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
  
        {/* Why This Matters */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">Why Leadership Development Matters</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  
                  Africa-UAE Business Context
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-secondary/10 p-1 rounded-full mr-3">
                      <ShieldCheckIcon className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <span className="font-medium">Cultural Complexity:</span> Navigating multiple business norms and regulations
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-secondary/10 p-1 rounded-full mr-3">
                      <CheckCircleIcon className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <span className="font-medium">Governance Requirements:</span> Investors demand strong frameworks
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-secondary/10 p-1 rounded-full mr-3">
                      <ShieldCheckIcon className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <span className="font-medium">Global Competition:</span> Leaders must perform on international standards
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  
                  ESG & Impact Imperatives
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-secondary/10 p-1 rounded-full mr-3">
                      <CheckCircleIcon className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <span className="font-medium">Sustainability:</span> Environmental compliance is now mandatory
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-secondary/10 p-1 rounded-full mr-3">
                      <ShieldCheckIcon className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <span className="font-medium">Social Responsibility:</span> Stakeholders expect ethical leadership
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-secondary/10 p-1 rounded-full mr-3">
                      <CheckCircleIcon className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <span className="font-medium">Long-Term Value:</span> Organizations judged on more than just profit
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
  
        
  
        
  
        {/* Why Choose Us */}
        <section className="py-16 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center mb-12">Why Our Leadership Programs Stand Out</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <ScaleIcon className="h-8 w-8 text-secondary" />,
                  title: "Legal-Grade Governance",
                  desc: "Designed by licensed governance experts"
                },
                {
                  icon: <GlobeAltIcon className="h-8 w-8 text-secondary" />,
                  title: "Africa-UAE Focus",
                  desc: "Contextual to regional business realities"
                },
                {
                  icon: <SparklesIcon className="h-8 w-8 text-secondary" />,
                  title: "Transformational Impact",
                  desc: "Proven track record of elevating leaders"
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Develop Leaders Who Can Transform Your Organization</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Our Africa-UAE leadership specialists will design a program tailored to your organizational needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/book"
                className="flex items-center justify-center px-6 py-3 bg-secondary text-primary font-semibold rounded-lg hover:bg-secondary-light transition-colors"
              >
                Discuss Leadership Program
              </Link>
              <Link
                to="/contact"
                className="flex items-center justify-center px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                Request Custom Proposal
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }