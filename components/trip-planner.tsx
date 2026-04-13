'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, Users, Wallet, Sparkles, MapPin, Clock } from 'lucide-react'

const cities = [
  { 
    name: 'Shanghai', 
    image: 'https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?w=400&q=80', 
    description: 'The Paris of the East' 
  },
  { 
    name: 'Beijing', 
    image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400&q=80', 
    description: 'Ancient capital, modern metropolis' 
  },
  { 
    name: 'Xi\'an', 
    image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=400&q=80', 
    description: 'Home of the Terracotta Warriors' 
  },
  { 
    name: 'Chengdu', 
    image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&q=80', 
    description: 'Pandas and spicy food' 
  },
  { 
    name: 'Guilin', 
    image: 'https://images.unsplash.com/photo-1537531383496-f4749b8032cf?w=400&q=80', 
    description: 'Karst mountains and rivers' 
  },
  { 
    name: 'Hangzhou', 
    image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=400&q=80', 
    description: 'Heaven on Earth' 
  },
]

const interests = [
  'History', 'Food', 'Nature', 'Modern', 'Art', 'Shopping', 'Nightlife', 'Local Life'
]

export function TripPlanner() {
  const [step, setStep] = useState(1)
  const [selectedCity, setSelectedCity] = useState('')
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])

  const toggleInterest = (interest: string) => {
    setSelectedInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero - 改为浅灰色背景 */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-slate-50/50 to-white">
        <div className="container-apple text-center">
          <h1 className="text-headline font-semibold text-slate-800 mb-4">
            Plan Your China Adventure
          </h1>
          <p className="text-body text-slate-500 max-w-2xl mx-auto">
            From ancient wonders to modern marvels, discover the real China with personalized itineraries
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Progress */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-between">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  step >= i ? 'bg-slate-600 text-white' : 'bg-slate-200 text-slate-500'
                }`}>
                  {i}
                </div>
                {i < 3 && (
                  <div className={`w-24 h-1 mx-2 ${
                    step > i ? 'bg-slate-600' : 'bg-slate-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm text-slate-400">
            <span>Destination</span>
            <span>Preferences</span>
            <span>Itinerary</span>
          </div>
        </div>

        {/* Step 1: Select City */}
        {step === 1 && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8 text-slate-800">Where do you want to go?</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {cities.map((city) => (
                <Card 
                  key={city.name}
                  className={`cursor-pointer transition-all hover:shadow-lg overflow-hidden ${
                    selectedCity === city.name ? 'ring-2 ring-slate-500' : ''
                  }`}
                  onClick={() => setSelectedCity(city.name)}
                >
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={city.image} 
                      alt={city.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg text-slate-800">{city.name}</h3>
                    <p className="text-sm text-slate-500">{city.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 flex justify-end">
              <Button 
                onClick={() => setStep(2)} 
                disabled={!selectedCity}
                size="lg"
                className="bg-slate-700 hover:bg-slate-800"
              >
                Continue
              </Button>
            </div>
          </div>
        )}

        {/* Step 2: Preferences */}
        {step === 2 && (
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8 text-slate-800">What are you interested in?</h2>
            
            <div className="space-y-6">
              {/* Interests */}
              <div>
                <h3 className="font-semibold mb-3 text-slate-700">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <button
                      key={interest}
                      onClick={() => toggleInterest(interest)}
                      className={`px-4 py-2 rounded-full border transition-all ${
                        selectedInterests.includes(interest)
                          ? 'bg-slate-700 text-white border-slate-700'
                          : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'
                      }`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>

              {/* Duration */}
              <div>
                <h3 className="font-semibold mb-3 text-slate-700">Duration</h3>
                <div className="grid grid-cols-4 gap-2">
                  {['1-3 days', '4-6 days', '1 week', '2 weeks'].map((duration) => (
                    <button
                      key={duration}
                      className="px-4 py-2 rounded-lg border border-slate-200 text-slate-600 hover:border-slate-400 bg-white"
                    >
                      {duration}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget */}
              <div>
                <h3 className="font-semibold mb-3 text-slate-700">Budget</h3>
                <div className="grid grid-cols-3 gap-2">
                  {['Budget', 'Mid-range', 'Luxury'].map((budget) => (
                    <button
                      key={budget}
                      className="px-4 py-2 rounded-lg border border-slate-200 text-slate-600 hover:border-slate-400 bg-white"
                    >
                      {budget}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-between">
              <Button 
                variant="outline" 
                onClick={() => setStep(1)}
                size="lg"
              >
                Back
              </Button>
              <Button 
                onClick={() => setStep(3)}
                disabled={selectedInterests.length === 0}
                size="lg"
                className="bg-slate-700 hover:bg-slate-800"
              >
                Generate Itinerary
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Generated Itinerary */}
        {step === 3 && (
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
                <Sparkles className="w-8 h-8 text-slate-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800">Your Personalized Itinerary</h2>
              <p className="text-slate-500 mt-2">{selectedCity} • {selectedInterests.join(', ')}</p>
            </div>

            <div className="space-y-4">
              {[1, 2, 3].map((day) => (
                <Card key={day} className="border-slate-100">
                  <CardHeader>
                    <CardTitle className="text-lg text-slate-800">Day {day}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-slate-400 mt-0.5" />
                      <div>
                        <p className="font-medium text-slate-700">Morning</p>
                        <p className="text-sm text-slate-500">Explore the city center and local breakfast</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-slate-400 mt-0.5" />
                      <div>
                        <p className="font-medium text-slate-700">Afternoon</p>
                        <p className="text-sm text-slate-500">Visit main attractions and cultural sites</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-slate-400 mt-0.5" />
                      <div>
                        <p className="font-medium text-slate-700">Evening</p>
                        <p className="text-sm text-slate-500">Dinner at recommended local restaurant</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 flex justify-between">
              <Button 
                variant="outline" 
                onClick={() => setStep(2)}
                size="lg"
              >
                Back
              </Button>
              <div className="flex gap-2">
                <Button 
                  variant="outline"
                  size="lg"
                >
                  Save
                </Button>
                <Button 
                  size="lg"
                  className="bg-slate-700 hover:bg-slate-800"
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
