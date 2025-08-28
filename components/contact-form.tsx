import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight } from "lucide-react"

export function ContactForm() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Send us a message</h2>
            <p className="text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours.</p>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-sm font-medium text-foreground">
                  First Name *
                </label>
                <Input id="firstName" placeholder="Enter your first name" className="bg-background border-border" />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="text-sm font-medium text-foreground">
                  Last Name *
                </label>
                <Input id="lastName" placeholder="Enter your last name" className="bg-background border-border" />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Email Address *
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
                className="bg-background border-border"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="organization" className="text-sm font-medium text-foreground">
                Organization
              </label>
              <Input
                id="organization"
                placeholder="Enter your organization name"
                className="bg-background border-border"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="inquiryType" className="text-sm font-medium text-foreground">
                Inquiry Type *
              </label>
              <Select>
                <SelectTrigger className="bg-background border-border">
                  <SelectValue placeholder="Select inquiry type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                  <SelectItem value="demo">Request Demo</SelectItem>
                  <SelectItem value="support">Technical Support</SelectItem>
                  <SelectItem value="media">Media Inquiry</SelectItem>
                  <SelectItem value="general">General Question</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                Message *
              </label>
              <Textarea
                id="message"
                placeholder="Tell us more about your inquiry..."
                rows={6}
                className="bg-background border-border resize-none"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="privacy"
                  className="mt-1 h-4 w-4 text-primary border-border rounded focus:ring-primary"
                />
                <label htmlFor="privacy" className="text-sm text-muted-foreground">
                  I agree to the{" "}
                  <a href="#" className="text-primary hover:underline">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-primary hover:underline">
                    Terms of Service
                  </a>
                  .
                </label>
              </div>

              <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Send Message
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
