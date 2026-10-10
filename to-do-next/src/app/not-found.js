import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-xl px-5 py-24 text-center">
      <p className="text-6xl">🕌</p>
      <h1 className="font-judul mt-4 text-3xl font-extrabold text-green-950">
        Halaman tidak ditemukan
      </h1>
      <p className="mt-3 text-slate-600">
        Maaf, halaman atau berita yang Anda cari tidak tersedia.
      </p>
      <Link
        href="/"
        className="mt-7 inline-block rounded-full bg-green-800 px-7 py-3 font-semibold text-white transition hover:bg-green-700"
      >
        Kembali ke Home
      </Link>
    </section>
  );
}