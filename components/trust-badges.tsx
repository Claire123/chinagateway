'use client'

import { Shield, Award, Globe, Heart } from 'lucide-react'

const badges = [
  {
    icon: Shield,
    title: 'JCI Certified',
    description: 'Joint Commission International accredited hospitals',
  },
  {
    icon: Award,
    title: 'Top Rated',
    description: '4.9/5 average rating from 1,000+ reviews',
  },
  {
    icon: Globe,
    title: 'Global Coverage',
    description: 'Serving patients from 50+ countries',
  },
  {
    icon: Heart,
    title: 'Patient First',
    description: 'Dedicated care coordinators 24/7',
  },
]

export function TrustBadges() {
  return (
    <section className="py-16 border-t border-slate-100">
      <div className="container-apple">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {badges.map((badge) => {
            const Icon = badge.icon
            return (
              <div key={badge.title} className="text-center">
                <Icon className="w-8 h-8 text-slate-400 mx-auto mb-3" />
                <h3 className="font-medium text-slate-800 mb-1">{badge.title}</h3>
                <p className="text-sm text-slate-400">{badge.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
