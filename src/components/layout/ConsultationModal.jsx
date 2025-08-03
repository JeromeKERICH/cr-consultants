import { useState } from "react";
import { createPortal } from "react-dom";
import { supabase } from "../../library/supabaseClient";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css"; // Default styles

// Calendly embed script loader remains the same
const loadCalendly = () => {
  if (document.getElementById("calendly-script")) return;
  const script = document.createElement("script");
  script.id = "calendly-script";
  script.src = "https://assets.calendly.com/assets/external/widget.js";
  script.async = true;
  document.body.appendChild(script);
};

export default function ConsultationModal({ open, onClose }) {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    preferred_date: "",
    service: "",
    notes: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handlePhoneChange = (value) => {
    setForm((f) => ({ ...f, phone: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    if (!form.full_name || !form.email || !form.service) {
      setErrorMsg("Full name, email, and service are required.");
      return;
    }
    setLoading(true);
    
    const { data, error } = await supabase.from("consultations").insert({
      full_name: form.full_name,
      email: form.email,
      phone: form.phone || null,
      preferred_date: form.preferred_date || null,
      service: form.service,
      notes: form.notes || null,
      status: "pending",
    });
    
    setLoading(false);
    if (error) {
      setErrorMsg("Submission failed. Please try again.");
      console.error(error);
      return;
    }
    setSubmitted(true);
    loadCalendly();
  };

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 overflow-auto">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative">
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl p-2"
        >
          &times;
        </button>
        
        <div className="pt-12 p-6 md:p-8">
          {!submitted ? (
            <>
              <h2 className="text-2xl font-bold mb-2 text-gray-800">
                Book a Consultation
              </h2>
              <p className="text-gray-600 mb-6">
                Fill in your details and choose a preferred date. After submission, schedule your actual call.
              </p>
              
              {errorMsg && (
                <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4">
                  {errorMsg}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {/* Full Name */}
                <div className="col-span-1">
                  <label className="block text-sm font-medium mb-1 text-gray-700">
                    Full Name *
                  </label>
                  <input
                    name="full_name"
                    type="text"
                    required
                    value={form.full_name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                {/* Email */}
                <div className="col-span-1">
                  <label className="block text-sm font-medium mb-1 text-gray-700">
                    Email *
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                {/* Phone Number with react-phone-number-input */}
                <div className="col-span-1">
                  <label className="block text-sm font-medium mb-1 text-gray-700">
                    Phone Number
                  </label>
                  <PhoneInput
                    international
                    defaultCountry="AE" // Default to UAE
                    value={form.phone}
                    onChange={handlePhoneChange}
                    className="border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    inputClassName="w-full px-3 py-2 focus:outline-none"
                  />
                </div>
                
                {/* Preferred Date */}
                <div className="col-span-1">
                  <label className="block text-sm font-medium mb-1 text-gray-700">
                    Preferred Date
                  </label>
                  <input
                    name="preferred_date"
                    type="date"
                    value={form.preferred_date}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                {/* Service - spans both columns */}
                <div className="col-span-1 md:col-span-2">
                  <label className="block text-sm font-medium mb-1 text-gray-700">
                    Service *
                  </label>
                  <select
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="Business Strategy & Expansion Consultancy">Business Strategy & Expansion Consultancy</option>
                    <option value="Cross-Border Investment & Trade Facilitation">Cross-Border Investment & Trade Facilitation</option>
                    <option value="Infrastructure & Mega Project Consultancy">Infrastructure & Mega Project Consultancy</option>
                    <option value="Immigration & Residency Pathway Advisory">Immigration & Residency Pathway Advisory</option>
                    <option value="Family Office & Wealth Structuring">Family Office & Wealth Structuring</option>
                    <option value="Leadership Development & Capacity Building">Leadership Development & Capacity Building</option>
                    <option value="Legal Consultancy Outside UAE Jurisdiction">Legal Consultancy Outside UAE Jurisdiction</option>
                  </select>
                </div>
                
                {/* Notes - spans both columns */}
                <div className="col-span-1 md:col-span-2">
                  <label className="block text-sm font-medium mb-1 text-gray-700">
                    Notes / Message
                  </label>
                  <textarea
                    name="notes"
                    rows="4"
                    value={form.notes}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                {/* Submit Button */}
                <div className="col-span-1 md:col-span-2 flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto flex items-center justify-center bg-secondary text-primary font-bold py-3 px-8 rounded-lg hover:bg-secondary-dark transition-colors disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : "Submit"}
                  </button>
                  <div className="text-sm text-gray-500 text-center sm:text-left">
                    You'll be directed to schedule the call after submission.
                  </div>
                </div>
              </form>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-2 text-gray-800">
                Schedule Your Call
              </h2>
              <p className="text-gray-600 mb-4">
                Thanks for submitting your details. Pick a slot that works for you below:
              </p>
              <div className="w-full">
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/cr-info-consultants/30min"
                  style={{ minWidth: "320px", height: "700px" }}
                ></div>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                If you don't see available slots, feel free to reach out on WhatsApp directly.
              </p>
            </>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}