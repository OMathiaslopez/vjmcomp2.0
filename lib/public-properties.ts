import { getAdminData } from "@/lib/admin-store"
import type { Property } from "@/components/property-card"

// Quantas fotos cada imóvel manda para a listagem (o resto só carrega no anúncio).
const LISTING_PHOTO_LIMIT = 3

/** Public properties include the static catalog plus persisted admin changes. */
export async function getPublicProperties(): Promise<Property[]> {
  const { properties } = await getAdminData()
  return (properties as unknown as Property[]).map((property) => {
    const all = property.images?.length
      ? property.images
      : property.image
        ? [property.image]
        : []
    return {
      ...property,
      // Listagem leve: só as primeiras fotos, mas com o total real.
      images: all.slice(0, LISTING_PHOTO_LIMIT),
      photoCount: all.length,
    }
  })
}

export async function getPublicPropertyById(id: string) {
  return (await getAdminData()).properties.find((property) => property.id === id) as Property | undefined
}