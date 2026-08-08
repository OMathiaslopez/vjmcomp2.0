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
  const pathname = usePathname()

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(pathname.startsWith("/imoveis") ? "imoveis" : "")
      return
    }
    const ids = ["sobre", "areas-atuacao", "imoveis", "servicos", "contato"]
    const updateActiveSection = () => {
      const current = ids
        .map((id) => ({ id, top: document.getElementById(id)?.getBoundingClientRect().top ?? Number.POSITIVE_INFINITY }))
        .filter((section) => section.top <= 180)
        .sort((a, b) => b.top - a.top)[0]
      setActiveSection(current?.id ?? "inicio")
    }
    updateActiveSection()
    window.addEventListener("scroll", updateActiveSection, { passive: true })
    return () => window.removeEventListener("scroll", updateActiveSection)
  }, [pathname])

  const navClass = (id: string) => `nav-item text-sm font-medium hover:text-gold transition-colors ${activeSection === id ? "nav-item-active text-gold" : ""}`

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-neutral-200">
      <nav className="luxury-nav container mx-auto px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">

          {/* LOGO */}
<Link href="/" className="flex items-center" onClick={goToHome}>
  <Image
    src="/images/logo-vjm.png"
    alt="VJM Consultoria Imobiliária"
    width={320}
    height={100}
    className="h-20 w-auto object-contain"
    priority
  />
</Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10 mx-auto">
            <Link
              href="/"
              scroll={false}
              onClick={goToHome}
              className={navClass("inicio")}
            >
              Início
            </Link>

            <button
              onClick={() => scrollToSection("sobre")}
              className={navClass("sobre")}
            >
              Sobre
            </button>

            <button
              onClick={() => scrollToSection("areas-atuacao")}
              className={navClass("areas-atuacao")}
            >
              Áreas de Atuação
            </button>

            <button
              onClick={() => scrollToSection("imoveis")}
              className={navClass("imoveis")}
            >
              Imóveis
            </button>

            <button
              onClick={() => scrollToSection("servicos")}
              className={navClass("servicos")}
            >
              Nossos Serviços
            </button>

            <button
              onClick={() => scrollToSection("contato")}
              className={navClass("contato")}
            >
              Contato
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-neutral-200 pt-4">
            <div className="flex flex-col gap-4">

              <Link
                href="/"
                scroll={false}
                onClick={goToHome}
                className={navClass("inicio")}
              >
                Início
              </Link>

              <button
                onClick={() => scrollToSection("sobre")}
                className={`${navClass("sobre")} text-left`}
              >
                Sobre
              </button>

              <button
                onClick={() => scrollToSection("areas-atuacao")}
                className={`${navClass("areas-atuacao")} text-left`}
              >
                Áreas de Atuação
              </button>

              <button
                onClick={() => scrollToSection("imoveis")}
                className={`${navClass("imoveis")} text-left`}
              >
                Imóveis
              </button>

              <button
                onClick={() => scrollToSection("servicos")}
                className={`${navClass("servicos")} text-left`}
              >
                Nossos Serviços
              </button>

              <button
                onClick={() => scrollToSection("contato")}
                className={`${navClass("contato")} text-left`}
              >
                Contato
              </button>

              <div className="flex flex-col gap-2 pt-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/imoveis" onClick={() => setIsMenuOpen(false)}>
                    Ver Imóveis
                  </Link>
                </Button>

                <Button
                  size="sm"
                  className="bg-gold hover:bg-gold/90 text-black"
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
