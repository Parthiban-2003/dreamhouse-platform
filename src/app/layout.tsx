import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import { Toaster } from "sonner";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/src/components/shared/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const Footer = dynamic(() => import("@/src/components/shared/Footer"), {
  loading: () => <div className="h-10 bg-gray-100 animate-pulse" />,
});

export const metadata: Metadata = {
  title: { default: "DreamHouse | Build Your Dream Home in Tamil Nadu", template: "%s | DreamHouse" },
  description: "Find verified civil engineers, calculate construction costs, and explore material shops near you.",
};

export const viewport: Viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased bg-white text-gray-900 flex flex-col min-h-screen">

        {/* Navbar */}
        <Suspense fallback={<div className="h-24 w-full bg-white/70 backdrop-blur-xl border-b border-gray-200" />}>
          <Navbar />
        </Suspense>

        <main className="flex-grow pt-24">
          {children}
        </main>
        {/* Footer */}
        <Footer />
        <Toaster position="top-right" richColors closeButton />
      </body>
    </html>
  );
}