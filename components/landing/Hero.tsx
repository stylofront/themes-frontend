"use client"

import Link from "next/link"
import { LiquidButton } from "@/components/animate-ui/components/buttons/liquid"
import { Sparkles, Zap, Rocket, ArrowDown } from "lucide-react"
import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars"
import { CursorProvider } from "@/components/animate-ui/components/animate/cursor"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

export function Hero() {
  return (
    <CursorProvider global={false}>
      <section className="relative overflow-hidden border-b bg-linear-to-b from-primary/5 via-primary/10 to-background dark:from-primary/10 dark:via-primary/5 dark:to-background py-16 sm:py-20 md:py-28 lg:py-32 min-h-[85vh] sm:min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <StarsBackground 
            className="h-full w-full bg-linear-to-b from-primary/10 via-primary/5 to-transparent dark:from-primary/20 dark:via-primary/10 dark:to-transparent" 
            starColor="hsl(var(--primary))"
            speed={100}
            factor={0.03}
            pointerEvents={false}
          />
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-transparent to-primary/10 dark:from-primary/30 dark:via-transparent dark:to-primary/20 animate-pulse" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="mx-auto max-w-5xl text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 sm:mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm shadow-sm"
            >
              <Zap className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary shrink-0" />
              <span className="font-medium whitespace-nowrap">Design Systems in Minutes, Not Days</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 sm:mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold font-heading tracking-tight leading-[1.1] sm:leading-[1.15]"
            >
              Craft Beautiful Themes
              <br className="hidden sm:block" />
              <span className="block sm:inline"> </span>
              <span className="bg-linear-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                With Zero Code
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 sm:mb-10 md:mb-12 text-base sm:text-lg md:text-xl lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto px-2"
            >
              The fastest way to build production-ready design systems. Visual controls, instant preview, 
              and export to CSS, SCSS, SASS, Tailwind, or JSON. 
              <span className="block mt-2 sm:mt-1 sm:inline font-semibold text-foreground"> No setup. No cost. Pure speed.</span>
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center gap-4 sm:gap-6"
            >
              <div className="flex justify-center relative w-full sm:w-auto">
                <LiquidButton asChild size="lg" variant="default" className="h-12 sm:h-14 px-8 sm:px-10 relative z-10 w-full sm:w-auto">
                  <Link href="/generator" className="flex items-center justify-center gap-2 text-sm sm:text-base">
                    <Rocket className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
                    <span>Start Building Now</span>
                  </Link>
                </LiquidButton>
              </div>
              
              {/* Subtle preview hint */}
              {/* <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-2 sm:mt-4"
              >
                <Card className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 border-primary/20 bg-primary/5 backdrop-blur-sm">
                  <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary shrink-0" />
                  <span className="text-xs sm:text-sm text-muted-foreground">See it in action below</span>
                </Card>
              </motion.div> */}
            </motion.div>
          </div>
          
          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute -bottom-14 sm:-bottom-24 left-1/2 transform -translate-x-1/2 z-10 block"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-muted-foreground"
            >
              <span className="text-xs uppercase tracking-wider">Scroll</span>
              <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5" />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </CursorProvider>
  )
}

