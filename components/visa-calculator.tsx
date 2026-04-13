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
      <Card className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden">
        <div className="p-8 md:p-12">
          {/* Steps */}
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-white/70 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm font-semibold">
                  1
                </span>
                What is your nationality?
              </label>
              <Select value={nationality} onValueChange={setNationality}>
                <SelectTrigger className="h-14 bg-white/5 border-white/10 text-white text-lg rounded-xl">
                  <SelectValue placeholder="Select your country" />
                </SelectTrigger>
                <SelectContent className="bg-slate-900 border-white/10">
                  {countries.map((country) => (
                    <SelectItem 
                      key={country.code} 
                      value={country.code}
                      className="text-white focus:bg-white/10"
                    >
                      {country.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Step 2 */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-white/70 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm font-semibold">
                  2
                </span>
                Which city will you enter?
              </label>
              <Select value={entryCity} onValueChange={setEntryCity}>
                <SelectTrigger className="h-14 bg-white/5 border-white/10 text-white text-lg rounded-xl">
                  <SelectValue placeholder="Select entry city" />
                </SelectTrigger>
                <SelectContent className="bg-slate-900 border-white/10">
                  {cities.map((city) => (
                    <SelectItem 
                      key={city.code} 
                      value={city.code}
                      className="text-white focus:bg-white/10"
                    >
                      {city.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {selectedCity && (
                <p className="text-sm text-white/40 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Valid region: {selectedCity.region}
                </p>
              )}
            </div>

            {/* Step 3 */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-white/70 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm font-semibold">
                  3
                </span>
                Where are you traveling to after China?
              </label>
              <Select value={thirdCountry} onValueChange={setThirdCountry}>
                <SelectTrigger className="h-14 bg-white/5 border-white/10 text-white text-lg rounded-xl">
                  <SelectValue placeholder="Select destination" />
                </SelectTrigger>
                <SelectContent className="bg-slate-900 border-white/10">
                  {thirdCountries.map((country) => (
                    <SelectItem 
                      key={country.code} 
                      value={country.code}
                      className="text-white focus:bg-white/10"
                    >
                      {country.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-xs text-white/30">
                Must be a different country/region than your origin
              </p>
            </div>

            {/* Calculate Button */}
            <Button 
              onClick={handleCalculate}
              disabled={!nationality || !entryCity || !thirdCountry}
              className="w-full h-14 text-lg bg-white text-black hover:bg-white/90 rounded-full font-medium disabled:opacity-50"
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
                ? 'bg-green-500/10 border border-green-500/20' 
                : 'bg-red-500/10 border border-red-500/20'
            }`}>
              {result === 'eligible' ? (
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white">You are eligible!</h3>
                      <p className="text-white/50">
                        You can visit China without a visa for up to 144 hours
                      </p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-black/30 rounded-xl p-5">
                      <div className="flex items-center gap-2 text-green-400 mb-2">
                        <Clock className="w-5 h-5" />
                        <span className="font-medium">Max Stay</span>
                      </div>
                      <p className="text-3xl font-bold text-white">144 hours</p>
                      <p className="text-sm text-white/40">6 days from entry</p>
                    </div>
                    
                    <div className="bg-black/30 rounded-xl p-5">
                      <div className="flex items-center gap-2 text-green-400 mb-2">
                        <MapPin className="w-5 h-5" />
                        <span className="font-medium">Valid Region</span>
                      </div>
                      <p className="text-lg font-bold text-white">{selectedCity?.region}</p>
                    </div>
                  </div>

                  <div className="bg-black/30 rounded-xl p-5">
                    <div className="flex items-center gap-2 text-white/70 mb-4">
                      <FileText className="w-5 h-5" />
                      <span className="font-medium">Required Documents</span>
                    </div>
                    <ul className="space-y-3">
                      {[
                        'Valid passport (6+ months validity)',
                        'Confirmed onward ticket to third country/region',
                        'Hotel booking (recommended)',
                        'Completed arrival/departure card',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-white/70">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3">
                    <Button variant="outline" className="flex-1 border-white/20 text-white hover:bg-white/10 rounded-full h-12">
                      <FileText className="w-4 h-4 mr-2" />
                      Download Checklist
                    </Button>
                    <Button className="flex-1 bg-white text-black hover:bg-white/90 rounded-full h-12">
                      <Plane className="w-4 h-4 mr-2" />
                      Plan My Trip
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center">
                      <XCircle className="w-8 h-8 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white">You may need a visa</h3>
                      <p className="text-white/50">
                        Based on your selections, visa-free transit may not apply
                      </p>
                    </div>
                  </div>

                  <div className="bg-black/30 rounded-xl p-5">
                    <p className="text-white/70 mb-4">Possible reasons:</p>
                    <ul className="space-y-2 text-white/50">
                      <li>• Your nationality is not on the visa-free list</li>
                      <li>• Your destination is the same as your origin</li>
                      <li>• You plan to stay longer than 144 hours</li>
                    </ul>
                  </div>

                  <div className="flex gap-3">
                    <Button variant="outline" className="flex-1 border-white/20 text-white hover:bg-white/10 rounded-full h-12">
                      Check Visa Requirements
                    </Button>
                    <Button className="flex-1 bg-white text-black hover:bg-white/90 rounded-full h-12">
                      Contact Support
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}
