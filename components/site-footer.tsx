import Link from "next/link"
import { MapPin } from "lucide-react"

import { Icons } from "@/components/icons"
import { ScrollToTopButton } from "@/components/scroll-to-top-button"
import { navItems, site } from "@/lib/content"

export function SiteFooter() {
  return (
    <footer className="border-t bg-background/80 backdrop-blur-lg">
      <div className="container flex flex-col gap-10 py-16">
        <div className="flex flex-col gap-10 md:flex-row">
          <div className="flex flex-1 flex-col gap-4">
            <Link href="#uvod" className="flex items-center gap-2">
              <Icons.logo className="h-8 w-8" />
              <span className="font-heading font-semibold text-xl tracking-tight">{site.name}</span>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Online marketing, sociální sítě a design pro firmy a podnikatele, kteří chtějí růst.
            </p>
            <div className="flex gap-4">
              <Link href={site.linkedin} target="_blank" rel="noreferrer" className="glassmorphic-icon">
                <Icons.linkedin className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-10">
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium tracking-tight">Stránky</h3>
              <ul className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium tracking-tight">Kontakt</h3>
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                <li>
                  <Link href={site.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground">
                    LinkedIn – napište mi
                  </Link>
                </li>
                {site.email && <li className="select-all">{site.email}</li>}
                {site.phone && <li className="select-all">{site.phone}</li>}
                <li className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-primary" />
                  {site.location} · i na dálku
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {site.name}. Všechna práva vyhrazena.
          </p>
          <Link href="#uvod" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Zpět nahoru ↑
          </Link>
        </div>
      </div>
      <ScrollToTopButton />
    </footer>
  )
}
