import ContactCTA from "@/components/ContactCTA";
import ServicesGrid from "@/components/ServicesGrid";
import { priceCondition } from "@/lib/services";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Prijzen | KVL Automotive",
  description:
    "Overzichtelijke vanafprijzen voor onderhoud, airco service, remmen, bandenservice, APK-klaar maken, accu vervangen en lamp vervangen.",
};

export default function PrijzenPage() {
  return (
    <>
      <section className="container-page py-20">
        <p className="section-label">Prijzen</p>
        <h1 className="section-title">Duidelijke vanafprijzen.</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-kvl-muted">
          De exacte prijs is afhankelijk van het type auto en de benodigde werkzaamheden. Vraag vrijblijvend naar de mogelijkheden.
        </p>

        <div className="relative mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-kvl-panel p-4">
          <div
            className="h-56 w-full rounded-3xl bg-cover bg-center opacity-40"
            style={{ backgroundImage: `url(${siteConfig.priceImage})` }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 grid place-items-center bg-black/35 p-6 text-center">
            <div>
              <h2 className="text-4xl font-black uppercase text-white sm:text-6xl">Prijslijst</h2>
              <p className="mt-3 font-bold text-kvl-red">Kwaliteit voor een eerlijke prijs</p>
              <p className="mt-3 max-w-xl text-sm text-zinc-300">
                De afbeelding is optioneel. Alle prijzen hieronder staan als echte, leesbare servicekaarten.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <ServicesGrid />
        </div>
        <p className="mt-6 rounded-2xl border border-kvl-red/25 bg-kvl-red/10 p-5 font-semibold text-white">
          {priceCondition}
        </p>
      </section>
      <ContactCTA />
    </>
  );
}
