import { Shield, Lock, Globe, Zap, Database, Users, CheckCircle, Layers } from "lucide-react"

export function TechnologyFeatures() {
  const features = [
    {
      icon: Shield,
      title: "Blockchain Security",
      description: "Immutable, tamper-proof identity records",
      details:
        "Built on enterprise-grade blockchain infrastructure that ensures your identity data cannot be altered, deleted, or compromised by bad actors.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Lock,
      title: "Privacy by Design",
      description: "Zero-knowledge architecture protects your data",
      details:
        "Advanced cryptographic techniques ensure organizations can verify your identity without ever seeing your personal information.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Globe,
      title: "Interoperability",
      description: "Works seamlessly across all systems",
      details:
        "Universal standards and APIs enable your digital identity to work with any humanitarian organization, government system, or service provider.",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Zap,
      title: "Scalability",
      description: "Built to serve millions globally",
      details:
        "Cloud-native architecture with edge computing ensures fast, reliable access whether you're in a refugee camp or major city.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ]

  const technicalSpecs = [
    {
      icon: Database,
      title: "Decentralized Storage",
      description: "Your data isn't stored in one place",
    },
    {
      icon: Users,
      title: "Multi-Signature Security",
      description: "Multiple keys required for access",
    },
    {
      icon: CheckCircle,
      title: "Compliance Ready",
      description: "GDPR, UNHCR standards compliant",
    },
    {
      icon: Layers,
      title: "Modular Architecture",
      description: "Adaptable to any use case",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground text-balance">Technology That Protects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Every technical decision we make prioritizes your security, privacy, and control over your digital identity.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center ${feature.color}`}
                  >
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-lg text-muted-foreground font-medium">{feature.description}</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{feature.details}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Specifications */}
        <div className="bg-muted/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">Technical Specifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalSpecs.map((spec, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-12 h-12 bg-card rounded-xl flex items-center justify-center mx-auto border border-border">
                  <spec.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">{spec.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{spec.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
