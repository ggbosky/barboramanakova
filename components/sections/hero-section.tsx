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
    <section id="uvod" className="relative w-full pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      <AnimatedBackground
        variant="gradient"
        color="rgba(232, 164, 151, 0.12)"
        secondaryColor="rgba(153, 175, 172, 0.12)"
      />

      <div className="container px-6 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_460px]">
          <motion.div
            className="flex flex-col justify-center space-y-6"
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

          {/* Kulatý portrét s přechodovým rámem – podobně jako logo z jejího LinkedIn banneru */}
          <motion.div
            className="relative mx-auto w-full max-w-[300px] sm:max-w-[360px] lg:max-w-none"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              aria-hidden="true"
              className="absolute -inset-10 rounded-full bg-[radial-gradient(circle,hsl(var(--rose)/0.28),hsl(var(--sage)/0.12)_50%,transparent_70%)] blur-2xl"
            />
            <div className="relative aspect-square rounded-full bg-gradient-to-br from-rose via-blush/70 to-sage p-[6px] shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
              <div className="h-full w-full overflow-hidden rounded-full border-4 border-background">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={site.photo}
                  alt={site.name}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover object-[50%_30%]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
