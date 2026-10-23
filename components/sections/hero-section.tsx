"use client"

import { motion, type Variants } from "framer-motion"
import Link from "next/link"
import { ArrowRight, MapPin } from "lucide-react"

import { SpotlightCard } from "@/components/ui/spotlight-card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { GradientButton } from "@/components/ui-library/buttons/gradient-button"
import { hero, site } from "@/lib/content"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function HeroSection() {
  return (
    <section id="uvod" className="relative w-full pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      <AnimatedBackground
        variant="gradient"
        color="rgba(232, 164, 151, 0.12)"
        secondaryColor="rgba(153, 175, 172, 0.12)"
      />

      <div className="container px-6 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_440px] xl:grid-cols-[1fr_500px] items-center">
          <motion.div
            className="flex flex-col justify-center space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-primary" />
                {hero.badge}
              </span>
            </motion.div>

            <motion.div className="space-y-4" variants={itemVariants}>
              <h1 className="text-4xl font-heading font-bold tracking-tighter sm:text-5xl xl:text-7xl/none">
                <span className="gradient-text">{hero.titleGradient}</span>
                <br />
                <span className="text-foreground">{hero.title}</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">{hero.lead}</p>
            </motion.div>

            <motion.div className="flex flex-col gap-6 sm:flex-row sm:items-center" variants={itemVariants}>
              <GradientButton glowAmount={5} className="px-6 py-2.5 text-base" asChild>
                <Link href="#kontakt" className="flex items-center">
                  Chci spolupráci
                  <motion.span
                    className="ml-2 inline-block"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, repeatDelay: 2, duration: 1 }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </Link>
              </GradientButton>

              <MagneticButton className="neumorphic-button self-start sm:self-auto">
                <Link href="#sluzby" className="px-6 py-2.5 block font-medium">
                  Co dělám
                </Link>
              </MagneticButton>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-2">
              <p className="text-sm text-muted-foreground flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-sage" />
                {hero.note}
              </p>
            </motion.div>
          </motion.div>

          <ScrollReveal delay={0.3}>
            <SpotlightCard className="relative mx-auto aspect-[4/5] w-full max-w-[460px] lg:max-w-none overflow-hidden rounded-2xl border glassmorphic-card p-2 border-glow-rose">
              <div className="absolute inset-0 bg-gradient-to-br from-rose/20 via-transparent to-sage/20 z-10 pointer-events-none"></div>
              <div className="relative h-full w-full overflow-hidden rounded-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={site.photo}
                  alt={site.name}
                  className="h-full w-full object-cover object-[50%_30%]"
                  width={400}
                  height={400}
                />
                <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-5 pt-20">
                  <p className="font-heading text-xl font-semibold text-white">{site.name}</p>
                  <p className="text-sm text-white/80">{site.role}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {hero.photoChips.map((chip, i) => (
                      <motion.span
                        key={chip}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 + i * 0.2 }}
                        whileHover={{ scale: 1.05 }}
                        className="rounded-lg border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-md"
                      >
                        {chip}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
