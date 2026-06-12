const steps = [
  ["01", "Stuur een WhatsApp", "Vertel kort wat je nodig hebt, eventueel met kenteken en klachtomschrijving."],
  ["02", "Duidelijke inschatting", "Je ontvangt eerlijk advies over de werkzaamheden, planning en vanafprijs."],
  ["03", "Service zonder gedoe", "We voeren het werk netjes uit en houden contact als er iets verandert."],
];

export default function Process() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-2xl"><p className="text-sm font-black uppercase tracking-[0.28em] text-kvl-red">Werkwijze</p><h2 className="mt-3 text-4xl font-black tracking-tight text-white">In 3 stappen geregeld.</h2></div>
      <div className="grid gap-5 md:grid-cols-3">{steps.map(([nr, title, text]) => <div key={nr} className="rounded-3xl border border-white/10 bg-kvl-panel p-7"><span className="text-5xl font-black text-kvl-red/50">{nr}</span><h3 className="mt-5 text-xl font-black text-white">{title}</h3><p className="mt-3 text-kvl-muted">{text}</p></div>)}</div>
    </section>
  );
}
