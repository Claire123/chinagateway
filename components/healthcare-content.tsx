'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Stethoscope, 
  HeartPulse, 
  Smile,
  Users,
  MapPin,
  Phone,
  ChevronRight,
  Star,
  CheckCircle,
  Building2,
  Calendar
} from 'lucide-react'

// Medical Checkup Centers Data (Verified)
const checkupCenters = [
  {
    id: 'meinian',
    name: 'Meinian Onehealth',
    nameCn: '美年大健康',
    image: '/images/healthcare/meinian.jpg',
    description: 'Leading health checkup chain in China with comprehensive screening services and advanced imaging equipment.',
    features: ['Comprehensive Packages', 'Advanced Imaging', 'Fast Reports', 'Expert Consultation'],
    address: 'Multiple locations in Shanghai',
    phone: '400-888-8888',
    rating: 4.6,
  },
  {
    id: 'ikang',
    name: 'iKang Healthcare',
    nameCn: '爱康国宾',
    image: '/images/healthcare/ikang.jpg',
    description: 'Premium health management services with personalized checkup plans and VIP experience.',
    features: ['Personalized Plans', 'VIP Services', 'Health Records', 'Green Channel'],
    address: 'Multiple locations in Shanghai',
    phone: '400-800-7580',
    rating: 4.5,
  },
  {
    id: 'rich',
    name: 'Rich Healthcare',
    nameCn: '瑞慈医疗',
    image: '/images/healthcare/rich.jpg',
    description: 'High-end medical checkup center with international-standard equipment and facilities.',
    features: ['Early Cancer Screening', 'Cardiovascular Check', 'Genetic Testing', 'Private Doctor'],
    address: 'Multiple locations in Shanghai',
    phone: '400-168-8188',
    rating: 4.7,
  },
  {
    id: 'huashan-checkup',
    name: 'Huashan Hospital Health Center',
    nameCn: '华山医院体检中心',
    image: '/images/healthcare/huashan-checkup.jpg',
    description: 'Top-tier public hospital health center with authoritative medical team and rich resources.',
    features: ['Expert Team', 'Complex Cases', 'Inpatient Green Channel', 'Insurance Accepted'],
    address: '12 Wulumuqi Middle Rd, Jing\'an District',
    phone: '021-52889999',
    rating: 4.8,
  },
  {
    id: 'ruijin-checkup',
    name: 'Ruijin Hospital Health Center',
    nameCn: '瑞金医院体检中心',
    image: '/images/healthcare/ruijin-checkup.jpg',
    description: 'Century-old prestigious hospital with comprehensive health screening and chronic disease management.',
    features: ['Expert Physicals', 'Chronic Care', 'Health Consulting', 'Multi-disciplinary'],
    address: '197 Ruijin 2nd Rd, Huangpu District',
    phone: '021-64370045',
    rating: 4.9,
  },
  {
    id: 'zhongshan-checkup',
    name: 'Zhongshan Hospital Health Center',
    nameCn: '中山医院体检中心',
    image: '/images/healthcare/zhongshan-checkup.jpg',
    description: 'Fudan University Zhongshan Hospital health center, renowned for cardiovascular and digestive health screening.',
    features: ['Cardio Screening', 'Digestive Health', 'Executive Physicals', 'Multi-specialty'],
    address: '180 Fenglin Rd, Xuhui District',
    phone: '021-64041990',
    rating: 4.8,
  },
]

