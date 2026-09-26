import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 px-4 pt-20">
      <div className="text-center max-w-lg bg-white border border-slate-200 rounded-3xl p-10 sm:p-14 shadow-sm">
        <div className="mb-6">
          <span className="text-8xl font-black text-red-600 tracking-tight">404</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">
          Page or Product Not Found
        </h1>
        <p className="text-slate-600 text-sm leading-relaxed mb-8">
          The page or product you are looking for might have been moved, renamed, or is currently unavailable in our active catalog.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Link
            href="/"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-bold text-sm transition-colors shadow-sm"
          >
            Go to Homepage
          </Link>
          <Link
            href="/products"
            className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-6 py-3 rounded-xl font-bold text-sm transition-colors"
          >
            Browse Products
          </Link>
          <Link
            href="/contact"
            className="border border-slate-200 hover:border-red-400 text-slate-700 hover:text-red-600 px-6 py-3 rounded-xl font-bold text-sm transition-colors"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </main>
  );
}
