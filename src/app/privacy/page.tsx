import Link from "next/link";
import { companyInfo } from "@/lib/company";

export default function PrivacyPage() {
  return (
    <main className="pt-28 pb-20 bg-[#0a0a0a] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/[0.08] rounded-full px-3 py-1 mb-4">
            <span className="text-white/60 text-[11px] font-semibold uppercase tracking-widest">Legal</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">Privacy Policy</h1>
          <p className="text-gray-400 text-sm">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })} • {companyInfo.name}
          </p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 bg-[#141414] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
          {[
            {
              title: "1. Information We Collect",
              content: "When you use our website or contact us via WhatsApp, phone, or enquiry form, we may collect:",
              list: [
                "Name and contact information (email, phone number, WhatsApp)",
                "Company name and position",
                "Crane model, equipment details, and inquiry specifics",
                "Photos/videos of equipment you share for identification",
                "IP address and browser information (automatically collected)",
              ],
            },
            {
              title: "2. How We Use Your Information",
              content: "We use the information to:",
              list: [
                "Respond to your inquiries and provide quotes within 2 hours",
                "Identify correct parts, compatibility, and engineering solutions",
                "Process orders and arrange shipping to 50+ countries",
                "Provide technical support for crane repair and hydraulic systems",
                "Improve our services and website experience",
              ],
            },
            {
              title: "3. WhatsApp Communication",
              content:
                "We prioritize WhatsApp for fastest response (within 2 hours). When you contact us via WhatsApp, your messages, photos, and contact details are used solely to provide engineering support and quotes. We do not share your WhatsApp data with third parties for marketing.",
            },
            {
              title: "4. Information Security",
              content:
                "We implement appropriate security measures to protect your personal and equipment information from unauthorized access. However, no method of transmission over the Internet or WhatsApp is 100% secure.",
            },
            {
              title: "5. Third-Party Services",
              content:
                "We may use third-party services for analytics and communication. These services have their own privacy policies. We only share necessary information to fulfill your engineering requirements.",
            },
            {
              title: "6. Your Rights",
              content: "You have the right to:",
              list: [
                "Access your personal data we hold",
                "Correct inaccurate data",
                "Request deletion of your data",
                "Opt-out of marketing communications (we send minimal marketing)",
                "Request information about data processing",
              ],
            },
            {
              title: "7. Contact Us",
              content: `If you have any questions about this Privacy Policy, please contact us at:`,
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
          <Link href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
