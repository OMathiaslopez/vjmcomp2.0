import ImoveisClient from "./imoveis-client"
import { getPublicProperties } from "@/lib/public-properties"

export const dynamic = "force-dynamic"

export default async function ImoveisPage() {
  return <ImoveisClient properties={await getPublicProperties()} />
}
