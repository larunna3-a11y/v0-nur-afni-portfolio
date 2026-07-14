import { RecruitHero } from '@/components/recruit/recruit-hero'
import { RecruitSnapshot } from '@/components/recruit/recruit-snapshot'
import { RecruitSummary } from '@/components/recruit/recruit-summary'
import { RecruitExperience } from '@/components/recruit/recruit-experience'
import { RecruitSkills } from '@/components/recruit/recruit-skills'
import { RecruitTools } from '@/components/recruit/recruit-tools'
import { RecruitEducation } from '@/components/recruit/recruit-education'
import { RecruitLanguages } from '@/components/recruit/recruit-languages'
import { RecruitProjects } from '@/components/recruit/recruit-projects'
import { RecruitCTA } from '@/components/recruit/recruit-cta'

export const metadata = {
  title: 'Recruit Me — Digital Marketing Specialist & Marketplace Growth Expert',
  description: 'Professional profile of Nur Afni. Digital Marketing Specialist with 3+ years of experience in marketplace growth and performance marketing across Shopee, TikTok Shop, Tokopedia, and Lazada. Available for full-time, contract, or consulting opportunities.',
}

export default function RecruitMePage() {
  return (
    <div className="pt-16">
      <RecruitHero />
      <RecruitSnapshot />
      <RecruitSummary />
      <RecruitExperience />
      <RecruitSkills />
      <RecruitTools />
      <RecruitEducation />
      <RecruitLanguages />
      <RecruitProjects />
      <RecruitCTA />
    </div>
  )
}