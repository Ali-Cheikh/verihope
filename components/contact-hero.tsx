import { MessageCircle, Phone, Mail } from "lucide-react"

export function ContactHero() {
  return (
    <section className="relative bg-gradient-to-br from-secondary/5 via-background to-primary/5 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium">
              <MessageCircle className="h-4 w-4" />
              Get in Touch
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Contact VeriHope
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty max-w-3xl mx-auto">
              Whether you're a humanitarian organization, a potential partner, or someone who needs our services, we're
              here to help. Reach out to us today.
            </p>
          </div>

          {/* Quick Contact Options */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-card rounded-xl p-6 border border-border text-center space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-1">
                <div className="font-semibold text-foreground">Call Us</div>
                <div className="text-sm text-muted-foreground">+216 55 123 567</div>
              </div>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border text-center space-y-3">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto">
                <Mail className="h-6 w-6 text-secondary" />
              </div>
              <div className="space-y-1">
                <div className="font-semibold text-foreground">Email Us</div>
                <div className="text-sm text-muted-foreground">hello@verihope.org</div>
              </div>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border text-center space-y-3">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto">
                <MessageCircle className="h-6 w-6 text-accent" />
              </div>
              <div className="space-y-1">
                <div className="font-semibold text-foreground">Live Chat</div>
                <div className="text-sm text-muted-foreground">Available 24/7</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
