import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  products,
  getProductBySlugOrId,
  getRelatedProducts,
} from "@/data/products";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const paramsList: { slug: string }[] = [];
  products.forEach((p) => {
    paramsList.push({ slug: p.slug });
    paramsList.push({ slug: String(p.id) });
  });
  return paramsList;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlugOrId(slug);

  if (!product) {
    return {
      title: "Product Not Found | Al Rashudin Engineering",
      description: "The requested product could not be found.",
    };
  }

  return {
    title: `${product.name} (${product.partNo}) | Al Rashudin Engineering`,
    description: product.description,
    openGraph: {
      title: `${product.name} | Al Rashudin Engineering`,
      description: product.description,
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlugOrId(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product.id, product.category);
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "971501234567";
  const whatsappMessage = encodeURIComponent(
    `Hello Al Rashudin Engineering, I am interested in inquiring about ${product.name} (Part No: ${product.partNo}). Please provide pricing, stock availability, and lead time.`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const phone = process.env.NEXT_PUBLIC_CONTACT_PHONE || "+971 50 170 1331";

  return (
    <div className="bg-white min-h-screen pt-28 pb-20">
      {/* Breadcrumb Bar */}
      <nav
        aria-label="Breadcrumb"
        className="bg-slate-50 border-b border-slate-200 py-3 mb-8"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm text-slate-600">
            <li>
              <Link
                href="/"
                className="hover:text-red-600 transition-colors font-medium"
              >
                Home
              </Link>
            </li>
            <li className="text-slate-400">/</li>
            <li>
              <Link
                href="/products"
                className="hover:text-red-600 transition-colors font-medium"
              >
                Products
              </Link>
            </li>
            <li className="text-slate-400">/</li>
            <li>
              <Link
                href={`/products?category=${encodeURIComponent(
                  product.category
                )}`}
                className="hover:text-red-600 transition-colors font-medium"
              >
                {product.category}
              </Link>
            </li>
            <li className="text-slate-400">/</li>
            <li className="text-slate-900 font-semibold truncate max-w-[200px] sm:max-w-none">
              {product.name}
            </li>
          </ol>
        </div>
      </nav>

      {/* Main Product Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Left Column: Image and Key Badges */}
          <div className="lg:col-span-6">
            <div className="sticky top-28 space-y-6">
              <div className="relative h-[380px] sm:h-[480px] rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  className="object-cover"
                />
                {/* Category & Status Overlay */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="bg-red-600 text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-sm">
                    {product.category}
                  </span>
                  <span className="bg-emerald-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm flex items-center space-x-1.5">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    <span>In Stock</span>
                  </span>
                </div>
              </div>

              {/* Technical Trust Pillars */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center">
                  <div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-1.5">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div className="text-xs font-bold text-slate-900">
                    OEM Quality
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Guaranteed Fit
                  </div>
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center">
                  <div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-1.5">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div className="text-xs font-bold text-slate-900">
                    Fast UAE Dispatch
                  </div>
                  <div className="text-[11px] text-slate-500">
                    24h Delivery
                  </div>
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center">
                  <div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-1.5">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="text-xs font-bold text-slate-900">
                    Global Export
                  </div>
                  <div className="text-[11px] text-slate-500">
                    50+ Countries
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Title, Part No, Description, CTAs */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <span className="text-xs font-mono font-bold tracking-wider text-red-600 bg-red-50 border border-red-200 px-3 py-1 rounded-md">
                  Part No. {product.partNo}
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  {product.leadTime}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {product.name}
              </h1>
            </div>

            {/* Quick highlight bar */}
            <div className="bg-red-50/60 border border-red-100 rounded-xl p-4">
              <p className="text-slate-700 text-sm leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Full detailed description */}
            <div className="space-y-3">
              <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider text-xs">
                Product Overview & Engineering Details
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {product.longDescription}
              </p>
            </div>

            {/* Quick Specs Highlights */}
            {product.pressureRating && (
              <div className="grid grid-cols-2 gap-4 py-2 border-y border-slate-200">
                <div>
                  <span className="text-xs font-medium text-slate-500 block">
                    Working Pressure
                  </span>
                  <span className="text-sm font-bold text-slate-900">
                    {product.pressureRating}
                  </span>
                </div>
                <div>
                  <span className="text-xs font-medium text-slate-500 block">
                    Temperature Range
                  </span>
                  <span className="text-sm font-bold text-slate-900">
                    {product.temperatureRange}
                  </span>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-3 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3.5 px-6 rounded-xl flex items-center justify-center space-x-2 transition-colors shadow-sm"
                >
                  <svg
                    className="w-5 h-5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>Inquire on WhatsApp</span>
                </a>

                <Link
                  href={`/contact?subject=quote&part=${encodeURIComponent(
                    product.partNo
                  )}#inquiry`}
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3.5 px-6 rounded-xl flex items-center justify-center space-x-2 transition-colors shadow-sm"
                >
                  <svg
                    className="w-5 h-5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Request Official Quote</span>
                </Link>
              </div>

              <div className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600">
                <span>Need urgent technical assistance?</span>
                <a
                  href={`tel:${phone.replace(/\s+/g, "")}`}
                  className="font-bold text-red-600 hover:text-red-700 flex items-center"
                >
                  <svg
                    className="w-3.5 h-3.5 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  {phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Tabs / Sections: Features, Specs, Applications, What's Included */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-slate-200 pt-12">
          {/* Features Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                <span className="w-2.5 h-6 bg-red-600 rounded mr-3" />
                Key Features & Engineering Benefits
              </h2>
              <ul className="space-y-4">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span className="text-slate-700 text-sm leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Compatible Applications */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                <span className="w-2.5 h-6 bg-red-600 rounded mr-3" />
                Recommended Applications & Machinery
              </h2>
              <div className="flex flex-wrap gap-2 pt-2">
                {product.applications.map((app, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-white text-slate-800 border border-slate-200 shadow-xs"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 mr-2" />
                    {app}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Specifications & Inclusions Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                <span className="w-2.5 h-6 bg-red-600 rounded mr-3" />
                Technical Specifications
              </h2>
              <div className="divide-y divide-slate-200 bg-white rounded-xl border border-slate-200 overflow-hidden text-sm">
                {Object.entries(product.specifications).map(
                  ([key, val], idx) => (
                    <div
                      key={idx}
                      className="grid grid-cols-2 p-3.5 hover:bg-slate-50 transition-colors"
                    >
                      <span className="font-medium text-slate-600">{key}</span>
                      <span className="font-semibold text-slate-900 text-right">
                        {val}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Package Contents */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                <span className="w-2.5 h-6 bg-red-600 rounded mr-3" />
                Package / Kit Contents
              </h2>
              <ul className="space-y-2.5 text-sm text-slate-700">
                {product.packageIncludes.map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg
                      className="w-4 h-4 text-emerald-600 mr-2.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 border-t border-slate-200 pt-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-red-600">
                  Similar Equipment Parts
                </span>
                <h2 className="text-2xl font-bold text-slate-900 mt-1">
                  Related Products
                </h2>
              </div>
              <Link
                href="/products"
                className="text-sm font-semibold text-red-600 hover:text-red-700 flex items-center"
              >
                Browse All Products
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/products/${rel.slug}`}
                  className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-red-300 hover:shadow-lg transition-all duration-300 flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden bg-slate-50">
                    <Image
                      src={rel.image}
                      alt={rel.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-red-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase">
                        {rel.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-mono text-slate-400">
                        {rel.partNo}
                      </span>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-red-600 transition-colors mt-1 line-clamp-1">
                        {rel.name}
                      </h3>
                      <p className="text-slate-500 text-xs mt-2 line-clamp-2">
                        {rel.description}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-red-600 group-hover:translate-x-1 transition-transform">
                      View Full Details & Specs →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
