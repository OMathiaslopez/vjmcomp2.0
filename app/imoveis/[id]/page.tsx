import { PropertyGallery } from "@/components/property-gallery"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowLeft,
  Bed,
  Bath,
  Car,
  Maximize,
  MapPin,
  MessageCircle,
  Calendar
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

import { properties, getPropertyById } from "@/lib/properties"
import type { Metadata } from "next"

export const dynamic = "force-dynamic"

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return properties.map((property) => ({
    id: property.id,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {

  const { id } = await params
  const property = getPropertyById(id)

  if (!property) {
    return {
      title: "Imóvel não encontrado | VJM Consultoria Imobiliária",
    }
  }

  return {
    title: `${property.title} - ${property.region} | VJM Consultoria Imobiliária`,
    description: property.description,
  }
}

export default async function PropertyPage({ params }: PageProps) {

  const { id } = await params
  const property = getPropertyById(id)

  if (!property) {
    notFound()
  }

  const images =
    property.images && property.images.length > 0
      ? property.images
      : [property.image]

  const whatsappNumber = "5511978392241"

  const message = encodeURIComponent(
    `Olá! Tenho interesse no imóvel: ${property.title} - ${property.region}`
  )

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: property.title,
    description: property.description,
    url: `https://www.vjmconsultoria.com.br/imoveis/${property.id}`,
    image: images,
    address: { "@type": "PostalAddress", addressLocality: property.region, addressCountry: "BR" },
  }

  return (
    <>
      <Header />

        <main className="min-h-screen pt-[4.25rem]">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

        <section className="py-6 bg-muted border-b border-border">
          <div className="container mx-auto px-6">
            <Link
              href="/imoveis"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar para Imóveis
            </Link>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-6">

            <div className="grid lg:grid-cols-3 gap-12">

              <div className="lg:col-span-2">

                <PropertyGallery
                  images={images}
                  title={property.title}
                  type={property.type}
                />

                <div className="mb-8">

                  <div className="flex items-center gap-2 text-muted-foreground mb-3">
                    <MapPin className="h-5 w-5" />
                    {property.region}
                  </div>

                   <h1 className="text-4xl font-bold">
                     {property.title}
                   </h1>
                   <span className="availability-badge availability-badge-detail">
                     {property.type.includes("Comercial") || property.type === "Loja" ? "Venda e locação" : "Consulte disponibilidade"}
                   </span>

                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-muted rounded mb-8">

                  <div className="text-center">
                    <Maximize className="h-6 w-6 mx-auto mb-2" />
                    <p className="text-xl font-semibold">{property.area}m²</p>
                    <p className="text-sm text-muted-foreground">Área</p>
                  </div>

                  <div className="text-center">
                    <Bed className="h-6 w-6 mx-auto mb-2" />
                    <p className="text-xl font-semibold">{property.bedrooms}</p>
                    <p className="text-sm text-muted-foreground">Quartos</p>
                  </div>

                  <div className="text-center">
                    <Bath className="h-6 w-6 mx-auto mb-2" />
                    <p className="text-xl font-semibold">{property.bathrooms}</p>
                    <p className="text-sm text-muted-foreground">Banheiros</p>
                  </div>

                  <div className="text-center">
                    <Car className="h-6 w-6 mx-auto mb-2" />
                    <p className="text-xl font-semibold">{property.parking}</p>
                    <p className="text-sm text-muted-foreground">Vagas</p>
                  </div>

                </div>

                <div className="mb-10">

                  <h2 className="text-2xl font-semibold mb-4">
                    Descrição
                  </h2>

                  <p className="text-muted-foreground leading-relaxed">
                    {property.description}
                  </p>

                </div>

              </div>

              <div>

                <div className="property-header-card sticky top-28 border p-8 rounded">

                  <h3 className="text-xl font-semibold mb-6">
                    Interessado neste imóvel?
                  </h3>

                  <div className="space-y-4">

                    <Button asChild className="w-full bg-gold hover:bg-gold/90 text-black">
                      <a href={whatsappUrl} target="_blank">
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Falar no WhatsApp
                      </a>
                    </Button>

                    <Button asChild variant="outline" className="w-full">
                    <Link href="/#contato">
                        <Calendar className="mr-2 h-5 w-5" />
                        Agendar visita
                      </Link>
                    </Button>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
