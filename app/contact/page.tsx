import { Metadata } from 'next'
import { ContactContent } from '@/components/contact-content'

export const metadata: Metadata = {
  title: 'Contact Us | ChinaGateway',
  description: 'Get in touch with ChinaGateway. We\'re here to help with your travel and healthcare needs.',
}

export default function ContactPage() {
  return <ContactContent />
}
