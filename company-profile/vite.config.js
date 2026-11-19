import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_');

  // VITE_SITE_URL = domain aktif (prioritas utama, diisi di .env / dashboard).
  // CF_PAGES_URL = fallback otomatis dari Cloudflare Pages bila VITE_SITE_URL dikosongkan.
  const site = (
    env.VITE_SITE_URL ||
    process.env.CF_PAGES_URL ||
    'https://company-profile.pages.dev/'
  ).replace(/\/+$/, '');

  const robots = `User-agent: *\nAllow: /\nSitemap: ${site}/sitemap.xml\n`;
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${site}/</loc><changefreq>monthly</changefreq><priority>1.0</priority></url>\n</urlset>\n`;

  return {
    build: { target: 'es2020', cssMinify: true },
    plugins: [{
      name: 'seo-files',
      transformIndexHtml(html) {
        return html.replace(/__SITE_URL__/g, `${site}/`);
      },
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/robots.txt' || req.url === '/sitemap.xml') {
            const xml = req.url === '/sitemap.xml';
            res.setHeader('Content-Type', xml ? 'application/xml' : 'text/plain; charset=utf-8');
            res.end(xml ? sitemap : robots);
            return;
          }
          next();
        });
      },
      generateBundle() {
        this.emitFile({ type: 'asset', fileName: 'robots.txt', source: robots });
        this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: sitemap });
      }
    }]
  };
});
