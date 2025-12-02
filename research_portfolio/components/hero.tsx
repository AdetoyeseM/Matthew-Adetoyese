"use client"

import { ChevronDown } from "lucide-react"

export default function Hero() {
  const scrollToNext = () => {
    const profileSection = document.getElementById("profile")
    profileSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/placeholder.svg?height=1080&width=1920&query=serene ocean landscape sunset)",
          filter: "brightness(0.6)",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 text-center space-y-6">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-light text-white text-balance">Your Name</h1>
        <p className="text-xl sm:text-2xl text-white/90 font-light">Professor & Researcher</p>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce text-white hover:text-primary transition-colors"
        aria-label="Scroll to profile"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  )
}
