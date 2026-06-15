import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    template: "%s | Swift Express Cargo",
    default: "Swift Express Cargo | Premium Logistics",
  },
  description: "Fast, reliable international shipping from USA to Bangladesh and worldwide.",
};

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GlobalScripts from "../components/GlobalScripts";
import BackToTop from "../components/BackToTop";
import ProgressBar from "../components/ProgressBar";
import { ThemeProvider } from "../components/ThemeProvider";
import { Toaster } from "sonner";
import WhatsAppButton from "../components/WhatsAppButton";

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans bg-slate-50 dark:bg-[#0A0F1C] dark:text-slate-50 antialiased transition-colors duration-300 overflow-x-hidden min-h-screen flex flex-col`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ProgressBar />
          <Navbar />
          <main className="flex-grow flex flex-col">{children}</main>
          <Footer />
          <BackToTop />
          <WhatsAppButton />
          <GlobalScripts />
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}