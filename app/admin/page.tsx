import { isAdminAuthenticated } from "@/lib/admin-auth"
import AdminLogin from "./admin-login"
import AdminLogout from "./admin-logout"
import AdminPanel from "./admin-panel"

export const dynamic = "force-dynamic"
export default async function AdminPage() {
  if (!(await isAdminAuthenticated())) return <AdminLogin />
  return <main id="vjm-admin" className="min-h-screen bg-[#171715] px-4 py-10 text-white sm:px-8"><div className="mx-auto max-w-6xl"><header className="mb-8 flex items-center justify-between border-b border-white/15 pb-6"><div><p className="text-xs uppercase tracking-[.3em] text-[#c9a75b]">VJM / Admin</p><h1 className="mt-3 font-serif text-4xl">Painel de conteúdo</h1></div><AdminLogout /></header><AdminPanel /></div></main>
}
