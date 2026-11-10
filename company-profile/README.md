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

## Deploy gratis di Vercel
1. Login ke vercel.com dengan akun GitHub.
2. **Add New → Project** → pilih repo ini → Import.
3. Framework terdeteksi **Vite** (Build: `npm run build`, Output: `dist`) → **Deploy**.
4. Setiap `git push` ke `main` akan otomatis re-deploy. URL HTTPS: `https://nama-proyek.vercel.app`.

> **Penting:** paket Vercel Hobby (gratis) diperuntukkan penggunaan pribadi/non-komersial. Untuk website perusahaan, baca ketentuan terbaru Vercel atau gunakan alternatif gratis yang mengizinkan penggunaan komersial seperti Cloudflare Pages, Netlify, atau GitHub Pages (atur `base` di `vite.config.js` bila memakai sub-path).

## Yang perlu diganti
- `src/js/company.js`: semua placeholder `[...]`, nomor WhatsApp (format `628xxxx`), `mapEmbedUrl`, social media, stats/testimoni/tim (isi hanya data asli).
- `index.html`: `<title>`, meta description, dan Open Graph (ikut diperbarui otomatis oleh JS, tetapi isi statis ini yang dibaca crawler).
- `public/robots.txt` dan `public/sitemap.xml`: ganti `GANTI-DOMAIN-ANDA.vercel.app`.
- `public/favicon.svg` dan huruf "N" pada logo di `index.html`.
- Tambahkan gambar asli (WebP/AVIF, `loading="lazy"`) ke `public/images/` bila diperlukan.
