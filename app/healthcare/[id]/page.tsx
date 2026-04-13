import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { HospitalDetail } from '@/components/hospital-detail'

// Mock data - in real app this would come from database
const hospitals = [
  {
    id: 'shanghai-east',
    name: 'Shanghai East Hospital',
    nameCn: '上海市东方医院',
    city: 'Shanghai',
    rating: 4.8,
    reviews: 127,
    description: 'One of Shanghai\'s top hospitals with a dedicated International Medical Center serving expats and medical tourists since 2005.',
    longDescription: `Shanghai East Hospital is a comprehensive tertiary hospital directly under the Shanghai Municipal Health Commission. Established in 1920, it has grown to become one of the leading medical institutions in China.

The hospital features a state-of-the-art International Medical Center that provides comprehensive healthcare services to foreign patients. With over 2,000 beds and more than 3,000 medical professionals, the hospital offers a full range of medical services from routine checkups to complex surgeries.`,
    image: '/images/hospitals/shanghai-east.jpg',
    address: '150 Jimo Road, Pudong New Area, Shanghai',
    phone: '+86 21 3880 9999',
    email: 'imc@shdfty.com',
    website: 'https://www.shdfty.com',
    certifications: ['JCI', 'Grade 3A', 'ISO 9001'],
    specialties: ['Cardiology', 'Oncology', 'Orthopedics', 'Neurosurgery', 'Traditional Chinese Medicine'],
    languages: ['English', 'Japanese', 'Korean', 'Arabic'],
    facilities: [
      '24/7 Emergency Department',
      'International Patient Center',
      'VIP Wards',
      'Pharmacy',
      'Medical Imaging Center',
      'Laboratory',
    ],
    doctors: [
      { name: 'Dr. Zhang Wei', title: 'Chief Cardiologist', specialty: 'Cardiology', experience: 25 },
      { name: 'Dr. Li Ming', title: 'Senior Oncologist', specialty: 'Oncology', experience: 20 },
      { name: 'Dr. Wang Fang', title: 'Orthopedic Surgeon', specialty: 'Orthopedics', experience: 18 },
    ],
    priceExamples: [
      { service: 'Comprehensive Health Checkup', price: 2800, priceUsd: 400 },
      { service: 'Cardiac Consultation', price: 500, priceUsd: 70 },
      { service: 'MRI Scan', price: 1200, priceUsd: 170 },
      { service: 'Dental Implant', price: 8000, priceUsd: 1150 },
    ],
  },
]

interface Props {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const hospital = hospitals.find(h => h.id === params.id)
  
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
  const hospital = hospitals.find(h => h.id === params.id)

  if (!hospital) {
    notFound()
  }

  return <HospitalDetail hospital={hospital} />
}
