import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";

export const metadata = {
  title: "About",
  description: "Profil, sejarah, visi, misi, dan alamat Pondok Modern Tazakka.",
};

const misi = [
  "Menyelenggarakan pendidikan yang memadukan ilmu agama dan ilmu umum secara seimbang.",
  "Menanamkan nilai Panca Jiwa dalam seluruh aspek kehidupan santri.",
  "Membiasakan santri berbahasa Arab dan Inggris dalam komunikasi sehari-hari.",
  "Membentuk karakter mandiri, disiplin, dan berjiwa kepemimpinan melalui kegiatan asrama dan organisasi.",
  "Menyiapkan lulusan yang siap melanjutkan pendidikan dan berkontribusi bagi masyarakat.",
];

const pancaJiwa = [
  { nama: "Keikhlasan", teks: "Beramal semata-mata karena Allah, tanpa pamrih." },
  { nama: "Kesederhanaan", teks: "Hidup bersahaja, tetapi penuh kekuatan jiwa." },
  { nama: "Berdikari", teks: "Mandiri dan percaya pada kemampuan diri sendiri." },
  { nama: "Ukhuwah Islamiyah", teks: "Persaudaraan yang erat antar sesama." },
  { nama: "Kebebasan", teks: "Bebas berpikir dan berbuat dalam koridor nilai yang benar." },
];

const fasilitas = [
 { foto: "/fasilitas/masjid.jpg", nama: "Masjid" },
  { foto: "/fasilitas/asrama.jpg", nama: "Asrama Santri" },
  { foto: "/fasilitas/perpustakaan.jpg", nama: "Perpustakaan" },
  { foto: "/fasilitas/kelas.jpg", nama: "Ruang Kelas" },
  { foto: "/fasilitas/lapangan.jpg", nama: "Lapangan Olahraga" },
  { foto: "/fasilitas/dapur.jpg", nama: "Dapur Umum" },
];

