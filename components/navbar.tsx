'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Logo, LogoIcon } from './logo'

const navItems = [
  { href: '/travel', label: 'Travel' },
  { href: '/healthcare', label: 'Healthcare' },
  { href: '/visa', label: 'Visa Guide' },
  { href: '/guides', label: 'Guides' },
  { href: '/community', label: 'Community' },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#007AFF] focus:text-white focus:rounded-lg"
      >
        Skip to content
      </a>

      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled 
            ? 'bg-white/80 backdrop-blur-xl border-b border-black/5' 
            : 'bg-white/60'
        }`}
      >
        <nav className="container-apple flex h-14 items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className="px-3 py-2 text-[13px] text-black/60 hover:text-[#1D1D1F] rounded-lg hover:bg-black/5 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-3">
            <Link 
              href="/about" 
              className="px-3 py-2 text-[13px] text-black/60 hover:text-[#1D1D1F] rounded-lg hover:bg-black/5 transition-colors"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="px-3 py-2 text-[13px] text-black/60 hover:text-[#1D1D1F] rounded-lg hover:bg-black/5 transition-colors"
            >
              Contact
            </Link>
            <Link 
              href="/register" 
              className="ml-2 px-4 py-2 text-[13px] font-medium text-white rounded-full transition-all duration-200 active:scale-95"
              style={{ 
                background: 'linear-gradient(135deg, #0052FF, #4D7CFF)',
                boxShadow: '0 2px 8px rgba(0, 82, 255, 0.25)'
              }}
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-black/60 hover:text-[#1D1D1F] rounded-lg hover:bg-black/5 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-black/5 transition-all duration-200 ${
            mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="container-apple py-4 space-y-1">
            {navItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className="block py-3 text-[15px] font-medium text-[#1D1D1F] rounded-lg hover:bg-black/5 px-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="my-2 border-t border-black/5" />
            <Link href="/about" className="block py-3 text-[15px] text-black/60 rounded-lg hover:bg-black/5 px-3" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Link href="/contact" className="block py-3 text-[15px] text-black/60 rounded-lg hover:bg-black/5 px-3" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
            <Link 
              href="/register" 
              className="block py-3 px-4 mt-2 text-[15px] font-medium text-white rounded-full text-center"
              style={{ 
                background: 'linear-gradient(135deg, #0052FF, #4D7CFF)',
                boxShadow: '0 2px 8px rgba(0, 82, 255, 0.25)'
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}
