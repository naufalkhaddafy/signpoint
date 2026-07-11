import Link from "next/link";
import { FilePdf, Sparkle, WarningCircle, ArrowRight, MagicWand, CheckCircle, PlayCircle } from "@phosphor-icons/react/dist/ssr";

export function AiReviewSection() {
  return (
    <section id="ai-review" className="py-20 sm:py-28 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/20 rounded-full blur-[80px] top-[-10%] left-[-10%] animate-pulse"></div>
        <div className="absolute w-48 h-48 sm:w-64 sm:h-64 bg-blue-500/20 rounded-full blur-[60px] bottom-[-10%] right-[-10%] animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Visual AI UI Mockup */}
          <div className="order-2 lg:order-1 relative mt-10 lg:mt-0 w-full mx-auto max-w-lg lg:max-w-none">
            <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl border border-slate-700/50 p-4 sm:p-6 shadow-2xl">
              {/* Document Header */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 pb-4 border-b border-slate-700/50">
                <FilePdf weight="fill" className="text-red-400 text-2xl flex-shrink-0" />
                <span className="font-medium text-sm sm:text-base truncate max-w-[200px] sm:max-w-xs">Perjanjian_Vendor_2026.pdf</span>
                <span className="ml-auto bg-slate-700 text-[10px] sm:text-xs px-2 py-1 rounded text-slate-300 font-semibold">42 Halaman</span>
              </div>
              
              {/* AI Chat UI */}
              <div className="space-y-4">
                {/* AI Message */}
                <div className="flex gap-2 sm:gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-purple-500/20 flex flex-shrink-0 items-center justify-center text-purple-400 mt-1">
                    <Sparkle weight="fill" />
                  </div>
                  <div className="bg-slate-700/50 rounded-xl rounded-tl-none p-3 sm:p-4 text-xs sm:text-sm text-slate-200">
                    <p className="font-bold text-purple-400 mb-2">Ringkasan AI Selesai:</p>
                    <ul className="space-y-2 list-disc list-inside">
                      <li><strong>Nilai Kontrak:</strong> Rp 2.500.000.000</li>
                      <li><strong>Durasi:</strong> 2 Tahun (Otomatis diperpanjang)</li>
                      <li className="mt-3 p-2 bg-red-900/30 border border-red-500/30 rounded-lg text-red-200 leading-relaxed">
                        <span className="text-red-400 flex items-center gap-1 mb-1 font-bold">
                          <WarningCircle weight="bold" className="text-lg" /> Red Flag (Pasal 7.2):
                        </span>
                        Klausal denda keterlambatan sebesar <strong>5% per hari</strong>. Angka ini melebihi standar industri (2%).
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* User Message */}
                <div className="flex gap-2 sm:gap-3 justify-end">
                  <div className="bg-brand-600/20 border border-brand-500/30 rounded-xl rounded-tr-none p-3 text-xs sm:text-sm text-brand-100 max-w-[85%]">
                    Tunjukkan letak halaman pasal denda tersebut.
                  </div>
                </div>
                
                {/* AI Action */}
                <div className="flex gap-2 sm:gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-purple-500/20 flex flex-shrink-0 items-center justify-center text-purple-400 mt-1">
                    <Sparkle weight="fill" />
                  </div>
                  <div className="bg-slate-700/50 rounded-xl rounded-tl-none p-3 text-xs sm:text-sm text-slate-200 flex flex-wrap items-center gap-2">
                    <span>Ada di <strong>Hal. 14, Paragraf 3</strong>.</span>
                    <button className="bg-slate-600 hover:bg-slate-500 px-3 py-1.5 rounded text-[10px] sm:text-xs font-bold transition flex items-center gap-1 cursor-pointer">
                      Ke Halaman 14 <ArrowRight weight="bold" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating saving time badge */}
            <div className="absolute -bottom-6 right-2 sm:-bottom-5 sm:-right-5 bg-white text-slate-800 p-3 rounded-xl shadow-lg border border-slate-200 flex items-center gap-3 animate-bounce z-20" style={{ animationDuration: "4s" }}>
              <span className="text-2xl sm:text-3xl">⏳</span>
              <div>
                <p className="text-[10px] sm:text-xs text-slate-500 font-medium uppercase tracking-wide">Waktu dihemat</p>
                <p className="font-bold text-sm sm:text-base">± 45 Menit membaca</p>
              </div>
            </div>
          </div>

          {/* AI Feature Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/20 text-purple-300 text-xs sm:text-sm font-semibold mb-6 border border-purple-500/30">
              <MagicWand weight="fill" />
              <span>Fitur Baru: SignPoint AI</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              Jangan Tanda Tangan Membabi Buta. <br />
              <span className="text-purple-400">Biar AI yang Membaca.</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
              Menghadapi dokumen berpuluh-puluh halaman sebelum penandatanganan? Fitur <strong>AI Document Review</strong> kami membaca, meringkas, dan menyoroti potensi risiko (seperti denda tersembunyi) dalam hitungan detik.
            </p>
            <ul className="space-y-4 mb-8 text-left max-w-xl mx-auto lg:mx-0">
              <li className="flex items-start gap-3">
                <CheckCircle weight="fill" className="text-purple-400 text-xl mt-0.5 flex-shrink-0" />
                <span className="text-slate-300 text-sm sm:text-base"><strong>Ringkasan Instan:</strong> Dapatkan intisari kontrak panjang tanpa membaca per kata.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle weight="fill" className="text-purple-400 text-xl mt-0.5 flex-shrink-0" />
                <span className="text-slate-300 text-sm sm:text-base"><strong>Deteksi Risiko (Red Flag):</strong> AI memperingatkan Anda tentang klausal tidak wajar yang merugikan.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle weight="fill" className="text-purple-400 text-xl mt-0.5 flex-shrink-0" />
                <span className="text-slate-300 text-sm sm:text-base"><strong>Tanya Jawab (Chat PDF):</strong> Chat langsung dengan dokumen Anda untuk mencari info spesifik.</span>
              </li>
            </ul>
            <Link href="/demo" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3.5 rounded-lg font-bold transition shadow-lg shadow-purple-500/30 flex items-center justify-center lg:justify-start gap-2 w-full sm:w-auto mx-auto lg:mx-0 cursor-pointer">
              <PlayCircle weight="fill" className="text-xl" />
              Lihat Cara AI Bekerja
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
