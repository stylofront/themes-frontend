"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Users, Rocket, Building2 } from "lucide-react"

const audiences = [
  {
    icon: Code,
    title: "Frontend Developers",
    description: "Build consistent design systems quickly. Export CSS variables or SCSS for immediate use in your projects.",
  },
  {
    icon: Users,
    title: "Design Teams",
    description: "Create and iterate on design tokens visually. Share themes with developers in standard formats.",
  },
  {
    icon: Rocket,
    title: "Startups & Agencies",
    description: "Speed up project setup. Generate professional themes in minutes instead of hours.",
  },
  {
    icon: Building2,
    title: "Product Teams",
    description: "Maintain design consistency across products. Export themes for multiple projects and platforms.",
  },
]

export function WhoIsFor() {
  return (
    <section id="who-is-for" className="py-16 sm:py-20 md:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold font-heading tracking-tight sm:text-4xl mb-4">
            Who This Tool Is For
          </h2>
          <p className="text-lg text-muted-foreground">
            Whether you're a solo developer or part of a large team, StyloFront Theme Generator 
            helps you create professional design systems faster.
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience) => {
            const Icon = audience.icon
            return (
              <Card key={audience.title} className="border-2 h-full flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{audience.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 pt-0">
                  <CardDescription className="text-base leading-relaxed">
                    {audience.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
