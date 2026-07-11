import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Kontak - SignPoint",
  description:
    "Hubungi tim SignPoint untuk demo, pertanyaan produk, atau bergabung dengan daftar tunggu pengguna awal.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Kontak"
        title="Mari bicara"
        description="Kami senang mendengar dari Anda. Tinggalkan email Anda atau hubungi kami langsung."
      />
      <ContactSection />
    </main>
  );
}
