import ContactCTA from "@/components/ContactCTA";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import ServicesGrid from "@/components/ServicesGrid";
import TrustBar from "@/components/TrustBar";
import { priceCondition } from "@/lib/services";
import { siteConfig } from "@/lib/site";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: siteConfig.name,
    image: `${siteConfig.url}${siteConfig.logo}`,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    areaServed: "Lelystad en omgeving",
    address: { "@type": "PostalAddress", addressLocality: "Lelystad", addressCountry: "NL" },
    priceRange: "€€",
    description: siteConfig.description,
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <TrustBar />
      <section id="diensten" className="container-page py-20">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="section-label">Populaire diensten</p><h2 className="section-title">Autoservice zonder onduidelijkheid.</h2></div><p className="max-w-xl text-kvl-muted">Van onderhoudsbeurt tot remmenservice: je ziet direct wat we doen en wat je ongeveer kunt verwachten.</p></div>
        <ServicesGrid limit={6} />
      </section>
      <section className="container-page py-10">
        <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-kvl-panel p-8 lg:grid-cols-[.85fr_1.15fr] lg:p-12">
          <div><p className="section-label">Waarom KVL Automotive</p><h2 className="section-title">Strak werk, korte lijnen en eerlijke prijzen.</h2></div>
          <div className="grid gap-4 sm:grid-cols-2">{["Duidelijke communicatie vooraf", "Persoonlijke service", "Geen onnodige werkzaamheden", "Kwaliteit voor een eerlijke prijs"].map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-black/35 p-5 font-bold text-white"><span className="mr-2 text-kvl-red">✓</span>{item}</div>)}</div>
        </div>
      </section>
      <section className="container-page py-20">
        <div className="mb-10"><p className="section-label">Prijslijst</p><h2 className="section-title">Service overzicht in echte HTML.</h2><p className="mt-4 max-w-2xl text-kvl-muted">Leesbaar, mobielvriendelijk en SEO-vriendelijk. De originele prijslijst is vertaald naar duidelijke servicekaarten.</p></div>
        <ServicesGrid compact />
        <p className="mt-6 rounded-2xl border border-white/10 bg-black/45 p-5 text-sm text-kvl-muted">{priceCondition}</p>
      </section>
      <Process />
      <section className="container-page py-10"><div className="rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_80%_20%,rgba(229,9,20,.18),transparent_35%),#101010] p-8 lg:p-12"><p className="section-label">Werkgebied</p><h2 className="section-title">Lelystad & omgeving</h2><p className="mt-4 max-w-2xl text-zinc-300">Flexibel, betrouwbaar en altijd in de buurt. KVL Automotive helpt klanten in Lelystad en omliggende plaatsen met onderhoud, controles en snelle service.</p></div></section>
      <FAQ />
      <ContactCTA />
    </>
  );
}
