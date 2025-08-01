import { useState } from 'react';
import { supabase } from '../library/supabaseClient';
import { MapPinIcon, EnvelopeIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/outline';
import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/solid';
import { CalendarIcon } from '@heroicons/react/24/outline';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Save to Supabase
    const { error } = await supabase
      .from('contact_messages')
      .insert([formData]);

    if (!error) {
      // Send email notification (you'd implement this separately)
      await sendEmailNotification(formData);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white to-blue-50">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#global-lines)" />
            <pattern id="global-lines" patternUnits="userSpaceOnUse" width="40" height="40">
              <path d="M0,40 L40,0 M-10,10 L10,-10 M30,50 L50,30" stroke="#002366" strokeWidth="0.5" />
            </pattern>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-15 text-center">
          <h1 className="text-2xl md:text-5xl font-bold text-primary mb-4">
            Let's Start the Conversation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Reach out to our Africa-UAE advisory team for personalized support.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Offices</h2>
            
            <div className="space-y-6">
              <div className="flex">
                <MapPinIcon className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">UAE Office</h3>
                  <p className="text-gray-600">Meydan Grandstand, 6th floor.</p>
                  <p className="text-gray-600">Meydan Road, Nad Al, Sheba, Dubai, UAE</p>
                </div>
              </div>
              
              <div className="flex">
                <EnvelopeIcon className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <a href="mailto:contact@crglobaladvisory.com" className="text-gray-600 hover:text-primary">
                    info@crconsultants.com
                  </a>
                </div>
              </div>
              
              <div className="flex">
                <PhoneIcon className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                  <a href="tel:+971XXXXXXXXX" className="text-gray-600 hover:text-primary">
                    +971 123 456 7890
                  </a>
                </div>
              </div>

              
              <div className="flex">
                <ClockIcon className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">Office Hours</h3>
                  <p className="text-gray-600">Mon–Fri: 9:00 AM – 6:00 PM (UAE)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            {submitSuccess ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <p className="text-green-800">Thank you! Your message has been sent. We'll respond within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service Interested In</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                  >
                    <option value="">Select a service</option>
                    <option value="Business Strategy">Business Strategy</option>
                    <option value="Trade Facilitation">Trade Facilitation</option>
                    <option value="Immigration">Immigration</option>
                    <option value="Legal">Legal</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                  />
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    {isSubmitting ? 'Sending...' : (
                      <>
                        <EnvelopeIcon className="h-5 w-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Locations</h2>
          <div className="grid grid-cols-1">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Dubai, UAE</h3>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178511366393!2d55.27218771500909!3d25.19751498389613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sBusiness%20Bay!5e0!3m2!1sen!2sae!4v1620000000000!5m2!1sen!2sae"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
        
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Growth Journey Starts Here</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Book a consultation with our advisory team or connect instantly via WhatsApp for faster response.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => window.Calendly.initPopupWidget({ url: 'https://calendly.com/your-username' })}
              className="flex items-center justify-center px-6 py-3 bg-secondary text-primary font-semibold rounded-lg hover:bg-secondary-light transition-colors"
            >
              <CalendarIcon className="h-5 w-5 mr-2" />
              Book Consultation
            </button>
            <a
              href="https://wa.me/971XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors"
            >
              <ChatBubbleBottomCenterTextIcon className="h-5 w-5 mr-2" />
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
