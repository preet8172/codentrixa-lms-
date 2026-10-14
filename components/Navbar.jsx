'use client'

import { useEffect, useState } from 'react'
import { company } from '@/lib/data'

const links = [
  { href: '#stations', label: 'Duty Stations' },
  { href: '#file', label: 'Personnel File' },
  { href: '#skills', label: 'Skills' },
  { href: '#command', label: 'Command Center' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ink/85 backdrop-blur-md border-b border-line' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="h-8 w-8 rounded-full border border-brass/60 flex items-center justify-center">
            <span className="h-2 w-2 rounded-full bg-signal" />
          </span>
          <span className="font-display italic text-lg tracking-tight text-paper">{company.name}</span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="eyebrow text-muted hover:text-brassLight transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden sm:inline-flex items-center gap-2 rounded-full border border-brass/50 px-4 py-2 eyebrow text-brassLight hover:bg-brass hover:text-ink transition-colors"
        >
          Request a demo
        </a>
      </nav>
    </header>
  )
}
