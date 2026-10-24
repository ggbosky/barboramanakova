"use client"

import { motion, type Variants } from "framer-motion"
import Link from "next/link"
import { ArrowRight, MapPin } from "lucide-react"

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
    <section id="uvod" className="relative w-full overflow-hidden pt-28 md:pt-32 lg:pt-28">
      <AnimatedBackground
        variant="gradient"
        color="rgba(232, 164, 151, 0.12)"
        secondaryColor="rgba(153, 175, 172, 0.12)"
      />

      {/* Velké jméno v pozadí */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-24 select-none text-center font-heading font-bold uppercase leading-none tracking-tighter text-foreground/[0.04] text-[18vw] lg:top-20"
      >
        Maňáková
      </div>

      <div className="container relative px-6 md:px-8">
        <div className="grid items-end gap-6 lg:min-h-[640px] lg:grid-cols-[1fr_460px] xl:grid-cols-[1fr_520px]">
          <motion.div
            className="flex flex-col justify-center space-y-6 pb-4 lg:self-center lg:pb-24"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
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

          {/* Barbora stojí přímo na stránce – výřez bez pozadí, ukotvený ke spodní hraně sekce */}
          <div className="relative mx-auto flex w-full max-w-[420px] items-end justify-center self-end lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-1/2 aspect-square w-[95%] -translate-x-1/2 translate-y-[12%] rounded-full bg-[radial-gradient(circle_at_50%_45%,hsl(var(--rose)/0.45),hsl(var(--sage)/0.18)_55%,transparent_72%)] blur-2xl"
            />
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-1/2 aspect-square w-[78%] -translate-x-1/2 translate-y-[18%] rounded-full border border-rose/25"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <motion.img
              src={site.cutout}
              alt={site.name}
              width={280}
              height={360}
              className="relative z-10 w-[86%] max-w-[440px] select-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            />

            <motion.div
              className="glassmorphic-card absolute bottom-4 left-0 z-20 w-36 border-glow-rose p-3 sm:bottom-14 sm:w-52 sm:p-4 lg:-left-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <p className="font-heading text-2xl font-bold text-primary sm:text-3xl">{hero.card.value}</p>
              <p className="text-xs font-medium text-foreground sm:text-sm">{hero.card.label}</p>
              <p className="mt-1 hidden text-xs text-muted-foreground sm:block">{hero.card.sub}</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Plynulý přechod do další sekce */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[15] h-16 bg-gradient-to-b from-transparent to-background/60" />
    </section>
  )
}
