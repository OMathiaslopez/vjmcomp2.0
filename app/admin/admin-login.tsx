"use client"
import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"

export default function AdminLogin() {
  const [error, setError] = useState("")
  const router = useRouter()
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setError("")
    const password = new FormData(event.currentTarget).get("password")
    const response = await fetch("/api/admin/session", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ password }) })
    if (!response.ok) return setError("Senha inválida")
    router.refresh()
  }
  return <main className="relative z-[101] flex min-h-screen items-center justify-center bg-[#171715] px-6 text-white"><form onSubmit={submit} className="w-full max-w-sm border border-white/15 p-8"><p className="text-xs uppercase tracking-[.3em] text-[#c9a75b]">VJM / Admin</p><h1 className="mt-4 font-serif text-3xl">Acesso restrito</h1><input name="password" type="password" required autoComplete="current-password" placeholder="Senha administrativa" className="mt-8 w-full border border-white/20 bg-transparent px-4 py-3 outline-none" />{error && <p className="mt-3 text-sm text-red-300">{error}</p>}<button className="mt-5 w-full bg-[#c9a75b] px-4 py-3 font-medium text-[#171715]">Entrar</button></form></main>
}
