'use client'

import Link from 'next/link'
import { ChevronLeft, Shield, Eye, Lock, Share2, Mail, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const sections = [
  {
    id: 'collection',
    icon: Eye,
    title: 'Information We Collect',
    content: `
      We collect information that you provide directly to us, including:
      
      • Personal identification information (name, email address, phone number, passport details for visa services)
      • Health and medical information (for healthcare booking services)
      • Travel preferences and itinerary details
      • Payment information (processed securely through third-party payment processors)
      • Communication records when you contact us
      
      We also automatically collect certain information when you use our website:
      
      • Device information (IP address, browser type, operating system)
      • Usage data (pages visited, time spent, click patterns)
      • Location data (with your consent)
      • Cookies and similar tracking technologies
    `
  },
  {
    id: 'usage',
    icon: Share2,
    title: 'How We Use Your Information',
    content: `
      We use your personal information for the following purposes:
      
      • Providing and managing our travel and healthcare services
      • Processing bookings, appointments, and payments
      • Communicating with you about your inquiries and bookings
      • Personalizing your experience and recommending relevant services
      • Improving our website and services
      • Sending promotional materials (with your consent)
      • Complying with legal obligations
      • Protecting against fraud and unauthorized access
    `
  },
  {
    id: 'sharing',
    icon: Lock,
    title: 'Information Sharing and Disclosure',
    content: `
      We may share your information with:
      
      • Healthcare providers and hospitals (for medical tourism services)
      • Travel partners and service providers (hotels, airlines, tour operators)
      • Payment processors and financial institutions
      • Legal and regulatory authorities when required by law
      • Professional advisors (lawyers, accountants, insurers)
      
      We do not sell your personal information to third parties. Any sharing is done only to provide our services or comply with legal requirements.
    `
  },
  {
    id: 'security',
    icon: Shield,
    title: 'Data Security',
    content: `
      We implement appropriate technical and organizational measures to protect your personal information:
      
      • Encryption of sensitive data in transit and at rest
      • Secure server infrastructure with regular security audits
      • Access controls and authentication procedures
      • Regular staff training on data protection
      • Incident response procedures
      
      While we strive to protect your information, no method of transmission over the internet is 100% secure. We encourage you to take precautions to protect your personal information.
    `
  },
  {
    id: 'retention',
    icon: Trash2,
    title: 'Data Retention',
    content: `
      We retain your personal information for as long as necessary to:
      
      • Provide our services and fulfill the purposes outlined in this policy
      • Comply with legal obligations (tax, accounting, healthcare regulations)
      • Resolve disputes and enforce our agreements
      
      Typically, we retain:
      • Account information: As long as your account is active
      • Booking records: 7 years for legal and tax purposes
      • Communication records: 3 years
      • Marketing preferences: Until you opt out
      
      You may request deletion of your data at any time (see "Your Rights" section).
    `
  },
  {
    id: 'rights',
    icon: Mail,
    title: 'Your Rights',
    content: `
      Depending on your location, you may have the following rights regarding your personal information:
      
      • Right to access: Request a copy of your personal data
      • Right to rectification: Correct inaccurate or incomplete information
      • Right to erasure: Request deletion of your personal data
      • Right to restrict processing: Limit how we use your data
      • Right to data portability: Receive your data in a structured format
      • Right to object: Opt out of certain uses (including marketing)
      • Right to withdraw consent: Withdraw previously given consent
      
      To exercise these rights, please contact us at clairezhang2018@163.com. We will respond within 30 days.
    `
  }
]

export function PrivacyContent() {
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
              Privacy Policy
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              At ChinaGateway, we take your privacy seriously. This policy explains how we collect, 
              use, and protect your personal information when you use our travel and healthcare services.
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
                ChinaGateway (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. 
                This Privacy Policy describes how we handle your personal information when you visit our website 
                (chinagateway.vercel.app) and use our services. By using our services, you agree to the collection 
                and use of information in accordance with this policy.
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

            {/* Additional Information */}
            <div className="mt-16 pt-12 border-t border-slate-200">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Additional Information</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">Cookies</h3>
                  <p className="text-slate-600 leading-relaxed">
                    We use cookies and similar technologies to enhance your browsing experience, 
                    analyze site traffic, and personalize content. You can control cookies through 
                    your browser settings. Disabling cookies may affect the functionality of our website.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">Third-Party Links</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Our website may contain links to third-party websites. We are not responsible for 
                    the privacy practices or content of these external sites. We encourage you to review 
                    the privacy policies of any third-party sites you visit.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">Children&apos;s Privacy</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Our services are not intended for individuals under the age of 18. We do not 
                    knowingly collect personal information from children. If you believe we have 
                    inadvertently collected information from a child, please contact us immediately.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">International Data Transfers</h3>
                  <p className="text-slate-600 leading-relaxed">
                    As we provide services in China, your information may be transferred to and processed 
                    in China. We ensure appropriate safeguards are in place to protect your information 
                    during such transfers, in accordance with applicable data protection laws.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">Changes to This Policy</h3>
                  <p className="text-slate-600 leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any 
                    significant changes by posting the new policy on this page and updating the 
                    &quot;Last updated&quot; date. We encourage you to review this policy periodically.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="mt-16 bg-slate-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Contact Us</h2>
              <p className="text-slate-600 mb-6">
                If you have any questions about this Privacy Policy or our data practices, 
                please contact us:
              </p>
              <div className="space-y-2 text-slate-600">
                <p><strong>Email:</strong> clairezhang2018@163.com</p>
                <p><strong>WhatsApp/WeChat:</strong> +86 159 0063 0236</p>
                <p><strong>Address:</strong> Shanghai, China</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
