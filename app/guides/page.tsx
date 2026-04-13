import { Metadata } from 'next'
import { GuidesContent } from '@/components/guides-content'

export const metadata: Metadata = {
  title: 'City Guides | ChinaGateway',
  description: 'Comprehensive travel guides for China\'s top destinations.',
}

export default function GuidesPage() {
  return <GuidesContent />
}
