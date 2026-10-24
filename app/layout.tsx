import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"

import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

import "@/app/globals.css"

// latin-ext kvůli české diakritice
const fontSans = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
})

const fontHeading = Montserrat({
  subsets: ["latin", "latin-ext"],
  variable: "--font-heading",
  weight: ["600", "700"],
})

export const metadata: Metadata = {
  title: "Barbora Maňáková | Online marketing a sociální sítě",
  description:
    "Barbora Maňáková – online marketing na volné noze. Správa sociálních sítí, grafika, copywriting, PPC reklamy, e-mail marketing a SEO. Praha i na dálku.",
  keywords: ["online marketing", "sociální sítě", "freelancer", "PPC", "grafika", "copywriting", "Praha"],
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Barbora Maňáková | Online marketing",
    description: "Sociální sítě, design a online marketing, který prodává. Praha i na dálku.",
    images: ["/barbora.jpg"],
    locale: "cs_CZ",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs" className="dark" style={{ colorScheme: "dark" }}>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased font-light",
          fontSans.variable,
          fontHeading.variable,
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}
