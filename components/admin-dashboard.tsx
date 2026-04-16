'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Mail, 
  Users, 
  Calendar, 
  RefreshCw, 
  CheckCircle, 
  XCircle,
  Clock,
  Search,
  Trash2,
  Eye,
  Stethoscope,
  Phone,
  HeartPulse,
  Smile,
  Building2,
  Download,
  FileSpreadsheet
} from 'lucide-react'
import Link from 'next/link'

interface ContactMessage {
  id: string
  name: string
  email: string
  subject: string
  message: string
  status: 'pending' | 'sent' | 'email_failed'
  createdAt: string
}

interface UserRegistration {
  id: string
  name: string
  email: string
  createdAt: string
}

interface Booking {
  id: string
  name: string
  email: string
  phone: string
  hospitalId: string
  hospitalName: string
  specialty: string
  preferredDoctor: string
  symptoms: string
  date: string
  time: string
  status: 'pending' | 'notified' | 'email_failed'
  createdAt: string
}

interface HealthcareBooking {
  id: string
  name: string
  phone: string
  email: string
  serviceType: string
  institution: string
  doctor: string
  date: string
  notes: string
  isCustom: boolean
  status: 'pending' | 'notified' | 'email_failed'
  createdAt: string
}

// In-memory storage (will be replaced with database in production)
let contactMessages: ContactMessage[] = []
let userRegistrations: UserRegistration[] = []

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('contacts')
  const [contacts, setContacts] = useState<ContactMessage[]>([])
  const [users, setUsers] = useState<UserRegistration[]>([])
  const [bookings, setBookings] = useState<Booking[]>([])
  const [healthcareBookings, setHealthcareBookings] = useState<HealthcareBooking[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  // Load data on mount
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    setIsLoading(true)
    try {
      // Fetch contact messages
      const contactRes = await fetch('/api/contact')
      if (contactRes.ok) {
        const contactData = await contactRes.json()
        setContacts(contactData.messages || [])
      }

      // Fetch user registrations
      const userRes = await fetch('/api/users')
      if (userRes.ok) {
        const userData = await userRes.json()
        setUsers(userData.users || [])
      }

      // Fetch bookings
      const bookingRes = await fetch('/api/bookings')
      if (bookingRes.ok) {
        const bookingData = await bookingRes.json()
        setBookings(bookingData.bookings || [])
      }

      // Fetch healthcare bookings
      const healthcareRes = await fetch('/api/healthcare-booking')
      if (healthcareRes.ok) {
        const healthcareData = await healthcareRes.json()
        setHealthcareBookings(healthcareData.bookings || [])
      }
    } catch (error) {
      console.error('Failed to fetch data:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.subject.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const filteredBookings = bookings.filter(booking => 
    booking.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.hospitalName.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const filteredHealthcareBookings = healthcareBookings.filter(booking => 
    booking.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.serviceType.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.institution.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'sent':
        return <Badge className="bg-green-100 text-green-800"><CheckCircle className="w-3 h-3 mr-1" />Sent</Badge>
      case 'email_failed':
        return <Badge className="bg-red-100 text-red-800"><XCircle className="w-3 h-3 mr-1" />Failed</Badge>
      default:
        return <Badge className="bg-yellow-100 text-yellow-800"><Clock className="w-3 h-3 mr-1" />Pending</Badge>
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  // Export data to CSV
  const exportToCSV = (data: any[], filename: string) => {
    if (data.length === 0) {
      alert('No data to export')
      return
    }
    
    const headers = Object.keys(data[0]).join(',')
    const rows = data.map(item => 
      Object.values(item).map(val => {
        // Handle values that might contain commas or quotes
        const str = String(val)
        if (str.includes(',') || str.includes('"') || str.includes('\n')) {
          return `"${str.replace(/"/g, '""')}"`
        }
        return str
      }).join(',')
    )
    
    const csv = [headers, ...rows].join('\n')
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = `${filename}_${new Date().toISOString().split('T')[0]}.csv`
    link.click()
  }

  // Export all data
  const exportAllData = () => {
    const allData = {
      contacts: filteredContacts,
      healthcareBookings: filteredHealthcareBookings,
      bookings: filteredBookings,
      users: filteredUsers,
    }
    
    const blob = new Blob([JSON.stringify(allData, null, 2)], { type: 'application/json' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = `chinagateway_all_data_${new Date().toISOString().split('T')[0]}.json`
    link.click()
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-slate-900 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Admin Dashboard</h1>
              <p className="text-slate-400 text-sm">Manage contact messages and user registrations</p>
            </div>
            <Link href="/">
              <Button variant="outline" className="border-slate-600 text-white hover:bg-slate-800">
                Back to Website
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Total Contacts</p>
                  <p className="text-3xl font-bold text-slate-800">{contacts.length}</p>
                </div>
                <Mail className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">New Today</p>
                  <p className="text-3xl font-bold text-slate-800">
                    {contacts.filter(c => {
                      const today = new Date().toDateString()
                      const msgDate = new Date(c.createdAt).toDateString()
                      return today === msgDate
                    }).length}
                  </p>
                </div>
                <Calendar className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Total Users</p>
                  <p className="text-3xl font-bold text-slate-800">{users.length}</p>
                </div>
                <Users className="w-8 h-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">医疗预约</p>
                  <p className="text-3xl font-bold text-slate-800">{healthcareBookings.length}</p>
                </div>
                <HeartPulse className="w-8 h-8 text-rose-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search, Refresh, and Export */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search by name, email, or subject..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
            />
          </div>
          <Button onClick={fetchData} disabled={isLoading} variant="outline">
            <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
          <Button onClick={exportAllData} variant="outline" className="bg-slate-100">
            <Download className="w-4 h-4 mr-2" />
            Export All Data
          </Button>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6 flex-wrap">
            <TabsTrigger value="contacts" className="px-6">
              <Mail className="w-4 h-4 mr-2" />
              联系消息 ({filteredContacts.length})
            </TabsTrigger>
            <TabsTrigger value="healthcare" className="px-6">
              <HeartPulse className="w-4 h-4 mr-2" />
              医疗预约 ({filteredHealthcareBookings.length})
            </TabsTrigger>
            <TabsTrigger value="bookings" className="px-6">
              <Stethoscope className="w-4 h-4 mr-2" />
              医院预约 ({filteredBookings.length})
            </TabsTrigger>
            <TabsTrigger value="users" className="px-6">
              <Users className="w-4 h-4 mr-2" />
              注册用户 ({filteredUsers.length})
            </TabsTrigger>
          </TabsList>

          {/* Contact Messages */}
          <TabsContent value="contacts">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Contact Messages</CardTitle>
                <Button 
                  size="sm" 
                  variant="outline" 
                  onClick={() => exportToCSV(filteredContacts, 'contact_messages')}
                  disabled={filteredContacts.length === 0}
                >
                  <FileSpreadsheet className="w-4 h-4 mr-2" />
                  Export CSV
                </Button>
              </CardHeader>
              <CardContent>
                {filteredContacts.length === 0 ? (
                  <div className="text-center py-12 text-slate-500">
                    <Mail className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>No contact messages yet</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredContacts.map((contact) => (
                      <div key={contact.id} className="border border-slate-200 rounded-lg p-4 hover:bg-slate-50 transition-colors">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="font-bold text-slate-800">{contact.name}</h4>
                            <p className="text-sm text-slate-500">{contact.email}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            {getStatusBadge(contact.status)}
                            <span className="text-xs text-slate-400">{formatDate(contact.createdAt)}</span>
                          </div>
                        </div>
                        <div className="mb-3">
                          <p className="font-medium text-slate-700">{contact.subject}</p>
                          <p className="text-sm text-slate-600 mt-1 line-clamp-2">{contact.message}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline" className="text-red-600 hover:bg-red-50">
                            <Trash2 className="w-4 h-4 mr-1" />
                            Delete
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Healthcare Bookings */}
          <TabsContent value="healthcare">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>医疗服务预约</CardTitle>
                <Button 
                  size="sm" 
                  variant="outline" 
                  onClick={() => exportToCSV(filteredHealthcareBookings, 'healthcare_bookings')}
                  disabled={filteredHealthcareBookings.length === 0}
                >
                  <FileSpreadsheet className="w-4 h-4 mr-2" />
                  Export CSV
                </Button>
              </CardHeader>
              <CardContent>
                {filteredHealthcareBookings.length === 0 ? (
                  <div className="text-center py-12 text-slate-500">
                    <HeartPulse className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>暂无医疗预约</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredHealthcareBookings.map((booking) => (
                      <div key={booking.id} className="border border-slate-200 rounded-lg p-4 hover:bg-slate-50 transition-colors">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-bold text-slate-800">{booking.name}</h4>
                              {booking.isCustom && (
                                <Badge className="bg-amber-100 text-amber-800">自定义</Badge>
                              )}
                            </div>
                            <p className="text-sm text-slate-500">{booking.phone}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            {getStatusBadge(booking.status)}
                            <span className="text-xs text-slate-400">{formatDate(booking.createdAt)}</span>
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4 mb-3 bg-slate-50 rounded-lg p-3">
                          <div>
                            <p className="text-xs text-slate-400">服务类型</p>
                            <p className="font-medium text-slate-800">{booking.serviceType}</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-400">预约机构</p>
                            <p className="font-medium text-slate-800">{booking.institution}</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-400">期望日期</p>
                            <p className="font-medium text-slate-800">{booking.date}</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-400">指定医生</p>
                            <p className="font-medium text-slate-800">{booking.doctor || '未指定'}</p>
                          </div>
                        </div>
                        {booking.notes && (
                          <div className="mb-3">
                            <p className="text-xs text-slate-400">备注需求:</p>
                            <p className="text-sm text-slate-600">{booking.notes}</p>
                          </div>
                        )}
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4 mr-1" />
                            查看
                          </Button>
                          <Button size="sm" variant="outline" className="text-red-600 hover:bg-red-50">
                            <Trash2 className="w-4 h-4 mr-1" />
                            删除
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Hospital Bookings */}
          <TabsContent value="bookings">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>医院预约 (旧版)</CardTitle>
                <Button 
                  size="sm" 
                  variant="outline" 
                  onClick={() => exportToCSV(filteredBookings, 'hospital_bookings')}
                  disabled={filteredBookings.length === 0}
                >
                  <FileSpreadsheet className="w-4 h-4 mr-2" />
                  Export CSV
                </Button>
              </CardHeader>
              <CardContent>
                {filteredBookings.length === 0 ? (
                  <div className="text-center py-12 text-slate-500">
                    <Stethoscope className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>No appointments yet</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredBookings.map((booking) => (
                      <div key={booking.id} className="border border-slate-200 rounded-lg p-4 hover:bg-slate-50 transition-colors">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="font-bold text-slate-800">{booking.name}</h4>
                            <p className="text-sm text-slate-500">{booking.email} | {booking.phone}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            {getStatusBadge(booking.status)}
                            <span className="text-xs text-slate-400">{formatDate(booking.createdAt)}</span>
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4 mb-3 bg-slate-50 rounded-lg p-3">
                          <div>
                            <p className="text-xs text-slate-400">Hospital</p>
                            <p className="font-medium text-slate-800">{booking.hospitalName}</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-400">Specialty</p>
                            <p className="font-medium text-slate-800">{booking.specialty}</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-400">Date & Time</p>
                            <p className="font-medium text-slate-800">{booking.date} at {booking.time}</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-400">Doctor</p>
                            <p className="font-medium text-slate-800">{booking.preferredDoctor}</p>
                          </div>
                        </div>
                        {booking.symptoms && booking.symptoms !== 'Not specified' && (
                          <div className="mb-3">
                            <p className="text-xs text-slate-400">Symptoms:</p>
                            <p className="text-sm text-slate-600">{booking.symptoms}</p>
                          </div>
                        )}
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline" className="text-red-600 hover:bg-red-50">
                            <Trash2 className="w-4 h-4 mr-1" />
                            Delete
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* User Registrations */}
          <TabsContent value="users">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>User Registrations</CardTitle>
                <Button 
                  size="sm" 
                  variant="outline" 
                  onClick={() => exportToCSV(filteredUsers, 'user_registrations')}
                  disabled={filteredUsers.length === 0}
                >
                  <FileSpreadsheet className="w-4 h-4 mr-2" />
                  Export CSV
                </Button>
              </CardHeader>
              <CardContent>
                {filteredUsers.length === 0 ? (
                  <div className="text-center py-12 text-slate-500">
                    <Users className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>No user registrations yet</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-slate-200">
                          <th className="text-left py-3 px-4 font-semibold text-slate-700">Name</th>
                          <th className="text-left py-3 px-4 font-semibold text-slate-700">Email</th>
                          <th className="text-left py-3 px-4 font-semibold text-slate-700">Registered</th>
                          <th className="text-left py-3 px-4 font-semibold text-slate-700">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredUsers.map((user) => (
                          <tr key={user.id} className="border-b border-slate-100 hover:bg-slate-50">
                            <td className="py-3 px-4 font-medium text-slate-800">{user.name}</td>
                            <td className="py-3 px-4 text-slate-600">{user.email}</td>
                            <td className="py-3 px-4 text-slate-500 text-sm">{formatDate(user.createdAt)}</td>
                            <td className="py-3 px-4">
                              <Button size="sm" variant="outline" className="text-red-600 hover:bg-red-50">
                                <Trash2 className="w-4 h-4 mr-1" />
                                Delete
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
