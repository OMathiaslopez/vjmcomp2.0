import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Building2, Home, Key, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { PropertyCard } from "@/components/property-card"
import { ConsultantsSection } from "@/components/consultants-section"
import { properties } from "@/lib/properties"

export default function HomePage() {
  const featuredProperties = properties.slice(0, 3)

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">

        {/* Hero Section */}
        <section className="relative h-[90vh] min-h-[600px] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero.jpg"
              alt="Imóveis de alto padrão em São Paulo"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <p className="text-primary-foreground/80 text-sm uppercase tracking-[0.3em] mb-6 font-medium">
                Consultoria Imobiliária em São Paulo
              </p>

              <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary-foreground leading-tight mb-6">
Imóveis exclusivos em São Paulo
</h1>

<p className="text-primary-foreground/80 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
Especialistas em imóveis residenciais e comerciais nas regiões mais valorizadas da cidade.
Atendimento personalizado para compra, venda e investimento imobiliário.
</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-base px-8 bg-gold hover:bg-gold/90 text-foreground">
                  <Link href="/imoveis">
                    Ver Imóveis Disponíveis
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>

                <Button asChild size="lg" className="text-base px-8 border border-gold text-gold hover:bg-gold hover:text-foreground">
                  <a href="#contato">
                    Falar com um Consultor
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Preview */}
        <section id="sobre" className="py-24 bg-card scroll-mt-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              <div>
                <p className="text-gold text-sm uppercase tracking-[0.2em] mb-4 font-medium">
                  Sobre a VJM
                </p>

                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                  Experiência, tradição e visão de futuro
                </h2>

                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  A VJM Consultoria Imobiliária nasce oficialmente como marca, mas carrega uma
                  trajetória construída ao longo de mais de duas décadas de atuação no mercado
                  imobiliário de São Paulo.
                </p>

                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Essa história começou com André Lopez, que desenvolveu uma carreira sólida
                  baseada em confiança, relacionamento e profundo conhecimento do mercado.
                </p>

                <p className="text-muted-foreground text-lg leading-relaxed">
                  Hoje, a nova geração representada por Mathias e João Pedro Lopez traz uma visão
                  contemporânea e estratégica, unindo tradição, tecnologia e atendimento
                  personalizado para oferecer uma experiência imobiliária de alto nível.
                </p>
              </div>

              <div className="relative">
                <div className="aspect-[4/5] relative">
                  <Image
                    src="/images/property-3.jpg"
                    alt="Imóvel de alto padrão"
                    fill
                    className="object-cover rounded-sm"
                  />
                </div>

                <div className="absolute -bottom-8 -left-8 bg-foreground text-primary-foreground p-8 rounded-sm hidden md:block">
                  <p className="font-serif text-5xl font-bold text-gold">20+</p>
                  <p className="text-sm uppercase tracking-wider mt-2">
                    Anos de Experiência no Mercado
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Areas of Expertise */}
        <section id="areas-atuacao" className="py-24 bg-background scroll-mt-24">
          <div className="container mx-auto px-6">

            <div className="text-center mb-16">
              <p className="text-gold text-sm uppercase tracking-[0.2em] mb-4 font-medium">
                Áreas de Atuação
              </p>

              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Especialização em diferentes segmentos do mercado
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              <div className="bg-card p-10 rounded-sm border border-border hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gold/10 rounded-sm">
                    <Home className="h-6 w-6 text-gold" />
                  </div>

                  <h3 className="font-serif text-2xl font-semibold text-foreground">
                    Residencial de Alto Padrão
                  </h3>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Atendimento especializado conduzido por Mathias Lopez e João Pedro Lopez,
                  focado em imóveis residenciais localizados nas regiões mais valorizadas
                  da Zona Sul de São Paulo.
                </p>

                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                    Vila Mariana
                  </li>

                  <li className="flex items-center gap-2 text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                    Chácara Klabin
                  </li>

                  <li className="flex items-center gap-2 text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                    Jardins
                  </li>
                </ul>
              </div>

              <div className="bg-card p-10 rounded-sm border border-border hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gold/10 rounded-sm">
                    <Building2 className="h-6 w-6 text-gold" />
                  </div>

                  <h3 className="font-serif text-2xl font-semibold text-foreground">
                    Corporativo e Patrimonial
                  </h3>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Segmento conduzido por André Lopez, com atuação estratégica em operações
                  imobiliárias complexas e gestão patrimonial para investidores e empresas.
                </p>

                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                    Galpões Logísticos
                  </li>

                  <li className="flex items-center gap-2 text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                    Terrenos para Incorporação
                  </li>

                  <li className="flex items-center gap-2 text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                    Lojas com Renda
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* Featured Properties */}
        <section id="imoveis" className="py-24 bg-muted scroll-mt-24">
          <div className="container mx-auto px-6">

            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <p className="text-gold text-sm uppercase tracking-[0.2em] mb-4 font-medium">
                  Imóveis em Destaque
                </p>

                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                  Oportunidades selecionadas
                </h2>
              </div>

              <Button asChild variant="outline" size="lg">
                <Link href="/imoveis">
                  Ver Todos os Imóveis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>

          </div>
        </section>

        {/* Services */}
        <section id="servicos" className="py-24 bg-card scroll-mt-24">
          <div className="container mx-auto px-6">

            <div className="text-center mb-16">
              <p className="text-gold text-sm uppercase tracking-[0.2em] mb-4 font-medium">
                Nossos Serviços
              </p>

              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Consultoria imobiliária completa
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              <div className="text-center p-8">
                <div className="inline-flex items-center justify-center p-4 bg-gold/10 rounded-full mb-6">
                  <Key className="h-8 w-8 text-gold" />
                </div>

                <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                  Compra de Imóveis
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  Assessoria completa para identificar, analisar e adquirir o imóvel
                  ideal com segurança e estratégia.
                </p>
              </div>

              <div className="text-center p-8">
                <div className="inline-flex items-center justify-center p-4 bg-gold/10 rounded-full mb-6">
                  <Building2 className="h-8 w-8 text-gold" />
                </div>

                <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                  Venda de Imóveis
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  Estratégia de posicionamento e comercialização para valorizar
                  seu patrimônio e alcançar o melhor resultado de mercado.
                </p>
              </div>

              <div className="text-center p-8">
                <div className="inline-flex items-center justify-center p-4 bg-gold/10 rounded-full mb-6">
                  <TrendingUp className="h-8 w-8 text-gold" />
                </div>

                <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                  Consultoria Patrimonial
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  Orientação estratégica para investidores e clientes que desejam
                  estruturar ou expandir seu patrimônio imobiliário.
                </p>
              </div>

            </div>
          </div>
        </section>

        <ConsultantsSection />

      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}