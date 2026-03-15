"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const goHome = () => {
    setIsMenuOpen(false)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-neutral-200">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">

          {/* LOGO */}
<Link href="/" className="flex items-center">
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
              onClick={goHome}
              className="text-sm font-medium hover:text-gold transition-colors"
            >
              Início
            </Link>

            <button
              onClick={() => scrollToSection("sobre")}
              className="text-sm font-medium hover:text-gold transition-colors"
            >
              Sobre
            </button>

            <button
              onClick={() => scrollToSection("areas-atuacao")}
              className="text-sm font-medium hover:text-gold transition-colors"
            >
              Áreas de Atuação
            </button>

            <button
              onClick={() => scrollToSection("imoveis")}
              className="text-sm font-medium hover:text-gold transition-colors"
            >
              Imóveis
            </button>

            <button
              onClick={() => scrollToSection("servicos")}
              className="text-sm font-medium hover:text-gold transition-colors"
            >
              Nossos Serviços
            </button>

            <button
              onClick={() => scrollToSection("contato")}
              className="text-sm font-medium hover:text-gold transition-colors"
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
                onClick={goHome}
                className="text-sm font-medium hover:text-gold transition-colors"
              >
                Início
              </Link>

              <button
                onClick={() => scrollToSection("sobre")}
                className="text-sm font-medium hover:text-gold transition-colors text-left"
              >
                Sobre
              </button>

              <button
                onClick={() => scrollToSection("areas-atuacao")}
                className="text-sm font-medium hover:text-gold transition-colors text-left"
              >
                Áreas de Atuação
              </button>

              <button
                onClick={() => scrollToSection("imoveis")}
                className="text-sm font-medium hover:text-gold transition-colors text-left"
              >
                Imóveis
              </button>

              <button
                onClick={() => scrollToSection("servicos")}
                className="text-sm font-medium hover:text-gold transition-colors text-left"
              >
                Nossos Serviços
              </button>

              <button
                onClick={() => scrollToSection("contato")}
                className="text-sm font-medium hover:text-gold transition-colors text-left"
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