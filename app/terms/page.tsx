import { Metadata } from 'next'
import { TermsContent } from '@/components/terms-content'

export const metadata: Metadata = {
  title: 'Terms of Service | ChinaGateway',
  description: 'ChinaGateway Terms of Service - Terms and conditions for using our travel and healthcare services.',
}

export default function TermsPage() {
  return <TermsContent />
}
