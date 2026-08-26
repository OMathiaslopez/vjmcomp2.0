"use client"

import { motion, useReducedMotion, type Variants } from "framer-motion"
import type { ReactNode } from "react"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40, rotateX: 8, transformPerspective: 1000 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

const fadeScale: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
}

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  variant?: "up" | "scale"
}

export function ScrollReveal({ children, className, delay = 0, variant = "up" }: RevealProps) {
  const reduce = useReducedMotion()
  const base = variant === "scale" ? fadeScale : fadeUp

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={base}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerReveal({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={stagger}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  )
}

export function TiltCard({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
      whileHover={{
        y: -10,
        rotateX: 4,
        rotateY: -4,
        scale: 1.02,
        transition: { type: "spring", stiffness: 260, damping: 18 },
      }}
    >
      {children}
    </motion.div>
  )
}
