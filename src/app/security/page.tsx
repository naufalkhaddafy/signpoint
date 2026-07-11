import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { SecuritySection } from "@/components/sections/SecuritySection";

export const metadata: Metadata = {
  title: "Keamanan & Kepatuhan - SignPoint",
  description:
    "Pendekatan keamanan SignPoint: data tetap di tenant Microsoft 365 Anda, enkripsi transit, dan jejak audit.",
};

export default function SecurityPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Keamanan & Kepatuhan"
        title="Keamanan yang selaras dengan standar enterprise"
        description="Kami memprioritaskan agar data dokumen Anda tetap berada di dalam kendali organisasi Anda."
      />
      <SecuritySection />
    </main>
  );
}
