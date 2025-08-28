import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TechnologyHero } from "@/components/technology-hero"
import { TechnologyFeatures } from "@/components/technology-features"
import { TechnologySpecs } from "@/components/technology-specs"
import { TechnologySecurity } from "@/components/technology-security"

export default function TechnologyPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <TechnologyHero />
      <TechnologyFeatures />
      <TechnologySecurity />
      <TechnologySpecs />
      <Footer />
    </main>
  )
}
