import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { AboutMission } from "@/components/about-mission"
import { AboutTeam } from "@/components/about-team"
import { AboutValues } from "@/components/about-values"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <AboutHero />
      <AboutMission />
      <AboutValues />
      <AboutTeam />
      <Footer />
    </main>
  )
}
