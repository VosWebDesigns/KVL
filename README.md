# KVL Automotive — Premium Redesign

Cinematic, motion-first redesign van de KVL Automotive website. Next.js 14 (App Router) +
Tailwind, met een Three.js hero-scene, GSAP/ScrollTrigger reveals en Lenis voor ultra-smooth
scroll. Alle bestaande content (diensten, prijzen, contact, WhatsApp-flow) is behouden.

## Wat is er toegevoegd

- **Three.js hero-scene** (`components/HeroScene.tsx`) — procedurele 3D-scene met gloeiende
  koplamp-ringen, een garage-grid-vloer en zwevende stofdeeltjes. Reageert op muisbeweging en
  doet een camera-dolly op scroll. Geen externe GLTF-bestanden nodig, dus niets kan ontbreken.
- **GSAP + ScrollTrigger** (`components/Reveal.tsx`) — herbruikbare scroll-reveal wrapper,
  gebruikt op alle secties voor cinematic onthullingen en stagger-animaties.
- **Lenis smooth scroll** (`components/SmoothScroll.tsx`) — vervangt het verouderde
  Locomotive Scroll; zelfde premium scroll-gevoel, actief onderhouden.
- **Glassmorphism UI** — `.glass-panel` / `.glass-card` / `.glass-nav` utility classes in
  `app/globals.css`, gebruikt voor navigatie, servicekaarten en contactformulier.
- **Nieuwe typografie** — Oswald (condensed, industrial) voor headlines/labels, Inter voor
  body-tekst. Geladen via `next/font/google`, geen losse font-bestanden nodig.
- **`prefers-reduced-motion`** wordt overal gerespecteerd: alle animaties vallen netjes terug
  op een statische, volledig leesbare staat.

## Installeren

```bash
npm install
npm run dev
```

Dit voegt drie nieuwe dependencies toe t.o.v. de vorige versie: `gsap`, `lenis`, `three`
(plus `@types/three` als dev-dependency). Alles staat al in `package.json`.

## Logo & prijslijst-afbeelding

`public/images/` is leeg. Als je de originele `kvl-logo.jpeg` en `kvl-prijslijst.jpeg` wilt
gebruiken, plaats ze daar terug — de prijslijst-afbeelding wordt momenteel niet meer gebruikt
(vervangen door een glassmorphism kop op de prijzen-pagina), het logo wordt nu als CSS-gegenereerd
"KVL" merk-mark getoond in plaats van een afbeelding.

## Build / typecheck

```bash
npm run typecheck
npm run build
```

## Performance-tip

De Three.js-scene rendert continu (`requestAnimationFrame`). Op zwaardere pagina's met veel
content kun je `HeroScene` desgewenst lazy-loaden met `next/dynamic` (`ssr: false`) als je
Lighthouse-scores wilt optimaliseren — momenteel staat hij direct in `Hero.tsx` omdat hij alleen
op de hero-sectie zelf draait.
