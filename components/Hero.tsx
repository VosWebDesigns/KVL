"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { siteConfig } from "@/lib/site";
import HeroScene from "./HeroScene";

export default function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = rootRef.current;
    if (!root || prefersReducedMotion) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(".hero-eyebrow", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 })
      .fromTo(".hero-line", { opacity: 0, y: 60, skewY: 2 }, { opacity: 1, y: 0, skewY: 0, duration: 1, stagger: 0.12 }, "-=0.3")
      .fromTo(".hero-sub", { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.4")
      .fromTo(".hero-cta", { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 }, "-=0.5")
      .fromTo(".hero-note", { opacity: 0 }, { opacity: 1, duration: 0.6 }, "-=0.3")
      .fromTo(".hero-panel", { opacity: 0, scale: 0.94, y: 30 }, { opacity: 1, scale: 1, y: 0, duration: 1.1, ease: "power4.out" }, "-=0.9");

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section ref={rootRef} className="relative isolate min-h-[100vh] overflow-hidden bg-kvl-black">
      {/* Three.js cinematic scene */}
      <div className="absolute inset-0">
        <HeroScene />
      </div>

      {/* Static fallback atmosphere / vignette layers */}
      <div className="absolute inset-0 bg-grid bg-[length:48px_48px] opacity-20" />
      <div className="absolute left-1/2 top-0 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-kvl-red/15 blur-[150px]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-kvl-black to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-kvl-black/40 via-transparent to-kvl-black" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 py-28 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-36">
        <div>
          <p className="hero-eyebrow mb-6 inline-flex items-center gap-2 rounded-full border border-kvl-red/30 bg-kvl-red/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest2 text-kvl-red backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-kvl-red" />
            Kwaliteit voor een eerlijke prijs
          </p>
          <h1 className="max-w-4xl font-display text-[13vw] font-bold uppercase leading-[0.92] tracking-tightest text-white sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
            <span className="hero-line block overflow-hidden">Premium</span>
            <span className="hero-line block overflow-hidden text-kvl-red">autoservice</span>
            <span className="hero-line block overflow-hidden">in Lelystad.</span>
          </h1>
          <p className="hero-sub mt-7 max-w-xl text-base leading-7 text-kvl-mist sm:text-lg">
            KVL Automotive helpt je met betrouwbare autoservice, duidelijke communicatie en eerlijke
            vanafprijzen. Onderhoud, remmen, airco, banden of een snelle controle — wij houden de
            lijnen kort en zorgen dat je weet waar je aan toe bent.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={siteConfig.whatsappHref}
              className="hero-cta group relative overflow-hidden rounded-full bg-kvl-red px-7 py-4 text-center font-display text-sm font-semibold uppercase tracking-wide text-white shadow-red transition duration-300 ease-cinematic hover:-translate-y-0.5 hover:shadow-redLg"
            >
              <span className="relative z-10">Afspraak maken via WhatsApp</span>
            </a>
            <Link
              href="/diensten"
              className="hero-cta rounded-full border border-white/15 bg-white/5 px-7 py-4 text-center font-display text-sm font-semibold uppercase tracking-wide text-white backdrop-blur-md transition duration-300 ease-cinematic hover:border-kvl-red/60 hover:bg-white/10"
            >
              Bekijk diensten
            </Link>
          </div>
          <p className="hero-note mt-5 text-sm font-medium text-kvl-muted">
            DM of WhatsApp voor een afspraak · Snel, makkelijk &amp; vertrouwd
          </p>
        </div>

        {/* Floating glassmorphism brand panel */}
        <div className="hero-panel relative mx-auto w-full max-w-lg">
          <div className="absolute inset-8 rounded-full bg-kvl-red/15 blur-3xl" />
          <div className="glass-panel relative p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_15%,rgba(229,7,15,.22),transparent_40%)]" />
            <div className="relative flex flex-col items-center text-center">
              <div className="relative grid h-28 w-28 place-items-center rounded-full border border-white/15 bg-black/60 shadow-red">
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_55%_35%,rgba(229,7,15,.3),transparent_55%)]" />
                <span className="relative font-display text-4xl font-bold italic tracking-tightest text-white">
                  K<span className="text-kvl-red">V</span>L
                </span>
              </div>
              <div className="mt-6 font-display text-6xl font-bold italic tracking-tightest text-white">
                K<span className="text-kvl-red">V</span>L
              </div>
              <div className="mt-2 text-sm font-semibold uppercase tracking-widest2 text-kvl-mist">Automotive</div>
              <div className="chrome-divider my-8" />
              <div className="grid w-full grid-cols-2 gap-3 text-left text-sm text-kvl-mist">
                {["Onderhoud", "Airco service", "Remmen", "Banden"].map((item) => (
                  <span key={item} className="rounded-2xl border border-white/5 bg-black/40 p-4 backdrop-blur-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
