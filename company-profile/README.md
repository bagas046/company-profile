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

## Deploy gratis di Cloudflare Pages

Lihat panduan lengkap di **[DEPLOY.md](../DEPLOY.md)** di root repository.

Ringkasnya:
- **Root directory**: `company-profile`
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Node.js version**: `20`
- **Environment variables**: boleh kosong. URL SEO otomatis memakai `CF_PAGES_URL` dari Cloudflare.

Setiap `git push` ke `main` otomatis deploy. Cloudflare Pages Free mengizinkan penggunaan komersial; Vercel Hobby tidak (ToS pasal 4).

## Data perusahaan

Semua data ada di `src/js/company.js`. Data yang belum tersedia (email, jam operasional, maps, sosmed, foto proyek) sengaja **disembunyikan otomatis** — jangan diisi placeholder.

Nomor WhatsApp memakai nomor yang sama dengan telepon: `0852 1881 0617` → format `6285218810617` di `company.js`.

## Catatan URL & SEO

Jangan edit manual `robots.txt` / `sitemap.xml` di `public/` — keduanya sudah dihapus dan di-generate otomatis oleh `vite.config.js` saat build, mengikuti `CF_PAGES_URL` (atau `VITE_SITE_URL` bila diisi untuk custom domain).

Header keamanan ada di `public/_headers`.
