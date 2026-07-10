import { RecruitHero } from '@/components/recruit/recruit-hero'
import { RecruitSummary } from '@/components/recruit/recruit-summary'
import { RecruitHighlights } from '@/components/recruit/recruit-highlights'
import { RecruitExperience } from '@/components/recruit/recruit-experience'
import { RecruitSkills } from '@/components/recruit/recruit-skills'
import { RecruitTechStack } from '@/components/recruit/recruit-tech-stack'
import { RecruitCTA } from '@/components/recruit/recruit-cta'

export const metadata = {
  title: 'Recruit Me — Nur Afni',
  description: 'Professional profile for recruiters and hiring managers. Digital Marketing Strategist, Product Builder, and Systems Thinker.',
}

export default function RecruitMePage() {
  return (
    <div className="pt-16">
      <RecruitHero />
      <RecruitSummary />
      <RecruitHighlights />
      <RecruitExperience />
      <RecruitSkills />
      <RecruitTechStack />
      <RecruitCTA />
    </div>
  )
}
