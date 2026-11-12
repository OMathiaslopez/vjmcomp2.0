import { NextResponse } from "next/server"
import { isAdminAuthenticated } from "@/lib/admin-auth"
import { getAdminData, updateAdminData } from "@/lib/admin-store"

export async function GET() {
  if (!(await isAdminAuthenticated())) return NextResponse.json({ error: "Não autorizado" }, { status: 401 })
  return NextResponse.json({ contacts: (await getAdminData()).contacts })
}

export async function POST(request: Request) {
  if (!(await isAdminAuthenticated())) return NextResponse.json({ error: "Não autorizado" }, { status: 401 })
  const body = await request.json(); const data = await getAdminData()
  const contact = { ...body, id: body.id || `contact-${Date.now()}`, status: body.status || "novo" }
  await updateAdminData({ contacts: [...data.contacts.filter((item) => item.id !== contact.id), contact] }); return NextResponse.json(contact)
}

export async function DELETE(request: Request) { if (!(await isAdminAuthenticated())) return NextResponse.json({ error: "Não autorizado" }, { status: 401 }); const { id } = await request.json(); const data = await getAdminData(); await updateAdminData({ contacts: data.contacts.filter((item) => item.id !== id) }); return NextResponse.json({ ok: true }) }
