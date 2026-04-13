'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "The visa-free transit made my trip so easy. ChinaGateway helped me plan the perfect 6-day Shanghai-Beijing itinerary.",
    author: "Sarah Johnson",
    location: "USA",
    role: "Medical Tourist",
  },
  {
    quote: "I saved over $30,000 on my dental work and got to explore China. The hospital was world-class and the staff spoke perfect English.",
    author: "Michael Chen",
    location: "Canada",
    role: "Dental Patient",
  },
  {
    quote: "As a solo traveler, I felt safe and supported throughout my journey. The local guides were amazing!",
    author: "Emma Wilson",
    location: "UK",
    role: "Solo Traveler",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-slate-50/50">
      <div className="container-apple">
        <div className="text-center mb-12">
          <h2 className="text-title-1 font-semibold text-slate-800 mb-4">
            What Our Users Say
          </h2>
          <p className="text-slate-500">
            Real stories from real travelers and patients
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="bg-white border-0 rounded-2xl">
              <CardContent className="p-8">
                <Quote className="w-8 h-8 text-slate-200 mb-4" />
                <p className="text-slate-600 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-medium">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">{testimonial.author}</p>
                    <p className="text-sm text-slate-400">{testimonial.location} · {testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
