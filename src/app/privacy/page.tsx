import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="pt-36 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm">
        <div className="border-b border-slate-200 pb-6 mb-8">
          <span className="text-red-600 text-xs font-bold uppercase tracking-wider inline-block bg-red-50 border border-red-100 px-3 py-1 rounded-md mb-2">
            Legal & Compliance
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-slate-500 text-xs mt-2">
            Last Updated: September 2026 | Al Rashudin Engineering, Sharjah, UAE
          </p>
        </div>

        <div className="space-y-8 text-slate-600 text-sm sm:text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center">
              <span className="w-2 h-4 bg-red-600 rounded mr-2" />
              1. Information We Collect
            </h2>
            <p>
              When you visit our website, request quotations, or contact our workshop, we may collect the following details:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1.5 pl-2 text-slate-700">
              <li>Full Name, company organization, and professional job title</li>
              <li>Business contact coordinates (email address, mobile / WhatsApp phone numbers)</li>
              <li>Equipment specifications, machinery models, hydraulic cylinder drawings, and RFQ messages</li>
              <li>Standard website analytics (IP address, device type, browser telemetry)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center">
              <span className="w-2 h-4 bg-red-600 rounded mr-2" />
              2. How We Utilize Customer Information
            </h2>
            <p>
              The information collected is used exclusively for engineering and business transactions:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1.5 pl-2 text-slate-700">
              <li>Preparing accurate technical part cross-references and price quotes</li>
              <li>Fulfilling customer purchase orders and scheduling courier / freight delivery</li>
              <li>Providing technical guidance and maintenance recommendations</li>
              <li>Maintaining warranty logs and quality audit trails</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center">
              <span className="w-2 h-4 bg-red-600 rounded mr-2" />
              3. Data Security & Storage
            </h2>
            <p>
              We enforce administrative and technical safeguards to prevent unauthorized access or accidental loss of your commercial and proprietary engineering documents.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center">
              <span className="w-2 h-4 bg-red-600 rounded mr-2" />
              4. Third-Party Services
            </h2>
            <p>
              We do not sell, rent, or trade your contact information. Relevant shipping data is shared solely with certified courier networks (e.g. DHL, FedEx, local UAE couriers) to fulfill deliveries.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center">
              <span className="w-2 h-4 bg-red-600 rounded mr-2" />
              5. Contact Us Regarding Privacy
            </h2>
            <p>
              For any questions regarding this Privacy Policy or your recorded details, please email{" "}
              <a
                href="mailto:info@alrashudin.com"
                className="text-red-600 font-bold hover:underline"
              >
                info@alrashudin.com
              </a>{" "}
              or call our office at +971 50 170 1331.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-200 text-center">
          <Link
            href="/"
            className="text-red-600 hover:text-red-700 font-bold text-sm inline-flex items-center"
          >
            ← Return to Home Page
          </Link>
        </div>
      </div>
    </main>
  );
}
