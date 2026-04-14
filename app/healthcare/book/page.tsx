'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  ArrowLeft, 
  Building2, 
  Calendar, 
  CheckCircle, 
  Clock, 
  MapPin, 
  Phone, 
  Star, 
  User 
} from 'lucide-react'

// All providers data
const allProviders: Record<string, any> = {
  // Checkup
  meinian: {
    name: 'Meinian Onehealth',
    nameCn: '美年大健康',
    type: 'Medical Checkup',
    address: 'Multiple locations in Shanghai',
    phone: '400-888-8888',
    rating: 4.6,
  },
  ikang: {
    name: 'iKang Healthcare',
    nameCn: '爱康国宾',
    type: 'Medical Checkup',
    address: 'Multiple locations in Shanghai',
    phone: '400-800-7580',
    rating: 4.5,
  },
  rich: {
    name: 'Rich Healthcare',
    nameCn: '瑞慈医疗',
    type: 'Medical Checkup',
    address: 'Multiple locations in Shanghai',
    phone: '400-820-0000',
    rating: 4.7,
  },
  'huashan-checkup': {
    name: 'Huashan Hospital Health Center',
    nameCn: '华山医院体检中心',
    type: 'Medical Checkup',
    address: '12 Wulumuqi Middle Rd, Jing\'an District',
    phone: '021-52889999',
    rating: 4.8,
  },
  'ruijin-checkup': {
    name: 'Ruijin Hospital Health Center',
    nameCn: '瑞金医院体检中心',
    type: 'Medical Checkup',
    address: '197 Ruijin 2nd Rd, Huangpu District',
    phone: '021-64370045',
    rating: 4.9,
  },
  'zhongshan-checkup': {
    name: 'Zhongshan Hospital Health Center',
    nameCn: '中山医院体检中心',
    type: 'Medical Checkup',
    address: '180 Fenglin Rd, Xuhui District',
    phone: '021-64041990',
    rating: 4.8,
  },
  // Dental
  hongning: {
    name: 'Hongning Dental',
    nameCn: '鸿宁口腔',
    type: 'Dental Care',
    address: 'Room 202, 1610 Caoyang Rd (2nd Floor, ICBC Building)',
    phone: '021-62126688',
    rating: 4.8,
  },
  bybo: {
    name: 'Bybo Dental',
    nameCn: '拜博口腔',
    type: 'Dental Care',
    address: 'Multiple locations in Shanghai',
    phone: '400-000-0000',
    rating: 4.5,
  },
  arrail: {
    name: 'Arrail Dental',
    nameCn: '瑞尔齿科',
    type: 'Dental Care',
    address: 'Multiple locations in Shanghai',
    phone: '400-888-9168',
    rating: 4.7,
  },
  maloclinic: {
    name: 'Maloclinic',
    nameCn: '马泷齿科',
    type: 'Dental Care',
    address: 'Multiple locations in Shanghai',
    phone: '400-000-0000',
    rating: 4.6,
  },
  'ninth-hospital': {
    name: 'Shanghai Ninth People\'s Hospital Dental',
    nameCn: '上海第九人民医院口腔科',
    type: 'Dental Care',
    address: '639 Zhizaoju Rd, Huangpu District',
    phone: '021-23271699',
    rating: 4.9,
  },
  yashida: {
    name: 'Yashida Dental',
    nameCn: '雅仕达口腔',
    type: 'Dental Care',
    address: 'Multiple locations in Shanghai',
    phone: '400-000-0000',
    rating: 4.5,
  },
  // Escort
  huashan: {
    name: 'Huashan Hospital',
    nameCn: '华山医院',
    type: 'Hospital Escort',
    address: '12 Wulumuqi Middle Rd, Jing\'an District',
    phone: '021-52889999',
    rating: 4.9,
    tier: 'Grade 3A',
  },
  ruijin: {
    name: 'Ruijin Hospital',
    nameCn: '瑞金医院',
    type: 'Hospital Escort',
    address: '197 Ruijin 2nd Rd, Huangpu District',
    phone: '021-64370045',
    rating: 4.9,
    tier: 'Grade 3A',
  },
  zhongshan: {
    name: 'Zhongshan Hospital',
    nameCn: '中山医院',
    type: 'Hospital Escort',
    address: '180 Fenglin Rd, Xuhui District',
    phone: '021-64041990',
    rating: 4.9,
    tier: 'Grade 3A',
  },
  renji: {
    name: 'Renji Hospital',
    nameCn: '仁济医院',
    type: 'Hospital Escort',
    address: '145 Shandong Middle Rd, Huangpu District',
    phone: '021-58752345',
    rating: 4.8,
    tier: 'Grade 3A',
  },
  changhai: {
    name: 'Changhai Hospital',
    nameCn: '长海医院',
    type: 'Hospital Escort',
    address: '168 Changhai Rd, Yangpu District',
    phone: '021-31166666',
    rating: 4.8,
    tier: 'Grade 3A',
  },
  xinhua: {
    name: 'Xinhua Hospital',
    nameCn: '新华医院',
    type: 'Hospital Escort',
    address: '1665 Kongjiang Rd, Yangpu District',
    phone: '021-25078999',
    rating: 4.8,
    tier: 'Grade 3A',
  },
}

