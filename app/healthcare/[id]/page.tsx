import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { HospitalDetail } from '@/components/hospital-detail'
import { hospitalsData } from '@/lib/hospitals'

interface Props {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const hospital = hospitalsData.find(h => h.id === params.id)
  
  if (!hospital) {
    return {
      title: 'Hospital Not Found | ChinaGateway',
    }
  }

  return {
    title: `${hospital.name} | ChinaGateway`,
    description: hospital.description,
  }
}

export default function HospitalDetailPage({ params }: Props) {
  const hospital = hospitalsData.find(h => h.id === params.id)

  if (!hospital) {
    notFound()
  }

  return <HospitalDetail hospital={hospital} />
}
