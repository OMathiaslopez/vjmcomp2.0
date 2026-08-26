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
  const [regiao, setRegiao] = useState("")
  const [quartos, setQuartos] = useState(0)
  const [areaMinima, setAreaMinima] = useState(0)

  const filtrados = properties.filter((p) => {
    const isCorporate = p.type.includes("Comercial") || p.type === "Loja"
    const tipoOk = tipo === "" || (tipo === "corporativo" && isCorporate) || (tipo === "patrimonial" && !isCorporate) || (tipo === "comercial" && p.type.includes("Comercial")) || (tipo === "lojas" && p.type === "Loja")
    const regiaoOk = regiao === "" || p.region.toLowerCase().includes(regiao.toLowerCase())
    const quartosOk = quartos === 0 || p.bedrooms >= quartos
    const areaOk = areaMinima === 0 || p.area >= areaMinima
    return tipoOk && regiaoOk && quartosOk && areaOk
  })

  const limparFiltros = () => { setTipo(""); setRegiao(""); setQuartos(0); setAreaMinima(0) }

  return (
    <>
      <Header />

      <main className="min-h-screen pt-[4.25rem]">

        <section className="py-20 bg-muted">
          <div className="container mx-auto px-6">

            <p className="text-gold text-sm uppercase tracking-[0.25em] mb-4 font-medium">Portfólio VJM</p>
            <h1 className="font-serif text-4xl md:text-6xl font-semibold mb-10">
              Imóveis Disponíveis
            </h1>

            {/* FILTROS */}
            <div className="property-filters flex flex-col sm:flex-row gap-4 mb-10">

              <select
  value={tipo}
  onChange={(e) => setTipo(e.target.value)}
  className="border p-2 rounded"
>
                  <option value="">Todos os segmentos</option>
                  <option value="corporativo">Corporativo</option>
                  <option value="patrimonial">Patrimonial</option>
                  <option value="comercial">Imóveis comerciais</option>
                  <option value="lojas">Lojas e pontos comerciais</option>
                </select>

              <select
                value={regiao}
                onChange={(e) => setRegiao(e.target.value)}
                className="border p-2 rounded"
              >
                <option value="">Todas as regiões</option>
                <option value="Jardins">Jardins</option>
                <option value="Vila Mariana">Vila Mariana</option>
                <option value="Vila Olímpia">Vila Olímpia</option>
                <option value="Moema">Moema</option>
                <option value="Alto do Ipiranga">Alto do Ipiranga</option>
                <option value="Lapa">Lapa</option>
              </select>

              <select value={quartos} onChange={(e) => setQuartos(Number(e.target.value))} className="border p-2 rounded">
                <option value={0}>Qualquer dormitório</option>
                <option value={1}>1+ dormitório</option>
                <option value={2}>2+ dormitórios</option>
                <option value={3}>3+ dormitórios</option>
                <option value={4}>4+ dormitórios</option>
              </select>

              <select value={areaMinima} onChange={(e) => setAreaMinima(Number(e.target.value))} className="border p-2 rounded">
                <option value={0}>Qualquer área</option>
                <option value={50}>A partir de 50m²</option>
                <option value={100}>A partir de 100m²</option>
                <option value={250}>A partir de 250m²</option>
                <option value={400}>A partir de 400m²</option>
              </select>

              {(tipo || regiao || quartos || areaMinima) && <button type="button" onClick={limparFiltros} className="filter-clear">Limpar filtros</button>}

            </div>

            <p className="text-sm text-muted-foreground mb-8">{filtrados.length} {filtrados.length === 1 ? "oportunidade encontrada" : "oportunidades encontradas"}</p>

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
