"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { HoverCard, StaggerContainer, StaggerItem } from "@/components/motion"
import { Placeholder } from "@/components/placeholder"

interface GalleryImage {
  src: string
  alt: string
  filename: string
}

export function Gallery() {
  const [images, setImages] = useState<GalleryImage[]>([])
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Demo images - in production, these would be loaded from the gallery folder
    const demoImages: GalleryImage[] = [
      { src: "/gallery/001-bob-schnitt-braun.jpg", alt: "Bob Schnitt in Braun", filename: "001-bob-schnitt-braun.jpg" },
      { src: "/gallery/002-lange-blonde-straehnen.jpg", alt: "Lange blonde Strähnen", filename: "002-lange-blonde-straehnen.jpg" },
      { src: "/gallery/003-kurzhaar-grau.jpg", alt: "Kurzhaar in Grau", filename: "003-kurzhaar-grau.jpg" },
      { src: "/gallery/004-locken-styling.jpg", alt: "Locken Styling", filename: "004-locken-styling.jpg" },
      { src: "/gallery/005-balayage-technik.jpg", alt: "Balayage Technik", filename: "005-balayage-technik.jpg" },
      { src: "/gallery/006-hochsteckfrisur.jpg", alt: "Hochsteckfrisur", filename: "006-hochsteckfrisur.jpg" },
      { src: "/gallery/007-pixie-cut.jpg", alt: "Pixie Cut", filename: "007-pixie-cut.jpg" },
      { src: "/gallery/008-ombre-technik.jpg", alt: "Ombre Technik", filename: "008-ombre-technik.jpg" }
    ]

    // Simulate loading - in production, this would scan the gallery folder
    const loadImages = async () => {
      setIsLoading(true)
      
      // For now, we'll use demo placeholders
      // In production with a proper backend, this would fetch actual files
      await new Promise(resolve => setTimeout(resolve, 500))
      
      setImages(demoImages)
      setIsLoading(false)
    }

    loadImages()
  }, [])

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="bg-muted rounded-xl aspect-square"></div>
          </div>
        ))}
      </div>
    )
  }

  if (images.length === 0) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <StaggerItem key={i}>
            <HoverCard scale={1.08} lift={8}>
              <Placeholder 
                type="gallery" 
                size="md" 
                aspect="square"
                className="cursor-pointer shadow-lg rounded-xl overflow-hidden border-2 border-white/50"
              />
            </HoverCard>
          </StaggerItem>
        ))}
      </div>
    )
  }

  return (
    <>
      <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6" staggerDelay={0.05}>
        {images.map((image) => (
          <StaggerItem key={image.filename}>
            <HoverCard scale={1.08} lift={8}>
              <div 
                className="cursor-pointer shadow-lg rounded-xl overflow-hidden border-2 border-white/50 aspect-square relative group"
                onClick={() => setSelectedImage(image)}
              >
                <div className="w-full h-full bg-muted flex items-center justify-center">
                  <Placeholder 
                    type="gallery" 
                    size="md" 
                    aspect="square"
                    className="border-none bg-transparent w-full h-full"
                  />
                </div>
                {/* Overlay for future real images */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200" />
              </div>
            </HoverCard>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors p-2"
            >
              <X size={24} />
            </button>
            <div className="bg-white dark:bg-card rounded-xl overflow-hidden">
              <div className="aspect-square bg-muted flex items-center justify-center">
                <Placeholder 
                  type="gallery" 
                  size="xl" 
                  aspect="square"
                  className="border-none bg-transparent w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{selectedImage.alt}</h3>
                <p className="text-muted-foreground text-sm">
                  Professionelles Hairstyling von Lia Hair
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}