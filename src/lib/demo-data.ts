// Static mock data for the SignPoint demo flow.
// No backend, no persistence — everything here is illustrative sample data.

export type RiskLevel = "high" | "medium" | "low";

export interface MockDocument {
  id: string;
  name: string;
  type: "PDF" | "DOCX";
  pages: number;
  sizeLabel: string;
  library: string;
  modified: string;
}

export interface RiskFlag {
  level: RiskLevel;
  clause: string;
  page: number;
  finding: string;
}

export interface Signer {
  name: string;
  email: string;
  role: string;
}

export interface AuditEntry {
  time: string;
  actor: string;
  event: string;
}

export const mockDocuments: MockDocument[] = [
  {
    id: "doc-1",
    name: "Perjanjian Kerja Sama Vendor.pdf",
    type: "PDF",
    pages: 42,
    sizeLabel: "1.8 MB",
    library: "Documents / Kontrak 2026",
    modified: "2 jam lalu",
  },
  {
    id: "doc-2",
    name: "NDA - Mitra Teknologi.docx",
    type: "DOCX",
    pages: 6,
    sizeLabel: "240 KB",
    library: "Documents / Legal",
    modified: "Kemarin",
  },
  {
    id: "doc-3",
    name: "Surat Penawaran Harga.pdf",
    type: "PDF",
    pages: 12,
    sizeLabel: "620 KB",
    library: "Documents / Sales",
    modified: "3 hari lalu",
  },
];

export const mockSummary: string[] = [
  "Dokumen mengatur kerja sama penyediaan layanan selama 24 bulan dengan opsi perpanjangan otomatis.",
  "Nilai kontrak dibayar dalam 4 termin, mengikuti pencapaian milestone yang disepakati kedua pihak.",
  "Terdapat klausul kerahasiaan dan pembatasan tanggung jawab yang perlu ditinjau sebelum disetujui.",
];

export const mockRiskFlags: RiskFlag[] = [
  {
    level: "high",
    clause: "Denda Keterlambatan",
    page: 14,
    finding:
      "Denda 2% per hari tanpa batas maksimum. Berpotensi membengkak melebihi nilai kontrak.",
  },
  {
    level: "medium",
    clause: "Perpanjangan Otomatis",
    page: 22,
    finding:
      "Kontrak diperpanjang otomatis kecuali dibatalkan 90 hari sebelum berakhir.",
  },
  {
    level: "low",
    clause: "Yurisdiksi Hukum",
    page: 39,
    finding: "Penyelesaian sengketa mengikuti yurisdiksi di luar domisili perusahaan Anda.",
  },
];

export const mockSigners: Signer[] = [
  { name: "Anda", email: "anda@perusahaan.com", role: "Penandatangan Internal" },
  { name: "PT Mitra Vendor", email: "legal@mitravendor.co.id", role: "Pihak Kedua" },
];

export const mockAuditTrail: AuditEntry[] = [
  { time: "10:02", actor: "Anda", event: "Dokumen dipilih dari SharePoint" },
  { time: "10:03", actor: "AI Review", event: "Analisis risiko selesai (3 temuan)" },
  { time: "10:05", actor: "Anda", event: "Area tanda tangan ditentukan" },
  { time: "10:06", actor: "Anda", event: "Dokumen ditandatangani" },
  { time: "10:06", actor: "SignPoint", event: "Versi final disimpan kembali ke SharePoint" },
];
