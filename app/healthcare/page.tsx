import { Metadata } from 'next'
import { HealthcareContent } from '@/components/healthcare-content'

export const metadata: Metadata = {
  title: 'Healthcare Services | ChinaGateway',
  description: 'Medical checkup, dental care, and hospital escort services in Shanghai.',
}

export default function HealthcarePage() {
  return <HealthcareContent />
}
