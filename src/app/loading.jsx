import { SkeletonCard, SkeletonText } from "../components/Skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-slate-50 dark:bg-[#0A0F1C] relative overflow-hidden transition-colors duration-300">

      {/* Subtle Premium Background Glows */}
      <div className="absolute top-1/4 right-0 -mr-20 w-96 h-96 bg-indigo-600/5 dark:bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-0 -ml-20 w-96 h-96 bg-emerald-600/5 dark:bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Skeleton */}
        <div className="max-w-2xl mx-auto text-center mb-16 flex flex-col items-center">
          <div className="h-8 w-48 bg-slate-200 dark:bg-slate-800/60 rounded-xl mb-6 animate-pulse" />
          <SkeletonText lines={2} className="w-full max-w-lg mx-auto" />
        </div>

        {/* Content Skeleton Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <SkeletonCard />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}