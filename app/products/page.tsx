"use client"

import ProductCard from "@/components/product-card"
import SubcategoryNavigation from "@/components/subcategory-navigation"
import { useLanguage } from "@/contexts/language-context"
import { useEffect } from "react"

export default function ProductsPage() {
  const { t, language } = useLanguage()

  // Update page title for Products page
  useEffect(() => {
    const getPageTitle = () => {
      const baseTitle = {
        ka: "ნიუ მოტორსი - სტელაჟები და საწყობის აღჭურვილობა",
        en: "New Motorsi - Shelving and Warehouse Equipment",
        ru: "Нью Моторси - Стеллажи и складское оборудование",
      }

      const productsTitle = {
        ka: "ყველა პროდუქტი",
        en: "All Products",
        ru: "Все товары",
      }

      return `${productsTitle[language]} | ${baseTitle[language]}`
    }

    document.title = getPageTitle()
  }, [language])

  // This would typically come from an API or database
  const products = [
    // Warehouse shelving
    {
      id: "warehouse-1",
      name: t("warehouseShelvingUnit"),
      price: 450,
      image: "/images/blue-warehouse-shelving.png",
      category: t("warehouseShelving"),
      subcategory: "warehouse-shelving",
      isNew: true,
    },
    {
      id: "warehouse-2",
      name: t("warehouseShelvingUnit"),
      price: 420,
      image: "/images/blue-orange-warehouse-shelving.jpg",
      category: t("warehouseShelving"),
      subcategory: "warehouse-shelving",
      isNew: true,
    },
    {
      id: "warehouse-3",
      name: t("warehouseShelvingUnit"),
      price: 480,
      image: "/images/gray-warehouse-shelving.jpg",
      category: t("warehouseShelving"),
      subcategory: "warehouse-shelving",
      isNew: true,
    },
    {
      id: "warehouse-4",
      name: t("warehouseShelvingUnit"),
      price: 520,
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
      image: "/images/accessory-holder-1.png",
      category: t("marketAccessories"),
      subcategory: "market-accessories",
      isNew: true,
    },
    // Perforated wall product
    {
      id: "perforated-wall-1",
      name: t("perforatedWallUnit"),
      price: 180.0,
      image: "/images/perforated-wall-1.png",
      category: t("marketAccessories"),
      subcategory: "market-accessories",
      isNew: true,
    },
    // Shelf divider product
    {
      id: "shelf-divider-1",
      name: t("shelfDividerUnit"),
      price: 25.0,
      image: "/images/shelf-divider-1.png",
      category: t("warehouseShelving"),
      subcategory: "warehouse-shelving",
      isNew: true,
    },
    // Wall grid display product
    {
      id: "wall-grid-display-1",
      name: t("wallGridDisplayUnit"),
      price: 120.0,
      image: "/images/wall-grid-display-1.png",
      category: t("marketAccessories"),
      subcategory: "market-accessories",
      isNew: true,
    },
    // Perforated wall with cover product
    {
      id: "perforated-wall-cover-1",
      name: t("perforatedWallCoverUnit"),
      price: 150.0,
      image: "/images/perforated-wall-cover-1.jpg",
      category: t("marketAccessories"),
      subcategory: "market-accessories",
      isNew: true,
    },
    // Basket shelving products
    {
      id: "basket-shelving-1",
      name: t("basketShelvingUnit"),
      price: 220.0,
      image: "/images/basket-shelving-white.jpeg",
      category: t("marketShelves"),
      subcategory: "market-shelves",
      isNew: true,
    },
    {
      id: "basket-shelving-2",
      name: t("basketShelvingLargeUnit"),
      price: 280.0,
      image: "/images/basket-shelving-large-white.jpeg",
      category: t("marketShelves"),
      subcategory: "market-shelves",
      isNew: true,
    },
    // Tier shelving products
    {
      id: "tier-shelving-1",
      name: t("tierShelvingUnit"),
      price: 190.0,
      image: "/images/tier-shelving-red.jpeg",
      category: t("marketShelves"),
      subcategory: "market-shelves",
      isNew: true,
    },
    {
      id: "tier-shelving-2",
      name: t("largeTierShelvingUnit"),
      price: 250.0,
      image: "/images/large-tier-shelving-colors.jpeg",
      category: t("marketShelves"),
      subcategory: "market-shelves",
      isNew: true,
    },
    // Pallet shelving products
    {
      id: "pallet-shelving-1",
      name: t("palletShelvingUnit1"),
      price: 850.0,
      image: "/images/pallet-shelving-1.jpg",
      category: t("palletShelving"),
      subcategory: "pallet-shelving",
      isNew: true,
    },
    {
      id: "pallet-shelving-2",
      name: t("palletShelvingUnit2"),
      price: 950.0,
      image: "/images/pallet-shelving-2.jpg",
      category: t("palletShelving"),
      subcategory: "pallet-shelving",
      isNew: true,
    },
    {
      id: "pallet-shelving-3",
      name: t("palletShelvingUnit3"),
      price: 1050.0,
      image: "/images/pallet-shelving-3.jpg",
      category: t("palletShelving"),
      subcategory: "pallet-shelving",
      isNew: true,
    },
    {
      id: "pallet-shelving-4",
      name: t("palletShelvingUnit4"),
      price: 1250.0,
      image: "/images/pallet-shelving-4.png",
      category: t("palletShelving"),
      subcategory: "pallet-shelving",
      isNew: true,
    },
    // Archive shelving products
    {
      id: "archive-shelving-1",
      name: t("archiveShelvingUnit"),
      price: 320.0,
      image: "/images/archive-shelving-1.jpg",
      category: t("archiveShelving"),
      subcategory: "archive-shelving",
      isNew: true,
    },
    {
      id: "archive-shelving-2",
      name: t("archiveShelvingUnit2"),
      price: 290.0,
      image: "/images/archive-shelving-2.jpg",
      category: t("archiveShelving"),
      subcategory: "archive-shelving",
      isNew: true,
    },
    // POS Materials products
    {
      id: "shelf-price-display-1",
      name: t("shelfPriceDisplayUnit"),
      price: 12.0,
      image: "/images/shelf-price-display-1.jpg",
      category: t("posMaterials"),
      subcategory: "pos-materials",
      isNew: true,
    },
    {
      id: "plastic-frames-1",
      name: t("plasticFramesUnit"),
      price: 8.0,
      image: "/images/plastic-frames-1.jpg",
      category: t("posMaterials"),
      subcategory: "pos-materials",
      isNew: true,
    },
    {
      id: "frame-stands-1",
      name: t("frameStandsUnit"),
      price: 25.0,
      image: "/images/frame-stands-1.jpg",
      category: t("posMaterials"),
      subcategory: "pos-materials",
      isNew: true,
    },
    // Trolley products
    {
      id: "pallet-trolley-1",
      name: t("palletTrolleyUnit"),
      price: 450,
      image: "/images/pallet-trolley-red.jpeg",
      category: t("trolleys"),
      subcategory: "trolleys",
      isNew: true,
    },
    {
      id: "platform-trolley-blue-1",
      name: t("platformTrolleyBlue"),
      price: 180,
      image: "/images/platform-trolley-blue.jpeg",
      category: t("trolleys"),
      subcategory: "trolleys",
      isNew: true,
    },
    {
      id: "platform-trolley-yellow-1",
      name: t("platformTrolleyYellow"),
      price: 220,
      image: "/images/platform-trolley-yellow.jpeg",
      category: t("trolleys"),
      subcategory: "trolleys",
      isNew: true,
    },
  ]

  const getPageTitle = () => {
    switch (language) {
      case "en":
        return "All Products"
      case "ru":
        return "Все товары"
      default:
        return "ყველა პროდუქტი"
    }
  }

  const getPageDescription = () => {
    switch (language) {
      case "en":
        return "Browse our complete collection of professional shelving and warehouse equipment"
      case "ru":
        return "Просмотрите нашу полную коллекцию профессиональных стеллажей и складского оборудования"
      default:
        return "დაათვალიერეთ ჩვენი სრული კოლექცია პროფესიონალური სტელაჟებისა და საწყობის აღჭურვილობისა"
    }
  }

  return (
    <>
      <SubcategoryNavigation />
      <div className="flex flex-col min-h-screen bg-white">
        <div className="flex-1">
          <div className="container px-4 py-8 md:px-6 md:py-12">
            <div className="flex flex-col gap-8">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight mb-4">{getPageTitle()}</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{getPageDescription()}</p>
                <p className="text-sm text-muted-foreground mt-2">
                  {products.length} {t("products")}
                </p>
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
      </div>
    </>
  )
}
