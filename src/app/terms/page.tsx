import Link from "next/link";
import { companyInfo } from "@/lib/company";

export default function TermsPage() {
  return (
    <main className="pt-28 pb-20 bg-[#0a0a0a] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/[0.08] rounded-full px-3 py-1 mb-4">
            <span className="text-white/60 text-[11px] font-semibold uppercase tracking-widest">Legal</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">Terms of Service</h1>
          <p className="text-gray-400 text-sm">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })} • {companyInfo.name}
          </p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 bg-[#141414] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
          {[
            {
              title: "1. Acceptance of Terms",
              content: `By accessing and using the ${companyInfo.name} website, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.`,
            },
            {
              title: "2. Services Overview",
              content:
                "Al Rashideen Engineering provides crane structural repair using Strenx 700 & 960, slewing bearing supply & replacement, crane dismantling & reassembly, hydraulic seal manufacturing, cylinder repair, precision machining, and related heavy equipment engineering services since 2002.",
            },
            {
              title: "3. Use of Website",
              content: "You agree to use our website only for lawful purposes:",
              list: [
                "Do not use for fraudulent or illegal activities",
                "Do not attempt unauthorized access to any part of website",
                "Do not interfere with proper working of website",
                "Provide accurate crane model and equipment information for quotes",
              ],
            },
            {
              title: "4. Quotes and Pricing",
              content:
                "All quotes provided via WhatsApp, email, or website are subject to availability, inspection, and final confirmation. Prices may vary based on material costs (Strenx steel, seal materials), dimensions, and shipping to your location. Bulk order discounts available.",
            },
            {
              title: "5. Products and Services",
              content:
                "All products (hydraulic seals, seal kits, crane components) and services (boom repair, slewing bearings, etc.) are subject to availability. We reserve the right to discontinue any product/service at any time. Specifications subject to change. OEM compatibility checked but customer should verify.",
            },
            {
              title: "6. Warranty and Liability",
              content:
                "We provide warranty on manufacturing defects and workmanship as per agreed scope. Warranty does not cover misuse, improper installation, or normal wear. NDT testing and load certification provided where applicable. Liability limited to service/product value. Not liable for downtime or consequential damages.",
            },
            {
              title: "7. Intellectual Property",
              content: `All content on this website, including text, graphics, logos, images, and project photos, is property of ${companyInfo.name} and protected by copyright and IP laws.`,
            },
            {
              title: "8. WhatsApp and Communication",
              content:
                "By contacting us via WhatsApp or providing phone number, you consent to be contacted for your enquiry, quotes, and project updates. We aim to respond within 2 hours during working hours. Emergency support available.",
            },
            {
              title: "9. Governing Law",
              content:
                "These Terms shall be governed by laws of United Arab Emirates. Any disputes subject to exclusive jurisdiction of courts of Sharjah, UAE.",
            },
            {
              title: "10. Contact",
              contact: true,
            },
          ].map((section, i) => (
            <section key={i}>
              <h2 className="text-lg font-semibold text-white mb-3">{section.title}</h2>
              {section.content && <p className="text-gray-400 text-sm leading-relaxed mb-3">{section.content}</p>}
              {section.list && (
                <ul className="list-disc list-inside text-gray-400 text-sm space-y-2 ml-2">
                  {section.list.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              )}
              {section.contact && (
                <div className="bg-[#0a0a0a] border border-white/[0.06] rounded-xl p-4 mt-3">
                  <p className="text-gray-400 text-sm leading-relaxed mb-2">
                    If you have any questions about these Terms, please contact us:
                  </p>
                  <p className="text-orange-400 text-sm font-medium">
                    Email: {companyInfo.contact.email}
                    <br />
                    WhatsApp: {companyInfo.contact.primaryPhone}
                    <br />
                    Address: {companyInfo.contact.address}
                  </p>
                </div>
              )}
            </section>
          ))}
        </div>

        <div className="mt-8 flex gap-3">
          <Link href="/" className="text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors">
            ← Back to Home
          </Link>
          <span className="text-gray-600 text-sm">•</span>
          <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </main>
  );
}
