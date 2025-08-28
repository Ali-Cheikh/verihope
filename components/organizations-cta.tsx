import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Download, Calendar, MessageSquare } from "lucide-react"

export function OrganizationsCTA() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - CTAs */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
                Ready to Transform Your Operations?
              </h2>
              <p className="text-xl text-muted-foreground text-pretty">
                Join leading humanitarian organizations in revolutionizing aid delivery with secure digital identity.
              </p>
            </div>

            {/* Primary CTAs */}
            <div className="space-y-4">
              <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <Calendar className="mr-2 h-5 w-5" />
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Whitepaper
              </Button>
            </div>

            {/* What to Expect */}
            <div className="bg-card rounded-xl p-6 border border-border space-y-4">
              <h3 className="font-semibold text-foreground flex items-center">
                <MessageSquare className="mr-2 h-5 w-5 text-primary" />
                What to Expect
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  30-minute personalized demo of VeriHope platform
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Discussion of your specific use cases and requirements
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Custom implementation timeline and pricing
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-foreground">Get Started Today</h3>
                <p className="text-muted-foreground">
                  Tell us about your organization and we'll get back to you within 24 hours.
                </p>
              </div>

              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">First Name</label>
                    <Input placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Last Name</label>
                    <Input placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Organization</label>
                  <Input placeholder="Your organization name" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <Input type="email" placeholder="your.email@organization.org" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">How can we help?</label>
                  <Textarea
                    placeholder="Tell us about your current challenges and how VeriHope might help..."
                    rows={4}
                  />
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
