import { ShieldCheck, Lock, ClipboardText, UsersThree } from "@phosphor-icons/react/dist/ssr";

export function SecuritySection() {
  return (
    <section id="security" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 font-bold tracking-wide uppercase text-sm mb-3">
            Keamanan & Kepatuhan
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Dibangun dengan Standar Keamanan Enterprise
          </h3>
          <p className="text-base sm:text-lg text-slate-600">
            Data dokumen Anda tetap berada di dalam ekosistem Microsoft 365. Kami menerapkan praktik keamanan yang selaras dengan kebutuhan perusahaan.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-100">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
              <Lock weight="bold" className="text-3xl" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-3">Data di Tenant Anda</h4>
            <p className="text-slate-600 leading-relaxed text-sm">
              Dokumen tetap tersimpan di SharePoint dan OneDrive milik organisasi Anda, bukan di server pihak ketiga.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-100">
            <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600 mb-6">
              <ShieldCheck weight="bold" className="text-3xl" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-3">Enkripsi Transit</h4>
            <p className="text-slate-600 leading-relaxed text-sm">
              Seluruh komunikasi dienkripsi melalui protokol standar industri untuk melindungi data saat berpindah.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-100">
            <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-6">
              <UsersThree weight="bold" className="text-3xl" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-3">Kontrol Akses Microsoft</h4>
            <p className="text-slate-600 leading-relaxed text-sm">
              Autentikasi memanfaatkan izin dan identitas Microsoft 365 yang sudah dikelola tim IT Anda.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-100">
            <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 mb-6">
              <ClipboardText weight="bold" className="text-3xl" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-3">Jejak Audit</h4>
            <p className="text-slate-600 leading-relaxed text-sm">
              Setiap aktivitas tanda tangan tercatat pada metadata dokumen untuk mendukung kebutuhan kepatuhan Anda.
            </p>
          </div>
        </div>

        <p className="text-center text-slate-400 text-sm mt-10 max-w-2xl mx-auto">
          SignPoint sedang dalam tahap pengembangan aktif. Kami dengan senang hati mendiskusikan detail arsitektur keamanan dan roadmap kepatuhan bersama tim Anda.
        </p>
      </div>
    </section>
  );
}
