"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems, siteConfig } from "@/lib/site";
import { BrandMark } from "./BrandMark";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`glass-nav sticky top-0 z-50 transition-all duration-500 ease-cinematic ${
        scrolled ? "bg-kvl-black/80 shadow-panel" : "bg-kvl-black/40"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Hoofdnavigatie">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <BrandMark size="sm" />
          <div className="leading-none">
            <span className="block font-display text-lg font-bold italic tracking-tight text-white">
              K<span className="text-kvl-red">V</span>L
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-widest2 text-kvl-muted">Automotive</span>
          </div>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative font-display text-sm font-medium uppercase tracking-wide text-zinc-300 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <a
          href={siteConfig.whatsappHref}
          className="hidden rounded-full bg-kvl-red px-5 py-3 font-display text-sm font-semibold uppercase tracking-wide text-white shadow-red transition duration-300 ease-cinematic hover:-translate-y-0.5 hover:shadow-redLg lg:inline-flex"
        >
          Plan direct je afspraak
        </a>
        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white backdrop-blur-md md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Menu openen"
        >
          <span className="relative h-4 w-5">
            <span className={`absolute left-0 top-0 h-0.5 w-5 bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`absolute left-0 top-2 h-0.5 w-5 bg-white transition ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 top-4 h-0.5 w-5 bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </nav>
      {open && (
        <div className="border-t border-white/10 bg-black/95 px-4 py-4 backdrop-blur-2xl md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 font-display font-medium uppercase tracking-wide text-zinc-200 hover:bg-white/5"
              >
                {item.label}
              </Link>
            ))}
            <a href={siteConfig.whatsappHref} className="mt-2 rounded-xl bg-kvl-red px-4 py-3 text-center font-display font-semibold uppercase tracking-wide text-white">
              Afspraak maken via WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
