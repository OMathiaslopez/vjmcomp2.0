"use client"

import { useEffect } from "react"

export function SmoothProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"
    return () => {
      document.documentElement.style.scrollBehavior = ""
    }
  }, [])

  return <>{children}</>
}
