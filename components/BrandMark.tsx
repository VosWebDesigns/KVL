import { siteConfig } from "@/lib/site";

export function BrandMark({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = { sm: "h-10 w-10", md: "h-12 w-12", lg: "h-28 w-28" };
  const textSizes = { sm: "text-sm", md: "text-base", lg: "text-4xl" };

  return (
    <div
      className={`relative ${sizes[size]} shrink-0 overflow-hidden rounded-full border border-white/15 bg-black bg-cover bg-center shadow-red`}
      style={{ backgroundImage: `url(${siteConfig.logo})` }}
      aria-label="KVL Automotive logo"
      role="img"
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_35%,rgba(229,9,20,.28),transparent_50%)]" />
      <div className="absolute inset-0 grid place-items-center">
        <span className={`${textSizes[size]} font-black italic tracking-tighter text-white drop-shadow-lg`}>
          K<span className="text-kvl-red">V</span>L
        </span>
      </div>
    </div>
  );
}
