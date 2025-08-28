import { Button } from "@/components/ui/button"
import { ArrowRight, Rss } from "lucide-react"

export function BlogHero() {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Rss className="h-4 w-4" />
              News & Insights
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              VeriHope Newsroom
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty max-w-3xl mx-auto">
              Stay updated with the latest developments in digital identity, humanitarian technology, and our mission to
              empower displaced communities worldwide.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Subscribe to Updates
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
