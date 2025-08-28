import { AlertTriangle, Ban, Users, CreditCard } from "lucide-react"

export function ProblemSection() {
  const barriers = [
    {
      icon: CreditCard,
      title: "No Banking",
      description: "Unable to access financial services",
    },
    {
      icon: Users,
      title: "No Healthcare",
      description: "Blocked from medical assistance",
    },
    {
      icon: Ban,
      title: "No School Enrollment",
      description: "Children denied education",
    },
    {
      icon: AlertTriangle,
      title: "No Aid Access",
      description: "Cannot receive humanitarian support",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground text-balance">
            Without an ID, aid can't get through.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Over 100 million displaced people face daily barriers—no banking, no healthcare, no school enrollment—simply
            because they lack verifiable identity.
          </p>
        </div>

        {/* Barriers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {barriers.map((barrier, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto">
                <barrier.icon className="h-8 w-8 text-destructive" />
              </div>
              <h3 className="font-semibold text-foreground">{barrier.title}</h3>
              <p className="text-sm text-muted-foreground">{barrier.description}</p>
            </div>
          ))}
        </div>

        {/* Infographic */}
        <div className="bg-card rounded-2xl p-8 border border-border">
          <div className="flex items-center justify-center space-x-8 overflow-x-auto">
            <div className="flex flex-col items-center space-y-2 min-w-0">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-secondary-foreground" />
              </div>
              <span className="text-sm font-medium text-center">Refugee Journey</span>
            </div>

            <div className="flex-1 h-px bg-border min-w-8"></div>

            <div className="flex flex-col items-center space-y-2 min-w-0">
              <div className="w-12 h-12 bg-destructive rounded-full flex items-center justify-center">
                <Ban className="h-6 w-6 text-destructive-foreground" />
              </div>
              <span className="text-sm font-medium text-center">ID Checkpoint</span>
            </div>

            <div className="flex-1 h-px bg-border min-w-8"></div>

            <div className="flex flex-col items-center space-y-2 min-w-0">
              <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 text-muted-foreground" />
              </div>
              <span className="text-sm font-medium text-center">Services Blocked</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
