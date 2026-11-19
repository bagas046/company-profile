// Meta Pixel gratis. Tidak melakukan apa pun bila Pixel ID belum diisi,
// sehingga tidak ada error dan tidak ada permintaan jaringan tambahan.
export function initMetaPixel() {
  const id = import.meta.env.VITE_META_PIXEL_ID;
  if (!id || window.fbq) return;

  const fbq = (window.fbq = function () {
    if (fbq.callMethod) fbq.callMethod.apply(fbq, arguments);
    else fbq.queue.push(arguments);
  });
  if (!window._fbq) window._fbq = fbq;
  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = '2.0';
  fbq.queue = [];

  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://connect.facebook.net/en_US/fbevents.js';
  document.head.appendChild(script);

  fbq('init', id);
  fbq('track', 'PageView');
}
