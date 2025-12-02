"use client"

import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-lg font-semibold text-foreground">Your Name</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 text-sm">
          <Link href="#home" className="text-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="#about" className="text-foreground hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#research" className="text-foreground hover:text-primary transition-colors">
            Research
          </Link>
          <Link href="#contact" className="text-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-6 h-6 flex flex-col justify-center items-center gap-1.5"
        >
          <span className={`w-full h-0.5 bg-foreground transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-full h-0.5 bg-foreground transition-all ${isOpen ? "opacity-0" : ""}`} />
          <span className={`w-full h-0.5 bg-foreground transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="flex flex-col gap-4 p-4">
              <Link href="#home" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#research" className="text-foreground hover:text-primary transition-colors">
                Research
              </Link>
              <Link href="#contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
