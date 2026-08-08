"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export function IntroLoader() {
  const [visible, setVisible] = useState(true)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    const exitTimer = window.setTimeout(() => setLeaving(true), 1250)
    const removeTimer = window.setTimeout(() => setVisible(false), 1850)
    return () => { window.clearTimeout(exitTimer); window.clearTimeout(removeTimer) }
  }, [])

  if (!visible) return null
  return (
    <div className={`intro-loader ${leaving ? "intro-loader-leaving" : ""}`} aria-label="Carregando VJM">
      <div className="intro-loader-glow" />
      <div className="intro-loader-content">
        <Image src="/images/logo-vjm.png" alt="VJM Consultoria Imobiliária" width={320} height={100} priority />
        <span className="intro-loader-line" />
        <p>Consultoria imobiliária</p>
      </div>
    </div>
  )
}
