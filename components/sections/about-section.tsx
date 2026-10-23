"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { BadgeCheck, Handshake, Layers, type LucideIcon } from "lucide-react"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { SectionHeading } from "@/components/sections/section-heading"
import { about } from "@/lib/content"

const icons: Record<string, LucideIcon> = {
  handshake: Handshake,
  badge: BadgeCheck,
  layers: Layers,
}

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [current, setCurrent] = useState(value)

  useEffect(() => {
    if (!inView) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const start = performance.now()
    let frame = 0
    const tick = (now: number) => {
      const p = Math.min((now - start) / 1400, 1)
      setCurrent(Math.round(value * (1 - Math.pow(1 - p, 3))))
      if (p < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, value])

  return (
    <span ref={ref} className="tabular-nums">
      {current}
      {suffix}
    </span>
  )
}

export function AboutSection() {
  return (
    <section id="o-mne" className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
      <AnimatedBackground variant="waves" color="rgba(232, 164, 151, 0.12)" />

      <div className="container px-4 md:px-6">
        <SectionHeading title={about.title} description={about.text} />

        <ScrollReveal delay={0.1}>
          <div className="mx-auto grid max-w-5xl grid-cols-3 gap-4 md:gap-6">
            {about.stats.map((stat) => (
              <div
                key={stat.label}
                className="glassmorphic-card border-glow-sage p-4 text-center md:p-6"
              >
                <p className="font-heading text-3xl font-bold text-primary md:text-5xl">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-xs text-muted-foreground md:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 pt-6 md:grid-cols-3">
          {about.reasons.map((reason, index) => {
            const Icon = icons[reason.icon]
            return (
              <ScrollReveal key={reason.title} delay={index * 0.1}>
                <motion.div className="h-full" whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="h-full glassmorphic-card group">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          className="glassmorphic-avatar flex h-11 w-11 shrink-0 items-center justify-center border-2 border-transparent transition-colors group-hover:border-primary"
                        >
                          <Icon className="h-5 w-5 text-primary" />
                        </motion.div>
                        <h3 className="text-lg font-medium tracking-tight transition-colors group-hover:text-primary">
                          {reason.title}
                        </h3>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{reason.text}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
