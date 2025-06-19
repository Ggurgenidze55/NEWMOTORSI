"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"

export default function SubcategoryGrid() {
  const { t } = useLanguage()

  const subcategories = [
    {
      id: "shelving",
      name: t("shelving"),
      description: "მაღალი ხარისხის სტელაჟები მაღაზიებისა და საწყობებისთვის",
      image: "/placeholder.svg?height=200&width=300&text=Shelving",
      href: "/categories/shelving",
      count: 5,
      featured: true,
    },
    {
      id: "market-shelves",
      name: t("marketShelves"),
      description: "საგამოფენო თაროები პროდუქტების ეფექტური წარმოსაჩენად",
      image: "/placeholder.svg?height=200&width=300&text=Market+Shelves",
      href: "/categories/market-shelves",
      count: 0,
      featured: false,
    },
    {
      id: "market-accessories",
      name: t("marketAccessories"),
      description: "მარკეტის აქსესუარები და დამხმარე მასალები",
      image: "/placeholder.svg?height=200&width=300&text=Accessories",
      href: "/categories/market-accessories",
      count: 0,
      featured: false,
    },
    {
      id: "pos-materials",
      name: t("posMaterials"),
      description: "POS მასალები და რეკლამის სტენდები",
      image: "/placeholder.svg?height=200&width=300&text=POS+Materials",
      href: "/categories/pos-materials",
      count: 3,
      featured: false,
    },
    {
      id: "trolleys",
      name: t("trolleys"),
      description: "საყიდლების ურიკები და კალათები",
      image: "/placeholder.svg?height=200&width=300&text=Trolleys",
      href: "/categories/trolleys",
      count: 0,
      featured: false,
    },
    {
      id: "trash-bins",
      name: t("trashBins"),
      description: "კომერციული ნაგვის ურნები და კონტეინერები",
      image: "/placeholder.svg?height=200&width=300&text=Trash+Bins",
      href: "/categories/trash-bins",
      count: 0,
      featured: false,
    },
  ]

  return (
    <section className="w-full py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">{t("categories")}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("categoriesDescription")}</p>
          </div>

          {/* Featured Categories */}
          <div>
            <h3 className="text-xl font-semibold mb-6">პოპულარული კატეგორიები</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {subcategories
                .filter((cat) => cat.featured)
                .map((subcategory) => (
                  <Card key={subcategory.id} className="group hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <Link href={subcategory.href}>
                        <div className="aspect-[3/2] overflow-hidden rounded-t-lg">
                          <Image
                            src={subcategory.image || "/placeholder.svg"}
                            alt={subcategory.name}
                            width={300}
                            height={200}
                            className="h-full w-full object-cover transition-transform group-hover:scale-105"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-lg font-semibold">{subcategory.name}</h4>
                            <span className="text-sm text-muted-foreground">
                              {subcategory.count} {t("products")}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mb-4">{subcategory.description}</p>
                          <Button
                            variant="outline"
                            size="sm"
                            className="group-hover:bg-primary group-hover:text-primary-foreground"
                          >
                            {t("viewAll")}
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Button>
                        </div>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>

          {/* All Categories Grid */}
          <div>
            <h3 className="text-xl font-semibold mb-6">ყველა კატეგორია</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {subcategories.map((subcategory) => (
                <Link
                  key={subcategory.id}
                  href={subcategory.href}
                  className="group p-4 rounded-lg border hover:border-primary transition-colors text-center"
                >
                  <div className="aspect-square w-16 mx-auto mb-3 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10">
                    <Image
                      src={subcategory.image || "/placeholder.svg"}
                      alt={subcategory.name}
                      width={40}
                      height={40}
                      className="rounded"
                    />
                  </div>
                  <h4 className="font-medium text-sm mb-1">{subcategory.name}</h4>
                  <p className="text-xs text-muted-foreground">
                    {subcategory.count} {t("products")}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
