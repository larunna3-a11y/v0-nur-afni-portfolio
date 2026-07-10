'use client'

import { BookOpen } from 'lucide-react'

const education = [
  {
    degree: 'Marketing & Communication Studies',
    school: 'Indonesian University',
    year: '2020 - 2024',
    focus: 'Digital Marketing, Consumer Behavior, Strategic Communications',
  },
]

const certifications = [
  { title: 'Google Analytics Certified', issuer: 'Google' },
  { title: 'Meta Blueprint Certified', issuer: 'Meta' },
  { title: 'TikTok Ads Manager Certified', issuer: 'TikTok' },
  { title: 'AI Integration Fundamentals', issuer: 'Coursera' },
]

export function RecruitEducation() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Education */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F0A2E] mb-8">Education</h2>

          {education.map((edu, idx) => (
            <div key={idx} className="bg-[#F8F7FF] border border-[#E8E6F8] rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#2D1BB8]/10 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-[#2D1BB8]" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#0F0A2E]">{edu.degree}</h3>
                  <p className="text-sm font-medium text-[#2D1BB8] mt-1">{edu.school}</p>
                  <p className="text-sm text-[#9B97C0] mt-1">{edu.year}</p>
                  <p className="text-sm text-[#4B4680] mt-3">{edu.focus}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F0A2E] mb-8">Certifications</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, idx) => (
              <div key={idx} className="bg-[#2D1BB8]/5 border border-[#2D1BB8]/20 rounded-xl p-4">
                <p className="font-semibold text-[#2D1BB8]">{cert.title}</p>
                <p className="text-sm text-[#4B4680] mt-1">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
