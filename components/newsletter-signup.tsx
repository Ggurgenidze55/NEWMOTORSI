"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/contexts/language-context"

export default function NewsletterSignup() {
  const { t } = useLanguage()

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{t("newsletterTitle")}</h2>
            <p className="max-w-[600px] text-primary-foreground/80 md:text-xl">{t("newsletterDescription")}</p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form className="flex space-x-2">
              <Input
                type="email"
                placeholder={t("emailPlaceholder")}
                className="max-w-lg flex-1 bg-primary-foreground text-foreground"
              />
              <Button type="submit" variant="secondary">
                {t("subscribe")}
              </Button>
            </form>
            <p className="text-xs text-primary-foreground/70">
              {t("privacyText")}{" "}
              <Link href="/privacy" className="underline underline-offset-2">
                {t("privacyPolicy")}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
