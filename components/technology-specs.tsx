import { Code, Cpu, Globe, Zap } from "lucide-react"

export function TechnologySpecs() {
  const specs = [
    {
      category: "Blockchain",
      items: [
        { label: "Consensus Algorithm", value: "Proof of Authority" },
        { label: "Block Time", value: "3 seconds" },
        { label: "Transaction Throughput", value: "10,000+ TPS" },
        { label: "Network Type", value: "Permissioned" },
      ],
    },
    {
      category: "Security",
      items: [
        { label: "Encryption", value: "AES-256 + RSA-4096" },
        { label: "Key Management", value: "Hardware Security Modules" },
        { label: "Authentication", value: "Multi-factor + Biometric" },
        { label: "Compliance", value: "GDPR, SOC 2, ISO 27001" },
      ],
    },
    {
      category: "Performance",
      items: [
        { label: "API Response Time", value: "< 100ms" },
        { label: "Uptime SLA", value: "99.9%" },
        { label: "Global CDN", value: "150+ Edge Locations" },
        { label: "Concurrent Users", value: "10M+" },
      ],
    },
    {
      category: "Integration",
      items: [
        { label: "API Standard", value: "REST + GraphQL" },
        { label: "SDKs Available", value: "iOS, Android, Web, Node.js" },
        { label: "Webhook Support", value: "Real-time Events" },
        { label: "Standards", value: "W3C DID, VC, OpenID Connect" },
      ],
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground text-balance">Technical Specifications</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Built for enterprise scale with humanitarian values. Here are the technical details that power VeriHope.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specs.map((spec, index) => (
            <div key={index} className="bg-card rounded-2xl p-6 border border-border">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    {index === 0 && <Code className="h-5 w-5 text-primary" />}
                    {index === 1 && <Zap className="h-5 w-5 text-primary" />}
                    {index === 2 && <Cpu className="h-5 w-5 text-primary" />}
                    {index === 3 && <Globe className="h-5 w-5 text-primary" />}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{spec.category}</h3>
                </div>
                <div className="space-y-4">
                  {spec.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="space-y-1">
                      <div className="text-sm font-medium text-muted-foreground">{item.label}</div>
                      <div className="text-sm text-foreground font-medium">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
