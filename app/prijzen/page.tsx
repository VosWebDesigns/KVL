import ContactCTA from "@/components/ContactCTA";
import Reveal from "@/components/Reveal";
import ServicesGrid from "@/components/ServicesGrid";
import { priceCondition } from "@/lib/services";

export const metadata = {
  title: "Prijzen | KVL Automotive",
  description:
    "Overzichtelijke vanafprijzen voor onderhoud, airco service, remmen, bandenservice, APK-klaar maken, accu vervangen en lamp vervangen.",
};

export default function PrijzenPage() {
  return (
    <>
      <section className="container-page py-20">
        <Reveal y={32}>
          <p className="section-label">Prijzen</p>
          <h1 className="section-title">Duidelijke vanafprijzen.</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-kvl-muted">
            De exacte prijs is afhankelijk van het type auto en de benodigde werkzaamheden. Vraag vrijblijvend
            naar de mogelijkheden.
          </p>
        </Reveal>

        <Reveal y={32} className="relative mt-10 overflow-hidden rounded-[2rem] border border-kvl-red/20 bg-gradient-to-br from-kvl-red/10 via-kvl-panel to-black p-10 backdrop-blur-xl sm:p-14">
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-kvl-red/20 blur-3xl" />
          <div className="relative text-center">
            <h2 className="font-display text-4xl font-bold uppercase tracking-tightest text-white sm:text-6xl">Prijslijst</h2>
            <p className="mt-3 font-display text-sm font-semibold uppercase tracking-widest2 text-kvl-red">
              Kwaliteit voor een eerlijke prijs
            </p>
            <p className="mx-auto mt-4 max-w-xl text-sm text-zinc-300">
              Alle prijzen hieronder staan als duidelijke, leesbare servicekaarten — geen kleine lettertjes.
            </p>
          </div>
        </Reveal>

        <div className="mt-12">
          <ServicesGrid />
        </div>
        <p className="mt-6 rounded-2xl border border-kvl-red/25 bg-kvl-red/10 p-5 font-semibold text-white backdrop-blur-sm">
          {priceCondition}
        </p>
      </section>
      <ContactCTA />
    </>
  );
}
