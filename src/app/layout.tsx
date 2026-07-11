import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SignPoint - E-Signature Native untuk SharePoint dengan AI",
  description: "Solusi tanda tangan elektronik yang terintegrasi langsung di dalam Microsoft SharePoint, dilengkapi AI Document Review.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={cn(inter.variable, "font-sans text-slate-800 antialiased overflow-x-hidden min-h-screen")}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
