"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const whatsappNumber = "5511978392241"
  const message = encodeURIComponent("Olá! Gostaria de mais informações sobre os imóveis disponíveis.")
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[oklch(0.72_0.14_85)] text-foreground rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  )
}
