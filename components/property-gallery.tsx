"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Props {
  images: string[]
  title: string
  type: string
}

export function PropertyGallery({ images, title, type }: Props) {

  const [current, setCurrent] = useState(0)

  function next() {
    setCurrent((prev) => (prev + 1) % images.length)
  }

  function prev() {
    setCurrent((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="mb-8">

      {/* FOTO PRINCIPAL */}
      <div className="relative aspect-[16/10] rounded-sm overflow-hidden">

        <Image
          src={images[current]}
          alt={`${title} foto`}
          fill
          className="object-cover"
          priority
        />

        {/* seta esquerda */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* seta direita */}
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
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

      {/* MINIATURAS DAS FOTOS */}
      <div className="flex gap-2 mt-4 overflow-x-auto">

        {images.map((img, index) => (

          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`relative w-24 h-16 flex-shrink-0 rounded overflow-hidden border ${
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

          </button>

        ))}

      </div>

    </div>
  )
}