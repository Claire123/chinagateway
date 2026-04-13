'use client'

import { Button } from '@/components/ui/button'
import { ChevronRight, Plane, Stethoscope, MapPin } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-white">
      {/* Background gradient - subtle Apple style */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F5F5F7] to-white" />
      
      <div className="container-apple relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#007AFF]/10 text-[#007AFF] text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-[#007AFF] animate-pulse" />
            144-Hour Visa-Free Transit Available
          </div>
          
          {/* Main headline - Apple style large title */}
          <h1 className="text-apple-large-title md:text-[48px] lg:text-[56px] text-[#1D1D1F] mb-6 tracking-tight">
            Your Gateway to
            <br />
            <span className="text-[#007AFF]">China</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-[17px] md:text-[21px] text-black/50 max-w-2xl mx-auto mb-10 leading-relaxed">
            Plan your perfect trip or access world-class healthcare. 
            Save 60-80% on medical costs without compromising quality.
          </p>
          
          {/* CTA Buttons - Apple style */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/travel">
              <Button 
                size="lg"
                className="h-12 px-8 rounded-full bg-[#007AFF] hover:bg-[#0051D5] text-white font-medium text-base transition-all duration-150 active:scale-95"
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
                className="h-12 px-8 rounded-full border-[#007AFF] text-[#007AFF] hover:bg-[#007AFF]/10 font-medium text-base transition-all duration-150"
              >
                <Stethoscope className="w-5 h-5 mr-2" />
                Explore Healthcare
              </Button>
            </Link>
          </div>
          
          {/* Trust badges - Apple style */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-black/40">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#34C759]/10 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-[#34C759]" />
              </div>
              <span>50+ Partner Hospitals</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#007AFF]/10 flex items-center justify-center">
                <span className="text-[#007AFF] font-bold text-xs">JCI</span>
              </div>
              <span>JCI Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#FF9500]/10 flex items-center justify-center">
                <span className="text-[#FF9500] font-bold text-xs">24/7</span>
              </div>
              <span>Support</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Feature cards - Apple style floating cards */}
      <div className="container-apple mt-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Plane,
              title: 'Visa-Free Travel',
              desc: '144-hour transit visa exemption for 54 countries',
              color: '#007AFF',
            },
            {
              icon: Stethoscope,
              title: 'Medical Tourism',
              desc: 'World-class healthcare at 60-80% savings',
              color: '#34C759',
            },
            {
              icon: MapPin,
              title: 'Smart Itinerary',
              desc: 'AI-powered trip planning personalized for you',
              color: '#AF52DE',
            },
          ].map((feature, index) => {
            const Icon = feature.icon
            return (
              <div 
                key={index}
                className="group p-6 rounded-2xl bg-white border border-black/5 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${feature.color}15` }}
                >
                  <Icon className="w-6 h-6" style={{ color: feature.color }} />
                </div>
                <h3 className="text-[17px] font-semibold text-[#1D1D1F] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[13px] text-black/50 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
