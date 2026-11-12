"use client"

import { useState } from "react"
import { Check, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SharePropertyButton({ title }: { title: string }) {
  const [copied, setCopied] = useState(false)

  async function share() {
    const url = window.location.href
    try {
      if (navigator.share) {
        await navigator.share({ title, text: `Confira este imóvel: ${title}`, url })
      } else {
        await navigator.clipboard.writeText(url)
        setCopied(true)
        window.setTimeout(() => setCopied(false), 2200)
      }
    } catch {
      // The native share dialog can be cancelled without an error message.
    }
  }

  return <Button type="button" variant="outline" onClick={share} className="w-full"><span className="mr-2">{copied ? <Check className="h-4 w-4" /> : <Share2 className="h-4 w-4" />}</span>{copied ? "Link copiado" : "Compartilhar anúncio"}</Button>
}
