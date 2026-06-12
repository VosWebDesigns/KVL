import { siteConfig } from "@/lib/site";

export default function ContactCTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[2rem] border border-kvl-red/25 bg-gradient-to-br from-kvl-red/20 via-kvl-panel to-black p-8 shadow-red sm:p-12">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-kvl-red/20 blur-3xl" />
        <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div><p className="text-sm font-black uppercase tracking-[0.28em] text-kvl-red">Snel, makkelijk & vertrouwd</p><h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-5xl">Vraag vrijblijvend naar de mogelijkheden.</h2><p className="mt-4 max-w-2xl text-zinc-300">Stuur een WhatsApp voor onderhoud, remmen, airco, banden, accu, lampen of overige service. Je krijgt duidelijke communicatie en een eerlijk advies.</p></div>
          <a href={siteConfig.whatsappHref} className="shrink-0 rounded-full bg-white px-7 py-4 font-black text-black transition hover:-translate-y-0.5">Plan direct je afspraak</a>
        </div>
      </div>
    </section>
  );
}
