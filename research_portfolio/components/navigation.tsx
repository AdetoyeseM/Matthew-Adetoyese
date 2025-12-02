"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { ThemeToggle } from "@/components/theme-toggle"

const navItems = [
  { href: "/#home", label: "Home", id: "home" },
  { href: "/#education", label: "Education", id: "education" },
  { href: "/#research", label: "Research", id: "research" },
  { href: "/#publications", label: "Publications", id: "publications" },
  { href: "/#skills", label: "Skills", id: "skills" },
  { href: "/#experience", label: "Experience", id: "experience" },
  { href: "/#projects", label: "Projects", id: "projects" },
  { href: "/#awards", label: "Awards", id: "awards" },
  { href: "/#contact", label: "Contact", id: "contact" },
]

export default function Navigation() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check on mount
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-end items-center gap-4">
          <div className="flex items-center gap-4">
            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8 text-sm">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`transition-all duration-300 font-medium relative ${
                    activeSection === item.id
                      ? "text-foreground underline decoration-2 underline-offset-4"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Theme toggle */}
            <ThemeToggle />

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden p-2 hover:bg-white/10 rounded transition-colors"
              aria-label="Toggle menu"
            >
              <div className="space-y-1">
                <div
                  className={`h-0.5 w-5 bg-foreground transition-transform ${
                    isMobileOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <div className={`h-0.5 w-5 bg-foreground ${isMobileOpen ? "opacity-0" : ""}`} />
                <div
                  className={`h-0.5 w-5 bg-foreground transition-transform ${
                    isMobileOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileOpen && (
          <div className="md:hidden flex flex-col gap-4 mt-4 pb-4 border-t border-white/10 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors relative ${
                  activeSection === item.id
                    ? "text-foreground underline decoration-2 underline-offset-4"
                    : "text-foreground/70 hover:text-foreground"
                }`}
                onClick={() => setIsMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
