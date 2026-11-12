import { NextResponse } from "next/server"
import { COOKIE_NAME, MAX_AGE, createSessionValue, isAdminAuthenticated } from "@/lib/admin-auth"

export async function GET() {
  return NextResponse.json({ authenticated: await isAdminAuthenticated() })
}

export async function POST(request: Request) {
  const { password } = await request.json().catch(() => ({}))
  if (!process.env.ADMIN_PASSWORD || password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Credenciais inválidas" }, { status: 401 })
  }
  const response = NextResponse.json({ authenticated: true })
  response.cookies.set(COOKIE_NAME, createSessionValue(), {
    httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax", path: "/", maxAge: MAX_AGE,
  })
  return response
}

export async function DELETE() {
  const response = NextResponse.json({ authenticated: false })
  response.cookies.set(COOKIE_NAME, "", { httpOnly: true, expires: new Date(0), path: "/" })
  return response
}
