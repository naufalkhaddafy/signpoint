# SignPoint - Product Roadmap

Roadmap ini menerjemahkan rencana produk menjadi milestone teknis. Status dibedakan secara jelas agar tidak ada klaim fitur yang belum ada.

**Legenda status:** ✅ Selesai · 🚧 Sedang berjalan · 📋 Direncanakan

## Ringkasan Status Saat Ini

- ✅ Landing page dan halaman pendukung (features, pricing, security, contact, privacy, terms)
- ✅ Demo alur kerja statis di `/demo` (data contoh, tanpa backend)
- 📋 Semua integrasi sungguhan (Microsoft 365, backend AI, e-signature, penyimpanan) belum dibangun

---

## Milestone 1 - Demo MVP ✅

- **Objective:** Menunjukkan alur kerja SignPoint end-to-end secara meyakinkan tanpa backend.
- **Key features:** Pemilihan dokumen mock, hasil AI review, penyiapan tanda tangan, simulasi tanda tangan, audit trail.
- **Technical work:** Rute `/demo` berbasis state, data contoh di `src/lib/demo-data.ts`.
- **Risks:** Pengunjung mengira integrasi sudah live — dimitigasi dengan label "Demo Statis".
- **Acceptance criteria:** Demo dapat dijalankan penuh tanpa env/backend; tidak ada error runtime.

## Milestone 2 - Private Beta 📋

- **Objective:** Menguji produk dengan sekelompok pengguna awal terpilih.
- **Key features:** Daftar tunggu, onboarding manual, kanal umpan balik.
- **Technical work:** Penyimpanan pendaftaran, autentikasi dasar, feature flag.
- **Risks:** Ruang lingkup terlalu luas sebelum product-market fit.
- **Acceptance criteria:** Sekelompok pengguna dapat menjalankan alur inti pada tenant nyata.

## Milestone 3 - Integrasi Microsoft 365 📋

- **Objective:** Kehadiran native di SharePoint.
- **Key features:** Aksi menu konteks SharePoint, akses dokumen via Microsoft Graph.
- **Technical work:** SharePoint Framework / add-in, integrasi Graph API, penanganan izin.
- **Risks:** Kompleksitas persetujuan aplikasi dan perizinan tenant Microsoft.
- **Acceptance criteria:** Pengguna memicu SignPoint dari SharePoint dan membuka dokumen nyata.

## Milestone 4 - Backend AI Review 📋

- **Objective:** Mengganti hasil AI mock dengan analisis sungguhan.
- **Key features:** Ringkasan, deteksi klausul berisiko, tanya jawab dokumen.
- **Technical work:** Layanan parsing dokumen, orkestrasi model, endpoint API, caching.
- **Risks:** Akurasi, biaya, dan privasi data dokumen.
- **Acceptance criteria:** Dokumen nyata menghasilkan ringkasan dan temuan yang akurat dan konsisten.

## Milestone 5 - Alur E-Signature 📋

- **Objective:** Tanda tangan elektronik yang sah secara teknis end-to-end.
- **Key features:** Penempatan field, undangan penandatangan, penangkapan tanda tangan, sertifikat.
- **Technical work:** Mesin tanda tangan, alur email, penulisan versi final ke SharePoint.
- **Risks:** Kepatuhan hukum lintas yurisdiksi; keamanan proses tanda tangan.
- **Acceptance criteria:** Dokumen yang ditandatangani tersimpan kembali dengan bukti yang dapat diverifikasi.

## Milestone 6 - Audit Trail & Kepatuhan 📋

- **Objective:** Ketertelusuran dan fondasi kepatuhan.
- **Key features:** Log aktivitas, ekspor jejak audit, retensi.
- **Technical work:** Audit trail berbasis database, metadata SharePoint, kontrol retensi.
- **Risks:** Ekspektasi kepatuhan/sertifikasi yang melebihi kondisi nyata.
- **Acceptance criteria:** Setiap aktivitas tercatat, dapat diekspor, dan dapat diaudit.

## Milestone 7 - Dashboard Admin 📋

- **Objective:** Kontrol organisasi atas pengguna dan dokumen.
- **Key features:** Manajemen pengguna, peran, kuota, visibilitas penggunaan.
- **Technical work:** RBAC, UI admin, ringkasan analitik.
- **Risks:** Kompleksitas peran dan izin.
- **Acceptance criteria:** Admin mengelola anggota tim dan memantau aktivitas dari satu tempat.

---

## Pekerjaan Fondasi Lintas Milestone 📋

- Autentikasi (Microsoft Entra)
- Unggah dan pratinjau PDF sungguhan
- Penyimpanan data berbasis database
- Peninjauan hukum/kepatuhan
