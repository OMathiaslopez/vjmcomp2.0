import { getAdminData } from "@/lib/admin-store"
import type { Property } from "@/components/property-card"

/** Public properties include the static catalog plus persisted admin changes. */
export async function getPublicProperties(): Promise<Property[]> {
  const { properties } = await getAdminData()
  return properties as Property[]
}

export async function getPublicPropertyById(id: string) {
  return (await getPublicProperties()).find((property) => property.id === id)
}
