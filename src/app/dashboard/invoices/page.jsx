import { Download } from 'lucide-react';

export const metadata = {
  title: "Invoices | Swift Express Cargo",
  description: "Download and view your invoices",
};

export default function InvoicesPage() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">

      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Invoices</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">View and download your billing history.</p>
        </div>
      </div>

      {/* Table Card */}
      <div className="bg-white dark:bg-[#0f1629] border border-slate-200 dark:border-white/10 rounded-2xl shadow-sm overflow-hidden transition-colors duration-300">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">

            {/* Table Header */}
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-300 text-sm border-b border-slate-200 dark:border-white/5">
                <th className="px-6 py-4 font-semibold tracking-wide">Invoice ID</th>
                <th className="px-6 py-4 font-semibold tracking-wide">Date</th>
                <th className="px-6 py-4 font-semibold tracking-wide">Amount</th>
                <th className="px-6 py-4 font-semibold tracking-wide">Status</th>
                <th className="px-6 py-4 font-semibold tracking-wide text-right">Action</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-slate-100 dark:divide-white/5 text-sm text-slate-600 dark:text-slate-400">
              {[
                { id: "INV-2026-001", date: "Oct 24, 2026", amount: "$350.00", status: "Paid", color: "text-emerald-700 bg-emerald-50 border-emerald-200 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400" },
                { id: "INV-2026-002", date: "Sep 12, 2026", amount: "$120.00", status: "Paid", color: "text-emerald-700 bg-emerald-50 border-emerald-200 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400" },
                { id: "INV-2026-003", date: "Aug 05, 2026", amount: "$890.00", status: "Pending", color: "text-amber-700 bg-amber-50 border-amber-200 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-400" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors duration-200">
                  <td className="px-6 py-4 font-bold text-slate-900 dark:text-white">{row.id}</td>
                  <td className="px-6 py-4">{row.date}</td>
                  <td className="px-6 py-4 font-semibold text-slate-900 dark:text-white">{row.amount}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold border ${row.color}`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="inline-flex items-center justify-end gap-1.5 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors font-semibold group focus:outline-none">
                      <Download size={16} className="group-hover:-translate-y-0.5 transition-transform" />
                      PDF
                    </button>
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