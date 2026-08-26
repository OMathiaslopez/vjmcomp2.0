"use client"

import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Building2, Key, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { PropertyCard } from "@/components/property-card"
import { ConsultantsSection } from "@/components/consultants-section"
import { ScrollReveal, StaggerItem, StaggerReveal, TiltCard } from "@/components/scroll-reveal"
import { properties } from "@/lib/properties"

const HeroScene = dynamic(() => import("@/components/hero-scene").then((m) => m.HeroScene), {
  ssr: false,
})

export default function HomePage() {
  const featuredProperties = properties.slice(0, 3)

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="hero-luxury relative flex h-[88vh] min-h-[560px] items-center">
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

          <HeroScene />

          <div className="container relative z-10 mx-auto px-6">
            <div className="hero-copy max-w-3xl">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-primary-foreground/80"
              >
                Consultoria Imobiliária em São Paulo
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 36, rotateX: 12 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="mb-6 font-serif text-4xl font-bold leading-tight text-primary-foreground md:text-6xl"
                style={{ transformPerspective: 1000 }}
              >
                Imóveis exclusivos em São Paulo
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.65 }}
                className="mb-10 max-w-lg text-lg leading-relaxed text-primary-foreground/80 md:text-xl"
              >
                Especialistas em imóveis residenciais e comerciais nas regiões mais valorizadas da cidade.
                Atendimento personalizado para compra, venda e investimento imobiliário.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.85 }}
                className="flex flex-col gap-4 sm:flex-row"
              >
                <Button asChild size="lg" className="btn-3d bg-gold px-8 text-base text-foreground hover:bg-gold/90">
                  <Link href="/imoveis">
                    Ver Imóveis Disponíveis
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  className="btn-3d border border-gold bg-transparent px-8 text-base text-gold hover:bg-gold hover:text-foreground"
                >
                  <a href="#contato">Falar com um Consultor</a>
                </Button>
              </motion.div>

              <div className="hero-signature" aria-hidden="true">
                <span>VJM</span>
                <small>
                  PRIVATE
                  <br />
                  REAL ESTATE
                </small>
              </div>
            </div>
          </div>

          <div className="hero-scroll-hint" aria-hidden="true">
            <span />
          </div>
        </section>

        <section id="sobre" className="reveal-section scroll-mt-24 bg-card py-20 md:py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <ScrollReveal>
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-gold">Sobre a VJM</p>
                <h2 className="mb-5 font-serif text-3xl font-semibold leading-tight text-foreground md:text-4xl lg:text-[2.75rem]">
                  Experiência, tradição e visão de futuro
                </h2>
                <p className="mb-4 text-base leading-relaxed text-muted-foreground md:text-[1.05rem]">
                  A VJM Consultoria Imobiliária nasce oficialmente como marca, mas carrega uma trajetória construída ao
                  longo de mais de duas décadas de atuação no mercado imobiliário de São Paulo.
                </p>
                <p className="mb-4 text-base leading-relaxed text-muted-foreground md:text-[1.05rem]">
                  Essa história começou com André Lopez, que desenvolveu uma carreira sólida baseada em confiança,
                  relacionamento e profundo conhecimento do mercado.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground md:text-[1.05rem]">
                  Hoje, a nova geração representada por Mathias e João Pedro Lopez traz uma visão contemporânea e
                  estratégica, unindo tradição, tecnologia e atendimento personalizado para oferecer uma experiência
                  imobiliária de alto nível.
                </p>
              </ScrollReveal>

              <ScrollReveal variant="scale" delay={0.15}>
                <div className="relative">
                  <div className="about-3d-frame aspect-[4/5] relative">
                    <Image
                      src="/images/vjm-institutional.svg"
                      alt="Arte institucional VJM com arquitetura e patrimônio em São Paulo"
                      fill
                      className="rounded-sm object-cover"
                    />
                    <div className="about-brand-overlay">
                      <Image src="/images/logo-vjm.png" alt="VJM" width={240} height={75} className="h-14 w-auto md:h-16" />
                      <span>Patrimônio · Estratégia · São Paulo</span>
                    </div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: -30, rotateY: 20 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="absolute -bottom-8 -left-8 hidden rounded-sm bg-foreground p-8 text-primary-foreground md:block"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <p className="font-serif text-5xl font-bold text-gold">20+</p>
                    <p className="mt-2 text-sm uppercase tracking-wider">Anos de Experiência no Mercado</p>
                  </motion.div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section id="areas-atuacao" className="areas-editorial reveal-section scroll-mt-24">
          <div className="architecture-wireframe" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
            <span />
          </div>
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="areas-intro">
                <div>
                  <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-gold">Áreas de atuação</p>
                  <h2 className="font-serif text-4xl font-semibold leading-[1.05] text-foreground md:text-6xl">
                    Duas frentes.
                    <br />
                    <span className="text-gold">Uma visão estratégica.</span>
                  </h2>
                </div>
                <p className="areas-lead">
                  A VJM atua no encontro entre imóveis, negócios e patrimônio. Mais do que apresentar ativos, conectamos
                  cada oportunidade ao objetivo de quem investe.
                </p>
              </div>
            </ScrollReveal>

            <StaggerReveal className="areas-fronts">
              <StaggerItem>
                <article className="area-front area-front-corporate area-front-3d">
                  <span className="area-index">01 / 02</span>
                  <h3>Corporativo</h3>
                  <p>
                    Imóveis comerciais e oportunidades estratégicas para empresas e investidores, conectando cada cliente
                    a ativos com localização, demanda, potencial de valorização e geração de renda.
                  </p>
                  <span className="area-arrow">↗</span>
                </article>
              </StaggerItem>
              <div className="areas-connector">
                <span>VJM</span>
                <i />
              </div>
              <StaggerItem>
                <article className="area-front area-front-patrimonial area-front-3d">
                  <span className="area-index">02 / 02</span>
                  <h3>Patrimonial</h3>
                  <p>
                    Estratégias imobiliárias para clientes que buscam construir, preservar e ampliar patrimônio através de
                    imóveis que façam sentido hoje e continuem fazendo sentido no futuro.
                  </p>
                  <span className="area-arrow">↗</span>
                </article>
              </StaggerItem>
            </StaggerReveal>

            <div className="strategy-map" aria-hidden="true">
              <div className="map-grid" />
              <svg viewBox="0 0 900 260" preserveAspectRatio="none">
                <path d="M30 205 C180 180 175 80 330 115 S500 245 625 130 S770 60 870 35" />
              </svg>
              <span className="map-node node-one">Jardins</span>
              <span className="map-node node-two">Vila Olímpia</span>
              <span className="map-node node-three">Vila Mariana</span>
              <span className="map-caption">Localização · Demanda · Valor</span>
            </div>

            <ScrollReveal>
              <div className="strategy-flow">
                <div className="strategy-heading">
                  <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-gold">Como a VJM pensa e analisa</p>
                  <h3 className="font-serif text-3xl font-semibold leading-tight md:text-5xl">
                    Patrimônio com
                    <br />
                    <span className="text-gold">estratégia.</span>
                  </h3>
                </div>
                <div className="strategy-copy">
                  <p>
                    Na VJM, nosso trabalho vai além da intermediação imobiliária. Analisamos localização, perfil do
                    imóvel, demanda, potencial de valorização, capacidade de geração de renda e o objetivo de cada
                    investidor.
                  </p>
                  <p>A partir disso, buscamos oportunidades que façam sentido para cada cliente.</p>
                  <div className="strategy-example">
                    <span className="text-xs uppercase tracking-[0.2em] text-gold">Exemplo de estratégia</span>
                    <p>
                      Um investidor pode adquirir um imóvel comercial em uma região estratégica, já locado, e começar a
                      receber a renda do aluguel enquanto mantém um ativo imobiliário em seu patrimônio.
                    </p>
                    <a
                      className="investor-cta"
                      href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20oportunidades%20imobili%C3%A1rias%20para%20investimento%20e%20gera%C3%A7%C3%A3o%20de%20renda."
                      target="_blank"
                      rel="noreferrer"
                    >
                      Falar sobre oportunidades para investidores <span>↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </section>

        <section id="imoveis" className="reveal-section scroll-mt-24 bg-muted py-20 md:py-24">
          <div className="container mx-auto px-6">
            <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <ScrollReveal>
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-gold">Imóveis em Destaque</p>
                <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl lg:text-[2.75rem]">
                  Oportunidades selecionadas
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <Button asChild variant="outline" size="lg" className="btn-3d">
                  <Link href="/imoveis">
                    Ver Todos os Imóveis
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </ScrollReveal>
            </div>

            <StaggerReveal className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {featuredProperties.map((property) => (
                <StaggerItem key={property.id}>
                  <TiltCard>
                    <PropertyCard property={property} />
                  </TiltCard>
                </StaggerItem>
              ))}
            </StaggerReveal>
          </div>
        </section>

        <section id="servicos" className="reveal-section scroll-mt-24 bg-card py-20 md:py-24">
          <div className="container mx-auto px-6">
            <ScrollReveal className="mb-12 text-center">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-gold">Nossos Serviços</p>
              <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl lg:text-[2.75rem]">
                Consultoria imobiliária completa
              </h2>
            </ScrollReveal>

            <StaggerReveal className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  icon: Key,
                  title: "Compra de Imóveis",
                  text: "Assessoria completa para identificar, analisar e adquirir o imóvel ideal com segurança e estratégia.",
                },
                {
                  icon: Building2,
                  title: "Venda de Imóveis",
                  text: "Estratégia de posicionamento e comercialização para valorizar seu patrimônio e alcançar o melhor resultado de mercado.",
                },
                {
                  icon: TrendingUp,
                  title: "Consultoria Patrimonial",
                  text: "Orientação estratégica para investidores e clientes que desejam estruturar ou expandir seu patrimônio imobiliário.",
                },
              ].map((service) => (
                <StaggerItem key={service.title}>
                  <TiltCard className="service-card-3d p-8 text-center">
                    <div className="mb-6 inline-flex items-center justify-center rounded-full bg-gold/10 p-4">
                      <service.icon className="h-8 w-8 text-gold" />
                    </div>
                    <h3 className="mb-4 font-serif text-xl font-semibold text-foreground">{service.title}</h3>
                    <p className="leading-relaxed text-muted-foreground">{service.text}</p>
                  </TiltCard>
                </StaggerItem>
              ))}
            </StaggerReveal>
          </div>
        </section>

        <section id="operacoes" className="scroll-mt-24 bg-foreground px-6 py-16 text-white md:py-20">
          <ScrollReveal>
            <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-[.85fr_1.15fr] md:items-end">
              <div>
                <p className="mb-3 text-[11px] uppercase tracking-[0.24em] text-gold">Operações VJM</p>
                <h2 className="font-serif text-3xl font-semibold md:text-5xl">Patrimônio em movimento.</h2>
              </div>
              <div className="border-l border-gold/70 pl-5 md:pl-8">
                <p className="max-w-xl text-base leading-relaxed text-white/60 md:text-[1.05rem]">
                  Apresentamos as operações construídas pela VJM para transformar imóveis em patrimônio, renda e
                  valorização.
                </p>
                <Link
                  href="/operacoes"
                  className="mt-5 inline-flex items-center gap-2 border-b border-gold pb-1.5 text-sm text-gold transition-all hover:gap-3"
                >
                  Conhecer operações <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </section>

        <ConsultantsSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
