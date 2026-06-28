import type { Service } from "@/lib/services";

export default function ServiceCard({ service, compact = false }: { service: Service; compact?: boolean }) {
  return (
    <article className="glass-card group p-6 hover:-translate-y-1 hover:border-kvl-red/50 hover:shadow-redLg">
      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-kvl-red/10 blur-2xl transition duration-500 group-hover:bg-kvl-red/25" />
      <div className="relative flex items-start justify-between gap-4">
        <div>
          <span className="inline-flex rounded-full border border-kvl-red/40 bg-kvl-red/10 px-3 py-1 font-display text-xs font-semibold uppercase tracking-wider text-kvl-red">
            {service.badge}
          </span>
          {service.popular && (
            <span className="ml-2 inline-flex rounded-full border border-white/15 px-3 py-1 font-display text-xs font-semibold uppercase tracking-wider text-white/80">
              Populair
            </span>
          )}
          <h3 className="mt-5 font-display text-2xl font-bold uppercase tracking-tight text-white">{service.title}</h3>
          <p className="mt-1 text-sm font-medium text-zinc-300">{service.subtitle}</p>
        </div>
        <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-white/10 bg-black/40 text-kvl-red backdrop-blur-sm">
          <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth="2">
            <path d="M14.7 6.3a4 4 0 0 0-5 5L4 17v3h3l5.7-5.7a4 4 0 0 0 5-5l-2.6 2.6-2.8-2.8 2.4-2.8Z" />
          </svg>
        </div>
      </div>
      {service.price && (
        <p className="relative mt-6 font-display text-3xl font-bold text-white">
          <span className="font-display text-base font-semibold uppercase text-kvl-muted">Vanaf </span>
          {service.price.replace("Vanaf ", "")}
        </p>
      )}
      <ul className={`relative mt-6 space-y-3 ${compact ? "text-sm" : ""}`}>
        {(service.points ?? service.items ?? []).map((point) => (
          <li key={point} className="flex gap-3 text-zinc-300">
            <span className="mt-0.5 text-kvl-red">✓</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
      {service.extra && (
        <div className="relative mt-6 rounded-2xl border border-kvl-red/30 bg-kvl-red/10 px-4 py-3 text-sm font-semibold text-white backdrop-blur-sm">
          {service.extra}
        </div>
      )}
    </article>
  );
}
