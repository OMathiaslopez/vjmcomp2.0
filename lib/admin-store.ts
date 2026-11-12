import { getCloudflareContext } from "@opennextjs/cloudflare"
import { properties as staticProperties } from "@/lib/properties"

export type AdminProperty = { id: string; title: string; type: string; region: string; area: number; status: string; source: "static" | "draft" }
export type AdminOperation = { id: string; title: string; region: string; status: string; description: string; image?: string; images?: string[] }
export type AdminContact = { id: string; name: string; email: string; phone: string; message: string; status: "novo" | "em andamento" | "resolvido" }
export type SiteSettings = { categories: string[]; phone: string; whatsapp: string; email: string; instagram: string; consultants: { id: string; name: string; phone: string; whatsapp: string; email: string; photo?: string }[] }
type Store = { properties: AdminProperty[]; operations: AdminOperation[]; contacts: AdminContact[]; settings: SiteSettings; deletedProperties?: string[]; deletedOperations?: string[] }

const initial: Store = { properties: [], operations: [], contacts: [], settings: { categories: ["Prédio Comercial", "Casa", "Casa Comercial", "Loja", "Apartamento", "Duplex"], phone: "11 97839-2241", whatsapp: "5511978392241", email: "contato@vjmconsultoria.com.br", instagram: "https://instagram.com/vjm.consultoria", consultants: [{ id: "mathias", name: "Mathias Lopez", phone: "11 97839-2241", whatsapp: "5511978392241", email: "", photo: "/images/mathias-lopez.jpg" }, { id: "joao", name: "João Pedro Lopez", phone: "11 99524-1218", whatsapp: "5511995241218", email: "", photo: "/images/joao-lopez.jpg" }, { id: "andre", name: "André Lopez", phone: "11 97422-1218", whatsapp: "5511974221218", email: "", photo: "/images/andre-lopez.jpg" }] } }
const staticOperations: AdminOperation[] = [
  ["petz-aclimacao", "Petz Aclimação", "Aclimação", "/images/operacao-petz-hoje.png"],
  ["deck03", "Deck03", "Bela Vista", "/images/operacao-pedroso-hoje.png"],
  ["largo-do-arouche-77", "Largo do Arouche 77", "Centro", "/images/operacao-arouche-fachada.png"],
  ["jeep-mooca", "Jeep Mooca", "Mooca", "/images/operacao-jeep-hoje.png"],
  ["extrafarma-aclimacao", "Extrafarma Aclimação", "Aclimação", "/images/operacao-extrafarma-hoje.png"],
  ["next-residence-aquidaba", "Next Residence", "Centro, Campinas", "/images/operacao-next-pronto-1.png"],
  ["extra-grajau", "Extra Grajaú", "Grajaú", "/images/operacao-extra-grajau-hoje.png"],
].map(([id, title, region, image]) => ({ id, title, region, image, images: [image], status: "Operação realizada", description: "Operação realizada pela VJM." }))

type Database = {
  prepare(query: string): {
    bind(...values: string[]): {
      first<T>(): Promise<T | null>
      run(): Promise<unknown>
    }
  }
}
type CloudflareEnv = { DB?: Database }

async function database() {
  try { return (await getCloudflareContext({ async: true })).env as CloudflareEnv }
  catch { return undefined }
}

function mergeStore(saved: Partial<Store> | undefined): Store {
  return { ...initial, ...saved, settings: { ...initial.settings, ...(saved?.settings || {}) } }
}

async function readStore(): Promise<Store> {
  const db = (await database())?.DB
  if (db) {
    try {
      const row = await db.prepare("SELECT value FROM admin_store WHERE key = ?").bind("store").first<{ value: string }>()
      return mergeStore(row ? JSON.parse(row.value) : undefined)
    } catch {
      // An un-migrated binding must behave like the local fallback.
    }
  }

  try {
    const { readFile } = await import("node:fs/promises")
    const path = await import("node:path")
    const saved = JSON.parse(await readFile(path.join(process.cwd(), "data", "admin.json"), "utf8"))
    return mergeStore(saved)
  } catch { return initial }
}

export async function getSiteSettings() { return (await readStore()).settings }

export async function getWritableAdminData() { return readStore() }

export async function getAdminData() {
  const store = await readStore()
  const drafts = store.properties
  const imported = staticProperties
    .filter((property) => !store.deletedProperties?.includes(property.id) && !drafts.some((draft) => draft.id === property.id))
    .map((p) => ({ ...p, status: "publicado", source: "static" as const }))
  const operations = staticOperations.filter((operation) => !store.deletedOperations?.includes(operation.id) && !store.operations.some((draft) => draft.id === operation.id)).map((operation) => ({ ...operation, source: "static" as const }))
  return { ...store, properties: [...drafts, ...imported], operations: [...store.operations, ...operations] }
}

export async function updateAdminData(update: Partial<Store>) {
  const store = await readStore()
  const next = { ...store, ...update }
  const db = (await database())?.DB
  if (db) {
    await db.prepare("INSERT INTO admin_store (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value")
      .bind("store", JSON.stringify(next)).run()
  } else {
    const { mkdir, writeFile } = await import("node:fs/promises")
    const path = await import("node:path")
    await mkdir(path.dirname(path.join(process.cwd(), "data", "admin.json")), { recursive: true })
    await writeFile(path.join(process.cwd(), "data", "admin.json"), JSON.stringify(next, null, 2))
  }
  return next
}
