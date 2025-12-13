"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LiquidButton } from "@/components/animate-ui/components/buttons/liquid"
import Link from "next/link"
import { Wand2 } from "lucide-react"

const steps = [
  {
    number: "1",
    title: "Customize Your Theme",
    description: "Adjust colors, spacing, typography, shadows, and more. Add custom tokens as needed.",
  },
  {
    number: "2",
    title: "See Live Preview",
    description: "Watch your changes update in real-time. Toggle between light and dark modes.",
  },
  {
    number: "3",
    title: "Export & Use",
    description: "Download your theme as CSS, SCSS, SASS, or JSON. Copy and paste into your project.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-20 md:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold font-heading tracking-tight sm:text-4xl mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Build professional themes in three effortless steps
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <Card key={step.number} className="border-2 h-full flex flex-col hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary text-xl font-bold">
                  {step.number}
                </div>
                <CardTitle className="text-lg">{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 pt-0">
                <CardDescription className="text-base leading-relaxed">
                  {step.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <LiquidButton asChild size="lg" variant="default" className="text-base h-12 px-8">
            <Link href="/generator" className="flex items-center gap-2">
              <Wand2 className="h-5 w-5" />
              Start Creating
            </Link>
          </LiquidButton>
        </div>
      </div>
    </section>
  )
}

