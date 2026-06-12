import Link from 'next/link';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function NotFound() {
  return (
    <div className={`min-h-[80vh] flex items-center justify-center bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 ${inter.className}`}>
      <div className="max-w-max mx-auto text-center">
        <main className="sm:flex">
          <p className="text-4xl font-extrabold text-teal-600 sm:text-5xl">404</p>
          <div className="sm:ml-6 sm:pl-6 sm:border-l sm:border-slate-200">
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
              Page not found
            </h1>
            <p className="mt-4 text-base text-slate-500">
              Please check the URL in the address bar and try again.
            </p>
            <div className="mt-8 flex space-x-3 sm:border-l-transparent sm:pl-0">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-[24px] text-white bg-gradient-to-r from-teal-500 to-emerald-400 hover:from-teal-600 hover:to-emerald-500 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                Go back home
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-[24px] text-teal-700 bg-teal-50 hover:bg-teal-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
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
