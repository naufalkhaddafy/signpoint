import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { AiReviewSection } from "@/components/sections/AiReviewSection";

export const metadata: Metadata = {
  title: "Fitur - SignPoint",
  description:
    "Integrasi native SharePoint, AI Document Review, dan audit trail dalam satu alur kerja tanda tangan elektronik.",
};

export default function FeaturesPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Fitur"
        title="Semua yang Anda butuhkan untuk tanda tangan dokumen"
        description="SignPoint dirancang agar Anda tidak perlu keluar dari ekosistem Microsoft 365."
      />
      <FeaturesSection />
      <AiReviewSection />
    </main>
  );
}
