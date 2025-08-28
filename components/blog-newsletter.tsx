import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Mail } from "lucide-react"

export function BlogNewsletter() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Stay Informed</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Get the latest updates on digital identity, humanitarian technology, and our mission delivered to your
              inbox.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <Input type="email" placeholder="Enter your email" className="flex-1 bg-background border-border" />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              No spam, unsubscribe at any time. Read our privacy policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
