import { Metadata } from 'next'
import { AdminDashboard } from '@/components/admin-dashboard'

export const metadata: Metadata = {
  title: 'Admin Dashboard | ChinaGateway',
  description: 'Manage contact messages and user registrations.',
}

export default function AdminPage() {
  return <AdminDashboard />
}
