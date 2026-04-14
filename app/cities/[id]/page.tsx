import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { citiesData } from '@/lib/itinerary-data'
import { CityDetail } from '@/components/city-detail'

interface CityPageProps {
  params: {
    id: string
  }
}

export function generateMetadata({ params }: CityPageProps): Metadata {
  const city = citiesData[params.id]
  if (!city) {
    return {
      title: 'City Not Found | ChinaGateway',
    }
  }
  
  return {
    title: `${city.name} Travel Guide | ChinaGateway`,
    description: `Discover ${city.name} - ${city.description}. Best attractions, hotels, restaurants, and travel tips.`,
  }
}

export function generateStaticParams() {
  return Object.keys(citiesData).map((id) => ({
    id,
  }))
}

export default function CityPage({ params }: CityPageProps) {
  const city = citiesData[params.id]
  
  if (!city) {
    notFound()
  }
  
  return <CityDetail city={city} />
}
