"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei"
import { useMemo, useRef } from "react"
import * as THREE from "three"

function GoldOrb({
  position,
  scale,
  speed,
  distort,
}: {
  position: [number, number, number]
  scale: number
  speed: number
  distort: number
}) {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.getElapsedTime() * speed
    ref.current.rotation.x = t * 0.25
    ref.current.rotation.y = t * 0.35
    ref.current.position.y = position[1] + Math.sin(t) * 0.15
  })

  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.6}>
      <Sphere ref={ref} args={[1, 64, 64]} position={position} scale={scale}>
        <MeshDistortMaterial
          color="#c9a75b"
          attach="material"
          distort={distort}
          speed={2}
          roughness={0.15}
          metalness={0.85}
          transparent
          opacity={0.55}
        />
      </Sphere>
    </Float>
  )
}

function ParticleField() {
  const points = useRef<THREE.Points>(null)
  const positions = useMemo(() => {
    const count = 180
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 10
      arr[i * 3 + 1] = (Math.random() - 0.5) * 6
      arr[i * 3 + 2] = (Math.random() - 0.5) * 4
    }
    return arr
  }, [])

  useFrame((state) => {
    if (!points.current) return
    points.current.rotation.y = state.clock.getElapsedTime() * 0.03
    points.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.05
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#d4b56a" transparent opacity={0.7} sizeAttenuation />
    </points>
  )
}

function ArchitectureRings() {
  const group = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!group.current) return
    const t = state.clock.getElapsedTime()
    group.current.rotation.z = t * 0.08
    group.current.rotation.x = 0.4 + Math.sin(t * 0.2) * 0.05
  })

  return (
    <group ref={group} position={[2.2, 0.2, -1]}>
      {[1.2, 1.7, 2.2].map((r, i) => (
        <mesh key={r} rotation={[Math.PI / 2.4, 0, i * 0.4]}>
          <torusGeometry args={[r, 0.008, 16, 100]} />
          <meshStandardMaterial
            color="#c9a75b"
            metalness={0.9}
            roughness={0.2}
            transparent
            opacity={0.35 - i * 0.08}
          />
        </mesh>
      ))}
    </group>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#fff6e0" />
      <pointLight position={[-3, 2, 2]} intensity={0.8} color="#c9a75b" />
      <GoldOrb position={[2.4, 0.3, 0]} scale={0.9} speed={0.6} distort={0.35} />
      <GoldOrb position={[3.4, -0.6, -0.8]} scale={0.45} speed={0.9} distort={0.5} />
      <ArchitectureRings />
      <ParticleField />
    </>
  )
}

export function HeroScene() {
  return (
    <div className="hero-3d-canvas pointer-events-none absolute inset-0 z-[1]">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}
