"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { motion } from "framer-motion"
import { Code2, Brain, Cpu, Smartphone, Zap, Users } from "lucide-react"

export default function Research() {
  const researchThemes = [
    {
      icon: Smartphone,
      title: "Mobile Computing & IoT",
      description: "Intelligent systems embedded in everyday devices and environments",
    },
    {
      icon: Users,
      title: "Human-Computer Interaction",
      description: "Understanding user behavior and designing intuitive interactions",
    },
    {
      icon: Brain,
      title: "Applied AI",
      description: "Real-world AI applications that enhance human capabilities",
    },
    {
      icon: Zap,
      title: "Persuasive Technologies",
      description: "Systems designed to influence behavior positively",
    },
    {
      icon: Code2,
      title: "Interactive Systems",
      description: "Building responsive, context-aware computing platforms",
    },
    {
      icon: Cpu,
      title: "AI-Powered Sensing",
      description: "Leveraging sensors and ML for intelligent insights",
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

      {/* Background Gradient */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-20 animate-float" />
      </div>

      {/* Header Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <motion.div className="max-w-5xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              Research
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Interests</span>
            </h1>
          </motion.div>
          <motion.p variants={itemVariants} className="text-xl text-foreground/70 max-w-2xl leading-relaxed mb-4">
            My research aims to design and evaluate AI-powered, always-available mobile/IoT technologies that improve
            socio-physical well-being while inspiring new computational systems rooted in real-world interaction.
          </motion.p>
          <motion.p variants={itemVariants} className="text-sm text-foreground/60 max-w-2xl leading-relaxed">
            Currently pursuing an MSc in Computer Science with a concentration in Artificial Intelligence at Covenant
            University. My undergraduate thesis at Tai Solarin University of Education focused on the design and
            implementation of a mobile-based programming learning system, establishing my foundation in educational
            technology and mobile computing.
          </motion.p>
        </motion.div>
      </section>

      {/* Research Themes Grid */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {researchThemes.map((theme, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group glass p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:border-accent/50 hover:scale-105"
              >
                <div className="mb-4 p-3 w-fit rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <theme.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {theme.title}
                </h3>
                <p className="text-foreground/60 group-hover:text-foreground/80 transition-colors">
                  {theme.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto glass p-12 rounded-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Vision Statement</h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            To bridge the gap between cutting-edge AI research and practical mobile/IoT applications that tangibly
            improve how people interact with technology and their environment. I believe the future of computing lies in
            systems that understand context, adapt to user needs, and integrate seamlessly into daily life—creating a
            more intuitive, responsive, and human-centered technological landscape.
          </p>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}
