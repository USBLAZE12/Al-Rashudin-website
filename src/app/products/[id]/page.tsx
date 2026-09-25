import { companyInfo, getWhatsAppProductLink, getWhatsAppLink } from "@/lib/company";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return companyInfo.products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const product = companyInfo.products.find((p) => p.id === id);
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.name} | ${companyInfo.name}`,
    description: product.longDescription,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const product = companyInfo.products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const related = companyInfo.products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <main className="pt-20 bg-[#0a0a0a] min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-white">Products</Link>
          <span>/</span>
          <span className="text-white truncate">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden bg-[#141414] border border-white/[0.06] h-[400px] sm:h-[500px]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 text-white text-xs px-3 py-1.5 rounded-full">
                {product.category}
              </span>
              <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                {product.partNo}
              </span>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1 mb-4">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-green-400 text-[11px] font-semibold uppercase tracking-widest">In Stock • Fast Shipping</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-[0.95] mb-4">
              {product.name}
            </h1>

            <p className="text-gray-400 leading-relaxed mb-6">
              {product.longDescription}
            </p>

            <div className="space-y-3 mb-8">
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider">Specifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.specs.map((spec, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm bg-[#141414] border border-white/[0.06] rounded-xl px-4 py-3">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                    <span className="text-gray-300">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#141414] border border-white/[0.06] rounded-2xl p-5 mb-8">
              <h3 className="text-white font-semibold text-sm mb-3">Why buy from {companyInfo.shortName}?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-400">
                {[
                  "OEM quality & compatibility",
                  "Fast response in 2 hours",
                  "Global shipping - 50+ countries",
                  "Bulk order discounts",
                  "Technical support included",
                  "Strenx & premium materials",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={getWhatsAppProductLink(product.name, product.partNo)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-4 rounded-xl font-semibold text-sm inline-flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Enquire on WhatsApp
              </a>
              <Link
                href="/contact"
                className="border border-white/10 hover:border-white/20 bg-white/[0.03] hover:bg-white/[0.06] text-white px-6 py-4 rounded-xl font-semibold text-sm inline-flex items-center justify-center transition-all"
              >
                Get Quote
              </Link>
            </div>

            <div className="mt-6 flex items-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {companyInfo.contact.primaryPhone}
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {companyInfo.contact.email}
              </span>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-white mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link
                  key={p.id}
                  href={`/products/${p.id}`}
                  className="bg-[#141414] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-white/10 hover:bg-[#1a1a1a] transition-all group"
                >
                  <div className="relative h-48">
                    <Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <p className="text-[11px] text-gray-500 uppercase tracking-wider mb-1">{p.category}</p>
                    <h3 className="text-white font-semibold text-sm leading-tight group-hover:text-orange-400 transition-colors">{p.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-20 p-8 rounded-[24px] bg-gradient-to-br from-[#141414] to-[#0a0a0a] border border-white/[0.06] text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Can&apos;t find the exact part?</h3>
          <p className="text-gray-400 text-sm max-w-xl mx-auto mb-6">
            Send us a photo of your machine plate or broken part. Our team will identify the right replacement quickly.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={getWhatsAppLink("Hello, I can't find this part. I'll share a photo.")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-6 py-3 rounded-xl font-semibold text-sm inline-flex items-center justify-center gap-2"
            >
              WhatsApp Photo
            </a>
            <Link href="/contact" className="border border-white/10 text-white px-6 py-3 rounded-xl font-semibold text-sm inline-flex items-center justify-center">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
