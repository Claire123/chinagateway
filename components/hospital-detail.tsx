'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star, MapPin, Phone, Mail, Globe, CheckCircle, Clock, Award, Users, ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface Hospital {
  id: string
  name: string
  nameCn: string
  city: string
  rating: number
  reviews: number
  description: string
  longDescription: string
  image: string
  address: string
  phone: string
  email: string
  website: string
  certifications: string[]
  specialties: string[]
  languages: string[]
  facilities: string[]
  doctors: Array<{
    name: string
    title: string
    specialty: string
    experience: number
  }>
  priceExamples: Array<{
    service: string
    price: number
    priceUsd: number
  }>
}

export function HospitalDetail({ hospital }: { hospital: Hospital }) {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent" />
        
        <div className="container-apple relative">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                  {hospital.city}
                </Badge>
                {hospital.certifications.includes('JCI') && (
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                    JCI Certified
                  </Badge>
                )}
              </div>
              
              <h1 className="text-headline font-verdana text-white mb-2">
                {hospital.name}
              </h1>
              <p className="text-lg text-white/40 mb-6">{hospital.nameCn}</p>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <span className="text-xl font-bold text-white">{hospital.rating}</span>
                  <span className="text-white/40">({hospital.reviews} reviews)</span>
                </div>
              </div>
              
              <p className="text-body text-white/60 font-inter leading-relaxed mb-8">
                {hospital.description}
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-white/60">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span>{hospital.address}</span>
                </div>
                <div className="flex items-center gap-3 text-white/60">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span>{hospital.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-white/60">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>{hospital.email}</span>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-black hover:bg-white/95 rounded-full font-verdana font-bold btn-interactive"
                >
                  Book Appointment
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 rounded-full"
                >
                  <Globe className="w-4 h-4 mr-2" />
                  Visit Website
                </Button>
              </div>
            </div>
            
            {/* Right Column - Image & Quick Stats */}
            <div className="space-y-6">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10" />
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                <Card className="bg-white/5 border-white/10">
                  <CardContent className="p-4 text-center">
                    <Award className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">{hospital.certifications.length}</div>
                    <div className="text-xs text-white/40">Certifications</div>
                  </CardContent>
                </Card>
                <Card className="bg-white/5 border-white/10">
                  <CardContent className="p-4 text-center">
                    <Users className="w-6 h-6 text-teal-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">{hospital.doctors.length}+</div>
                    <div className="text-xs text-white/40">Expert Doctors</div>
                  </CardContent>
                </Card>
                <Card className="bg-white/5 border-white/10">
                  <CardContent className="p-4 text-center">
                    <Clock className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">24/7</div>
                    <div className="text-xs text-white/40">Emergency</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 border-t border-white/5">
        <div className="container-apple">
          <h2 className="text-title-1 font-verdana text-white mb-6">About the Hospital</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-body text-white/60 font-inter leading-relaxed whitespace-pre-line">
              {hospital.longDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-16 border-t border-white/5">
        <div className="container-apple">
          <h2 className="text-title-1 font-verdana text-white mb-8">Medical Specialties</h2>
          <div className="flex flex-wrap gap-3">
            {hospital.specialties.map((specialty) => (
              <Badge 
                key={specialty}
                className="px-4 py-2 text-base bg-white/5 text-white/80 border-white/10 hover:bg-white/10 transition-colors"
              >
                {specialty}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section className="py-16 border-t border-white/5">
        <div className="container-apple">
          <h2 className="text-title-1 font-verdana text-white mb-8">Expert Doctors</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {hospital.doctors.map((doctor) => (
              <Card key={doctor.name} className="bg-white/5 border-white/10">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 mb-4" />
                  <h3 className="text-lg font-bold text-white mb-1">{doctor.name}</h3>
                  <p className="text-blue-400 text-sm mb-2">{doctor.title}</p>
                  <p className="text-white/40 text-sm">{doctor.experience} years experience</p>
                  <Badge className="mt-3 bg-white/10 text-white/60">
                    {doctor.specialty}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 border-t border-white/5">
        <div className="container-apple">
          <h2 className="text-title-1 font-verdana text-white mb-4">Sample Pricing</h2>
          <p className="text-white/40 mb-8">Transparent pricing in CNY and USD</p>
          
          <div className="grid md:grid-cols-2 gap-4">
            {hospital.priceExamples.map((item) => (
              <Card key={item.service} className="bg-white/5 border-white/10">
                <CardContent className="p-6 flex justify-between items-center">
                  <span className="text-white/80">{item.service}</span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-white">¥{item.price.toLocaleString()}</div>
                    <div className="text-sm text-white/40">~${item.priceUsd}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 border-t border-white/5">
        <div className="container-apple">
          <h2 className="text-title-1 font-verdana text-white mb-8">Facilities & Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {hospital.facilities.map((facility) => (
              <div key={facility} className="flex items-center gap-3 p-4 rounded-xl bg-white/5">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-white/80">{facility}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="py-16 border-t border-white/5">
        <div className="container-apple">
          <h2 className="text-title-1 font-verdana text-white mb-4">Languages Supported</h2>
          <p className="text-white/40 mb-6">Our international team speaks your language</p>
          <div className="flex flex-wrap gap-3">
            {hospital.languages.map((language) => (
              <Badge 
                key={language}
                variant="outline"
                className="px-4 py-2 border-white/20 text-white/70"
              >
                {language}
              </Badge>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
