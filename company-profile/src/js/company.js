// ============================================================
// SATU-SATUNYA FILE YANG PERLU DIEDIT untuk mengganti data perusahaan.
// Field yang dikosongkan akan otomatis disembunyikan oleh main.js,
// jadi tidak ada teks placeholder yang tampil di website.
// ============================================================
export default {
  name: 'CV GYHON PETRA MULIA',
  tagline: 'Membangun Rumah dan Gedung dengan Perencanaan yang Matang',
  industry: 'Konstruksi Bangunan Rumah & Gedung',
  description: 'CV GYHON PETRA MULIA bergerak di bidang konstruksi bangunan rumah dan gedung di Kartasura, Sukoharjo dan sekitarnya.',
  founded: '', // kosong = baris "Berdiri sejak" disembunyikan

  address: 'Mondorakan 05/05, Wirogunan, Kartasura, Sukoharjo 57166',
  email: '', // kosong = tidak ditampilkan
  phone: '0852 1881 0617',
  whatsapp: '6285218810617', // 0852 1881 0617 dalam format internasional tanpa +
  hours: '', // kosong = tidak ditampilkan
  mapEmbedUrl: '', // isi URL "Embed a map" Google Maps bila tersedia
  social: { instagram: '', linkedin: '', facebook: '' },

  history: 'CV GYHON PETRA MULIA melayani kebutuhan pembangunan rumah dan gedung di Kartasura, Sukoharjo dan sekitarnya. Setiap pekerjaan dimulai dari perencanaan yang matang agar hasil sesuai dengan kebutuhan pemilik.',
  vision: '',
  mission: [],
  values: [],
  advantages: [],

  services: [
    { icon: 'house', title: 'Pembangunan Rumah', text: 'Pembangunan rumah tinggal sesuai kebutuhan dan anggaran pemilik.', benefit: '' },
    { icon: 'building-2', title: 'Pembangunan Gedung', text: 'Pembangunan gedung untuk kebutuhan usaha maupun fasilitas umum.', benefit: '' },
    { icon: 'hammer', title: 'Renovasi & Pengembangan', text: 'Renovasi dan penambahan bangunan yang sudah ada.', benefit: '' }
  ],
  process: [
    { title: 'Konsultasi', text: 'Diskusi kebutuhan, lokasi, dan anggaran.' },
    { title: 'Perencanaan', text: 'Penyusunan desain, gambar kerja, dan RAB.' },
    { title: 'Pelaksanaan', text: 'Pembangunan sesuai rencana dan jadwal.' },
    { title: 'Serah Terima', text: 'Pemeriksaan akhir dan penyerahan bangunan.' }
  ],

  // Kosong = section portofolio dan menu "Proyek" otomatis disembunyikan.
  projects: [],
  stats: [],
  testimonials: [],
  team: []
};
