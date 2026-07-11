"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FilePdf,
  FileDoc,
  Sparkle,
  WarningCircle,
  CheckCircle,
  Signature,
  ClipboardText,
  ArrowRight,
  ArrowLeft,
  ArrowClockwise,
  House,
} from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import {
  mockDocuments,
  mockSummary,
  mockRiskFlags,
  mockSigners,
  mockAuditTrail,
  type MockDocument,
  type RiskLevel,
} from "@/lib/demo-data";

const steps = [
  "Pilih Dokumen",
  "AI Review",
  "Siapkan Tanda Tangan",
  "Tanda Tangan",
  "Audit Trail",
];

const riskStyles: Record<RiskLevel, string> = {
  high: "bg-red-50 border-red-200 text-red-700",
  medium: "bg-amber-50 border-amber-200 text-amber-700",
  low: "bg-slate-50 border-slate-200 text-slate-600",
};

const riskLabel: Record<RiskLevel, string> = {
  high: "Risiko Tinggi",
  medium: "Perlu Perhatian",
  low: "Informasi",
};

export default function DemoPage() {
  const [step, setStep] = useState(0);
  const [selectedDoc, setSelectedDoc] = useState<MockDocument | null>(null);
  const [signed, setSigned] = useState(false);

  const canNext =
    (step === 0 && selectedDoc !== null) ||
    (step === 3 && signed) ||
    (step !== 0 && step !== 3 && step < steps.length - 1);

  const reset = () => {
    setStep(0);
    setSelectedDoc(null);
    setSigned(false);
  };

  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Demo banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkle weight="fill" /> Demo Statis
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Alur Kerja SignPoint
            </h1>
            <p className="text-slate-500 text-sm mt-1">
              Simulasi interaktif dengan data contoh. Tidak terhubung ke SharePoint sungguhan.
            </p>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-brand-600 transition self-start"
          >
            <House weight="bold" /> Beranda
          </Link>
        </div>

        {/* Stepper */}
        <ol className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
          {steps.map((label, i) => (
            <li key={label} className="flex items-center gap-2 flex-shrink-0">
              <div
                className={cn(
                  "flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition",
                  i === step
                    ? "bg-brand-600 text-white"
                    : i < step
                      ? "bg-brand-100 text-brand-700"
                      : "bg-white text-slate-400 border border-slate-200"
                )}
              >
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px]">
                  {i < step ? <CheckCircle weight="fill" /> : i + 1}
                </span>
                {label}
              </div>
              {i < steps.length - 1 && (
                <span className="text-slate-300 text-xs">/</span>
              )}
            </li>
          ))}
        </ol>

        {/* Step content */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 min-h-[360px]">
          {step === 0 && (
            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-1">
                Pilih dokumen dari SharePoint
              </h2>
              <p className="text-slate-500 text-sm mb-6">
                Pilih salah satu dokumen contoh untuk memulai.
              </p>
              <div className="space-y-3">
                {mockDocuments.map((doc) => (
                  <button
                    key={doc.id}
                    onClick={() => setSelectedDoc(doc)}
                    className={cn(
                      "w-full flex items-center gap-4 p-4 rounded-xl border text-left transition cursor-pointer",
                      selectedDoc?.id === doc.id
                        ? "border-brand-500 bg-brand-50 ring-2 ring-brand-200"
                        : "border-slate-200 hover:border-brand-300 hover:bg-slate-50"
                    )}
                  >
                    <div
                      className={cn(
                        "w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0",
                        doc.type === "PDF"
                          ? "bg-red-100 text-red-600"
                          : "bg-blue-100 text-blue-600"
                      )}
                    >
                      {doc.type === "PDF" ? (
                        <FilePdf weight="fill" className="text-2xl" />
                      ) : (
                        <FileDoc weight="fill" className="text-2xl" />
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-slate-900 truncate">{doc.name}</p>
                      <p className="text-xs text-slate-500">
                        {doc.library} · {doc.pages} halaman · {doc.sizeLabel} · {doc.modified}
                      </p>
                    </div>
                    {selectedDoc?.id === doc.id && (
                      <CheckCircle weight="fill" className="text-brand-600 text-xl flex-shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 1 && (
            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-1 flex items-center gap-2">
                <Sparkle weight="fill" className="text-purple-500" /> Hasil AI Review
              </h2>
              <p className="text-slate-500 text-sm mb-6">
                Ringkasan dan temuan risiko untuk{" "}
                <span className="font-semibold text-slate-700">{selectedDoc?.name}</span>.
              </p>

              <div className="mb-6">
                <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wide mb-3">
                  Ringkasan
                </h3>
                <ul className="space-y-2">
                  {mockSummary.map((s, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle weight="fill" className="text-brand-500 text-lg mt-0.5 flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wide mb-3">
                  Temuan Risiko ({mockRiskFlags.length})
                </h3>
                <div className="space-y-3">
                  {mockRiskFlags.map((flag, i) => (
                    <div
                      key={i}
                      className={cn("rounded-xl border p-4", riskStyles[flag.level])}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="flex items-center gap-2 font-bold text-sm">
                          <WarningCircle weight="fill" /> {flag.clause}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/70">
                          {riskLabel[flag.level]}
                        </span>
                      </div>
                      <p className="text-sm opacity-90">{flag.finding}</p>
                      <p className="text-xs mt-1 opacity-70">Halaman {flag.page}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-1 flex items-center gap-2">
                <Signature weight="fill" className="text-brand-600" /> Siapkan Tanda Tangan
              </h2>
              <p className="text-slate-500 text-sm mb-6">
                Tentukan penandatangan dan posisi tanda tangan (mock).
              </p>
              <div className="space-y-3">
                {mockSigners.map((signer, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 bg-slate-50"
                  >
                    <div className="w-10 h-10 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center font-bold flex-shrink-0">
                      {signer.name.charAt(0)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-slate-900">{signer.name}</p>
                      <p className="text-xs text-slate-500 truncate">{signer.email}</p>
                    </div>
                    <span className="text-xs font-medium text-slate-500 bg-white border border-slate-200 px-2.5 py-1 rounded-full flex-shrink-0">
                      {signer.role}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 border-2 border-dashed border-brand-200 rounded-xl p-6 text-center bg-brand-50/50">
                <Signature weight="duotone" className="text-3xl text-brand-400 mx-auto mb-2" />
                <p className="text-sm text-slate-500">
                  Area tanda tangan ditempatkan pada halaman terakhir dokumen.
                </p>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-1">Tanda Tangan Dokumen</h2>
              <p className="text-slate-500 text-sm mb-6">
                Klik tombol di bawah untuk menyelesaikan tanda tangan (simulasi).
              </p>
              <div className="border border-slate-200 rounded-xl p-8 text-center">
                {signed ? (
                  <div className="text-green-600">
                    <CheckCircle weight="fill" className="text-5xl mx-auto mb-3" />
                    <p className="font-bold text-slate-900">Dokumen berhasil ditandatangani</p>
                    <p className="text-sm text-slate-500 mt-1">
                      Versi final otomatis tersimpan kembali ke SharePoint (mock).
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="font-[cursive] text-3xl text-slate-300 border-b border-slate-200 pb-4 mb-4 mx-auto max-w-xs">
                      tanda tangan
                    </div>
                    <button
                      onClick={() => setSigned(true)}
                      className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-xl font-bold transition inline-flex items-center gap-2 cursor-pointer"
                    >
                      <Signature weight="fill" /> Tanda Tangani Sekarang
                    </button>
                  </>
                )}
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-1 flex items-center gap-2">
                <ClipboardText weight="fill" className="text-teal-600" /> Audit Trail
              </h2>
              <p className="text-slate-500 text-sm mb-6">
                Setiap aktivitas tercatat pada metadata dokumen.
              </p>
              <ol className="relative border-l-2 border-slate-200 ml-3 space-y-6">
                {mockAuditTrail.map((entry, i) => (
                  <li key={i} className="ml-6">
                    <span className="absolute -left-[9px] w-4 h-4 rounded-full bg-brand-500 border-2 border-white" />
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-mono text-xs text-slate-400">{entry.time}</span>
                      <span className="font-semibold text-slate-900">{entry.actor}</span>
                    </div>
                    <p className="text-sm text-slate-600">{entry.event}</p>
                  </li>
                ))}
              </ol>
              <div className="mt-8 p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 text-sm flex items-center gap-2">
                <CheckCircle weight="fill" className="text-lg flex-shrink-0" />
                Alur selesai. Ini adalah simulasi; integrasi SharePoint sungguhan ada di roadmap.
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6">
          <button
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm text-slate-600 hover:bg-slate-100 transition disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          >
            <ArrowLeft weight="bold" /> Kembali
          </button>

          {step < steps.length - 1 ? (
            <button
              onClick={() => setStep((s) => s + 1)}
              disabled={!canNext}
              className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-6 py-2.5 rounded-xl font-bold text-sm transition disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              Lanjut <ArrowRight weight="bold" />
            </button>
          ) : (
            <button
              onClick={reset}
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-xl font-bold text-sm transition cursor-pointer"
            >
              <ArrowClockwise weight="bold" /> Ulangi Demo
            </button>
          )}
        </div>

        <p className="text-center text-xs text-slate-400 mt-8">
          Seluruh dokumen, temuan AI, dan tanda tangan pada halaman ini adalah data contoh untuk keperluan demonstrasi.
        </p>
      </div>
    </main>
  );
}
