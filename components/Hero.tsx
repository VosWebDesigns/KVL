import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { BrandMark } from "./BrandMark";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-kvl-black">
      <div className="absolute inset-0 bg-grid bg-[length:48px_48px] opacity-30" />
      <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-kvl-red/20 blur-[130px]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-kvl-black to-transparent" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.04fr_.96fr] lg:px-8 lg:py-28">
        <div className="relative z-10">
          <p className="mb-5 inline-flex rounded-full border border-kvl-red/30 bg-kvl-red/10 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-kvl-red">Kwaliteit voor een eerlijke prijs</p>
          <h1 className="max-w-4xl text-5xl font-black uppercase tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">Premium autoservice in Lelystad & omgeving.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">KVL Automotive helpt je met betrouwbare autoservice, duidelijke communicatie en eerlijke vanafprijzen. Of het nu gaat om onderhoud, remmen, airco, banden of een snelle controle: wij houden de lijnen kort en zorgen dat je weet waar je aan toe bent.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={siteConfig.whatsappHref} className="rounded-full bg-kvl-red px-7 py-4 text-center font-black text-white shadow-red transition hover:-translate-y-0.5 hover:bg-red-600">Afspraak maken via WhatsApp</a>
            <Link href="/diensten" className="rounded-full border border-white/15 bg-white/5 px-7 py-4 text-center font-black text-white transition hover:border-kvl-red/60 hover:bg-white/10">Bekijk diensten</Link>
          </div>
          <p className="mt-5 text-sm font-semibold text-kvl-muted">DM of WhatsApp voor een afspraak · Snel, makkelijk & vertrouwd</p>
        </div>
        <div className="relative z-10 mx-auto w-full max-w-lg">
          <div className="absolute inset-8 rounded-full bg-kvl-red/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8 shadow-panel">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(229,9,20,.25),transparent_35%)]" />
            <div className="relative flex flex-col items-center text-center">
              <BrandMark size="lg" />
              <div className="mt-7 text-6xl font-black italic tracking-tighter text-white">K<span className="text-kvl-red">V</span>L</div>
              <div className="mt-2 text-sm font-bold uppercase tracking-[0.6em] text-zinc-300">Automotive</div>
              <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-kvl-red to-transparent" />
              <div className="grid w-full grid-cols-2 gap-3 text-left text-sm text-zinc-300">
                <span className="rounded-2xl bg-black/45 p-4">Onderhoud</span><span className="rounded-2xl bg-black/45 p-4">Airco service</span><span className="rounded-2xl bg-black/45 p-4">Remmen</span><span className="rounded-2xl bg-black/45 p-4">Banden</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
