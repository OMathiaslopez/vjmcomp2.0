import { createHmac, timingSafeEqual } from "node:crypto"
import { cookies } from "next/headers"

const COOKIE_NAME = "vjm_admin_session"
const MAX_AGE = 60 * 60 * 8

function secret() {
  return process.env.ADMIN_SESSION_SECRET || process.env.ADMIN_PASSWORD || ""
}

function signature(value: string) {
  return createHmac("sha256", secret()).update(value).digest("base64url")
}

export function createSessionValue() {
  const value = `${Date.now() + MAX_AGE * 1000}`
  return `${value}.${signature(value)}`
}

export function isValidSession(value?: string) {
  if (!value || !secret()) return false
  const [expires, provided] = value.split(".")
  if (!expires || !provided || Number(expires) < Date.now()) return false
  const expected = signature(expires)
  return provided.length === expected.length && timingSafeEqual(Buffer.from(provided), Buffer.from(expected))
}

export async function isAdminAuthenticated() {
  return isValidSession((await cookies()).get(COOKIE_NAME)?.value)
}

export { COOKIE_NAME, MAX_AGE }
