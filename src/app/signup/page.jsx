import Link from 'next/link';
import Image from 'next/image';
import SignUpForm from './SignUpForm';
import { Package, Shield, Globe } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

export const metadata = {
  title: 'Sign Up | Swift Express Cargo',
  description: 'Create a new Swift Express Cargo account.',
};

export default function SignUp() {
  return (
    // পুরো পেজের ব্যাকগ্রাউন্ড গ্লোবাল ডার্ক থিমের সাথে ম্যাচড
    <div className="min-h-screen bg-[#0A0F1C] relative overflow-hidden transition-colors duration-300 flex flex-col justify-between">

      {/* SOLID NAVBAR BACKGROUND: Exact height match with your main Navbar */}
      <div className="absolute top-0 left-0 w-full h-20 sm:h-24 bg-[#0A0F1C] border-b border-white/5 z-30" />

      {/* Decorative Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* ========================================== */}
      {/* MAIN CONTAINER: Aligned perfectly with Nav */}
      {/* ========================================== */}
      <div className="flex-grow flex items-center justify-center pt-32 pb-16 px-4 sm:px-6 lg:px-8 z-10 relative">

        {/* 🔴 THIS BOX LOCKS THE DESIGN TO ALIGN WITH NAVBAR ON ZOOM OUT */}
        <div className="w-full max-w-5xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden grid grid-cols-1 lg:grid-cols-2 min-h-[660px]">

          {/* ------------------------------------------ */}
          {/* LEFT SIDE: AUTH FORM PANEL                 */}
          {/* ------------------------------------------ */}
          <div className="p-8 sm:p-12 flex flex-col justify-center items-center bg-white dark:bg-slate-900">
            <div className="w-full max-w-sm">

              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-md shadow-indigo-600/20">
                    <Package size={20} className="text-white" />
                  </div>
                  <span className="font-bold text-2xl tracking-tight text-slate-900 dark:text-white">
                    SwiftExpress
                  </span>
                </div>

                <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Create an account
                </h2>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  Join Swift Express and manage your shipments globally.
                </p>
              </div>

              {/* Form Component */}
              <SignUpForm />

              {/* Divider */}
              <div className="mt-8 relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200 dark:border-white/10" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 font-medium">
                    Or sign up with
                  </span>
                </div>
              </div>

              {/* Social Logins */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 border border-slate-200 dark:border-white/10 rounded-xl shadow-sm bg-white dark:bg-[#0f1629] text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-[#151e32] transition-all hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 dark:focus:ring-offset-[#0A0F1C]"
                >
                  <FcGoogle className="text-xl" />
                  <span>Google</span>
                </button>
                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 border border-slate-200 dark:border-white/10 rounded-xl shadow-sm bg-white dark:bg-[#0f1629] text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-[#151e32] transition-all hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 dark:focus:ring-offset-[#0A0F1C]"
                >
                  <FaFacebook className="text-xl text-[#1877F2]" />
                  <span>Facebook</span>
                </button>
              </div>

              {/* Sign In Link */}
              <div className="mt-10 text-center text-sm text-slate-500 dark:text-slate-400 font-medium">
                Already have an account?{' '}
                <Link href="/signin" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 font-bold transition-colors">
                  Sign in here
                </Link>
              </div>
            </div>
          </div>

          {/* ------------------------------------------ */}
          {/* RIGHT SIDE: INTEGRATED IMAGE PANEL         */}
          {/* ------------------------------------------ */}
          <div className="hidden lg:block relative bg-slate-900">
            <Image
              className="absolute inset-0 h-full w-full object-cover opacity-75"
              src="/assets/arialview.jpg"
              alt="Aerial view of port"
              fill
              sizes="50vw"
              priority
            />

            {/* Overlays for better text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/10 to-transparent z-10" />
            <div className="absolute inset-0 bg-indigo-900/20 mix-blend-multiply z-10" />

            {/* Glassmorphism Content Box Inside the Card */}
            <div className="absolute bottom-10 left-10 right-10 z-20">
              <div className="bg-slate-950/40 backdrop-blur-md border border-white/10 p-6 sm:p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                  Join Our Global Network
                </h3>
                <p className="text-indigo-100 text-sm sm:text-base leading-relaxed font-light mb-6">
                  Unlock access to premium logistics solutions, transparent pricing, and world-class customer support globally.
                </p>

                {/* Trust Badges */}
                <div className="flex items-center gap-5 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30 text-emerald-400">
                      <Shield size={14} />
                    </div>
                    <span className="text-white text-xs font-medium">Fully Secure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-blue-500/20 flex items-center justify-center border border-blue-500/30 text-blue-400">
                      <Globe size={14} />
                    </div>
                    <span className="text-white text-xs font-medium">Global Reach</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}