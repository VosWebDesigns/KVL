import Reveal from "./Reveal";

const faqs = [
  ["Zijn de prijzen inclusief onderdelen?", "De prijzen zijn vanafprijzen en exclusief onderdelen, tenzij anders vermeld. De exacte prijs hangt af van het type auto en de werkzaamheden."],
  ["Kan ik snel terecht?", "Neem via WhatsApp contact op voor de snelste reactie. We kijken direct wat mogelijk is in de planning."],
  ["Doet KVL Automotive ook APK?", "We maken auto’s APK-klaar met controle en advies. Er wordt geen APK afmelding gedaan."],
  ["Werkgebied?", "KVL Automotive is actief in Lelystad en omgeving."],
];

export default function FAQ() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
      <Reveal y={28} className="text-center">
        <p className="section-label">FAQ</p>
        <h2 className="section-title">Veelgestelde vragen</h2>
      </Reveal>
      <Reveal stagger staggerAmount={0.08} y={28} className="mt-10 space-y-4">
        {faqs.map(([q, a]) => (
          <details key={q} className="glass-card group p-6">
            <summary className="relative cursor-pointer list-none font-display font-semibold uppercase tracking-tight text-white">
              {q}
              <span className="float-right text-kvl-red transition group-open:rotate-45">+</span>
            </summary>
            <p className="relative mt-4 text-kvl-muted">{a}</p>
          </details>
        ))}
      </Reveal>
    </section>
  );
}
