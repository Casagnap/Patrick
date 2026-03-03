"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Github, Linkedin, Mail, Menu, X } from "lucide-react"
import { useState } from "react"

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Education", href: "/education" },
  { label: "Contact", href: "/contact" },
]

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "#", label: "Email" },
]

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white border-b-4 border-cyan-400">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent hover:from-cyan-300 hover:to-blue-300 transition-all">
            E - Portfolio 
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg transition-all font-medium text-sm ${
                    isActive ? "bg-cyan-500 text-slate-900 shadow-lg shadow-cyan-500/30" : "text-slate-200 hover:bg-slate-700/50 hover:text-cyan-300"
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Social Links - Desktop */}
          <div className="hidden md:flex gap-2">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} title={label} className="p-2 rounded-lg bg-slate-700/50 text-cyan-300 hover:bg-cyan-500 hover:text-slate-900 transition-all border border-cyan-400/30 hover:border-cyan-300">
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-lg hover:bg-slate-700/50 transition-all">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-cyan-400/30 space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg transition-all font-medium text-sm ${
                    isActive ? "bg-cyan-500 text-slate-900 shadow-lg shadow-cyan-500/30" : "text-slate-200 hover:bg-slate-700/50 hover:text-cyan-300"
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}

            {/* Mobile Social Links */}
            <div className="pt-4 border-t border-cyan-400/30 mt-4">
              <p className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-3 opacity-80">Connect</p>
              <div className="flex gap-2 justify-start">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    title={label}
                    className="p-3 rounded-lg bg-slate-700/50 text-cyan-300 hover:bg-cyan-500 hover:text-slate-900 transition-all border border-cyan-400/30 hover:border-cyan-300"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
