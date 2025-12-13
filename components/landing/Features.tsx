"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Download, Moon, Palette, Code, Sparkles } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Real-time Preview",
    description: "See your theme changes instantly as you customize colors, spacing, and typography.",
  },
  {
    icon: Download,
    title: "Export Multiple Formats",
    description: "Download your theme as CSS, SCSS, SASS, or JSON. Ready to use in any project.",
  },
  {
    icon: Moon,
    title: "Light & Dark Mode",
    description: "Design themes for both light and dark modes with separate color palettes.",
  },
  {
    icon: Palette,
    title: "Custom Tokens",
    description: "Add custom colors, shadows, spacing, and typography tokens to match your needs.",
  },
  {
    icon: Code,
    title: "Fast Code Generation",
    description: "Powered by Rust and WebAssembly for lightning-fast theme code generation.",
  },
  {
    icon: Sparkles,
    title: "No Sign-up Required",
    description: "Start creating themes immediately. Your work is saved locally in your browser.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-16 sm:py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold font-heading tracking-tight sm:text-4xl mb-4">
            Everything You Need
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful features to create professional design systems
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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

