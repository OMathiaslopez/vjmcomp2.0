"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { PropertyCard } from "@/components/property-card"
import { properties } from "@/lib/properties"

export default function ImoveisPage() {
  const [tipo, setTipo] = useState("")
  const [quartos, setQuartos] = useState(0)

  const filtrados = properties.filter((p) => {
    const tipoOk = tipo === "" || p.type === tipo
    const quartosOk = quartos === 0 || p.bedrooms >= quartos
    return tipoOk && quartosOk
  })

  return (
    <>
      <Header />

      <main className="min-h-screen pt-20">

        <section className="py-20 bg-muted">
          <div className="container mx-auto px-6">

            <h1 className="text-4xl font-bold mb-10">
              Imóveis Disponíveis
            </h1>

            {/* FILTROS */}
            <div className="flex gap-4 mb-10">

              <select
  value={tipo}
  onChange={(e) => setTipo(e.target.value)}
  className="border p-2 rounded"
>
  <option value="">Todos os tipos</option>
  <option value="Apartamento">Apartamento</option>
  <option value="Casa">Casa</option>
  <option value="Loja">Loja</option>
  <option value="Prédio Comercial">Prédio Comercial</option>
  <option value="Casa Comercial">Casa Comercial</option>
  <option value="Duplex">Duplex</option>
</select>

              <select
                value={quartos}
                onChange={(e) => setQuartos(Number(e.target.value))}
                className="border p-2 rounded"
              >
                <option value={0}>Qualquer número de quartos</option>
                <option value={1}>1+ quartos</option>
                <option value={2}>2+ quartos</option>
                <option value={3}>3+ quartos</option>
              </select>

            </div>

            {/* LISTA */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtrados.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>

          </div>
        </section>

      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}