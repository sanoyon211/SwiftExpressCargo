import Link from 'next/link';
import Image from 'next/image';
import SignInForm from './SignInForm';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { Package } from 'lucide-react';

export const metadata = {
  title: 'Sign In | Swift Express Cargo',
  description: 'Log in to your Swift Express Cargo account.',
};

export default function SignIn() {
  return (
    <div className="min-h-screen flex bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">

      {/* 🔴 SOLID NAVBAR BACKGROUND: Exact height of the navbar to make white text visible */}
      <div className="absolute top-0 left-0 w-full h-20 sm:h-24 bg-slate-950 border-b border-slate-800 z-30" />

      {/* ========================================== */}
      {/* LEFT SIDE: AUTH FORM PANEL                 */}
      {/* ========================================== */}
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 z-10 w-full lg:w-[50%] pt-28 sm:pt-32">

        {/* Decorative Background Blur for left side */}
        <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/5 dark:bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto w-full max-w-sm lg:w-[380px] relative z-10">

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
              Welcome back
            </h2>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Enter your details to sign in to your account.
            </p>
          </div>

          {/* Form */}
          <div className="mt-8">
            <SignInForm />

            {/* Divider */}
            <div className="mt-8 relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200 dark:border-white/10" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white dark:bg-slate-950 text-slate-500 dark:text-slate-400 font-medium">
                  Or continue with
                </span>
              </div>
            </div>

            {/* Social Logins */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <button
                type="button"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 border border-slate-200 dark:border-white/10 rounded-xl shadow-sm bg-white dark:bg-slate-900 text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 dark:focus:ring-offset-slate-950"
              >
                <FcGoogle className="text-xl" />
                <span>Google</span>
              </button>
              <button
                type="button"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 border border-slate-200 dark:border-white/10 rounded-xl shadow-sm bg-white dark:bg-slate-900 text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 dark:focus:ring-offset-slate-950"
              >
                <FaFacebook className="text-xl text-[#1877F2]" />
                <span>Facebook</span>
              </button>
            </div>

            {/* Sign Up Link */}
            <div className="mt-10 text-center text-sm text-slate-500 dark:text-slate-400 font-medium">
              Don't have an account?{' '}
              <Link href="/signup" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 font-bold transition-colors">
                Sign up for free
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* RIGHT SIDE: IMAGE PANEL                    */}
      {/* ========================================== */}
      <div className="hidden lg:block relative w-0 flex-1 z-0 mt-20 sm:mt-24">
        <div className="absolute inset-0 h-full w-full bg-slate-900">
          <Image
            className="absolute inset-0 h-full w-full object-cover opacity-70"
            src="/assets/cargo-ship-sailing-ocean.jpg"
            alt="Cargo Ship"
            fill
            sizes="50vw"
            priority
          />

          {/* Overlays for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent z-10" />
          <div className="absolute inset-0 bg-indigo-900/20 mix-blend-multiply z-10" />

          {/* Content Over Image */}
          <div className="absolute bottom-20 left-16 right-16 z-20">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
                Fast & Reliable Logistics
              </h3>
              <p className="text-indigo-50 text-lg leading-relaxed max-w-lg font-light">
                Manage your shipments with ease, track your cargo in real-time, and get the most competitive rates globally.
              </p>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 mt-8 pt-6 border-t border-white/20">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                    <i className="fas fa-shield-alt text-emerald-400 text-sm"></i>
                  </div>
                  <span className="text-white text-sm font-medium">Fully Secure</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                    <i className="fas fa-globe text-blue-400 text-sm"></i>
                  </div>
                  <span className="text-white text-sm font-medium">Global Reach</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}