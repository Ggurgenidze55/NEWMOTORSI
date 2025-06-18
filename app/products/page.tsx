"use client"

import ProductCard from "@/components/product-card"
import CategoryBanner from "@/components/category-banner"
import { useLanguage } from "@/contexts/language-context"
import SubcategoryNavigation from "@/components/subcategory-navigation"

export default function ProductsPage() {
  const { t, language } = useLanguage()

  // This would typically come from an API or database
  const products = [
    // First warehouse shelving product
    {
      id: "warehouse-1",
      name: t("warehouseShelvingUnit"),
      price: 450.0,
      image: "/images/blue-warehouse-shelving.png",
      category: t("warehouseShelving"),
      subcategory: "warehouse-shelving",
      isNew: true,
    },
    // Second warehouse shelving product
    {
      id: "warehouse-2",
      name: t("warehouseShelvingUnit"),
      price: 420.0,
      image: "/images/blue-orange-warehouse-shelving.jpg",
      category: t("warehouseShelving"),
      subcategory: "warehouse-shelving",
      isNew: true,
    },
    // Third warehouse shelving product
    {
      id: "warehouse-3",
      name: t("warehouseShelvingUnit"),
      price: 480.0,
      image: "/images/gray-warehouse-shelving.jpg",
      category: t("warehouseShelving"),
      subcategory: "warehouse-shelving",
      isNew: true,
    },
    // Fourth warehouse shelving product
    {
      id: "warehouse-4",
      name: t("warehouseShelvingUnit"),
      price: 520.0,
      image: "/images/tall-warehouse-shelving.jpg",
      category: t("warehouseShelving"),
      subcategory: "warehouse-shelving",
      isNew: true,
    },
    // Tire shelving product
    {
      id: "tire-shelving-1",
      name: t("tireShelvingUnit"),
      price: 680.0,
      image: "/images/tire-shelving-1.png",
      category: t("tireShelving"),
      subcategory: "tire-shelving",
      isNew: true,
    },
    // Clothing shelving product
    {
      id: "clothing-shelving-1",
      name: t("clothingShelvingUnit"),
      price: 380.0,
      image: "/images/clothing-rack-1.jpg",
      category: t("clothingShelving"),
      subcategory: "clothing-shelving",
      isNew: true,
    },
    // Aluminum rail product
    {
      id: "aluminum-rail-1",
      name: t("aluminumRailUnit"),
      price: 45.0,
      image: "/images/aluminum-rail-3.jpg",
      category: t("marketAccessories"),
      subcategory: "market-accessories",
      isNew: true,
    },
    // Perforated profile product
    {
      id: "perforated-profile-1",
      name: t("perforatedProfileUnit"),
      price: 85.0,
      image: "/images/perforated-profile-2.jpg",
      category: t("marketShelves"),
      subcategory: "market-shelves",
      isNew: true,
    },
    // Accessory holder product
    {
      id: "accessory-holder-1",
      name: t("accessoryHolderUnit"),
      price: 35.0,
      image: "/images/accessory-holder-1.jpg",
      category: t("marketAccessories"),
      subcategory: "market-accessories",
      isNew: true,
    },
    // Perforated wall product
    {
      id: "perforated-wall-1",
      name: t("perforatedWallUnit"),
      price: 180.0,
      image: "/images/perforated-wall-1.jpg",
      category: t("marketAccessories"),
      subcategory: "market-accessories",
      isNew: true,
    },
    // Shelf divider product
    {
      id: "shelf-divider-1",
      name: t("shelfDividerUnit"),
      price: 25.0,
      image: "/images/shelf-divider-1.jpg",
      category: t("warehouseShelving"),
      subcategory: "warehouse-shelving",
      isNew: true,
    },
    // Wall grid display product
    {
      id: "wall-grid-display-1",
      name: t("wallGridDisplayUnit"),
      price: 120.0,
      image: "/images/wall-grid-display-1.jpg",
      category: t("marketAccessories"),
      subcategory: "market-accessories",
      isNew: true,
    },
  ]

  const getBannerTitle = () => {
    switch (language) {
      case "en":
        return "All Categories"
      case "ru":
        return "Все Категории"
      default:
        return "ყველა კატეგორია"
    }
  }

  const getBannerSubtitle = () => {
    switch (language) {
      case "en":
        return "Professional shelving and warehouse equipment"
      case "ru":
        return "Профессиональные стеллажи и складское оборудование"
      default:
        return "პროფესიონალური სტელაჟები და საწყობის აღჭურვილობა"
    }
  }

  return (
    <div className="bg-white min-h-screen">
      <SubcategoryNavigation />
      <CategoryBanner title={getBannerTitle()} subtitle={getBannerSubtitle()} />
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">{t("products")}</h2>
            <p className="text-muted-foreground">{t("categoriesDescription")}</p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} hidePrice={true} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
