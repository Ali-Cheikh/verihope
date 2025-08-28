import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { OrganizationsHero } from "@/components/organizations-hero"
import { OrganizationsBenefits } from "@/components/organizations-benefits"
import { OrganizationsStats } from "@/components/organizations-stats"
import { OrganizationsCTA } from "@/components/organizations-cta"

export default function OrganizationsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <OrganizationsHero />
      <OrganizationsBenefits />
      <OrganizationsStats />
      <OrganizationsCTA />
      <Footer />
    </main>
  )
}
