import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Swift Express Cargo | Premium Logistics",
  description: "Fast, reliable international shipping from USA to Bangladesh and worldwide.",
};

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GlobalScripts from "../components/GlobalScripts";
import BackToTop from "../components/BackToTop";
import ProgressBar from "../components/ProgressBar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
      </head>
      <body className={`${inter.variable} font-sans bg-slate-50 antialiased`}>
        <ProgressBar />
        <Navbar />
        {children}
        <Footer />
        <BackToTop />
        <GlobalScripts />
      </body>
    </html>
  );
}
