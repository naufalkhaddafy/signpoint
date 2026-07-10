import { ArrowsInLineHorizontal, Sparkle, ShieldCheck } from "@phosphor-icons/react/dist/ssr";

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 font-bold tracking-wide uppercase text-sm mb-3">
            Kenapa SignPoint?
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Fitur Lengkap untuk Enterprise
          </h3>
          <p className="text-base sm:text-lg text-slate-600">
            Tidak perlu keluar dari SharePoint. Kelola seluruh siklus dokumen Anda dalam satu tab.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:shadow-brand-500/5 transition duration-300 group">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition">
              <ArrowsInLineHorizontal weight="bold" className="text-3xl" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">Integrasi Native</h4>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              SignPoint muncul langsung di menu "Context" SharePoint. Klik kanan pada dokumen apa saja, dan mulai tanda tangan tanpa pindah aplikasi.
            </p>
          </div>

          {/* Feature 2: Highlighted AI Feature */}
          <div className="p-6 sm:p-8 rounded-2xl bg-purple-50 border border-purple-100 hover:shadow-xl hover:shadow-purple-500/10 transition duration-300 group relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-purple-500 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-bl-lg tracking-wider">
              Fitur Baru
            </div>
            <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition">
              <Sparkle weight="fill" className="text-3xl" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">AI Document Review</h4>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Punya kontrak 50 halaman? Biarkan AI kami meringkas poin penting, mendeteksi risiko klausal, dan menyorot area kritis sebelum Anda setuju.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:shadow-brand-500/5 transition duration-300 group">
            <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 transition">
              <ShieldCheck weight="bold" className="text-3xl" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">Audit Trail & Otomatisasi</h4>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Lacak log dokumen di metadata SharePoint. Terintegrasi dengan Power Automate untuk memindahkan folder setelah dokumen selesai.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
