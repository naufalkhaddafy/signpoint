import { SquaresFour, CheckCircle, PlayCircle, FilePdf, Signature } from "@phosphor-icons/react/dist/ssr";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden hero-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-sm font-semibold mb-6">
              <SquaresFour weight="fill" />
              <span>Dirancang untuk Microsoft 365</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Tanda Tangan Digital, <br />
              <span className="text-brand-600">Langsung di SharePoint.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Percepat alur kerja dokumen perusahaan Anda tanpa meninggalkan ekosistem Microsoft. Dilengkapi <strong>AI cerdas</strong> untuk meninjau kontrak sebelum ditandatangani. Aman dan mendukung alur tanda tangan yang tertib.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-brand-500/20 transition transform hover:-translate-y-1 flex items-center justify-center gap-2 cursor-pointer">
                Install App Sekarang
              </button>
              <button className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg shadow-sm transition flex items-center justify-center gap-2 cursor-pointer">
                <PlayCircle weight="fill" className="text-xl" />
                Lihat Demo
              </button>
            </div>
            
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4 lg:gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-1">
                <CheckCircle weight="fill" className="text-green-500 text-lg" />
                <span>Praktik keamanan enterprise</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle weight="fill" className="text-green-500 text-lg" />
                <span>Mendukung kebutuhan kepatuhan</span>
              </div>
            </div>
          </div>

          {/* Hero Image / Illustration */}
          <div className="relative lg:h-[500px] flex items-center justify-center mt-10 lg:mt-0 w-full max-w-lg mx-auto">
            <div className="absolute w-64 h-64 sm:w-72 sm:h-72 bg-brand-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 blob top-0 right-0"></div>
            <div className="absolute w-64 h-64 sm:w-72 sm:h-72 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 blob bottom-0 left-10" style={{ animationDelay: "2s" }}></div>
            
            {/* Mockup UI */}
            <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 p-2 w-full transform rotate-[-2deg] hover:rotate-0 transition duration-500 z-10">
              {/* Header Mockup */}
              <div className="bg-[#0078d4] h-12 rounded-t-lg flex items-center px-4 justify-between">
                <div className="flex gap-2 items-center">
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-20 h-3 rounded-full bg-white/30"></div>
                </div>
                <div className="text-white text-xs font-medium">SharePoint Online</div>
              </div>
              {/* Body Mockup */}
              <div className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row gap-4 mb-6 border-b pb-4 items-start sm:items-center">
                  <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FilePdf weight="fill" className="text-2xl" />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-slate-800 break-words">Kontrak_Kerjasama_v2.pdf</div>
                    <div className="text-sm text-slate-500">Diubah 2 jam yang lalu</div>
                  </div>
                  <div>
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">Pending Sign</span>
                  </div>
                </div>
                {/* Signature Area */}
                <div className="border-2 border-dashed border-brand-300 bg-brand-50 rounded-xl p-4 sm:p-6 text-center">
                  <p className="text-sm text-brand-700 mb-3 font-medium">Klik untuk menandatangani dokumen ini</p>
                  <div className="w-full h-20 sm:h-24 bg-white border border-slate-200 rounded flex items-center justify-center relative overflow-hidden group cursor-pointer">
                    <span className="text-slate-400 group-hover:hidden text-sm sm:text-base">Area Tanda Tangan</span>
                    <Signature weight="bold" className="text-3xl sm:text-4xl text-brand-600 absolute opacity-0 group-hover:opacity-100 transition-opacity transform scale-125" />
                  </div>
                  <button className="mt-4 w-full bg-brand-600 text-white py-2 rounded-lg font-medium text-sm hover:bg-brand-700 transition cursor-pointer">Selesaikan Dokumen</button>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-4 bg-white p-3 sm:p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce z-20" style={{ animationDuration: "3s" }}>
              <div className="bg-green-100 p-2 rounded-full text-green-600 flex-shrink-0">
                <CheckCircle weight="fill" className="text-xl" />
              </div>
              <div>
                <p className="text-[10px] sm:text-xs text-slate-500 font-medium">Status</p>
                <p className="text-xs sm:text-sm font-bold text-slate-800">Dokumen Sah!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
