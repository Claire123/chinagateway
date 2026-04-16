import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Simple admin authentication
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Protect admin routes
  if (pathname.startsWith('/admin')) {
    const authToken = request.cookies.get('admin-auth')?.value
    
    // Check if user is authenticated
    if (authToken !== process.env.ADMIN_AUTH_TOKEN) {
      // Redirect to login page
      return NextResponse.redirect(new URL('/admin-login', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*']
}
