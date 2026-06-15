import { HeroSection } from '@/components/home/hero-section'
import { StatsBar } from '@/components/home/stats-bar'
import { ServicesSnapshot } from '@/components/home/services-snapshot'
import { SelectedWork } from '@/components/home/selected-work'
import { ToolsPlatforms } from '@/components/home/tools-platforms'

export default function HomePage() {
  return (
    <div className="pt-16">
      <HeroSection />
      <StatsBar />
      <ServicesSnapshot />
      <SelectedWork />
      <ToolsPlatforms />
    </div>
  )
}
