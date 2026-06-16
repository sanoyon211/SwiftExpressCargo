import { PackageSearch, Plus } from 'lucide-react';

export const metadata = {
  title: "Shipments | Swift Express Cargo",
  description: "View all your shipments",
};

export default function ShipmentsPage() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">

      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Shipments</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Track and manage all your parcels.</p>
        </div>
      </div>

      {/* Premium Empty State Card */}
      <div className="bg-white dark:bg-[#0f1629] px-6 py-12 sm:p-16 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm text-center transition-colors duration-300">

        {/* Animated Icon Container */}
        <div className="w-20 h-20 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner relative group">
          {/* Hover pulse effect */}
          <div className="absolute inset-0 rounded-full bg-indigo-600/20 dark:bg-indigo-400/20 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <PackageSearch size={32} strokeWidth={1.5} className="relative z-10 transition-transform group-hover:scale-110 duration-300" />
        </div>

        {/* Text Content */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">No active shipments found</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-8 leading-relaxed">
          You don't have any active shipments at the moment. Create a new booking to get your cargo moving globally.
        </p>

        {/* Call to Action Button */}
        <button className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-[#0f1629] hover:-translate-y-0.5">
          <Plus size={18} strokeWidth={2.5} />
          Create Booking
        </button>

      </div>

    </div>
  );
}