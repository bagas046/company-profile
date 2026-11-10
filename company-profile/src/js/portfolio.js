import C from './company.js';
import { esc, refreshIcons } from './utils.js';
export function initPortfolio() {
  const list = document.getElementById('projects'), bar = document.getElementById('filters'), dlg = document.getElementById('modal');
  const cats = ['Semua', ...new Set(C.projects.map((p) => p.category))];
  bar.innerHTML = cats.map((c, i) => `<button type="button" class="chip${i ? '' : ' on'}" data-cat="${esc(c)}" aria-pressed="${!i}">${esc(c)}</button>`).join('');
  const draw = (cat) => {
    list.innerHTML = C.projects.map((p, i) => [p, i]).filter(([p]) => cat === 'Semua' || p.category === cat).map(([p, i]) =>
      `<article class="card"><div class="thumb"><span>${esc(p.category)}</span></div><h3>${esc(p.title)}</h3><p>${esc(p.text)}</p><button class="btn ghost btn-sm" type="button" data-i="${i}">Lihat detail <i data-lucide="arrow-right" aria-hidden="true"></i></button></article>`).join('');
    refreshIcons();
  };
  bar.addEventListener('click', (e) => {
    const b = e.target.closest('.chip'); if (!b) return;
    bar.querySelectorAll('.chip').forEach((x) => { x.classList.toggle('on', x === b); x.setAttribute('aria-pressed', x === b); });
    draw(b.dataset.cat);
  });
  list.addEventListener('click', (e) => {
    const b = e.target.closest('[data-i]'); if (!b) return;
    const p = C.projects[b.dataset.i];
    dlg.querySelector('.m-body').innerHTML = `<p class="eyebrow">${esc(p.category)}</p><h3>${esc(p.title)}</h3><p>${esc(p.details)}</p>${p.demo ? '<p class="note">Konten contoh untuk pengujian desain, bukan proyek nyata.</p>' : ''}`;
    dlg.showModal();
  });
  dlg.addEventListener('click', (e) => { if (e.target === dlg || e.target.closest('[data-close]')) dlg.close(); });
  draw('Semua');
}
