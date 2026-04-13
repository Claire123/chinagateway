'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Star, MapPin, Phone, Globe, CheckCircle, Search, Filter } from 'lucide-react'
import Link from 'next/link'
import { hospitalsData, citiesList, specialtiesList } from '@/lib/hospitals'

export function HospitalDirectory() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCity, setSelectedCity] = useState('All Cities')
  const [selectedSpecialty, setSelectedSpecialty] = useState('All Specialties')

  const filteredHospitals = hospitalsData.filter(hospital => {
    const matchesSearch = hospital.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         hospital.specialties.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCity = selectedCity === 'All Cities' || hospital.city === selectedCity
    const matchesSpecialty = selectedSpecialty === 'All Specialties' || hospital.specialties.includes(selectedSpecialty)
    return matchesSearch && matchesCity && matchesSpecialty
  })

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-slate-50/50 to-white">
        <div className="container-apple text-center">
          <h1 className="text-headline font-semibold text-slate-800 mb-4">
            Partner Hospitals
          </h1>
          <p className="text-body text-slate-500 max-w-2xl mx-auto">
            JCI-certified hospitals with international patient centers and English-speaking staff
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="pb-8">
        <div className="container-apple max-w-4xl">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                placeholder="Search hospitals or specialties..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 bg-slate-50 border-slate-200"
              />
            </div>
            <select 
              className="h-12 px-4 border border-slate-200 rounded-lg bg-white text-slate-700"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              {citiesList.map(city => <option key={city} value={city}>{city}</option>)}
            </select>
            <select 
              className="h-12 px-4 border border-slate-200 rounded-lg bg-white text-slate-700"
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
            >
              {specialtiesList.slice(0, 10).map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-8">
        <div className="container-apple max-w-4xl">
          <div className="flex gap-6 justify-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-700">{hospitalsData.length}+</div>
              <div className="text-sm text-slate-400">Partner Hospitals</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-700">50%+</div>
              <div className="text-sm text-slate-400">Average Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-700">JCI</div>
              <div className="text-sm text-slate-400">Certified</div>
            </div>
          </div>
        </div>
      </section>

      {/* Hospital List */}
      <section className="pb-16">
        <div className="container-apple max-w-4xl space-y-4">
          {filteredHospitals.map((hospital) => (
            <Card key={hospital.id} className="overflow-hidden hover:shadow-lg transition-shadow border-slate-100">
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="w-full md:w-48 h-48 md:h-auto overflow-hidden">
                  <img 
                    src={hospital.image} 
                    alt={hospital.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="flex-1 p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold text-slate-800">{hospital.name}</h3>
                        {hospital.certifications.includes('JCI') && (
                          <Badge className="bg-green-100 text-green-700">
                            JCI Certified
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-slate-400 mb-2">{hospital.nameCn}</p>
                      
                      <div className="flex items-center gap-4 text-sm mb-3">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                          <span className="font-semibold text-slate-700">{hospital.rating}</span>
                          <span className="text-slate-400">({hospital.reviews} reviews)</span>
                        </div>
                        <div className="flex items-center gap-1 text-slate-400">
                          <MapPin className="w-4 h-4" />
                          {hospital.city}
                        </div>
                      </div>

                      <p className="text-sm text-slate-500 mb-3">
                        {hospital.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-3">
                        {hospital.certifications.slice(0, 3).map((cert) => (
                          <Badge key={cert} variant="outline" className="text-green-600 border-green-200">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            {cert}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {hospital.specialties.slice(0, 4).map((specialty) => (
                          <Badge key={specialty} variant="secondary" className="bg-slate-100 text-slate-600">
                            {specialty}
                          </Badge>
                        ))}
                        {hospital.specialties.length > 4 && (
                          <Badge variant="secondary" className="bg-slate-100 text-slate-600">
                            +{hospital.specialties.length - 4} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex md:flex-col gap-2">
                      <Link href={`/healthcare/${hospital.id}/book`}>
                        <Button className="flex-1 md:w-32 bg-slate-700 hover:bg-slate-800">
                          Book Now
                        </Button>
                      </Link>
                      <Link href={`/healthcare/${hospital.id}`}>
                        <Button variant="outline" className="flex-1 md:w-32 border-slate-300">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Empty State */}
      {filteredHospitals.length === 0 && (
        <div className="container-apple text-center py-12">
          <div className="text-slate-400 mb-4">No hospitals found matching your criteria</div>
          <Button 
            variant="outline" 
            onClick={() => {
              setSearchQuery('')
              setSelectedCity('All Cities')
              setSelectedSpecialty('All Specialties')
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-slate-50/50">
        <div className="container-apple text-center">
          <h2 className="text-title-1 font-semibold text-slate-800 mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-slate-500 mb-8 max-w-xl mx-auto">
            Our medical coordinators can help you find the right hospital and doctor for your needs.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-slate-700 hover:bg-slate-800 rounded-full">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
