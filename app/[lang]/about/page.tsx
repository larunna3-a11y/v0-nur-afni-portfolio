import { AboutHero } from '@/components/about/about-hero'
import { CoreSkills } from '@/components/about/core-skills'
import { Experience } from '@/components/about/experience'
import { EducationCertifications } from '@/components/about/education-certifications'

export default function AboutPage() {
  return (
    <div className="pt-16">
      <AboutHero />
      <CoreSkills />
      <Experience />
      <EducationCertifications />
    </div>
  )
}
