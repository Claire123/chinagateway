'use client'

import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative bg-gradient-to-b from-slate-50/50 to-white pt-20">
      <div className="container-apple text-center py-16 md:py-24">
        {/* Headline */}
        <h1 
          className={`text-hero font-semibold text-slate-800 mb-4 transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Your Gateway to China
        </h1>
        
        {/* Subheadline */}
        <p 
          className={`text-headline text-slate-500 mb-6 transition-all duration-700 delay-100 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Travel & Healthcare Made Simple
        </p>

        {/* Description */}
        <p 
          className={`text-body text-slate-500 max-w-xl mx-auto mb-10 transition-all duration-700 delay-200 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Experience the real China without the hassle. Access world-class healthcare 
          at a fraction of the cost.
        </p>

        {/* CTA Buttons - 低饱和度 */}
        <div 
          className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-700 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <Link href="/travel">
            <Button 
              size="lg" 
              className="h-12 px-8 bg-slate-700 hover:bg-slate-800 text-white rounded-full text-sm font-medium"
            >
              Plan Your Trip
            </Button>
          </Link>
          <Link href="/healthcare">
            <Button 
              size="lg" 
              variant="outline"
              className="h-12 px-8 bg-white/80 text-slate-600 border-slate-300 hover:bg-white hover:border-slate-400 rounded-full text-sm font-medium"
            >
              Medical Tourism
            </Button>
          </Link>
        </div>

        {/* Hero Image Placeholder - 柔和渐变 */}
        <div 
          className={`relative mx-auto max-w-4xl transition-all duration-1000 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="aspect-[16/9] rounded-3xl bg-gradient-to-br from-slate-100 via-slate-50 to-stone-100 flex items-center justify-center overflow-hidden">
            <div className="text-center">
              <div className="text-6xl mb-4 opacity-60">🇨🇳</div>
              <p className="text-slate-400 text-sm">Hero Image - China Skyline</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
