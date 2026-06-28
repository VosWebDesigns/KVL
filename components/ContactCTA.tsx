import { siteConfig } from "@/lib/site";
import Reveal from "./Reveal";

export default function ContactCTA() {
  return (
    <section className="container-page py-16">
      <Reveal y={36}>
        <div className="relative overflow-hidden rounded-[2rem] border border-kvl-red/25 bg-gradient-to-br from-kvl-red/20 via-kvl-panel to-black p-8 shadow-redLg backdrop-blur-xl sm:p-12">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-kvl-red/25 blur-3xl" />
          <div className="absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-white/5 blur-3xl" />
          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <p className="section-label">Snel, makkelijk &amp; vertrouwd</p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tightest text-white sm:text-5xl">
                Vraag vrijblijvend naar de mogelijkheden.
              </h2>
              <p className="mt-4 max-w-2xl text-zinc-300">
                Stuur een WhatsApp voor onderhoud, remmen, airco, banden, accu, lampen of overige service.
                Je krijgt duidelijke communicatie en een eerlijk advies.
              </p>
            </div>
            <a
              href={siteConfig.whatsappHref}
              className="shrink-0 rounded-full bg-white px-7 py-4 font-display text-sm font-semibold uppercase tracking-wide text-black transition duration-300 ease-cinematic hover:-translate-y-0.5 hover:shadow-2xl"
            >
              Plan direct je afspraak
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
