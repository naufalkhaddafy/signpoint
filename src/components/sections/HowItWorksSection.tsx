import { Image as ImageIcon, Eye, ShareNetwork, PenNib, MagicWand, Trash } from "@phosphor-icons/react/dist/ssr";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 sm:py-24 bg-slate-50 text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Content Steps */}
          <div className="order-2 lg:order-1">
            <h3 className="text-3xl sm:text-4xl font-bold mb-8 text-center lg:text-left">Cara Kerja yang Seamless</h3>
            <div className="space-y-8">
              <div className="flex gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-lg sm:text-xl shadow-lg">1</div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold mb-2 text-slate-900">Pilih Dokumen</h4>
                  <p className="text-slate-600 text-sm sm:text-base">Pilih dokumen Word atau PDF langsung dari Document Library SharePoint Anda. Tanpa perlu download/upload.</p>
                </div>
              </div>
              <div className="flex gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-slate-400 flex items-center justify-center font-bold text-lg sm:text-xl border-2 border-slate-200">2</div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold mb-2 text-slate-900">Tentukan Penandatangan</h4>
                  <p className="text-slate-600 text-sm sm:text-base">Masukkan email pihak terkait (internal atau eksternal) dan posisikan area tanda tangan dengan <em>drag & drop</em>.</p>
                </div>
              </div>
              <div className="flex gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-slate-400 flex items-center justify-center font-bold text-lg sm:text-xl border-2 border-slate-200">3</div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold mb-2 text-slate-900">Tanda Tangan & Simpan</h4>
                  <p className="text-slate-600 text-sm sm:text-base">Klien menandatangani via email/HP. Dokumen final otomatis tersimpan kembali di SharePoint sebagai versi baru.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual representation */}
          <div className="order-1 lg:order-2 relative w-full max-w-md mx-auto lg:max-w-none">
            <div className="absolute inset-0 bg-brand-200 blur-[80px] opacity-50 rounded-full"></div>
            <div className="relative bg-white rounded-xl border border-slate-200 p-4 sm:p-6 shadow-xl">
              
              {/* Main Document Background Screen */}
              <div className="space-y-4 opacity-30 select-none">
                <div className="h-4 w-1/3 bg-slate-300 rounded"></div>
                <div className="h-32 w-full bg-slate-200 rounded flex items-center justify-center">
                  <ImageIcon weight="fill" className="text-4xl text-slate-300" />
                </div>
                <div className="h-4 w-2/3 bg-slate-300 rounded"></div>
                <div className="h-4 w-1/2 bg-slate-300 rounded"></div>
              </div>

              {/* Mockup of SharePoint Context Menu overlay */}
              <div className="bg-white rounded-lg p-3 sm:p-4 shadow-2xl w-56 sm:w-64 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 border border-slate-100 text-slate-800">
                <div className="text-[10px] sm:text-xs text-slate-400 mb-2 border-b border-slate-100 pb-2 uppercase tracking-wide font-semibold">SharePoint Menu</div>
                <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm font-medium">
                  <li className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded cursor-pointer transition">
                    <Eye weight="fill" className="text-slate-400 text-lg" /> Preview
                  </li>
                  <li className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded cursor-pointer transition">
                    <ShareNetwork weight="fill" className="text-slate-400 text-lg" /> Share
                  </li>
                  {/* Highlighted SignPoint Action */}
                  <li className="flex items-center gap-3 p-2 bg-brand-50 text-brand-700 font-bold rounded cursor-pointer border border-brand-100 shadow-sm relative overflow-hidden group">
                    <div className="absolute inset-0 bg-brand-100 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
                    <PenNib weight="fill" className="text-lg relative z-10" /> <span className="relative z-10">Sign with SignPoint</span>
                  </li>
                  <li className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded cursor-pointer transition">
                    <MagicWand weight="fill" className="text-purple-400 text-lg" /> AI Review
                  </li>
                  <li className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded cursor-pointer text-red-500 transition">
                    <Trash weight="fill" className="text-lg" /> Delete
                  </li>
                </ul>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
