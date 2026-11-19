# Panduan Deploy Gratis — Cloudflare Pages

## Kenapa pindah dari Vercel

Vercel Hobby (gratis) hanya untuk penggunaan **pribadi/non-komersial** (ToS pasal 4), jadi tidak cocok untuk website CV perusahaan. Cloudflare Pages Free **gratis dan tidak membatasi penggunaan komersial**.

Kode sudah disiapkan agar langsung bekerja di Cloudflare Pages. Kode sudah ter-push ke GitHub (`bagas046/company-profile`, branch `main`).

## Langkah deploy (perlu akun Cloudflare kamu)

1. Buka https://dash.cloudflare.com → **Workers & Pages** → **Create** → **Pages** → **Connect to Git** → pilih repository **`company-profile`**.
2. Pengaturan build:
   - **Project name**: `cv-gyhon-petra-mulia` (atau nama lain yang tersedia)
   - **Production branch**: `main`
   - **Root directory** (klik *Advanced*): `company-profile`
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node.js version**: `20`
3. **Environment variables** — tidak wajib diisi:
   - `VITE_SITE_URL` → **kosongkan**. Cloudflare otomatis menyuntik `CF_PAGES_URL`, sehingga canonical/SEO mengikuti URL `*.pages.dev` apa pun nama project-nya.
   - `VITE_CF_WEB_ANALYTICS_TOKEN` → isi nanti bila sudah membuat Web Analytics.
4. Klik **Save and Deploy**. Setiap `git push` ke `main` akan otomatis deploy.

> Catatan: saya tidak bisa membuat project ini karena perlu login akun Cloudflare kamu. Langkah 1–4 di atas yang perlu kamu klik.

## URL otomatis (tanpa edit kode)

Semua URL SEO — canonical, `og:url`, JSON-LD, `robots.txt`, dan `sitemap.xml` — diambil dari `CF_PAGES_URL` saat build. Jadi:
- URL `*.pages.dev` otomatis benar.
- Deploy preview tiap branch juga dapat canonical yang sesuai.
- Kalau nanti pakai **custom domain**, baru isi `VITE_SITE_URL` di dashboard lalu **Redeploy**.

## Analytics gratis (tanpa cookie)

1. Cloudflare dashboard → **Web Analytics** → **Add a site** → masukkan domain `cv-gyhon-petra-mulia.pages.dev` → **Add**.
2. Salin **token** yang muncul.
3. Masukkan sebagai `VITE_CF_WEB_ANALYTICS_TOKEN` di Environment variables → **Redeploy**.
4. Kalau token kosong, script analytics **tidak dimuat sama sekali** — tidak ada error, tidak ada biaya.

## Keamanan

Header `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`, dan `Permissions-Policy` aktif otomatis lewat `company-profile/public/_headers`. HSTS disediakan otomatis oleh Cloudflare.

## Setelah live

1. Cek `https://<nama-project>.pages.dev/` — pastikan tampilan dan tombol WhatsApp berfungsi.
2. Cek `/robots.txt` dan `/sitemap.xml` — URL-nya harus `pages.dev`.
3. Boleh hapus project Vercel lama agar tidak membingungkan.
4. Kasih tahu saya URL finalnya supaya saya verifikasi Lighthouse dan konsol browser.
