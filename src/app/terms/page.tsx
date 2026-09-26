import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="pt-36 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm">
        <div className="border-b border-slate-200 pb-6 mb-8">
          <span className="text-red-600 text-xs font-bold uppercase tracking-wider inline-block bg-red-50 border border-red-100 px-3 py-1 rounded-md mb-2">
            Terms & Conditions
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-slate-500 text-xs mt-2">
            Effective Date: September 2026 | Al Rashudin Engineering
          </p>
        </div>

        <div className="space-y-8 text-slate-600 text-sm sm:text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center">
              <span className="w-2 h-4 bg-red-600 rounded mr-2" />
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing, browsing, or placing orders via the Al Rashudin Engineering website, you agree to be bound by these Terms of Service, all applicable laws, and regulations governing commercial trade in the UAE.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center">
              <span className="w-2 h-4 bg-red-600 rounded mr-2" />
              2. Products, Quotes & Specifications
            </h2>
            <p>
              All technical specifications, pressure ratings, compound durometers, and part numbers displayed on this site or provided in quotations are indicative of OEM tolerances. Customers are advised to confirm physical gland dimensions and operating media prior to installation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center">
              <span className="w-2 h-4 bg-red-600 rounded mr-2" />
              3. Custom Machining & Rebuild Orders
            </h2>
            <p>
              Custom-machined seals, reconditioned cylinder assemblies, and bespoke mechanical parts are manufactured strictly according to the customer-approved dimensional drawings or physical samples supplied.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center">
              <span className="w-2 h-4 bg-red-600 rounded mr-2" />
              4. Governing Law
            </h2>
            <p>
              These terms are governed by and construed in accordance with the laws of the Emirate of Sharjah and the federal laws of the United Arab Emirates.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center">
              <span className="w-2 h-4 bg-red-600 rounded mr-2" />
              5. Inquiries
            </h2>
            <p>
              For legal or trade inquiries, contact Al Rashudin Engineering at{" "}
              <a
                href="mailto:info@alrashudin.com"
                className="text-red-600 font-bold hover:underline"
              >
                info@alrashudin.com
              </a>.
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
