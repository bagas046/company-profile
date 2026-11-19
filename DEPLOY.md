# Panduan Deploy Gratis

## Rekomendasi: Cloudflare Pages (Free)

Vercel Hobby **hanya untuk penggunaan pribadi/non-komersial** (ToS pasal 4), jadi tidak cocok untuk website CV perusahaan. Cloudflare Pages Free tidak membatasi penggunaan komersial dan tetap gratis.

### Langkah

1. Push perubahan ke GitHub.
2. Buka https://dash.cloudflare.com → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git** → pilih repo `CV PETRA`.
3. Pengaturan build:
   - **Project name**: `cv-gyhon-petra-mulia` (atau nama lain)
   - **Production branch**: `main`
   - **Root directory (advanced)**: `company-profile`
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node.js version**: `20`
4. Environment variables (Opsional → Environment variables):
   - `VITE_SITE_URL` = `https://<nama-project>.pages.dev/` → **wajib diganti** setelah tahu URL final
   - `VITE_CF_WEB_ANALYTICS_TOKEN` = token analytics (lihat bawah), boleh dikosongkan dulu
5. **Save and Deploy**. Setiap `git push` ke `main` akan otomatis deploy.

### Cara ganti domain tanpa edit kode

Semua URL SEO (canonical, `og:url`, JSON-LD, `robots.txt`, `sitemap.xml`) dibuat dari satu variabel `VITE_SITE_URL`. Cukup ubah env var di dashboard lalu **Redeploy** — tidak perlu menyentuh file lagi.

### Analytics gratis (tanpa cookie)

1. Di Cloudflare dashboard → **Web Analytics** → **Add a site** → masukkan domain `*.pages.dev` → **Add**.
2. Salin **token** yang muncul.
3. Tempel sebagai `VITE_CF_WEB_ANALYTICS_TOKEN` di Environment variables → Redeploy.
4. Jika token kosong, script analytics tidak dimuat sama sekali (tidak ada error, tetap gratis).

### Keamanan

Header `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`, dan `Permissions-Policy` sudah aktif otomatis lewat:
- `company-profile/public/_headers` → Cloudflare Pages / Netlify
- `vercel.json` → Vercel (cadangan)

HSTS sudah disediakan otomatis oleh Cloudflare/Vercel.

## Catatan

- Setelah website di Cloudflare terverifikasi, project Vercel lama boleh dihapus agar tidak membingungkan.
- Bila tetap ingin memakai Vercel untuk sementara, perhatikan risiko ketentuan komersial di atas.
- Format nomor WhatsApp sudah disimpan di `company-profile/src/js/company.js`.
