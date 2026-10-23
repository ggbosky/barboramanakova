"use client"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedText } from "@/components/ui/animated-text"
import { AnimatedGradientBorder } from "@/components/ui/animated-gradient-border"
import { GradientButton } from "@/components/ui-library/buttons/gradient-button"
import { OutlineButton } from "@/components/ui-library/buttons/button-variants"
import { site } from "@/lib/content"

export function CtaSection() {
  return (
    <section id="kontakt" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-rose/15 via-transparent to-sage/15">
      <div className="container px-6 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={site.photo}
              alt=""
              width={96}
              height={96}
              className="h-24 w-24 rounded-full border-4 border-primary/30 object-cover"
            />
            <div className="space-y-4">
              <AnimatedText
                text="Chcete být vidět online?"
                variant="heading"
                className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl gradient-text"
                animation="wave"
              />
              <p className="mx-auto max-w-[680px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ať potřebujete oživit sociální sítě, spustit reklamu nebo postavit celou marketingovou strategii – napište
                mi a probereme, jak vám můžu pomoct.
              </p>
            </div>
            <motion.div
              className="flex flex-col gap-6 sm:flex-row sm:gap-6 mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <GradientButton glowAmount={5} size="lg" className="px-8 py-3" asChild>
                <Link href={site.linkedin} target="_blank" rel="noreferrer" className="flex items-center">
                  Napsat na LinkedIn
                  <motion.span
                    className="ml-2 inline-block"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, repeatDelay: 2, duration: 1 }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </Link>
              </GradientButton>

              <AnimatedGradientBorder colors={["#e8a497", "#99afac", "#e8a497", "#99afac"]} borderWidth={1} duration={6}>
                <OutlineButton size="lg" className="bg-background w-full h-full border-0 px-8 py-3" asChild>
                  <Link href="#sluzby">Prohlédnout služby</Link>
                </OutlineButton>
              </AnimatedGradientBorder>
            </motion.div>
            {(site.email || site.phone) && (
              <p className="text-sm text-muted-foreground">
                {site.email && <span className="select-all">{site.email}</span>}
                {site.email && site.phone && " · "}
                {site.phone && <span className="select-all">{site.phone}</span>}
              </p>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
