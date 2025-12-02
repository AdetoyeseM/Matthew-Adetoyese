"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { motion } from "framer-motion"
import { ExternalLink, Smartphone, TrendingUp } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      name: "TrustFund Mobile",
      description:
        "Secure pension fund management platform enabling users to track and manage retirement accounts seamlessly",
      platforms: ["iOS", "Android"],
      stack: ["Flutter", "Firebase", "REST APIs"],
      impact: "Manages $10M+ in assets",
    },
    {
      name: "Duffle",
      description: "Crypto payment platform making digital currencies as practical as cash for everyday transactions",
      platforms: ["iOS", "Android"],
      stack: ["Dart", "Blockchain APIs", "Payment Gateways"],
      impact: "70% increase in user engagement",
    },
    {
      name: "InvestNaija",
      description:
        "All-in-one investment platform for planning, saving, and investing in mutual funds, bonds, and REITs",
      platforms: ["iOS", "Android"],
      stack: ["Flutter", "GraphQL", "Real-time Data"],
      impact: "Democratized investment access",
    },
    {
      name: "PrimaryOffer",
      description: "NGX-backed platform for purchasing public offers and rights issues on Nigerian exchanges",
      platforms: ["iOS", "Android"],
      stack: ["Kotlin", "Swift", "Payment Integration"],
      impact: "75% surge in user engagement",
    },
    {
      name: "LiteTrade",
      description: "Lightweight trading app optimized for low-bandwidth environments with real-time market data",
      platforms: ["Android"],
      stack: ["Java", "WebSockets", "Local Caching"],
      impact: "Fast trading on limited bandwidth",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-40 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-20 animate-float" />
      </div>

      {/* Header */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <motion.div className="max-w-5xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Featured
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl text-foreground/70">
            FinTech applications and investment platforms deployed to production
          </motion.p>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group glass p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:border-accent/50 hover:scale-102"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors flex-shrink-0">
                        <Smartphone className="w-5 h-5 text-accent" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                        {project.name}
                      </h3>
                    </div>

                    <p className="text-foreground/70 mb-4">{project.description}</p>

                    <div className="space-y-3 mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.platforms.map((platform) => (
                          <span
                            key={platform}
                            className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full"
                          >
                            {platform}
                          </span>
                        ))}
                      </div>

                      <div>
                        <p className="text-sm text-foreground/60 mb-2">Tech Stack:</p>
                        <div className="flex flex-wrap gap-2">
                          {project.stack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 text-xs bg-white/5 text-foreground/70 rounded border border-white/10"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-accent font-medium">
                      <TrendingUp className="w-4 h-4" />
                      <span>{project.impact}</span>
                    </div>
                  </div>

                  <div className="md:flex-shrink-0">
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-accent/50 text-accent hover:bg-accent/10 transition-all duration-300 group-hover:border-accent"
                    >
                      <span className="font-medium">View</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
