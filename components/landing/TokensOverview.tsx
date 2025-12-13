"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Palette, 
  Type, 
  Ruler, 
  Circle, 
  Box, 
  Layers,
  Sparkles 
} from "lucide-react"

const tokenCategories = [
  {
    icon: Palette,
    title: "Colors",
    description: "Primary, secondary, background, surface, text, and custom colors with light/dark variants",
    count: "12+ color tokens",
  },
  {
    icon: Type,
    title: "Typography",
    description: "Font families, sizes, weights, line heights, and letter spacing",
    count: "20+ typography tokens",
  },
  {
    icon: Ruler,
    title: "Spacing",
    description: "Consistent spacing scale from xs to 2xl for padding, margins, and gaps",
    count: "10 spacing tokens",
  },
  {
    icon: Circle,
    title: "Border Radius",
    description: "Rounded corners for buttons, cards, and UI elements",
    count: "6 radius tokens",
  },
  {
    icon: Box,
    title: "Shadows",
    description: "Elevation and depth with multiple shadow presets",
    count: "8 shadow tokens",
  },
  {
    icon: Layers,
    title: "Custom Tokens",
    description: "Add your own custom colors, shadows, and design tokens",
    count: "Unlimited",
  },
]

export function TokensOverview() {
  return (
    <section id="tokens" className="py-16 sm:py-20 md:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Complete Design System</span>
          </div>
          <h2 className="text-3xl font-bold font-heading tracking-tight sm:text-4xl mb-4">
            What a Theme Includes
          </h2>
          <p className="text-lg text-muted-foreground">
            Every theme comes with a comprehensive set of design tokens covering all aspects of your design system.
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {tokenCategories.map((category) => {
            const Icon = category.icon
            return (
              <Card key={category.title} className="border-2 h-full flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                    <Badge variant="secondary" className="text-xs">
                      {category.count}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 pt-0">
                  <CardDescription className="text-base leading-relaxed">
                    {category.description}
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
