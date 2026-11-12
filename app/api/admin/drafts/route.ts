import { NextResponse } from "next/server"
import { isAdminAuthenticated } from "@/lib/admin-auth"
import { getAdminData, getWritableAdminData, updateAdminData } from "@/lib/admin-store"

export async function GET() {
  if (!(await isAdminAuthenticated())) return NextResponse.json({ error: "Não autorizado" }, { status: 401 })
  return NextResponse.json(await getAdminData())
}

export async function POST(request: Request) {
  if (!(await isAdminAuthenticated())) return NextResponse.json({ error: "Não autorizado" }, { status: 401 })
  const body = await request.json(); const data = await getWritableAdminData()
  const key = body.kind === "operation" ? "operations" : "properties"
  const item = { ...body, id: body.id || `${body.kind || "property"}-${Date.now()}`, source: "draft" }
  const list = [...(data[key] as object[]).filter((value: any) => value.id !== item.id), item]
  await updateAdminData({ [key]: list } as any); return NextResponse.json(item)
}

export async function PUT(request: Request) { return POST(request) }

export async function DELETE(request: Request) {
  if (!(await isAdminAuthenticated())) return NextResponse.json({ error: "Não autorizado" }, { status: 401 })
  const { kind, id } = await request.json(); const data = await getWritableAdminData(); const key = kind === "operation" ? "operations" : "properties"
  const next = { [key]: (data[key] as any[]).filter((item) => item.id !== id) } as any
  const isStatic = key === "properties" && !data[key].some((item: any) => item.id === id)
  if (isStatic) next.deletedProperties = [...new Set([...(data.deletedProperties || []), id])]
  await updateAdminData(next); return NextResponse.json({ ok: true })
}
