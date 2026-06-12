const items = [
  ["Betrouwbaar", "Duidelijk advies zonder verrassingen"],
  ["Persoonlijke service", "Korte lijnen en direct contact"],
  ["Kwaliteit", "Vakkundige controle en nette afwerking"],
  ["Eerlijke prijzen", "Transparante vanafprijzen"],
];

export default function TrustBar() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Waarom klanten KVL Automotive kiezen">
      <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 shadow-panel sm:grid-cols-2 lg:grid-cols-4">
        {items.map(([title, text]) => (
          <div key={title} className="bg-kvl-panel p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-kvl-red/40 bg-kvl-red/10 text-kvl-red">
              <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="2.5"><path d="m5 12 4 4L19 6" /></svg>
            </div>
            <h3 className="font-black uppercase tracking-wide text-white">{title}</h3>
            <p className="mt-2 text-sm text-kvl-muted">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
