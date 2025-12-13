"use client"

import Link from "next/link"
import { LiquidButton } from "@/components/animate-ui/components/buttons/liquid"
import { Sparkles } from "lucide-react"

export function CTA() {
  return (
    <section id="get-started" className="py-16 sm:py-20 md:py-32 bg-gradient-to-b from-primary/5 via-primary/10 to-background dark:from-primary/10 dark:via-primary/5 dark:to-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold font-heading tracking-tight sm:text-4xl mb-4">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of developers shipping faster. Build your perfect design system in minutes, not days.
          </p>
          <div className="flex justify-center">
            <LiquidButton asChild size="lg" variant="default" className="text-base h-12 px-8">
              <Link href="/generator" className="flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                Start Crafting Themes
              </Link>
            </LiquidButton>
          </div>
        </div>
      </div>
    </section>
  )
}

