"use client"

import ProductCard from "@/components/product-card"
import { useLanguage } from "@/contexts/language-context"

export default function FeaturedProducts() {
  const { t } = useLanguage()

  // This would typically come from an API or database
  const products = [
    {
      id: "warehouse-1",
      name: t("warehouseShelvingUnit"),
      price: 450.0,
      image: "/images/blue-warehouse-shelving.png",
      category: t("warehouseShelving"),
      isNew: true,
    },
    {
      id: "perforated-profile-1",
      name: t("perforatedProfileUnit"),
      price: 85.0,
      image: "/images/perforated-profile-2.jpg",
      category: t("marketShelves"),
      isNew: true,
    },
    {
      id: "clothing-shelving-1",
      name: t("clothingShelvingUnit"),
      price: 380.0,
      image: "/images/clothing-rack-1.jpg",
      category: t("clothingShelving"),
      isNew: true,
    },
    {
      id: "aluminum-rail-1",
      name: t("aluminumRailUnit"),
      price: 45.0,
      image: "/images/aluminum-rail-3.jpg",
      category: t("marketAccessories"),
      isNew: true,
    },
  ]

  return (
    <section className="w-full py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-4 md:gap-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{t("featuredProducts")}</h2>
              <p className="text-muted-foreground">{t("featuredDescription")}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
