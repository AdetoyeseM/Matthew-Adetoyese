"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { motion } from "framer-motion"
import { Mail, Linkedin, Github, BookOpen, Send } from "lucide-react"

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "adetoyesematthew97@gmail.com",
      href: "mailto:adetoyesematthew97@gmail.com",
      color: "text-red-400",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/adetoyesematthew/",
      color: "text-blue-400",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "View my projects",
      href: "https://github.com/AdetoyeseM",
      color: "text-gray-400",
    },
    {
      icon: BookOpen,
      title: "ORCID",
      value: "0000-0002-6291-7055",
      href: "https://orcid.org/0000-0002-6291-7055",
      color: "text-green-400",
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
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-20 animate-float" />
        <div
          className="absolute bottom-40 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-20 animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Header */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <motion.div className="max-w-5xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Get in
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Touch</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl text-foreground/70 max-w-2xl">
            Open to collaborations, research discussions, and academic opportunities. Let's connect and create something
            meaningful together.
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Methods */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contactMethods.map((method, idx) => (
              <motion.a
                key={idx}
                href={method.href}
                variants={itemVariants}
                className="group glass p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:border-accent/50 hover:scale-105"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-lg bg-white/5 flex-shrink-0`}>
                    <method.icon className={`w-6 h-6 ${method.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors mb-2">
                      {method.title}
                    </h3>
                    <p className="text-foreground/70 group-hover:text-foreground/90 transition-colors break-words">
                      {method.value}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto glass p-12 rounded-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-start gap-4 mb-4">
            <Send className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">Response Time</h2>
              <p className="text-foreground/70 leading-relaxed">
                I typically respond to emails within 48 hours. For research-related inquiries or collaboration
                proposals, please include relevant details about your project, research interests, or the nature of your
                inquiry. I look forward to hearing from you!
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}
