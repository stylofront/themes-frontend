"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Palette, Zap, Download } from "lucide-react"

const features = [
  {
    icon: Palette,
    title: "Visual Theme Builder",
    description: "Create complete design systems with an intuitive visual interface. No coding required to get started.",
  },
  {
    icon: Zap,
    title: "Real-Time Preview",
    description: "See your theme changes instantly as you customize colors, spacing, typography, and shadows.",
  },
  {
    icon: Code,
    title: "Production-Ready Code",
    description: "Export clean, optimized CSS, SCSS, SASS, or JSON code that's ready to use in your projects.",
  },
  {
    icon: Download,
    title: "Multiple Export Formats",
    description: "Get your theme in the format that works best for your stack. CSS variables, SCSS variables, or raw JSON.",
  },
]

export function WhatIs() {
  return (
    <section id="what-is" className="py-16 sm:py-20 md:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold font-heading tracking-tight sm:text-4xl mb-4">
            What Is StyloFront Theme Generator?
          </h2>
          <p className="text-lg text-muted-foreground">
            A powerful, developer-first tool for creating complete design systems and themes. 
            Build production-ready themes with visual controls and export them in multiple formats.
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card key={feature.title} className="border-2 h-full flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 pt-0">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
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
