'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { 
  Calendar, 
  Clock, 
  User, 
  Mail, 
  Phone, 
  MessageSquare,
  ChevronLeft,
  CheckCircle,
  Stethoscope
} from 'lucide-react'
import Link from 'next/link'

const hospitals = [
  {
    id: 'shanghai-east',
    name: 'Shanghai East Hospital',
    nameCn: '上海市东方医院',
    city: 'Shanghai',
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b9af923?w=800&q=80',
  },
  {
    id: 'peking-union',
    name: 'Peking Union Medical College Hospital',
    nameCn: '北京协和医院',
    city: 'Beijing',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
  },
  {
    id: 'shanghai-9th',
    name: '9th People\'s Hospital Shanghai',
    nameCn: '上海第九人民医院',
    city: 'Shanghai',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80',
  },
]

const specialties = [
  'Cardiology', 'Oncology', 'Orthopedics', 'Internal Medicine', 
  'Surgery', 'Dermatology', 'Dental', 'Plastic Surgery',
  'Ophthalmology', 'Neurology', 'Gastroenterology'
]

const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'
]

export default function BookAppointmentPage() {
  const params = useParams()
  const hospitalId = params.id as string
  
  const hospital = hospitals.find(h => h.id === hospitalId) || hospitals[0]
  
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    specialty: '',
    symptoms: '',
    preferredDoctor: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = () => {
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50/50 to-white pt-24 pb-16">
        <div className="container-apple max-w-2xl">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-slate-800 mb-4">
                Appointment Request Submitted!
              </h1>
              <p className="text-slate-500 mb-8">
                Thank you for booking with {hospital.name}. Our team will contact you within 24 hours to confirm your appointment.
              </p>
              <div className="bg-slate-50 rounded-xl p-6 mb-8 text-left">
                <h3 className="font-semibold text-slate-800 mb-4">Booking Details</h3>
                <div className="space-y-2 text-sm">
                  <p><span className="text-slate-400">Hospital:</span> {hospital.name}</p>
                  <p><span className="text-slate-400">Date:</span> {formData.date}</p>
                  <p><span className="text-slate-400">Time:</span> {formData.time}</p>
                  <p><span className="text-slate-400">Specialty:</span> {formData.specialty}</p>
                </div>
              </div>
              <div className="flex gap-4 justify-center">
                <Link href={`/healthcare/${hospitalId}`}>
                  <Button variant="outline" className="rounded-full">
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Back to Hospital
                  </Button>
                </Link>
                <Link href="/healthcare">
                  <Button className="bg-slate-700 hover:bg-slate-800 rounded-full">
                    Browse More Hospitals
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50/50 to-white">
      {/* Header */}
      <section className="pt-24 pb-8">
        <div className="container-apple">
          <Link href={`/healthcare/${hospitalId}`} className="inline-flex items-center text-slate-500 hover:text-slate-700 mb-6">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Hospital
          </Link>
          
          <div className="flex items-center gap-6 mb-8">
            <div className="w-20 h-20 rounded-2xl overflow-hidden bg-slate-200">
              <img 
                src={hospital.image} 
                alt={hospital.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-800">Book Appointment</h1>
              <p className="text-slate-500">{hospital.name}</p>
              <p className="text-sm text-slate-400">{hospital.nameCn}</p>
            </div>
          </div>

          {/* Progress */}
          <div className="flex items-center gap-4 mb-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  step >= i ? 'bg-slate-700 text-white' : 'bg-slate-200 text-slate-400'
                }`}>
                  {i}
                </div>
                {i < 3 && (
                  <div className={`w-16 h-1 mx-2 ${
                    step > i ? 'bg-slate-700' : 'bg-slate-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="pb-16">
        <div className="container-apple max-w-3xl">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              {/* Step 1: Personal Info */}
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-slate-800 flex items-center gap-2">
                    <User className="w-5 h-5 text-slate-400" />
                    Personal Information
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Full Name *</label>
                      <Input 
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Phone Number *</label>
                      <Input 
                        placeholder="+1 234 567 8900"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="h-12"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Email Address *</label>
                    <Input 
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="h-12"
                    />
                  </div>

                  <div className="pt-4 flex justify-end">
                    <Button 
                      onClick={() => setStep(2)}
                      disabled={!formData.name || !formData.email || !formData.phone}
                      className="bg-slate-700 hover:bg-slate-800 rounded-full px-8"
                    >
                      Next Step
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 2: Appointment Details */}
              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-slate-800 flex items-center gap-2">
                    <Stethoscope className="w-5 h-5 text-slate-400" />
                    Appointment Details
                  </h2>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Select Specialty *</label>
                    <div className="flex flex-wrap gap-2">
                      {specialties.map((specialty) => (
                        <button
                          key={specialty}
                          onClick={() => handleInputChange('specialty', specialty)}
                          className={`px-4 py-2 rounded-full border transition-all ${
                            formData.specialty === specialty
                              ? 'bg-slate-700 text-white border-slate-700'
                              : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'
                          }`}
                        >
                          {specialty}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Preferred Doctor (Optional)</label>
                    <Input 
                      placeholder="Any available doctor"
                      value={formData.preferredDoctor}
                      onChange={(e) => handleInputChange('preferredDoctor', e.target.value)}
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Symptoms / Reason for Visit</label>
                    <textarea 
                      placeholder="Please describe your symptoms or the reason for your visit..."
                      value={formData.symptoms}
                      onChange={(e) => handleInputChange('symptoms', e.target.value)}
                      className="w-full h-32 p-4 rounded-xl border border-slate-200 focus:border-slate-400 focus:outline-none resize-none"
                    />
                  </div>

                  <div className="pt-4 flex justify-between">
                    <Button 
                      variant="outline"
                      onClick={() => setStep(1)}
                      className="rounded-full"
                    >
                      Back
                    </Button>
                    <Button 
                      onClick={() => setStep(3)}
                      disabled={!formData.specialty}
                      className="bg-slate-700 hover:bg-slate-800 rounded-full px-8"
                    >
                      Next Step
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 3: Date & Time */}
              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-slate-800 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-slate-400" />
                    Select Date & Time
                  </h2>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Preferred Date *</label>
                    <Input 
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleInputChange('date', e.target.value)}
                      className="h-12"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Preferred Time *</label>
                    <div className="grid grid-cols-4 gap-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => handleInputChange('time', time)}
                          className={`py-3 rounded-xl border transition-all ${
                            formData.time === time
                              ? 'bg-slate-700 text-white border-slate-700'
                              : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <p className="text-sm text-amber-700">
                      <strong>Note:</strong> Appointment times are in China Standard Time (CST). 
                      Our team will confirm the final appointment time within 24 hours.
                    </p>
                  </div>

                  <div className="pt-4 flex justify-between">
                    <Button 
                      variant="outline"
                      onClick={() => setStep(2)}
                      className="rounded-full"
                    >
                      Back
                    </Button>
                    <Button 
                      onClick={handleSubmit}
                      disabled={!formData.date || !formData.time}
                      className="bg-slate-700 hover:bg-slate-800 rounded-full px-8"
                    >
                      Submit Request
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
