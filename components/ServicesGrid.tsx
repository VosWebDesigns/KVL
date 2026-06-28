import { services } from "@/lib/services";
import Reveal from "./Reveal";
import ServiceCard from "./ServiceCard";

export default function ServicesGrid({ limit, compact = false }: { limit?: number; compact?: boolean }) {
  const visible = typeof limit === "number" ? services.slice(0, limit) : services;
  return (
    <Reveal stagger staggerAmount={0.08} y={40} className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {visible.map((service) => (
        <ServiceCard key={service.title} service={service} compact={compact} />
      ))}
    </Reveal>
  );
}
