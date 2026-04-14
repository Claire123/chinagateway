'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  MapPin, 
  Star, 
  Clock, 
  Utensils, 
  Bed, 
  Camera,
  ChevronLeft,
  Navigation,
  Sun,
  Thermometer,
  Users,
  Calendar
} from 'lucide-react'
import { CityData } from '@/lib/itinerary-data'

interface CityDetailProps {
  city: CityData
}

const interestLabels: Record<string, { label: string; icon: string; color: string }> = {
  history: { label: 'History', icon: '🏛️', color: 'bg-amber-100 text-amber-800' },
  food: { label: 'Food', icon: '🍜', color: 'bg-red-100 text-red-800' },
  nature: { label: 'Nature', icon: '🌿', color: 'bg-green-100 text-green-800' },
  modern: { label: 'Modern', icon: '🏙️', color: 'bg-blue-100 text-blue-800' },
  art: { label: 'Art', icon: '🎨', color: 'bg-purple-100 text-purple-800' },
  shopping: { label: 'Shopping', icon: '🛍️', color: 'bg-pink-100 text-pink-800' },
  nightlife: { label: 'Nightlife', icon: '🌃', color: 'bg-indigo-100 text-indigo-800' },
  local: { label: 'Local Life', icon: '🏮', color: 'bg-orange-100 text-orange-800' },
}

export function CityDetail({ city }: CityDetailProps) {
  const [selectedInterest, setSelectedInterest] = useState<string>('history')
  
  const availableInterests = Object.keys(city.itineraries).filter(
    key => city.itineraries[key as keyof typeof city.itineraries]?.length > 0
  )
  
  const currentItinerary = city.itineraries[selectedInterest as keyof typeof city.itineraries] || []

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px]">
        <Image
          src={city.image}
          alt={city.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
        {/* Back Button */}
        <div className="absolute top-6 left-6 z-10">
          <Link href="/travel">
            <Button variant="outline" className="bg-white/90 backdrop-blur-sm border-0">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to Trip Planner
            </Button>
          </Link>
        </div>
        
        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="container mx-auto max-w-6xl">
            <Badge className="mb-4 bg-white/20 text-white backdrop-blur-sm border-0">
              <MapPin className="w-3 h-3 mr-1" />
              China Destination
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {city.name}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              {city.description}
            </p>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto max-w-6xl px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Thermometer className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-slate-500">Best Season</p>
                <p className="font-medium text-slate-800">Spring/Autumn</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                <Clock className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <p className="text-xs text-slate-500">Recommended</p>
                <p className="font-medium text-slate-800">3-5 Days</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <Users className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-xs text-slate-500">Best For</p>
                <p className="font-medium text-slate-800">All Travelers</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                <Star className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-xs text-slate-500">Rating</p>
                <p className="font-medium text-slate-800">4.8/5.0</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-4 py-12">
        {/* Highlights */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Top Highlights</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {city.highlights.map((highlight, index) => (
              <Card key={index} className="border-slate-200">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-3">
                    <Camera className="w-6 h-6 text-slate-600" />
                  </div>
                  <p className="font-medium text-slate-800 text-sm">{highlight}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Where to Stay */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Where to Stay</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-green-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge className="bg-green-100 text-green-800">Budget</Badge>
                </div>
                <h3 className="font-bold text-lg text-slate-800 mb-2">{city.bestAreas.budget.name}</h3>
                <p className="text-slate-600 text-sm">{city.bestAreas.budget.description}</p>
              </CardContent>
            </Card>
            <Card className="border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge className="bg-blue-100 text-blue-800">Mid-Range</Badge>
                </div>
                <h3 className="font-bold text-lg text-slate-800 mb-2">{city.bestAreas.mid.name}</h3>
                <p className="text-slate-600 text-sm">{city.bestAreas.mid.description}</p>
              </CardContent>
            </Card>
            <Card className="border-purple-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge className="bg-purple-100 text-purple-800">Luxury</Badge>
                </div>
                <h3 className="font-bold text-lg text-slate-800 mb-2">{city.bestAreas.luxury.name}</h3>
                <p className="text-slate-600 text-sm">{city.bestAreas.luxury.description}</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Itineraries by Interest */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Sample Itineraries</h2>
          
          <Tabs value={selectedInterest} onValueChange={setSelectedInterest}>
            <TabsList className="flex flex-wrap gap-2 bg-transparent h-auto mb-6">
              {availableInterests.map((interest) => (
                <TabsTrigger
                  key={interest}
                  value={interest}
                  className={`px-4 py-2 rounded-full border data-[state=active]:border-slate-600 data-[state=active]:bg-slate-600 data-[state=active]:text-white ${interestLabels[interest]?.color || 'bg-slate-100 text-slate-700'}`}
                >
                  <span className="mr-1">{interestLabels[interest]?.icon}</span>
                  {interestLabels[interest]?.label || interest}
                </TabsTrigger>
              ))}
            </TabsList>

            {availableInterests.map((interest) => (
              <TabsContent key={interest} value={interest}>
                <div className="space-y-6">
                  {city.itineraries[interest as keyof typeof city.itineraries]?.map((day, index) => (
                    <Card key={index} className="border-slate-200">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-full bg-slate-600 text-white flex items-center justify-center font-bold">
                            {day.day}
                          </div>
                          <div>
                            <h3 className="font-bold text-lg text-slate-800">Day {day.day}: {day.theme}</h3>
                          </div>
                        </div>

                        {/* Activities */}
                        <div className="space-y-4 mb-6">
                          {day.activities.map((activity, actIndex) => (
                            <div key={actIndex} className="flex gap-4 pb-4 border-b border-slate-100 last:border-0">
                              <div className="flex-shrink-0 w-16 text-sm font-medium text-slate-500">
                                {activity.time}
                              </div>
                              <div className="flex-1">
                                <h4 className="font-semibold text-slate-800">{activity.title}</h4>
                                <p className="text-slate-600 text-sm mb-1">{activity.description}</p>
                                <div className="flex items-center gap-4 text-xs text-slate-400">
                                  <span className="flex items-center gap-1">
                                    <MapPin className="w-3 h-3" />
                                    {activity.location}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    {activity.duration}
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Meals & Stay */}
                        <div className="grid md:grid-cols-2 gap-4 bg-slate-50 rounded-lg p-4">
                          <div className="flex items-start gap-3">
                            <Utensils className="w-5 h-5 text-slate-400 mt-0.5" />
                            <div>
                              <p className="font-medium text-slate-800 text-sm">Recommended Meals</p>
                              <div className="text-xs text-slate-600 mt-1">
                                {day.meals.breakfast && <p>Breakfast: {day.meals.breakfast}</p>}
                                {day.meals.lunch && <p>Lunch: {day.meals.lunch}</p>}
                                {day.meals.dinner && <p>Dinner: {day.meals.dinner}</p>}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Bed className="w-5 h-5 text-slate-400 mt-0.5" />
                            <div>
                              <p className="font-medium text-slate-800 text-sm">Where to Stay</p>
                              <p className="text-xs text-slate-600 mt-1">{day.accommodation.name}</p>
                              {day.accommodation.area && (
                                <p className="text-xs text-slate-500">{day.accommodation.area}</p>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>

        {/* CTA */}
        <section className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Plan Your Trip to {city.name}
          </h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Create a personalized itinerary with our smart trip planner. Select your interests, budget, and dates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/travel">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                <Navigation className="w-4 h-4 mr-2" />
                Create My Itinerary
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Calendar className="w-4 h-4 mr-2" />
                Book a Tour
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
