import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import ClientLayout from "./client-layout"

const inter = Inter({ subsets: ["latin"] })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://newmotorsi.ge"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ნიუ მოტორსი - სტელაჟები და საწყობის აღჭურვილობა",
    template: "%s | ნიუ მოტორსი",
  },
  description:
    "პროფესიონალური სტელაჟები, მარკეტის თაროები და საწყობის აღჭურვილობა საქართველოში. მაღალი ხარისხი და საუკეთესო ფასები.",
  alternates: {
    canonical: "/",
    languages: {
      ka: "/",
      en: "/en",
      ru: "/ru",
    },
  },
  openGraph: {
    title: "ნიუ მოტორსი - სტელაჟები და საწყობის აღჭურვილობა",
    description: "პროფესიონალური სტელაჟები, მარკეტის თაროები და საწყობის აღჭურვილობა საქართველოში.",
    url: siteUrl,
    siteName: "ნიუ მოტორსი",
    images: [
      {
        url: `/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: "ნიუ მოტორსის საწყობის სტელაჟები",
      },
    ],
    locale: "ka_GE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ნიუ მოტორსი - სტელაჟები და საწყობის აღჭურვილობა",
    description: "პროფესიონალური სტელაჟები, მარკეტის თაროები და საწყობის აღჭურვილობა საქართველოში.",
    images: [`${siteUrl}/images/og-image.png`],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ნიუ მოტორსი",
    url: siteUrl,
    logo: `${siteUrl}/images/new-motorsi-logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+995-577-03-43-93", // Actual phone from footer
      contactType: "Customer Service",
      areaServed: "GE",
      availableLanguage: ["Georgian", "English", "Russian"],
    },
    sameAs: [
      "https://www.facebook.com/newmotors.ge/", // Actual Facebook from footer
    ],
  }

  return (
    <html lang="ka">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`${inter.className} bg-white`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}

import "./globals.css"
