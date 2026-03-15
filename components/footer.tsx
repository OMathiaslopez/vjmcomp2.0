import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Logo + descrição */}
          <div>
            <div className="mb-6">
              <Image
                src="/images/logovjm.png"
                alt="VJM Consultoria Imobiliária"
                width={260}
                height={90}
                className="h-16 w-auto object-contain"
              />
            </div>

            <p className="text-sm opacity-80 leading-relaxed max-w-xs">
              Tradição que se moderniza. Patrimônio guiado por confiança.
              Especialistas em imóveis residenciais e comerciais nas regiões
              mais valorizadas de São Paulo.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">
              Navegação
            </h4>

            <ul className="space-y-3">

              <li>
                <Link href="/" className="text-sm opacity-80 hover:opacity-100 transition">
                  Início
                </Link>
              </li>

              <li>
                <Link href="/#sobre" className="text-sm opacity-80 hover:opacity-100 transition">
                  Sobre
                </Link>
              </li>

              <li>
                <Link href="/#areas-atuacao" className="text-sm opacity-80 hover:opacity-100 transition">
                  Áreas de Atuação
                </Link>
              </li>

              <li>
                <Link href="/imoveis" className="text-sm opacity-80 hover:opacity-100 transition">
                  Imóveis
                </Link>
              </li>

              <li>
                <Link href="/#servicos" className="text-sm opacity-80 hover:opacity-100 transition">
                  Nossos Serviços
                </Link>
              </li>

              <li>
                <Link href="/#contato" className="text-sm opacity-80 hover:opacity-100 transition">
                  Contato
                </Link>
              </li>

            </ul>
          </div>

          {/* Áreas */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">
              Áreas de Atuação
            </h4>

            <ul className="space-y-3">
              <li className="text-sm opacity-80">Vila Mariana</li>
              <li className="text-sm opacity-80">Chácara Klabin</li>
              <li className="text-sm opacity-80">Aclimação</li>
              <li className="text-sm opacity-80">Alto da Lapa</li>
              <li className="text-sm opacity-80">Jardins</li>
              <li className="text-sm opacity-80">Moema</li>
              <li className="text-sm opacity-80">Vila Nova Conceição</li>
              <li className="text-sm opacity-80">Vila Olímpia</li>
              <li className="text-sm opacity-80">Itaim Bibi</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">
              Contato
            </h4>

            <ul className="space-y-4">

              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 opacity-80 shrink-0 mt-0.5" />
                <span className="text-sm opacity-80">
                  São Paulo – SP
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 opacity-80 shrink-0" />
                <a
                  href="tel:+5511933333092"
                  className="text-sm opacity-80 hover:opacity-100 transition"
                >
                  (11) 93333-3092
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 opacity-80 shrink-0" />
                <a
                  href="mailto:contato@vjmimoveis.com.br"
                  className="text-sm opacity-80 hover:opacity-100 transition"
                >
                  contato@vjmimoveis.com.br
                </a>
              </li>

            </ul>
          </div>

        </div>

        {/* Linha final */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm opacity-60">
            © {new Date().getFullYear()} VJM Consultoria Imobiliária. Todos os direitos reservados.
          </p>

        </div>

      </div>
    </footer>
  )
}