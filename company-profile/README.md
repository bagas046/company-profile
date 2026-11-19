# Company Profile (Vite)

Website company profile satu halaman (anchor: `#about`, `#services`, `#portfolio`, `#contact`). Seluruh data perusahaan ada di **`src/js/company.js`**.

## Teknologi
HTML5, CSS3, JavaScript ES6+, Vite, Lucide Icons (paket `lucide`), Google Fonts (Inter, Plus Jakarta Sans). Semuanya gratis.

## Instalasi & menjalankan lokal
```bash
npm install
npm run dev        # http://localhost:5173
```

## Build production
```bash
npm run build      # hasil di folder dist/
npm run preview    # uji hasil build
```

## Upload ke GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/NAMA-REPO.git
git push -u origin main
```

## Deploy

Lihat panduan lengkap di **[DEPLOY.md](../DEPLOY.md)** di root repository.

**Host aktif: Vercel** (`company-profile-cv-gyhon-petra-mulia.vercel.app`). Setiap `git push` ke `main` otomatis deploy. Root directory di dashboard: `company-profile`; build: `npm run build`; output: `dist`.

Catatan: paket Vercel Hobby hanya untuk penggunaan pribadi/non-komersial (ToS pasal 4), jadi ada risiko ketentuan untuk website perusahaan. Opsi gratis alternatif yang mengizinkan komersial: Cloudflare Pages — caranya ada di `DEPLOY.md`.

URL SEO dikontrol oleh `VITE_SITE_URL` di `.env`. Sudah diisi dengan URL Vercel; kosongkan hanya kalau pindah ke Cloudflare Pages (akan memakai `CF_PAGES_URL` otomatis).

## Data perusahaan

Semua data ada di `src/js/company.js`. Data yang belum tersedia (email, jam operasional, maps, sosmed, foto proyek) sengaja **disembunyikan otomatis** — jangan diisi placeholder.

Nomor WhatsApp memakai nomor yang sama dengan telepon: `0852 1881 0617` → format `6285218810617` di `company.js`.

## Catatan URL & SEO

Jangan edit manual `robots.txt` / `sitemap.xml` di `public/` — keduanya sudah dihapus dan di-generate otomatis oleh `vite.config.js` saat build, mengikuti `CF_PAGES_URL` (atau `VITE_SITE_URL` bila diisi untuk custom domain).

Header keamanan ada di `public/_headers`.
