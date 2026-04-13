'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: '10K+', label: 'Happy Travelers' },
  { value: '50+', label: 'Partner Hospitals' },
  { value: '60%', label: 'Average Savings' },
  { value: '4.9', label: 'User Rating', suffix: '★' },
]

export function Stats() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-20 bg-slate-50/50">
      <div className="container-apple">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className={`text-center transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl font-semibold text-slate-700 mb-2">
                {stat.value}
                {stat.suffix && <span className="text-amber-400 text-3xl ml-1">{stat.suffix}</span>}
              </div>
              <div className="text-sm text-slate-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
