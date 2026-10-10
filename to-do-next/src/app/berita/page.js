import BeritaCard from "@/components/BeritaCard";
import { beritaList } from "@/data/berita";

export const metadata = {
  title: "Berita",
  description: "Kabar dan kegiatan terbaru dari Pondok Modern Tazakka.",
};

export default function BeritaPage() {
  return (
    <>
      {/* Header halaman */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-950 via-green-900 to-green-700 py-16 text-white">
        <div className="pola-bintang absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5">
          <h1 className="font-judul text-4xl font-extrabold sm:text-5xl">
            Berita Sekolah
          </h1>
          <div className="garis-emas mt-4" />
          <p className="mt-4 max-w-2xl text-lg text-green-50/90">
            Kabar, kegiatan, dan prestasi terbaru dari Pondok Modern Tazakka.
          </p>
        </div>
      </section>

      {/* Daftar berita (6 berita) */}
      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {beritaList.map((b) => (
            <BeritaCard key={b.id} berita={b} />
          ))}
        </div>
      </section>
    </>
  );
}