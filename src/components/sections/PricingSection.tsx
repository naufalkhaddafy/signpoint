import { CheckCircle } from "@phosphor-icons/react/dist/ssr";

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 sm:py-24 bg-brand-50 relative overflow-hidden">
      {/* background decorative graphic */}
      <svg className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 text-brand-100 opacity-50 w-96 h-96" fill="currentColor" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Siap mendigitalkan dokumen Anda?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Bergabung dengan 500+ perusahaan yang telah mempercepat proses administrasi mereka dengan SignPoint.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Free Plan */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-slate-100 flex flex-col hover:shadow-2xl transition-all duration-300 hover:-translate-y-3">
            <div className="mb-8">
              <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">Pemula</span>
              <div className="my-4">
                <span className="text-4xl font-extrabold text-slate-900">Gratis</span>
              </div>
              <p className="text-slate-500 text-sm">Cocok untuk penggunaan pribadi atau bisnis kecil.</p>
            </div>
            <ul className="space-y-4 mb-8 text-slate-600 text-sm flex-1">
              <li className="flex items-start gap-3"><CheckCircle weight="fill" className="text-brand-600 text-xl flex-shrink-0" /> 10 dokumen per hari</li>
              <li className="flex items-start gap-3"><CheckCircle weight="fill" className="text-brand-600 text-xl flex-shrink-0" /> 1 Pengguna</li>
              <li className="flex items-start gap-3"><CheckCircle weight="fill" className="text-brand-600 text-xl flex-shrink-0" /> Integrasi SharePoint Dasar</li>
            </ul>
            <button className="w-full bg-white text-brand-600 border border-brand-200 py-3 rounded-xl font-bold hover:bg-brand-50 transition text-sm cursor-pointer">
              Mulai Gratis
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border-2 border-brand-500 relative transform md:-translate-y-4 flex flex-col hover:shadow-2xl transition-all duration-300 hover:-translate-y-7">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span className="bg-brand-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                Paling Populer
              </span>
            </div>
            <div className="mb-8 mt-2">
              <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">Pro</span>
              <div className="my-4">
                <span className="text-4xl font-extrabold text-slate-900">Rp 100rb</span>
                <span className="text-slate-500 text-sm"> / bulan</span>
              </div>
              <p className="text-slate-500 text-sm">Untuk tim yang membutuhkan volume tanda tangan lebih tinggi.</p>
            </div>
            <ul className="space-y-4 mb-8 text-slate-600 text-sm flex-1">
              <li className="flex items-start gap-3"><CheckCircle weight="fill" className="text-brand-600 text-xl flex-shrink-0" /> <strong>100 dokumen per hari</strong></li>
              <li className="flex items-start gap-3"><CheckCircle weight="fill" className="text-brand-600 text-xl flex-shrink-0" /> Hingga 10 Pengguna</li>
              <li className="flex items-start gap-3"><CheckCircle weight="fill" className="text-brand-600 text-xl flex-shrink-0" /> Integrasi SharePoint Penuh</li>
              <li className="flex items-start gap-3"><CheckCircle weight="fill" className="text-brand-600 text-xl flex-shrink-0" /> Email Support Prioritas</li>
            </ul>
            <button className="w-full bg-brand-600 text-white py-3 rounded-xl font-bold hover:bg-brand-700 transition shadow-lg shadow-brand-500/30 text-sm cursor-pointer">
              Mulai Berlangganan
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-slate-900 rounded-2xl shadow-lg p-6 sm:p-8 border border-slate-800 flex flex-col hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 text-white">
            <div className="mb-8">
              <span className="text-accent-400 font-bold uppercase tracking-wider text-sm">Enterprise</span>
              <div className="my-4">
                <span className="text-4xl font-extrabold">Hubungi Kami</span>
              </div>
              <p className="text-slate-400 text-sm">Solusi kustom untuk skala perusahaan besar dengan fitur eksklusif.</p>
            </div>
            <ul className="space-y-4 mb-8 text-slate-300 text-sm flex-1">
              <li className="flex items-start gap-3"><CheckCircle weight="fill" className="text-accent-500 text-xl flex-shrink-0" /> Unlimited Dokumen</li>
              <li className="flex items-start gap-3"><CheckCircle weight="fill" className="text-accent-500 text-xl flex-shrink-0" /> Unlimited Users</li>
              <li className="flex items-start gap-3"><CheckCircle weight="fill" className="text-purple-400 text-xl flex-shrink-0" /> <strong>Akses Fitur AI Review</strong></li>
              <li className="flex items-start gap-3"><CheckCircle weight="fill" className="text-accent-500 text-xl flex-shrink-0" /> Support Prioritas 24/7 & SLA</li>
            </ul>
            <button className="w-full bg-white text-slate-900 py-3 rounded-xl font-bold hover:bg-slate-100 transition text-sm cursor-pointer">
              Jadwalkan Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
