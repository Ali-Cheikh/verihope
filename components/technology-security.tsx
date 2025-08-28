import { Shield, Eye, Key, Server } from "lucide-react"

export function TechnologySecurity() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground text-balance">Security First</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Your security is our top priority. Here's how we protect your digital identity at every level.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Security Features */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2 flex-1">
                  <h3 className="text-xl font-semibold text-foreground">End-to-End Encryption</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Your data is encrypted before it leaves your device and remains encrypted throughout transmission
                    and storage. Only you hold the keys.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <Eye className="h-6 w-6 text-secondary" />
                </div>
                <div className="space-y-2 flex-1">
                  <h3 className="text-xl font-semibold text-foreground">Zero-Knowledge Proofs</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Prove your identity without revealing personal information. Organizations can verify you're eligible
                    for services without seeing your data.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Key className="h-6 w-6 text-accent" />
                </div>
                <div className="space-y-2 flex-1">
                  <h3 className="text-xl font-semibold text-foreground">Self-Sovereign Identity</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You own and control your identity completely. No central authority can access, modify, or revoke
                    your digital identity without your permission.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2 flex-1">
                  <h3 className="text-xl font-semibold text-foreground">Distributed Infrastructure</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    No single point of failure. Your identity data is distributed across a secure network, ensuring
                    availability even in crisis situations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Security Visualization */}
          <div className="relative">
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <h4 className="text-lg font-semibold text-foreground">Security Layers</h4>
                  <p className="text-sm text-muted-foreground">Multiple layers of protection</p>
                </div>
                <div className="space-y-4">
                  <div className="bg-primary/10 rounded-lg p-4 border-l-4 border-primary">
                    <div className="text-sm font-medium text-foreground">Device Level</div>
                    <div className="text-xs text-muted-foreground">Biometric authentication, secure enclave</div>
                  </div>
                  <div className="bg-secondary/10 rounded-lg p-4 border-l-4 border-secondary">
                    <div className="text-sm font-medium text-foreground">Network Level</div>
                    <div className="text-xs text-muted-foreground">TLS encryption, certificate pinning</div>
                  </div>
                  <div className="bg-accent/10 rounded-lg p-4 border-l-4 border-accent">
                    <div className="text-sm font-medium text-foreground">Data Level</div>
                    <div className="text-xs text-muted-foreground">End-to-end encryption, secure storage</div>
                  </div>
                  <div className="bg-primary/10 rounded-lg p-4 border-l-4 border-primary">
                    <div className="text-sm font-medium text-foreground">Application Level</div>
                    <div className="text-xs text-muted-foreground">Zero-knowledge proofs, access controls</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
