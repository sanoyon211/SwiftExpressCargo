import Link from 'next/link';

export const metadata = {
  title: 'Sign In | Swift Express Cargo',
  description: 'Log in to your Swift Express Cargo account.',
};

export default function SignIn() {
  return (
    <div className="min-h-screen flex bg-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-teal-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/10 rounded-full blur-3xl" />
      
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 z-10 w-full lg:w-1/2">
        <div className="mx-auto w-full max-w-sm lg:w-[360px]">
          <div>
            <h2 className="mt-6 text-3xl font-extrabold text-slate-900 tracking-tight">
              Welcome back
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Please enter your details to sign in.
            </p>
          </div>

          <div className="mt-8">
            <div className="mt-6">
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none block w-full px-4 py-3 border border-slate-200 rounded-[16px] shadow-sm placeholder-slate-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 transition-colors sm:text-sm bg-white"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                      Password
                    </label>
                    <div className="text-sm">
                      <Link href="#" className="font-medium text-teal-600 hover:text-teal-500 transition-colors">
                        Forgot your password?
                      </Link>
                    </div>
                  </div>
                  <div className="mt-1 relative">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="appearance-none block w-full px-4 py-3 border border-slate-200 rounded-[16px] shadow-sm placeholder-slate-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 transition-colors sm:text-sm bg-white"
                      placeholder="Enter your password"
                    />
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-slate-300 rounded cursor-pointer"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-700 cursor-pointer">
                    Remember me for 30 days
                  </label>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-[24px] shadow-sm text-sm font-medium text-white bg-gradient-to-r from-teal-500 to-emerald-400 hover:from-teal-600 hover:to-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-slate-50 text-slate-500">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div>
                  <a
                    href="#"
                    className="w-full inline-flex justify-center py-3 px-4 border border-slate-200 rounded-[16px] shadow-sm bg-white text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-700 transition-colors"
                  >
                    <span className="sr-only">Sign in with Google</span>
                    <i className="fa-brands fa-google text-lg"></i>
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="w-full inline-flex justify-center py-3 px-4 border border-slate-200 rounded-[16px] shadow-sm bg-white text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-700 transition-colors"
                  >
                    <span className="sr-only">Sign in with Facebook</span>
                    <i className="fa-brands fa-facebook text-lg text-blue-600"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center text-sm text-slate-600">
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
          <img
            className="absolute inset-0 h-full w-full object-cover opacity-60"
            src="/assets/cargo-ship-sailing-ocean.jpg"
            alt="Cargo Ship"
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
