import Link from "next/link";
import Hero from "@/components/Hero";
import BeritaCard from "@/components/BeritaCard";
import SectionTitle from "@/components/SectionTitle";
import { beritaList } from "@/data/berita";

const keunggulan = [
  {
    ikon: "🏫",
    judul: "Kampus Luas 9,8 Hektar",
    teks: "Berlokasi di Desa Sidayu, Kecamatan Bandar, Batang, dengan lingkungan yang asri dan kondusif untuk belajar.",
  },
  {
    ikon: "🌙",
    judul: "Pendidikan 24 Jam",
    teks: "Santri tinggal di asrama sehingga pembelajaran, ibadah, dan pembiasaan berlangsung sepanjang hari.",
  },
  {
    ikon: "🌟",
    judul: "Panca Jiwa Pondok",
    teks: "Keikhlasan, kesederhanaan, berdikari, ukhuwah Islamiyah, dan kebebasan menjadi ruh seluruh kegiatan.",
  },
];

export default function Home() {
  const beritaTerbaru = beritaList.slice(0, 3);

  return (
    <>
      <Hero />

      {/* Sambutan */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid items-center gap-10 md:grid-cols-[auto_1fr]">
          <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-orange-400 p-1.5 shadow-lg">
            <img
              src="/logo.jpg"
              alt="Logo Pondok Modern Tazakka"
              className="h-full w-full rounded-full"
            />
          </div>
          <div>
            <SectionTitle judul="Sambutan Pimpinan" />
            <blockquote className="mt-5 border-l-4 border-amber-400 pl-5 text-lg leading-relaxed text-slate-700">
              Assalamu’alaikum warahmatullahi wabarakatuh. Selamat datang di
              website resmi Pondok Modern Tazakka. Di sini kami tidak hanya
              mengajarkan ilmu, tetapi juga menanamkan akhlak, kemandirian, dan
              semangat pengabdian. Semoga website ini menjadi jendela bagi Anda
              untuk mengenal pondok kami lebih dekat.
            </blockquote>
            <p className="mt-3 font-semibold text-green-900">
              Pimpinan Pondok Modern Tazakka
            </p>
          </div>
        </div>
      </section>

      {/* Tentang singkat */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-5">
          <SectionTitle
            tengah
            judul="Mengenal Tazakka"
            subjudul="Lembaga pendidikan Islam di Batang, Jawa Tengah yang memadukan ilmu agama, ilmu umum, dan pembentukan karakter dalam sistem pondok modern."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {keunggulan.map((k) => (
              <div
                key={k.judul}
                className="rounded-2xl border border-green-900/10 bg-[#f3f8f2] p-7 transition hover:border-amber-400 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-800 text-2xl shadow">
                  {k.ikon}
                </div>
                <h3 className="font-judul mt-5 text-xl font-bold text-green-950">
                  {k.judul}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {k.teks}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/about"
              className="inline-block rounded-full bg-green-800 px-7 py-3 font-semibold text-white transition hover:bg-green-700"
            >
              Selengkapnya Tentang Kami
            </Link>
          </div>
        </div>
      </section>

      {/* Berita terbaru */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionTitle
            judul="Berita Terbaru"
            subjudul="Kabar dan kegiatan terkini dari lingkungan pondok."
          />
          <Link
            href="/berita"
            className="rounded-full border-2 border-green-800 px-6 py-2.5 text-sm font-bold text-green-800 transition hover:bg-green-800 hover:text-white"
          >
            Semua Berita
          </Link>
        </div>

        <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {beritaTerbaru.map((b) => (
            <BeritaCard key={b.id} berita={b} />
          ))}
        </div>
      </section>

      {/* Ajakan */}
      <section className="mx-auto max-w-6xl px-5 pb-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-green-900 to-green-700 px-8 py-12 text-center text-white">
          <div className="pola-bintang absolute inset-0" aria-hidden="true" />
          <div className="relative">
            <h2 className="font-judul text-3xl font-bold sm:text-4xl">
              Bergabunglah Bersama Keluarga Tazakka
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-green-50/90">
              Pendaftaran santri baru tahun ajaran 2026/2027 telah dibuka.
              Baca informasi lengkapnya pada berita berikut.
            </p>
            <Link
              href="/berita/penerimaan-santri-baru"
              className="mt-7 inline-block rounded-full bg-amber-400 px-8 py-3 font-bold text-green-950 transition hover:bg-amber-300"
            >
              Info Pendaftaran
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}