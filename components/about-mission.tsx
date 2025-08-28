import { Target, Eye, Compass } from "lucide-react"

export function AboutMission() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground text-balance">Our Mission</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            We exist to restore dignity and agency to displaced people through secure, self-sovereign digital identity.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="bg-card rounded-2xl p-8 border border-border text-center space-y-6">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                Empower displaced people with secure, portable digital identity that works across borders and
                organizations, ensuring access to essential services while protecting privacy and dignity.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-card rounded-2xl p-8 border border-border text-center space-y-6">
            <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto">
              <Eye className="h-8 w-8 text-secondary" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                A world where every person has control over their digital identity, where displacement doesn't mean
                losing access to services, and where technology serves humanity's most vulnerable.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="bg-card rounded-2xl p-8 border border-border text-center space-y-6">
            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto">
              <Compass className="h-8 w-8 text-accent" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Approach</h3>
              <p className="text-muted-foreground leading-relaxed">
                Human-centered design meets cutting-edge technology. We build with displaced communities, not for them,
                ensuring our solutions address real needs with cultural sensitivity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
