import HeroSimple from '@/components/sections/HeroSimple'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import TreatmentOptions from '@/components/sections/TreatmentOptions'
import Locations from '@/components/sections/Locations'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSimple />
      <About />
      <Services />
      <TreatmentOptions />
      <Locations />
      <WhatsAppButton />
    </main>
  )
}