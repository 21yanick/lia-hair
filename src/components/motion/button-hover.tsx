"use client"

import { motion } from "motion/react"
import { ReactNode } from "react"

interface ButtonHoverProps {
  children: ReactNode
  className?: string
}

export function ButtonHover({ children, className = "" }: ButtonHoverProps) {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}