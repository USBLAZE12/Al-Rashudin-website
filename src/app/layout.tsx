import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Al Rashudin Engineering | Hydraulic Seals & Crane Parts UAE",
  description:
    "Premium hydraulic seals, crane components, and industrial parts. Expert engineering solutions for heavy equipment in UAE and globally.",
  keywords:
    "hydraulic seals, crane parts, hydraulic cylinders, seal kits, industrial parts, UAE, engineering, heavy equipment",
  authors: [{ name: "Al Rashudin Engineering" }],
  openGraph: {
    title: "Al Rashudin Engineering | Hydraulic Seals & Crane Parts UAE",
    description:
      "Premium hydraulic seals, crane components, and industrial parts. Expert engineering solutions for heavy equipment.",
    type: "website",
    locale: "en_US",
    siteName: "Al Rashudin Engineering",
  },
  twitter: {
    card: "summary_large_image",
    title: "Al Rashudin Engineering | Hydraulic Seals & Crane Parts UAE",
    description:
      "Premium hydraulic seals, crane components, and industrial parts.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`font-sans antialiased bg-background text-foreground`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}