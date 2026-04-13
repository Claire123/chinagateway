// API configuration and types

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'

// Types
export interface City {
  id: string
  name: string
  nameCn: string
  tagline: string
  description: string
  highlights: string[]
  bestTime: string
  duration: string
  climate: string
  images: {
    hero: string
    thumbnail: string
    gallery: string[]
  }
}

export interface Hospital {
  id: string
  name: string
  nameCn: string
  city: string
  rating: number
  reviews: number
  description: string
  longDescription: string
  address: string
  phone: string
  email: string
  website: string
  certifications: string[]
  specialties: string[]
  languages: string[]
  facilities: string[]
  doctors: Doctor[]
  priceExamples: PriceExample[]
  images: {
    main: string
    gallery: string[]
  }
}

export interface Doctor {
  id: string
  name: string
  title: string
  specialty: string
  experience: number
  image?: string
}

export interface PriceExample {
  service: string
  price: number
  priceUsd: number
}

export interface Guide {
  id: string
  title: string
  content: string
  author: {
    name: string
    avatar: string
  }
  city: string
  tags: string[]
  createdAt: string
  views: number
  likes: number
  comments: number
  images: string[]
}

export interface Question {
  id: string
  title: string
  content: string
  author: {
    name: string
    avatar: string
  }
  tags: string[]
  createdAt: string
  replies: Reply[]
  views: number
  solved: boolean
}

export interface Reply {
  id: string
  content: string
  author: {
    name: string
    avatar: string
  }
  createdAt: string
  isBestAnswer: boolean
}

export interface TravelBuddy {
  id: string
  title: string
  author: {
    name: string
    avatar: string
  }
  destination: string
  dates: {
    start: string
    end: string
  }
  people: {
    current: number
    total: number
  }
  budget: string
  tags: string[]
  description: string
  status: 'open' | 'closed'
  createdAt: string
}

// API Functions
export async function fetchCities(): Promise<City[]> {
  const res = await fetch(`${API_BASE_URL}/cities`)
  if (!res.ok) throw new Error('Failed to fetch cities')
  return res.json()
}

export async function fetchCity(id: string): Promise<City> {
  const res = await fetch(`${API_BASE_URL}/cities/${id}`)
  if (!res.ok) throw new Error('Failed to fetch city')
  return res.json()
}

export async function fetchHospitals(): Promise<Hospital[]> {
  const res = await fetch(`${API_BASE_URL}/hospitals`)
  if (!res.ok) throw new Error('Failed to fetch hospitals')
  return res.json()
}

export async function fetchHospital(id: string): Promise<Hospital> {
  const res = await fetch(`${API_BASE_URL}/hospitals/${id}`)
  if (!res.ok) throw new Error('Failed to fetch hospital')
  return res.json()
}

export async function fetchGuides(): Promise<Guide[]> {
  const res = await fetch(`${API_BASE_URL}/guides`)
  if (!res.ok) throw new Error('Failed to fetch guides')
  return res.json()
}

export async function fetchQuestions(): Promise<Question[]> {
  const res = await fetch(`${API_BASE_URL}/questions`)
  if (!res.ok) throw new Error('Failed to fetch questions')
  return res.json()
}

export async function fetchTravelBuddies(): Promise<TravelBuddy[]> {
  const res = await fetch(`${API_BASE_URL}/buddies`)
  if (!res.ok) throw new Error('Failed to fetch travel buddies')
  return res.json()
}

// Mock data for development
export const mockCities: City[] = [
  {
    id: 'shanghai',
    name: 'Shanghai',
    nameCn: '上海',
    tagline: 'The Paris of the East',
    description: 'China\'s largest city blends futuristic skyline with historic charm.',
    highlights: ['The Bund', 'Yu Garden', 'French Concession', 'Nanjing Road'],
    bestTime: 'March-May, September-November',
    duration: '3-5 days',
    climate: 'Humid subtropical',
    images: {
      hero: '/images/cities/shanghai-hero.jpg',
      thumbnail: '/images/cities/shanghai-thumb.jpg',
      gallery: ['/images/cities/shanghai-1.jpg', '/images/cities/shanghai-2.jpg'],
    },
  },
  // Add more cities...
]

export const mockHospitals: Hospital[] = [
  {
    id: 'shanghai-east',
    name: 'Shanghai East Hospital',
    nameCn: '上海市东方医院',
    city: 'Shanghai',
    rating: 4.8,
    reviews: 127,
    description: 'One of Shanghai\'s top hospitals with a dedicated International Medical Center.',
    longDescription: 'Shanghai East Hospital is a comprehensive tertiary hospital...',
    address: '150 Jimo Road, Pudong New Area, Shanghai',
    phone: '+86 21 3880 9999',
    email: 'imc@shdfty.com',
    website: 'https://www.shdfty.com',
    certifications: ['JCI', 'Grade 3A'],
    specialties: ['Cardiology', 'Oncology', 'Orthopedics'],
    languages: ['English', 'Japanese', 'Korean'],
    facilities: ['24/7 Emergency', 'International Patient Center', 'VIP Wards'],
    doctors: [
      { id: '1', name: 'Dr. Zhang Wei', title: 'Chief Cardiologist', specialty: 'Cardiology', experience: 25 },
    ],
    priceExamples: [
      { service: 'Health Checkup', price: 2800, priceUsd: 400 },
    ],
    images: {
      main: '/images/hospitals/shanghai-east.jpg',
      gallery: [],
    },
  },
  // Add more hospitals...
]
