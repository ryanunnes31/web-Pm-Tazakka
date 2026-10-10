// Data berita simulasi.
// Untuk foto asli: taruh file di public/ lalu isi gambar, contoh: "/berita1.jpg"
// Jika gambar null, kartu menampilkan placeholder gradasi + emoji.

export const beritaList = [
  {
    id: "penerimaan-santri-baru",
    judul: "Pendaftaran Santri Baru Tahun Ajaran 2026/2027 Resmi Dibuka",
    tanggal: "10 Oktober 2026",
    kategori: "Pendaftaran",
    emoji: "📝",
    warna: "from-green-700 to-emerald-900",
    gambar: "/berita1.jpg",
    ringkasan:
      "Pondok Modern Tazakka membuka pendaftaran santri baru gelombang pertama untuk jenjang SMP dan SMA bagi calon santri dari seluruh Indonesia.",
    isi: [
      "Pondok Modern Tazakka resmi membuka pendaftaran santri baru untuk tahun ajaran 2026/2027. Pendaftaran gelombang pertama dibuka untuk calon santri jenjang SMP dan SMA dari berbagai daerah di Indonesia.",
      "Calon santri akan mengikuti rangkaian seleksi yang meliputi tes tulis, tes lisan, serta wawancara bersama calon wali santri. Seleksi bertujuan mengenali kesiapan akademik sekaligus kesiapan calon santri menjalani kehidupan berasrama.",
      "Panitia mengimbau para orang tua untuk menyiapkan berkas administrasi sejak awal agar proses pendaftaran berjalan lancar. Informasi lengkap mengenai persyaratan, biaya, dan jadwal seleksi dapat diperoleh melalui panitia penerimaan santri baru.",
    ],
  },
  {
    id: "khutbatul-arsy-santri-baru",
    judul: "Khutbatul ‘Arsy: Menyambut Santri Baru dengan Semangat Kebersamaan",
    tanggal: "28 September 2026",
    kategori: "Kegiatan",
    emoji: "🕌",
    warna: "from-amber-500 to-orange-600",
    gambar: "/berita2.jpg",
    ringkasan:
      "Ratusan santri baru mengikuti acara penyambutan yang menanamkan nilai keikhlasan, kedisiplinan, dan semangat menuntut ilmu.",
    isi: [
      "Seluruh santri baru Pondok Modern Tazakka mengikuti acara Khutbatul ‘Arsy sebagai penanda dimulainya kehidupan di pondok. Acara berlangsung khidmat di aula utama dengan dihadiri para guru dan pengurus.",
      "Dalam arahannya, pimpinan pondok menekankan bahwa pondok bukan sekadar tempat belajar, melainkan tempat menempa karakter. Santri diajak memahami bahwa setiap kegiatan, dari bangun tidur hingga tidur kembali, adalah bagian dari pendidikan.",
      "Usai acara, santri baru diperkenalkan dengan lingkungan pondok, asrama, serta tata tertib yang berlaku agar cepat beradaptasi.",
    ],
  },
  {
    id: "juara-lomba-pidato-tiga-bahasa",
    judul: "Santri Tazakka Raih Juara Lomba Pidato Tiga Bahasa",
    tanggal: "14 September 2026",
    kategori: "Prestasi",
    emoji: "🏆",
    warna: "from-yellow-500 to-amber-700",
    gambar: "/berita3.jpg",
    ringkasan:
      "Santri Tazakka membawa pulang piala juara dalam lomba pidato bahasa Indonesia, Arab, dan Inggris tingkat regional.",
    isi: [
      "Prestasi membanggakan kembali diraih santri Pondok Modern Tazakka. Dalam lomba pidato tiga bahasa tingkat regional, perwakilan Tazakka berhasil meraih juara dan menyisihkan puluhan peserta dari berbagai sekolah.",
      "Keberhasilan ini tidak lepas dari pembiasaan berbahasa Arab dan Inggris yang diterapkan setiap hari di lingkungan pondok, serta latihan muhadharah (latihan pidato) yang rutin diadakan.",
      "Pihak pondok berharap capaian ini memotivasi santri lain untuk terus berlatih dan berani tampil di depan umum.",
    ],
  },
  {
    id: "pentas-seni-panggung-gembira",
    judul: "Panggung Gembira: Malam Seni dan Kreativitas Santri",
    tanggal: "30 Agustus 2026",
    kategori: "Seni & Budaya",
    emoji: "🎭",
    warna: "from-emerald-600 to-teal-800",
    gambar: "/berita4.jpg",
    ringkasan:
      "Drama, nasyid, dan pertunjukan tiga bahasa memeriahkan malam pentas seni tahunan yang dikelola langsung oleh para santri.",
    isi: [
      "Pentas seni tahunan Panggung Gembira kembali digelar dan disambut antusias oleh seluruh warga pondok. Mulai dari drama berbahasa Arab, nasyid, hingga pertunjukan musik menjadi sajian malam itu.",
      "Seluruh rangkaian acara dipersiapkan dan dijalankan oleh santri sendiri, mulai dari naskah, tata panggung, hingga pembawa acara. Hal ini sejalan dengan semangat berdikari yang menjadi salah satu nilai utama pondok.",
      "Para guru menilai kegiatan ini menjadi ruang belajar yang baik untuk melatih kepemimpinan, kerja sama tim, dan percaya diri.",
    ],
  },
  {
    id: "kemah-pramuka-akbar",
    judul: "Kemah Pramuka Akbar Latih Kemandirian dan Kepemimpinan",
    tanggal: "12 Agustus 2026",
    kategori: "Kepramukaan",
    emoji: "⛺",
    warna: "from-lime-600 to-green-800",
    gambar: "/berita5.jpg",
    ringkasan:
      "Santri mengikuti kemah tiga hari dengan beragam lomba keterampilan, penjelajahan, dan api unggun di area pondok.",
    isi: [
      "Gerakan Pramuka Tazakka menyelenggarakan kemah akbar selama tiga hari yang diikuti seluruh regu dari berbagai kelas. Kegiatan diisi dengan lomba tali-temali, pionering, penjelajahan, dan keterampilan hidup di alam terbuka.",
      "Selain menguji keterampilan, kemah ini menjadi sarana menumbuhkan kemandirian, disiplin, dan kepemimpinan. Santri belajar mengatur diri, berbagi tugas, dan menyelesaikan masalah bersama regunya.",
      "Acara ditutup dengan api unggun dan penyerahan penghargaan untuk regu terbaik.",
    ],
  },
  {
    id: "turnamen-futsal-antar-asrama",
    judul: "Turnamen Futsal Antar Asrama Berlangsung Meriah dan Sportif",
    tanggal: "25 Juli 2026",
    kategori: "Olahraga",
    emoji: "⚽",
    warna: "from-sky-600 to-blue-800",
    gambar: "/berita6.jpg",
    ringkasan:
      "Puluhan tim dari seluruh asrama bertanding di turnamen futsal tahunan yang mengedepankan sportivitas dan ukhuwah.",
    isi: [
      "Turnamen futsal antar asrama digelar selama sepekan penuh dan menjadi hiburan yang dinantikan santri. Setiap asrama mengirimkan tim terbaiknya, sementara santri lain memberi dukungan dari tepi lapangan.",
      "Pertandingan berjalan seru namun tetap sportif. Panitia menegaskan bahwa kemenangan bukan tujuan utama, melainkan mempererat ukhuwah Islamiyah dan melatih kerja sama tim.",
      "Final mempertemukan dua asrama dengan skor tipis, dan ditutup dengan salam serta foto bersama seluruh peserta.",
    ],
  },
];

export function getBeritaById(id) {
  return beritaList.find((b) => b.id === id);
}