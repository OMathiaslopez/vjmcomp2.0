"use client"

import { useRef, useState } from "react"
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
  availability?: string
  images?: string[]
  photoCount?: number
  features?: string[]
}

interface PropertyCardProps {
  property: Property
}

const CARD_PHOTO_LIMIT = 3

export function PropertyCard({ property }: PropertyCardProps) {

  const router = useRouter()

  const images = (
    property.images && property.images.length > 0
      ? property.images
      : property.image ? [property.image] : ["/images/logo-vjm.png"]
  ).slice(0, CARD_PHOTO_LIMIT)

  // Total real de fotos do imóvel (a listagem manda só as 3 primeiras + o total)
  const totalImages = Math.max(
    property.photoCount ?? property.images?.length ?? 1,
    images.length
  )
  const remaining = totalImages - images.length
  const hasMoreSlide = remaining > 0
  const slideCount = images.length + (hasMoreSlide ? 1 : 0)

  const [current, setCurrent] = useState(0)
  const touchStartX = useRef<number | null>(null)

  const isMoreSlide = hasMoreSlide && current === images.length
  const shownImage = isMoreSlide ? images[images.length - 1] : images[current]

  function goNext() {
    setCurrent((c) => (c < slideCount - 1 ? c + 1 : c))
  }

  function goPrev() {
    setCurrent((c) => (c > 0 ? c - 1 : c))
  }

  function nextImage(e: React.MouseEvent) {
    e.stopPropagation()
    goNext()
  }

  function prevImage(e: React.MouseEvent) {
    e.stopPropagation()
    goPrev()
  }

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    touchStartX.current = null
    if (Math.abs(dx) > 40) {
      if (dx < 0) goNext()
      else goPrev()
    }
  }

  const whatsappNumber = "5511978392241"

  const message = encodeURIComponent(
    `Olá! Tenho interesse no imóvel: ${property.title} - ${property.region}`
  )

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`
  const isCommercial = property.type.includes("Comercial") || property.type === "Loja"

  return (
    <Card
      onClick={() => router.push(`/imoveis/${property.id}`)}
      className="property-card property-card-3d group cursor-pointer overflow-hidden border border-border/60 bg-card shadow-none transition-shadow duration-300 hover:shadow-lg"
    >

      {/* IMAGEM */}
      <div
        className="relative aspect-[4/3] overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >

        <Image
          src={shownImage}
          alt={property.title}
          fill
          className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
            isMoreSlide ? "scale-110 blur-md" : ""
          }`}
        />
        <span className="vjm-watermark" aria-hidden="true">VJM</span>

        {/* último slide: aviso de fotos restantes */}
        {isMoreSlide && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/55 px-4 text-center text-white">
            <span className="text-3xl font-semibold">
              +{remaining} {remaining === 1 ? "foto" : "fotos"}
            </span>
            <span className="mt-1 text-sm">Clique para ver todas</span>
          </div>
        )}

        {/* contador */}
        {!isMoreSlide && (
          <div className="absolute bottom-3 right-3 rounded bg-black/60 px-2 py-1 text-xs text-white">
            {current + 1} / {totalImages}
          </div>
        )}

        {/* seta esquerda */}
        {current > 0 && (
          <button
            type="button"
            aria-label="Foto anterior"
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white"
          >
            <ChevronLeft size={18} />
          </button>
        )}

        {/* seta direita */}
        {current < slideCount - 1 && (
          <button
            type="button"
            aria-label="Próxima foto"
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white"
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
             {property.availability || (property.type.includes("Comercial") || property.type === "Loja" ? "Venda e locação" : "Consulte disponibilidade")}
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

          {!isCommercial && (
            <div className="flex items-center gap-1.5">
              <Bed className="h-4 w-4" />
              <span>{property.bedrooms}</span>
            </div>
          )}

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