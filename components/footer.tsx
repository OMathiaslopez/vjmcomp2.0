import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Instagram } from "lucide-react"

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/#sobre", label: "Sobre" },
  { href: "/imoveis", label: "Imóveis" },
  { href: "/#servicos", label: "Serviços" },
  { href: "/operacoes", label: "Operações" },
  { href: "/#contato", label: "Contato" },
]

const regions = ["Jardins", "Vila Mariana", "Moema", "Itaim Bibi", "Vila Olímpia", "Chácara Klabin"]

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-top">
          <div className="site-footer-brand">
            <Link href="/" className="site-footer-logo">
              <Image
                src="/images/logo-vjm.png"
                alt="VJM Consultoria Imobiliária"
                width={240}
                height={80}
                className="h-14 w-auto object-contain brightness-0 invert md:h-16"
              />
            </Link>
            <p>
              Consultoria imobiliária de alto padrão em São Paulo. Patrimônio, estratégia e
              atendimento personalizado.
            </p>
          </div>

          <div className="site-footer-cols">
            <div>
              <h4>Navegação</h4>
              <ul>
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4>Regiões</h4>
              <ul>
                {regions.map((region) => (
                  <li key={region}>
                    <span>{region}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4>Contato</h4>
              <ul className="site-footer-contact">
                <li>
                  <MapPin className="h-3.5 w-3.5" />
                  <span>São Paulo – SP</span>
                </li>
                <li>
                  <Phone className="h-3.5 w-3.5" />
                  <a href="tel:+5511978392241">(11) 97839-2241</a>
                </li>
                <li>
                  <Mail className="h-3.5 w-3.5" />
                  <a href="mailto:contato@vjmimoveis.com.br">contato@vjmimoveis.com.br</a>
                </li>
                <li>
                  <Instagram className="h-3.5 w-3.5" />
                  <a href="https://instagram.com/vjm.consultori" target="_blank" rel="noopener noreferrer">
                    @vjm.consultori
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="site-footer-bottom">
          <p>© {new Date().getFullYear()} VJM Consultoria Imobiliária</p>
          <span>Patrimônio · Estratégia · São Paulo</span>
        </div>
      </div>
    </footer>
  )
}
