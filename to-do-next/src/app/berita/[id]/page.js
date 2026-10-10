import Link from "next/link";
import { notFound } from "next/navigation";
import { beritaList, getBeritaById } from "@/data/berita";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const berita = getBeritaById(id);
  return { title: berita ? berita.judul : "Berita tidak ditemukan" };
}

export default async function DetailBeritaPage({ params }) {
  // Next.js 15+: params berupa Promise, jadi perlu di-await
  const { id } = await params;
  const berita = getBeritaById(id);

  if (!berita) notFound();

  const berikutnya = beritaList.filter((b) => b.id !== berita.id).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-green-950 via-green-900 to-green-700 py-14 text-white">
        <div className="pola-bintang absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-5">
          <Link
            href="/berita"
            className="text-sm font-semibold text-amber-300 hover:text-amber-200"
          >
            ← Kembali ke Berita
          </Link>
          <span className="mt-5 block w-fit rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-green-950">
            {berita.kategori}
          </span>
          <h1 className="font-judul mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
            {berita.judul}
          </h1>
          <time className="mt-4 block text-green-100/90">{berita.tanggal}</time>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-5 py-12">
        <div className="-mt-20 overflow-hidden rounded-2xl shadow-xl ring-4 ring-white">
          {berita.gambar ? (
            <img
              src={berita.gambar}
              alt={berita.judul}
              className="h-72 w-full object-cover sm:h-96"
            />
          ) : (
            <div
              className={`relative flex h-64 items-center justify-center bg-gradient-to-br sm:h-80 ${berita.warna}`}
            >
              <div className="pola-bintang absolute inset-0" aria-hidden="true" />
              <span className="relative text-8xl drop-shadow-lg" aria-hidden="true">
                {berita.emoji}
              </span>
            </div>
          )}
        </div>

        <div className="mt-10 space-y-5 text-lg leading-8 text-slate-700">
          {berita.isi.map((paragraf, i) => (
            <p key={i}>{paragraf}</p>
          ))}
        </div>

        <Link
          href="/berita"
          className="mt-10 inline-block rounded-full bg-green-800 px-7 py-3 font-semibold text-white transition hover:bg-green-700"
        >
          ← Kembali ke Berita
        </Link>
      </article>

      <section className="border-t border-green-900/10 bg-white py-14">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="font-judul text-2xl font-bold text-green-950">
            Berita Lainnya
          </h2>
          <div className="garis-emas mt-3" />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {berikutnya.map((b) => (
              <Link
                key={b.id}
                href={`/berita/${b.id}`}
                className="group rounded-xl border border-green-900/10 bg-[#f3f8f2] p-5 transition hover:border-amber-400 hover:shadow-md"
              >
                <time className="text-xs font-medium text-amber-700">
                  {b.tanggal}
                </time>
                <h3 className="font-judul mt-2 font-bold leading-snug text-green-950 group-hover:text-green-700">
                  {b.judul}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}