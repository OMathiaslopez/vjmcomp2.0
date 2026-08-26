"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Bed, Car, Maximize, MapPin, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export interface Property {
  id: string
  title: string
  type: string
  region: string
  area: number
  bedrooms: number
  bathrooms: number
  parking: number
  description: string
  image: string
  images?: string[]
  features?: string[]
}

interface PropertyCardProps {
  property: Property
}

export function PropertyCard({ property }: PropertyCardProps) {

  const router = useRouter()

  const images =
    property.images && property.images.length > 0
      ? property.images.slice(0, 3)
      : [property.image]

  const totalImages = property.images?.length || 1

  const [current, setCurrent] = useState(0)

  function nextImage(e: React.MouseEvent) {
    e.stopPropagation()
    if (current < images.length - 1) {
      setCurrent(current + 1)
    }
  }

  function prevImage(e: React.MouseEvent) {
    e.stopPropagation()
    if (current > 0) {
      setCurrent(current - 1)
    }
  }

  const whatsappNumber = "5511978392241"

  const message = encodeURIComponent(
    `Olá! Tenho interesse no imóvel: ${property.title} - ${property.region}`
  )

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`

  return (
    <Card
      onClick={() => router.push(`/imoveis/${property.id}`)}
      className="property-card property-card-3d group cursor-pointer overflow-hidden border border-border/60 bg-card shadow-none transition-shadow duration-300 hover:shadow-lg"
    >

      {/* IMAGEM */}
      <div className="relative aspect-[4/3] overflow-hidden">

        <Image
          src={images[current]}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="vjm-watermark" aria-hidden="true">VJM</span>

        {/* contador */}
        <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded">
          {current + 1} / {totalImages}
        </div>

        {/* seta esquerda */}
        {current > 0 && (
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full"
          >
            <ChevronLeft size={18} />
          </button>
        )}

        {/* seta direita */}
        {current < images.length - 1 && (
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full"
          >
            <ChevronRight size={18} />
          </button>
        )}

        {/* tipo */}
        <div className="absolute top-4 left-4">
          <span className="bg-foreground text-gold px-3 py-1.5 text-xs font-medium uppercase tracking-wider">
            {property.type}
          </span>
        </div>
        <div className="absolute bottom-4 left-4">
          <span className="availability-badge">
            {property.type.includes("Comercial") || property.type === "Loja" ? "Venda e locação" : "Consulte disponibilidade"}
          </span>
        </div>

      </div>

      <CardContent className="p-5">

        <div className="mb-1.5 flex items-center gap-2 text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" />
          <span className="text-xs tracking-wide">{property.region}</span>
        </div>

        <h3 className="mb-3 font-serif text-lg font-semibold text-foreground">
          {property.title}
        </h3>

        <div className="mb-4 flex items-center gap-5 text-sm text-muted-foreground">

          <div className="flex items-center gap-1.5">
            <Bed className="h-4 w-4" />
            <span>{property.bedrooms}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Car className="h-4 w-4" />
            <span>{property.parking}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Maximize className="h-4 w-4" />
            <span>{property.area}m²</span>
          </div>

        </div>

        <div className="flex gap-3">

<Button
  onClick={(e) => {
    e.stopPropagation()
    router.push(`/imoveis/${property.id}`)
  }}
  variant="outline"
  className="flex-1"
>
  Ver Detalhes
</Button>

          <Button
            asChild
            className="flex-1 bg-gold hover:bg-gold/90 text-foreground"
            onClick={(e) => e.stopPropagation()}
          >
            <a href={whatsappUrl} target="_blank">
              WhatsApp
            </a>
          </Button>

        </div>

      </CardContent>

    </Card>
  )
}
