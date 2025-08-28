import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "VeriHope - Digital Identity for Refugees | Secure Blockchain ID Wallet",
  description:
    "VeriHope provides secure, blockchain-based digital identity solutions for refugees and humanitarian organizations. Restore dignity through portable, private digital ID.",
  keywords: "digital identity, refugees, blockchain, humanitarian aid, secure ID, portable identity, VeriHope",
  authors: [{ name: "VeriHope" }],
  creator: "VeriHope",
  publisher: "VeriHope",
  openGraph: {
    title: "VeriHope - Digital Identity for Refugees",
    description:
      "Secure, blockchain-based digital identity solutions empowering refugees and enabling efficient aid delivery.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "VeriHope - Digital Identity for Refugees",
    description:
      "Secure, blockchain-based digital identity solutions empowering refugees and enabling efficient aid delivery.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>{children}</body>
    </html>
  )
}
