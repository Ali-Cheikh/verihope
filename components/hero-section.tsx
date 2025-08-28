import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-background via-card to-muted py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Identity is a Human Right. We Help Restore It.
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                VeriHope is a secure, blockchain-based digital ID wallet that empowers refugees and enables aid
                organizations to deliver services with trust and efficiency.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                For Organizations
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
              >
                For Individuals
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Blockchain Secured</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-secondary" />
                <span className="text-sm text-muted-foreground">100M+ People Served</span>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 flex items-center justify-center">
              <img
                src="/dignified-refugee-using-smartphone-showing-qr-code.png"
                alt="Refugee confidently using VeriHope digital ID on smartphone with aid worker assistance"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              Verified ✓
            </div>
            <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              Secure Access
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
