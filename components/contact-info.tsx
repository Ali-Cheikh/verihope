import { Clock, Globe, Headphones, Shield } from "lucide-react"

export function ContactInfo() {
  const supportOptions = [
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Our support team is available around the clock",
      details: "Available in 15+ languages",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Shield,
      title: "Emergency Support",
      description: "Critical issues get immediate attention",
      details: "Response within 1 hour",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Supporting organizations worldwide",
      details: "50+ countries served",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Clock,
      title: "Quick Response",
      description: "We respond to all inquiries promptly",
      details: "Average response: 2 hours",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">How we can help</h2>
            <p className="text-muted-foreground">
              We're committed to providing exceptional support to all our users and partners.
            </p>
          </div>

          <div className="space-y-6">
            {supportOptions.map((option, index) => (
              <div key={index} className="bg-card rounded-xl p-6 border border-border">
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-12 h-12 rounded-lg ${option.bgColor} flex items-center justify-center ${option.color}`}
                  >
                    <option.icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="text-lg font-semibold text-foreground">{option.title}</h3>
                    <p className="text-muted-foreground">{option.description}</p>
                    <p className="text-sm font-medium text-primary">{option.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Contact Info */}
          <div className="bg-card rounded-xl p-6 border border-border">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Other Ways to Reach Us</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">General Inquiries:</span>
                  <span className="text-foreground font-medium">hello@verihope.org</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Partnership:</span>
                  <span className="text-foreground font-medium">partners@verihope.org</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Media Inquiries:</span>
                  <span className="text-foreground font-medium">media@verihope.org</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Technical Support:</span>
                  <span className="text-foreground font-medium">support@verihope.org</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
