'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Sparkles, 
  Plus, 
  X, 
  Bed, 
  Utensils, 
  Lightbulb,
  ChevronLeft,
  Navigation,
  Home
} from 'lucide-react'
import { 
  citiesData, 
  generateItinerary, 
  getBudgetDescription,
  DayPlan 
} from '@/lib/itinerary-data'

const interests = [
  { id: 'history', label: 'History', icon: '🏛️' },
  { id: 'food', label: 'Food', icon: '🍜' },
  { id: 'nature', label: 'Nature', icon: '🌿' },
  { id: 'modern', label: 'Modern', icon: '🏙️' },
  { id: 'art', label: 'Art', icon: '🎨' },
  { id: 'shopping', label: 'Shopping', icon: '🛍️' },
  { id: 'nightlife', label: 'Nightlife', icon: '🌃' },
  { id: 'local', label: 'Local Life', icon: '🏮' },
]

const durations = [
  { id: '1-3', label: '1-3 days', days: 3 },
  { id: '4-6', label: '4-6 days', days: 6 },
  { id: '1week', label: '1 week', days: 7 },
  { id: '2weeks', label: '2 weeks', days: 14 },
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
  const [generatedItinerary, setGeneratedItinerary] = useState<DayPlan[]>([])

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

  const handleGenerate = () => {
    const itinerary = generateItinerary(
      selectedCities,
      customCities,
      selectedInterests,
      durations.find(d => d.id === selectedDuration)?.days.toString() || '6',
      selectedBudget
    )
    setGeneratedItinerary(itinerary)
    setStep(3)
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
            Select your destinations and preferences, and we&apos;ll create a personalized itinerary just for you
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
            <span>Your Itinerary</span>
          </div>
        </div>

        {/* Step 1: Select Cities */}
        {step === 1 && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-4 text-slate-800">Where do you want to go?</h2>
            <p className="text-center text-slate-500 mb-8">Select one or more cities, or add your own</p>
            
            {/* Popular Cities */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {Object.values(citiesData).map((city) => (
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

            {allSelectedCities.length > 0 && (
              <div className="bg-slate-100 rounded-xl p-4 mb-8">
                <p className="text-sm text-slate-600 mb-2">Selected cities:</p>
                <p className="font-medium text-slate-800">
                  {allSelectedCities.map(id => citiesData[id]?.name || id).join(' → ')}
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
                    key={interest.id}
                    onClick={() => toggleInterest(interest.id)}
                    className={`px-4 py-2 rounded-full border transition-all ${
                      selectedInterests.includes(interest.id)
                        ? 'bg-slate-700 text-white border-slate-700'
                        : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'
                    }`}
                  >
                    <span className="mr-1">{interest.icon}</span>
                    {interest.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Duration */}
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

            {/* Budget */}
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
                onClick={handleGenerate}
                disabled={selectedInterests.length === 0 || !selectedDuration || !selectedBudget}
                size="lg"
                className="bg-slate-700 hover:bg-slate-800"
              >
                Generate My Itinerary
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Generated Itinerary */}
        {step === 3 && generatedItinerary.length > 0 && (
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
                <Sparkles className="w-8 h-8 text-slate-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800">Your Personalized Itinerary</h2>
              <p className="text-slate-500 mt-2">
                {allSelectedCities.map(id => citiesData[id]?.name || id).join(' → ')} • {selectedInterests.join(', ')} • {durations.find(d => d.id === selectedDuration)?.label}
              </p>
              <p className="text-sm text-slate-400 mt-1">{getBudgetDescription(selectedBudget)}</p>
            </div>

            {/* Itinerary Days */}
            <div className="space-y-6">
              {generatedItinerary.map((day) => (
                <Card key={day.day} className="border-slate-100 overflow-hidden">
                  {/* Day Header */}
                  <div className="bg-slate-50 p-4 border-b border-slate-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-slate-800">Day {day.day}: {day.city}</h3>
                        <p className="text-slate-500">{day.theme}</p>
                      </div>
                      <Badge className="bg-slate-200 text-slate-700">
                        {day.city}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    {/* Activities */}
                    <div className="space-y-4 mb-6">
                      {day.activities.map((activity, idx) => (
                        <div key={idx} className="flex gap-4">
                          <div className="flex-shrink-0 w-16 text-sm font-medium text-slate-600">
                            {activity.time}
                          </div>
                          <div className="flex-1 pb-4 border-l-2 border-slate-200 pl-4 relative">
                            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-slate-300" />
                            <h4 className="font-semibold text-slate-800">{activity.title}</h4>
                            <p className="text-slate-600 text-sm">{activity.description}</p>
                            <div className="flex items-center gap-4 mt-1 text-xs text-slate-400">
                              <span className="flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                {activity.location}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {activity.duration}
                              </span>
                            </div>
                            {activity.tips && (
                              <div className="mt-2 flex items-start gap-1 text-xs text-amber-600 bg-amber-50 p-2 rounded">
                                <Lightbulb className="w-3 h-3 mt-0.5 flex-shrink-0" />
                                {activity.tips}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Accommodation */}
                    <div className="bg-slate-50 rounded-xl p-4 mb-4">
                      <div className="flex items-start gap-3">
                        <Bed className="w-5 h-5 text-slate-400 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-slate-800">Recommended Stay</h4>
                          <p className="text-slate-600">{day.accommodation.name}</p>
                          <p className="text-sm text-slate-500">{day.accommodation.area} - {day.accommodation.description}</p>
                        </div>
                      </div>
                    </div>

                    {/* Meals */}
                    <div className="bg-slate-50 rounded-xl p-4">
                      <div className="flex items-start gap-3">
                        <Utensils className="w-5 h-5 text-slate-400 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-slate-800">Recommended Meals</h4>
                          <div className="text-sm text-slate-600 space-y-1">
                            {day.meals.breakfast && <p>Breakfast: {day.meals.breakfast}</p>}
                            {day.meals.lunch && <p>Lunch: {day.meals.lunch}</p>}
                            {day.meals.dinner && <p>Dinner: {day.meals.dinner}</p>}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex justify-between">
              <Button 
                variant="outline" 
                onClick={() => setStep(2)}
                size="lg"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <div className="flex gap-2">
                <Button 
                  variant="outline"
                  size="lg"
                  onClick={() => alert('Itinerary saved to your account!')}
                >
                  Save Itinerary
                </Button>
                <Button 
                  size="lg"
                  className="bg-slate-700 hover:bg-slate-800"
                  onClick={() => alert('Booking feature coming soon!')}
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Book This Trip
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
