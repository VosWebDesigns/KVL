import Reveal from "./Reveal";

const items = [
  ["Betrouwbaar", "Duidelijk advies zonder verrassingen"],
  ["Persoonlijke service", "Korte lijnen en direct contact"],
  ["Kwaliteit", "Vakkundige controle en nette afwerking"],
  ["Eerlijke prijzen", "Transparante vanafprijzen"],
];

export default function TrustBar() {
  return (
    <section className="container-page -mt-10 sm:-mt-14" aria-label="Waarom klanten KVL Automotive kiezen">
      <Reveal stagger staggerAmount={0.1} y={36} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(([title, text]) => (
          <div key={title} className="glass-card p-6 hover:-translate-y-1 hover:border-kvl-red/40">
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-kvl-red/10 blur-2xl transition group-hover:bg-kvl-red/20" />
            <div className="relative mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-kvl-red/40 bg-kvl-red/10 text-kvl-red">
              <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="2.5">
                <path d="m5 12 4 4L19 6" />
              </svg>
            </div>
            <h3 className="relative font-display text-base font-semibold uppercase tracking-wide text-white">{title}</h3>
            <p className="relative mt-2 text-sm text-kvl-muted">{text}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
