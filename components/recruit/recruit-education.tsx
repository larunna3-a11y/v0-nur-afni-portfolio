'use client'

import { motion } from 'framer-motion'

const education = {
  degree: 'Bachelor of Constitutional Law',
  school: 'UIN Syarif Hidayatullah Jakarta',
  year: 'Graduated 2022',
  focus: 'Legal Studies',
  gpa: '3.45 / 4.0',
}

const certifications = [
  { title: 'Digital Marketing for Beginners', issuer: 'MySkill Academy', year: '2023' },
  { title: 'Copywriting & Advertising', issuer: 'CKI Center', year: '2022' },
]

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

export function RecruitEducation() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-[#2D1BB8] uppercase mb-3">
            Learning & Development
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F0A2E]">Education & Certifications</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-[#F8F7FF] border border-[#E8E6F8] rounded-2xl p-8"
          >
            <h3 className="text-lg font-bold text-[#0F0A2E] mb-4">Education</h3>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-[#2D1BB8]">{education.degree}</p>
                <p className="text-sm text-[#4B4680] mt-1">{education.focus}</p>
              </div>
              <div className="pt-3 border-t border-[#E8E6F8] space-y-2 text-sm">
                <p className="text-[#4B4680]"><span className="font-medium text-[#0F0A2E]">University:</span> {education.school}</p>
                <p className="text-[#4B4680]"><span className="font-medium text-[#0F0A2E]">Year:</span> {education.year}</p>
                <p className="text-[#4B4680]"><span className="font-medium text-[#0F0A2E]">GPA:</span> {education.gpa}</p>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold text-[#0F0A2E] mb-4">Professional Certifications</h3>
            <div className="space-y-3">
              {certifications.map((cert, idx) => (
                <div key={idx} className="bg-[#F8F7FF] border border-[#E8E6F8] rounded-lg p-4">
                  <p className="font-medium text-[#2D1BB8] text-sm">{cert.title}</p>
                  <p className="text-xs text-[#4B4680] mt-1">{cert.issuer} • {cert.year}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
