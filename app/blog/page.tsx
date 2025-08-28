import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BlogHero } from "@/components/blog-hero"
import { BlogFeatured } from "@/components/blog-featured"
import { BlogGrid } from "@/components/blog-grid"
import { BlogNewsletter } from "@/components/blog-newsletter"

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <BlogHero />
      <BlogFeatured />
      <BlogGrid />
      <BlogNewsletter />
      <Footer />
    </main>
  )
}
