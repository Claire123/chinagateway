import { NextResponse } from 'next/server'
import { mockCities } from '@/lib/api'

export async function GET() {
  // In production, this would fetch from database
  return NextResponse.json(mockCities)
}
