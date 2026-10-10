"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const menu = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/berita", label: "Berita" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [terbuka, setTerbuka] = useState(false);

  const aktif = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-green-900/10 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setTerbuka(false)}
        >
          <img
            src="/logo.jpg"
            alt="Logo Pondok Modern Tazakka"
            width={44}
            height={44}
            className="h-11 w-11 rounded-full ring-2 ring-amber-400"
          />
          <span className="font-judul text-lg font-bold leading-tight text-green-900 sm:text-xl">
            Pondok Modern
            <span className="block text-sm font-semibold text-amber-600 sm:text-base">
              Tazakka
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {menu.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                  aktif(item.href)
                    ? "bg-green-800 text-white shadow-sm"
                    : "text-green-900 hover:bg-green-100"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label="Buka menu"
          aria-expanded={terbuka}
          onClick={() => setTerbuka(!terbuka)}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-green-900/15 text-green-900 hover:bg-green-50 md:hidden"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {terbuka ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {terbuka && (
        <ul className="border-t border-green-900/10 bg-white px-5 pb-4 pt-2 md:hidden">
          {menu.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setTerbuka(false)}
                className={`block rounded-lg px-4 py-3 text-base font-semibold ${
                  aktif(item.href)
                    ? "bg-green-800 text-white"
                    : "text-green-900 hover:bg-green-50"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}