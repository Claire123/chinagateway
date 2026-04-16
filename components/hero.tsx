'use client'

import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronRight, Plane, Stethoscope, MapPin, Sparkles } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const elements = heroRef.current?.querySelectorAll('.animate-on-scroll')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={heroRef} className="relative pt-32 pb-20 overflow-hidden bg-white">
      {/* Background gradient - subtle with warm tone */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAF9] via-white to-white" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-[#0052FF]/5 to-[#4D7CFF]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-[#0052FF]/3 to-transparent rounded-full blur-3xl" />
      
      <div className="container-apple relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge with animation */}
          <div className="opacity-0 animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#0052FF]/10 to-[#4D7CFF]/10 text-[#0052FF] text-sm font-medium mb-8 border border-[#0052FF]/10">
            <Sparkles className="w-4 h-4" />
            <span className="w-2 h-2 rounded-full bg-[#0052FF] animate-pulse-soft" />
            144-Hour Visa-Free Transit Available
          </div>
          
          {/* Main headline - with display font */}
          <h1 className="opacity-0 animate-fade-in-up stagger-1 text-4xl md:text-5xl lg:text-6xl text-[#1D1D1F] mb-6 tracking-tight leading-tight">
            Your Gateway to
            <br />
            <span className="text-gradient">China</span>
          </h1>
          
          {/* Subtitle */}
          <p className="opacity-0 animate-fade-in-up stagger-2 text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            Plan your perfect trip or access world-class healthcare. 
            Save 60-80% on medical costs without compromising quality.
          </p>
          
          {/* CTA Buttons - with brand gradient */}
          <div className="opacity-0 animate-fade-in-up stagger-3 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/travel">
              <Button 
                size="lg"
                className="h-14 px-8 rounded-xl btn-brand text-base"
              >
                <Plane className="w-5 h-5 mr-2" />
                Plan Your Trip
                <ChevronRight className="w-5 h-5 ml-1" />
              </Button>
            </Link>
            <Link href="/healthcare">
              <Button 
                size="lg"
                variant="outline"
                className="h-14 px-8 rounded-xl btn-secondary text-base border-2"
              >
                <Stethoscope className="w-5 h-5 mr-2" />
                Explore Healthcare
              </Button>
            </Link>
          </div>
          
          {/* Trust badges - improved styling */}
          <div className="opacity-0 animate-fade-in-up stagger-4 mt-16 flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            {[
              { icon: MapPin, label: '50+ Partner Hospitals', color: '#10B981' },
              { icon: () => <span className="font-bold text-xs">JCI</span>, label: 'JCI Certified', color: '#0052FF' },
              { icon: () => <span className="font-bold text-xs">24/7</span>, label: 'Support', color: '#F59E0B' },
            ].map((badge, index) => {
              const Icon = badge.icon
              return (
                <div key={index} className="flex items-center gap-3 px-4 py-2 rounded-full bg-slate-50 border border-slate-100">
                  <div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white"
                    style={{ backgroundColor: badge.color }}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-slate-600">{badge.label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      
      {/* Feature cards - with hover effects */}
      <div className="container-apple mt-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Plane,
              title: 'Visa-Free Travel',
              desc: '144-hour transit visa exemption for 54 countries',
              color: '#0052FF',
              gradient: 'from-[#0052FF] to-[#4D7CFF]',
            },
            {
              icon: Stethoscope,
              title: 'Medical Tourism',
              desc: 'World-class healthcare at 60-80% savings',
              color: '#10B981',
              gradient: 'from-[#10B981] to-[#34D399]',
            },
            {
              icon: MapPin,
              title: 'Smart Itinerary',
              desc: 'AI-powered trip planning personalized for you',
              color: '#8B5CF6',
              gradient: 'from-[#8B5CF6] to-[#A78BFA]',
            },
          ].map((feature, index) => {
            const Icon = feature.icon
            return (
              <div 
                key={index}
                className="group p-6 rounded-2xl bg-white border border-slate-100 hover-lift cursor-pointer opacity-0 animate-on-scroll"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <div 
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 bg-gradient-to-br ${feature.gradient} text-white shadow-lg`}
                >
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {feature.desc}
                </p>
                <div className="mt-4 flex items-center text-sm font-medium text-slate-400 group-hover:text-[#0052FF] transition-colors">
                  Learn more
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
