import { RecruitHero } from '@/components/recruit/recruit-hero'
import { RecruitHighlights } from '@/components/recruit/recruit-highlights'
import { RecruitExperience } from '@/components/recruit/recruit-experience'
import { RecruitSkills } from '@/components/recruit/recruit-skills'
import { RecruitTools } from '@/components/recruit/recruit-tools'
import { RecruitProjects } from '@/components/recruit/recruit-projects'
import { RecruitEducation } from '@/components/recruit/recruit-education'
import { RecruitCTA } from '@/components/recruit/recruit-cta'

export const metadata = {
  title: 'Recruit Me — Nur Afni',
  description: 'Digital marketing specialist with proven track record in scaling marketplace revenue, optimizing performance marketing, and building AI-powered solutions.',
}

export default function RecruitMePage() {
  return (
    <div className="pt-16">
      <RecruitHero />
      <RecruitHighlights />
      <RecruitExperience />
      <RecruitSkills />
      <RecruitTools />
      <RecruitProjects />
      <RecruitEducation />
      <RecruitCTA />
    </div>
  )
}
