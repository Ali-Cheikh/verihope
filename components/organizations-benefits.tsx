import { TrendingDown, Shield, Globe, BarChart3, Clock, Users, CheckCircle, Database } from "lucide-react"

export function OrganizationsBenefits() {
  const benefits = [
    {
      icon: TrendingDown,
      title: "Reduce Costs",
      description: "Cut administrative overhead by 60%",
      details:
        "Eliminate duplicate registrations, reduce paperwork, and streamline verification processes with automated digital identity management.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Shield,
      title: "Prevent Fraud",
      description: "Ensure aid reaches the right people",
      details:
        "Blockchain-based verification prevents identity fraud and ensures resources reach legitimate beneficiaries every time.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Globe,
      title: "Interoperability",
      description: "Works across NGOs and countries",
      details:
        "Universal digital identity that works seamlessly across organizations, borders, and humanitarian programs worldwide.",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: BarChart3,
      title: "Impact Data",
      description: "Prove transparency to donors",
      details:
        "Real-time analytics and transparent reporting demonstrate measurable impact and build donor confidence in your programs.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ]

  const additionalFeatures = [
    {
      icon: Clock,
      title: "Instant Verification",
      description: "Verify beneficiaries in seconds, not hours",
    },
    {
      icon: Users,
      title: "Scalable Solution",
      description: "Handle millions of beneficiaries efficiently",
    },
    {
      icon: CheckCircle,
      title: "Compliance Ready",
      description: "Meets international humanitarian standards",
    },
    {
      icon: Database,
      title: "Secure Storage",
      description: "Encrypted, decentralized data protection",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground text-balance">
            Why Organizations Choose VeriHope
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Transform your humanitarian operations with cutting-edge technology that puts beneficiaries first.
          </p>
        </div>

        {/* Main Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-12 h-12 rounded-xl ${benefit.bgColor} flex items-center justify-center ${benefit.color}`}
                  >
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="text-xl font-semibold text-foreground">{benefit.title}</h3>
                    <p className="text-lg text-muted-foreground font-medium">{benefit.description}</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{benefit.details}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="bg-muted/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">Additional Features</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-12 h-12 bg-card rounded-xl flex items-center justify-center mx-auto border border-border">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
