"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedText } from "@/components/ui/animated-text"

interface SectionHeadingProps {
  title: string
  description?: string
  gradient?: boolean
}

export function SectionHeading({ title, description, gradient = true }: SectionHeadingProps) {
  return (
    <ScrollReveal>
      <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
        <div className="space-y-4">
          <AnimatedText
            text={title}
            variant="heading"
            className={`text-3xl font-heading font-bold tracking-tighter sm:text-5xl ${gradient ? "gradient-text" : ""}`}
            animation="slide"
          />
          {description && (
            <AnimatedText
              text={description}
              variant="paragraph"
              className="mx-auto max-w-[760px] text-muted-foreground opacity-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
              animation="fade"
              delay={0.3}
            />
          )}
        </div>
      </div>
    </ScrollReveal>
  )
}
