"use client"

import { BarChart3, Instagram, Mail, Megaphone, Palette, PenLine, type LucideIcon } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { GlowingTiltCard } from "@/components/ui/glowing-tilt-card"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { SectionHeading } from "@/components/sections/section-heading"
import { services } from "@/lib/content"

const icons: Record<string, LucideIcon> = {
  instagram: Instagram,
  palette: Palette,
  megaphone: Megaphone,
  pen: PenLine,
  mail: Mail,
  chart: BarChart3,
}

export function ServicesSection() {
  return (
    <section id="sluzby" className="relative w-full py-12 md:py-24 lg:py-32 bg-muted/30 overflow-hidden">
      <AnimatedBackground variant="dots" color="rgba(153, 175, 172, 0.25)" />

      <div className="container px-6 md:px-8">
        <SectionHeading
          title="S čím vám pomohu"
          description="Od jednoho příspěvku až po kompletní správu marketingu. Pracuji s firmami i živnostníky, kteří chtějí online prezentaci, která přivádí zákazníky."
        />

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[service.icon]
            const rose = index % 2 === 0
            return (
              <ScrollReveal key={service.title} delay={index * 0.1}>
                <GlowingTiltCard className="h-full">
                  <Card
                    className={`h-full glassmorphic-card overflow-hidden group soft-glow ${rose ? "border-glow-rose" : "border-glow-sage"}`}
                  >
                    <CardHeader>
                      <div className="p-2.5 rounded-xl w-fit bg-muted/60 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <Icon className={`h-9 w-9 ${rose ? "text-primary" : "text-sage-deep dark:text-sage"}`} />
                      </div>
                      <CardTitle className="mt-4 text-xl tracking-tight relative w-fit">
                        {service.title}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-5">
                      <CardDescription className="text-base">{service.description}</CardDescription>
                      <ul className="flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <li
                            key={tag}
                            className="rounded-full border border-border bg-background/50 px-3 py-1 text-xs font-medium text-muted-foreground"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </GlowingTiltCard>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
