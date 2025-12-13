"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "motion/react"
import { useState } from "react"
import { LucideIcon } from "lucide-react"

interface FlipCardProps {
  icon: LucideIcon
  title: string
  description: string
  backContent?: React.ReactNode
  className?: string
}

export function FlipCard({ icon: Icon, title, description, backContent, className }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className={`relative h-full perspective-1000 ${className}`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      {/* Front */}
      <motion.div
        className="absolute inset-0 backface-hidden"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <Card className="border-2 h-full flex flex-col hover:shadow-lg transition-shadow bg-card">
          <CardHeader className="pb-3">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-lg">{title}</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 pt-0">
            <CardDescription className="text-base leading-relaxed">
              {description}
            </CardDescription>
          </CardContent>
        </Card>
      </motion.div>

      {/* Back */}
      <motion.div
        className="absolute inset-0 backface-hidden"
        initial={{ rotateY: 180 }}
        animate={{ rotateY: isFlipped ? 0 : 180 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ transformStyle: 'preserve-3d', rotateY: 180 }}
      >
        <Card className="border-2 h-full flex flex-col bg-card border-primary/30">
          <CardHeader className="pb-3">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-lg">{title}</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 pt-0">
            {backContent || (
              <CardDescription className="text-base leading-relaxed">
                {description}
              </CardDescription>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
