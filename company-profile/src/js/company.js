// ============================================================
// SATU-SATUNYA FILE YANG PERLU DIEDIT untuk mengganti data perusahaan.
// Semua nilai [DALAM KURUNG] adalah placeholder.
// stats / testimonials / team dikosongkan: bagian tsb. otomatis tersembunyi
// sampai Anda mengisi data ASLI.
// ============================================================
export default {
  name: 'CV GYHON PETRA MULIA',
  tagline: 'Membangun Rumah dan Gedung dengan Perencanaan yang Matang',
  industry: 'Konstruksi Bangunan Rumah & Gedung',
  description: 'CV GYHON PETRA MULIA bergerak di bidang konstruksi bangunan rumah dan gedung. [TAMBAHKAN PROFIL SINGKAT PERUSAHAAN]',
  founded: '[TAHUN BERDIRI]',
  address: '[ALAMAT PERUSAHAAN]',
  email: '[EMAIL PERUSAHAAN]',
  phone: '[NOMOR TELEPON]',
  whatsapp: '[NOMOR WHATSAPP]', // isi format internasional tanpa +, mis. 6281234567890
  hours: '[JAM OPERASIONAL]',
  mapEmbedUrl: '', // URL "Embed a map" dari Google Maps (opsional)
  social: { instagram: '', linkedin: '', facebook: '' }, // isi URL lengkap; kosong = disembunyikan

  history: '[SEJARAH PERUSAHAAN]',
  vision: '[VISI PERUSAHAAN]',
  mission: ['[MISI 1]', '[MISI 2]', '[MISI 3]'],
  values: [
    { icon: 'shield', title: '[NILAI 1]', text: '[Penjelasan nilai perusahaan]' },
    { icon: 'handshake', title: '[NILAI 2]', text: '[Penjelasan nilai perusahaan]' },
    { icon: 'lightbulb', title: '[NILAI 3]', text: '[Penjelasan nilai perusahaan]' }
  ],
  advantages: [
    { icon: 'award', title: '[KEUNGGULAN 1]', text: '[Penjelasan keunggulan]' },
    { icon: 'zap', title: '[KEUNGGULAN 2]', text: '[Penjelasan keunggulan]' },
    { icon: 'users', title: '[KEUNGGULAN 3]', text: '[Penjelasan keunggulan]' }
  ],
  services: [
    { icon: 'house', title: 'Pembangunan Rumah', text: 'Pembangunan rumah tinggal sesuai kebutuhan dan anggaran pemilik. [SESUAIKAN DESKRIPSI]', benefit: '[Manfaat layanan]' },
    { icon: 'building-2', title: 'Pembangunan Gedung', text: 'Pembangunan gedung untuk kebutuhan usaha maupun fasilitas umum. [SESUAIKAN DESKRIPSI]', benefit: '[Manfaat layanan]' },
    { icon: 'hammer', title: 'Renovasi & Pengembangan', text: 'Renovasi dan penambahan bangunan yang sudah ada. [SESUAIKAN DESKRIPSI]', benefit: '[Manfaat layanan]' }
  ],
  // Alur kerja umum (draf). Sesuaikan dengan proses nyata perusahaan.
  process: [
    { title: 'Konsultasi', text: 'Diskusi kebutuhan, lokasi, dan anggaran.' },
    { title: 'Perencanaan', text: 'Penyusunan desain, gambar kerja, dan RAB.' },
    { title: 'Pelaksanaan', text: 'Pembangunan sesuai rencana dan jadwal.' },
    { title: 'Serah Terima', text: 'Pemeriksaan akhir dan penyerahan bangunan.' }
  ],
  // demo:true menampilkan label "Konten contoh". Hapus demo saat memakai proyek asli.
  projects: [
    { title: '[NAMA PROYEK 1]', category: '[Kategori A]', text: '[Deskripsi singkat proyek]', details: '[Detail proyek: klien, lingkup kerja, hasil]', demo: true },
    { title: '[NAMA PROYEK 2]', category: '[Kategori B]', text: '[Deskripsi singkat proyek]', details: '[Detail proyek: klien, lingkup kerja, hasil]', demo: true },
    { title: '[NAMA PROYEK 3]', category: '[Kategori A]', text: '[Deskripsi singkat proyek]', details: '[Detail proyek: klien, lingkup kerja, hasil]', demo: true }
  ],
  stats: [],         // contoh: [{ value: '120+', label: 'Proyek Selesai' }]
  testimonials: [],  // contoh: [{ quote: '...', name: '...', role: '...' }]
  team: []           // contoh: [{ name: '...', role: '...' }]
};
