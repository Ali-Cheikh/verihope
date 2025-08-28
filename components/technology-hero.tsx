import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Zap } from "lucide-react"

export function TechnologyHero() {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Shield className="h-4 w-4" />
                Advanced Technology
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Built on Trust.
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                Advanced security meets humanitarian values. Our technology puts privacy, dignity, and user control at
                the center of digital identity.
              </p>
            </div>

            {/* Key Tech Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="space-y-1">
                <div className="text-2xl font-bold text-primary">256-bit</div>
                <div className="text-sm text-muted-foreground">Encryption</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-secondary">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-accent">Global</div>
                <div className="text-sm text-muted-foreground">Scale</div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Technical Whitepaper
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-4 w-full h-full">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className="bg-card border border-border rounded-lg flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity"
                  >
                    <div className="w-4 h-4 bg-primary/20 rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              <Shield className="inline h-4 w-4 mr-1" />
              Secure & Private
            </div>
            <div className="absolute -bottom-4 -left-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              <Zap className="inline h-4 w-4 mr-1" />
              Lightning Fast
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