// Dental Clinics Data (Verified)
const dentalClinics = [
  {
    id: 'hongning',
    name: 'Hongning Dental',
    nameCn: '鸿宁口腔',
    image: '/images/healthcare/hongning.jpg',
    description: 'Professional dental clinic with comfortable environment and attentive service. Located in Gaoshang Community.',
    features: ['Dental Implants', 'Orthodontics', 'Cosmetic Dentistry', 'Pediatric Dentistry'],
    address: 'Room 202, 1610 Caoyang Rd (2nd Floor, ICBC Building)',
    phone: '021-52802953',
    rating: 4.8,
  },
  {
    id: 'bybo',
    name: 'Bybo Dental',
    nameCn: '拜博口腔',
    image: '/images/healthcare/bybo.jpg',
    description: 'Nationwide dental chain with standardized procedures and digital dental solutions.',
    features: ['Digital Implants', 'Invisible Braces', 'All-ceramic Restoration', 'Periodontal Care'],
    address: 'Multiple locations in Shanghai',
    phone: '400-968-3508',
    rating: 4.5,
  },
  {
    id: 'arrail',
    name: 'Arrail Dental',
    nameCn: '瑞尔齿科',
    image: '/images/healthcare/arrail.jpg',
    description: 'Premium dental services with international medical standards and luxury experience.',
    features: ['Minimally Invasive Implants', 'Aesthetic Orthodontics', 'Full Mouth Reconstruction', 'Pediatric Dentistry'],
    address: 'Multiple locations in Shanghai',
    phone: '400-888-9168',
    rating: 4.7,
  },
  {
    id: 'maloclinic',
    name: 'Maloclinic',
    nameCn: '马泷齿科',
    image: '/images/healthcare/maloclinic.jpg',
    description: 'International dental brand from Portugal with world-class dental specialists.',
    features: ['Immediate Implants', 'Aesthetic Orthodontics', 'Porcelain Veneers', 'Oral Surgery'],
    address: 'Multiple locations in Shanghai',
    phone: '4008-820-506',
    rating: 4.6,
  },
  {
    id: 'ninth-hospital',
    name: 'Shanghai Ninth People\'s Hospital Dental',
    nameCn: '上海第九人民医院口腔科',
    image: '/images/healthcare/ninth-hospital.jpg',
    description: 'Top-tier dental specialty hospital with leading technology and expertise in China.',
    features: ['Complex Implants', 'Orthognathic Surgery', 'Oral Oncology', 'Maxillofacial Surgery'],
    address: '639 Zhizaoju Rd, Huangpu District',
    phone: '021-23271699',
    rating: 4.9,
  },
  {
    id: 'yashida',
    name: 'Yashida Dental',
    nameCn: '雅仕达口腔',
    image: '/images/healthcare/yashida.jpg',
    description: 'Professional dental clinic offering comprehensive oral care with modern facilities and experienced dentists.',
    features: ['General Dentistry', 'Teeth Whitening', 'Root Canal', 'Dental Crowns'],
    address: 'Multiple locations in Shanghai',
    phone: '400-839-2968',
    rating: 4.5,
  },
]

