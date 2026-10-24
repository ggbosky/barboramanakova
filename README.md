# Barbora Maňáková – osobní web

Web pro Barboru Maňákovou (online marketing, sociální sítě, design). Postavený na Next.js boilerplatu
(shadcn/ui + Framer Motion) s barvami jejího brandu – krémová, tmavě zelená, pudrově růžová a šalvějová.
Web má jen tmavý vzhled.

## Úpravy obsahu

Všechny texty jsou v **`lib/content.ts`** – služby, zkušenosti, certifikáty, FAQ, kontakty.
Fotka je v `public/barbora.jpg`. Barvy jsou v `app/globals.css` (proměnné na začátku souboru).

Ještě doplnit: e-mail a telefon (`site.email`, `site.phone` v `lib/content.ts`) a fotku ve vyšším rozlišení.

## Vývoj

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # statický export do složky out/
pnpm start    # lokální náhled složky out/
```

## Nasazení

Web se exportuje jako statické soubory (`out/`), takže jde nahrát kamkoli –
Vercel, Netlify, GitHub Pages nebo běžný webhosting.
