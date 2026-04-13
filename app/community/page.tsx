import { Metadata } from 'next'
import { CommunityContent } from '@/components/community-content'

export const metadata: Metadata = {
  title: 'Community | ChinaGateway',
  description: 'Join our community of travelers and medical tourists. Share experiences, ask questions, and find travel companions.',
}

export default function CommunityPage() {
  return <CommunityContent />
}
