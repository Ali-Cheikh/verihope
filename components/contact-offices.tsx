import { MapPin, Phone, Mail } from "lucide-react"

export function ContactOffices() {
  const offices = [
    {
      city: "Geneva",
      country: "Switzerland",
      address: "123 Humanitarian Way, Geneva 1202, Switzerland",
      phone: "+41 22 123 4567",
      email: "geneva@verihope.org",
      description: "Global headquarters and humanitarian partnerships",
    },
    {
      city: "New York",
      country: "United States",
      address: "456 Tech Avenue, New York, NY 10001, USA",
      phone: "+216 55 123 567",
      email: "newyork@verihope.org",
      description: "Technology development and US operations",
    },
    {
      city: "Nairobi",
      country: "Kenya",
      address: "789 Innovation Street, Nairobi 00100, Kenya",
      phone: "+254 20 123 4567",
      email: "nairobi@verihope.org",
      description: "Field operations and community engagement",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Our Global Offices</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            We have offices around the world to better serve our global community.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <div key={index} className="bg-card rounded-2xl p-8 border border-border text-center space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-foreground">
                  {office.city}, {office.country}
                </h3>
                <p className="text-sm text-muted-foreground">{office.description}</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground text-left">{office.address}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                  <p className="text-sm text-foreground font-medium">{office.phone}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                  <p className="text-sm text-foreground font-medium">{office.email}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
