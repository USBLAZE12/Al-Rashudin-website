"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { companyInfo, getWhatsAppLink } from "@/lib/company";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    subject: "Request a Quote",
    message: "",
    craneModel: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Build WhatsApp message
    const whatsappMessage = `Hello Al Rashideen Team,%0A%0A*New Enquiry from Website*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email}%0A*Company:* ${formData.company || "N/A"}%0A*Crane Model:* ${formData.craneModel || "N/A"}%0A*Subject:* ${formData.subject}%0A%0A*Message:*%0A${formData.message}%0A%0APlease share quote & next steps.%0AThank you!`;

    // Simulate small delay then open WhatsApp
    await new Promise((resolve) => setTimeout(resolve, 800));

    window.open(`https://wa.me/${companyInfo.contact.whatsapp}?text=${whatsappMessage}`, "_blank");

    setIsSubmitting(false);
  };

  const handleDirectWhatsApp = () => {
    window.open(getWhatsAppLink("Hello Al Rashideen Team, I need help with my crane repair job."), "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      id="inquiry"
      className="bg-[#141414] border border-white/[0.06] rounded-2xl sm:rounded-[20px] p-6 sm:p-8"
    >
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
            Send Enquiry
          </h2>
          <p className="text-gray-400 text-sm">
            Fill the form and we&apos;ll open WhatsApp with your details pre-filled for fastest response.
          </p>
        </div>
        <div className="hidden sm:flex w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 items-center justify-center">
          <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-300 text-xs font-medium mb-2 uppercase tracking-wider">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-[#0a0a0a] border border-white/[0.06] rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-orange-500/30 focus:bg-[#0f0f0f] transition-all"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label className="block text-gray-300 text-xs font-medium mb-2 uppercase tracking-wider">
              Phone / WhatsApp *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full bg-[#0a0a0a] border border-white/[0.06] rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-orange-500/30 focus:bg-[#0f0f0f] transition-all"
              placeholder="+971 5X XXX XXXX"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-300 text-xs font-medium mb-2 uppercase tracking-wider">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-[#0a0a0a] border border-white/[0.06] rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-orange-500/30 focus:bg-[#0f0f0f] transition-all"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-gray-300 text-xs font-medium mb-2 uppercase tracking-wider">
              Company
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full bg-[#0a0a0a] border border-white/[0.06] rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-orange-500/30 focus:bg-[#0f0f0f] transition-all"
              placeholder="Your company name"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-300 text-xs font-medium mb-2 uppercase tracking-wider">
            Crane Model / Equipment
          </label>
          <input
            type="text"
            name="craneModel"
            value={formData.craneModel}
            onChange={handleChange}
            className="w-full bg-[#0a0a0a] border border-white/[0.06] rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-orange-500/30 focus:bg-[#0f0f0f] transition-all"
            placeholder="e.g. Liebherr LTM1500, Tadano Faun 220T, XCMG 300T"
          />
        </div>

        <div>
          <label className="block text-gray-300 text-xs font-medium mb-2 uppercase tracking-wider">
            Subject *
          </label>
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full bg-[#0a0a0a] border border-white/[0.06] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-orange-500/30 focus:bg-[#0f0f0f] transition-all"
          >
            <option value="Request a Quote">Request a Quote</option>
            <option value="Crane Boom Repair">Crane Boom Repair - Strenx 960</option>
            <option value="Slewing Bearing">Slewing Bearing Supply/Replacement</option>
            <option value="Dismantling & Reassembly">Crane Dismantling & Reassembly</option>
            <option value="Hydraulic Seal Kit">Hydraulic Seal Kit / O-Rings</option>
            <option value="Cylinder Repair">Hydraulic Cylinder Repair</option>
            <option value="Precision Machining">Precision Machining & Fabrication</option>
            <option value="Bulk Order">Bulk Order Inquiry</option>
            <option value="Technical Support">Technical Support</option>
            <option value="Other">Other - General Inquiry</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-300 text-xs font-medium mb-2 uppercase tracking-wider">
            Message / Requirements *
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full bg-[#0a0a0a] border border-white/[0.06] rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-orange-500/30 focus:bg-[#0f0f0f] transition-all resize-none"
            placeholder="Describe your requirements, issue, part numbers, or attach photos on WhatsApp after sending..."
          />
        </div>

        <div className="bg-green-500/5 border border-green-500/10 rounded-xl p-3 flex gap-3">
          <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-green-200/80 text-xs leading-relaxed">
            <span className="font-semibold text-green-300">WhatsApp Priority:</span> Your details will be pre-filled in WhatsApp for fastest response (within 2 hours). You can also attach photos/videos of your machine directly on WhatsApp.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 bg-[#25D366] hover:bg-[#128C7E] disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-3.5 rounded-xl font-semibold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] inline-flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Opening WhatsApp...
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Send via WhatsApp
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleDirectWhatsApp}
            className="sm:w-auto border border-white/10 hover:border-white/20 bg-white/[0.03] hover:bg-white/[0.06] text-white px-6 py-3.5 rounded-xl font-semibold text-sm transition-all inline-flex items-center justify-center gap-2"
          >
            Quick Chat
          </button>
        </div>

        <p className="text-center text-gray-500 text-[11px]">
          By submitting, you agree to be contacted via WhatsApp/phone for your enquiry. Average response: 2 hours.
        </p>
      </form>
    </motion.div>
  );
}