const ekstrakurikuler = [
  "Pramuka",
  "Muhadharah (Latihan Pidato)",
  "Seni & Nasyid",
  "Olahraga",
  "Jurnalistik",
  "Tahfidz Al-Qur’an",
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-green-950 via-green-900 to-green-700 py-16 text-white">
        <div className="pola-bintang absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5">
          <h1 className="font-judul text-4xl font-extrabold sm:text-5xl">
            Tentang Pondok Modern Tazakka
          </h1>
          <div className="garis-emas mt-4" />
          <p className="mt-4 max-w-2xl text-lg text-green-50/90">
            Mengenal profil, sejarah, visi, dan misi lembaga pendidikan kami.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-20 px-5 py-16">
        {/* Profil */}
        <section className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <SectionTitle judul="Profil Sekolah" />
            <p className="mt-5 leading-relaxed text-slate-700">
              Pondok Modern Tazakka adalah lembaga pendidikan Islam yang
              berlokasi di Desa Sidayu, Kecamatan Bandar, Kabupaten Batang,
              Jawa Tengah, di atas lahan seluas sekitar 9,8 hektar. Lembaga ini
              dikelola oleh Yayasan Tazakka Batang dan menerapkan sistem
              pendidikan pondok modern yang berasrama.
            </p>
            <p className="mt-4 leading-relaxed text-slate-700">
              Di Tazakka, santri tidak hanya belajar di kelas. Seluruh
              kehidupan di pondok, mulai dari ibadah, asrama, organisasi,
              hingga olahraga, dirancang sebagai bagian dari proses pendidikan
              yang membentuk karakter.
            </p>
          </div>

          <aside className="rounded-2xl border border-amber-300 bg-amber-50 p-6">
            <h3 className="font-judul text-xl font-bold text-green-950">
              Data Singkat
            </h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="font-semibold text-amber-800">Nama</dt>
                <dd className="text-slate-700">Pondok Modern Tazakka</dd>
              </div>
              <div>
                <dt className="font-semibold text-amber-800">Penyelenggara</dt>
                <dd className="text-slate-700">Yayasan Tazakka Batang</dd>
              </div>
              <div>
                <dt className="font-semibold text-amber-800">Luas Lahan</dt>
                <dd className="text-slate-700">± 9,8 hektar</dd>
              </div>
              <div>
                <dt className="font-semibold text-amber-800">Sistem</dt>
                <dd className="text-slate-700">Pondok modern berasrama</dd>
              </div>
            </dl>
          </aside>
        </section>

        {/* Sejarah */}
        <section>
          <SectionTitle judul="Sejarah Singkat" />
          <div className="mt-6 space-y-4 leading-relaxed text-slate-700">
            <p>
              Nama “Tazakka” berasal dari bahasa Arab yang bermakna
              penyucian diri, sejalan dengan tujuan pondok untuk membersihkan
              jiwa dan membentuk pribadi yang berakhlak mulia.
            </p>
            <p>
              Pondok Modern Tazakka didirikan sebagai wujud keinginan untuk
              menghadirkan pendidikan pondok modern yang berkualitas di Jawa
              Tengah, dengan semangat meneruskan nilai-nilai pendidikan pondok
              modern yang telah teruji.
            </p>
            <p>
              Dari waktu ke waktu, Tazakka terus berkembang, baik dari sisi
              jumlah santri, sarana prasarana, maupun program pendidikannya.
            </p>
          </div>
        </section>

        {/* Visi & Misi */}
        <section className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl bg-green-900 p-8 text-white">
            <h2 className="font-judul text-3xl font-bold text-amber-300">Visi</h2>
            <div className="garis-emas mt-3" />
            <p className="mt-5 text-lg leading-relaxed text-green-50">
              Menjadi pondok modern yang unggul dalam melahirkan generasi
              berilmu, berakhlak mulia, mandiri, dan berjiwa pemimpin untuk
              umat dan bangsa.
            </p>
          </div>

          <div className="rounded-3xl border border-green-900/10 bg-white p-8">
            <h2 className="font-judul text-3xl font-bold text-green-950">Misi</h2>
            <div className="garis-emas mt-3" />
            <ol className="mt-5 space-y-3">
              {misi.map((m, i) => (
                <li key={i} className="flex gap-3 text-slate-700">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-400 text-xs font-bold text-green-950">
                    {i + 1}
                  </span>
                  <span className="leading-relaxed">{m}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Panca Jiwa */}
        <section>
          <SectionTitle
            tengah
            judul="Panca Jiwa"
            subjudul="Lima nilai yang menjadi ruh kehidupan di pondok."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {pancaJiwa.map((p) => (
              <div
                key={p.nama}
                className="rounded-2xl border border-green-900/10 bg-white p-5 text-center transition hover:-translate-y-1 hover:border-amber-400 hover:shadow-lg"
              >
                <h3 className="font-judul text-lg font-bold text-green-900">
                  {p.nama}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {p.teks}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Fasilitas & Ekstrakurikuler */}
        <section className="grid gap-10 md:grid-cols-2">
          <div>
            <SectionTitle judul="Fasilitas" />
                       <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {fasilitas.map((f) => (
                <div
                  key={f.nama}
                  className="group relative h-36 overflow-hidden rounded-xl shadow-sm ring-1 ring-green-900/10"
                >
                  <img
                    src={f.foto}
                    alt={f.nama}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-green-950/90 to-transparent px-3 pb-2 pt-8">
                    <p className="text-sm font-semibold text-white">{f.nama}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionTitle judul="Ekstrakurikuler" />
            <div className="mt-6 flex flex-wrap gap-3">
              {ekstrakurikuler.map((e) => (
                <span
                  key={e}
                  className="rounded-full border border-green-800/30 bg-green-50 px-4 py-2 text-sm font-semibold text-green-900"
                >
                  {e}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Alamat */}
        <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-green-900/10">
          <SectionTitle judul="Alamat" />
          <p className="mt-5 text-lg leading-relaxed text-slate-700">
            Pondok Modern Tazakka
            <br />
            Desa Sidayu, Kecamatan Bandar
            <br />
            Kabupaten Batang, Jawa Tengah
          </p>
          <Link
            href="/berita"
            className="mt-6 inline-block rounded-full bg-green-800 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            Lihat Berita Terbaru
          </Link>
        </section>
      </div>
    </>
  );
}