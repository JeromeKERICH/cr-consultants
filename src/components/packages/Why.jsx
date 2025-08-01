import { CheckBadgeIcon, LightBulbIcon, ShieldCheckIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

export default function PackagesIntro() {
  const benefits = [
    {
      icon: <CheckBadgeIcon className="h-8 w-8 text-secondary" />,
      title: "Structured Approach",
      description: "Clear, phased processes eliminate guesswork"
    },
    {
      icon: <LightBulbIcon className="h-8 w-8 text-secondary" />,
      title: "Expert Advisory",
      description: "Direct access to our Africa-UAE specialists"
    },
    {
      icon: <ShieldCheckIcon className="h-8 w-8 text-secondary" />,
      title: "Compliance Assurance",
      description: "All packages include regulatory checks"
    },
    {
      icon: <ArrowPathIcon className="h-8 w-8 text-secondary" />,
      title: "End-to-End Support",
      description: "From initial setup to operational continuity"
    }
  ];

  return (
    <section className="py-5 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2">
            Why Choose Our Packages?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 bg-primary/10 rounded-full mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}