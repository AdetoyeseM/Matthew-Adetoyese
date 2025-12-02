import Link from "next/link"
import { Mail, Linkedin, Twitter, Globe } from "lucide-react"

export default function Profile() {
  return (
    <section id="profile" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-start">
            <div className="w-64 h-64 rounded-lg overflow-hidden bg-muted shadow-lg">
              <img src="/professional-headshot.png" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Profile Info */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <h2 className="text-4xl font-light text-foreground mb-2">Your Name</h2>
              <p className="text-lg text-muted-foreground">Assistant Professor</p>
            </div>

            <div className="space-y-3 text-foreground/80">
              <p>Department of Communication</p>
              <p>University Name</p>
              <p className="text-sm">Email: your.email@university.edu</p>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 pt-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Google Scholar"
              >
                <Globe className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
