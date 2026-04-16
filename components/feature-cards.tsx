'use client'

import { useEffect, useRef, useState } from 'react'
import { Card } from '@/components/ui/card'
import { Plane, Stethoscope, Clock, Shield, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const features = [
  {
    icon: Plane,
    title: 'Travel Planning',
    description: 'Smart itinerary generator with 144-hour visa-free calculator.',
    link: '/travel',
    linkText: 'Plan your trip',
    color: '#0052FF',
    gradient: 'from-[#0052FF]/5 to-[#4D7CFF]/5',
    image: '/images/cities/shanghai.jpg',
  },
  {
    icon: Stethoscope,
    title: 'Medical Tourism',
    description: 'JCI-certified hospitals. Save 60-80% on medical costs.',
    link: '/healthcare',
    linkText: 'Learn more',
    color: '#10B981',
    gradient: 'from-[#10B981]/5 to-[#34D399]/5',
    image: '/images/hospitals/exterior-modern-01.jpg',
  },
  {
    icon: Clock,
    title: 'Visa-Free Transit',
    description: 'Check eligibility instantly for 144-hour visa-free entry.',
    link: '/visa',
    linkText: 'Check now',
    color: '#F59E0B',
    gradient: 'from-[#F59E0B]/5 to-[#FBBF24]/5',
    image: '/images/cities/beijing.jpg',
  },
  {
    icon: Shield,
    title: 'Trusted Partners',
    description: '50+ verified hospitals with English-speaking staff.',
    link: '/healthcare',
    linkText: 'View hospitals',
    color: '#8B5CF6',
    gradient: 'from-[#8B5CF6]/5 to-[#A78BFA]/5',
    image: '/images/hospitals/interior-reception-01.jpg',
  },
]

export function FeatureCards() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const refs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = refs.current.map((ref, index) => {
      if (!ref) return null
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => [...prev, index])
            observer.unobserve(ref)
          }
        },
        { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
      )
      
      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach(observer => observer?.disconnect())
    }
  }, [])

  return (
    <section className="py-24 bg-white">
      <div className="container-apple">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-slate-800 mb-4 tracking-tight">
            Everything you need
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            From visa-free entry to world-class healthcare, we&apos;ve got you covered.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const isVisible = visibleItems.includes(index)
            
            return (
              <div
                key={feature.title}
                ref={el => { refs.current[index] = el }}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Card className={`group bg-gradient-to-br ${feature.gradient} border border-slate-100 rounded-2xl overflow-hidden h-full hover-lift`}>
                  <div className="p-8 md:p-10">
                    {/* Icon with brand color */}
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-white shadow-lg"
                      style={{ backgroundColor: feature.color }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-semibold text-slate-800 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-slate-500 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    {/* Link with hover effect */}
                    <Link 
                      href={feature.link}
                      className="inline-flex items-center text-sm font-semibold transition-colors"
                      style={{ color: feature.color }}
                    >
                      {feature.linkText}
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  
                  {/* Feature Image */}
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <Image 
                      src={feature.image} 
                      alt={feature.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
