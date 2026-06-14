import Link from 'next/link';
import Image from 'next/image';
import SignUpForm from './SignUpForm';

export const metadata = {
  title: 'Sign Up | Swift Express Cargo',
  description: 'Create a new Swift Express Cargo account.',
};

export default function SignUp() {
  return (
    <div className="min-h-screen flex bg-slate-50 dark:bg-slate-900 relative overflow-hidden transition-colors duration-300">
      {/* Background Decor */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-3xl" />
      
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 z-10 w-full lg:w-1/2">
        <div className="mx-auto w-full max-w-sm lg:w-[400px]">
          <div>
            <h2 className="mt-6 text-3xl font-semibold text-slate-900 dark:text-slate-50 tracking-tight">
              Create an account
            </h2>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Join Swift Express and manage your shipments globally.
            </p>
          </div>

          <div className="mt-8">
            <div className="mt-6">
              <SignUpForm />
            </div>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-100 dark:border-white/5" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400">Or sign up with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div>
                  <a
                    href="#"
                    className="w-full inline-flex justify-center py-3 px-4 border border-slate-100 dark:border-white/5 rounded-[16px] shadow-sm bg-white dark:bg-slate-800 text-sm font-medium text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-700 transition-colors"
                  >
                    <span className="sr-only">Sign up with Google</span>
                    <i className="fa-brands fa-google text-lg"></i>
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="w-full inline-flex justify-center py-3 px-4 border border-slate-100 dark:border-white/5 rounded-[16px] shadow-sm bg-white dark:bg-slate-800 text-sm font-medium text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-700 transition-colors"
                  >
                    <span className="sr-only">Sign up with Facebook</span>
                    <i className="fa-brands fa-facebook text-lg text-indigo-600"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
              Already have an account?{' '}
              <Link href="/signin" className="font-medium text-indigo-700 hover:text-indigo-600 transition-colors">
                Sign in
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
            src="/assets/arialview.jpg"
            alt="Aerial view of port"
            fill
            sizes="50vw"
            priority
          />
          <div className="absolute bottom-20 left-12 right-12 z-20">
            <h3 className="text-3xl font-semibold text-white mb-4 tracking-tight">Join Our Global Network</h3>
            <p className="text-slate-300 text-lg">
              Unlock access to premium logistics solutions, transparent pricing, and world-class customer support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
