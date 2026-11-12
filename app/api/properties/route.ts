import { NextResponse } from "next/server"
import { getPublicProperties } from "@/lib/public-properties"

export const dynamic = "force-dynamic"

export async function GET() {
  return NextResponse.json(await getPublicProperties())
}
