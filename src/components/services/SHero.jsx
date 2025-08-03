import { Link } from 'react-router-dom';
import { useState } from 'react';
import { CalendarIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import ConsultationModal from '../layout/ConsultationModal';

export default function Hero() {
  const [open, setOpen] = useState(false);
  return (
    <section className="relative bg-gray-900 overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <img
          src="/assets/shero.jpg" 
          alt="Dubai and African city skyline"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-secondary/50 mix-blend-multiply" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center md:text-left max-w-3xl">
          {/* Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Strategic Services to Power Your Expansion
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            From business setup to mega-project consultancy, our tailored services guide investors, corporations, and governments with clarity, compliance, and confidence.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button
                onClick={() => setOpen(true)}
                className="flex items-center justify-center bg-secondary text-primary font-bold py-4 px-8 rounded-lg "
              >
                <CalendarIcon className="h-6 w-6 mr-2" />
                Book a Consultation
              </button>
              <ConsultationModal open={open} onClose={() => setOpen(false)} />
            
          </div>
        </div>
      </div>
    </section>
  );
}