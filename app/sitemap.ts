import type { MetadataRoute } from "next"
import { properties } from "@/lib/properties"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.vjmconsultoria.com.br"
  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/imoveis`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    ...properties.map((property) => ({ url: `${baseUrl}/imoveis/${property.id}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 })),
  ]
}
