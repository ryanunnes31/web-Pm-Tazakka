import Link from "next/link";

export default function BeritaCard({ berita }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-green-900/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-green-900/10">
      <div className="relative h-48 overflow-hidden">
        {berita.gambar ? (
          <img
            src={berita.gambar}
            alt={berita.judul}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${berita.warna}`}
          >
            <div className="pola-bintang absolute inset-0" aria-hidden="true" />
            <span className="relative text-6xl drop-shadow-lg" aria-hidden="true">
              {berita.emoji}
            </span>
          </div>
        )}
        <span className="absolute left-3 top-3 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-green-950 shadow">
          {berita.kategori}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <time className="text-sm font-medium text-amber-700">{berita.tanggal}</time>
        <h3 className="font-judul mt-2 text-xl font-bold leading-snug text-green-950">
          {berita.judul}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
          {berita.ringkasan}
        </p>
        <Link
          href={`/berita/${berita.id}`}
          className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-green-800 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700"
        >
          Baca Selengkapnya
        </Link>
      </div>
    </article>
  );
}