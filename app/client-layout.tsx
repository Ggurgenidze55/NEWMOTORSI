"use client"

import type React from "react"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"
import Header from "@/components/header"
import Footer from "@/components/footer"
import DynamicHead from "@/components/dynamic-head"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <LanguageProvider>
      <DynamicHead />
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <div className="flex flex-col min-h-screen bg-white">
          <Header />
          <main className="flex-1 bg-white">{children}</main>
          <Footer />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  )
}
