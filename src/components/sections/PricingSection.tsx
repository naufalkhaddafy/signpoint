import { CheckCircle } from "@phosphor-icons/react/dist/ssr";

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 sm:py-24 bg-brand-50 relative overflow-hidden">
      {/* background decorative graphic */}
      <svg className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 text-brand-100 opacity-50 w-96 h-96" fill="currentColor" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
          Siap mendigitalkan dokumen Anda?
        </h2>
        <p className="text-base sm:text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
          Bergabung dengan 500+ perusahaan yang telah mempercepat proses administrasi mereka dengan SignPoint.
        </p>
        
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-10 border border-slate-100 max-w-lg mx-auto transform hover:scale-105 transition duration-300">
          <span className="bg-accent-500 text-white px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
            Enterprise Offer
          </span>
          <div className="my-6 sm:my-8">
            <span className="text-4xl sm:text-5xl font-extrabold text-slate-900">Hubungi Kami</span>
            <span className="text-slate-500 block mt-2 text-sm sm:text-base">untuk demo custom & penawaran spesial</span>
          </div>
          <ul className="text-left space-y-4 mb-8 text-slate-600 text-sm sm:text-base mx-auto max-w-xs">
            <li className="flex items-center gap-3"><CheckCircle weight="fill" className="text-brand-600 text-xl" /> Unlimited Users</li>
            <li className="flex items-center gap-3"><CheckCircle weight="fill" className="text-brand-600 text-xl" /> Integrasi SharePoint Penuh</li>
            <li className="flex items-center gap-3"><CheckCircle weight="fill" className="text-purple-500 text-xl" /> <strong>Akses Fitur AI Review</strong></li>
            <li className="flex items-center gap-3"><CheckCircle weight="fill" className="text-brand-600 text-xl" /> Support Prioritas 24/7</li>
          </ul>
          <button className="w-full bg-brand-600 text-white py-4 rounded-xl font-bold hover:bg-brand-700 transition shadow-lg shadow-brand-500/30 text-lg">
            Jadwalkan Demo Sekarang
          </button>
          <p className="text-xs text-slate-400 mt-4 font-medium">Tidak perlu kartu kredit. Setup instalasi dalam 5 menit.</p>
        </div>
      </div>
    </section>
  );
}
