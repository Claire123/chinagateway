'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@chinagateway.com',
    href: 'mailto:hello@chinagateway.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+86 21 1234 5678',
    href: 'tel:+862112345678',
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

export function ContactContent() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent" />
        
        <div className="container-apple relative text-center">
          <h1 className="text-headline font-verdana text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-body text-white/50 max-w-xl mx-auto font-inter">
            Have questions about travel or healthcare in China? 
            We&apos;re here to help 24/7.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 border-t border-white/5">
        <div className="container-apple">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <Icon className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                  <div className="text-sm text-white/40 mb-1">{item.label}</div>
                  <div className="text-white font-medium">{item.value}</div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 border-t border-white/5">
        <div className="container-apple">
          <div className="max-w-2xl mx-auto">
            {submitted ? (
              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h2 className="text-title-1 font-verdana text-white mb-4">Message Sent!</h2>
                  <p className="text-white/50 mb-8">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                  <Button 
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 rounded-full"
                  >
                    Send Another Message
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-8 md:p-12">
                  <h2 className="text-title-1 font-verdana text-white mb-2">Send us a Message</h2>
                  <p className="text-white/40 mb-8">Fill out the form below and we&apos;ll respond promptly.</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm text-white/60 mb-2">
                          Your Name
                        </label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="h-12 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-blue-500 rounded-xl"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm text-white/60 mb-2">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="h-12 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-blue-500 rounded-xl"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm text-white/60 mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full h-12 px-4 bg-white/5 border border-white/10 text-white rounded-xl focus:border-blue-500 focus:outline-none"
                        required
                      >
                        <option value="" className="bg-black">Select a topic</option>
                        <option value="medical" className="bg-black">Medical Tourism Inquiry</option>
                        <option value="travel" className="bg-black">Travel Planning</option>
                        <option value="visa" className="bg-black">Visa Questions</option>
                        <option value="partnership" className="bg-black">Partnership</option>
                        <option value="other" className="bg-black">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm text-white/60 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        placeholder="Tell us how we can help you..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder:text-white/30 rounded-xl focus:border-blue-500 focus:outline-none resize-none"
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full h-14 bg-white text-black hover:bg-white/95 rounded-full font-verdana font-bold btn-interactive"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-20 border-t border-white/5">
        <div className="container-apple text-center">
          <h2 className="text-title-1 font-verdana text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-white/40 mb-8">
            Find quick answers to common questions
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              'How does visa-free transit work?',
              'What hospitals do you partner with?',
              'How much can I save on medical costs?',
              'Do you provide translation services?',
            ].map((question) => (
              <div 
                key={question}
                className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
              >
                {question}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
