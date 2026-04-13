'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Globe, Heart, Shield, Users, Target, ChevronRight, Mail } from 'lucide-react'
import Link from 'next/link'

const values = [
  {
    icon: Heart,
    title: 'Patient First',
    description: 'Every decision we make starts with the patient experience in mind. Your health and satisfaction are our top priorities.',
  },
  {
    icon: Shield,
    title: 'Trust & Transparency',
    description: 'Clear pricing, honest communication, and no hidden fees. We believe in building long-term relationships based on trust.',
  },
  {
    icon: Globe,
    title: 'Global Standards',
    description: 'We partner only with JCI-certified hospitals and internationally accredited healthcare providers.',
  },
  {
    icon: Users,
    title: 'Cultural Bridge',
    description: 'Our multilingual team bridges the gap between international patients and Chinese healthcare.',
  },
]

const milestones = [
  { year: '2020', title: 'Founded', description: 'ChinaGateway established in Shanghai' },
  { year: '2021', title: 'First Partnership', description: 'Signed with 5 major hospitals' },
  { year: '2022', title: '1,000 Patients', description: 'Served our 1,000th medical tourist' },
  { year: '2023', title: 'Travel Launch', description: 'Added visa-free travel planning' },
  { year: '2024', title: '50+ Hospitals', description: 'Expanded network across China' },
]

export function AboutContent() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container-apple text-center">
          <h1 className="text-headline font-semibold text-white mb-6">
            Your Trusted Gateway
            <br />
            <span className="text-slate-400">to China</span>
          </h1>
          <p className="text-body text-slate-400 max-w-2xl mx-auto">
            We bridge the gap between international visitors and China&apos;s world-class 
            healthcare and travel experiences. Founded in 2020, we&apos;ve helped thousands 
            of patients and travelers discover the best of China.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-slate-800/50">
        <div className="container-apple">
          <div className="max-w-3xl mx-auto text-center">
            <Target className="w-12 h-12 text-slate-500 mx-auto mb-6" />
            <h2 className="text-title-1 font-semibold text-white mb-6">Our Mission</h2>
            <p className="text-body text-slate-400 leading-relaxed">
              To make China accessible to everyone. Whether you&apos;re seeking world-class 
              medical care at a fraction of the cost, or planning to explore the rich 
              culture and history of China, we&apos;re here to make your journey seamless, 
              safe, and memorable.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-900">
        <div className="container-apple">
          <h2 className="text-title-1 font-semibold text-white text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <Card key={value.title} className="bg-slate-800/50 border-slate-700/50 rounded-2xl">
                  <CardContent className="p-8">
                    <Icon className="w-10 h-10 text-slate-500 mb-4" />
                    <h3 className="text-title-2 font-semibold text-white mb-3">{value.title}</h3>
                    <p className="text-body-small text-slate-400">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-slate-800/50">
        <div className="container-apple">
          <h2 className="text-title-1 font-semibold text-white text-center mb-12">Our Journey</h2>
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex gap-8 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-slate-500" />
                  {index !== milestones.length - 1 && (
                    <div className="w-px h-full bg-slate-700 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <span className="text-sm font-semibold text-slate-500">{milestone.year}</span>
                  <h3 className="text-lg font-semibold text-white mt-1">{milestone.title}</h3>
                  <p className="text-slate-400 text-sm mt-1">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-slate-900">
        <div className="container-apple">
          <h2 className="text-title-1 font-semibold text-white text-center mb-4">Leadership Team</h2>
          <p className="text-slate-400 text-center mb-12">Experienced professionals dedicated to your care</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Leon Zhao', role: 'Medical Director', bio: '20+ years in international healthcare', image: '/images/team/leon.jpg' },
              { name: 'Claire Zhang', role: 'CEO & Founder', bio: 'Former McKinsey consultant, Expert in patient experience', image: '/images/team/claire.jpg' },
              { name: 'Justine Liu', role: 'COO', bio: '10+ years in travel planning', image: '/images/team/justine.jpg' },
            ].map((person) => (
              <Card key={person.name} className="bg-slate-800/50 border-slate-700/50 rounded-2xl text-center">
                <CardContent className="p-8">
                  <div className="w-20 h-20 rounded-full bg-slate-700 mx-auto mb-4 overflow-hidden">
                    {person.image ? (
                      <img 
                        src={person.image} 
                        alt={person.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-400 text-2xl font-bold">
                        {person.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{person.name}</h3>
                  <p className="text-slate-400 text-sm mb-2">{person.role}</p>
                  <p className="text-slate-500 text-sm">{person.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-800/50">
        <div className="container-apple text-center">
          <h2 className="text-title-1 font-semibold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Whether you&apos;re planning a trip or seeking medical care, we&apos;re here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-white text-slate-900 hover:bg-slate-100 rounded-full font-medium"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Us
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/healthcare">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-slate-600 text-slate-300 hover:bg-slate-800 rounded-full"
              >
                Explore Hospitals
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
