export const metadata = {
  title: "Dashboard Overview | Swift Express Cargo",
  description: "User dashboard overview",
};

export default function DashboardOverview() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-50 tracking-tight">Overview</h1>
          <p className="text-slate-500 dark:text-slate-400">Welcome back, John Doe. Here is what's happening with your cargo today.</p>
        </div>
        <button className="bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-full px-8 py-3 font-medium hover:-translate-y-0.5 hover:shadow-sm hover:from-indigo-700 hover:to-indigo-600 transition-all duration-300 inline-flex items-center justify-center shadow-md text-sm px-6 py-2.5 rounded-[16px]">
          <i className="fa-solid fa-plus mr-2"></i> New Booking
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Active Shipments", value: "3", icon: "fa-box-open", color: "text-indigo-500", bg: "bg-indigo-50 dark:bg-indigo-500/10" },
          { label: "Delivered", value: "12", icon: "fa-check-circle", color: "text-indigo-600", bg: "bg-indigo-50 dark:bg-indigo-600/10" },
          { label: "Pending Invoices", value: "1", icon: "fa-file-invoice-dollar", color: "text-amber-500", bg: "bg-amber-50 dark:bg-amber-500/10" },
          { label: "Total Spent", value: "$1,240", icon: "fa-wallet", color: "text-indigo-600", bg: "bg-indigo-50 dark:bg-indigo-600/10" },
        ].map((stat, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-lg border border-slate-100 dark:border-white/5 shadow-sm flex items-center">
            <div className={`w-12 h-12 rounded-full ${stat.bg} ${stat.color} flex items-center justify-center text-xl mr-4`}>
              <i className={`fa-solid ${stat.icon}`}></i>
            </div>
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{stat.label}</p>
              <p className="text-2xl font-semibold text-slate-900 dark:text-slate-50">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Shipments */}
      <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-lg shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-100 dark:border-white/5 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50 tracking-tight">Recent Shipments</h2>
          <a href="/dashboard/shipments" className="text-sm font-medium text-indigo-700 dark:text-indigo-500 hover:underline">View all</a>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-sm">
                <th className="px-6 py-4 font-medium">Tracking ID</th>
                <th className="px-6 py-4 font-medium">Destination</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-sm text-slate-700 dark:text-slate-400">
              {[
                { id: "SWF-89210", dest: "Dhaka, Bangladesh", date: "Oct 24, 2026", status: "In Transit", color: "text-indigo-600 bg-indigo-50 dark:bg-indigo-500/10 dark:text-blue-400" },
                { id: "SWF-89205", dest: "Chittagong, Bangladesh", date: "Oct 22, 2026", status: "Delivered", color: "text-indigo-600 bg-indigo-50 dark:bg-indigo-600/10 dark:text-indigo-500" },
                { id: "SWF-89190", dest: "Sylhet, Bangladesh", date: "Oct 18, 2026", status: "Processing", color: "text-amber-600 bg-amber-50 dark:bg-amber-500/10 dark:text-amber-400" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-50">{row.id}</td>
                  <td className="px-6 py-4">{row.dest}</td>
                  <td className="px-6 py-4 text-slate-500 dark:text-slate-400">{row.date}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${row.color}`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
