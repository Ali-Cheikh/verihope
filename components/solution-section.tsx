import { Button } from "@/components/ui/button"
import { CheckCircle, Smartphone, QrCode, Shield } from "lucide-react"

export function SolutionSection() {
  const steps = [
    {
      icon: CheckCircle,
      title: "Verified Registration",
      description: "NGO partner verifies identity and creates secure digital profile",
      color: "text-primary",
    },
    {
      icon: Smartphone,
      title: "Secure Digital Identity",
      description: "Mobile app stores encrypted credentials with user control",
      color: "text-secondary",
    },
    {
      icon: QrCode,
      title: "QR Code Verification",
      description: "Privacy-preserving verification enables instant, secure access",
      color: "text-accent",
    },
    {
      icon: Shield,
      title: "Access Services",
      description: "Seamless access to food, cash, healthcare, and education",
      color: "text-primary",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground text-balance">
            How VeriHope Works: Security, Privacy, and Efficiency.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Our secure digital identity solution restores dignity while ensuring the highest levels of security and
            privacy.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-border z-0"></div>
              )}

              <div className="relative bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-full bg-muted flex items-center justify-center ${step.color}`}>
                    <step.icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Step number */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            See How It Works
          </Button>
        </div>
      </div>
    </section>
  )
}
