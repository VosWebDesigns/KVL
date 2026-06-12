export type Service = {
  title: string;
  subtitle: string;
  price?: string;
  badge: string;
  popular?: boolean;
  points?: string[];
  extra?: string;
  items?: string[];
};

export const services: Service[] = [
  {
    title: "Onderhoudsbeurt",
    subtitle: "Kleine onderhoudsbeurt",
    price: "Vanaf €180",
    badge: "Vanaf",
    popular: true,
    points: ["Olie verversen inclusief olie", "Oliefilter vervangen", "Controle van alle vloeistoffen", "Algemene controle"],
    extra: "Grote onderhoudsbeurt vanaf €300",
  },
  {
    title: "Airco Service",
    subtitle: "Afvullen & controle",
    price: "Vanaf €100",
    badge: "Controle",
    points: ["Airco systeem controleren", "Vacuüm trekken", "Bijvullen koudemiddel", "Controle op lekkages"],
    extra: "Airco reiniging vanaf €40",
  },
  {
    title: "Remmen Service Voorzijde",
    subtitle: "Remblokken vervangen voorzijde",
    price: "Vanaf €100 arbeid",
    badge: "Arbeid",
    popular: true,
    points: ["Remblokken vervangen", "Remschijven vervangen indien nodig", "Remmen reinigen & smeren", "Veiligheidscontrole"],
    extra: "Remschijven + blokken voor vanaf €150",
  },
  {
    title: "Remmen Service Achterzijde",
    subtitle: "Remblokken vervangen achterzijde",
    price: "Vanaf €100 arbeid",
    badge: "Arbeid",
    points: ["Remblokken vervangen", "Remschijven vervangen indien nodig", "Remmen reinigen & smeren", "Veiligheidscontrole"],
    extra: "Remschijven + blokken achter vanaf €150",
  },
  {
    title: "Bandenservice",
    subtitle: "Wisselen & balanceren",
    price: "Vanaf €50",
    badge: "Vanaf",
    points: ["Banden wisselen", "Balanceren", "Bandenspanning controleren", "Ventielen controleren"],
  },
  {
    title: "APK Klaar Maken",
    subtitle: "Controle & advies",
    price: "Vanaf €60",
    badge: "Controle",
    points: ["Controle op APK-punten", "Advies voor afkeurpunten", "Uitgebreide controle", "Geen APK afmelding"],
  },
  {
    title: "Accu Vervangen",
    subtitle: "Accu vervangen",
    price: "Vanaf €40 arbeid",
    badge: "Arbeid",
    points: ["Oude accu verwijderen", "Accu plaatsen & aansluiten", "Laadsysteem controleren"],
  },
  {
    title: "Lamp Vervangen",
    subtitle: "Lamp vervangen",
    price: "Vanaf €15 arbeid",
    badge: "Arbeid",
    points: ["Defecte lamp vervangen", "Werking controleren", "Snelle service"],
  },
  {
    title: "Overige Service",
    subtitle: "Diverse werkzaamheden",
    badge: "Op aanvraag",
    items: ["Airco reiniging vanaf €40", "Ruitenwissers vervangen vanaf €25", "Accu check vanaf €10", "Kleine reparaties op aanvraag"],
  },
];

export const priceCondition =
  "Prijzen zijn vanafprijzen en exclusief onderdelen, tenzij anders vermeld. De exacte prijs is afhankelijk van het type auto en de werkzaamheden.";
