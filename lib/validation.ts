import { z } from 'zod'

// Contact form validation
export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name is too long'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters').max(200, 'Subject is too long'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(5000, 'Message is too long'),
})

// Healthcare booking validation
export const healthcareBookingSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  phone: z.string().regex(/^\+?[\d\s-()]{8,20}$/, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email').optional().or(z.literal('')),
  serviceType: z.string().min(1, 'Please select a service type'),
  institution: z.string().max(200).optional(),
  doctor: z.string().max(100).optional(),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Please enter a valid date (YYYY-MM-DD)'),
  notes: z.string().max(2000, 'Notes are too long').optional(),
  isCustom: z.boolean().optional(),
})

// User registration validation
export const userRegistrationSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email address'),
  provider: z.string().optional(),
  providerAccountId: z.string().optional(),
  avatar: z.string().url().optional().or(z.literal('')),
})

// Hospital booking validation
export const hospitalBookingSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().regex(/^\+?[\d\s-()]{8,20}$/, 'Please enter a valid phone number'),
  hospitalId: z.string().min(1, 'Please select a hospital'),
  hospitalName: z.string().min(1, 'Hospital name is required'),
  specialty: z.string().min(1, 'Please select a specialty'),
  preferredDoctor: z.string().max(100).optional(),
  symptoms: z.string().max(2000).optional(),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Please enter a valid date'),
  time: z.string().regex(/^\d{2}:\d{2}$/, 'Please enter a valid time'),
})

// Sanitize HTML to prevent XSS
export function sanitizeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
}

// Sanitize object values
export function sanitizeObject<T extends Record<string, any>>(obj: T): T {
  const sanitized = { ...obj }
  for (const key in sanitized) {
    if (typeof sanitized[key] === 'string') {
      sanitized[key] = sanitizeHtml(sanitized[key])
    }
  }
  return sanitized
}
