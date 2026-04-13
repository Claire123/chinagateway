'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Calendar, Users, Wallet, Sparkles, MapPin, Clock, Plus, X } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const cities = [
  { 
    id: 'shanghai',
    name: 'Shanghai', 
    image: 'https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?w=400&q=80', 
    description: 'The Paris of the East' 
  },
  { 
    id: 'beijing',
    name: 'Beijing', 
    image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400&q=80', 
    description: 'Ancient capital, modern metropolis' 
  },
  { 
    id: 'xian',
    name: 'Xi\'an', 
    image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=400&q=80', 
    description: 'Home of the Terracotta Warriors' 
  },
  { 
    id: 'chengdu',
    name: 'Chengdu', 
    image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&q=80', 
    description: 'Pandas and spicy food' 
  },
  { 
    id: 'guilin',
    name: 'Guilin', 
    image: 'https://images.unsplash.com/photo-1537531383496-f4749b8032cf?w=400&q=80', 
    description: 'Karst mountains and rivers' 
  },
  { 
    id: 'hangzhou',
    name: 'Hangzhou', 
    image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=400&q=80', 
    description: 'Heaven on Earth' 
  },
]

const interests = [
  'History', 'Food', 'Nature', 'Modern', 'Art', 'Shopping', 'Nightlife', 'Local Life'
]

const durations = [
  { id: '1-3', label: '1-3 days', days: '3 days' },
  { id: '4-6', label: '4-6 days', days: '6 days' },
  { id: '1week', label: '1 week', days: '7 days' },
  { id: '2weeks', label: '2 weeks', days: '14 days' },
]

const budgets = [
  { id: 'budget', label: 'Budget', description: 'Hostels, street food, public transport' },
  { id: 'mid', label: 'Mid-range', description: '3-star hotels, local restaurants, mix of transport' },
  { id: 'luxury', label: 'Luxury', description: '5-star hotels, fine dining, private transfers' },
]

