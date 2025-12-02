"use client"

import Link from "next/link"
import { Mail, Linkedin, Github, BookOpen } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    { icon: Mail, href: "mailto:adetoyesematthew97@gmail.com", label: "Email" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/adetoyesematthew/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/AdetoyeseM", label: "GitHub" },
    { icon: BookOpen, href: "https://orcid.org/0000-0002-6291-7055", label: "ORCID" },
  ]

  return (
    <footer className="relative border-t border-white/10 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Copyright */}
          <p className="text-sm text-foreground/60">
            © {new Date().getFullYear()} Matthew Adetoyese
          </p>

          {/* Social Links */}
          <div className="flex gap-4 items-center">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-foreground/50 hover:text-accent transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
