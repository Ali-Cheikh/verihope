import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock } from "lucide-react"

export function BlogFeatured() {
  const featuredPost = {
    title: "The Future of Digital Identity in Humanitarian Aid",
    excerpt:
      "How blockchain technology and self-sovereign identity are revolutionizing aid delivery and empowering displaced communities with unprecedented control over their personal data.",
    author: "Dr. Amara Okafor",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Technology",
    image: "/blog-featured-digital-identity-humanitarian-aid.png",
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Featured Article</h2>
        </div>

        <div className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image */}
            <div className="aspect-video lg:aspect-square bg-muted">
              <img
                src={featuredPost.image || "/placeholder.svg"}
                alt={featuredPost.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {featuredPost.category}
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground leading-tight text-balance">
                  {featuredPost.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">{featuredPost.excerpt}</p>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <div className="text-sm font-medium text-foreground">{featuredPost.author}</div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                </div>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
