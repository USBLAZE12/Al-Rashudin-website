export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0a]">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="w-16 h-16 border-2 border-white/10 rounded-full" />
          <div className="absolute inset-0 w-16 h-16 border-2 border-orange-500 rounded-full animate-spin border-t-transparent" />
          <div className="absolute inset-2 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full animate-pulse flex items-center justify-center">
            <span className="text-white font-bold text-sm">AR</span>
          </div>
        </div>
        <div className="text-center">
          <p className="text-white font-medium text-sm">Al Rashideen Engineering</p>
          <p className="text-gray-500 text-xs mt-1">Loading...</p>
        </div>
      </div>
    </div>
  );
}
