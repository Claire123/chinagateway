'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  ChevronLeft, 
  MapPin, 
  Clock, 
  Thermometer,
  Utensils,
  Bus,
  Info,
  Camera,
  Star,
  Navigation
} from 'lucide-react'

interface CityGuideProps {
  city: {
    id: string
    name: string
    tagline: string
    description: string
    image: string
    sections: {
      overview: {
        title: string
        content: string
      }
      attractions: {
        title: string
        items: Array<{
          name: string
          description: string
          tips: string
        }>
      }
      food: {
        title: string
        description: string
        mustTry: string[]
        areas: Array<{
          name: string
          description: string
        }>
      }
      transport: {
        title: string
        metro: string
        taxi: string
        tips: string[]
      }
      practical: {
        title: string
        bestTime: string
        language: string
        currency: string
        tips: string[]
      }
    }
  }
}

export function CityGuideDetail({ city }: CityGuideProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px]">
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
          <Link href="/guides">
            <Button variant="outline" className="bg-white/90 backdrop-blur-sm border-0">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to Guides
            </Button>
          </Link>
        </div>
        
        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              {city.name} Guide
            </h1>
            <p className="text-xl text-white/80">
              {city.tagline}
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-4 py-12">
        {/* Overview */}
        <section className="mb-12">
          <p className="text-lg text-slate-600 leading-relaxed">
            {city.sections.overview.content}
          </p>
        </section>

        {/* Tabs */}
        <Tabs defaultValue="attractions" className="space-y-8">
          <TabsList className="flex flex-wrap gap-2 bg-transparent h-auto justify-start">
            <TabsTrigger value="attractions" className="px-6 py-3 rounded-full border data-[state=active]:bg-slate-700 data-[state=active]:text-white">
              <Camera className="w-4 h-4 mr-2" />
              Attractions
            </TabsTrigger>
            <TabsTrigger value="food" className="px-6 py-3 rounded-full border data-[state=active]:bg-slate-700 data-[state=active]:text-white">
              <Utensils className="w-4 h-4 mr-2" />
              Food & Dining
            </TabsTrigger>
            <TabsTrigger value="transport" className="px-6 py-3 rounded-full border data-[state=active]:bg-slate-700 data-[state=active]:text-white">
              <Bus className="w-4 h-4 mr-2" />
              Getting Around
            </TabsTrigger>
            <TabsTrigger value="practical" className="px-6 py-3 rounded-full border data-[state=active]:bg-slate-700 data-[state=active]:text-white">
              <Info className="w-4 h-4 mr-2" />
              Practical Info
            </TabsTrigger>
          </TabsList>

          {/* Attractions */}
          <TabsContent value="attractions">
            <div className="space-y-6">
              {city.sections.attractions.items.map((attraction, index) => (
                <Card key={index} className="border-slate-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                        <Star className="w-6 h-6 text-slate-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-800 mb-2">{attraction.name}</h3>
                        <p className="text-slate-600 mb-3">{attraction.description}</p>
                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                          <p className="text-sm text-amber-800">
                            <strong>Tips:</strong> {attraction.tips}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Food */}
          <TabsContent value="food">
            <div className="space-y-8">
              <Card className="border-slate-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">About the Cuisine</h3>
                  <p className="text-slate-600">{city.sections.food.description}</p>
                </CardContent>
              </Card>

              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Must-Try Dishes</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {city.sections.food.mustTry.map((dish, index) => (
                    <Card key={index} className="border-slate-200">
                      <CardContent className="p-4 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                          <Utensils className="w-5 h-5 text-red-600" />
                        </div>
                        <span className="font-medium text-slate-800">{dish}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Best Dining Areas</h3>
                <div className="space-y-4">
                  {city.sections.food.areas.map((area, index) => (
                    <Card key={index} className="border-slate-200">
                      <CardContent className="p-4">
                        <h4 className="font-bold text-slate-800">{area.name}</h4>
                        <p className="text-slate-600 text-sm">{area.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Transport */}
          <TabsContent value="transport">
            <div className="space-y-6">
              <Card className="border-slate-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center gap-2">
                    <Bus className="w-5 h-5" />
                    Public Transport
                  </h3>
                  <p className="text-slate-600">{city.sections.transport.metro}</p>
                </CardContent>
              </Card>

              <Card className="border-slate-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Taxis & Rideshare</h3>
                  <p className="text-slate-600">{city.sections.transport.taxi}</p>
                </CardContent>
              </Card>

              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Transport Tips</h3>
                <div className="space-y-3">
                  {city.sections.transport.tips.map((tip, index) => (
                    <div key={index} className="flex items-start gap-3 bg-slate-50 rounded-lg p-4">
                      <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0 text-sm font-bold text-slate-600">
                        {index + 1}
                      </div>
                      <p className="text-slate-700">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Practical */}
          <TabsContent value="practical">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="border-slate-200">
                  <CardContent className="p-6 text-center">
                    <Clock className="w-8 h-8 text-slate-400 mx-auto mb-3" />
                    <h4 className="font-bold text-slate-800 mb-1">Best Time</h4>
                    <p className="text-slate-600 text-sm">{city.sections.practical.bestTime}</p>
                  </CardContent>
                </Card>
                <Card className="border-slate-200">
                  <CardContent className="p-6 text-center">
                    <MapPin className="w-8 h-8 text-slate-400 mx-auto mb-3" />
                    <h4 className="font-bold text-slate-800 mb-1">Language</h4>
                    <p className="text-slate-600 text-sm">{city.sections.practical.language}</p>
                  </CardContent>
                </Card>
                <Card className="border-slate-200">
                  <CardContent className="p-6 text-center">
                    <Thermometer className="w-8 h-8 text-slate-400 mx-auto mb-3" />
                    <h4 className="font-bold text-slate-800 mb-1">Currency</h4>
                    <p className="text-slate-600 text-sm">{city.sections.practical.currency}</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-slate-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Travel Tips</h3>
                  <div className="space-y-3">
                    {city.sections.practical.tips.map((tip, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
                        <p className="text-slate-700">{tip}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA */}
        <section className="mt-16 bg-slate-900 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Plan Your Trip to {city.name}
          </h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Use our smart itinerary generator to create your perfect {city.name} adventure.
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
                Book a Tour
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
