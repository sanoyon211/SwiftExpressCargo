export const metadata = {
  title: "Shipments | Swift Express Cargo",
  description: "View all your shipments",
};

export default function ShipmentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-50 tracking-tight">Shipments</h1>
          <p className="text-slate-500 dark:text-slate-400">Track and manage all your parcels.</p>
        </div>
      </div>
      
      <div className="bg-white dark:bg-slate-900 p-5 md:p-4 md:p-8 rounded-lg border border-slate-100 dark:border-white/5 shadow-sm text-center">
        <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-600/10 text-indigo-700 dark:text-indigo-500 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
          <i className="fa-solid fa-box-open"></i>
        </div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2 tracking-tight">No active shipments found</h3>
        <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-6">You don't have any active shipments at the moment. Create a new booking to get started.</p>
        <button className="bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-full px-8 py-3 font-medium hover:-translate-y-0.5 hover:shadow-sm hover:from-indigo-700 hover:to-indigo-600 transition-all duration-300 inline-flex items-center justify-center shadow-md text-sm px-6 py-2.5 rounded-[16px]">
          Create Booking
        </button>
      </div>
    </div>
  );
}

