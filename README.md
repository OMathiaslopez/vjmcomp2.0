# VJM Consultoria

## Admin

Defina `ADMIN_PASSWORD` e, em produção, `ADMIN_SESSION_SECRET` (um valor aleatório longo). Acesse `/admin`. A sessão usa cookie `httpOnly`, `secure` em produção, `SameSite=Lax`, expira em 8 horas e é assinada com HMAC.

Os endpoints protegidos são `/api/admin/contacts`, `/api/admin/drafts` e `/api/admin/settings`. Em Cloudflare, os dados são armazenados no binding D1 `DB`; localmente, o mesmo formato é salvo em `data/admin.json` (que não é versionado). A fonte pública atual (`lib/properties.ts`) continua como baseline.

## Deploy

O `wrangler.jsonc` já define o projeto, conta e migration, mas o `database_id` precisa ser preenchido com o ID real da D1 antes do deploy. Crie/aplique a base com `npx wrangler d1 migrations apply vjmconsultoria --remote`.

Configure `ADMIN_PASSWORD` e `ADMIN_SESSION_SECRET` como secrets, sem colocá-los no Git: `npx wrangler secret put ADMIN_PASSWORD` e `npx wrangler secret put ADMIN_SESSION_SECRET`. Para desenvolvimento local, use `.env.local` (ignorado pelo Git). Rode `npm run build` para gerar a saída OpenNext; o deploy ainda não é executado por este projeto.
