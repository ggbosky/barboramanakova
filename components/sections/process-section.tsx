"use client"

import { motion } from "framer-motion"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { SectionHeading } from "@/components/sections/section-heading"
import { process } from "@/lib/content"

export function ProcessSection() {
  return (
    <section id="spoluprace" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <SectionHeading
          title="Jak probíhá spolupráce"
          description="Jednoduše, srozumitelně a bez zbytečných formalit. Vždy víte, co se děje a proč."
        />

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((item, index) => (
            <ScrollReveal key={item.step} delay={index * 0.1}>
              <motion.div className="h-full" whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card
                  className={`relative h-full glassmorphic-card overflow-hidden ${index === 0 ? "border-glow-rose" : ""}`}
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-2 -top-6 font-heading text-8xl font-bold text-primary/10"
                  >
                    {item.step}
                  </span>
                  <CardHeader>
                    <span className="font-heading text-sm font-semibold text-primary">Krok {item.step}</span>
                    <h3 className="text-xl font-semibold tracking-tight">{item.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
