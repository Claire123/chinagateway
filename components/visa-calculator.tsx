'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { CheckCircle, XCircle, Clock, MapPin, FileText, Plane, ChevronRight } from 'lucide-react'

const countries = [
  { code: 'US', name: 'United States', eligible: true },
  { code: 'UK', name: 'United Kingdom', eligible: true },
  { code: 'CA', name: 'Canada', eligible: true },
  { code: 'AU', name: 'Australia', eligible: true },
  { code: 'DE', name: 'Germany', eligible: true },
  { code: 'FR', name: 'France', eligible: true },
  { code: 'JP', name: 'Japan', eligible: true },
  { code: 'SG', name: 'Singapore', eligible: true },
  { code: 'KR', name: 'South Korea', eligible: true },
  { code: 'OTHER', name: 'Other Country', eligible: false },
]

const cities = [
  { code: 'SHA', name: 'Shanghai', region: 'Shanghai + Jiangsu + Zhejiang', airports: ['PVG', 'SHA'] },
  { code: 'BJS', name: 'Beijing', region: 'Beijing + Tianjin + Hebei', airports: ['PEK', 'PKX'] },
  { code: 'CAN', name: 'Guangzhou', region: 'Guangdong Province', airports: ['CAN'] },
  { code: 'CTU', name: 'Chengdu', region: 'Sichuan Province', airports: ['CTU', 'TFU'] },
  { code: 'XIY', name: 'Xi\'an', region: 'Shaanxi Province', airports: ['XIY'] },
  { code: 'HGH', name: 'Hangzhou', region: 'Zhejiang Province', airports: ['HGH'] },
]

const thirdCountries = [
  { code: 'HK', name: 'Hong Kong' },
  { code: 'MO', name: 'Macau' },
  { code: 'TW', name: 'Taiwan' },
  { code: 'JP', name: 'Japan' },
  { code: 'KR', name: 'South Korea' },
  { code: 'SG', name: 'Singapore' },
  { code: 'OTHER', name: 'Other Country/Region' },
]

type ResultType = 'eligible' | 'not-eligible' | null

