import { ServicesHeader } from '@/components/services/services-header'
import { ServicesList } from '@/components/services/services-list'
import { ProcessSection } from '@/components/services/process-section'

export default function ServicesPage() {
  return (
    <div className="pt-16">
      <ServicesHeader />
      <ServicesList />
      <ProcessSection />
    </div>
  )
}
