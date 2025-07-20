"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
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
    // Real gallery images
    const realImages: GalleryImage[] = [
      { src: "/images/005.jpg", alt: "Moderner Salon mit stilvollen Lampen", filename: "005.jpg" },
      { src: "/images/006.jpg", alt: "Hairstyling Portfolio", filename: "006.jpg" },
      { src: "/images/007.jpg", alt: "Professionelle Friseurarbeit", filename: "007.jpg" },
      { src: "/images/008.jpg", alt: "Kreative Haarschnitte", filename: "008.jpg" },
      { src: "/images/009.jpg", alt: "Moderne Haartrends", filename: "009.jpg" },
      { src: "/images/010.jpg", alt: "Styling Expertise", filename: "010.jpg" },
      { src: "/images/011.jpg", alt: "Haarfarbe Spezialistin", filename: "011.jpg" },
      { src: "/images/012.jpg", alt: "Individuelle Beratung", filename: "012.jpg" },
      { src: "/images/013.jpg", alt: "Premium Haarpflege", filename: "013.jpg" },
      { src: "/images/014.jpg", alt: "Perfekte Schnitte", filename: "014.jpg" },
      { src: "/images/015.jpg", alt: "Professionelles Styling", filename: "015.jpg" }
    ]

    // Load real images
    const loadImages = async () => {
      setIsLoading(true)
      
      // Quick loading for real images
      await new Promise(resolve => setTimeout(resolve, 300))
      
      setImages(realImages)
      setIsLoading(false)
    }

    loadImages()
  }, [])

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {Array.from({ length: 11 }).map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="bg-muted rounded-xl aspect-square"></div>
          </div>
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
                <Image 
                  src={image.src} 
                  alt={image.alt}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
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
              <div className="aspect-auto">
                <Image 
                  src={selectedImage.src} 
                  alt={selectedImage.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain max-h-[70vh]"
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