import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Building2, Key, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { PropertyCard } from "@/components/property-card"
import { ConsultantsSection } from "@/components/consultants-section"
import { VgvCounter } from "@/components/vgv-counter"
import { properties } from "@/lib/properties"

export default function HomePage() {
  const featuredProperties = properties.slice(0, 3)

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">

        {/* Hero Section */}
        <section className="hero-luxury relative h-[90vh] min-h-[600px] flex items-center">
            <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=90"
              alt="Edifício corporativo moderno em região valorizada"
              fill
              className="object-cover"
              priority
            />
              <div className="hero-overlay absolute inset-0" />
              <div className="hero-grid absolute inset-0" aria-hidden="true" />
              <div className="hero-orb hero-orb-one" aria-hidden="true" />
              <div className="hero-orb hero-orb-two" aria-hidden="true" />
            </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="hero-copy max-w-3xl">
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
              <div className="hero-signature" aria-hidden="true"><span>VJM</span><small>PRIVATE<br />REAL ESTATE</small></div>
            </div>
          </div>
        </section>

        {/* About Preview */}
        <section id="sobre" className="reveal-section py-24 bg-card scroll-mt-24">
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
                    src="/images/vjm-institutional.svg"
                    alt="Arte institucional VJM com arquitetura e patrimônio em São Paulo"
                    fill
                    className="object-cover rounded-sm"
                  />
                  <div className="about-brand-overlay">
                    <Image src="/images/logo-vjm.png" alt="VJM" width={180} height={56} />
                    <span>Patrimônio · Estratégia · São Paulo</span>
                  </div>
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

        <section id="areas-atuacao" className="areas-editorial reveal-section scroll-mt-24">
          <div className="architecture-wireframe" aria-hidden="true"><i /><i /><i /><i /><span /></div>
          <div className="container mx-auto px-6">
            <div className="areas-intro"><div><p className="text-gold text-sm uppercase tracking-[0.25em] mb-5 font-medium">Áreas de atuação</p><h2 className="font-serif text-4xl md:text-6xl font-semibold leading-[1.05] text-foreground">Duas frentes.<br /><span className="text-gold">Uma visão estratégica.</span></h2></div><p className="areas-lead">A VJM atua no encontro entre imóveis, negócios e patrimônio. Mais do que apresentar ativos, conectamos cada oportunidade ao objetivo de quem investe.</p></div>
            <div className="areas-fronts"><article className="area-front area-front-corporate"><span className="area-index">01 / 02</span><h3>Corporativo</h3><p>Imóveis comerciais e oportunidades estratégicas para empresas e investidores, conectando cada cliente a ativos com localização, demanda, potencial de valorização e geração de renda.</p><span className="area-arrow">↗</span></article><div className="areas-connector"><span>VJM</span><i /></div><article className="area-front area-front-patrimonial"><span className="area-index">02 / 02</span><h3>Patrimonial</h3><p>Estratégias imobiliárias para clientes que buscam construir, preservar e ampliar patrimônio através de imóveis que façam sentido hoje e continuem fazendo sentido no futuro.</p><span className="area-arrow">↗</span></article></div>
            <div className="strategy-map" aria-hidden="true"><div className="map-grid" /><svg viewBox="0 0 900 260" preserveAspectRatio="none"><path d="M30 205 C180 180 175 80 330 115 S500 245 625 130 S770 60 870 35" /></svg><span className="map-node node-one">Jardins</span><span className="map-node node-two">Vila Olímpia</span><span className="map-node node-three">Vila Mariana</span><span className="map-caption">Localização · Demanda · Valor</span></div>
            <div className="strategy-flow"><div className="strategy-heading"><p className="text-gold text-sm uppercase tracking-[0.22em] mb-4 font-medium">Como a VJM pensa e analisa</p><h3 className="font-serif text-3xl md:text-5xl font-semibold leading-tight">Patrimônio com<br /><span className="text-gold">estratégia.</span></h3></div><div className="strategy-copy"><p>Na VJM, nosso trabalho vai além da intermediação imobiliária. Analisamos localização, perfil do imóvel, demanda, potencial de valorização, capacidade de geração de renda e o objetivo de cada investidor.</p><p>A partir disso, buscamos oportunidades que façam sentido para cada cliente.</p><div className="strategy-example"><span className="text-gold text-xs uppercase tracking-[0.2em]">Exemplo de estratégia</span><p>Um investidor pode adquirir um imóvel comercial em uma região estratégica, já locado, e começar a receber a renda do aluguel enquanto mantém um ativo imobiliário em seu patrimônio.</p><a className="investor-cta" href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20oportunidades%20imobili%C3%A1rias%20para%20investimento%20e%20gera%C3%A7%C3%A3o%20de%20renda." target="_blank" rel="noreferrer">Falar sobre oportunidades para investidores <span>↗</span></a></div></div></div>
            <div className="vgv-stage"><div className="vgv-stage-copy"><span className="text-gold text-sm uppercase tracking-[0.22em] font-medium">Resultado em movimento</span><h3 className="font-serif text-3xl md:text-5xl font-semibold">A estratégia<br />se transforma em <span className="text-gold">resultado.</span></h3></div><VgvCounter /></div>
          </div>
        </section>

        {/* Featured Properties */}
        <section id="imoveis" className="reveal-section py-24 bg-muted scroll-mt-24">
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
        <section id="servicos" className="reveal-section py-24 bg-card scroll-mt-24">
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

        <section id="operacoes" className="bg-foreground px-6 py-20 text-white scroll-mt-24 md:py-28">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[.8fr_1.2fr] md:items-end">
            <div><p className="mb-4 text-xs uppercase tracking-[0.28em] text-gold">Operações VJM</p><h2 className="font-serif text-4xl md:text-6xl">Patrimônio em movimento.</h2></div>
            <div className="border-l border-gold pl-6 md:pl-10"><p className="max-w-xl text-lg leading-relaxed text-white/65">Apresentamos as operações construídas pela VJM para transformar imóveis em patrimônio, renda e valorização.</p><Link href="/operacoes" className="mt-6 inline-flex items-center gap-2 border-b border-gold pb-2 text-sm text-gold">Conhecer operações <ArrowRight className="h-4 w-4" /></Link></div>
          </div>
        </section>

        <ConsultantsSection />

      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
