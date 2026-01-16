import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "VJC Overseas | Germany Opportunity Card & Immigration Experts",
    template: "%s | VJC Overseas"
  },
  description: "Best Visa Immigration Consultants for Germany Opportunity Card, Canada PR, Australia Visas & More. Free Eligibility Check.",
  icons: {
    icon: "/favicon.ico", // Make sure you have a favicon in /public
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-white text-gray-900">
        <Navbar />
        {/* Added padding-top (pt-24) so the fixed navbar doesn't cover your content */}
        <main className="min-h-screen pt-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}