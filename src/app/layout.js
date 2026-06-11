import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Swift Express Cargo",
  description: "Fast, reliable international shipping from USA to Bangladesh and worldwide.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
        <script src="/script.js" defer></script>
      </head>
      <body className={`${roboto.variable} font-roboto bg-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
