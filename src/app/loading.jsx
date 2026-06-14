import { SkeletonCard, SkeletonText } from "../components/Skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen pt-24 pb-12 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Header Skeleton */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <SkeletonText lines={2} className="mb-6 max-w-lg mx-auto" />
          <SkeletonText lines={1} className="max-w-2xl mx-auto" />
        </div>

        {/* Content Skeleton Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      </div>
    </div>
  );
}


