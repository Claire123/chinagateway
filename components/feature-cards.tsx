'use client'

import { useEffect, useRef, useState } from 'react'
import { Card } from '@/components/ui/card'
import { Plane, Stethoscope, Clock, Shield } from 'lucide-react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

const features = [
  {
    icon: Plane,
    title: 'Travel Planning',
    description: 'Smart itinerary generator with 144-hour visa-free calculator.',
    link: '/travel',
    linkText: 'Plan your trip',
    bgGradient: 'from-slate-50 to-stone-50',
  },
  {
    icon: Stethoscope,
    title: 'Medical Tourism',
    description: 'JCI-certified hospitals. Save 60-80% on medical costs.',
    link: '/healthcare',
    linkText: 'Learn more',
    bgGradient: 'from-gray-50 to-slate-50',
  },
  {
    icon: Clock,
    title: 'Visa-Free Transit',
    description: 'Check eligibility instantly for 144-hour visa-free entry.',
    link: '/visa',
    linkText: 'Check now',
    bgGradient: 'from-stone-50 to-gray-50',
  },
  {
    icon: Shield,
    title: 'Trusted Partners',
    description: '50+ verified hospitals with English-speaking staff.',
    link: '/healthcare',
    linkText: 'View hospitals',
    bgGradient: 'from-slate-50 to-gray-50',
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
        { threshold: 0.2 }
      )
      
      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach(observer => observer?.disconnect())
    }
  }, [])

  return (
    <section className="section-xl bg-white">
      <div className="container-apple">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-headline font-semibold text-slate-800 mb-4">
            Everything you need
          </h2>
          <p className="text-body text-slate-500 max-w-2xl mx-auto">
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
                <Card className={`bg-gradient-to-br ${feature.bgGradient} border-0 rounded-3xl overflow-hidden h-full hover-lift`}>
                  <div className="p-10 md:p-12">
                    {/* Icon - 低饱和度 */}
                    <div className="w-12 h-12 rounded-2xl bg-white/80 shadow-sm flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-slate-500" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-title-1 font-semibold text-slate-800 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-body text-slate-500 mb-6">
                      {feature.description}
                    </p>
                    
                    {/* Link - 低饱和度 */}
                    <Link 
                      href={feature.link}
                      className="inline-flex items-center text-slate-500 hover:text-slate-700 text-sm font-medium"
                    >
                      {feature.linkText}
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                  
                  {/* Image Placeholder - 柔和 */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-slate-100/50 to-stone-100/50 flex items-center justify-center">
                    <span className="text-slate-300 text-sm">Feature Image</span>
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
