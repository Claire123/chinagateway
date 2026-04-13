import { VisaCalculator } from '@/components/visa-calculator'
import { VisaGuide } from '@/components/visa-guide'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '144-Hour Visa-Free Calculator | ChinaGateway',
  description: 'Check your eligibility for China\'s 144-hour visa-free transit policy. Calculate your stay, required documents, and eligible cities.',
}

export default function VisaPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px]" />
        </div>
        
        <div className="container-apple relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white mb-6 tracking-tight">
              144-Hour
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Visa-Free Transit
              </span>
            </h1>
            <p className="text-xl text-white/50 font-light">
              Check your eligibility instantly and explore China without a visa
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="pb-20">
        <VisaCalculator />
      </section>

      {/* Guide Section */}
      <section className="pb-32">
        <VisaGuide />
      </section>
    </div>
  )
}
