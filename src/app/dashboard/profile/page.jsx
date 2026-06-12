export const metadata = {
  title: "Profile Settings | Swift Express Cargo",
  description: "Manage your profile",
};

export default function ProfilePage() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Profile Settings</h1>
          <p className="text-slate-500 dark:text-slate-400">Update your personal information and preferences.</p>
        </div>
      </div>
      
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm p-6">
        <div className="flex items-center mb-8 pb-8 border-b border-slate-200 dark:border-slate-700">
          <div className="w-20 h-20 bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-300 rounded-full flex items-center justify-center text-3xl font-bold mr-6">
            JD
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-50">John Doe</h2>
            <p className="text-slate-500 dark:text-slate-400 mb-2">john.doe@example.com</p>
            <button className="text-sm font-medium text-teal-600 dark:text-teal-400 hover:text-teal-700 transition-colors">
              Change Photo
            </button>
          </div>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">First Name</label>
              <input type="text" defaultValue="John" className="appearance-none block w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-[12px] shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 transition-colors sm:text-sm bg-slate-50 dark:bg-slate-800 dark:text-slate-50" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Last Name</label>
              <input type="text" defaultValue="Doe" className="appearance-none block w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-[12px] shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 transition-colors sm:text-sm bg-slate-50 dark:bg-slate-800 dark:text-slate-50" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
              <input type="email" defaultValue="john.doe@example.com" className="appearance-none block w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-[12px] shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 transition-colors sm:text-sm bg-slate-50 dark:bg-slate-800 dark:text-slate-50" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Phone Number</label>
              <input type="tel" defaultValue="+1 (555) 123-4567" className="appearance-none block w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-[12px] shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 transition-colors sm:text-sm bg-slate-50 dark:bg-slate-800 dark:text-slate-50" />
            </div>
          </div>
          <div className="pt-4 flex justify-end">
            <button type="button" className="btn-primary text-sm px-6 py-2.5 rounded-[12px]">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
