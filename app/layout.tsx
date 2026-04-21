import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
})

const siteUrl = 'https://alejandomorales.es'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Alejandro Morales — Sistemas Digitales con IA para Empresas en España',
    template: '%s | Alejandro Morales',
  },
  description:
    'Especialista en crecimiento digital con IA para startups, autónomos y pymes en España. Diseño sistemas de captación de clientes, automatización con IA y estrategias digitales que generan resultados medibles.',
  keywords: [
    'sistemas digitales con IA',
    'captación de clientes España',
    'automatización con inteligencia artificial',
    'marketing digital para pymes',
    'crecimiento empresarial digital',
    'consultor marketing digital España',
    'sistemas de automatización empresarial',
    'agencia marketing digital startups',
    'email marketing España',
    'estrategia digital para autónomos',
  ],
  authors: [{ name: 'Alejandro Morales', url: siteUrl }],
  creator: 'Alejandro Morales',
  publisher: 'Alejandro Morales',
  category: 'Marketing Digital & IA',
  alternates: {
    canonical: siteUrl,
    languages: { 'es-ES': siteUrl },
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: siteUrl,
    siteName: 'Alejandro Morales',
    title: 'Alejandro Morales — Sistemas Digitales con IA para Empresas',
    description:
      'Diseño e implemento sistemas de captación y automatización con IA para startups, autónomos y pymes que quieren crecer en el mercado digital actual.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Alejandro Morales — Sistemas Digitales con IA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alejandro Morales — Sistemas Digitales con IA',
    description:
      'Sistemas de captación y automatización con IA para startups, autónomos y pymes en España.',
    images: ['/og-image.png'],
    creator: '@alejandomorales',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Añadir cuando se tenga acceso a Google Search Console:
    // google: 'TU_CODIGO_DE_VERIFICACION',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="geo.region" content="ES" />
        <meta name="geo.country" content="Spain" />
        <meta name="language" content="Spanish" />
      </head>
      <Analytics />
      <SpeedInsights />
      <body className={`${montserrat.variable} font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
