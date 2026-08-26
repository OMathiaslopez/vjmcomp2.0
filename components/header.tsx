"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("inicio")
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(
        pathname.startsWith("/imoveis") ? "imoveis" : pathname.startsWith("/operacoes") ? "operacoes" : ""
      )
      return
    }
    const ids = ["sobre", "imoveis", "servicos", "operacoes", "contato"]
    const updateActiveSection = () => {
      const current = ids
        .map((id) => ({
          id,
          top: document.getElementById(id)?.getBoundingClientRect().top ?? Number.POSITIVE_INFINITY,
        }))
        .filter((section) => section.top <= 140)
        .sort((a, b) => b.top - a.top)[0]
      setActiveSection(current?.id ?? "inicio")
    }
    updateActiveSection()
    window.addEventListener("scroll", updateActiveSection, { passive: true })
    return () => window.removeEventListener("scroll", updateActiveSection)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const navClass = (id: string) =>
    `nav-item text-[13px] font-medium tracking-wide hover:text-gold transition-colors ${
      activeSection === id ? "nav-item-active text-gold" : "text-foreground/80"
    }`

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    } else {
      window.location.href = `/#${id}`
    }
  }

  const goToHome = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    setIsMenuOpen(false)
    if (window.location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      window.location.href = "/"
    }
  }

  return (
    <header className={`site-header fixed top-0 right-0 left-0 z-50 ${scrolled ? "site-header-scrolled" : ""}`}>
      <nav className="luxury-nav relative mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        <Link href="/" className="flex shrink-0 items-center" onClick={goToHome}>
          <Image
            src="/images/logo-vjm.png"
            alt="VJM Consultoria Imobiliária"
            width={280}
            height={90}
            className="h-14 w-auto object-contain md:h-16"
            priority
          />
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          <Link href="/" scroll={false} onClick={goToHome} className={navClass("inicio")}>
            Início
          </Link>
          <button onClick={() => scrollToSection("sobre")} className={navClass("sobre")}>
            Sobre
          </button>
          <button onClick={() => scrollToSection("imoveis")} className={navClass("imoveis")}>
            Imóveis
          </button>
          <button onClick={() => scrollToSection("servicos")} className={navClass("servicos")}>
            Serviços
          </button>
          <button onClick={() => scrollToSection("operacoes")} className={navClass("operacoes")}>
            Operações
          </button>
          <button onClick={() => scrollToSection("contato")} className={navClass("contato")}>
            Contato
          </button>
        </div>

        <div className="hidden items-center md:flex">
          <Button
            size="sm"
            className="h-9 bg-gold px-5 text-[13px] text-foreground hover:bg-gold/90"
            onClick={() => scrollToSection("contato")}
          >
            Falar com Consultor
          </Button>
        </div>

        <button className="p-2 md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {isMenuOpen && (
          <div className="absolute top-full right-0 left-0 border-b border-neutral-200/80 bg-white/98 px-6 py-5 shadow-lg backdrop-blur md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col gap-3">
              <Link href="/" scroll={false} onClick={goToHome} className={navClass("inicio")}>
                Início
              </Link>
              <button onClick={() => scrollToSection("sobre")} className={`${navClass("sobre")} text-left`}>
                Sobre
              </button>
              <button onClick={() => scrollToSection("imoveis")} className={`${navClass("imoveis")} text-left`}>
                Imóveis
              </button>
              <button onClick={() => scrollToSection("servicos")} className={`${navClass("servicos")} text-left`}>
                Serviços
              </button>
              <button onClick={() => scrollToSection("operacoes")} className={`${navClass("operacoes")} text-left`}>
                Operações
              </button>
              <button onClick={() => scrollToSection("contato")} className={`${navClass("contato")} text-left`}>
                Contato
              </button>
              <div className="flex flex-col gap-2 pt-3">
                <Button asChild variant="outline" size="sm">
                  <Link href="/imoveis" onClick={() => setIsMenuOpen(false)}>
                    Ver Imóveis
                  </Link>
                </Button>
                <Button
                  size="sm"
                  className="bg-gold text-black hover:bg-gold/90"
                  onClick={() => scrollToSection("contato")}
                >
                  Falar com Consultor
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
