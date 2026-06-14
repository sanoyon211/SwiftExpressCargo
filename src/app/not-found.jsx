import Link from 'next/link';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function NotFound() {
  return (
    <div className={`min-h-[80vh] flex items-center justify-center bg-slate-50 dark:bg-slate-900 px-4 py-8 md:py-16 sm:px-6 lg:px-8 ${inter.className}`}>
      <div className="max-w-max mx-auto text-center">
        <main className="sm:flex">
          <p className="text-2xl md:text-3xl font-semibold text-indigo-700 sm:text-3xl md:text-2xl md:text-3xl">404</p>
          <div className="sm:ml-6 sm:pl-6 sm:border-l sm:border-slate-100 dark:border-white/5">
            <h1 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-slate-50 tracking-tight sm:text-3xl md:text-2xl md:text-3xl">
              Page not found
            </h1>
            <p className="mt-4 text-base text-slate-500 dark:text-slate-400">
              Please check the URL in the address bar and try again.
            </p>
            <div className="mt-8 flex space-x-3 sm:border-l-transparent sm:pl-0">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 border border-slate-100 dark:border-white/5 text-base font-medium rounded-[24px] text-white bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600 transition-all duration-300 shadow-md hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
              >
                Go back home
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-slate-100 dark:border-white/5 text-base font-medium rounded-[24px] text-indigo-600 bg-indigo-50 hover:bg-indigo-200 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
              >
                Contact support
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
