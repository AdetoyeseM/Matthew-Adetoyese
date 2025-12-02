"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { motion } from "framer-motion"
import { Briefcase, BookOpen, GraduationCap } from "lucide-react"

export default function Experience() {
  const researchExperience = [
    {
      title: "Graduate Research and Teaching Assistant",
      organization: "Rivers State University (RSU)",
      period: "Mar. 2020 - Feb. 2021",
      focus: "Research methodology, AI/ML systems",
      highlights: [
        "Conducted comprehensive security analysis of system implementations",
        "Facilitated weekly discussions, tutorials, and laboratory sessions (12+ hours/week)",
        "Designed and delivered mobile application development training for 10+ staff",
        "Supervised and mentored undergraduate research projects",
        "Co-developed frameworks and tools for software process improvement",
      ],
    },
    {
      title: "Undergraduate Research Assistant",
      organization: "Tai Solarin University of Education (TASUED)",
      period: "May 2019 - Nov. 2019",
      focus: "Mobile computing, system design",
      highlights: [
        "Collaborated with department leadership to refine research outputs",
        "Organized and managed experimental data repositories",
        "Performed statistical data analysis and visualization using Power BI",
        "Conducted field research and data collection",
      ],
    },
    {
      title: "Teaching Assistant",
      organization: "Epic International Schools",
      period: "Sept. 2018 - Mar. 2019",
      focus: "Computer science fundamentals, mentoring",
      highlights: [
        "Taught programming and ICT concepts to science and non-science students",
        "Introduced students to SQL and database problem-solving",
        "Developed strong presentation and communication skills",
      ],
    },
  ]

  const professionalExperience = [
    {
      title: "Mobile Engineer",
      organization: "Chapel Hill Denham",
      period: "Dec. 2022 - Present",
      highlights: [
        "Designed and maintained secure, regulatory-compliant mobile applications",
        "Achieved 70% boost in customer satisfaction",
        "Collaborated with QA, designers, backend developers, and stakeholders",
        "Leveraged DevOps practices (Codemagic, Docker, Firebase) to improve deployment efficiency by 75%",
      ],
    },
    {
      title: "Mobile Engineer",
      organization: "Nitax Technologies",
      period: "Oct. 2021 - Jan. 2023",
      highlights: [
        "Developed and maintained mobile applications using Dart and Java",
        "Increased development speed by 15% with MVC/MVVM/MVP architectures",
        "Reduced time-to-market by 30% and boosted user retention by 60%",
        "Applied DevOps tools to streamline deployment and improve efficiency by 30%",
      ],
    },
    {
      title: "Mobile App Developer",
      organization: "Esusu Africa Technology Innovation Hub",
      period: "Mar. 2020 - Dec. 2021",
      highlights: [
        "Supported the full fintech application lifecycle from concept to release",
        "Designed and developed fully functional mobile apps with clean, bug-free code",
        "Deployed applications to official repositories and app stores",
        "Collaborated with product teams to ensure quality standards",
      ],
    },
  ]

  const education = [
    {
      degree: "MSc Computer Science",
      institution: "Covenant University, Ogun State, Nigeria",
      period: "Sept 2025 - Present",
      details: ["Concentration: Artificial Intelligence"],
    },
    {
      degree: "BSc [Ed.] Computer Science",
      institution: "Tai Solarin University of Education, Ogun State, Nigeria",
      period: "Sept 2015 - Nov. 2019",
      details: [
        "First-class Honours, CGPA - 4.72 / 5.00",
        "Thesis: Design and Implementation Of A Mobile-based Programming Learning System",
      ],
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
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-20 animate-float" />
      </div>

      {/* Header */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <motion.div className="max-w-5xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Experience</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl text-foreground/70">
            4+ years combining research, teaching, and production-grade mobile engineering
          </motion.p>
        </motion.div>
      </section>

      {/* Education */}
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
              <GraduationCap className="w-8 h-8 text-accent" />
              Education
            </h2>

            <div className="space-y-6">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="glass p-8 rounded-2xl border-l-4 border-accent hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{edu.degree}</h3>
                      <p className="text-accent font-medium text-sm">{edu.institution}</p>
                    </div>
                    <span className="text-xs text-foreground/60 whitespace-nowrap">{edu.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {edu.details.map((detail, i) => (
                      <li key={i} className="flex gap-3 text-sm text-foreground/70">
                        <span className="text-accent mt-1 flex-shrink-0">›</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Research & Teaching Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-accent" />
              Research & Teaching
            </h2>

            <div className="space-y-6">
              {researchExperience.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="glass p-8 rounded-2xl border-l-4 border-accent hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                      <p className="text-accent font-medium text-sm">{exp.organization}</p>
                    </div>
                    <span className="text-xs text-foreground/60 whitespace-nowrap">{exp.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-3 text-sm text-foreground/70">
                        <span className="text-accent mt-1 flex-shrink-0">›</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Professional Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
              <Briefcase className="w-8 h-8 text-accent" />
              Professional Experience
            </h2>

            <div className="space-y-6">
              {professionalExperience.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: (idx + 3) * 0.1 }}
                  viewport={{ once: true }}
                  className="glass p-8 rounded-2xl border-l-4 border-primary hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                      <p className="text-primary font-medium text-sm">{exp.organization}</p>
                    </div>
                    <span className="text-xs text-foreground/60 whitespace-nowrap">{exp.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-3 text-sm text-foreground/70">
                        <span className="text-primary mt-1 flex-shrink-0">›</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
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
