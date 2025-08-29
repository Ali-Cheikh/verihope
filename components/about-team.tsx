import { Button } from "@/components/ui/button"
import { ArrowRight, Linkedin, Mail } from "lucide-react"

export function AboutTeam() {
  const team = [
    {
      name: "Salma Ayari",
      role: "CEO & Co-Founder",
      bio: "MSB Student",
      image: "/professional-woman-ceo-humanitarian-technology.png",
    },
    {
      name: "Ali Cheikh",
      role: "CTO & Co-Founder",
      bio: "MedTech Student",
      image: "/professional-man-cto-blockchain-engineer.png",
    },
    {
      name: "Yosr Jabrouni",
      role: "Head of Marketing",
      bio: "MSB Student",
      image: "/professional-woman-researcher-digital-rights-phd.png",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground text-balance">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            A diverse team of technologists, humanitarian experts, and advocates united by a shared mission.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {team.map((member, index) => (
            <div key={index} className="bg-card rounded-2xl p-6 border border-border text-center space-y-6">
              <div className="aspect-square bg-muted rounded-xl overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={`${member.name}, ${member.role}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                </div>
                <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
                <div className="flex justify-center gap-3">
                  <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-primary">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-primary">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="bg-gradient-to-br from-secondary/5 to-primary/5 rounded-2xl p-8 text-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Join Our Mission</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're always looking for passionate individuals who want to use technology to make a difference in the
                world. Join us in building the future of digital identity.
              </p>
            </div>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              View Open Positions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}