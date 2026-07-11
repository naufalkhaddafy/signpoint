import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";

export const metadata: Metadata = {
  title: "Kebijakan Privasi - SignPoint",
  description: "Kebijakan privasi SignPoint mengenai data yang kami proses dan cara kami menanganinya.",
};

export default function PrivacyPage() {
  return (
    <main>
      <PageHeader eyebrow="Legal" title="Kebijakan Privasi" />
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose-signpoint space-y-8 text-slate-600 text-sm sm:text-base leading-relaxed">
          <p className="text-slate-400 text-sm">Terakhir diperbarui: 11 Juli 2026</p>

          <p>
            SignPoint adalah produk tahap awal. Halaman ini menjelaskan pendekatan kami terhadap
            privasi secara ringkas. Dokumen ini akan diperbarui seiring produk berkembang.
          </p>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Data yang kami proses</h2>
            <p>
              Saat Anda menghubungi kami atau mendaftar daftar tunggu, kami memproses alamat email
              yang Anda berikan. Dokumen yang Anda tanda tangani melalui integrasi tetap berada di
              dalam tenant Microsoft 365 organisasi Anda.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Bagaimana kami menggunakannya</h2>
            <p>
              Email digunakan semata-mata untuk menghubungi Anda terkait akses produk, demo, dan
              pembaruan yang relevan. Kami tidak menjual data Anda kepada pihak ketiga.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Penyimpanan data dokumen</h2>
            <p>
              SignPoint dirancang untuk bekerja di atas ekosistem Microsoft. Data dokumen tidak
              disalin ke server pihak ketiga di luar yang diperlukan untuk menjalankan alur kerja
              tanda tangan.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Kontak</h2>
            <p>
              Untuk pertanyaan terkait privasi, hubungi kami di{" "}
              <a
                href="mailto:hello@signpoint.app"
                className="text-brand-600 font-semibold hover:underline"
              >
                hello@signpoint.app
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
