# CV GYHON PETRA MULIA — Company Profile

Website company profile satu halaman untuk kontraktor bangunan rumah dan gedung di Kartasura, Sukoharjo dan sekitarnya.

**Live:** https://company-profile-cv-gyhon-petra-mulia.vercel.app/

## Tentang

- Satu halaman dengan anchor: `#about`, `#services`, `#portfolio`, `#contact`.
- Kontak utama lewat WhatsApp: **0852 1881 0617** (`wa.me/6285218810617`).
- Data yang belum tersedia (email, jam operasional, peta, media sosial, foto proyek) sengaja **disembunyikan otomatis** — tidak ada placeholder.
- Dibuat sepenuhnya dengan tools dan hosting **gratis**, tanpa biaya bulanan.

## Teknologi

HTML5, CSS3, JavaScript ES6+, Vite, Lucide Icons, Google Fonts. Semuanya gratis dan open source.

## Jalankan lokal

```bash
cd company-profile
npm install
npm run dev
```

Buka `http://localhost:5173`. Untuk build produksi: `npm run build` (hasil di `company-profile/dist`).

## Mengubah data perusahaan

Semua data ada di [`company-profile/src/js/company.js`](company-profile/src/js/company.js). Nomor WhatsApp memakai format `6285218810617` (tanpa `+` dan spasi).

URL SEO (canonical, `og:url`, JSON-LD, `robots.txt`, `sitemap.xml`) dikontrol oleh `VITE_SITE_URL` di `company-profile/.env`.

## Deploy

Lihat **[DEPLOY.md](DEPLOY.md)** untuk panduan lengkap.

Host aktif saat ini: **Vercel** (Root directory: `company-profile`, build: `npm run build`, output: `dist`). Setiap push ke `main` otomatis deploy. Cloudflare Pages tercantum sebagai opsi cadangan yang lebih sesuai untuk penggunaan komersial.

## Catatan

Repositori ini public dan bebas dilihat. Silakan buat issue atau pull request bila menemukan perbaikan.
