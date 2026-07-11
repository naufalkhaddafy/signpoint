# SignPoint

E-signature native untuk Microsoft SharePoint dengan AI Document Review.

SignPoint memungkinkan tim menandatangani dokumen langsung dari SharePoint tanpa berpindah aplikasi, dilengkapi peninjauan kontrak berbasis AI sebelum ditandatangani.

> Status: proyek tahap awal. Saat ini berupa landing page dan demo statis (tanpa backend). Integrasi Microsoft 365 dan alur tanda tangan sungguhan berada di roadmap.

## Masalah

Proses persetujuan dokumen di banyak organisasi masih lambat: file diunduh, ditandatangani di aplikasi terpisah, lalu diunggah kembali. Alur ini rawan kesalahan versi dan memakan waktu, terutama bagi tim yang sudah hidup di ekosistem Microsoft 365.

## Solusi

SignPoint menghadirkan tanda tangan elektronik langsung di dalam SharePoint, plus AI yang meringkas dokumen dan menyoroti klausul berisiko sebelum Anda setuju.

## Fitur

- **Integrasi native (rencana)** — Aksi tanda tangan muncul di menu konteks SharePoint.
- **AI Document Review (demo)** — Ringkasan, deteksi klausul berisiko, dan tanya jawab dokumen.
- **Audit trail (demo)** — Setiap aktivitas tercatat pada metadata dokumen.
- **Demo alur kerja** — Simulasi end-to-end di `/demo` menggunakan data contoh.

Lihat status implementasi lengkap di [docs/roadmap.md](docs/roadmap.md).

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Phosphor Icons](https://phosphoricons.com)
- TypeScript

## Menjalankan Secara Lokal

Prasyarat: Node.js 20+.

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Scripts

| Script          | Keterangan                          |
| --------------- | ----------------------------------- |
| `npm run dev`   | Menjalankan server pengembangan     |
| `npm run build` | Membangun aplikasi untuk produksi   |
| `npm run start` | Menjalankan hasil build produksi    |
| `npm run lint`  | Menjalankan ESLint                  |

## Struktur Proyek

```
src/
├── app/                 # Rute App Router (/, /demo, /features, dll.)
├── components/
│   ├── layout/          # Navbar, Footer, PageHeader
│   └── sections/        # Section landing page yang dapat dipakai ulang
└── lib/
    ├── demo-data.ts     # Data contoh untuk demo
    └── utils.ts         # Utilitas (cn)
```

## Demo

- Lokal: [http://localhost:3000/demo](http://localhost:3000/demo)
- Publik: _TBD_

## Dibangun dengan Kiro

Proyek ini dikembangkan dengan bantuan Kiro sebagai lingkungan pengembangan berbasis AI. Kiro digunakan untuk:

- Mengaudit dan membersihkan klaim produk yang tidak dapat diverifikasi pada copy.
- Menyusun struktur landing page dan section pendukung.
- Membangun demo alur kerja statis di `/demo`.
- Menambahkan halaman pendukung, dokumentasi, dan roadmap.

## Roadmap

Ringkasan milestone (detail di [docs/roadmap.md](docs/roadmap.md)):

1. Demo MVP (selesai)
2. Private beta
3. Integrasi Microsoft 365
4. Backend AI review
5. Alur tanda tangan elektronik
6. Audit trail & kepatuhan
7. Dashboard admin

## Lisensi

Dirilis di bawah [MIT License](LICENSE).
