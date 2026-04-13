import { Metadata } from 'next'
import { AboutContent } from '@/components/about-content'

export const metadata: Metadata = {
  title: 'About Us | ChinaGateway',
  description: 'Learn about ChinaGateway - your trusted partner for travel and healthcare in China.',
}

export default function AboutPage() {
  return <AboutContent />
}
