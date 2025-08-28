import { Shield, Globe, UserCheck, Key, Heart, Zap, Lock, Users } from "lucide-react"

export function IndividualsBenefits() {
  const benefits = [
    {
      icon: Shield,
      title: "Security",
      description: "Your data stays private and secure",
      details:
        "Advanced encryption and blockchain technology ensure your personal information remains protected and under your complete control.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Globe,
      title: "Portability",
      description: "Works across borders and organizations",
      details:
        "Your digital identity travels with you, recognized by humanitarian organizations worldwide, no matter where life takes you.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: UserCheck,
      title: "Control",
      description: "You decide who sees your information",
      details:
        "Grant and revoke access to your data instantly. Share only what's necessary with organizations you trust.",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Key,
      title: "Access",
      description: "Unlock services and aid programs",
      details:
        "Seamlessly access healthcare, education, financial services, and humanitarian aid with verified digital credentials.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ]

  const additionalFeatures = [
    {
      icon: Heart,
      title: "Dignity First",
      description: "Respectful, empowering experience",
    },
    {
      icon: Zap,
      title: "Instant Access",
      description: "No waiting, no paperwork delays",
    },
    {
      icon: Lock,
      title: "Privacy Protected",
      description: "Your information, your choice",
    },
    {
      icon: Users,
      title: "Family Support",
      description: "Manage family member identities",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground text-balance">Why Choose VeriHope</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Take control of your digital identity with technology designed to empower and protect you.
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
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">Built for You</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-12 h-12 bg-card rounded-xl flex items-center justify-center mx-auto border border-border">
                  <feature.icon className="h-6 w-6 text-secondary" />
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
