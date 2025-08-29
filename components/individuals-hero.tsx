import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Smartphone, Shield } from "lucide-react"

export function IndividualsHero() {
  return (
    <section className="relative bg-gradient-to-br from-secondary/5 via-background to-accent/5 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium">
                <Smartphone className="h-4 w-4" />
                For Individuals & Refugees
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Your Identity, Your Power.
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                Secure, portable digital identity that works anywhere. Take control of your information and access the
                services you need.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-1">
                <div className="text-3xl font-bold text-secondary">100%</div>
                <div className="text-sm text-muted-foreground">Your Control</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-accent">24/7</div>
                <div className="text-sm text-muted-foreground">Access</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <a href='https://verihope.vercel.app/'>Request Demo</a>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                <a href='https://verihope-three.vercel.app/about'>Learn More</a>
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl p-8 flex items-center justify-center">
              <img
                src="/dignified-refugee-using-smartphone-showing-qr-code.png"
                alt="Person using smartphone to access digital identity services with QR code verification"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            {/* Floating indicators */}
            <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              <Shield className="inline h-4 w-4 mr-1" />
              100% Secure
            </div>
            <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              Works Anywhere
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
