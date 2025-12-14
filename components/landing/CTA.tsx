"use client"

import Link from "next/link"
import { LiquidButton } from "@/components/animate-ui/components/buttons/liquid"
import { Sparkles, Rocket, ArrowRight, Zap, Download, Shield, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars"
import { Card, CardContent } from "@/components/ui/card"

const benefits = [
  {
    icon: Zap,
    title: "Instant Start",
    description: "No sign-up, no credit card",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    icon: Download,
    title: "Export Ready",
    description: "CSS, SCSS, SASS, Tailwind, or JSON",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Shield,
    title: "Free Forever",
    description: "No hidden costs",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
]

const stats = [
  { value: "3", label: "Simple Steps", icon: CheckCircle2 },
  { value: "5", label: "Export Formats", icon: Download },
  { value: "0", label: "Setup Required", icon: Zap },
]

export function CTA() {
  return (
    <section id="get-started" className="relative py-20 sm:py-28 md:py-36 lg:py-40 overflow-hidden border-t">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-linear-to-b from-primary/5 via-primary/15 to-primary/5 dark:from-primary/10 dark:via-primary/20 dark:to-primary/10">
        <StarsBackground 
          className="h-full w-full opacity-60" 
          starColor="hsl(var(--primary))"
          speed={60}
          factor={0.025}
          pointerEvents={false}
        />
      </div>
      
      {/* Enhanced Gradient Overlays */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-primary/10" />
      <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-7xl">
          {/* Enhanced Main CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <Card className="border-2 border-primary/20 bg-white/10 backdrop-blur-lg shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-300">
              {/* Enhanced Card Background Effect */}
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-primary/5" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 animate-pulse" style={{ animationDelay: '0.5s' }} />
              
              <CardContent className="relative p-6 sm:p-10 md:p-14 lg:p-16">
                <div className="text-center">
                  {/* Enhanced Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm px-5 py-2.5 text-sm shadow-sm"
                  >
                    <Sparkles className="h-4 w-4 text-primary animate-pulse" />
                    <span className="font-medium">Start Building in Seconds</span>
                  </motion.div>

                  {/* Enhanced Headline */}
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading tracking-tight mb-6 leading-tight"
                  >
                    Ready to Build Your
                    <br />
                    <span className="bg-linear-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                      Perfect Theme?
                    </span>
                  </motion.h2>

                  {/* Enhanced Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto"
                  >
                    Join developers creating beautiful design systems faster. 
                    <span className="block mt-2 text-foreground font-semibold">
                      No account needed. Start now.
                    </span>
                  </motion.p>

                  {/* Enhanced Primary CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mb-10 sm:mb-12"
                  >
                    <LiquidButton asChild size="lg" variant="default" className="h-14 sm:h-16 px-10 sm:px-12 text-base sm:text-lg shadow-lg hover:shadow-xl transition-shadow w-full sm:w-auto">
                      <Link href="/generator" className="flex items-center justify-center gap-3">
                        <Rocket className="h-5 w-5 sm:h-6 sm:w-6" />
                        <span>Start Building Now</span>
                        <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                      </Link>
                    </LiquidButton>
                  </motion.div>

                  {/* Enhanced Benefits Grid */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 sm:mb-12"
                  >
                    {benefits.map((benefit, idx) => {
                      const Icon = benefit.icon
                      return (
                        <motion.div
                          key={benefit.title}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 border border-border/50 hover:border-primary/30 hover:bg-muted/70 transition-all duration-300"
                        >
                          <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${benefit.bgColor} border-2 border-primary/20`}>
                            <Icon className={`h-5 w-5 ${benefit.color}`} />
                          </div>
                          <div className="text-left">
                            <div className="font-semibold text-sm sm:text-base">{benefit.title}</div>
                            <div className="text-xs sm:text-sm text-muted-foreground">{benefit.description}</div>
                          </div>
                        </motion.div>
                      )
                    })}
                  </motion.div>

                  {/* Enhanced Stats */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-border/50"
                  >
                    {stats.map((stat, idx) => {
                      const Icon = stat.icon
                      return (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.7 + idx * 0.1 }}
                          whileHover={{ scale: 1.1 }}
                          className="text-center"
                        >
                          <div className="flex items-center justify-center gap-2 mb-2">
                            <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">{stat.value}</div>
                          </div>
                          <div className="text-xs sm:text-sm text-muted-foreground font-medium">{stat.label}</div>
                        </motion.div>
                      )
                    })}
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
