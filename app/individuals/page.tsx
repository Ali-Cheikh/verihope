import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { IndividualsHero } from "@/components/individuals-hero"
import { IndividualsBenefits } from "@/components/individuals-benefits"
import { IndividualsSteps } from "@/components/individuals-steps"
import { IndividualsCTA } from "@/components/individuals-cta"

export default function IndividualsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <IndividualsHero />
      <IndividualsBenefits />
      <IndividualsSteps />
      <IndividualsCTA />
      <Footer />
    </main>
  )
}
