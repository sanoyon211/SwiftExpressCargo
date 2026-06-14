export const metadata = {
  title: "Profile Settings | Swift Express Cargo",
  description: "Manage your profile",
};

export default function ProfilePage() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-50 tracking-tight">Profile Settings</h1>
          <p className="text-slate-500 dark:text-slate-400">Update your personal information and preferences.</p>
        </div>
      </div>
      
      <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-lg shadow-sm p-6">
        <div className="flex items-center mb-8 pb-8 border-b border-slate-100 dark:border-white/5">
          <div className="w-20 h-20 bg-indigo-200 dark:bg-indigo-600 text-indigo-700 dark:text-indigo-300 rounded-full flex items-center justify-center text-3xl font-semibold mr-6">
            JD
          </div>
          <div>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50 tracking-tight">John Doe</h2>
            <p className="text-slate-500 dark:text-slate-400 mb-2">john.doe@example.com</p>
            <button className="text-sm font-medium text-indigo-700 dark:text-indigo-500 hover:text-indigo-600 transition-colors">
              Change Photo
            </button>
          </div>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-400 mb-1">First Name</label>
              <input type="text" defaultValue="John" className="appearance-none block w-full px-4 py-3 border border-slate-100 dark:border-white/5 rounded-[12px] shadow-sm focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 transition-colors sm:text-sm bg-slate-50 dark:bg-slate-800 dark:text-slate-50" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-400 mb-1">Last Name</label>
              <input type="text" defaultValue="Doe" className="appearance-none block w-full px-4 py-3 border border-slate-100 dark:border-white/5 rounded-[12px] shadow-sm focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 transition-colors sm:text-sm bg-slate-50 dark:bg-slate-800 dark:text-slate-50" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-400 mb-1">Email Address</label>
              <input type="email" defaultValue="john.doe@example.com" className="appearance-none block w-full px-4 py-3 border border-slate-100 dark:border-white/5 rounded-[12px] shadow-sm focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 transition-colors sm:text-sm bg-slate-50 dark:bg-slate-800 dark:text-slate-50" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-400 mb-1">Phone Number</label>
              <input type="tel" defaultValue="+1 (555) 123-4567" className="appearance-none block w-full px-4 py-3 border border-slate-100 dark:border-white/5 rounded-[12px] shadow-sm focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 transition-colors sm:text-sm bg-slate-50 dark:bg-slate-800 dark:text-slate-50" />
            </div>
          </div>
          <div className="pt-4 flex justify-end">
            <button type="button" className="bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-full px-8 py-3 font-medium hover:-translate-y-0.5 hover:shadow-sm hover:from-indigo-700 hover:to-indigo-600 transition-all duration-300 inline-flex items-center justify-center shadow-md text-sm px-6 py-2.5 rounded-[12px]">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
