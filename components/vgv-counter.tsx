"use client"

import { useEffect, useRef, useState } from "react"

export function VgvCounter() {
  const [value, setValue] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started) setStarted(true)
    }, { threshold: 0.5 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    const duration = 1800
    const start = performance.now()
    let frame = 0
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * 10))
      if (progress < 1) frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [started])

  return (
    <div ref={ref} className="vgv-panel" aria-label="VGV 2026: 10 milhões de reais">
      <span className="vgv-label">VGV 2026</span>
      <strong>R$ {value} <small>milhões</small></strong>
      <span className="vgv-caption">Volume Geral de Vendas em 2026.</span>
    </div>
  )
}
