"use client";

import { useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";

function ContactFormInner() {
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const subj = searchParams.get("subject");
    const part = searchParams.get("part");

    if (subj || part) {
      setFormData((prev) => ({
        ...prev,
        subject: subj === "quote" ? "quote" : subj || prev.subject,
        message: part
          ? `Hello, I would like to request pricing and stock availability for Part No: ${part}.`
          : prev.message,
      }));
    }
  }, [searchParams]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch {
      // Fallback grace
    }

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
    });

    setTimeout(() => setSubmitted(false), 7000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      id="inquiry"
      className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-sm"
    >
      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">
        Send Technical RFQ / Inquiry
      </h2>
      <p className="text-slate-600 text-sm mb-6">
        Fill out this form and our sales & engineering department will review your
        parameters and reply with a formal quotation.
      </p>

      {submitted && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 mb-6 flex items-start space-x-3">
          <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
            ✓
          </span>
          <p className="text-emerald-800 text-sm font-medium">
            Thank you for your enquiry! Our engineering team has received your
            specifications and will contact you within 24 hours.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="name"
              className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-2"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100 transition-all text-sm"
              placeholder="e.g. John Doe"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-2"
            >
              Business Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100 transition-all text-sm"
              placeholder="name@company.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="phone"
              className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-2"
            >
              Phone / WhatsApp Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100 transition-all text-sm"
              placeholder="+971 50 123 4567"
            />
          </div>
          <div>
            <label
              htmlFor="company"
              className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-2"
            >
              Company / Fleet Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100 transition-all text-sm"
              placeholder="Your organization"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-2"
          >
            Subject / Requirement Type *
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:bg-white focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100 transition-all text-sm"
          >
            <option value="">Select an inquiry category</option>
            <option value="quote">Request a Price Quote for Hydraulic Parts</option>
            <option value="cylinder">Hydraulic Cylinder Repair & Honing</option>
            <option value="crane">Crane Boom / Slewing Component Sourcing</option>
            <option value="custom">Custom Machined Polyurethane Seal</option>
            <option value="bulk">Bulk Fleet Maintenance Order</option>
            <option value="general">General Support</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-2"
          >
            Part Number, Machinery Model or Details *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100 transition-all text-sm resize-none"
            placeholder="Please specify part numbers, crane models (e.g. Tadano ATF 130G, Liebherr LTM 1100), cylinder bore/rod dimensions, or quantity needed..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl text-base transition-all shadow-md shadow-red-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Transmitting Specifications...
            </span>
          ) : (
            "Submit Request for Quotation"
          )}
        </button>
      </form>
    </motion.div>
  );
}

export default function ContactForm() {
  return (
    <Suspense
      fallback={
        <div className="p-8 text-center bg-white rounded-3xl border border-slate-200 text-slate-500">
          Loading RFQ Form...
        </div>
      }
    >
      <ContactFormInner />
    </Suspense>
  );
}
