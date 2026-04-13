'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageCircle } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'clairezhang2018@163.com',
    href: 'mailto:clairezhang2018@163.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+86 21 1234 5678',
    href: 'tel:+862112345678',
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {contactInfo.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="group p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:bg-slate-800 transition-all duration-300"
                >
                  <Icon className="w-8 h-8 text-slate-400 mb-4 group-hover:scale-110 transition-transform" />
                  <div className="text-sm text-slate-400 mb-1">{item.label}</div>
                  <div className="text-white font-medium text-sm">{item.value}</div>
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

                    <Button 
                      type="submit" 
                      size="lg"
                      className="w-full h-14 bg-white text-slate-900 hover:bg-slate-100 rounded-full font-medium"
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
