import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Users, TrendingDown } from "lucide-react"

export function OrganizationsHero() {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Users className="h-4 w-4" />
                For Humanitarian Organizations
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Transform Your Aid Delivery.
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                Reduce fraud, cut costs, and streamline service delivery with VeriHope's secure digital identity
                platform.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-1">
                <div className="text-3xl font-bold text-primary">60%</div>
                <div className="text-sm text-muted-foreground">Cost Reduction</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-secondary">95%</div>
                <div className="text-sm text-muted-foreground">Fraud Prevention</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Whitepaper
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 flex items-center justify-center">
              <img
                src="/aid-organization-dashboard-interface.png"
                alt="VeriHope dashboard interface showing aid distribution analytics and beneficiary verification"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            {/* Floating metrics */}
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              <TrendingDown className="inline h-4 w-4 mr-1" />
              60% Cost Reduction
            </div>
            <div className="absolute -bottom-4 -left-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              95% Fraud Prevention
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
