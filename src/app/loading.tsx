export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/90 backdrop-blur-xs">
      <div className="flex flex-col items-center">
        <div className="relative">
          <div className="w-14 h-14 border-4 border-red-100 rounded-full" />
          <div className="absolute top-0 left-0 w-14 h-14 border-4 border-red-600 rounded-full animate-spin border-t-transparent" />
        </div>
        <p className="mt-4 text-slate-600 text-sm font-semibold tracking-wide">
          Loading Al Rashudin Engineering...
        </p>
      </div>
    </div>
  );
}
