import Link from "next/link";
import { companyInfo, getWhatsAppLink } from "@/lib/company";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Crane Boom Repair", href: "/services#boom-repair" },
    { name: "Slewing Bearings", href: "/services#slewing-bearings" },
    { name: "Dismantling & Reassembly", href: "/services#crane-dismantling" },
    { name: "Hydraulic Seals", href: "/services#hydraulic-seals" },
    { name: "Cylinder Repair", href: "/services#hydraulic-cylinder" },
    { name: "Precision Machining", href: "/services#precision-machining" },
  ],
  quick: [
    { name: "Request Quote", href: "/contact" },
    { name: "WhatsApp Chat", href: getWhatsAppLink(), external: true },
    { name: "Bulk Orders", href: "/contact" },
    { name: "Technical Support", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-500/[0.03] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Company Info - larger */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-11 h-11 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20">
                <span className="text-white font-bold text-lg">AR</span>
              </div>
              <div className="leading-tight">
                <h3 className="text-[18px] font-bold text-white tracking-tight">Al Rashideen</h3>
                <p className="text-[11px] text-orange-500 font-semibold tracking-widest uppercase -mt-1">Engineering</p>
              </div>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              {companyInfo.description} Trusted since 2002 for crane structural repair, hydraulic seals, and precision engineering across UAE and 50+ countries.
            </p>

            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-gray-400 text-sm">
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="leading-relaxed">{companyInfo.contact.address}</span>
              </div>

              <div className="grid grid-cols-1 gap-2">
                {companyInfo.contact.phones.map((phone, i) => (
                  <a key={i} href={`tel:${phone.replace(/\s+/g, "")}`} className="flex items-center space-x-3 text-gray-400 hover:text-white text-sm transition-colors group">
                    <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-orange-500/30 transition-colors">
                      <svg className="w-4 h-4 text-gray-500 group-hover:text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span>{phone}</span>
                  </a>
                ))}
                <a href={`mailto:${companyInfo.contact.email}`} className="flex items-center space-x-3 text-gray-400 hover:text-white text-sm transition-colors group">
                  <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-orange-500/30 transition-colors">
                    <svg className="w-4 h-4 text-gray-500 group-hover:text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span>{companyInfo.contact.email}</span>
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-2 pt-2">
              {[
                { name: "WhatsApp", href: companyInfo.social.whatsapp, icon: "wa" },
                { name: "Facebook", href: companyInfo.social.facebook, icon: "fb" },
                { name: "LinkedIn", href: companyInfo.social.linkedin, icon: "in" },
                { name: "TikTok", href: companyInfo.social.tiktok, icon: "tt" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-white hover:text-black hover:border-white flex items-center justify-center text-gray-400 transition-all hover:scale-105"
                  aria-label={social.name}
                >
                  {social.icon === "wa" ? (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  ) : (
                    <span className="text-xs font-bold">{social.icon.toUpperCase()}</span>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block transform">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block transform">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Support</h4>
            <ul className="space-y-3">
              {footerLinks.quick.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm transition-colors">
                      {link.name}
                    </a>
                  ) : (
                    <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 rounded-xl bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20">
              <p className="text-xs text-orange-400 font-semibold uppercase tracking-wider mb-2">Need Urgent Help?</p>
              <a href={getWhatsAppLink("Hello, I have an urgent crane repair requirement.")} target="_blank" rel="noopener noreferrer" className="text-white text-sm font-medium hover:text-orange-400 transition-colors">
                WhatsApp Now →<br />
                <span className="text-gray-400 text-xs">{companyInfo.contact.whatsappDisplay}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-center md:text-left">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
              </p>
              <div className="flex items-center gap-1 text-xs text-gray-600">
                <span className="w-1 h-1 bg-gray-600 rounded-full hidden md:block" />
                <span>Est. 2002 • Sharjah, UAE • Serving 50+ Countries</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">
                Terms
              </Link>
              <span className="text-xs text-gray-600 hidden sm:inline-flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Available on WhatsApp
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
