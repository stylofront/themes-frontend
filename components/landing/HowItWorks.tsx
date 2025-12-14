"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LiquidButton } from "@/components/animate-ui/components/buttons/liquid"
import Link from "next/link"
import { Wand2, Palette, Clock, AlertTriangle, ArrowRight, CheckCircle2, Sparkles, Zap } from "lucide-react"
import { motion } from "framer-motion"

const problems = [
  {
    icon: Palette,
    title: "Manual Setup",
    description: "Hours wasted copying color tokens and CSS boilerplate",
    stat: "18 hrs/month",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    icon: Clock,
    title: "No Preview",
    description: "Can't see your theme until you export and test",
    stat: "Trial & error",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    icon: AlertTriangle,
    title: "Limited Formats",
    description: "Stuck with one export format per tool",
    stat: "Manual conversion",
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
  },
]

const steps = [
  {
    number: "1",
    title: "Customize Your Theme",
    description: "Adjust colors, spacing, typography, shadows, and more. Add custom tokens as needed.",
    icon: Palette,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    number: "2",
    title: "See Live Preview",
    description: "Watch your changes update in real-time. Toggle between light and dark modes.",
    icon: Sparkles,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    number: "3",
    title: "Export & Use",
    description: "Download your theme as CSS, SCSS, SASS, Tailwind, or JSON. Copy and paste into your project.",
    icon: CheckCircle2,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-20 md:py-28 lg:py-32 bg-muted/30 relative overflow-hidden border-t">
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading tracking-tight mb-6 leading-tight">
            From Problems to
            <br />
            <span className="bg-linear-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Solution
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Stop wasting time on repetitive setup. Build themes in minutes, not hours.
          </p>
        </motion.div>

        {/* Enhanced Problems Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 md:mb-20"
        >
          <div className="text-center mb-10 sm:mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="destructive" className="mb-4 text-sm px-4 py-1.5">
                <AlertTriangle className="h-3.5 w-3.5 mr-2" />
                Common Problems
              </Badge>
            </motion.div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Why Building Themes Still Hurts</h3>
            <p className="text-muted-foreground text-sm sm:text-base">The pain points every developer faces</p>
          </div>
        
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {problems.map((problem, idx) => {
              const Icon = problem.icon
              return (
                <motion.div
                  key={problem.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="relative"
                >
                  <Card className="border-2 border-destructive/30 bg-card h-full text-center hover:shadow-xl transition-all duration-300 hover:border-destructive/50 group">
                    <CardHeader className="pb-3">
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                        transition={{ duration: 0.5 }}
                        className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/10 mx-auto border-2 border-destructive/20 group-hover:bg-destructive/20 transition-colors"
                      >
                        <Icon className={`h-6 w-6 ${problem.color}`} />
                      </motion.div>
                      <CardTitle className="text-base sm:text-lg mb-2">{problem.title}</CardTitle>
                      <Badge variant="destructive" className="text-xs mb-3">
                        {problem.stat}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm sm:text-base leading-relaxed">
                        {problem.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Enhanced Arrow Connector */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="h-px w-16 sm:w-24 bg-linear-to-r from-destructive/50 to-primary/50" />
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-primary/10 border-2 border-primary/30 shadow-lg"
            >
              <ArrowRight className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
            </motion.div>
            <div className="h-px w-16 sm:w-24 bg-linear-to-l from-destructive/50 to-primary/50" />
          </div>
        </motion.div>

        {/* Enhanced Solution: How It Works Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10 sm:mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="default" className="mb-4 text-sm px-4 py-1.5">
                <Sparkles className="h-3.5 w-3.5 mr-2" />
                The Solution
              </Badge>
            </motion.div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Three Simple Steps</h3>
            <p className="text-muted-foreground text-sm sm:text-base">Get from idea to production in minutes</p>
          </div>

          {/* Horizontal Timeline Layout */}
          <div className="max-w-6xl mx-auto">
            {/* Desktop: Horizontal Timeline */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-linear-to-r from-primary/20 via-primary/40 to-primary/20 transform -translate-y-1/2 z-0" />
                
                <div className="relative grid grid-cols-3 gap-6 lg:gap-8">
                  {steps.map((step, idx) => {
                    const Icon = step.icon
                    return (
                      <motion.div
                        key={step.number}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.2 }}
                        whileHover={{ scale: 1.05, y: -8 }}
                        className="relative"
                      >
                        {/* Timeline Dot */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                          <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                            className="flex h-16 w-16 items-center justify-center rounded-full bg-background border-4 border-primary shadow-xl"
                          >
                            <div className={`flex h-12 w-12 items-center justify-center rounded-full ${step.bgColor} text-primary text-2xl font-bold`}>
                              {step.number}
                            </div>
                          </motion.div>
                        </div>

                        <Card className="border-2 border-primary/30 bg-card mt-8 hover:shadow-2xl transition-all duration-300 hover:border-primary/50 group">
                          <CardHeader className="pb-3 text-center">
                            <motion.div
                              whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                              transition={{ duration: 0.5 }}
                              className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${step.bgColor} mx-auto border-2 border-primary/20 group-hover:scale-110 transition-transform`}
                            >
                              <Icon className={`h-6 w-6 ${step.color}`} />
                            </motion.div>
                            <CardTitle className="text-base sm:text-lg mb-2">{step.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <CardDescription className="text-sm sm:text-base leading-relaxed text-center">
                              {step.description}
                            </CardDescription>
                          </CardContent>
                        </Card>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Mobile: Vertical Stack */}
            <div className="lg:hidden space-y-6 sm:space-y-8">
              {steps.map((step, idx) => {
                const Icon = step.icon
                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="relative pl-12 sm:pl-16"
                  >
                    {/* Vertical Timeline Line */}
                    {idx < steps.length - 1 && (
                      <div className="absolute left-6 sm:left-8 top-12 bottom-0 w-0.5 bg-primary/20" />
                    )}
                    
                    {/* Timeline Dot */}
                    <div className="absolute left-0 top-0 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-primary/10 border-2 border-primary text-primary text-xl sm:text-2xl font-bold shadow-lg">
                      {step.number}
                    </div>

                    <Card className="border-2 border-primary/30 bg-card hover:shadow-xl transition-all duration-300">
                      <CardHeader className="pb-3">
                        <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${step.bgColor} border-2 border-primary/20`}>
                          <Icon className={`h-6 w-6 ${step.color}`} />
                        </div>
                        <CardTitle className="text-base sm:text-lg">{step.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-sm sm:text-base leading-relaxed">
                          {step.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
        </div>
        </motion.div>

        {/* Enhanced CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 sm:mt-16 flex justify-center"
        >
          <LiquidButton asChild size="lg" variant="default" className="h-12 sm:h-14 px-8 sm:px-10">
            <Link href="/generator" className="flex items-center gap-2 text-sm sm:text-base">
              <Wand2 className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>Start Creating Your Theme</span>
              <Zap className="h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </LiquidButton>
        </motion.div>
      </div>
    </section>
  )
}
