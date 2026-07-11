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

const siteUrl = "https://signpoint.app";
const siteDescription =
  "Solusi tanda tangan elektronik yang terintegrasi langsung di dalam Microsoft SharePoint, dilengkapi AI Document Review.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "SignPoint - E-Signature Native untuk SharePoint dengan AI",
  description: siteDescription,
  keywords: [
    "tanda tangan elektronik",
    "e-signature",
    "SharePoint",
    "Microsoft 365",
    "AI Document Review",
    "SignPoint",
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "SignPoint",
    title: "SignPoint - E-Signature Native untuk SharePoint dengan AI",
    description: siteDescription,
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "SignPoint",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SignPoint - E-Signature Native untuk SharePoint dengan AI",
    description: siteDescription,
    images: ["/logo.png"],
  },
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
