import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Users } from "lucide-react"

export function AboutHero() {
  return (
    <section className="relative bg-gradient-to-br from-secondary/5 via-background to-primary/5 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium">
                <Heart className="h-4 w-4" />
                Our Story
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Technology with Purpose.
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                We believe every person deserves dignity, security, and control over their identity. VeriHope was born
                from the conviction that technology should empower, not exploit.
              </p>
            </div>

            {/* Mission Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-1">
                <div className="text-3xl font-bold text-secondary">2023</div>
                <div className="text-sm text-muted-foreground">Founded</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <a href='https://verihope.vercel.app/'>Join Our Mission</a>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center space-y-4">
                <Users className="h-24 w-24 text-primary mx-auto" />
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-foreground">100M+</div>
                  <div className="text-muted-foreground">People We Aim to Serve</div>
                </div>
              </div>
            </div>
            {/* Floating mission indicators */}
            <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              <Heart className="inline h-4 w-4 mr-1" />
              Human-Centered
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              Global Impact
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
