'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageCircle, Loader2, MapPinned, Calendar, Wallet, X } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'contactus@chinagateway.it.com',
    href: 'mailto:contactus@chinagateway.it.com',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp/WeChat',
    value: '+86 159 0063 0236',
    href: 'https://wa.me/8615900630236',
  },
  {
    icon: MapPin,
    label: 'Office',
    value: 'Shanghai, China',
    href: '#',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: '24/7 Support',
    href: '#',
  },
]

function ContactForm() {
  const searchParams = useSearchParams()
  const subjectParam = searchParams.get('subject')
  const itineraryParam = searchParams.get('itinerary')
  
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [itineraryData, setItineraryData] = useState<any>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: subjectParam || '',
    message: '',
  })

  // Parse itinerary data from URL
  useEffect(() => {
    if (itineraryParam) {
      try {
        const parsed = JSON.parse(decodeURIComponent(itineraryParam))
        setItineraryData(parsed)
        
        // Auto-populate message with itinerary details
        const itinerarySummary = parsed.itinerary?.map((day: any) => 
          `Day ${day.day}: ${day.city} - ${day.theme}\nActivities: ${day.activities}`
        ).join('\n\n')
        
        setFormData(prev => ({
          ...prev,
          message: `Hi, I'm interested in booking a trip to China.\n\n` +
            `Destinations: ${parsed.cities?.join(' → ')}\n` +
            `Duration: ${parsed.duration}\n` +
            `Budget: ${parsed.budget}\n` +
            `Interests: ${parsed.interests?.join(', ')}\n\n` +
            `Itinerary Summary:\n${itinerarySummary}\n\n` +
            `Please contact me to discuss further details.`
        }))
      } catch (e) {
        console.error('Failed to parse itinerary:', e)
      }
    }
  }, [itineraryParam])

  const clearItinerary = () => {
    setItineraryData(null)
    setFormData(prev => ({
      ...prev,
      message: ''
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setSubmitted(true)
    } catch (err) {
      console.error('Contact Form Error:', err)
      setError('Failed to send message. Please try again or contact us directly via email/WhatsApp.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container-apple text-center">
          <h1 className="text-headline font-semibold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-body text-slate-400 max-w-xl mx-auto">
            Have questions about travel or healthcare in China? 
            We&apos;re here to help 24/7.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 border-t border-slate-800">
        <div className="container-apple">
          <div className="flex flex-wrap justify-center gap-4">
            {contactInfo.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="group p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:bg-slate-800 transition-all duration-300 w-[200px] text-center"
                >
                  <Icon className="w-8 h-8 text-slate-400 mb-4 mx-auto group-hover:scale-110 transition-transform" />
                  <div className="text-sm text-slate-400 mb-1">{item.label}</div>
                  <div className="text-white font-medium text-sm break-words">{item.value}</div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 border-t border-slate-800">
        <div className="container-apple">
          <div className="max-w-2xl mx-auto">
            {/* Itinerary Summary Card */}
            {itineraryData && (
              <Card className="bg-slate-800/50 border-slate-700 mb-6">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <MapPinned className="w-5 h-5 text-slate-400" />
                      <h3 className="font-semibold text-white">Your Itinerary</h3>
                    </div>
                    <button 
                      onClick={clearItinerary}
                      className="text-slate-400 hover:text-slate-300"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Badge className="bg-slate-700 text-slate-200">
                        {itineraryData.cities?.join(' → ')}
                      </Badge>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="flex items-center gap-1 text-slate-400">
                        <Calendar className="w-4 h-4" />
                        {itineraryData.duration}
                      </span>
                      <span className="flex items-center gap-1 text-slate-400">
                        <Wallet className="w-4 h-4" />
                        {itineraryData.budget}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {itineraryData.interests?.map((interest: string) => (
                        <Badge key={interest} variant="outline" className="border-slate-600 text-slate-400 text-xs">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="text-xs text-slate-500">
                      {itineraryData.itinerary?.length} days planned
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
            
            {submitted ? (
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h2 className="text-title-1 font-semibold text-white mb-4">Message Sent!</h2>
                  <p className="text-slate-400">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-8">
                  <h2 className="text-title-2 font-semibold text-white mb-6">
                    Send us a Message
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">
                          Your Name
                        </label>
                        <Input
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Smith"
                          className="h-12 bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">
                          Email Address
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@example.com"
                          className="h-12 bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">
                        Subject
                      </label>
                      <Input
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="How can we help?"
                        className="h-12 bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">
                        Message
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us more about your inquiry..."
                        className="w-full h-40 p-4 rounded-xl border border-slate-600 bg-slate-900/50 text-white placeholder:text-slate-500 focus:border-slate-400 focus:outline-none resize-none"
                        required
                      />
                    </div>

                    {error && (
                      <div className="p-4 rounded-xl bg-red-500/20 border border-red-500/30 text-red-300 text-sm">
                        {error}
                      </div>
                    )}

                    <Button 
                      type="submit" 
                      size="lg"
                      disabled={isLoading}
                      className="w-full h-14 bg-white text-slate-900 hover:bg-slate-100 rounded-full font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          {itineraryData ? 'Submit Booking Request' : 'Send Message'}
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 border-t border-slate-800">
        <div className="container-apple">
          <h2 className="text-title-1 font-semibold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'How quickly can I get an appointment?',
                a: 'For most hospitals, we can arrange appointments within 3-7 days. Emergency cases can be accommodated within 24 hours.',
              },
              {
                q: 'Do you provide translation services?',
                a: 'Yes, we provide medical interpreters for consultations, procedures, and hospital stays. This service is included in our coordination fee.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept international credit cards (Visa, Mastercard, Amex), wire transfers, and cash. Payment plans are available for treatments over $10,000.',
              },
              {
                q: 'Can you help with visa applications?',
                a: 'Yes, we provide invitation letters for medical visas and can guide you through the 144-hour visa-free transit process if applicable.',
              },
            ].map((faq, index) => (
              <div key={index} className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700">
                <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-slate-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export function ContactContent() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    }>
      <ContactForm />
    </Suspense>
  )
}
