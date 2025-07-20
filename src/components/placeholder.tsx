import { 
  Image, 
  Camera, 
  User, 
  Scissors, 
  Palette,
  Heart,
  LucideIcon 
} from "lucide-react"
import { cn } from "@/lib/utils"

interface PlaceholderProps {
  type?: "image" | "gallery" | "person" | "service" | "color" | "testimonial"
  size?: "sm" | "md" | "lg" | "xl"
  aspect?: "square" | "video" | "portrait"
  className?: string
}

const iconMap: Record<string, LucideIcon> = {
  image: Image,
  gallery: Camera,
  person: User,
  service: Scissors,
  color: Palette,
  testimonial: Heart,
}

const sizeMap = {
  sm: "w-8 h-8",
  md: "w-12 h-12", 
  lg: "w-16 h-16",
  xl: "w-20 h-20",
}

const aspectMap = {
  square: "aspect-square",
  video: "aspect-video", 
  portrait: "aspect-[3/4]",
}

export function Placeholder({ 
  type = "image", 
  size = "md", 
  aspect = "video",
  className 
}: PlaceholderProps) {
  const Icon = iconMap[type]
  
  return (
    <div className={cn(
      "bg-muted rounded-lg border-2 border-dashed border-border",
      "flex items-center justify-center",
      aspectMap[aspect],
      className
    )}>
      <Icon className={cn(
        "text-muted-foreground",
        sizeMap[size]
      )} />
    </div>
  )
}