"use client"

import { Briefcase, GraduationCap, Award, Sparkles } from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedGradientBorder } from "@/components/ui/animated-gradient-border"
import { SectionHeading } from "@/components/sections/section-heading"
import { certificates, education, experience, skills } from "@/lib/content"

const brandBorder = ["#e8a497", "#99afac", "#e8a497", "#99afac"]

function Period({ children, current = false }: { children: string; current?: boolean }) {
  return (
    <span
      className={`w-fit rounded-full px-3 py-1 text-xs font-medium ${
        current ? "bg-sage/25 text-sage-deep dark:text-sage" : "bg-muted text-muted-foreground"
      }`}
    >
      {children}
    </span>
  )
}

export function ExperienceSection() {
  return (
    <section id="zkusenosti" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30 overflow-hidden">
      <div className="container px-6 md:px-8">
        <SectionHeading
          title="Zkušenosti a vzdělání"
          description="Od vedení prodejního týmu přes marketing v technologické firmě až po vlastní praxi na volné noze."
        />

        <ScrollReveal delay={0.2}>
          <Tabs defaultValue="praxe" className="w-full">
            <div className="flex justify-center mb-10">
              <AnimatedGradientBorder
                colors={brandBorder}
                borderWidth={1}
                duration={8}
                containerClassName="rounded-full max-w-full"
                className="rounded-full"
              >
                <TabsList className="glassmorphic-tabs h-auto flex-wrap justify-center border-0">
                  <TabsTrigger value="praxe" className="rounded-full gap-1.5">
                    <Briefcase className="h-4 w-4" /> Praxe
                  </TabsTrigger>
                  <TabsTrigger value="certifikace" className="rounded-full gap-1.5">
                    <Award className="h-4 w-4" /> Certifikace
                  </TabsTrigger>
                  <TabsTrigger value="vzdelani" className="rounded-full gap-1.5">
                    <GraduationCap className="h-4 w-4" /> Vzdělání
                  </TabsTrigger>
                  <TabsTrigger value="dovednosti" className="rounded-full gap-1.5">
                    <Sparkles className="h-4 w-4" /> Dovednosti
                  </TabsTrigger>
                </TabsList>
              </AnimatedGradientBorder>
            </div>

            <TabsContent value="praxe">
              <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
                {experience.map((item) => (
                  <Card key={item.title} className={`glassmorphic-card ${item.current ? "border-glow-rose" : ""}`}>
                    <CardHeader className="space-y-3">
                      <Period current={item.current}>{item.period}</Period>
                      <div>
                        <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                        <p className="text-sm font-medium text-primary">{item.org}</p>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.text}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="certifikace">
              <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
                {certificates.map((item) => (
                  <Card key={item.title} className="glassmorphic-card border-glow-sage">
                    <CardHeader className="space-y-3">
                      <Period>{`Vydáno ${item.period}`}</Period>
                      <div>
                        <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                        <p className="text-sm font-medium text-primary">{item.org}</p>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.text}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="vzdelani">
              <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 md:grid-cols-2">
                {education.map((item) => (
                  <Card key={item.title} className="glassmorphic-card">
                    <CardHeader className="flex-row items-center gap-4 space-y-0">
                      <div className="glassmorphic-avatar flex h-11 w-11 shrink-0 items-center justify-center">
                        <GraduationCap className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold tracking-tight">{item.title}</h3>
                        {item.text && <p className="text-sm text-muted-foreground">{item.text}</p>}
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="dovednosti">
              <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
                {skills.map((group) => (
                  <Card key={group.group} className="glassmorphic-card">
                    <CardHeader>
                      <h3 className="text-lg font-semibold tracking-tight">{group.group}</h3>
                    </CardHeader>
                    <CardContent>
                      <ul className="flex flex-wrap gap-2">
                        {group.items.map((skill) => (
                          <li
                            key={skill}
                            className="rounded-full border border-border px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                          >
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </ScrollReveal>
      </div>
    </section>
  )
}
