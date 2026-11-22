import { getAdminData } from "@/lib/admin-store"
import type { Property } from "@/components/property-card"

/** Public properties include the static catalog plus persisted admin changes. */
export async function getPublicProperties(): Promise<Property[]> {
  const { properties } = await getAdminData()
  return properties.map((property) => ({
    ...property,
    // Keep listing responses small; detail pages load the complete gallery below.
    images: property.images?.length ? [property.images[0]] : property.images,
  })) as Property[]
}

export async function getPublicPropertyById(id: string) {
  return (await getAdminData()).properties.find((property) => property.id === id) as Property | undefined
}
