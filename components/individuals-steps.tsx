import { Smartphone, UserPlus, CheckCircle, ArrowRight } from "lucide-react"

export function IndividualsSteps() {
  const steps = [
    {
      icon: Smartphone,
      title: "Download App",
      description: "Get the VeriHope app on your smartphone",
      details: "Available for iOS and Android. Simple, secure setup in your preferred language.",
    },
    {
      icon: UserPlus,
      title: "Create Identity",
      description: "Set up your secure digital identity",
      details: "Verify your identity once with trusted documents. Your data stays encrypted and private.",
    },
    {
      icon: CheckCircle,
      title: "Access Services",
      description: "Use your identity to access aid and services",
      details: "Present your digital ID to receive healthcare, education, financial services, and humanitarian aid.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground text-balance">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Getting started with VeriHope is simple and secure. Follow these three easy steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-card rounded-2xl p-8 border border-border h-full">
                <div className="space-y-6">
                  {/* Step Number */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                      <step.icon className="h-6 w-6 text-secondary" />
                    </div>
                    <div className="text-4xl font-bold text-muted-foreground/20">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                    <p className="text-lg text-muted-foreground font-medium">{step.description}</p>
                    <p className="text-muted-foreground leading-relaxed">{step.details}</p>
                  </div>
                </div>
              </div>

              {/* Arrow connector (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-8 bg-background rounded-full border border-border flex items-center justify-center">
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
