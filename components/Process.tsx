import Reveal from "./Reveal";

const steps = [
  ["01", "Stuur een WhatsApp", "Vertel kort wat je nodig hebt, eventueel met kenteken en klachtomschrijving."],
  ["02", "Duidelijke inschatting", "Je ontvangt eerlijk advies over de werkzaamheden, planning en vanafprijs."],
  ["03", "Service zonder gedoe", "We voeren het werk netjes uit en houden contact als er iets verandert."],
];

export default function Process() {
  return (
    <section className="container-page py-20">
      <Reveal y={32} className="mb-10 max-w-2xl">
        <p className="section-label">Werkwijze</p>
        <h2 className="section-title">In 3 stappen geregeld.</h2>
      </Reveal>
      <Reveal stagger staggerAmount={0.12} y={44} className="grid gap-5 md:grid-cols-3">
        {steps.map(([nr, title, text]) => (
          <div key={nr} className="glass-card p-7">
            <span className="font-display text-5xl font-bold text-kvl-red/45">{nr}</span>
            <h3 className="mt-5 font-display text-xl font-bold uppercase tracking-tight text-white">{title}</h3>
            <p className="mt-3 text-kvl-muted">{text}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
