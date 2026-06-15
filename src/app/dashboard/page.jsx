import Link from 'next/link';
import { Plus, Package, CheckCircle, Receipt, Wallet } from 'lucide-react';

export const metadata = {
  title: "Dashboard Overview | Swift Express Cargo",
  description: "User dashboard overview",
};

export default function DashboardOverview() {

  // Stats Data mapped with Lucide Icons and modern colors
  const stats = [
    { label: "Active Shipments", value: "3", icon: Package, color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-50 border-blue-100 dark:border-blue-500/20 dark:bg-blue-500/10" },
    { label: "Delivered", value: "12", icon: CheckCircle, color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-50 border-emerald-100 dark:border-emerald-500/20 dark:bg-emerald-500/10" },
    { label: "Pending Invoices", value: "1", icon: Receipt, color: "text-amber-600 dark:text-amber-400", bg: "bg-amber-50 border-amber-100 dark:border-amber-500/20 dark:bg-amber-500/10" },
    { label: "Total Spent", value: "$1,240", icon: Wallet, color: "text-indigo-600 dark:text-indigo-400", bg: "bg-indigo-50 border-indigo-100 dark:border-indigo-500/20 dark:bg-indigo-500/10" },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">

      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Overview</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Welcome back, John Doe. Here is what's happening with your cargo today.</p>
        </div>
        <button className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-[#0A0F1C] hover:-translate-y-0.5">
          <Plus size={18} strokeWidth={2.5} />
          New Booking
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className="bg-white dark:bg-[#0f1629] p-6 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm flex items-center transition-all hover:-translate-y-1 hover:shadow-md duration-300 group">
              <div className={`w-14 h-14 rounded-xl border ${stat.bg} ${stat.color} flex items-center justify-center mr-5 transition-transform group-hover:scale-110 duration-300`}>
                <Icon size={24} strokeWidth={2} />
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-semibold mb-1">{stat.label}</p>
                <p className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">{stat.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Shipments Table */}
      <div className="bg-white dark:bg-[#0f1629] border border-slate-200 dark:border-white/10 rounded-2xl shadow-sm overflow-hidden transition-colors duration-300">

        {/* Table Header Row */}
        <div className="px-6 py-5 border-b border-slate-200 dark:border-white/10 flex justify-between items-center">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">Recent Shipments</h2>
          <Link href="/dashboard/shipments" className="text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors focus:outline-none">
            View all &rarr;
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-300 text-sm border-b border-slate-200 dark:border-white/5">
                <th className="px-6 py-4 font-semibold tracking-wide">Tracking ID</th>
                <th className="px-6 py-4 font-semibold tracking-wide">Destination</th>
                <th className="px-6 py-4 font-semibold tracking-wide">Date</th>
                <th className="px-6 py-4 font-semibold tracking-wide">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-white/5 text-sm text-slate-600 dark:text-slate-400">
              {[
                { id: "SWF-89210", dest: "Dhaka, Bangladesh", date: "Oct 24, 2026", status: "In Transit", color: "text-blue-700 bg-blue-50 border-blue-200 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400" },
                { id: "SWF-89205", dest: "Chittagong, Bangladesh", date: "Oct 22, 2026", status: "Delivered", color: "text-emerald-700 bg-emerald-50 border-emerald-200 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400" },
                { id: "SWF-89190", dest: "Sylhet, Bangladesh", date: "Oct 18, 2026", status: "Processing", color: "text-amber-700 bg-amber-50 border-amber-200 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-400" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors duration-200">
                  <td className="px-6 py-4 font-bold text-slate-900 dark:text-white">{row.id}</td>
                  <td className="px-6 py-4 font-medium">{row.dest}</td>
                  <td className="px-6 py-4">{row.date}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold border ${row.color}`}>
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