import ContactCTA from "@/components/ContactCTA";
import ServicesGrid from "@/components/ServicesGrid";

export const metadata = { title: "Diensten | KVL Automotive", description: "Alle diensten van KVL Automotive: onderhoud, airco, remmen, banden, accu, lampen, APK-klaar maken en overige service." };

export default function DienstenPage() {
  return <><section className="container-page py-20"><p className="section-label">Diensten</p><h1 className="section-title">Professionele autoservice voor jouw auto.</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-kvl-muted">KVL Automotive werkt direct en persoonlijk. Bekijk alle servicekaarten en neem contact op via WhatsApp voor een passende afspraak.</p><div className="mt-12"><ServicesGrid /></div></section><ContactCTA /></>;
}
