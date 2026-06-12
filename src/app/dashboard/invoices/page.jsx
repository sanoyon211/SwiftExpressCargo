export const metadata = {
  title: "Invoices | Swift Express Cargo",
  description: "Download and view your invoices",
};

export default function InvoicesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Invoices</h1>
          <p className="text-slate-500 dark:text-slate-400">View and download your billing history.</p>
        </div>
      </div>
      
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-sm">
                <th className="px-6 py-4 font-medium">Invoice ID</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Amount</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-sm text-slate-700 dark:text-slate-300">
              {[
                { id: "INV-2026-001", date: "Oct 24, 2026", amount: "$350.00", status: "Paid", color: "text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 dark:text-emerald-400" },
                { id: "INV-2026-002", date: "Sep 12, 2026", amount: "$120.00", status: "Paid", color: "text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 dark:text-emerald-400" },
                { id: "INV-2026-003", date: "Aug 05, 2026", amount: "$890.00", status: "Pending", color: "text-amber-600 bg-amber-50 dark:bg-amber-500/10 dark:text-amber-400" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-50">{row.id}</td>
                  <td className="px-6 py-4">{row.date}</td>
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-50">{row.amount}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${row.color}`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-teal-600 dark:text-teal-400 hover:text-teal-700 transition-colors">
                      <i className="fa-solid fa-download mr-1"></i> PDF
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
