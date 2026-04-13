'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronRight, Clock, MapPin, Thermometer } from 'lucide-react'
import Link from 'next/link'

const cities = [
  {
    id: 'shanghai',
    name: 'Shanghai',
    tagline: 'The Paris of the East',
    description: 'China\'s largest city blends futuristic skyline with historic charm.',
    highlights: ['The Bund', 'Yu Garden', 'French Concession', 'Nanjing Road'],
    bestTime: 'March-May, September-November',
    duration: '3-5 days',
    climate: 'Humid subtropical',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Shanghai_skyline_from_the_bund.jpg/800px-Shanghai_skyline_from_the_bund.jpg',
  },
  {
    id: 'beijing',
    name: 'Beijing',
    tagline: 'Ancient Capital, Modern Metropolis',
    description: 'Home to the Great Wall and Forbidden City, China\'s political and cultural center.',
    highlights: ['Great Wall', 'Forbidden City', 'Temple of Heaven', 'Hutongs'],
    bestTime: 'April-May, September-October',
    duration: '4-6 days',
    climate: 'Continental monsoon',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/The_Great_Wall_of_China_at_Jinshanling.jpg/800px-The_Great_Wall_of_China_at_Jinshanling.jpg',
  },
  {
    id: 'xian',
    name: "Xi'an",
    tagline: 'Home of the Terracotta Warriors',
    description: 'Ancient capital with 3,000 years of history and world-famous archaeological sites.',
    highlights: ['Terracotta Army', 'City Wall', 'Muslim Quarter', 'Big Wild Goose Pagoda'],
    bestTime: 'March-May, September-November',
    duration: '2-3 days',
    climate: 'Semi-humid continental',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Xi%27an_City_Wall.jpg/800px-Xi%27an_City_Wall.jpg',
  },
  {
    id: 'chengdu',
    name: 'Chengdu',
    tagline: 'Pandas and Spicy Food',
    description: 'Relaxed city famous for giant pandas, hot pot, and tea house culture.',
    highlights: ['Giant Panda Base', 'Jinli Street', 'Wuhou Shrine', 'Hot Pot'],
    bestTime: 'March-June, September-November',
    duration: '3-4 days',
    climate: 'Humid subtropical',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Giant_Panda_in_Chengdu.jpg/800px-Giant_Panda_in_Chengdu.jpg',
  },
  {
    id: 'guilin',
    name: 'Guilin',
    tagline: 'Karst Mountains and Rivers',
    description: 'Breathtaking natural scenery with limestone peaks and the Li River.',
    highlights: ['Li River Cruise', 'Yangshuo', 'Reed Flute Cave', 'Longji Rice Terraces'],
    bestTime: 'April-October',
    duration: '3-4 days',
    climate: 'Humid subtropical',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Li_River_Guilin.jpg/800px-Li_River_Guilin.jpg',
  },
  {
    id: 'hangzhou',
    name: 'Hangzhou',
    tagline: 'Heaven on Earth',
    description: 'Famous for West Lake, tea plantations, and silk production.',
    highlights: ['West Lake', 'Lingyin Temple', 'Longjing Tea', 'Xixi Wetland'],
    bestTime: 'March-May, September-November',
    duration: '2-3 days',
    climate: 'Humid subtropical',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/West_Lake_Hangzhou.jpg/800px-West_Lake_Hangzhou.jpg',
  },
]

const travelTips = [
  {
    title: 'Visa-Free Transit',
    description: 'Take advantage of 144-hour visa-free transit to explore China without a visa.',
    icon: Clock,
  },
  {
    title: 'Best Time to Visit',
    description: 'Spring (March-May) and Autumn (September-November) offer the best weather.',
    icon: Thermometer,
  },
  {
    title: 'Getting Around',
    description: 'High-speed rail connects major cities. Metro systems are efficient in big cities.',
    icon: MapPin,
  },
]

export function GuidesContent() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-slate-50/50 to-white">
        <div className="container-apple">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 tracking-tight">
              City Guides
            </h1>
            <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Discover China&apos;s most fascinating destinations. From ancient capitals 
              to modern metropolises, each city offers unique experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="py-12">
        <div className="container-apple">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city) => (
              <Card 
                key={city.id}
                className="group relative overflow-hidden bg-slate-50/50 border-0 rounded-2xl hover-lift"
              >
                {/* Image */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={city.image} 
                    alt={city.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-title-2 font-semibold text-slate-800 mb-1">{city.name}</h3>
                  <p className="text-sm text-slate-400 mb-3">{city.tagline}</p>
                  <p className="text-body-small text-slate-500 mb-4">
                    {city.description}
                  </p>
                  
                  {/* Quick info */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-xs">
                      {city.duration}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-xs">
                      {city.climate}
                    </span>
                  </div>
                  
                  {/* Highlights */}
                  <div className="mb-4">
                    <p className="text-xs text-slate-400 mb-2">Highlights:</p>
                    <div className="flex flex-wrap gap-2">
                      {city.highlights.slice(0, 3).map((highlight) => (
                        <span 
                          key={highlight}
                          className="text-xs text-slate-500"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link href={`/guides/${city.id}`}>
                    <Button 
                      variant="ghost" 
                      className="p-0 h-auto text-slate-500 hover:text-slate-700 hover:bg-transparent font-medium text-sm"
                    >
                      Explore Guide
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-20 bg-slate-50/50">
        <div className="container-apple">
          <h2 className="text-title-1 font-semibold text-slate-800 text-center mb-12">Essential Travel Tips</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {travelTips.map((tip) => {
              const Icon = tip.icon
              return (
                <Card key={tip.title} className="bg-white border-0 rounded-2xl">
                  <CardContent className="p-8">
                    <Icon className="w-10 h-10 text-slate-400 mb-4" />
                    <h3 className="text-title-3 font-semibold text-slate-800 mb-2">{tip.title}</h3>
                    <p className="text-body-small text-slate-500">{tip.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-apple text-center">
          <h2 className="text-title-1 font-semibold text-slate-800 mb-6">Ready to Plan Your Trip?</h2>
          <p className="text-slate-500 mb-8 max-w-xl mx-auto">
            Use our smart itinerary generator to create your perfect China adventure.
          </p>
          <Link href="/travel">
            <Button 
              size="lg" 
              className="bg-slate-700 hover:bg-slate-800 text-white rounded-full font-medium"
            >
              Start Planning
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
