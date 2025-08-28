export function TrustSection() {
  const partners = [
    { name: "UNHCR", status: "In Discussion" },
    { name: "ICRC", status: "In Discussion" },
    { name: "WFP", status: "In Discussion" },
    { name: "UNICEF", status: "In Discussion" },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground text-balance">
            Built on Trust, Backed by Expertise.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Working with leading humanitarian organizations to ensure our solution meets real-world needs.
          </p>
        </div>

        {/* Partner Logos */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {partners.map((partner, index) => (
            <div key={index} className="bg-card rounded-xl p-8 border border-border text-center space-y-4">
              <div className="w-16 h-16 bg-muted rounded-lg mx-auto flex items-center justify-center">
                <span className="font-bold text-muted-foreground text-lg">{partner.name}</span>
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-foreground">{partner.name}</h3>
                <p className="text-xs text-muted-foreground">{partner.status}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Placeholder */}
        <div className="bg-card rounded-2xl p-8 border border-border">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-muted rounded-full mx-auto"></div>
            <blockquote className="text-lg text-muted-foreground italic">
              "Testimonials from humanitarian partners will be featured here as we expand our partnerships."
            </blockquote>
            <div className="space-y-1">
              <p className="font-semibold text-foreground">Partner Testimonial</p>
              <p className="text-sm text-muted-foreground">Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
