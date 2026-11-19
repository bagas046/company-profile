// Analytics gratis dan tanpa cookie. Tidak melakukan apa pun bila token kosong,
// jadi website tetap bisa dipakai sebelum akun Cloudflare dibuat.
export function initAnalytics() {
  const token = import.meta.env.VITE_CF_WEB_ANALYTICS_TOKEN;
  if (!token) return;
  const s = document.createElement('script');
  s.defer = true;
  s.src = 'https://static.cloudflareinsights.com/beacon.min.js';
  s.dataset.cfBeacon = JSON.stringify({ token });
  document.head.appendChild(s);
}
