"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkle, ArrowRight, List } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed w-full z-50 transition-all duration-300",
          isScrolled
            ? "glass-nav shadow-md bg-white/98"
            : "glass-nav bg-white/95"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
              <Image src="/logo.png" alt="SignPoint Logo" width={58} height={58} className="w-16 h-16 object-contain" />
              <span className="font-bold text-2xl tracking-tight text-brand-900">SignPoint</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <Link href="#features" className="text-slate-600 hover:text-brand-600 font-medium transition">
                Fitur
              </Link>
              <Link
                href="#ai-review"
                className="text-slate-600 hover:text-purple-600 font-medium transition flex items-center gap-1"
              >
                <Sparkle weight="fill" className="text-purple-500" /> AI Review{" "}
                <span className="bg-purple-100 text-purple-600 text-[10px] uppercase font-bold px-1.5 py-0.5 rounded-full">
                  Baru
                </span>
              </Link>
              <Link href="#how-it-works" className="text-slate-600 hover:text-brand-600 font-medium transition">
                Cara Kerja
              </Link>
              <Link href="#pricing" className="text-slate-600 hover:text-brand-600 font-medium transition">
                Harga
              </Link>
              <Link href="/demo" className="text-slate-600 hover:text-brand-600 font-medium transition">
                Demo
              </Link>
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex">
              <Link href="#contact" className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-2.5 rounded-full font-semibold transition shadow-lg shadow-brand-500/30 flex items-center gap-2 cursor-pointer">
                <span>Coba Gratis</span>
                <ArrowRight weight="bold" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-600 hover:text-brand-600 focus:outline-none cursor-pointer"
                aria-label="Toggle menu"
              >
                <List weight="bold" className="text-3xl" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
            <div className="px-4 pt-2 pb-6 space-y-1">
              <Link
                href="#features"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-slate-600 hover:text-brand-600 hover:bg-slate-50 rounded-md"
              >
                Fitur
              </Link>
              <Link
                href="#ai-review"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-purple-600 hover:bg-purple-50 rounded-md flex justify-between items-center"
              >
                <span>AI Review</span>{" "}
                <span className="bg-purple-100 text-purple-600 text-xs px-2 py-0.5 rounded-full ml-1 font-bold">
                  Baru
                </span>
              </Link>
              <Link
                href="#how-it-works"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-slate-600 hover:text-brand-600 hover:bg-slate-50 rounded-md"
              >
                Cara Kerja
              </Link>
              <Link
                href="#pricing"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-slate-600 hover:text-brand-600 hover:bg-slate-50 rounded-md"
              >
                Harga
              </Link>
              <Link
                href="/demo"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-slate-600 hover:text-brand-600 hover:bg-slate-50 rounded-md"
              >
                Demo
              </Link>
              <Link
                href="/demo"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-bold text-brand-600 bg-brand-50 rounded-md mt-4 text-center border border-brand-100"
              >
                Coba Demo
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
