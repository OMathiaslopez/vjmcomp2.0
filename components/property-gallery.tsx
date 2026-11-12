"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

interface Props {
  images: string[]
  title: string
  type: string
  contain?: boolean
}

export function PropertyGallery({ images, title, type, contain = false }: Props) {

  const [current, setCurrent] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  function next() {
    setCurrent((prev) => (prev + 1) % images.length)
  }

  function prev() {
    setCurrent((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="property-gallery mb-8">

      {/* FOTO PRINCIPAL */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-sm cursor-zoom-in sm:aspect-[16/10]" onClick={() => setIsLightboxOpen(true)}>

        <Image
          src={images[current]}
          alt={`${title} foto`}
          fill
          className={contain ? "object-contain bg-muted" : "object-cover"}
          priority
        />
        <span className="vjm-watermark vjm-watermark-large" aria-hidden="true">VJM</span>

        {/* seta esquerda */}
        <button
          onClick={(event) => { event.stopPropagation(); prev() }}
          type="button"
          aria-label="Foto anterior"
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 sm:left-4"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* seta direita */}
        <button
          onClick={(event) => { event.stopPropagation(); next() }}
          type="button"
          aria-label="Próxima foto"
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 sm:right-4"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* contador */}
        <div className="absolute bottom-4 right-4 bg-black/60 text-white text-sm px-3 py-1 rounded">
          {current + 1} / {images.length}
        </div>

        {/* tipo */}
        <div className="absolute top-6 left-6">
          <span className="bg-black text-white px-4 py-2 text-sm uppercase tracking-wider">
            {type}
          </span>
        </div>

      </div>

      {isLightboxOpen && (
        <div className="property-lightbox" role="dialog" aria-modal="true" aria-label={`Visualizando ${title}`} onClick={() => setIsLightboxOpen(false)}>
           <button type="button" className="property-lightbox-close" onClick={() => setIsLightboxOpen(false)} aria-label="Fechar imagem"><X /></button>
           <button type="button" className="property-lightbox-arrow left" onClick={(event) => { event.stopPropagation(); prev() }} aria-label="Foto anterior"><ChevronLeft /></button>
          <div className="property-lightbox-image" onClick={(event) => event.stopPropagation()}>
            <Image src={images[current]} alt={`${title} foto ampliada`} fill className="object-contain" sizes="90vw" />
            <span className="vjm-watermark vjm-watermark-large" aria-hidden="true">VJM</span>
          </div>
           <button type="button" className="property-lightbox-arrow right" onClick={(event) => { event.stopPropagation(); next() }} aria-label="Próxima foto"><ChevronRight /></button>
          <span className="property-lightbox-count">{current + 1} / {images.length}</span>
        </div>
      )}

      {/* MINIATURAS DAS FOTOS */}
      <div className="flex gap-2 mt-4 overflow-x-auto">

        {images.map((img, index) => (

          <button
            key={index}
            onClick={() => setCurrent(index)}
             type="button"
             className={`relative h-16 w-24 flex-shrink-0 overflow-hidden rounded border ${
              current === index
                ? "border-gold"
                : "border-transparent"
            }`}
          >

            <Image
              src={img}
              alt={`${title} miniatura ${index + 1}`}
              fill
              className="object-cover"
            />
            <span className="vjm-watermark vjm-watermark-thumb" aria-hidden="true">VJM</span>

          </button>

        ))}

      </div>

    </div>
  )
}
