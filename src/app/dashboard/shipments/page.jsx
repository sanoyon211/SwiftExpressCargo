export const metadata = {
  title: "Shipments | Swift Express Cargo",
  description: "View all your shipments",
};

export default function ShipmentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Shipments</h1>
          <p className="text-slate-500 dark:text-slate-400">Track and manage all your parcels.</p>
        </div>
      </div>
      
      <div className="bg-white dark:bg-slate-900 p-5 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm text-center">
        <div className="w-16 h-16 bg-teal-50 dark:bg-teal-500/10 text-teal-600 dark:text-teal-400 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
          <i className="fa-solid fa-box-open"></i>
        </div>
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-2">No active shipments found</h3>
        <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-6">You don't have any active shipments at the moment. Create a new booking to get started.</p>
        <button className="bg-gradient-to-r from-teal-500 to-emerald-400 text-white rounded-full px-8 py-3 font-medium hover:-translate-y-0.5 hover:shadow-lg hover:from-teal-600 hover:to-emerald-500 transition-all duration-300 inline-flex items-center justify-center shadow-md text-sm px-6 py-2.5 rounded-[16px]">
          Create Booking
        </button>
      </div>
    </div>
  );
}

