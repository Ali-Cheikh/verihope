import { Users, DollarSign, Clock, Globe } from "lucide-react"

export function OrganizationsStats() {
  const stats = [
    {
      icon: Users,
      value: "100M+",
      label: "People Served",
      description: "Displaced individuals worldwide who could benefit",
      color: "text-primary",
    },
    {
      icon: DollarSign,
      value: "$2.4B",
      label: "Annual Savings",
      description: "Potential cost reduction across humanitarian sector",
      color: "text-secondary",
    },
    {
      icon: Clock,
      value: "90%",
      label: "Time Saved",
      description: "Reduction in verification and registration time",
      color: "text-accent",
    },
    {
      icon: Globe,
      value: "50+",
      label: "Countries",
      description: "Where digital identity solutions are needed",
      color: "text-primary",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground text-balance">The Scale of Impact</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            VeriHope addresses one of the world's largest humanitarian challenges with measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-card rounded-2xl p-8 border border-border text-center space-y-4">
              <div className={`w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto ${stat.color}`}>
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-foreground">{stat.value}</div>
                <div className="text-lg font-semibold text-foreground">{stat.label}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Case Study Preview */}
        <div className="mt-16 bg-card rounded-2xl p-8 border border-border">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Real-World Impact</h3>
              <p className="text-muted-foreground leading-relaxed">
                "In pilot programs, organizations using digital identity solutions have seen dramatic improvements in
                efficiency, cost reduction, and beneficiary satisfaction. VeriHope is designed to scale these successes
                globally."
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-muted rounded-full"></div>
                <div>
                  <p className="font-semibold text-foreground">Pilot Program Results</p>
                  <p className="text-sm text-muted-foreground">Based on humanitarian sector research</p>
                </div>
              </div>
            </div>
            <div className="bg-muted/50 rounded-xl p-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Cost Reduction</span>
                <span className="font-bold text-primary">60%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Fraud Prevention</span>
                <span className="font-bold text-secondary">95%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Time Savings</span>
                <span className="font-bold text-accent">90%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
