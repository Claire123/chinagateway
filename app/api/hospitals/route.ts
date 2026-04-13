import { NextResponse } from 'next/server'
import { mockHospitals } from '@/lib/api'

export async function GET() {
  return NextResponse.json(mockHospitals)
}
