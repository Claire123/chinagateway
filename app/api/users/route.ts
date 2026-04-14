import { NextRequest, NextResponse } from 'next/server'

// In-memory storage for demo
const users: any[] = []

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email } = body

    // Validate
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    // Check if user already exists
    const existingUser = users.find(u => u.email === email)
    if (existingUser) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 409 }
      )
    }

    // Create user
    const user = {
      id: Date.now().toString(),
      name,
      email,
      createdAt: new Date().toISOString(),
    }

    users.push(user)
    console.log('User registered:', user)

    return NextResponse.json(
      { success: true, user },
      { status: 201 }
    )
  } catch (error) {
    console.error('User registration error:', error)
    return NextResponse.json(
      { error: 'Failed to register user' },
      { status: 500 }
    )
  }
}

export async function GET() {
  // Return all users (in production, add authentication)
  return NextResponse.json({ users }, { status: 200 })
}
