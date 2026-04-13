import { NextResponse } from 'next/server'
import { mockCities } from '@/lib/api'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const city = mockCities.find(c => c.id === params.id)
  
  if (!city) {
    return NextResponse.json({ error: 'City not found' }, { status: 404 })
  }
  
  return NextResponse.json(city)
}
