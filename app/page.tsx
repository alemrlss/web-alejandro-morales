import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import SobreMi from '@/components/SobreMi'
import Servicios from '@/components/Servicios'
import ComoFunciona from '@/components/ComoFunciona'
import ParaQuien from '@/components/ParaQuien'
import FAQ from '@/components/FAQ'
import Contacto from '@/components/Contacto'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import SchemaOrg from '@/components/SchemaOrg'

export const metadata: Metadata = {
  title: 'Alejandro Morales — Sistemas Digitales con IA para Empresas en España',
  description:
    'Especialista en crecimiento digital con IA para startups, autónomos y pymes en España. Sistemas de captación de clientes, automatización con inteligencia artificial y marketing digital con resultados medibles.',
  alternates: {
    canonical: 'https://alejandomorales.es',
  },
}

export default function Home() {
  return (
    <>
      <SchemaOrg />
      <Navbar />
      <main id="main-content">
        <Hero />
        <SobreMi />
        <Servicios />
        <ComoFunciona />
        <ParaQuien />
        <FAQ />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
