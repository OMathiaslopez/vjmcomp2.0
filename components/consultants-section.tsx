import Image from "next/image"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const consultants = [
  {
    name: "Mathias Lopez",
    photo: "/images/mathias-lopez.jpg",
    phone: "11 93333-3092",
    whatsapp: "5511933333092",
  },
  {
    name: "João Pedro Lopez",
    photo: "/images/joao-lopez.jpg",
    phone: "11 99524-1218",
    whatsapp: "5511995241218",
  },
  {
    name: "André Lopez",
    photo: "/images/andre-lopez.jpg",
    phone: "11 97422-1218",
    whatsapp: "5511974221218",
  },
]

export function ConsultantsSection() {
  return (
    <section id="contato" className="py-24 bg-foreground scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold text-sm uppercase tracking-[0.2em] mb-4 font-medium">
            Nossa Equipe
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Fale com um Consultor
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Entre em contato diretamente com um de nossos consultores especializados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {consultants.map((consultant) => (
            <div
              key={consultant.name}
              className="bg-foreground border border-primary-foreground/20 rounded-sm overflow-hidden text-center group"
            >
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={consultant.photo}
                  alt={consultant.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-primary-foreground mb-2">
                  {consultant.name}
                </h3>
                <p className="text-primary-foreground/70 mb-4 flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4" />
                  {consultant.phone}
                </p>
                <Button
                  asChild
                  className="w-full bg-gold hover:bg-gold/90 text-foreground"
                >
                  <a
                    href={`https://wa.me/${consultant.whatsapp}?text=Olá! Vim pelo site da VJM e gostaria de mais informações.`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="h-5 w-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
