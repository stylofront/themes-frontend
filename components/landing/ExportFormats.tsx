"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, FileCode, FileJson, FileText } from "lucide-react"

const formats = [
  {
    icon: Code,
    title: "CSS",
    description: "Standard CSS with custom properties (CSS variables). Ready to use in any project.",
    extension: ".css",
    features: ["CSS Variables", "Browser Compatible", "No Build Step"],
  },
  {
    icon: FileCode,
    title: "SCSS",
    description: "SCSS variables and mixins. Perfect for projects using Sass preprocessor.",
    extension: ".scss",
    features: ["SCSS Variables", "Mixins Ready", "Import & Use"],
  },
  {
    icon: FileText,
    title: "SASS",
    description: "SASS syntax with indented style. Clean and minimal syntax.",
    extension: ".sass",
    features: ["SASS Syntax", "Indented Style", "Clean Code"],
  },
  {
    icon: FileJson,
    title: "JSON",
    description: "Raw JSON format. Perfect for JavaScript/TypeScript projects and theme management.",
    extension: ".json",
    features: ["Raw Data", "API Ready", "TypeScript Compatible"],
  },
]

export function ExportFormats() {
  return (
    <section id="export-formats" className="py-16 sm:py-20 md:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold font-heading tracking-tight sm:text-4xl mb-4">
            Export Formats You Get
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the format that works best for your stack. All formats include complete theme tokens.
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {formats.map((format) => {
            const Icon = format.icon
            return (
              <Card key={format.title} className="border-2 h-full flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{format.title}</CardTitle>
                    <Badge variant="outline" className="text-xs font-mono">
                      {format.extension}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 pt-0 space-y-4">
                  <CardDescription className="text-base leading-relaxed">
                    {format.description}
                  </CardDescription>
                  
                  <div className="space-y-2 pt-2 border-t border-border">
                    {format.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
