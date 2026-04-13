import { Metadata } from 'next'
import { HospitalDirectory } from '@/components/hospital-directory'

export const metadata: Metadata = {
  title: 'Medical Tourism in China | ChinaGateway',
  description: 'Access world-class healthcare in China at a fraction of the cost. JCI-certified hospitals, English-speaking doctors, and full-service coordination.',
}

export default function HealthcarePage() {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-b from-slate-700 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            World-Class Healthcare in China
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Save 60-80% on medical costs without compromising quality. JCI-certified hospitals with English-speaking coordinators.
          </p>
        </div>
      </div>
      
      <HospitalDirectory />
    </div>
  )
}
