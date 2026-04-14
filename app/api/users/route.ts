import { NextRequest, NextResponse } from 'next/server'

// In-memory storage for demo
const users: any[] = []

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, provider, providerAccountId, avatar } = body

    // Validate
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    // Check if user already exists (by email or provider+providerAccountId)
    const existingUser = users.find(u => {
      if (u.email === email) return true
      if (provider && providerAccountId) {
        return u.provider === provider && u.providerAccountId === providerAccountId
      }
      return false
    })
    
    if (existingUser) {
      // Update OAuth info if logging in via OAuth
      if (provider && providerAccountId) {
        existingUser.provider = provider
        existingUser.providerAccountId = providerAccountId
        if (avatar) existingUser.avatar = avatar
        console.log('OAuth user updated:', existingUser)
        return NextResponse.json(
          { success: true, user: existingUser },
          { status: 200 }
        )
      }
      
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 409 }
      )
    }

    // Create user
    const user: any = {
      id: Date.now().toString(),
      name,
      email,
      createdAt: new Date().toISOString(),
    }
    
    // Add OAuth fields if present
    if (provider) user.provider = provider
    if (providerAccountId) user.providerAccountId = providerAccountId
    if (avatar) user.avatar = avatar

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
