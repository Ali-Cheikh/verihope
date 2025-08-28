import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock } from "lucide-react"

export function BlogGrid() {
  const posts = [
    {
      title: "Partnership Announcement: UNHCR Pilot Program",
      excerpt: "VeriHope selected for groundbreaking digital identity pilot program across three refugee camps.",
      author: "Sarah Chen",
      date: "March 10, 2024",
      readTime: "5 min read",
      category: "Company News",
      image: "/blog-unhcr-partnership-announcement.png",
    },
    {
      title: "Privacy by Design: Our Technical Approach",
      excerpt: "Deep dive into how we implement zero-knowledge proofs and end-to-end encryption.",
      author: "Marcus Rodriguez",
      date: "March 5, 2024",
      readTime: "12 min read",
      category: "Technology",
      image: "/blog-privacy-by-design-technical-approach.png",
    },
    {
      title: "Voices from the Field: User Stories",
      excerpt: "Real stories from refugees who have used VeriHope to access essential services.",
      author: "Community Team",
      date: "February 28, 2024",
      readTime: "7 min read",
      category: "Impact",
      image: "/blog-user-stories-refugee-voices.png",
    },
    {
      title: "The Economics of Digital Identity",
      excerpt: "How digital identity systems can reduce costs while improving outcomes for humanitarian organizations.",
      author: "Dr. Amara Okafor",
      date: "February 20, 2024",
      readTime: "10 min read",
      category: "Research",
      image: "/blog-economics-digital-identity-humanitarian.png",
    },
    {
      title: "Building Trust in Crisis Situations",
      excerpt: "The importance of transparent, accountable technology in humanitarian contexts.",
      author: "Sarah Chen",
      date: "February 15, 2024",
      readTime: "6 min read",
      category: "Thought Leadership",
      image: "/blog-building-trust-crisis-situations.png",
    },
    {
      title: "Technical Update: Platform Security Enhancements",
      excerpt: "Latest security improvements and infrastructure updates to the VeriHope platform.",
      author: "Marcus Rodriguez",
      date: "February 10, 2024",
      readTime: "8 min read",
      category: "Technology",
      image: "/blog-platform-security-enhancements.png",
    },
  ]

  const categories = ["All", "Company News", "Technology", "Impact", "Research", "Thought Leadership"]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={
                  index === 0 ? "bg-primary hover:bg-primary/90 text-primary-foreground" : "border-border hover:bg-card"
                }
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article
                key={index}
                className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-muted">
                  <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 space-y-4">
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground leading-tight text-balance">{post.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{post.excerpt}</p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="space-y-1">
                      <div className="text-xs font-medium text-foreground">{post.author}</div>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                    <Button size="sm" variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              Load More Articles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