function BookingForm() {
  const searchParams = useSearchParams()
  const type = searchParams.get('type') || 'checkup'
  const providerId = searchParams.get('provider') || ''
  
  const provider = allProviders[providerId]
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    doctor: '',
    symptoms: '',
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      const response = await fetch('/api/healthcare-booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          serviceType: provider?.type || 'Healthcare Service',
          institution: provider?.name || 'Not specified',
          isCustom: false,
        }),
      })
      
      if (response.ok) {
        setSubmitted(true)
      }
    } catch (error) {
      console.error('Booking error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 pt-24 pb-16">
        <div className="container-apple max-w-2xl">
          <Card className="text-center py-16">
            <CardContent>
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-slate-800 mb-4">
                Booking Confirmed!
              </h1>
              <p className="text-slate-500 mb-8 max-w-md mx-auto">
                Your appointment request has been submitted successfully. Our team will contact you within 24 hours to confirm the details.
              </p>
              <div className="flex gap-4 justify-center">
                <Link href="/healthcare">
                  <Button variant="outline">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Healthcare
                  </Button>
                </Link>
                <Link href="/">
                  <Button>Go Home</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  if (!provider) {
    return (
      <div className="min-h-screen bg-slate-50 pt-24 pb-16">
        <div className="container-apple text-center">
          <h1 className="text-2xl font-bold text-slate-800 mb-4">Provider Not Found</h1>
          <Link href="/healthcare">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Healthcare
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <div className="container-apple max-w-4xl">
        {/* Back Link */}
        <Link href="/healthcare" className="inline-flex items-center text-slate-500 hover:text-slate-800 mb-6">
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Healthcare
        </Link>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Provider Info Card */}
          <div className="md:col-span-1">
            <Card className="sticky top-24">
              <div className="h-40 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                <div className="text-center">
                  <Building2 className="w-16 h-16 text-slate-300 mx-auto mb-2" />
                  <span className="text-xs text-slate-400 uppercase tracking-wider">{provider.nameCn}</span>
                </div>
              </div>
              <CardContent className="p-6">
                <Badge className="mb-3">{provider.type}</Badge>
                <h2 className="text-xl font-bold text-slate-800 mb-1">{provider.name}</h2>
                <p className="text-sm text-slate-400 mb-4">{provider.nameCn}</p>
                
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-medium">{provider.rating}</span>
                  <span className="text-slate-400 text-sm ml-1">rating</span>
                </div>

                {provider.tier && (
                  <Badge className="bg-red-500 text-white mb-4">{provider.tier}</Badge>
                )}

                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2 text-slate-600">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>{provider.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    <span>{provider.phone}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Form */}
          <div className="md:col-span-2">
            <Card>
              <CardContent className="p-8">
                <h1 className="text-2xl font-bold text-slate-800 mb-2">
                  Book Appointment
                </h1>
                <p className="text-slate-500 mb-8">
                  Fill in your details to schedule an appointment at {provider.name}
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                          placeholder="Enter phone number"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                      placeholder="Enter email (optional)"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Preferred Date *
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                        <input
                          type="date"
                          required
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Preferred Time *
                      </label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                        <select
                          required
                          value={formData.time}
                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-500 focus:border-transparent appearance-none bg-white"
                        >
                          <option value="">Select time</option>
                          <option value="morning">Morning (8:00 - 12:00)</option>
                          <option value="afternoon">Afternoon (13:00 - 17:00)</option>
                          <option value="evening">Evening (17:00 - 20:00)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Preferred Doctor (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.doctor}
                      onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                      placeholder="Enter doctor name if you have a preference"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Symptoms / Reason for Visit
                    </label>
                    <textarea
                      value={formData.symptoms}
                      onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })}
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-500 focus:border-transparent resize-none"
                      placeholder="Briefly describe your symptoms or reason for the visit"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Additional Notes
                    </label>
                    <textarea
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      rows={2}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-500 focus:border-transparent resize-none"
                      placeholder="Any special requirements or additional information"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-slate-700 hover:bg-slate-800 h-12"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Submitting...' : 'Confirm Booking'}
                  </Button>

                  <p className="text-xs text-slate-400 text-center">
                    By submitting, you agree to our terms of service and privacy policy.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function BookPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-slate-50 pt-24 pb-16">
        <div className="container-apple text-center">
          <div className="animate-pulse">Loading...</div>
        </div>
      </div>
    }>
      <BookingForm />
    </Suspense>
  )
}
