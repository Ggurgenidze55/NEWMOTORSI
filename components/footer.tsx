"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import LogoFallback from "@/components/logo-fallback"
import { useLanguage } from "@/contexts/language-context"

export default function Footer() {
  const { t } = useLanguage()
  const [logoError, setLogoError] = useState(false)

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              {!logoError ? (
                <Image
                  src="/images/new-motorsi-logo.png"
                  alt="New Motorsi Logo"
                  width={220}
                  height={75}
                  className="h-16 w-auto brightness-0 invert"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <LogoFallback isFooter={true} />
              )}
            </div>
            <p className="text-gray-300 max-w-md leading-relaxed mb-6">{t("companyDescription")}</p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <span className="text-white text-sm font-bold">f</span>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <span className="text-white text-sm font-bold">in</span>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <span className="text-white text-sm font-bold">@</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">{t("company")}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-primary transition-colors">
                  {t("aboutUs")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-primary transition-colors">
                  {t("contact")}
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-primary transition-colors">
                  {t("careers")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">მხარდაჭერა</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-primary transition-colors">
                  {t("faq")}
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-300 hover:text-primary transition-colors">
                  {t("shipping")}
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-300 hover:text-primary transition-colors">
                  {t("returns")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">© 2024 ნიუ მოტორსი. ყველა უფლება დაცულია.</p>
        </div>
      </div>
    </footer>
  )
}