// Hospital Escort Data (Tier-3 Hospitals)
const escortHospitals = [
  {
    id: 'huashan',
    name: 'Huashan Hospital',
    nameCn: '华山医院',
    image: '/images/healthcare/huashan.jpg',
    description: 'Fudan University Huashan Hospital, nationally ranked in neurology and dermatology.',
    features: ['Neurology', 'Dermatology', 'Infectious Disease', 'Neurosurgery'],
    address: '12 Wulumuqi Middle Rd, Jing\'an District',
    phone: '021-52889999',
    rating: 4.9,
    tier: 'Grade 3A',
  },
  {
    id: 'ruijin',
    name: 'Ruijin Hospital',
    nameCn: '瑞金医院',
    image: '/images/healthcare/ruijin.jpg',
    description: 'SJTU School of Medicine Ruijin Hospital, renowned for endocrinology and hematology.',
    features: ['Endocrinology', 'Hematology', 'Cardiology', 'Gastroenterology'],
    address: '197 Ruijin 2nd Rd, Huangpu District',
    phone: '021-64370045',
    rating: 4.9,
    tier: 'Grade 3A',
  },
  {
    id: 'zhongshan',
    name: 'Zhongshan Hospital',
    nameCn: '中山医院',
    image: '/images/healthcare/zhongshan.jpg',
    description: 'Fudan University Zhongshan Hospital, authoritative in cardiovascular and liver cancer treatment.',
    features: ['Cardiology', 'Liver Cancer Center', 'General Surgery', 'Cardiac Surgery'],
    address: '180 Fenglin Rd, Xuhui District',
    phone: '021-64041990',
    rating: 4.9,
    tier: 'Grade 3A',
  },
  {
    id: 'renji',
    name: 'Renji Hospital',
    nameCn: '仁济医院',
    image: '/images/healthcare/renji.jpg',
    description: 'SJTU School of Medicine Renji Hospital, leading in gastroenterology and rheumatology.',
    features: ['Gastroenterology', 'Rheumatology', 'Urology', 'Obstetrics & Gynecology'],
    address: '145 Shandong Middle Rd, Huangpu District (East Campus)',
    phone: '021-58752345',
    rating: 4.8,
    tier: 'Grade 3A',
  },
  {
    id: 'changhai',
    name: 'Changhai Hospital',
    nameCn: '长海医院',
    image: '/images/healthcare/changhai.jpg',
    description: 'Naval Medical University Changhai Hospital, renowned for burn treatment and thoracic surgery.',
    features: ['Burn Center', 'Thoracic Surgery', 'Vascular Surgery', 'Colorectal Surgery'],
    address: '168 Changhai Rd, Yangpu District',
    phone: '021-31166666',
    rating: 4.8,
    tier: 'Grade 3A',
  },
  {
    id: 'xinhua',
    name: 'Xinhua Hospital',
    nameCn: '新华医院',
    image: '/images/healthcare/xinhua.jpg',
    description: 'SJTU School of Medicine Xinhua Hospital, nationally recognized for pediatrics and general surgery.',
    features: ['Pediatrics', 'General Surgery', 'Otorhinolaryngology', 'Orthopedics'],
    address: '1665 Kongjiang Rd, Yangpu District',
    phone: '021-25078999',
    rating: 4.8,
    tier: 'Grade 3A',
  },
]

const services = [
  {
    id: 'checkup',
    icon: HeartPulse,
    title: 'Medical Checkup',
    titleCn: '体检中心',
    description: 'Comprehensive health screening and early disease detection',
    color: 'bg-rose-500',
    items: checkupCenters,
  },
  {
    id: 'dental',
    icon: Smile,
    title: 'Dental Care',
    titleCn: '牙科诊所',
    description: 'Professional dental treatments and oral health care',
    color: 'bg-sky-500',
    items: dentalClinics,
  },
  {
    id: 'escort',
    icon: Users,
    title: 'Hospital Escort',
    titleCn: '医院陪诊',
    description: 'Professional escort services for worry-free hospital visits',
    color: 'bg-emerald-500',
    items: escortHospitals,
  },
]

