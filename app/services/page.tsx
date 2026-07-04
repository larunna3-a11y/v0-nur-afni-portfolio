import { ServicesHeader } from '@/components/services/services-header'
import { ServicesList } from '@/components/services/services-list'

export const metadata = {
  title: 'Work With Me — Nur Afni',
  description: 'Choose how you&apos;d like to collaborate — consulting, marketing, building digital products, or learning.',
}

export default function ServicesPage() {
  return (
    <div className="pt-16">
      <ServicesHeader />
      <ServicesList />
    </div>
  )
}
