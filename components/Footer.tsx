import Link from "next/link";
import { services } from "@/lib/services";
import { navItems, siteConfig } from "@/lib/site";
import { BrandMark } from "./BrandMark";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2"><div className="flex items-center gap-3"><BrandMark size="sm" /><span className="text-xl font-black italic text-white">K<span className="text-kvl-red">V</span>L Automotive</span></div><p className="mt-4 max-w-md text-kvl-muted">Professionele autoservice in Lelystad en omgeving. Betrouwbaar, persoonlijk en duidelijk geprijsd.</p></div>
        <div><h3 className="font-black text-white">Quick links</h3><ul className="mt-4 space-y-3">{navItems.map((item) => <li key={item.href}><Link className="text-kvl-muted hover:text-white" href={item.href}>{item.label}</Link></li>)}</ul></div>
        <div><h3 className="font-black text-white">Contact</h3><ul className="mt-4 space-y-3 text-kvl-muted"><li>{siteConfig.phone}</li><li>{siteConfig.email}</li><li>{siteConfig.location}</li></ul></div>
        <div className="md:col-span-4"><h3 className="font-black text-white">Diensten</h3><div className="mt-4 flex flex-wrap gap-2">{services.slice(0, 8).map((s) => <span key={s.title} className="rounded-full border border-white/10 px-3 py-1 text-sm text-kvl-muted">{s.title}</span>)}</div></div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-kvl-muted">© KVL Automotive. Alle rechten voorbehouden.</div>
    </footer>
  );
}
