'use client'

import Link from 'next/link'
import { ChevronLeft, FileText, Users, CreditCard, AlertTriangle, Scale, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'

const sections = [
  {
    id: 'acceptance',
    icon: FileText,
    title: 'Acceptance of Terms',
    content: `
      By accessing or using ChinaGateway's website and services, you agree to be bound by these Terms of Service. 
      If you do not agree to these terms, please do not use our services.
      
      These terms constitute a legally binding agreement between you and ChinaGateway regarding your use of 
      our travel planning, healthcare booking, and related services. By using our services, you represent 
      that you are at least 18 years old and have the legal capacity to enter into this agreement.
    `
  },
  {
    id: 'services',
    icon: Users,
    title: 'Our Services',
    content: `
      ChinaGateway provides the following services:
      
      • Travel planning and itinerary generation for China destinations
      • Medical tourism coordination and healthcare booking services
      • Visa-free transit information and guidance
      • City guides and travel recommendations
      • Community platform for travelers
      
      We act as an intermediary between you and third-party service providers (hospitals, hotels, 
      tour operators, etc.). While we strive to ensure quality, we are not directly responsible for 
      the services provided by these third parties.
      
      All information provided on our website is for general guidance only and should not be considered 
      as professional medical, legal, or travel advice. Always consult with appropriate professionals 
      before making decisions.
    `
  },
  {
    id: 'bookings',
    icon: CreditCard,
    title: 'Bookings and Payments',
    content: `
      When you make a booking through our platform:
      
      • You agree to provide accurate and complete information
      • You authorize us to share your information with relevant service providers
      • Payment terms will be specified at the time of booking
      • Cancellation and refund policies vary by service provider
      
      For healthcare services:
      • We coordinate appointments but do not provide medical services
      • All medical decisions are made by you and your healthcare providers
      • We are not liable for medical outcomes or treatment results
      • You are responsible for verifying the credentials of healthcare providers
      
      Prices displayed on our website are subject to change and may not include all applicable taxes, 
      fees, or additional charges. Final pricing will be confirmed at the time of booking.
    `
  },
  {
    id: 'liability',
    icon: AlertTriangle,
    title: 'Limitation of Liability',
    content: `
      To the maximum extent permitted by law:
      
      • We provide our services "as is" without warranties of any kind
      • We are not liable for any indirect, incidental, or consequential damages
      • Our total liability shall not exceed the amount you paid for the specific service
      • We are not responsible for delays, cancellations, or changes caused by third parties
      
      You acknowledge that:
      • Travel and medical services involve inherent risks
      • We do not guarantee the quality of third-party services
      • You assume all risks associated with using our services
      • Force majeure events may affect service delivery
      
      This limitation of liability applies regardless of the legal theory (contract, tort, negligence, 
      or otherwise) and even if we have been advised of the possibility of such damages.
    `
  },
  {
    id: 'conduct',
    icon: Scale,
    title: 'User Conduct',
    content: `
      When using our services, you agree not to:
      
      • Provide false, misleading, or inaccurate information
      • Use our services for any illegal or unauthorized purpose
      • Interfere with or disrupt our website or services
      • Attempt to gain unauthorized access to our systems
      • Harass, abuse, or harm other users
      • Post or transmit any harmful, threatening, or offensive content
      • Violate any applicable laws or regulations
      • Impersonate any person or entity
      
      We reserve the right to suspend or terminate your access to our services if you violate 
      these terms or engage in any behavior that we determine to be inappropriate or harmful.
    `
  },
  {
    id: 'intellectual',
    icon: FileText,
    title: 'Intellectual Property',
    content: `
      All content on our website, including but not limited to:
      
      • Text, graphics, logos, and images
      • Software and underlying technology
      • Itineraries, guides, and recommendations
      • Trademarks and service marks
      
      is the property of ChinaGateway or our licensors and is protected by intellectual property laws.
      
      You may:
      • Access and view content for personal, non-commercial use
      • Print or download content for personal reference
      
      You may not:
      • Reproduce, distribute, or modify our content without permission
      • Use our trademarks without written consent
      • Create derivative works from our content
      • Use our content for commercial purposes without authorization
    `
  },
  {
    id: 'privacy',
    icon: Users,
    title: 'Privacy and Data Protection',
    content: `
      Your privacy is important to us. Our Privacy Policy, which is incorporated into these Terms, 
      explains how we collect, use, and protect your personal information.
      
      By using our services, you consent to:
      • The collection and use of your information as described in our Privacy Policy
      • The transfer of your data to third-party service providers as necessary
      • The processing of your data in China and other countries
      
      For healthcare services, you specifically consent to:
      • Sharing your medical information with healthcare providers
      • The processing of sensitive health data as required for service delivery
      
      Please review our Privacy Policy carefully to understand our practices.
    `
  },
  {
    id: 'termination',
    icon: AlertTriangle,
    title: 'Termination',
    content: `
      We may terminate or suspend your access to our services immediately, without prior notice 
      or liability, for any reason, including:
      
      • Breach of these Terms of Service
      • Fraudulent or illegal activity
      • Non-payment of fees
      • Behavior that harms other users or our business
      
      Upon termination:
      • Your right to use our services immediately ceases
      • Any pending bookings may be cancelled
      • Provisions of these terms that should survive termination will remain in effect
      
      You may terminate your account at any time by contacting us. Termination does not relieve 
      you of any obligations incurred prior to termination.
    `
  },
  {
    id: 'disputes',
    icon: Scale,
    title: 'Dispute Resolution',
    content: `
      In the event of any dispute arising from these terms or your use of our services:
      
      • We encourage you to contact us first to seek an informal resolution
      • If informal resolution is not possible, disputes will be resolved through binding arbitration
      • Arbitration will be conducted in Shanghai, China, in English or Chinese
      • Each party will bear its own arbitration costs
      
      You agree that:
      • Any arbitration will be conducted on an individual basis, not as a class action
      • The decision of the arbitrator will be final and binding
      • Judicial proceedings may be brought to enforce arbitration awards
      
      Nothing in this section prevents either party from seeking injunctive relief in court 
      to prevent irreparable harm.
    `
  },
  {
    id: 'governing',
    icon: Scale,
    title: 'Governing Law',
    content: `
      These Terms of Service and any disputes arising from them shall be governed by and construed 
      in accordance with the laws of the People's Republic of China, without regard to its conflict 
      of law provisions.
      
      You agree that any legal action or proceeding arising from these terms shall be brought 
      exclusively in the courts of Shanghai, China, and you consent to the jurisdiction of such courts.
      
      If any provision of these terms is found to be unenforceable or invalid, that provision 
      shall be limited or eliminated to the minimum extent necessary, and the remaining provisions 
      shall remain in full force and effect.
    `
  }
]

export function TermsContent() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-slate-50/50 to-white">
        <div className="container-apple">
          <Link href="/">
            <Button variant="ghost" className="mb-6 -ml-4 text-slate-500 hover:text-slate-700">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Terms of Service
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Please read these Terms of Service carefully before using ChinaGateway's website and services. 
              These terms govern your access to and use of our travel and healthcare services.
            </p>
            <p className="text-sm text-slate-400 mt-4">
              Last updated: April 16, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20">
        <div className="container-apple">
          <div className="max-w-3xl">
            {/* Introduction */}
            <div className="prose prose-slate max-w-none mb-12">
              <p className="text-slate-600 leading-relaxed">
                Welcome to ChinaGateway. These Terms of Service (&quot;Terms&quot;) govern your access to and use of 
                our website, mobile applications, and services (collectively, the &quot;Services&quot;). By accessing 
                or using our Services, you agree to be bound by these Terms and our Privacy Policy.
              </p>
              <p className="text-slate-600 leading-relaxed mt-4">
                Please read these Terms carefully. If you do not agree to these Terms, you may not access 
                or use our Services. We reserve the right to modify these Terms at any time, and such 
                modifications shall be effective immediately upon posting.
              </p>
            </div>

            {/* Sections */}
            <div className="space-y-12">
              {sections.map((section) => {
                const Icon = section.icon
                return (
                  <div key={section.id} id={section.id} className="scroll-mt-24">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-slate-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-slate-800">{section.title}</h2>
                    </div>
                    <div className="pl-13">
                      <div className="prose prose-slate max-w-none">
                        {section.content.split('\n\n').map((paragraph, idx) => (
                          <p key={idx} className="text-slate-600 leading-relaxed whitespace-pre-line mb-4">
                            {paragraph.trim()}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Additional Provisions */}
            <div className="mt-16 pt-12 border-t border-slate-200">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Additional Provisions</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">Medical Disclaimer</h3>
                  <p className="text-slate-600 leading-relaxed">
                    ChinaGateway is not a healthcare provider. We do not provide medical advice, diagnosis, 
                    or treatment. All healthcare services are provided by independent third-party medical 
                    professionals. Always consult with qualified healthcare providers regarding your medical 
                    conditions and treatment options.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">Travel Advisory</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Travel involves inherent risks. We recommend purchasing comprehensive travel insurance 
                    and checking travel advisories before your trip. Visa and entry requirements are subject 
                    to change; it is your responsibility to verify current requirements with official sources.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">Third-Party Services</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Our Services may contain links to third-party websites or services that are not owned 
                    or controlled by ChinaGateway. We have no control over, and assume no responsibility for, 
                    the content, privacy policies, or practices of any third-party websites or services.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">Indemnification</h3>
                  <p className="text-slate-600 leading-relaxed">
                    You agree to indemnify and hold harmless ChinaGateway, its officers, directors, employees, 
                    and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) 
                    arising out of or relating to your use of our Services or violation of these Terms.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">Changes to Terms</h3>
                  <p className="text-slate-600 leading-relaxed">
                    We reserve the right to modify or replace these Terms at any time. If a revision is 
                    material, we will provide at least 30 days' notice prior to any new terms taking effect. 
                    What constitutes a material change will be determined at our sole discretion.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">Waiver and Severability</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Our failure to enforce any right or provision of these Terms will not be considered a 
                    waiver of those rights. If any provision of these Terms is held to be invalid or 
                    unenforceable by a court, the remaining provisions will remain in effect.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">Entire Agreement</h3>
                  <p className="text-slate-600 leading-relaxed">
                    These Terms constitute the entire agreement between you and ChinaGateway regarding 
                    our Services, and supersede any prior agreements we might have had between us regarding 
                    the Services.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="mt-16 bg-slate-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="w-6 h-6 text-slate-600" />
                <h2 className="text-2xl font-bold text-slate-800">Contact Us</h2>
              </div>
              <p className="text-slate-600 mb-6">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-slate-600">
                <p><strong>Email:</strong> contactus@chinagateway.it.com</p>
                <p><strong>WhatsApp/WeChat:</strong> +86 159 0063 0236</p>
                <p><strong>Address:</strong> Shanghai, China</p>
              </div>
              <p className="text-sm text-slate-500 mt-6">
                By using our Services, you acknowledge that you have read, understood, and agree to be 
                bound by these Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
