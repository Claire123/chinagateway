import { VisaCalculator } from '@/components/visa-calculator'
import { VisaGuide } from '@/components/visa-guide'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '144-Hour Visa-Free Calculator | ChinaGateway',
  description: 'Check your eligibility for China\'s 144-hour visa-free transit policy. Calculate your stay, required documents, and eligible cities.',
}

export default function VisaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - 改为浅灰色背景 */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-slate-50/50 to-white">
        <div className="container-apple relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-slate-800 mb-6 tracking-tight">
              144-Hour
              <br />
              <span className="text-slate-500">
                Visa-Free Transit
              </span>
            </h1>
            <p className="text-xl text-slate-500 font-light">
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
      <section className="pb-32 bg-slate-50/50">
        <div className="container-apple pt-16">
          <VisaGuide />
        </div>
      </section>
    </div>
  )
}
