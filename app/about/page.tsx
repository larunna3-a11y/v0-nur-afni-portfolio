import { AboutHero } from '@/components/about/about-hero'
import { AboutNumbers } from '@/components/about/about-numbers'
import { AboutJourney } from '@/components/about/about-journey'
import { AboutCapabilities } from '@/components/about/about-capabilities'
import { AboutIndustries } from '@/components/about/about-industries'
import { ToolsPlatforms } from '@/components/home/tools-platforms'
import { AboutProjects } from '@/components/about/about-projects'
import { AboutPhilosophy } from '@/components/about/about-philosophy'
import { AboutBuilding } from '@/components/about/about-building'
import { AboutBeyond } from '@/components/about/about-beyond'
import { AboutCTA } from '@/components/about/about-cta'

export const metadata = {
  title: 'About — Nur Afni',
  description: 'Digital Marketing Strategist, Marketplace Growth Specialist, and AI Product Builder based in Indonesia.',
}

export default function AboutPage() {
  return (
    <div className="pt-16">
      <AboutHero />
      <AboutNumbers />
      <AboutJourney />
      <AboutCapabilities />
      <AboutIndustries />
      <ToolsPlatforms />
      <AboutProjects />
      <AboutPhilosophy />
      <AboutBuilding />
      <AboutBeyond />
      <AboutCTA />
    </div>
  )
}
