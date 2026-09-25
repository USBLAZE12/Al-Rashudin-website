import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { companyInfo } from "@/lib/company";

export const metadata: Metadata = {
  title: `${companyInfo.name} | Expert Crane Repair, Boom Overhaul & Hydraulic Seals UAE`,
  description:
    "Al Rashideen Engineering - Precision crane repair, boom structural repair with Strenx 960, slewing bearings, hydraulic seals & crane components. Established 2002 in Sharjah, UAE. Serving 50+ countries.",
  keywords:
    "crane repair UAE, boom repair Strenx 960, slewing bearing, crane dismantling, hydraulic seals, crane parts UAE, heavy equipment repair Sharjah, Al Rashideen Engineering, mobile crane repair",
  authors: [{ name: companyInfo.name }],
  creator: companyInfo.name,
  publisher: companyInfo.name,
  metadataBase: new URL("https://alrashideenengg.com"),
  openGraph: {
    title: `${companyInfo.name} | Expert Crane Repair & Hydraulic Solutions`,
    description:
      "Precision machining and heavy equipment restoration since 2002. Crane structural repair, hydraulic seals, and industrial engineering solutions.",
    type: "website",
    locale: "en_AE",
    siteName: companyInfo.name,
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: companyInfo.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${companyInfo.name} | Crane Repair & Hydraulic Seals UAE`,
    description:
      "Expert crane repair, boom overhaul, slewing bearings, and hydraulic seal solutions since 2002.",
    creator: "@alrashideenengg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: "verification-token",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="font-sans antialiased bg-[#0a0a0a] text-[#ededed] overflow-x-hidden">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: companyInfo.name,
              alternateName: [companyInfo.fullName, companyInfo.groupName],
              url: "https://alrashideenengg.com",
              logo: "https://alrashideenengg.com/images/logo.png",
              description: companyInfo.description,
              foundingDate: "2002",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Industrial Area Sajaa",
                addressLocality: "Sharjah",
                addressCountry: "AE",
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: companyInfo.contact.phones[0],
                  contactType: "customer service",
                  areaServed: "AE",
                  availableLanguage: ["en", "ar", "hi"],
                },
              ],
              sameAs: [
                companyInfo.social.facebook,
                companyInfo.social.linkedin,
                companyInfo.social.twitter,
                companyInfo.social.instagram,
                companyInfo.social.tiktok,
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
