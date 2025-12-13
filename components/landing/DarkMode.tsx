"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Moon, Sun, Palette } from "lucide-react"

export function DarkMode() {
  return (
    <section id="dark-mode" className="py-16 sm:py-20 md:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
              <Moon className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Dual Mode Support</span>
            </div>
            <h2 className="text-3xl font-bold font-heading tracking-tight sm:text-4xl mb-6">
              Light & Dark Mode Support
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Build themes that work beautifully in both light and dark modes. Define separate color palettes 
              for each mode and preview them in real-time. Your exported code includes both variants, 
              making it easy to implement theme switching in your applications.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Sun className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Light Mode</h3>
                  <p className="text-sm text-muted-foreground">
                    Optimized color palettes for bright interfaces with proper contrast ratios.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Moon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Dark Mode</h3>
                  <p className="text-sm text-muted-foreground">
                    Carefully crafted dark themes that reduce eye strain and look professional.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Palette className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Unified Tokens</h3>
                  <p className="text-sm text-muted-foreground">
                    All other tokens (spacing, typography, shadows) work seamlessly across both modes.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Sun className="h-4 w-4" />
                    <CardTitle className="text-sm">Light Mode</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="h-8 rounded bg-primary"></div>
                    <div className="h-8 rounded bg-secondary"></div>
                    <div className="h-8 rounded bg-muted"></div>
                    <div className="h-8 rounded bg-accent"></div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-2 bg-card text-card-foreground hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Moon className="h-4 w-4" />
                    <CardTitle className="text-sm">Dark Mode</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="h-8 rounded bg-primary"></div>
                    <div className="h-8 rounded bg-secondary"></div>
                    <div className="h-8 rounded bg-muted"></div>
                    <div className="h-8 rounded bg-accent"></div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
