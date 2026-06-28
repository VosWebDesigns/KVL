import ContactForm from "./ContactForm";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Contact | KVL Automotive",
  description: "Neem contact op met KVL Automotive in Lelystad en omgeving via WhatsApp, telefoon, e-mail of het contactformulier.",
};

export default function ContactPage() {
  return (
    <section className="container-page py-20">
      <Reveal y={32}>
        <p className="section-label">Contact</p>
        <h1 className="section-title">Plan direct je afspraak.</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-kvl-muted">
          Voor de snelste reactie stuur je een WhatsApp. Liever eerst je vraag toelichten? Vul het formulier in.
        </p>
      </Reveal>
      <Reveal y={36} stagger staggerAmount={0.12} className="mt-12 grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
        <aside className="glass-panel p-7">
          <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-white">Contactgegevens</h2>
          <dl className="mt-6 space-y-5 text-kvl-muted">
            <div>
              <dt className="font-semibold text-white">WhatsApp</dt>
              <dd>
                <a className="text-kvl-red" href={siteConfig.whatsappHref}>
                  {siteConfig.whatsappNumber}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-white">Telefoon</dt>
              <dd>{siteConfig.phone}</dd>
            </div>
            <div>
              <dt className="font-semibold text-white">E-mail</dt>
              <dd>{siteConfig.email}</dd>
            </div>
            <div>
              <dt className="font-semibold text-white">Locatie</dt>
              <dd>{siteConfig.location}</dd>
            </div>
            <div>
              <dt className="font-semibold text-white">Openingstijden</dt>
              <dd>
                {siteConfig.openingHours.map((line) => (
                  <span className="block" key={line}>
                    {line}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
          <a
            href={siteConfig.whatsappHref}
            className="mt-8 block rounded-full bg-kvl-red px-6 py-4 text-center font-display font-semibold uppercase tracking-wide text-white shadow-red transition duration-300 ease-cinematic hover:-translate-y-0.5 hover:shadow-redLg"
          >
            DM of WhatsApp voor een afspraak
          </a>
        </aside>
        <ContactForm />
      </Reveal>
    </section>
  );
}
