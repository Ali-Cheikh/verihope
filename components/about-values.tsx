import { Heart, Shield, Users, Globe, Lightbulb, HandHeart } from "lucide-react"

export function AboutValues() {
  const values = [
    {
      icon: Heart,
      title: "Dignity First",
      description: "Every interaction respects human dignity and agency",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Shield,
      title: "Privacy by Design",
      description: "Security and privacy are built into every feature",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Users,
      title: "Community-Centered",
      description: "Built with and for displaced communities",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Globe,
      title: "Universal Access",
      description: "Technology that works for everyone, everywhere",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Lightbulb,
      title: "Innovation with Purpose",
      description: "Cutting-edge technology serving humanitarian goals",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: HandHeart,
      title: "Radical Transparency",
      description: "Open about our methods, partnerships, and impact",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground text-balance">Our Values</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            These principles guide every decision we make, from product design to partnership choices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                <div
                  className={`w-12 h-12 rounded-xl ${value.bgColor} flex items-center justify-center ${value.color}`}
                >
                  <value.icon className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
