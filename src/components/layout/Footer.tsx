import Link from "next/link";
import Image from "next/image";
import { PenNib, LinkedinLogo, TwitterLogo, FacebookLogo, Sparkle } from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-12 text-center sm:text-left">
          <div className="col-span-1 sm:col-span-2 md:col-span-1 flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="SignPoint Logo" width={58} height={58} className="w-12 h-12 object-contain" />
              <span className="font-bold text-xl text-slate-900">SignPoint</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Solusi tanda tangan elektronik terdepan untuk ekosistem Microsoft 365. Cepat, Mudah, Aman, dan Cerdas.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4 uppercase tracking-wider text-sm">Produk</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                <Link href="#" className="hover:text-brand-600 transition">Fitur Utama</Link>
              </li>
              <li>
                <Link href="#ai-review" className="hover:text-purple-600 transition flex items-center justify-center sm:justify-start gap-1">
                  AI Review <Sparkle weight="fill" />
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand-600 transition">Keamanan & Legal</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand-600 transition">API Documentation</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4 uppercase tracking-wider text-sm">Perusahaan</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                <Link href="#" className="hover:text-brand-600 transition">Tentang Kami</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand-600 transition">Karir</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand-600 transition">Blog & Studi Kasus</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand-600 transition">Hubungi Sales</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4 uppercase tracking-wider text-sm">Legal</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                <Link href="#" className="hover:text-brand-600 transition">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand-600 transition">Terms of Service</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand-600 transition">Kepatuhan UU ITE</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs sm:text-sm">© 2026 SignPoint Inc. All rights reserved.</p>
          <div className="flex gap-5 text-slate-400">
            <Link href="#" className="hover:text-brand-600 transition transform hover:scale-110">
              <LinkedinLogo weight="fill" className="text-xl sm:text-2xl" />
            </Link>
            <Link href="#" className="hover:text-brand-600 transition transform hover:scale-110">
              <TwitterLogo weight="fill" className="text-xl sm:text-2xl" />
            </Link>
            <Link href="#" className="hover:text-brand-600 transition transform hover:scale-110">
              <FacebookLogo weight="fill" className="text-xl sm:text-2xl" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
