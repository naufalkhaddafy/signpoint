import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";

export const metadata: Metadata = {
  title: "Ketentuan Layanan - SignPoint",
  description: "Ketentuan layanan penggunaan produk SignPoint selama tahap pengembangan.",
};

export default function TermsPage() {
  return (
    <main>
      <PageHeader eyebrow="Legal" title="Ketentuan Layanan" />
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-600 text-sm sm:text-base leading-relaxed">
          <p className="text-slate-400 text-sm">Terakhir diperbarui: 11 Juli 2026</p>

          <p>
            Dengan mengakses SignPoint, Anda menyetujui ketentuan berikut. SignPoint saat ini berada
            dalam tahap pengembangan aktif, sehingga fitur dan ketentuan dapat berubah.
          </p>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Penggunaan layanan</h2>
            <p>
              Anda setuju menggunakan SignPoint sesuai peraturan yang berlaku dan tidak untuk tujuan
              yang melanggar hukum. Anda bertanggung jawab atas keabsahan dokumen yang Anda proses.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Status pengembangan</h2>
            <p>
              Selama tahap awal, layanan disediakan &ldquo;sebagaimana adanya&rdquo; tanpa jaminan
              ketersediaan penuh. Kami akan berkomunikasi secara transparan mengenai perubahan
              penting.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Batasan tanggung jawab</h2>
            <p>
              Sepanjang diizinkan hukum yang berlaku, SignPoint tidak bertanggung jawab atas kerugian
              tidak langsung yang timbul dari penggunaan layanan pada tahap pengembangan ini.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Kontak</h2>
            <p>
              Pertanyaan mengenai ketentuan ini dapat dikirim ke{" "}
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