export function HealthcareContent() {
  const [activeService, setActiveService] = useState('checkup')
  const [showCustomForm, setShowCustomForm] = useState(false)

  const currentService = services.find(s => s.id === activeService)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-24 pb-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container-apple">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4 bg-slate-100 text-slate-700 hover:bg-slate-100">
              <Stethoscope className="w-3 h-3 mr-1" />
              Healthcare Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 tracking-tight">
              Professional Medical Services
            </h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Medical checkups, dental care, and hospital escort services - comprehensive healthcare solutions for you
            </p>
          </div>
        </div>
      </section>

      {/* Service Tabs */}
      <section className="pb-12">
        <div className="container-apple">
          <div className="grid md:grid-cols-3 gap-4">
            {services.map((service) => {
              const Icon = service.icon
              const isActive = activeService === service.id
              return (
                <button
                  key={service.id}
                  onClick={() => {
                    setActiveService(service.id)
                    setShowCustomForm(false)
                  }}
                  className={`p-6 rounded-2xl text-left transition-all ${
                    isActive 
                      ? 'bg-slate-800 text-white shadow-lg' 
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    isActive ? 'bg-white/20' : service.color
                  }`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{service.title}</h3>
                  <p className={`text-sm ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                    {service.titleCn}
                  </p>
                  <p className={`mt-2 text-sm ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                    {service.description}
                  </p>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Provider List */}
      <section className="pb-20">
        <div className="container-apple">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-800">
                {currentService?.title} Providers
              </h2>
              <p className="text-slate-500 mt-1">
                {currentService?.items.length} verified institutions
              </p>
            </div>
            <Button 
              variant="outline" 
              onClick={() => setShowCustomForm(true)}
              className="border-slate-300"
            >
              Other Institution
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          {!showCustomForm ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentService?.items.map((item) => (
                <Card key={item.id} className="overflow-hidden border-slate-200 hover:shadow-lg transition-shadow flex flex-col">
                  <div className="h-48 relative overflow-hidden">
                    <Image 
                      src={item.image} 
                      alt={item.name} 
                      fill 
                      className="object-cover" 
                    />
                    {(item as any).tier && (
                      <Badge className="absolute top-4 left-4 bg-red-500 text-white">
                        {(item as any).tier}
                      </Badge>
                    )}
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-bold text-lg text-slate-800">{item.name}</h3>
                        <p className="text-sm text-slate-400">{item.nameCn}</p>
                      </div>
                      <div className="flex items-center gap-1 text-amber-500">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm font-medium">{item.rating}</span>
                      </div>
                    </div>
                    
                    <p className="text-slate-600 text-sm mb-4 flex-1">{item.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.features.slice(0, 3).map((feature, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex items-start gap-2 text-slate-500">
                        <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>{item.address}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-500">
                        <Phone className="w-4 h-4 flex-shrink-0" />
                        <span>{item.phone}</span>
                      </div>
                    </div>

                    <Link 
                      href={`/healthcare/book?type=${activeService}&provider=${item.id}`}
                      className="mt-auto"
                    >
                      <Button className="w-full bg-slate-700 hover:bg-slate-800">
                        <Calendar className="w-4 h-4 mr-2" />
                        Book Now
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <CustomBookingForm 
              serviceType={currentService?.title || ''}
              onBack={() => setShowCustomForm(false)}
            />
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900">
        <div className="container-apple text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Other Medical Services?
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            If your preferred institution is not listed, contact us for customized service solutions
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
              Contact Us
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

// Custom Booking Form Component
function CustomBookingForm({ serviceType, onBack }: { serviceType: string; onBack: () => void }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    institution: '',
    doctor: '',
    date: '',
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    try {
      const response = await fetch('/api/healthcare-booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          serviceType,
          isCustom: true,
        }),
      })
      const data = await response.json()
      if (response.ok) {
        setSubmitted(true)
      } else {
        setError(data.error || 'Failed to submit booking. Please try again.')
      }
    } catch (err) {
      console.error('Booking error:', err)
      setError('Network error. Please check your connection and try again.')
    } finally {
      setIsLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-slate-800 mb-4">Booking Request Submitted</h3>
        <p className="text-slate-500 mb-6">
          Our customer service team will contact you within 24 hours to confirm your appointment details
        </p>
        <Button onClick={onBack} variant="outline">
          Back to List
        </Button>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Button onClick={onBack} variant="ghost" className="mb-6">
        ← Back to Providers
      </Button>
      
      <Card className="border-slate-200">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-2">
            Book {serviceType}
          </h3>
          <p className="text-slate-500 mb-6">
            Please fill in your preferred institution and doctor information
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                  placeholder="Enter phone number"
                />
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

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Institution Name *
              </label>
              <input
                type="text"
                required
                value={formData.institution}
                onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                placeholder="Enter institution name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Preferred Doctor
              </label>
              <input
                type="text"
                value={formData.doctor}
                onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                placeholder="Enter doctor name (optional)"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Preferred Date *
              </label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Notes / Requirements
              </label>
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-500 focus:border-transparent resize-none"
                placeholder="Describe your specific needs (symptoms, checkup items, etc.)"
              />
            </div>

            {error && (
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm">
                {error}
              </div>
            )}

            <Button type="submit" className="w-full bg-slate-700 hover:bg-slate-800 h-12" disabled={isLoading}>
              {isLoading ? 'Submitting...' : 'Submit Booking Request'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
