"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { motion } from "framer-motion"
import { BookOpen, FileText, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function Publications() {
  const publications = [
    {
      type: "journal",
      title:
        "Possible ways for enhancing the utilisation of ICTs by educators of tertiary institutions in Enugu State, Nigeria",
      authors: "Charles, U. E., Eziokwu, P. N., Onyema, E. M., & Adetoyese, M. A.",
      year: 2020,
      journal: "BSU Journal of Science, Mathematics, and Computer Education",
      pages: "pp. 97–101",
      contribution:
        "Developed computer algorithms, optimized task prioritization, contributed to methodological execution",
    },
    {
      type: "thesis",
      title: "Design and Implementation of a Mobile-Based Python Programming Language Learning System",
      authors: "Adetoyese, M. A.",
      year: 2019,
      journal: "Undergraduate Thesis, TASUED",
      orcid: "0000-0002-6291-7055",
      contribution: "Conducted full research cycle: data gathering, hypothesis testing, implementation, publication",
    },
  ]

  const technicalArticles = [
    {
      title: "Implementing Security Screen Overlay in Flutter Apps",
      platform: "Dev.to",
      url: "#",
    },
    {
      title: "Custom Error Handling: Avoiding the Grey Error Screen in Production Apps",
      platform: "Medium",
      url: "#",
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
      transition: { duration: 0.8 },
    },
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      </div>

      {/* Header */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <motion.div className="max-w-5xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Publications</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl text-foreground/70 mb-6">
            Academic publications, research contributions, and technical articles
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link
              href="/Matthew_Adetoyese_CV_Academic.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-accent/60 bg-accent/10 px-6 py-3 text-sm font-medium text-accent hover:bg-accent hover:text-background transition-colors"
            >
              <FileText className="w-4 h-4" />
              Download Full Academic CV (PDF)
              <ExternalLink className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Peer-Reviewed Publications */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-accent" />
              Peer-Reviewed Publications
            </h2>

            <div className="space-y-6">
              {publications.map((pub, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="glass p-8 rounded-2xl border-l-4 border-accent hover:border-accent hover:bg-white/10 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-3">{pub.title}</h3>
                  <p className="text-sm text-foreground/70 mb-2">{pub.authors}</p>
                  <p className="text-sm text-accent font-medium mb-4">
                    {pub.journal} ({pub.year}){pub.pages && ` • ${pub.pages}`}
                  </p>
                  {pub.orcid && <p className="text-xs text-foreground/60 mb-3">ORCID: {pub.orcid}</p>}
                  <p className="text-sm text-foreground/60 italic">{pub.contribution}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>


          {/* Technical Articles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
              <FileText className="w-8 h-8 text-accent" />
              Technical Articles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {technicalArticles.map((article, idx) => (
                <Link
                  key={idx}
                  href={article.url}
                  className="group glass p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:border-accent/50"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors flex-1">
                      {article.title}
                    </h3>
                    <ExternalLink className="w-5 h-5 text-accent flex-shrink-0 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-sm text-foreground/60">{article.platform}</p>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
