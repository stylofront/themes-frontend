"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "motion/react"
import { LucideIcon } from "lucide-react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cn } from "@/lib/utils"

interface ExpandableTabTriggerProps {
  value: string
  icon: LucideIcon
  label: string
  className?: string
}

export function ExpandableTabTrigger({ value, icon: Icon, label, className }: ExpandableTabTriggerProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Check if this tab is active by observing the data-state attribute
  useEffect(() => {
    const checkActive = () => {
      if (buttonRef.current) {
        // The data-state attribute is set on the button by Radix UI
        const state = buttonRef.current.getAttribute('data-state')
        setIsActive(state === 'active')
      }
    }

    checkActive()
    
    // Use MutationObserver to watch for data-state changes on the button
    const observer = new MutationObserver(checkActive)
    if (buttonRef.current) {
      observer.observe(buttonRef.current, {
        attributes: true,
        attributeFilter: ['data-state'],
        subtree: false,
      })
    }

    // Also check periodically as fallback
    const interval = setInterval(checkActive, 100)

    return () => {
      observer.disconnect()
      clearInterval(interval)
    }
  }, [])

  const shouldExpand = isHovered || isActive

  return (
    <TabsPrimitive.Trigger 
      value={value}
      className={cn("p-0 h-auto bg-transparent hover:bg-transparent data-[state=active]:bg-transparent", className)}
      asChild
    >
      <motion.button
        ref={buttonRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{
          maxWidth: shouldExpand ? '140px' : '40px',
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30,
        }}
        className="flex h-10 items-center gap-2 overflow-hidden whitespace-nowrap rounded-lg bg-muted/50 hover:bg-muted px-2.5 py-2  text-muted-foreground hover:text-foreground data-[state=active]:bg-primary data-[state=active]:text-primary transition-colors"
        aria-label={label}
      >
        <Icon size={18} className="shrink-0 h-3.5 w-3.5 sm:h-4 sm:w-4" />
        <motion.span
          animate={{
            opacity: shouldExpand ? 1 : 0,
            x: shouldExpand ? 0 : -4,
            scale: shouldExpand ? 1 : 0.95,
          }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 50,
          }}
          className="text-xs sm:text-sm font-medium whitespace-nowrap"
          style={{
            display: shouldExpand ? 'block' : 'none',
            pointerEvents: shouldExpand ? 'auto' : 'none',
          }}
        >
          {label}
        </motion.span>
      </motion.button>
    </TabsPrimitive.Trigger>
  )
}

