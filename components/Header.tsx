"use client";

import Link from "next/link";
import { useState } from "react";
import { navItems, siteConfig } from "@/lib/site";
import { BrandMark } from "./BrandMark";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-kvl-black/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Hoofdnavigatie">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <BrandMark size="sm" />
          <div className="leading-none">
            <span className="block text-lg font-black italic tracking-tight text-white">K<span className="text-kvl-red">V</span>L</span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-kvl-muted">Automotive</span>
          </div>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-semibold text-zinc-300 transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>
        <a href={siteConfig.whatsappHref} className="hidden rounded-full bg-kvl-red px-5 py-3 text-sm font-black text-white shadow-red transition hover:-translate-y-0.5 hover:bg-red-600 lg:inline-flex">
          Plan direct je afspraak
        </a>
        <button className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white md:hidden" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-label="Menu openen">
          <span className="relative h-4 w-5"><span className={`absolute left-0 top-0 h-0.5 w-5 bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`} /><span className={`absolute left-0 top-2 h-0.5 w-5 bg-white transition ${open ? "opacity-0" : ""}`} /><span className={`absolute left-0 top-4 h-0.5 w-5 bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`} /></span>
        </button>
      </nav>
      {open && (
        <div className="border-t border-white/10 bg-black/95 px-4 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 font-semibold text-zinc-200 hover:bg-white/5">{item.label}</Link>)}
            <a href={siteConfig.whatsappHref} className="mt-2 rounded-xl bg-kvl-red px-4 py-3 text-center font-black text-white">Afspraak maken via WhatsApp</a>
          </div>
        </div>
      )}
    </header>
  );
}
