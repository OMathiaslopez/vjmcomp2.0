import { NextResponse } from "next/server"
import { isAdminAuthenticated } from "@/lib/admin-auth"
import { getSiteSettings, updateAdminData } from "@/lib/admin-store"

export async function GET() {
  if (!(await isAdminAuthenticated())) return NextResponse.json({ error: "Não autorizado" }, { status: 401 })
  return NextResponse.json(await getSiteSettings())
}

export async function PUT(request: Request) {
  if (!(await isAdminAuthenticated())) return NextResponse.json({ error: "Não autorizado" }, { status: 401 })
  const settings = await request.json()
  await updateAdminData({ settings })
  return NextResponse.json(settings)
}
