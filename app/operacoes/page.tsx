import { ArrowUpRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function OperacoesPage() {
  return (
    <>
      <Header />
      <main className="bg-[#f8f8f5] pt-20">
        <section className="bg-foreground px-6 py-28 text-white md:py-40">
          <div className="mx-auto max-w-6xl">
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-gold">VJM · Operações</p>
            <h1 className="max-w-4xl font-serif text-5xl leading-[.95] md:text-8xl">Experiência que gera valor.</h1>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-white/60">Uma visão das operações construídas pela VJM para transformar imóveis em patrimônio, renda e valorização.</p>
          </div>
        </section>
        <section className="px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl border-t border-black/10 pt-8 md:grid md:grid-cols-[.7fr_1.3fr] md:gap-16">
            <p className="text-xs uppercase tracking-[0.25em] text-gold">Portfólio VJM</p>
            <div><h2 className="font-serif text-4xl md:text-6xl">Operações em breve.</h2><p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">Aqui vamos apresentar as operações já realizadas pela VJM, com o contexto de cada imóvel, a estratégia adotada e os resultados construídos.</p></div>
          </div>
        </section>
        <section className="bg-gold px-6 py-16"><div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 md:flex-row md:items-center"><div><p className="mb-3 text-xs uppercase tracking-[0.25em] text-foreground/60">Próxima operação</p><h2 className="font-serif text-4xl">Seu patrimônio pode estar aqui.</h2></div><a href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20quero%20conhecer%20as%20opera%C3%A7%C3%B5es%20da%20VJM." target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border-b border-foreground pb-2 text-sm">Falar com a VJM <ArrowUpRight className="h-4 w-4" /></a></div></section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
