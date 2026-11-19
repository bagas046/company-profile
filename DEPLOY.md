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

### Meta Pixel (iklan Facebook & Instagram)

Meta Pixel gratis dan sudah disiapkan di kode. Cara mengaktifkan:

1. Buka **https://business.facebook.com** → buat akun Meta Business (gratis) → lengkapi data bisnis.
2. Buka **Events Manager** → **Pixels** → **Create a Pixel** → beri nama `CV Gyhon Petra Mulia` → salin **Pixel ID** (angka).
3. Di Vercel: **Project → Settings → Environment Variables** → tambahkan `VITE_META_PIXEL_ID` = angka Pixel ID → **Redeploy**.
4. Pixel aktif. Cek di Events Manager → **Test Events** saat membuka website; harus muncul event `PageView`.

Kalau `VITE_META_PIXEL_ID` kosong, kode Pixel **tidak dimuat sama sekali** — tidak ada error dan tidak ada biaya. Jadi aman dipasang sebelum akun Meta dibuat.

### Keamanan

Header `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`, dan `Permissions-Policy` aktif lewat `company-profile/vercel.json` (file yang dibaca Vercel karena Root directory = `company-profile`). HSTS disediakan otomatis oleh Vercel.

## Catatan ketentuan Vercel Hobby

Paket gratis Vercel Hobby ditujukan untuk penggunaan **pribadi/non-komersial** (ToS pasal 4). Karena ini website CV perusahaan, ada risiko ketentuan dan Vercel berhak mematikan proyek tanpa pemberitahuan. Situs tetap bisa dipakai selama tidak ada masalah; ini hanya catatan risiko, bukan gangguan teknis.

## SEO & visibilitas (gratis)

Yang sudah aktif di website:
- `robots.txt` mengizinkan semua crawler dan mencantumkan sitemap.
- `sitemap.xml` berisi URL canonical.
- Canonical, Open Graph (termasuk gambar 1200×630), Twitter Card, dan JSON-LD (`WebSite`, `GeneralContractor`, `ItemList` layanan) otomatis mengikuti `VITE_SITE_URL`.
- Lighthouse SEO 100/100/100.

Yang perlu kamu lakukan (di luar kode, semua gratis):

1. **Google Search Console** — https://search.google.com/search-console → tambahkan domain `company-profile-cv-gyhon-petra-mulia.vercel.app` (metode DNS atau HTML tag) → submit sitemap: `https://company-profile-cv-gyhon-petra-mulia.vercel.app/sitemap.xml`.
2. **Google Business Profile** — https://business.google.com → daftarkan CV GYHON PETRA MULIA dengan alamat dan nomor yang sama seperti di website. Ini yang paling berpengaruh untuk pencarian lokal seperti "kontraktor Kartasura".
3. **Bing Webmaster Tools** — https://www.bing.com/webmasters → import dari Google Search Console, gratis.
4. **Meta Business** — pasang Pixel seperti di atas, lalu buat kampanye iklan dengan URL website ini. Preview link akan memakai `og-image.png`.

Gambar preview bersumber dari `company-profile/og-card.html`. Kalau ingin mengubah teks/warna, edit file itu lalu render ulang ke `public/og-image.png` (1200×630, PNG, maksimal ~1 MB).

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
