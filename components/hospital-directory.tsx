'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Star, MapPin, Phone, Globe, CheckCircle, Search, Filter } from 'lucide-react'

const hospitals = [
  {
    id: 1,
    name: 'Shanghai East Hospital',
    nameCn: '上海市东方医院',
    city: 'Shanghai',
    rating: 4.8,
    reviews: 127,
    image: '/images/hospital-1.jpg',
    specialties: ['Cardiology', 'Oncology', 'Orthopedics'],
    certifications: ['JCI', 'Grade 3A'],
    hasEnglish: true,
    hasInternational: true,
    description: 'One of Shanghai\'s top hospitals with a dedicated International Medical Center serving expats and medical tourists since 2005.',
    priceRange: '$$',
  },
  {
    id: 2,
    name: 'Peking Union Medical College Hospital',
    nameCn: '北京协和医院',
    city: 'Beijing',
    rating: 4.9,
    reviews: 203,
    image: '/images/hospital-2.jpg',
    specialties: ['Internal Medicine', 'Surgery', 'Dermatology'],
    certifications: ['Grade 3A'],
    hasEnglish: true,
    hasInternational: true,
    description: 'Consistently ranked #1 in China, with over 90 years of history and world-class medical expertise.',
    priceRange: '$$$',
  },
  {
    id: 3,
    name: '9th People\'s Hospital Shanghai',
    nameCn: '上海第九人民医院',
    city: 'Shanghai',
    rating: 4.7,
    reviews: 89,
    image: '/images/hospital-3.jpg',
    specialties: ['Dental', 'Plastic Surgery', 'Ophthalmology'],
    certifications: ['Grade 3A'],
    hasEnglish: true,
    hasInternational: false,
    description: 'Renowned for dental and cosmetic surgery, offering significant cost savings compared to Western countries.',
    priceRange: '$$',
  },
  {
    id: 4,
    name: 'Guangdong Provincial People\'s Hospital',
    nameCn: '广东省人民医院',
    city: 'Guangzhou',
    rating: 4.6,
    reviews: 156,
    image: '/images/hospital-4.jpg',
    specialties: ['Cardiology', 'Neurology', 'Oncology'],
    certifications: ['JCI', 'Grade 3A'],
    hasEnglish: true,
    hasInternational: true,
    description: 'Leading hospital in South China with comprehensive international patient services.',
    priceRange: '$$',
  },
  {
    id: 5,
    name: 'West China Hospital',
    nameCn: '四川大学华西医院',
    city: 'Chengdu',
    rating: 4.8,
    reviews: 134,
    image: '/images/hospital-5.jpg',
    specialties: ['Neurosurgery', 'Cardiology', 'Traditional Chinese Medicine'],
    certifications: ['Grade 3A'],
    hasEnglish: true,
    hasInternational: true,
    description: 'The largest single-site hospital in the world, combining Western medicine with Traditional Chinese Medicine.',
    priceRange: '$',
  },
  {
    id: 6,
    name: 'Sir Run Run Shaw Hospital',
    nameCn: '浙江大学医学院附属邵逸夫医院',
    city: 'Hangzhou',
    rating: 4.7,
    reviews: 98,
    image: '/images/hospital-6.jpg',
    specialties: ['Oncology', 'Gastroenterology', 'Minimally Invasive Surgery'],
    certifications: ['JCI', 'Grade 3A'],
    hasEnglish: true,
    hasInternational: true,
    description: 'Joint venture hospital with US management, offering international standards at local prices.',
    priceRange: '$$',
  },
]

const cities = ['All Cities', 'Shanghai', 'Beijing', 'Guangzhou', 'Chengdu', 'Hangzhou']
const specialties = ['All Specialties', 'Cardiology', 'Oncology', 'Dental', 'Orthopedics', 'Plastic Surgery', 'Traditional Chinese Medicine']

export function HospitalDirectory() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCity, setSelectedCity] = useState('All Cities')
  const [selectedSpecialty, setSelectedSpecialty] = useState('All Specialties')

  const filteredHospitals = hospitals.filter(hospital => {
    const matchesSearch = hospital.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         hospital.specialties.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCity = selectedCity === 'All Cities' || hospital.city === selectedCity
    const matchesSpecialty = selectedSpecialty === 'All Specialties' || hospital.specialties.includes(selectedSpecialty)
    return matchesSearch && matchesCity && matchesSpecialty
  })

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Search and Filters */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search hospitals or specialties..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12"
            />
          </div>
          <select 
            className="h-12 px-4 border rounded-md bg-white"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            {cities.map(city => <option key={city} value={city}>{city}</option>)}
          </select>
          <select 
            className="h-12 px-4 border rounded-md bg-white"
            value={selectedSpecialty}
            onChange={(e) => setSelectedSpecialty(e.target.value)}
          >
            {specialties.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-4xl mx-auto mb-8 flex gap-6 justify-center">
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-600">{hospitals.length}+</div>
          <div className="text-sm text-muted-foreground">Partner Hospitals</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-teal-600">50%+</div>
          <div className="text-sm text-muted-foreground">Average Savings</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-green-600">JCI</div>
          <div className="text-sm text-muted-foreground">Certified</div>
        </div>
      </div>

      {/* Hospital List */}
      <div className="max-w-4xl mx-auto space-y-4">
        {filteredHospitals.map((hospital) => (
          <Card key={hospital.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="flex flex-col md:flex-row">
              {/* Image */}
              <div className="w-full md:w-48 h-48 md:h-auto bg-gradient-to-br from-teal-400 to-blue-500" />
              
              {/* Content */}
              <div className="flex-1 p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold">{hospital.name}</h3>
                      {hospital.hasInternational && (
                        <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                          International Center
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{hospital.nameCn}</p>
                    
                    <div className="flex items-center gap-4 text-sm mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="font-semibold">{hospital.rating}</span>
                        <span className="text-muted-foreground">({hospital.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {hospital.city}
                      </div>
                      <div className="text-muted-foreground">
                        {hospital.priceRange}
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-3">
                      {hospital.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {hospital.certifications.map((cert) => (
                        <Badge key={cert} variant="outline" className="text-green-600 border-green-200">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          {cert}
                        </Badge>
                      ))}
                      {hospital.hasEnglish && (
                        <Badge variant="outline" className="text-blue-600 border-blue-200">
                          English Service
                        </Badge>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {hospital.specialties.map((specialty) => (
                        <Badge key={specialty} variant="secondary">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex md:flex-col gap-2">
                    <Button className="flex-1 md:w-32">
                      Book Now
                    </Button>
                    <Button variant="outline" className="flex-1 md:w-32">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredHospitals.length === 0 && (
        <div className="text-center py-12">
          <div className="text-muted-foreground mb-4">No hospitals found matching your criteria</div>
          <Button variant="outline" onClick={() => {
            setSearchQuery('')
            setSelectedCity('All Cities')
            setSelectedSpecialty('All Specialties')
          }}>
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  )
}
