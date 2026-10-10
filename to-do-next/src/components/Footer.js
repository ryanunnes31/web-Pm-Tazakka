import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden bg-green-950 text-green-50">
      <div className="pola-bintang absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/logo.jpg"
              alt="Logo Pondok Modern Tazakka"
              width={52}
              height={52}
              className="h-12 w-12 rounded-full ring-2 ring-amber-400"
            />
            <h2 className="font-judul text-xl font-bold">Pondok Modern Tazakka</h2>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-green-100/80">
            Membina generasi berilmu, berakhlak mulia, dan berjiwa pemimpin
            melalui pendidikan pondok modern.
          </p>
        </div>

        <div>
          <h3 className="font-judul text-lg font-semibold text-amber-300">Menu</h3>
          <div className="garis-emas mt-2" />
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/" className="text-green-100/85 hover:text-amber-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-green-100/85 hover:text-amber-300">
                About
              </Link>
            </li>
            <li>
              <Link href="/berita" className="text-green-100/85 hover:text-amber-300">
                Berita
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-judul text-lg font-semibold text-amber-300">Alamat</h3>
          <div className="garis-emas mt-2" />
          <address className="mt-4 text-sm not-italic leading-relaxed text-green-100/85">
            Desa Sidayu, Kecamatan Bandar
            <br />
            Kabupaten Batang, Jawa Tengah
            <br />
            Indonesia
          </address>
        </div>
      </div>

      <div className="relative border-t border-white/10 py-5 text-center text-xs text-green-100/70">
        © 2026 Pondok Modern Tazakka. Dibuat untuk tugas UTS Pemrograman Web.
      </div>
    </footer>
  );
}