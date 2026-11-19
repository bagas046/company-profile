# Panduan Deploy Gratis

## Host aktif: Vercel

Website saat ini di-deploy di Vercel:
`https://company-profile-cv-gyhon-petra-mulia.vercel.app/`

Setiap `git push` ke `main` otomatis deploy. Konfigurasi build diambil dari pengaturan project Vercel (Root directory `company-profile`, framework Vite, output `dist`).

### URL / SEO

Semua URL SEO (canonical, `og:url`, JSON-LD, `robots.txt`, `sitemap.xml`) dikontrol oleh satu variabel `VITE_SITE_URL` di `company-profile/.env`. Nilainya sudah diisi dengan URL Vercel di atas.

Kalau domain berubah (misal custom domain), cukup ubah `VITE_SITE_URL` lalu deploy ulang — semua file SEO ikut berubah.

### Analytics gratis (opsional)

Cloudflare Web Analytics gratis, tanpa cookie, dan bisa dipakai di domain mana pun (termasuk Vercel):

1. Cloudflare dashboard → **Web Analytics** → **Add a site** → masukkan domain Vercel → **Add**.
2. Salin token yang muncul.
3. Isi `VITE_CF_WEB_ANALYTICS_TOKEN` di Environment Variables Vercel → Redeploy.
4. Kalau token kosong, script tidak dimuat sama sekali — tidak ada error, tidak ada biaya.

### Keamanan

Header `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`, dan `Permissions-Policy` aktif lewat `company-profile/vercel.json` (file yang dibaca Vercel karena Root directory = `company-profile`). HSTS disediakan otomatis oleh Vercel.

## Catatan ketentuan Vercel Hobby

Paket gratis Vercel Hobby ditujukan untuk penggunaan **pribadi/non-komersial** (ToS pasal 4). Karena ini website CV perusahaan, ada risiko ketentuan dan Vercel berhak mematikan proyek tanpa pemberitahuan. Situs tetap bisa dipakai selama tidak ada masalah; ini hanya catatan risiko, bukan gangguan teknis.

## Opsi cadangan: Cloudflare Pages (Free)

Cloudflare Pages Free juga gratis dan tidak melarang penggunaan komersial. Kalau suatu hari mau pindah:

1. Dash Cloudflare → **Workers & Pages** → **Create** → **Pages** → **Connect to Git** → pilih repo `company-profile`.
2. Pengaturan:
   - **Project name**: `cv-gyhon-petra-mulia`
   - **Production branch**: `main`
   - **Root directory** *(Advanced)*: `company-profile`
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node.js version**: `20`
3. **Kosongkan `VITE_SITE_URL`** di Environment Variables — Cloudflare otomatis memakai `CF_PAGES_URL`, sehingga canonical mengikuti URL `*.pages.dev`.
4. **Save and Deploy**.

Header keamanan sudah tersedia juga untuk Cloudflare lewat `company-profile/public/_headers`.
