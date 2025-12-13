"use client"

import Link from "next/link"
import { LiquidButton } from "@/components/animate-ui/components/buttons/liquid"
import { Sparkles, Zap, Rocket } from "lucide-react"
import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars"
import { CursorProvider, Cursor, CursorFollow } from "@/components/animate-ui/components/animate/cursor"

export function Hero() {
  return (
    <CursorProvider global={true} >
      <section className="relative overflow-hidden border-b bg-linear-to-b from-primary/5 via-primary/10 to-background dark:from-primary/10 dark:via-primary/5 dark:to-background py-16 sm:py-20 md:py-32 min-h-[500px] sm:min-h-[600px] flex items-center">
        <Cursor />
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <StarsBackground 
            className="h-full w-full bg-linear-to-b from-primary/10 via-primary/5 to-transparent dark:from-primary/20 dark:via-primary/10 dark:to-transparent" 
            starColor="hsl(var(--primary))"
            speed={100}
            factor={0.03}
            pointerEvents={false}
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="mx-auto max-w-6xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm px-4 py-2 text-sm shadow-sm">
              <Zap className="h-4 w-4 text-primary" />
              <span className="font-medium">Design Systems in Minutes, Not Days</span>
            </div>
            
            <h1 className="mb-6 text-3xl font-bold font-heading tracking-tight sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
              Craft Beautiful Themes
              <br />
              <span className="bg-linear-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                With Zero Code
              </span>
            </h1>
            
            <p className="mb-10 text-lg text-muted-foreground sm:text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto">
              The fastest way to build production-ready design systems. Visual controls, instant preview, 
              and export to CSS, SCSS, SASS, or JSON. 
              <span className="font-semibold text-foreground"> No setup. No cost. Pure speed.</span>
            </p>
            
            <div className="flex justify-center relative">
              <CursorFollow sideOffset={6} alignOffset={0}>
                User
              </CursorFollow>
              <LiquidButton asChild size="lg" variant="default" className="text-base h-12 px-8">
                <Link href="/generator" className="flex items-center gap-2">
                  <Rocket className="h-5 w-5" />
                  Start Building Now
                </Link>
              </LiquidButton>
            </div>
          </div>
        </div>
      </section>
    </CursorProvider>
  )
}