export function VisaCalculator() {
  const [nationality, setNationality] = useState('')
  const [entryCity, setEntryCity] = useState('')
  const [thirdCountry, setThirdCountry] = useState('')
  const [result, setResult] = useState<ResultType>(null)
  const [showResult, setShowResult] = useState(false)

  const handleCalculate = () => {
    if (!nationality || !entryCity || !thirdCountry) return
    
    const country = countries.find(c => c.code === nationality)
    const eligible = country?.eligible && thirdCountry !== nationality
    
    setResult(eligible ? 'eligible' : 'not-eligible')
    setShowResult(true)
  }

  const selectedCity = cities.find(c => c.code === entryCity)

  return (
    <div className="container-apple max-w-3xl">
      <Card className="bg-white border-slate-100 overflow-hidden">
        <div className="p-8 md:p-12">
          {/* Steps */}
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-slate-600 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-sm font-semibold">
                  1
                </span>
                What is your nationality?
              </label>
              <Select value={nationality} onValueChange={setNationality}>
                <SelectTrigger className="h-14 bg-slate-50 border-slate-200 text-slate-800 text-lg rounded-xl">
                  <SelectValue placeholder="Select your country" />
                </SelectTrigger>
                <SelectContent className="bg-white border-slate-200">
                  {countries.map((country) => (
                    <SelectItem 
                      key={country.code} 
                      value={country.code}
                      className="text-slate-800 focus:bg-slate-100"
                    >
                      {country.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Step 2 */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-slate-600 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-sm font-semibold">
                  2
                </span>
                Which city will you enter?
              </label>
              <Select value={entryCity} onValueChange={setEntryCity}>
                <SelectTrigger className="h-14 bg-slate-50 border-slate-200 text-slate-800 text-lg rounded-xl">
                  <SelectValue placeholder="Select entry city" />
                </SelectTrigger>
                <SelectContent className="bg-white border-slate-200">
                  {cities.map((city) => (
                    <SelectItem 
                      key={city.code} 
                      value={city.code}
                      className="text-slate-800 focus:bg-slate-100"
                    >
                      {city.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {selectedCity && (
                <p className="text-sm text-slate-400 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Valid region: {selectedCity.region}
                </p>
              )}
            </div>

            {/* Step 3 */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-slate-600 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-sm font-semibold">
                  3
                </span>
                Where are you traveling to after China?
              </label>
              <Select value={thirdCountry} onValueChange={setThirdCountry}>
                <SelectTrigger className="h-14 bg-slate-50 border-slate-200 text-slate-800 text-lg rounded-xl">
                  <SelectValue placeholder="Select destination" />
                </SelectTrigger>
                <SelectContent className="bg-white border-slate-200">
                  {thirdCountries.map((country) => (
                    <SelectItem 
                      key={country.code} 
                      value={country.code}
                      className="text-slate-800 focus:bg-slate-100"
                    >
                      {country.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-xs text-slate-400">
                Must be a different country/region than your origin
              </p>
            </div>

            {/* Calculate Button */}
            <Button 
              onClick={handleCalculate}
              disabled={!nationality || !entryCity || !thirdCountry}
              className="w-full h-14 text-lg bg-slate-700 text-white hover:bg-slate-800 rounded-full font-medium disabled:opacity-50"
              size="lg"
            >
              Check My Eligibility
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Result */}
          {showResult && result && (
            <div className={`mt-8 rounded-2xl p-8 ${
              result === 'eligible' 
                ? 'bg-green-50 border border-green-200' 
                : 'bg-red-50 border border-red-200'
            }`}>
              {result === 'eligible' ? (
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-slate-800">You are eligible!</h3>
                      <p className="text-slate-500">
                        You can visit China without a visa for up to 144 hours
                      </p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-5 border border-slate-100">
                      <div className="flex items-center gap-2 text-green-600 mb-2">
                        <Clock className="w-5 h-5" />
                        <span className="font-medium">Max Stay</span>
                      </div>
                      <p className="text-3xl font-bold text-slate-800">144 hours</p>
                      <p className="text-sm text-slate-500">6 days maximum</p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-5 border border-slate-100">
                      <div className="flex items-center gap-2 text-slate-600 mb-2">
                        <MapPin className="w-5 h-5" />
                        <span className="font-medium">Valid Region</span>
                      </div>
                      <p className="text-lg font-bold text-slate-800">{selectedCity?.region}</p>
                      <p className="text-sm text-slate-500">Stay within this area</p>
                    </div>
                  </div>

                  <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
                    <h4 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
                      <FileText className="w-5 h-5" />
                      Required Documents
                    </h4>
                    <ul className="text-sm text-amber-700 space-y-1">
                      <li>• Valid passport (6+ months validity)</li>
                      <li>• Confirmed onward ticket to third country</li>
                      <li>• Hotel booking or accommodation proof</li>
                      <li>• Completed arrival/departure card</li>
                    </ul>
                  </div>

                  <Button className="w-full h-12 bg-slate-700 hover:bg-slate-800 text-white rounded-full">
                    <Plane className="w-5 h-5 mr-2" />
                    Start Planning My Trip
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
                      <XCircle className="w-8 h-8 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-slate-800">Not eligible for visa-free</h3>
                      <p className="text-slate-500">
                        You will need to apply for a regular visa
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-5 border border-slate-100">
                    <h4 className="font-semibold text-slate-800 mb-3">Why?</h4>
                    <ul className="text-slate-600 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-red-500">•</span>
                        Your nationality is not on the eligible countries list, OR
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500">•</span>
                        Your third country destination is the same as your origin
                      </li>
                    </ul>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                    <h4 className="font-semibold text-slate-800 mb-2">Alternative Options</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Apply for a tourist visa (L visa) - typically valid for 30-90 days</li>
                      <li>• Consider the 72-hour visa-free transit if applicable</li>
                      <li>• Contact the Chinese embassy for guidance</li>
                    </ul>
                  </div>

                  <Button variant="outline" className="w-full h-12 border-slate-300 text-slate-700 rounded-full">
                    Learn About Visa Application
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}
