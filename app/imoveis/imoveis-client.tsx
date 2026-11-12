"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { PropertyCard } from "@/components/property-card"
import type { Property } from "@/components/property-card"

export default function ImoveisClient({ properties }: { properties: Property[] }) {
  const categories = Array.from(new Set(properties.map((property) => property.type))).sort()
  const regions = Array.from(new Set(properties.map((property) => property.region))).sort()
  const [category, setCategory] = useState("")
  const [region, setRegion] = useState("")
  const [bedrooms, setBedrooms] = useState("")
  const [area, setArea] = useState("")
  const [applied, setApplied] = useState({ category: "", region: "", bedrooms: "", area: "" })

  const commercial = category.toLowerCase().includes("comercial") || category.toLowerCase() === "loja"
  const filtered = properties.filter((property) => {
    const commercialProperty = property.type.toLowerCase().includes("comercial") || property.type.toLowerCase() === "loja"
    return (!applied.category || property.type === applied.category) &&
      (!applied.region || property.region === applied.region) &&
      (!applied.bedrooms || (!commercialProperty && property.bedrooms >= Number(applied.bedrooms))) &&
      (!applied.area || property.area >= Number(applied.area))
  })

  function clearFilters() {
    setCategory("")
    setRegion("")
    setBedrooms("")
    setArea("")
    setApplied({ category: "", region: "", bedrooms: "", area: "" })
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-[4.25rem]">
        <section className="bg-muted py-14 md:py-20">
          <div className="container mx-auto px-6">
            <Link href="/" className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
              <ArrowLeft className="h-4 w-4" /> Voltar para início
            </Link>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-gold">Portfólio VJM</p>
            <h1 className="mb-10 font-serif text-4xl font-semibold md:text-6xl">Imóveis Disponíveis</h1>

            <div className="rounded border border-border/70 bg-background p-4 shadow-sm md:p-6">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <label className="text-sm font-medium">Categoria
                  <select value={category} onChange={(event) => { setCategory(event.target.value); setBedrooms("") }} className="mt-2 h-11 w-full rounded border border-border bg-background px-3 font-normal">
                    <option value="">Todas as categorias</option>
                    {categories.map((item) => <option key={item} value={item}>{item}</option>)}
                  </select>
                </label>
                <label className="text-sm font-medium">Região
                  <select value={region} onChange={(event) => setRegion(event.target.value)} className="mt-2 h-11 w-full rounded border border-border bg-background px-3 font-normal">
                    <option value="">Todas as regiões</option>
                    {regions.map((item) => <option key={item} value={item}>{item}</option>)}
                  </select>
                </label>
                <label className="text-sm font-medium">Dormitórios
                  <select value={bedrooms} disabled={commercial} onChange={(event) => setBedrooms(event.target.value)} className="mt-2 h-11 w-full rounded border border-border bg-background px-3 font-normal disabled:cursor-not-allowed disabled:opacity-50">
                    <option value="">Qualquer quantidade</option>
                    {[1, 2, 3, 4].map((item) => <option key={item} value={item}>{item}+ {item === 1 ? "dormitório" : "dormitórios"}</option>)}
                  </select>
                </label>
                <label className="text-sm font-medium">Área mínima
                  <select value={area} onChange={(event) => setArea(event.target.value)} className="mt-2 h-11 w-full rounded border border-border bg-background px-3 font-normal">
                    <option value="">Qualquer área</option><option value="50">A partir de 50m²</option><option value="100">A partir de 100m²</option><option value="250">A partir de 250m²</option><option value="400">A partir de 400m²</option>
                  </select>
                </label>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <button type="button" onClick={() => setApplied({ category, region, bedrooms: commercial ? "" : bedrooms, area })} className="rounded bg-foreground px-6 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/85">Aplicar filtros</button>
                <button type="button" onClick={clearFilters} className="rounded border border-border px-6 py-2.5 text-sm font-medium transition-colors hover:bg-muted">Limpar filtros</button>
              </div>
            </div>

            <p className="mb-8 mt-8 text-sm text-muted-foreground">{filtered.length} {filtered.length === 1 ? "oportunidade encontrada" : "oportunidades encontradas"}</p>
            {filtered.length ? <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">{filtered.map((property) => <PropertyCard key={property.id} property={property} />)}</div> : <div className="border border-dashed border-border bg-background p-12 text-center text-muted-foreground">Nenhum imóvel corresponde aos filtros selecionados.</div>}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
