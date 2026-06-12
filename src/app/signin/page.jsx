import Link from 'next/link';
import Image from 'next/image';
import SignInForm from './SignInForm';

export const metadata = {
  title: 'Sign In | Swift Express Cargo',
  description: 'Log in to your Swift Express Cargo account.',
};

export default function SignIn() {
  return (
    <div className="min-h-screen flex bg-slate-50 dark:bg-slate-900 relative overflow-hidden transition-colors duration-300">
      {/* Background Decor */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-teal-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/10 rounded-full blur-3xl" />
      
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 z-10 w-full lg:w-1/2">
        <div className="mx-auto w-full max-w-sm lg:w-[360px]">
          <div>
            <h2 className="mt-6 text-3xl font-extrabold text-slate-900 dark:text-slate-50 tracking-tight">
              Welcome back
            </h2>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Please enter your details to sign in.
            </p>
          </div>

          <div className="mt-8">
            <div className="mt-6">
              <SignInForm />
            </div>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200 dark:border-slate-700" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div>
                  <a
                    href="#"
                    className="w-full inline-flex justify-center py-3 px-4 border border-slate-200 dark:border-slate-700 rounded-[16px] shadow-sm bg-white dark:bg-slate-800 text-sm font-medium text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-700 transition-colors"
                  >
                    <span className="sr-only">Sign in with Google</span>
                    <i className="fa-brands fa-google text-lg"></i>
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="w-full inline-flex justify-center py-3 px-4 border border-slate-200 dark:border-slate-700 rounded-[16px] shadow-sm bg-white dark:bg-slate-800 text-sm font-medium text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-700 transition-colors"
                  >
                    <span className="sr-only">Sign in with Facebook</span>
                    <i className="fa-brands fa-facebook text-lg text-blue-600"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center text-sm text-slate-600 dark:text-slate-300">
              Don't have an account?{' '}
              <Link href="/signup" className="font-medium text-teal-600 hover:text-teal-500 transition-colors">
                Sign up for free
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right side background image / graphic */}
      <div className="hidden lg:block relative w-0 flex-1">
        <div className="absolute inset-0 h-full w-full bg-slate-900 object-cover">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10" />
          <Image
            className="absolute inset-0 h-full w-full object-cover opacity-60"
            src="/assets/cargo-ship-sailing-ocean.jpg"
            alt="Cargo Ship"
            fill
            sizes="50vw"
            priority
          />
          <div className="absolute bottom-20 left-12 right-12 z-20">
            <h3 className="text-3xl font-bold text-white mb-4">Fast & Reliable Logistics</h3>
            <p className="text-slate-300 text-lg">
              Manage your shipments with ease, track your cargo in real-time, and get the best rates worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
