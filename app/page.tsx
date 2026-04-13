import { Hero } from '@/components/hero'
import { FeatureCards } from '@/components/feature-cards'
import { Stats } from '@/components/stats'
import { Testimonials } from '@/components/testimonials'
import { TrustBadges } from '@/components/trust-badges'

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <FeatureCards />
      <Testimonials />
      <TrustBadges />
    </>
  )
}
