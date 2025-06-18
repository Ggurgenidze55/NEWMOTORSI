import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import ClientLayout from "./client-layout"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ნიუ მოტორსი - სტელაჟები და საწყობის აღჭურვილობა",
  description: "პროფესიონალური სტელაჟები, მარკეტის თაროები და საწყობის აღჭურვილობა საქართველოში",
  generator: "v0.dev",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ka">
      <body className={`${inter.className} bg-white`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}


import './globals.css'
