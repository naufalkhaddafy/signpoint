import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { PricingSection } from "@/components/sections/PricingSection";

export const metadata: Metadata = {
  title: "Harga - SignPoint",
  description:
    "Paket harga SignPoint yang sederhana: mulai gratis, naik ke Pro, atau hubungi kami untuk kebutuhan Enterprise.",
};

export default function PricingPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Harga"
        title="Harga yang sederhana dan transparan"
        description="Mulai gratis, dan tingkatkan saat kebutuhan tim Anda bertambah."
      />
      <PricingSection />
    </main>
  );
}