export function TripPlanner() {
  const [step, setStep] = useState(1)
  const [selectedCities, setSelectedCities] = useState<string[]>([])
  const [customCity, setCustomCity] = useState('')
  const [customCities, setCustomCities] = useState<string[]>([])
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])
  const [selectedDuration, setSelectedDuration] = useState('')
  const [selectedBudget, setSelectedBudget] = useState('')

  const toggleCity = (cityId: string) => {
    setSelectedCities(prev => 
      prev.includes(cityId) 
        ? prev.filter(id => id !== cityId)
        : [...prev, cityId]
    )
  }

  const addCustomCity = () => {
    if (customCity.trim() && !customCities.includes(customCity.trim())) {
      setCustomCities([...customCities, customCity.trim()])
      setCustomCity('')
    }
  }

  const removeCustomCity = (city: string) => {
    setCustomCities(customCities.filter(c => c !== city))
  }

  const toggleInterest = (interest: string) => {
    setSelectedInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    )
  }

  const allSelectedCities = [...selectedCities, ...customCities]

  const generateItinerary = () => {
    // In real app, this would call an API
    setStep(3)
  }

  const getItineraryDays = () => {
    const duration = durations.find(d => d.id === selectedDuration)
    const days = duration ? parseInt(duration.days) : 6
    return Array.from({ length: Math.min(days, 7) }, (_, i) => i + 1)
  }

  const getBudgetDescription = () => {
    return budgets.find(b => b.id === selectedBudget)?.description || ''
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
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
            <span>Select Cities</span>
            <span>Preferences</span>
            <span>Itinerary</span>
          </div>
        </div>

        {/* Step 1: Select Cities */}
        {step === 1 && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-4 text-slate-800">Where do you want to go?</h2>
            <p className="text-center text-slate-500 mb-8">Select one or more cities, or add your own</p>
            
            {/* Popular Cities */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {cities.map((city) => (
                <Card 
                  key={city.id}
                  className={`cursor-pointer transition-all hover:shadow-lg overflow-hidden ${
                    selectedCities.includes(city.id) ? 'ring-2 ring-slate-500' : ''
                  }`}
                  onClick={() => toggleCity(city.id)}
                >
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={city.image} 
                      alt={city.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-lg text-slate-800">{city.name}</h3>
                        <p className="text-sm text-slate-500">{city.description}</p>
                      </div>
                      {selectedCities.includes(city.id) && (
                        <div className="w-6 h-6 rounded-full bg-slate-600 text-white flex items-center justify-center text-sm">
                          ✓
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Custom City Input */}
            <div className="bg-slate-50 rounded-xl p-6 mb-8">
              <h3 className="font-semibold text-slate-700 mb-4">Add Custom City</h3>
              <div className="flex gap-2 mb-4">
                <Input
                  placeholder="Enter city name (e.g., Suzhou, Nanjing...)"
                  value={customCity}
                  onChange={(e) => setCustomCity(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addCustomCity()}
                  className="flex-1"
                />
                <Button onClick={addCustomCity} variant="outline" className="border-slate-300">
                  <Plus className="w-4 h-4 mr-2" />
                  Add
                </Button>
              </div>
              
              {/* Selected Custom Cities */}
              {customCities.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {customCities.map((city) => (
                    <Badge key={city} className="bg-slate-200 text-slate-700 px-3 py-1 flex items-center gap-1">
                      {city}
                      <button onClick={() => removeCustomCity(city)} className="ml-1 hover:text-slate-900">
                        <X className="w-3 h-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            {/* Selected Summary */}
            {allSelectedCities.length > 0 && (
              <div className="bg-slate-100 rounded-xl p-4 mb-8">
                <p className="text-sm text-slate-600 mb-2">Selected cities:</p>
                <p className="font-medium text-slate-800">
                  {allSelectedCities.map(id => {
                    const city = cities.find(c => c.id === id)
                    return city ? city.name : id
                  }).join(', ')}
                </p>
              </div>
            )}

            <div className="mt-8 flex justify-end">
              <Button 
                onClick={() => setStep(2)} 
                disabled={allSelectedCities.length === 0}
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
            
            {/* Interests */}
            <div className="mb-8">
              <h3 className="font-semibold mb-3 text-slate-700">Interests (select multiple)</h3>
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

            {/* Duration - Fixed */}
            <div className="mb-8">
              <h3 className="font-semibold mb-3 text-slate-700">Duration</h3>
              <div className="grid grid-cols-4 gap-2">
                {durations.map((duration) => (
                  <button
                    key={duration.id}
                    onClick={() => setSelectedDuration(duration.id)}
                    className={`px-4 py-3 rounded-xl border transition-all ${
                      selectedDuration === duration.id
                        ? 'bg-slate-700 text-white border-slate-700'
                        : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'
                    }`}
                  >
                    {duration.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Budget - Fixed */}
            <div className="mb-8">
              <h3 className="font-semibold mb-3 text-slate-700">Budget</h3>
              <div className="space-y-2">
                {budgets.map((budget) => (
                  <button
                    key={budget.id}
                    onClick={() => setSelectedBudget(budget.id)}
                    className={`w-full px-4 py-4 rounded-xl border text-left transition-all ${
                      selectedBudget === budget.id
                        ? 'bg-slate-700 text-white border-slate-700'
                        : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'
                    }`}
                  >
                    <div className="font-medium">{budget.label}</div>
                    <div className={`text-sm ${selectedBudget === budget.id ? 'text-slate-300' : 'text-slate-400'}`}>
                      {budget.description}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 flex justify-between">
              <Button 
                variant="outline" 
                onClick={() => setStep(1)}
                size="lg"
              >
                Back
              </Button>
              <Button 
                onClick={generateItinerary}
                disabled={selectedInterests.length === 0 || !selectedDuration || !selectedBudget}
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
              <p className="text-slate-500 mt-2">
                {allSelectedCities.map(id => {
                  const city = cities.find(c => c.id === id)
                  return city ? city.name : id
                }).join(' → ')} • {selectedInterests.join(', ')} • {durations.find(d => d.id === selectedDuration)?.label}
              </p>
              <p className="text-sm text-slate-400 mt-1">{getBudgetDescription()}</p>
            </div>

            <div className="space-y-4">
              {getItineraryDays().map((day) => (
                <Card key={day} className="border-slate-100">
                  <CardHeader>
                    <CardTitle className="text-lg text-slate-800">Day {day}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-slate-400 mt-0.5" />
                      <div>
                        <p className="font-medium text-slate-700">Morning</p>
                        <p className="text-sm text-slate-500">
                          {day === 1 ? 'Arrival and hotel check-in' : 
                           selectedInterests.includes('History') ? 'Visit historical sites and museums' :
                           selectedInterests.includes('Food') ? 'Local breakfast and food market tour' :
                           selectedInterests.includes('Nature') ? 'Nature walk or park visit' :
                           'City exploration and sightseeing'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-slate-400 mt-0.5" />
                      <div>
                        <p className="font-medium text-slate-700">Afternoon</p>
                        <p className="text-sm text-slate-500">
                          {selectedInterests.includes('Shopping') ? 'Shopping districts and local markets' :
                           selectedInterests.includes('Art') ? 'Art galleries and cultural exhibits' :
                           selectedInterests.includes('Modern') ? 'Modern architecture and business districts' :
                           'Local attractions and cultural sites'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-slate-400 mt-0.5" />
                      <div>
                        <p className="font-medium text-slate-700">Evening</p>
                        <p className="text-sm text-slate-500">
                          {selectedInterests.includes('Food') ? 'Dinner at recommended local restaurant' :
                           selectedInterests.includes('Nightlife') ? 'Evening entertainment and nightlife' :
                           selectedInterests.includes('Local Life') ? 'Experience local evening activities' :
                           'Dinner and evening stroll'}
                        </p>
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
