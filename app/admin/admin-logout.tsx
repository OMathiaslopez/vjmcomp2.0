"use client"
import { useRouter } from "next/navigation"

export default function AdminLogout() {
  const router = useRouter()
  return <button onClick={async () => { await fetch("/api/admin/session", { method: "DELETE" }); router.refresh() }} className="border border-white/20 px-4 py-2 text-sm">Sair</button>
}
