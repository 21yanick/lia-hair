"use client"

import { motion } from "motion/react"
import { ReactNode } from "react"

interface HoverCardProps {
  children: ReactNode
  className?: string
  scale?: number
  lift?: number
}

export function HoverCard({ 
  children, 
  className = "",
  scale = 1.02,
  lift = 4
}: HoverCardProps) {
  return (
    <motion.div
      whileHover={{ 
        scale, 
        y: -lift,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}