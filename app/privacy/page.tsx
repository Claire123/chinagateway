import { Metadata } from 'next'
import { PrivacyContent } from '@/components/privacy-content'

export const metadata: Metadata = {
  title: 'Privacy Policy | ChinaGateway',
  description: 'ChinaGateway Privacy Policy - How we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
  return <PrivacyContent />
}
