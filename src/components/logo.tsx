"use client"

import Image from "next/image"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

interface LogoProps {
  width?: number
  height?: number
  className?: string
}

export function Logo({ width = 120, height = 40, className = "" }: LogoProps) {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div 
        className={`bg-muted rounded ${className}`}
        style={{ width, height }}
      />
    )
  }

  const isDark = resolvedTheme === "dark"
  const logoSrc = isDark ? "/icons/Logo-White.png" : "/icons/Logo-Black.png"
  const altText = "Lia Hair Logo"

  return (
    <Image
      src={logoSrc}
      alt={altText}
      width={width}
      height={height}
      className={className}
      priority
    />
  )
}