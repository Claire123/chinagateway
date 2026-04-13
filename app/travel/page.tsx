import { Metadata } from 'next'
import { TripPlanner } from '@/components/trip-planner'

export const metadata: Metadata = {
  title: 'Plan Your Trip to China | ChinaGateway',
  description: 'Plan your perfect trip to China with our smart itinerary generator. Discover destinations, experiences, and travel guides.',
}

export default function TravelPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-b from-blue-600 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Plan Your China Adventure
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            From ancient wonders to modern marvels, discover the real China with personalized itineraries
          </p>
        </div>
      </div>
      
      <TripPlanner />
    </div>
  )
}
