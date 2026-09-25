import Link from "next/link";
import { companyInfo, getWhatsAppLink } from "@/lib/company";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0a0a0a] px-4">
      <div className="text-center max-w-md w-full">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[#141414] border border-white/[0.06] mb-6">
            <span className="text-3xl font-bold text-white/20">404</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
            Page Not Found
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Check our services or contact us on WhatsApp.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <Link
            href="/"
            className="bg-white text-black hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold text-sm transition-colors inline-flex items-center justify-center"
          >
            Go to Homepage
          </Link>
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/services"
              className="border border-white/10 hover:border-white/20 bg-white/[0.03] hover:bg-white/[0.06] text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors inline-flex items-center justify-center"
            >
              Services
            </Link>
            <a
              href={getWhatsAppLink("Hello, I couldn't find the page I was looking for.")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors inline-flex items-center justify-center"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <p className="text-gray-600 text-xs mt-8">
          {companyInfo.contact.shortAddress} • {companyInfo.contact.primaryPhone}
        </p>
      </div>
    </main>
  );
}
