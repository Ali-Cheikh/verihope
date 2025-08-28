import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, MessageCircle, Download } from "lucide-react"

export function IndividualsCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary/5 to-accent/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground text-balance">Ready to Take Control?</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Join thousands who have already secured their digital identity with VeriHope. Your journey to empowerment
              starts here.
            </p>
          </div>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              <Download className="mr-2 h-5 w-5" />
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Learn More
            </Button>
          </div>

          {/* Support Info */}
          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <MessageCircle className="h-5 w-5" />
                <span className="font-medium">Need Help?</span>
              </div>
              <p className="text-muted-foreground">
                Our support team speaks your language and understands your needs. Available 24/7 to help you get
                started.
              </p>
              <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
