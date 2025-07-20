"use client"

import { motion } from "motion/react"
import { ReactNode } from "react"

interface RevealOnScrollProps {
  children: ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  className?: string
}

export function RevealOnScroll({ 
  children, 
  delay = 0, 
  direction = "up",
  className = ""
}: RevealOnScrollProps) {
  const directionVariants = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 }
  }

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...directionVariants[direction]
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.21, 1.11, 0.81, 0.99]
      }}
      viewport={{ 
        once: true, 
        margin: "-50px" 
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}