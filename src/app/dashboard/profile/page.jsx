import { Camera, Save, User, Mail, Phone } from 'lucide-react';

export const metadata = {
  title: "Profile Settings | Swift Express Cargo",
  description: "Manage your profile",
};

export default function ProfilePage() {
  return (
    <div className="space-y-6 max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-500">

      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Profile Settings</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Update your personal information and preferences.</p>
        </div>
      </div>

      {/* Main Settings Card */}
      <div className="bg-white dark:bg-[#0f1629] border border-slate-200 dark:border-white/10 rounded-2xl shadow-sm p-6 sm:p-8 transition-colors duration-300">

        {/* Profile Photo Section */}
        <div className="flex items-center mb-8 pb-8 border-b border-slate-200 dark:border-white/10">
          <div className="relative group mr-6">
            <div className="w-20 h-20 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center justify-center text-3xl font-bold shadow-sm transition-transform group-hover:scale-105">
              JD
            </div>
            {/* Hover Camera Icon Overlay */}
            <div className="absolute inset-0 bg-slate-900/40 rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity cursor-pointer backdrop-blur-sm">
              <Camera className="text-white" size={24} />
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">John Doe</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">john.doe@example.com</p>
            <button className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors focus:outline-none">
              <Camera size={16} />
              Change Photo
            </button>
          </div>
        </div>

        {/* Settings Form */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* First Name Input */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">First Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="text-slate-400" size={18} />
                </div>
                <input
                  type="text"
                  defaultValue="John"
                  className="appearance-none block w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-[#0A0F1C] border border-slate-200 dark:border-white/10 rounded-xl shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-slate-900 dark:text-white text-sm transition-all"
                />
              </div>
            </div>

            {/* Last Name Input */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Last Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="text-slate-400" size={18} />
                </div>
                <input
                  type="text"
                  defaultValue="Doe"
                  className="appearance-none block w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-[#0A0F1C] border border-slate-200 dark:border-white/10 rounded-xl shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-slate-900 dark:text-white text-sm transition-all"
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="text-slate-400" size={18} />
                </div>
                <input
                  type="email"
                  defaultValue="john.doe@example.com"
                  className="appearance-none block w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-[#0A0F1C] border border-slate-200 dark:border-white/10 rounded-xl shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-slate-900 dark:text-white text-sm transition-all"
                />
              </div>
            </div>

            {/* Phone Input */}
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Phone Number</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Phone className="text-slate-400" size={18} />
                </div>
                <input
                  type="tel"
                  defaultValue="+1 (555) 123-4567"
                  className="appearance-none block w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-[#0A0F1C] border border-slate-200 dark:border-white/10 rounded-xl shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-slate-900 dark:text-white text-sm transition-all"
                />
              </div>
            </div>

          </div>

          {/* Action Button */}
          <div className="pt-6 flex justify-end">
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-[#0f1629] hover:-translate-y-0.5"
            >
              <Save size={18} />
              Save Changes
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}