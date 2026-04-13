import { NextResponse } from 'next/server'
import { mockHospitals } from '@/lib/api'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const hospital = mockHospitals.find(h => h.id === params.id)
  
  if (!hospital) {
    return NextResponse.json({ error: 'Hospital not found' }, { status: 404 })
  }
  
  return NextResponse.json(hospital)
}
