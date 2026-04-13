'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Mail, User, CheckCircle, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function RegisterPage() {
  const [step, setStep] = useState<'form' | 'success'>('form')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsLoading(false)
    setStep('success')
  }

  if (step === 'success') {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-slate-800/50 border-slate-700">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-400" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-4">
              Welcome to ChinaGateway!
            </h1>
            <p className="text-slate-400 mb-6">
              Thank you for registering, {formData.name}. We&apos;ve sent a confirmation email to {formData.email}.
            </p>
            <div className="space-y-3">
              <Link href="/">
                <Button className="w-full bg-white text-slate-900 hover:bg-slate-100 rounded-full">
                  Explore ChinaGateway
                </Button>
              </Link>
              <Link href="/travel">
                <Button variant="outline" className="w-full border-slate-600 text-slate-300 hover:bg-slate-800 rounded-full">
                  Plan Your Trip
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <div className="pt-8 px-4">
        <Link href="/" className="inline-flex items-center text-slate-400 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
      </div>

      {/* Form */}
      <div className="flex items-center justify-center px-4 py-12">
        <Card className="w-full max-w-md bg-slate-800/50 border-slate-700">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-white mb-2">
                Create Your Account
              </h1>
              <p className="text-slate-400">
                Join ChinaGateway to plan your perfect China trip
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Full Name
                </label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your full name"
                  className="h-12 bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500"
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email Address
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter your email"
                  className="h-12 bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500"
                  required
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                disabled={isLoading || !formData.name || !formData.email}
                className="w-full h-12 bg-white text-slate-900 hover:bg-slate-100 rounded-full font-medium disabled:opacity-50"
              >
                {isLoading ? 'Creating Account...' : 'Create Account'}
              </Button>
            </form>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-700" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-slate-800 text-slate-400">or</span>
              </div>
            </div>

            {/* Social Login Options */}
            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full h-12 border-slate-600 text-white hover:bg-slate-700 rounded-full"
                onClick={() => alert('WeChat login coming soon!')}
              >
                Continue with WeChat
              </Button>
              <Button
                variant="outline"
                className="w-full h-12 border-slate-600 text-white hover:bg-slate-700 rounded-full"
                onClick={() => alert('Google login coming soon!')}
              >
                Continue with Google
              </Button>
            </div>

            {/* Terms */}
            <p className="text-xs text-slate-500 text-center mt-6">
              By creating an account, you agree to our{' '}
              <Link href="#" className="text-slate-400 hover:text-white underline">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="#" className="text-slate-400 hover:text-white underline">
                Privacy Policy
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
