import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function OperacoesPage() {
  return (
    <>
      <Header />
      <main className="bg-[#f8f8f5] pt-[4.25rem]">
        <section className="bg-foreground px-6 py-20 text-white md:py-28">
          <div className="mx-auto max-w-6xl">
            <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm text-white/65 transition-colors hover:text-gold"><ArrowLeft className="h-4 w-4" /> Voltar para a página inicial</Link>
            <p className="mb-4 text-[11px] uppercase tracking-[0.28em] text-gold">VJM · Operações</p>
            <h1 className="max-w-3xl font-serif text-4xl font-semibold leading-[1.05] md:text-6xl">Experiência que gera valor.</h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/55">Operações construídas pela VJM para transformar imóveis em patrimônio, renda e valorização.</p>
          </div>
        </section>
        <section className="px-6 py-16 md:py-24">
          <div className="mx-auto max-w-6xl">
            <p className="text-[11px] uppercase tracking-[0.25em] text-gold">Portfólio VJM</p>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Link href="/operacoes/petz-aclimacao" className="group overflow-hidden bg-white">
                <div className="relative aspect-square bg-muted">
                  <Image src="/images/operacao-petz-hoje.png" alt="Petz Aclimação" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex min-h-32 items-end justify-between gap-4 p-5 md:p-6">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.25em] text-gold">Operação 01 · Aclimação</p>
                    <h2 className="mt-3 font-serif text-3xl font-semibold">Petz Aclimação</h2>
                    <p className="mt-2 text-sm text-muted-foreground">Rua Muniz de Sousa, 450 · Aclimação</p>
                  </div>
                  <ArrowUpRight className="mb-1 h-6 w-6 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
              </Link>
              <Link href="/operacoes/deck03" className="group overflow-hidden bg-white">
                <div className="relative aspect-square"><Image src="/images/operacao-pedroso-hoje.png" alt="Deck03 na Rua Pedroso, 258" fill className="object-cover transition-transform duration-500 group-hover:scale-105" /></div>
                <div className="flex min-h-32 items-end justify-between gap-4 p-5 md:p-6"><div><p className="text-[11px] uppercase tracking-[0.25em] text-gold">Operação 02 · Bela Vista</p><h2 className="mt-3 font-serif text-3xl font-semibold">Deck03</h2><p className="mt-2 text-sm text-muted-foreground">Rua Pedroso, 258 · São Paulo</p></div><ArrowUpRight className="mb-1 h-6 w-6 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></div>
              </Link>
              <Link href="/operacoes/largo-do-arouche-77" className="group overflow-hidden bg-white">
                <div className="relative aspect-square"><Image src="/images/operacao-arouche-fachada.png" alt="Largo do Arouche 77" fill className="object-cover transition-transform duration-500 group-hover:scale-105" /></div>
                <div className="flex min-h-32 items-end justify-between gap-4 p-5 md:p-6"><div><p className="text-[11px] uppercase tracking-[0.25em] text-gold">Operação 03 · Centro</p><h2 className="mt-3 font-serif text-3xl font-semibold">Largo do Arouche 77</h2><p className="mt-2 text-sm text-muted-foreground">Largo do Arouche · São Paulo</p></div><ArrowUpRight className="mb-1 h-6 w-6 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></div>
              </Link>
              <Link href="/operacoes/jeep-mooca" className="group overflow-hidden bg-white">
                <div className="relative aspect-square"><Image src="/images/operacao-jeep-hoje.png" alt="Jeep Mooca" fill className="object-cover transition-transform duration-500 group-hover:scale-105" /></div>
                <div className="flex min-h-32 items-end justify-between gap-4 p-5 md:p-6"><div><p className="text-[11px] uppercase tracking-[0.25em] text-gold">Operação 04 · Mooca</p><h2 className="mt-3 font-serif text-3xl font-semibold">Jeep Mooca</h2><p className="mt-2 text-sm text-muted-foreground">Av. Alcântara Machado · Mooca</p></div><ArrowUpRight className="mb-1 h-6 w-6 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></div>
              </Link>
              <Link href="/operacoes/extrafarma-aclimacao" className="group overflow-hidden bg-white">
                <div className="relative aspect-square"><Image src="/images/operacao-extrafarma-hoje.png" alt="Extrafarma Aclimação" fill className="object-cover transition-transform duration-500 group-hover:scale-105" /></div>
                <div className="flex min-h-32 items-end justify-between gap-4 p-5 md:p-6"><div><p className="text-[11px] uppercase tracking-[0.25em] text-gold">Operação 05 · Aclimação</p><h2 className="mt-3 font-serif text-3xl font-semibold">Extrafarma Aclimação</h2><p className="mt-2 text-sm text-muted-foreground">Rua Rodrigo Cláudio, 79 · Aclimação</p></div><ArrowUpRight className="mb-1 h-6 w-6 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></div>
              </Link>
              <Link href="/operacoes/next-residence-aquidaba" className="group overflow-hidden bg-white">
                <div className="relative aspect-square"><Image src="/images/operacao-next-pronto-1.png" alt="Condomínio Next Residence pronto" fill className="object-cover transition-transform duration-500 group-hover:scale-105" /></div>
                <div className="flex min-h-32 items-end justify-between gap-4 p-5 md:p-6"><div><p className="text-[11px] uppercase tracking-[0.25em] text-gold">Operação 06 · Centro</p><h2 className="mt-3 font-serif text-3xl font-semibold">Next Residence</h2><p className="mt-2 text-sm text-muted-foreground">R. Álvares Machado, 248 · Centro, Campinas</p></div><ArrowUpRight className="mb-1 h-6 w-6 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></div>
              </Link>
              <Link href="/operacoes/extra-grajau" className="group overflow-hidden bg-white">
                <div className="relative aspect-square"><Image src="/images/operacao-extra-grajau-hoje.png" alt="Extra Grajaú" fill className="object-cover transition-transform duration-500 group-hover:scale-105" /></div>
                <div className="flex min-h-32 items-end justify-between gap-4 p-5 md:p-6"><div><p className="text-[11px] uppercase tracking-[0.25em] text-gold">Operação 07 · Grajaú</p><h2 className="mt-3 font-serif text-3xl font-semibold">Extra Grajaú</h2><p className="mt-2 text-sm text-muted-foreground">Av. Dona Belmira Marin, 3917 · São Paulo</p></div><ArrowUpRight className="mb-1 h-6 w-6 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></div>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
