import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import ConfidenceCalculator from '@/components/sections/ConfidenceCalculator'
import Locations from '@/components/sections/Locations'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <ConfidenceCalculator />
      <Locations />
      <WhatsAppButton />
    </main>
  )
}