import Navigation from "@/components/navigation"
import Link from "next/link"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-light text-foreground mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-8">Page not found</p>
          <Link
            href="/"
            className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Return Home
          </Link>
        </div>
      </section>
    </main>
  )
}
