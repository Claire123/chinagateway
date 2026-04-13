'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, Users, Wallet, Sparkles, MapPin, Clock } from 'lucide-react'

const cities = [
  { name: 'Shanghai', image: '/images/shanghai.jpg', description: 'The Paris of the East' },
  { name: 'Beijing', image: '/images/beijing.jpg', description: 'Ancient capital, modern metropolis' },
  { name: 'Xi\'an', image: '/images/xian.jpg', description: 'Home of the Terracotta Warriors' },
  { name: 'Chengdu', image: '/images/chengdu.jpg', description: 'Pandas and spicy food' },
  { name: 'Guilin', image: '/images/guilin.jpg', description: 'Karst mountains and rivers' },
  { name: 'Hangzhou', image: '/images/hangzhou.jpg', description: 'Heaven on Earth' },
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
    <div className="container mx-auto px-4 py-12">
      {/* Progress */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="flex items-center justify-between">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                step >= i ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                {i}
              </div>
              {i < 3 && (
                <div className={`w-24 h-1 mx-2 ${
                  step > i ? 'bg-blue-600' : 'bg-gray-200'
                }`} />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2 text-sm text-muted-foreground">
          <span>Destination</span>
          <span>Preferences</span>
          <span>Itinerary</span>
        </div>
      </div>

      {/* Step 1: Select City */}
      {step === 1 && (
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Where do you want to go?</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {cities.map((city) => (
              <Card 
                key={city.name}
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  selectedCity === city.name ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => setSelectedCity(city.name)}
              >
                <div className="h-40 bg-gradient-to-br from-blue-400 to-blue-600 rounded-t-lg" />
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg">{city.name}</h3>
                  <p className="text-sm text-muted-foreground">{city.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 flex justify-end">
            <Button 
              onClick={() => setStep(2)} 
              disabled={!selectedCity}
              size="lg"
            >
              Continue
            </Button>
          </div>
        </div>
      )}

      {/* Step 2: Preferences */}
      {step === 2 && (
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">What are you interested in?</h2>
          
          <div className="space-y-6">
            {/* Interests */}
            <div>
              <label className="text-sm font-medium mb-3 block">Select your interests</label>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <button
                    key={interest}
                    onClick={() => toggleInterest(interest)}
                    className={`px-4 py-2 rounded-full border transition-all ${
                      selectedInterests.includes(interest)
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white hover:border-blue-300'
                    }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </div>

            {/* Dates */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Start Date
                </label>
                <input type="date" className="w-full p-2 border rounded-md" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Duration
                </label>
                <select className="w-full p-2 border rounded-md">
                  <option>3 days</option>
                  <option>5 days</option>
                  <option>7 days</option>
                  <option>10 days</option>
                </select>
              </div>
            </div>

            {/* Travelers */}
            <div>
              <label className="text-sm font-medium mb-2 block flex items-center gap-2">
                <Users className="w-4 h-4" />
                Travelers
              </label>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="text-xs text-muted-foreground">Adults</label>
                  <input type="number" min={1} defaultValue={2} className="w-full p-2 border rounded-md" />
                </div>
                <div className="flex-1">
                  <label className="text-xs text-muted-foreground">Children</label>
                  <input type="number" min={0} defaultValue={0} className="w-full p-2 border rounded-md" />
                </div>
              </div>
            </div>

            {/* Budget */}
            <div>
              <label className="text-sm font-medium mb-2 block flex items-center gap-2">
                <Wallet className="w-4 h-4" />
                Budget Level
              </label>
              <div className="flex gap-2">
                {['Budget', 'Moderate', 'Luxury'].map((budget) => (
                  <button
                    key={budget}
                    className="flex-1 py-2 border rounded-md hover:border-blue-300 transition-colors"
                  >
                    {budget}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-between">
            <Button variant="outline" onClick={() => setStep(1)}>
              Back
            </Button>
            <Button onClick={() => setStep(3)} size="lg">
              <Sparkles className="w-4 h-4 mr-2" />
              Generate Itinerary
            </Button>
          </div>
        </div>
      )}

      {/* Step 3: Generated Itinerary */}
      {step === 3 && (
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">Your {selectedCity} Adventure</h2>
            <p className="text-muted-foreground">6 days • 2 travelers • Moderate budget</p>
          </div>

          <div className="space-y-4">
            {[1, 2, 3, 4, 5, 6].map((day) => (
              <Card key={day}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold">
                      {day}
                    </span>
                    Day {day}: {day === 1 ? 'Arrival & The Bund' : day === 2 ? 'Old Town & Gardens' : 'Exploration'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-blue-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Morning Activity</p>
                        <p className="text-sm text-muted-foreground">Visit the historic Yu Garden and Bazaar</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-blue-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Afternoon</p>
                        <p className="text-sm text-muted-foreground">Explore the French Concession</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 flex justify-between">
            <Button variant="outline" onClick={() => setStep(2)}>
              Back
            </Button>
            <div className="flex gap-2">
              <Button variant="outline">
                Save Trip
              </Button>
              <Button>
                Book This Trip
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
