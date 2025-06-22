"use client"

import SubcategoryNavigation from "@/components/subcategory-navigation"
import SubcategoryGrid from "@/components/subcategory-grid"
import { useLanguage } from "@/contexts/language-context"

export default function CategoriesPage() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col min-h-screen">
      <SubcategoryNavigation />
      <div className="flex-1">
        <div className="container px-4 py-8 md:px-6 md:py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">{t("categories")}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              აღმოაჩინეთ ჩვენი სრული პროდუქტების კოლექცია კატეგორიების მიხედვით
            </p>
          </div>
          <SubcategoryGrid />
        </div>
      </div>
    </div>
  )
}
