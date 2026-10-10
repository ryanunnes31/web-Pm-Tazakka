import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-950 via-green-900 to-green-700 text-white">
      <div className="pola-bintang absolute inset-0" aria-hidden="true" />
      <div
        className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-amber-400/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-[1.2fr_1fr] md:py-24">
        <div>
          <p className="hero-masuk inline-block rounded-full border border-amber-300/50 bg-white/10 px-4 py-1.5 text-sm font-medium text-amber-200">
            Batang, Jawa Tengah
          </p>
          <h1 className="hero-masuk hero-masuk-2 font-judul mt-5 text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl">
            Pondok Modern
            <span className="block text-amber-300">Tazakka</span>
          </h1>
          <p className="hero-masuk hero-masuk-3 mt-5 max-w-lg text-lg leading-relaxed text-green-50/90">
            Mencetak generasi berilmu, berakhlak mulia, dan berjiwa pemimpin
            dalam lingkungan pendidikan yang mandiri dan penuh keteladanan.
          </p>

          <div className="hero-masuk hero-masuk-3 mt-8 flex flex-wrap gap-3">
            <Link
              href="/about"
              className="rounded-full bg-amber-400 px-7 py-3 font-bold text-green-950 shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-amber-300"
            >
              Kenali Kami
            </Link>
            <Link
              href="/berita"
              className="rounded-full border-2 border-white/60 px-7 py-3 font-bold text-white transition hover:bg-white hover:text-green-900"
            >
              Lihat Berita
            </Link>
          </div>
        </div>

        <div className="relative mx-auto flex h-72 w-72 items-center justify-center sm:h-80 sm:w-80 lg:h-96 lg:w-96">
          <svg
            viewBox="0 0 200 200"
            className="bintang-putar absolute inset-0 h-full w-full text-amber-300/60"
            aria-hidden="true"
          >
            <g fill="none" stroke="currentColor" strokeWidth="0.8">
              <path d="M100 6l21 38 38-21-19 40 40 19-40 19 19 40-38-21-21 38-21-38-38 21 19-40-40-19 40-19-19-40 38 21z" />
              <path d="M100 22l16 30 30-16-14 32 32 14-32 14 14 32-30-16-16 30-16-30-30 16 14-32-32-14 32-14-14-32 30 16z" />
            </g>
          </svg>
          <img
            src="/logo.jpg"
            alt="Logo Pondok Modern Tazakka"
            width={200}
            height={200}
            className="relative h-48 w-48 rounded-full shadow-2xl shadow-black/40 ring-4 ring-amber-300 sm:h-56 sm:w-56 lg:h-64 lg:w-64"
          />
        </div>
      </div>

      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="relative block h-8 w-full text-[#f3f8f2] sm:h-12"
        aria-hidden="true"
      >
        <path fill="currentColor" d="M0 60V20c240 40 480 40 720 20s480-40 720-20v40z" />
      </svg>
    </section>
  );
}