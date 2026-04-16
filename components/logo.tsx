'use client'

import Link from 'next/link'

interface LogoProps {
  className?: string
  showText?: boolean
}

export function Logo({ className = '', showText = true }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-3 group ${className}`}>
      {/* Apple-style Open Door Logo */}
      <div className="relative w-10 h-10">
        {/* Door frame */}
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Door frame - rounded rectangle */}
          <rect
            x="4"
            y="4"
            width="32"
            height="32"
            rx="6"
            stroke="currentColor"
            strokeWidth="2.5"
            fill="none"
            className="text-slate-800"
          />
          
          {/* Open door - angled rectangle */}
          <path
            d="M8 8L8 32L28 28L28 12L8 8Z"
            fill="url(#doorGradient)"
            className="opacity-90"
          />
          
          {/* Door handle */}
          <circle
            cx="24"
            cy="20"
            r="2"
            fill="currentColor"
            className="text-white"
          />
          
          {/* Light rays - showing "gateway/opening" */}
          <path
            d="M30 12L36 6"
            stroke="url(#rayGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            className="opacity-60"
          />
          <path
            d="M32 20L40 20"
            stroke="url(#rayGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            className="opacity-60"
          />
          <path
            d="M30 28L36 34"
            stroke="url(#rayGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            className="opacity-60"
          />
          
          {/* Gradients */}
          <defs>
            <linearGradient id="doorGradient" x1="8" y1="8" x2="28" y2="32" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0052FF" />
              <stop offset="1" stopColor="#4D7CFF" />
            </linearGradient>
            <linearGradient id="rayGradient" x1="30" y1="12" x2="40" y2="6" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0052FF" stopOpacity="0.8" />
              <stop offset="1" stopColor="#4D7CFF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Subtle glow effect on hover */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#0052FF]/20 to-[#4D7CFF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
      </div>
      
      {/* Brand text */}
      {showText && (
        <div className="flex flex-col">
          <span className="text-lg font-semibold text-slate-800 tracking-tight leading-none">
            ChinaGateway
          </span>
          <span className="text-[10px] text-slate-400 tracking-wider uppercase mt-0.5">
            Your Gateway to China
          </span>
        </div>
      )}
    </Link>
  )
}

// Simple icon-only version for mobile/favicon
export function LogoIcon({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <rect
          x="4"
          y="4"
          width="32"
          height="32"
          rx="6"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
          className="text-slate-800"
        />
        <path
          d="M8 8L8 32L28 28L28 12L8 8Z"
          fill="url(#doorGradientIcon)"
        />
        <circle
          cx="24"
          cy="20"
          r="2"
          fill="white"
        />
        <defs>
          <linearGradient id="doorGradientIcon" x1="8" y1="8" x2="28" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0052FF" />
            <stop offset="1" stopColor="#4D7CFF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
