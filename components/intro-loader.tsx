"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export function IntroLoader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const removeTimer = window.setTimeout(() => setVisible(false), 2000)
    return () => window.clearTimeout(removeTimer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="intro-loader"
          aria-label="Carregando VJM"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }}
        >
          <div className="intro-loader-glow" />
          <div className="intro-loader-particles" aria-hidden="true" />
          <motion.div
            className="intro-loader-content"
            initial={{ opacity: 0, scale: 0.88, rotateX: 18 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformPerspective: 800 }}
          >
            <Image src="/images/logo-vjm.png" alt="VJM Consultoria Imobiliária" width={400} height={130} className="h-auto w-[min(360px,78vw)]" priority />
            <motion.span
              className="intro-loader-line"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              Consultoria imobiliária
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
