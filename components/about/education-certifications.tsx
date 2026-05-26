const items = [
  {
    type: 'Education',
    title: 'Bachelor of Constitutional Law',
    institution: 'UIN Syarif Hidayatullah Jakarta',
    period: '2017–2022 · GPA 3.45/4.00',
  },
  {
    type: 'Certification',
    title: 'Digital Marketing for Beginners',
    institution: 'MySkill Academy',
    period: '2023',
  },
  {
    type: 'Certification',
    title: 'Copywriting & Advertising',
    institution: 'CKI Center',
    period: '2022',
  },
]

export function EducationCertifications() {
  return (
    <section className="bg-[#F8F7FF] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F0A2E]">Education & Certifications</h2>
        </div>
        
        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-[#E8E6F8] rounded-2xl p-6"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-[#9B97C0]">
                {item.type}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-[#0F0A2E]">{item.title}</h3>
              <p className="mt-1 text-[#4B4680]">{item.institution}</p>
              <p className="mt-1 text-sm text-[#9B97C0]">{item.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
