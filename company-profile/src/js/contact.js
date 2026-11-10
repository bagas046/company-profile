import C from './company.js';
import { waNumber } from './utils.js';
export function initContact() {
  const f = document.getElementById('form'), st = document.getElementById('form-status'), el = (n) => f.elements[n];
  document.addEventListener('click', (e) => { const a = e.target.closest('[data-subject]'); if (a) el('subject').value = a.dataset.subject; });
  const rules = {
    name: (v) => v.trim().length >= 2 || 'Nama minimal 2 karakter.',
    email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) || 'Format email tidak valid.',
    subject: (v) => v.trim().length >= 3 || 'Subjek minimal 3 karakter.',
    message: (v) => v.trim().length >= 10 || 'Pesan minimal 10 karakter.'
  };
  const check = (n) => { const r = rules[n](el(n).value); document.getElementById('e-' + n).textContent = r === true ? '' : r; el(n).setAttribute('aria-invalid', r !== true); return r === true; };
  Object.keys(rules).forEach((n) => el(n).addEventListener('blur', () => check(n)));
  f.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!Object.keys(rules).map(check).every(Boolean)) return;
    const num = waNumber(C.whatsapp);
    if (num.length < 8) { st.textContent = 'Nomor WhatsApp perusahaan belum diisi di src/js/company.js.'; st.className = 'status bad'; return; }
    const text = `Halo ${C.name}, saya ${el('name').value.trim()}.\nEmail: ${el('email').value.trim()}\nSubjek: ${el('subject').value.trim()}\n\n${el('message').value.trim()}`;
    window.open(`https://wa.me/${num}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
    st.textContent = 'Membuka WhatsApp. Tekan tombol kirim di WhatsApp untuk menyelesaikan.'; st.className = 'status ok'; f.reset();
  });
}
