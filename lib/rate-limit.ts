// Simple in-memory rate limiting
// For production, use Redis or similar

interface RateLimitEntry {
  count: number
  resetTime: number
}

const rateLimits = new Map<string, RateLimitEntry>()

interface RateLimitOptions {
  windowMs: number  // Time window in milliseconds
  maxRequests: number  // Max requests per window
}

const defaultOptions: RateLimitOptions = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 10, // 10 requests per 15 minutes
}

export function checkRateLimit(
  identifier: string,
  options: RateLimitOptions = defaultOptions
): { allowed: boolean; remaining: number; resetTime: number } {
  const now = Date.now()
  const entry = rateLimits.get(identifier)
  
  // Clean up old entries
  if (entry && now > entry.resetTime) {
    rateLimits.delete(identifier)
  }
  
  const currentEntry = rateLimits.get(identifier)
  
  if (!currentEntry) {
    // First request
    rateLimits.set(identifier, {
      count: 1,
      resetTime: now + options.windowMs,
    })
    return {
      allowed: true,
      remaining: options.maxRequests - 1,
      resetTime: now + options.windowMs,
    }
  }
  
  if (currentEntry.count >= options.maxRequests) {
    // Rate limit exceeded
    return {
      allowed: false,
      remaining: 0,
      resetTime: currentEntry.resetTime,
    }
  }
  
  // Increment count
  currentEntry.count++
  return {
    allowed: true,
    remaining: options.maxRequests - currentEntry.count,
    resetTime: currentEntry.resetTime,
  }
}

// Get client IP from request
export function getClientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for')
  const realIp = request.headers.get('x-real-ip')
  
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  
  if (realIp) {
    return realIp
  }
  
  return 'unknown'
}
