'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, Search } from 'lucide-react'

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
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-slate-800">
        Skip to content
      </a>

      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200/50' 
            : 'bg-white/60'
        }`}
      >
        <nav className="container-wide flex h-12 items-center justify-between text-xs text-slate-500">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-base font-semibold text-slate-700 tracking-tight">
              ChinaGateway
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className="text-slate-500 hover:text-slate-700 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/about" className="text-slate-500 hover:text-slate-700 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-slate-500 hover:text-slate-700 transition-colors">
              Contact
            </Link>
            <Link 
              href="/register" 
              className="px-4 py-2 bg-slate-700 text-white rounded-full text-xs font-medium hover:bg-slate-800 transition-colors"
            >
              Sign Up
            </Link>
            <Search className="w-4 h-4 text-slate-400 cursor-pointer hover:text-slate-600" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-500"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-slate-200 transition-all duration-300 ${
            mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="container-wide py-4 space-y-1">
            {navItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className="block py-3 text-slate-700 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <hr className="my-2 border-slate-100" />
            <Link href="/about" className="block py-3 text-slate-500" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Link href="/contact" className="block py-3 text-slate-500" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
            <Link 
              href="/register" 
              className="block py-3 px-4 bg-slate-700 text-white rounded-lg text-center font-medium mt-2"
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
