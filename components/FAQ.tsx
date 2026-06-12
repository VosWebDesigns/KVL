const faqs = [
  ["Zijn de prijzen inclusief onderdelen?", "De prijzen zijn vanafprijzen en exclusief onderdelen, tenzij anders vermeld. De exacte prijs hangt af van het type auto en de werkzaamheden."],
  ["Kan ik snel terecht?", "Neem via WhatsApp contact op voor de snelste reactie. We kijken direct wat mogelijk is in de planning."],
  ["Doet KVL Automotive ook APK?", "We maken auto’s APK-klaar met controle en advies. Er wordt geen APK afmelding gedaan."],
  ["Werkgebied?", "KVL Automotive is actief in Lelystad en omgeving."],
];

export default function FAQ() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
      <p className="text-center text-sm font-black uppercase tracking-[0.28em] text-kvl-red">FAQ</p>
      <h2 className="mt-3 text-center text-4xl font-black tracking-tight text-white">Veelgestelde vragen</h2>
      <div className="mt-10 space-y-4">{faqs.map(([q, a]) => <details key={q} className="group rounded-2xl border border-white/10 bg-kvl-panel p-6"><summary className="cursor-pointer list-none font-black text-white">{q}<span className="float-right text-kvl-red group-open:rotate-45">+</span></summary><p className="mt-4 text-kvl-muted">{a}</p></details>)}</div>
    </section>
  );
}
