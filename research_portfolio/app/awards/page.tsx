"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { motion } from "framer-motion"
import { Trophy, Award } from "lucide-react"

export default function Awards() {
  const awards = [
    {
      title: "University Senate Award",
      organization: "TASUED - Best Graduating Student, Department of Computer Sciences",
      description: "Recognition as the top graduating student in computer science",
      year: 2019,
      category: "Academic",
    },
    {
      title: "Vice Chancellor's Award",
      organization: "TASUED - Best Graduating Student, College of Sciences",
      description: "Recognition for overall academic excellence across all science programs",
      year: 2019,
      category: "Academic",
    },
    {
      title: "University Alumni Award",
      organization: "TASUED - Best Graduating Student, College of Sciences",
      description: "Alumni association recognition for outstanding academic achievement",
      year: 2019,
      category: "Honor",
    },
    {
      title: "Award for Excellence",
      organization: "Gofamint Student Fellowship (TASUED Chapter)",
      description: "Recognition for excellence in academic and personal development",
      year: 2019,
      category: "Fellowship",
    },
    {
      title: "Academic Excellence Award",
      organization: "General Overseer, Gospel Faith Mission International",
      description: "Recognition for outstanding academic performance and character",
      year: 2021,
      category: "Institutional",
    },
  ]

  const certifications = [
    {
      title: "Aerial Robotics",
      organization: "Coursera - Pennsylvania University",
      year: 2021,
    },
    {
      title: "Machine Learning",
      organization: "Coursera - Stanford University",
      year: 2021,
    },
    {
      title: "Object-Oriented Design",
      organization: "Coursera - University of Alberta, Canada",
      year: 2020,
    },
    {
      title: "Programming Foundations with JavaScript, HTML and CSS",
      organization: "Coursera - Duke University",
      year: 2020,
    },
    {
      title: "The Complete Developer Bootcamp",
      organization: "Udemy",
      year: 2020,
    },
    {
      title: "Flutter Development",
      organization: "Udemy",
      year: 2020,
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
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Awards & Recognition
            </span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl text-foreground/70">
            Academic achievements and professional recognition
          </motion.p>
        </motion.div>
      </section>

      {/* Awards */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
              <Trophy className="w-8 h-8 text-accent" />
              Awards
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {awards.map((award, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="glass p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:border-accent/50"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <Award className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{award.title}</h3>
                      <p className="text-xs text-accent font-medium mt-1">{award.category}</p>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/70 mb-2">{award.organization}</p>
                  <p className="text-xs text-foreground/60">{award.year}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
              <Award className="w-8 h-8 text-primary" />
              Certifications
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: (idx + 5) * 0.05 }}
                  viewport={{ once: true }}
                  className="glass p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:border-primary/50"
                >
                  <h3 className="font-semibold text-foreground mb-2">{cert.title}</h3>
                  <p className="text-sm text-foreground/70 mb-2">{cert.organization}</p>
                  <p className="text-xs text-foreground/60">{cert.year}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
