import Link from 'next/link';
import { Home, Headset, MapPinOff } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 dark:bg-[#0A0F1C] px-4 py-16 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-300">

      {/* Decorative Background Glow (Centers focus on the error message) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/5 dark:bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="max-w-2xl mx-auto text-center relative z-10">

        {/* Animated/Themed Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 bg-indigo-50 dark:bg-[#0f1629] rounded-3xl flex items-center justify-center border border-indigo-100 dark:border-white/10 shadow-inner transform -rotate-6 transition-transform hover:rotate-0 duration-300">
            <MapPinOff className="text-indigo-600 dark:text-indigo-400" size={48} strokeWidth={1.5} />
          </div>
        </div>

        {/* Error Text Section */}
        <p className="text-sm sm:text-base font-extrabold text-indigo-600 dark:text-indigo-400 tracking-[0.2em] uppercase mb-3">
          Error 404
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
          Destination Not Found
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-lg mx-auto leading-relaxed">
          Oops! It looks like this page has drifted off course. Please check the URL or let us guide you back to the correct path.
        </p>

        {/* Action Buttons (Matched with global Tracking/Auth buttons) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-transparent text-sm font-bold rounded-xl text-white bg-indigo-600 hover:bg-indigo-500 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 dark:focus:ring-offset-[#0A0F1C] hover:-translate-y-0.5"
          >
            <Home size={18} />
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-slate-200 dark:border-white/10 text-sm font-bold rounded-xl text-slate-700 dark:text-slate-300 bg-white dark:bg-[#0f1629] hover:bg-slate-50 dark:hover:bg-[#151e32] transition-all duration-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 dark:focus:ring-offset-[#0A0F1C] hover:-translate-y-0.5"
          >
            <Headset size={18} />
            Contact Support
          </Link>
        </div>

      </div>
    </div>
  );
}