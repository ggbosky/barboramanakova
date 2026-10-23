import { HeroSection } from "@/components/sections/hero-section"
import { ServicesSection } from "@/components/sections/services-section"
import { AboutSection } from "@/components/sections/about-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { ProcessSection } from "@/components/sections/process-section"
import { FaqSection } from "@/components/sections/faq-section"
import { CtaSection } from "@/components/sections/cta-section"
import { MouseGlow } from "@/components/ui-library/effects/mouse-glow"

export default function HomePage() {
  return (
    <main className="flex flex-col items-center relative">
      {/* Jemná růžová záře za kurzorem */}
      <MouseGlow
        color="rgba(232, 164, 151, 0.14)"
        size={600}
        blur={150}
        opacity={0.6}
        followSpeed={0.05}
        pulseEffect={true}
        pulseSpeed={4}
        pulseScale={1.05}
      />

      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ExperienceSection />
      <ProcessSection />
      <FaqSection />
      <CtaSection />
    </main>
  )
}
