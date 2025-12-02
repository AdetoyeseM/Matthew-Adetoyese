"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  BookOpen,
  FileText,
  Briefcase,
  Award,
  Send,
  GraduationCap,
  Code2,
  Smartphone,
  ExternalLink,
  Zap,
  Database,
  Cloud,
  Shield,
  Users,
  Brain,
  TrendingUp,
  Terminal,
  Layers,
  Settings,
  Workflow,
  Package,
  GitBranch,
  Server,
  Globe,
  Lock,
  Gauge,
} from "lucide-react"

export default function Home() {
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

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/AdetoyeseM" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/adetoyesematthew/" },
    { icon: Mail, label: "Email", href: "mailto:adetoyesematthew97@gmail.com" },
    { icon: BookOpen, label: "ORCID", href: "https://orcid.org/0000-0002-6291-7055" },
  ]

  const publications = [
    {
      title: "Possible ways for enhancing the utilisation of ICTs by educators of tertiary institutions in Enugu State, Nigeria",
      authors: "Charles, U. E., Eziokwu, P. N., Onyema, E. M., & Adetoyese, M. A.",
      year: 2020,
      journal: "BSU Journal of Science, Mathematics, and Computer Education",
      pages: "pp. 97–101",
      contribution: "Developed computer algorithms, optimized task prioritization, contributed to methodological execution",
      type: "journal",
    },
    {
      title: "Design and Implementation of a Mobile-Based Python Programming Language Learning System",
      authors: "Adetoyese, M. A.",
      year: 2019,
      journal: "Undergraduate Thesis, TASUED",
      contribution: "Conducted full research cycle: data gathering, hypothesis testing, implementation, publication",
      type: "thesis",
    },
  ]

  const professionalExperience = [
    {
      title: "Mobile Engineer",
      organization: "Chapel Hill Denham",
      period: "Dec. 2022 - Present",
      role: "Lead Mobile Engineer",
      achievements: [
        "Designed and maintained secure, regulatory-compliant mobile applications for pension fund management",
        "Achieved 70% boost in customer satisfaction through improved UX and performance optimizations",
        "Collaborated with QA, designers, backend developers, and stakeholders in agile environment",
        "Leveraged DevOps practices (Codemagic, Docker, Firebase) to improve deployment efficiency by 75%",
        "Architected scalable mobile solutions handling $10M+ in assets under management",
      ],
    },
    {
      title: "Mobile Engineer",
      organization: "Nitax Technologies",
      period: "Oct. 2021 - Jan. 2023",
      role: "Senior Mobile Developer",
      achievements: [
        "Developed and maintained mobile applications using Dart (Flutter) and Java (Android)",
        "Increased development speed by 15% through implementation of MVC/MVVM/MVP architectures",
        "Reduced time-to-market by 30% and boosted user retention by 60%",
        "Applied DevOps tools to streamline deployment and improve efficiency by 30%",
        "Built real-time data synchronization features for trading and investment platforms",
      ],
    },
    {
      title: "Mobile App Developer",
      organization: "Esusu Africa Technology Innovation Hub",
      period: "Mar. 2020 - Dec. 2021",
      role: "Mobile Engineer",
      achievements: [
        "Supported the full fintech application lifecycle from concept to release",
        "Designed and developed fully functional mobile apps with clean, bug-free code",
        "Deployed applications to official repositories (Google Play Store, Apple App Store)",
        "Collaborated with product teams to ensure quality standards and regulatory compliance",
        "Implemented payment gateway integrations for crypto and traditional transactions",
      ],
    },
  ]

  const researchExperience = [
    {
      title: "Graduate Research and Teaching Assistant",
      organization: "Rivers State University (RSU)",
      period: "Mar. 2020 - Feb. 2021",
      achievements: [
        "Conducted comprehensive security analysis of system implementations",
        "Facilitated weekly discussions, tutorials, and laboratory sessions (12+ hours/week)",
        "Designed and delivered mobile application development training for 10+ staff members",
        "Supervised and mentored undergraduate research projects",
        "Co-developed frameworks and tools for software process improvement",
      ],
    },
    {
      title: "Undergraduate Research Assistant",
      organization: "Tai Solarin University of Education (TASUED)",
      period: "May 2019 - Nov. 2019",
      achievements: [
        "Collaborated with department leadership to refine research outputs",
        "Organized and managed experimental data repositories",
        "Performed statistical data analysis and visualization using Power BI",
        "Conducted field research and data collection for mobile learning systems",
        "Contributed to mobile computing and system design research",
      ],
    },
    {
      title: "Teaching Assistant",
      organization: "Epic International Schools",
      period: "Sept. 2018 - Mar. 2019",
      achievements: [
        "Taught programming and ICT concepts to science and non-science students",
        "Introduced students to SQL and database problem-solving",
        "Developed strong presentation and communication skills",
        "Created educational materials and assessment tools",
        "Mentored students in practical programming exercises and projects",
      ],
    },
  ]

  const projects = [
    {
      name: "TrustFund Mobile",
      description: "Secure pension fund management platform enabling users to track and manage retirement accounts seamlessly",
      role: "Mobile Engineer",
      platforms: ["iOS", "Android"],
      stack: ["Flutter", "Kotlin", "Swift", "Firebase", "REST APIs", "Docker", "Codemagic"],
      achievements: ["Manages $10M+ in assets", "70% customer satisfaction increase", "Regulatory compliant"],
      androidLink: "https://play.google.com/store/apps/details?id=com.trustfund.TrustFundMobile&hl=en",
      iosLink: "https://apps.apple.com/ng/app/trustfund-mobile/id1093997889",
    },{
      name: "Duffle",
      description: "Crypto payment platform making digital currencies as practical as cash for everyday transactions",
      role: "Mobile Developer",
      platforms: ["iOS", "Android"],
      stack: ["Dart", "Blockchain APIs", "Payment Gateways", "Web3"],
      achievements: ["70% increase in user engagement", "Secure crypto transactions"],
      androidLink: "http://play.google.com/store/apps/details?id=io.ivorychain.duffle&pli=1",
      iosLink: "https://apps.apple.com/us/app/duffle/id6739775801",
    },
    {
      name: "InvestNaija",
      description: "All-in-one investment platform for planning, saving, and investing in mutual funds, bonds, and REITs",
      role: "Software Engineer",
      platforms: ["iOS", "Android"],
      stack: ["Flutter", "Kotlin", "Swift", "Rest APIs", "Real-time Data", "Firebase"],
      achievements: ["Democratized investment access", "Real-time portfolio tracking"],
      androidLink: "https://play.google.com/store/apps/details?id=com.chapelhilldenham.invest_naija",
      iosLink: "https://apps.apple.com/us/app/investnaija/id1579193940",
    },
    {
      name: "PrimaryOffer",
      description: "NGX-backed platform for purchasing public offers and rights issues on Nigerian exchanges",
      role: "Mobile Developer",
      platforms: ["iOS", "Android"],
      stack: ["Kotlin", "Swift", "Payment Integration", "REST APIs"],
      achievements: ["75% surge in user engagement", "NGX integration"],
      androidLink: null,
      iosLink: "https://apps.apple.com/ng/app/primaryoffer/id1584954524",
    },
    
    {
      name: "LiteTrade",
      description: "Developed a trading app for buying and selling gift cards, airtime, and more",
      role: "Mobile Developer",
      platforms: ["Android"],
      stack: ["Flutter" , "Java", "WebSockets", "Local Caching", "REST APIs"],
      achievements: ["Fast trading on limited bandwidth", "Real-time market data"],
      androidLink: "https://play.google.com/store/apps/details?id=com.mobirevo.tradelite",
      iosLink: null,
    },
  ]

  const skillIcons: Record<string, any> = {
    // Languages
    Dart: Code2,
    Java: Code2,
    Kotlin: Code2,
    Swift: Code2,
    Python: Code2,
    JavaScript: Code2,
    TypeScript: Code2,
    SQL: Database,
    // Frameworks
    Flutter: Smartphone,
    "React Native": Smartphone,
    "Android SDK": Smartphone,
    "iOS SDK": Smartphone,
    // Tools
    Git: GitBranch,
    Docker: Package,
    Firebase: Cloud,
    Codemagic: Settings,
    "CI/CD": Workflow,
    GraphQL: Globe,
    "REST APIs": Server,
    // Concepts
    "MVC/MVVM/MVP": Layers,
    "Clean Architecture": Layers,
    "Agile/Scrum": Workflow,
    DevOps: Settings,
    Security: Shield,
    "Performance Optimization": Gauge,
  }

  const getSkillIcon = (skill: string) => {
    return skillIcons[skill] || Code2
  }

  const skills = {
    languages: ["GOLang", "Dart", "Java", "Kotlin", "Swift", "Python", "JavaScript", "TypeScript", "SQL"],
    frameworks: ["GIN","NextJS", "Flutter", "React Native", "Android SDK", "iOS SDK"],
    tools: ["Git", "Docker", "Firebase", "Codemagic", "CI/CD", "GraphQL", "REST APIs"],
    concepts: ["MVC/MVVM/MVP", "Clean Architecture", "Agile/Scrum", "DevOps", "Security", "Performance Optimization"],
  }

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Navigation />

      {/* Animated gradient background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-20 animate-float" />
        <div
          className="absolute bottom-40 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-20 animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Fixed Profile Image Sidebar */}
      <div className="hidden md:flex fixed left-0 top-0 h-screen w-80 z-30 px-6 py-12 flex-col items-center justify-center border-r border-white/10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center w-full"
        >
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="relative w-72 h-72 rounded-full overflow-hidden border-2 border-white/20 shadow-xl mb-6"
          >
            <Image
              src="/Matthew-Adetoyese/profile.jpg"
              alt="Matthew Adetoyese"
              width={288}
              height={288}
              className="w-full h-full object-cover"
              priority
            />
          </motion.div>

          {/* Name and Title */}
          <motion.div variants={itemVariants} className="text-center mb-4">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Matthew Adetoyese
            </h2>
            <p className="text-sm text-foreground/70">
              Software Engineer & AI Researcher
            </p>
            <p className="text-xs text-foreground/60 mt-1">
              Mobile Computing & HCI
            </p>
          </motion.div>

          {/* Contact Info */}
          

          {/* Social Icons - Horizontal Row */}
          <motion.div variants={itemVariants} className="flex gap-4 justify-center flex-wrap">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="p-2 text-foreground/70 hover:text-accent transition-all duration-300 group"
                aria-label={link.label}
              >
                <link.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scrollable Content Area - Offset for sidebar */}
      <div className="md:ml-80">
        {/* Hero Section */}
        <section
          id="home"
          className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-20 pt-24"
        >
          <div className="max-w-5xl mx-auto w-full z-10">
            <motion.div
              className="text-center md:text-left"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Mobile Profile Image */}
              <motion.div variants={itemVariants} className="md:hidden flex flex-col items-center mb-8">
                <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-accent/30 shadow-lg ring-4 ring-primary/20 mb-4">
                  <Image
                    src="/Matthew-Adetoyese/profile.jpg"
                    alt="Matthew Adetoyese"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <h2 className="text-xl font-bold text-foreground mb-1">
                  Matthew Adetoyese
                </h2>
                <p className="text-sm text-foreground/70">
                  Software Engineer · AI Researcher
                </p>
              </motion.div>

          {/* Main Title */}
              <motion.div variants={itemVariants} className="mb-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-3 leading-tight">
                  About Me
            </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-foreground/70 font-light">
                  Software Engineer · AI Researcher · Mobile Computing &amp; HCI
                </p>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
                className="text-base md:text-lg text-foreground/60 mb-6 leading-relaxed"
              >
                As a software engineer and AI researcher, I investigate how mobile technologies mediate human well-being,
                social relationships, and learning outcomes. My work focuses on designing responsible, human-centered AI
                systems that promote social connection, empathy, and mental health in digital environments. I am actively
                seeking PhD opportunities to advance research on the socio-emotional impact of emerging technologies and
                develop evidence-based interventions that prioritize user safety and flourishing.
          </motion.p>

          {/* CTA Buttons */}
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6">
            <Link
                  href="/#research"
              className="group glass px-8 py-4 rounded-lg font-medium text-foreground hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Explore Research
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
                  href="/#projects"
              className="px-8 py-4 rounded-lg font-medium border border-primary/50 text-primary hover:bg-primary/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Social Links */}
              {/* <motion.div variants={itemVariants} className="flex gap-6 justify-center md:justify-start">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="p-3 glass rounded-lg hover:bg-white/10 text-foreground/70 hover:text-accent transition-all duration-300 group"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Link>
            ))}
          </motion.div> */}
          </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            variants={itemVariants}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <p className="text-sm text-foreground/50">Scroll to explore</p>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="w-6 h-10 border border-foreground/20 rounded-full flex items-start justify-center pt-2"
            >
              <div className="w-1 h-2 bg-accent rounded-full" />
            </motion.div>
          </motion.div>
      </section>

        {/* Education Section */}
        <section id="education" className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="glass p-8 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-3 flex items-center gap-3">
              <GraduationCap className="w-7 h-7 text-accent" />
              Education
            </h2>
            <p className="text-foreground/70 mb-4">
              A strong academic foundation in computer science, artificial intelligence, and technology-enhanced
              education.
            </p>
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
                  <div>
                    <p className="font-semibold text-lg text-foreground">
                      MSc Computer Science (Artificial Intelligence)
                    </p>
                    <p className="text-accent font-medium text-sm mt-1">Covenant University, Ogun State, Nigeria</p>
                  </div>
                  <span className="text-xs text-foreground/60 whitespace-nowrap">Sept 2025 – Present</span>
                </div>
                <p className="text-foreground/70 text-sm">Concentration: Artificial Intelligence</p>
              </div>
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
                  <div>
                    <p className="font-semibold text-lg text-foreground">BSc [Ed.] Computer Science</p>
                    <p className="text-accent font-medium text-sm mt-1">
                      Tai Solarin University of Education, Ogun State, Nigeria
                    </p>
                  </div>
                  <span className="text-xs text-foreground/60 whitespace-nowrap">Sept 2015 – Nov. 2019</span>
                </div>
                <p className="text-foreground/70 text-sm mb-2">First-class Honours, CGPA 4.72 / 5.00</p>
                <p className="text-foreground/70 text-sm">
                  <span className="font-medium">Undergraduate Thesis:</span>{" "}
                  <span className="italic">Design and Implementation Of A Mobile-based Programming Learning System</span>
                </p>
              </div>
            </div>
        </motion.div>
        </div>
      </section>

        {/* Research Section */}
        <section id="research" className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="glass p-8 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-3">
              <Brain className="w-7 h-7 text-accent" />
              Research Interests
            </h2>
            <p className="text-foreground/70 mb-4">
              My research investigates how AI-powered mobile and ubiquitous systems can support human well-being,
              socio-emotional health, and learning in everyday contexts.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-foreground/70 mb-6">
              <div className="space-y-2">
                <p className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Human-centered AI and responsible AI systems</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Digital well-being and socio-emotional impact of technology</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Persuasive technologies for positive behavior change</span>
                </p>
              </div>
              <div className="space-y-2">
                <p className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Mobile and IoT systems for learning and mental health support</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Human–computer interaction and interaction design</span>
                </p>
              </div>
            </div>
            <p className="text-xs text-foreground/60">
              Currently pursuing MSc Computer Science (AI) at Covenant University. Previous work includes designing a
              mobile-based programming learning system and contributing to research on ICT utilization in education.
            </p>
          </motion.div>
        </div>
      </section>

        {/* Publications Section */}
        <section id="publications" className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="glass p-8 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-3 flex items-center gap-3">
              <BookOpen className="w-7 h-7 text-accent" />
              Publications
            </h2>
            <p className="text-foreground/70 mb-4">Peer-reviewed publications, thesis work, and technical articles.</p>

            {/* Peer-Reviewed Publications */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">Peer-Reviewed Publications</h3>
              <div className="space-y-4">
                {publications.map((pub, idx) => (
                  <div key={idx} className="p-6 rounded-xl bg-white/5 border border-white/10">
                    <h3 className="font-semibold text-foreground mb-2">{pub.title}</h3>
                    <p className="text-sm text-foreground/70 mb-2">{pub.authors}</p>
                    <p className="text-sm text-accent font-medium mb-2">
                      {pub.journal} ({pub.year}){pub.pages && ` • ${pub.pages}`}
                    </p>
                    <p className="text-xs text-foreground/60 italic">{pub.contribution}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Articles */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-accent" />
                Technical Articles
              </h3>
              <p className="text-sm text-foreground/60 mb-3">Technical writing and tutorials on mobile development best practices.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Implementing Security Screen Overlay in Flutter Apps",
                    platform: "Dev.to",
                    url: "https://dev.to/adepto/implementing-a-security-screen-overlay-in-flutter-24g2",
                  },
                  {
                    title: "Custom Error Handling: Avoiding the Grey Error Screen in Production Apps",
                    platform: "Medium",
                    url: "https://medium.com/@adetoyesematthew/avoiding-the-dreaded-grey-error-screen-in-flutter-custom-error-handling-7c6035cb3715",
                  },
                ].map((article, idx) => (
                  <Link
                    key={idx}
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent/50 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors flex-1">
                        {article.title}
                      </h3>
                      <ExternalLink className="w-4 h-4 text-accent flex-shrink-0 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <p className="text-sm text-foreground/60">{article.platform}</p>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

        {/* Skills & Competences Section */}
        <section id="skills" className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="glass p-8 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-3 flex items-center gap-3">
              <Code2 className="w-7 h-7 text-accent" />
              Skills &amp; Competences
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-accent" />
                  Programming Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill) => {
                    const Icon = getSkillIcon(skill)
                    return (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-accent/10 text-accent rounded-lg border border-accent/20 hover:bg-accent/20 transition-colors"
                      >
                        <Icon className="w-3.5 h-3.5" />
                        {skill}
                      </span>
                    )
                  })}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-accent" />
                  Frameworks &amp; Platforms
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map((skill) => {
                    const Icon = getSkillIcon(skill)
                    return (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-primary/10 text-primary rounded-lg border border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        <Icon className="w-3.5 h-3.5" />
                        {skill}
                      </span>
                    )
                  })}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Cloud className="w-5 h-5 text-accent" />
                  Tools &amp; Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => {
                    const Icon = getSkillIcon(skill)
                    return (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-white/5 text-foreground/70 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
                      >
                        <Icon className="w-3.5 h-3.5" />
                        {skill}
                      </span>
                    )
                  })}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-accent" />
                  Concepts &amp; Practices
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.concepts.map((skill) => {
                    const Icon = getSkillIcon(skill)
                    return (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-white/5 text-foreground/70 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
                      >
                        <Icon className="w-3.5 h-3.5" />
                        {skill}
                      </span>
                    )
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

        {/* Experience Section */}
        <section id="experience" className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Briefcase className="w-7 h-7 text-accent" />
              Professional Experience
            </h2>
            <div className="space-y-6">
              {professionalExperience.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="glass p-8 rounded-2xl border-l-4 border-primary hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.organization}</p>
                      {exp.role && <p className="text-sm text-foreground/60 mt-1">Role: {exp.role}</p>}
                    </div>
                    <span className="text-xs text-foreground/60 whitespace-nowrap">{exp.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-foreground/70">
                        <span className="text-primary mt-0.5 flex-shrink-0">›</span>
                        <span className="flex-1">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
              <BookOpen className="w-7 h-7 text-accent" />
              Research &amp; Teaching Experience
            </h2>
            <div className="space-y-6">
              {researchExperience.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="glass p-8 rounded-2xl border-l-4 border-accent hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                      <p className="text-accent font-medium">{exp.organization}</p>
                    </div>
                    <span className="text-xs text-foreground/60 whitespace-nowrap">{exp.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-foreground/70">
                        <span className="text-accent mt-0.5 flex-shrink-0">›</span>
                        <span className="flex-1">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

        {/* Projects Section */}
        <section id="projects" className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Smartphone className="w-7 h-7 text-accent" />
              Featured Projects
            </h2>
            <p className="text-foreground/70 mb-8">
              Production-grade mobile applications where I led or contributed significantly to architecture,
              implementation, and user experience.
            </p>
            <div className="space-y-6">
              {projects.map((project, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="glass p-8 rounded-2xl border-l-4 border-accent hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{project.name}</h3>
                      <p className="text-sm text-accent font-medium mb-2">Role: {project.role}</p>
                      <p className="text-foreground/70 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.platforms.map((platform) => (
                          <span
                            key={platform}
                            className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                          >
                            {platform}
                          </span>
                        ))}
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs bg-white/5 text-foreground/70 rounded border border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.achievements.map((achievement, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1 px-3 py-1 text-xs bg-accent/10 text-accent rounded-full"
                          >
                            <TrendingUp className="w-3 h-3" />
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    {project.androidLink && (
                      <Link
                        href={project.androidLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground/70 hover:text-accent border border-white/10 hover:border-accent/50 rounded-lg transition-all"
                      >
                        <Smartphone className="w-4 h-4" />
                        Android
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                    )}
                    {project.iosLink && (
                      <Link
                        href={project.iosLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground/70 hover:text-accent border border-white/10 hover:border-accent/50 rounded-lg transition-all"
                      >
                        <Smartphone className="w-4 h-4" />
                        iOS
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

        {/* Awards Section */}
        <section id="awards" className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="glass p-8 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-3 flex items-center gap-3">
              <Award className="w-7 h-7 text-accent" />
              Awards &amp; Recognition
            </h2>
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="font-semibold text-foreground">University Senate Award</p>
                <p className="text-sm text-foreground/70">Best Graduating Student, Department of Computer Sciences (TASUED, 2019)</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="font-semibold text-foreground">Vice Chancellor&apos;s Award</p>
                <p className="text-sm text-foreground/70">Best Graduating Student, College of Sciences (TASUED, 2019)</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="font-semibold text-foreground">University Alumni Award</p>
                <p className="text-sm text-foreground/70">Best Graduating Student, College of Sciences (TASUED, 2019)</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="font-semibold text-foreground">Academic Excellence Award</p>
                <p className="text-sm text-foreground/70">
                  General Overseer, Gospel Faith Mission International (2021)
                </p>
              </div>
            </div>
          </motion.div>
                </div>
      </section>

        {/* Contact Section */}
        <section id="contact" className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="glass p-8 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-3 flex items-center gap-3">
              <Send className="w-7 h-7 text-accent" />
              Get in Touch
            </h2>
            <p className="text-foreground/70 mb-4">
              Open to PhD opportunities, research collaborations, and academic-industry partnerships.
            </p>

            {/* Social Links - Same style as hero */}
            <div className="flex gap-6 justify-center md:justify-start">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="p-3 glass rounded-lg hover:bg-white/10 text-foreground/70 hover:text-accent transition-all duration-300 group"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Link>
            ))}
            </div>
          </motion.div>
        </div>
      </section>
      </div>

      <Footer />
    </main>
  )
}
