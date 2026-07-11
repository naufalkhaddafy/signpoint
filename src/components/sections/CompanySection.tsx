import { Buildings, Target, Rocket } from "@phosphor-icons/react/dist/ssr";

export function CompanySection() {
  return (
    <section id="company" className="py-20 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-brand-600 font-bold tracking-wide uppercase text-sm mb-3">
              Tentang Kami
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Tim yang Fokus pada Alur Kerja Dokumen
            </h3>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
              SignPoint adalah startup tahap awal yang membangun tanda tangan elektronik native untuk Microsoft SharePoint. Kami percaya proses persetujuan dokumen seharusnya cepat, aman, dan tidak memaksa tim berpindah aplikasi.
            </p>
            <p className="text-base text-slate-600 leading-relaxed">
              Kami sedang membangun produk ini bersama pengguna awal. Jika Anda tertarik menjadi bagian dari perjalanan kami, kami ingin sekali mendengar dari Anda.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="flex gap-4 sm:gap-6 bg-white rounded-2xl p-6 border border-slate-100">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center">
                <Target weight="bold" className="text-2xl" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">Misi Kami</h4>
                <p className="text-slate-600 text-sm">
                  Menghilangkan friksi dalam persetujuan dokumen bagi tim yang bekerja di ekosistem Microsoft 365.
                </p>
              </div>
            </div>

            <div className="flex gap-4 sm:gap-6 bg-white rounded-2xl p-6 border border-slate-100">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
                <Rocket weight="bold" className="text-2xl" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">Tahap Kami</h4>
                <p className="text-slate-600 text-sm">
                  Startup tahap awal yang aktif mengembangkan produk bersama masukan dari pengguna pertama.
                </p>
              </div>
            </div>

            <div className="flex gap-4 sm:gap-6 bg-white rounded-2xl p-6 border border-slate-100">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center">
                <Buildings weight="bold" className="text-2xl" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">Fokus Kami</h4>
                <p className="text-slate-600 text-sm">
                  Integrasi mendalam dengan SharePoint, Teams, dan OneDrive untuk pengalaman yang benar-benar native.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
