import '../css/style.css';
import C from './company.js';
import { esc, refreshIcons, waNumber } from './utils.js';
import { initNav } from './navigation.js';
import { initPortfolio } from './portfolio.js';
import { initContact } from './contact.js';

const put = (id, html) => { document.getElementById(id).innerHTML = html; };
const ic = (n) => `<i data-lucide="${n}" aria-hidden="true"></i>`;
const card = (i, t, x) => `<article class="card reveal"><span class="ico">${ic(i)}</span><h3>${esc(t)}</h3><p>${esc(x)}</p></article>`;
const hide = (id, empty) => { if (empty) document.getElementById(id).hidden = true; };

document.title = `${C.name} | ${C.tagline}`;
document.querySelector('meta[name=description]').content = C.description;
document.querySelector('meta[property="og:title"]').content = document.title;
document.querySelector('meta[property="og:description"]').content = C.description;
document.querySelectorAll('[data-c]').forEach((n) => {
  const v = C[n.dataset.c];
  n.textContent = v == null ? '' : v;
  if (v === '') n.hidden = true;
});

// Sembunyikan bagian yang datanya belum tersedia.
hide('founded-note', !C.founded);
hide('vision-card', !C.vision);
hide('mission-card', !C.mission.length);
hide('values-block', !C.values.length);
hide('advantages-block', !C.advantages.length);

put('services-list', C.services.map((s) => `<article class="card reveal"><span class="ico">${ic(s.icon)}</span><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p>${s.benefit ? `<p class="benefit">${ic('check')}<span>${esc(s.benefit)}</span></p>` : ''}<a class="btn ghost btn-sm" href="#contact" data-subject="Tanya layanan: ${esc(s.title)}">Hubungi kami</a></article>`).join(''));
if (C.mission.length) put('mission-list', C.mission.map((m) => `<li>${ic('check')}<span>${esc(m)}</span></li>`).join(''));
if (C.values.length) put('values-list', C.values.map((v) => card(v.icon, v.title, v.text)).join(''));
if (C.advantages.length) put('adv-list', C.advantages.map((v) => card(v.icon, v.title, v.text)).join(''));

put('process-list', C.process.map((p, i) => `<li class="reveal"><span class="num">${i + 1}</span><h3>${esc(p.title)}</h3><p>${esc(p.text)}</p></li>`).join(''));
const show = (id, arr, html) => { if (arr.length) { document.getElementById(id).hidden = false; put(id + '-list', html); } };
show('stats', C.stats, C.stats.map((s) => `<div class="stat reveal"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join(''));
show('testi', C.testimonials, C.testimonials.map((t) => `<figure class="card reveal"><blockquote>${esc(t.quote)}</blockquote><figcaption><strong>${esc(t.name)}</strong> · ${esc(t.role)}</figcaption></figure>`).join(''));
show('team', C.team, C.team.map((t) => `<div class="card reveal"><h3>${esc(t.name)}</h3><p>${esc(t.role)}</p></div>`).join(''));

if (C.projects.length) initPortfolio(); else document.getElementById('portfolio').hidden = true;

const wa = waNumber(C.whatsapp);
put('contact-info', [
  ['map-pin', 'Alamat', C.address ? esc(C.address) : ''],
  ['mail', 'Email', C.email ? `<a href="mailto:${esc(C.email)}">${esc(C.email)}</a>` : ''],
  ['phone', 'Telepon', C.phone ? `<a href="tel:${esc(C.phone.replace(/[^\d+]/g, ''))}">${esc(C.phone)}</a>` : ''],
  ['message-circle', 'WhatsApp', wa.length >= 8 ? `<a href="https://wa.me/${wa}" target="_blank" rel="noopener noreferrer">${esc(C.whatsapp)}</a>` : ''],
  ['clock', 'Jam operasional', C.hours ? esc(C.hours) : '']
].filter(([, , v]) => v).map(([i, l, v]) => `<li>${ic(i)}<div><strong>${l}</strong><br>${v}</div></li>`).join(''));
if (C.mapEmbedUrl) put('map', `<iframe src="${esc(C.mapEmbedUrl)}" title="Lokasi ${esc(C.name)}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
else document.getElementById('map').hidden = true;

const soc = { instagram: 'Instagram', linkedin: 'LinkedIn', facebook: 'Facebook' };
put('social', Object.entries(soc).filter(([k]) => C.social[k]).map(([k, l]) => `<a href="${esc(C.social[k])}" target="_blank" rel="noopener noreferrer" aria-label="${l}">${ic(k)}</a>`).join(''));
document.getElementById('year').textContent = new Date().getFullYear();

const io = new IntersectionObserver((es, o) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); o.unobserve(e.target); } }), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((n) => io.observe(n));

// Buang tautan menu/footer yang menuju section yang disembunyikan.
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  const target = document.querySelector(a.getAttribute('href'));
  if (target && target.hidden) (a.closest('li') || a).remove();
});

initNav();
initContact();
refreshIcons();
