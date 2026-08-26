import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { IntroLoader } from "@/components/intro-loader"
import { SmoothProvider } from "@/components/smooth-provider"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "VJM Consultoria Imobiliária",
  description:
    "Consultoria imobiliária especializada em imóveis de alto padrão em São Paulo.",
  keywords: ["imóveis comerciais em São Paulo", "consultoria imobiliária", "investimento imobiliário", "VJM"],
  openGraph: {
    title: "VJM Consultoria Imobiliária",
    description: "Imóveis comerciais e estratégias patrimoniais em São Paulo.",
    type: "website",
    locale: "pt_BR",
    url: "https://www.vjmconsultoria.com.br",
  },

  icons: {
    icon: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        <SmoothProvider>
          <IntroLoader />
          {children}
        </SmoothProvider>
        <Analytics />
      </body>
    </html>
  )
}
