export default function Skeleton({ className = "" }) {
  return (
    <div
      className={`animate-pulse bg-slate-200 dark:bg-slate-800 rounded-md ${className}`}
    />
  );
}

export function SkeletonText({ lines = 3, className = "" }) {
  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={`h-4 ${
            i === lines - 1 ? "w-4/5" : "w-full"
          }`}
        />
      ))}
    </div>
  );
}

export function SkeletonCard() {
  return (
    <div className="p-6 bg-white dark:bg-slate-800 border border-slate-100 dark:border-white/5 rounded-lg shadow-sm dark:border dark:border-white/5">
      <Skeleton className="h-40 w-full rounded-md mb-4" />
      <SkeletonText lines={2} />
      <div className="mt-6 flex justify-between items-center">
        <Skeleton className="h-10 w-24 rounded-full" />
        <Skeleton className="h-8 w-8 rounded-full" />
      </div>
    </div>
  );
}
