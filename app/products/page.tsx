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
    {
      id: "trash-bin-120",
      name: t("trashBin120Unit"),
      price: 75, // Example price, please adjust
      image: "/images/trash-bin-120l.jpg",
      category: t("trashBins"),
      subcategory: "trash-bins",
      isNew: true,
    },
    {
      id: "trash-bin-240",
      name: t("trashBin240Unit"),
      price: 110, // Example price, please adjust
      image: "/images/trash-bin-240l.jpg",
      category: t("trashBins"),
      subcategory: "trash-bins",
      isNew: true,
    },
    {
      id: "shopping-basket-20l",
      name: t("shoppingBasket20lUnit"),
      price: 25.0, // Placeholder price
      image: "/images/shopping-basket-20l-red.jpg",
      category: t("marketAccessories"),
      subcategory: "market-accessories",
      isNew: true,
    },
    {
      id: "perforated-hooks",
      name: t("perforatedHooksUnit"),
      price: 5.0, // Placeholder price
      image: "/images/perforated-panel-hooks.jpg",
      category: t("marketAccessories"),
      subcategory: "market-accessories",
      isNew: true,
    },
    {
      id: "shelf-front-barrier",
      name: t("shelfFrontBarrierUnit"),
      price: 15.0, // Placeholder price
      image: "/images/shelf-front-barrier.jpg",
      category: t("marketAccessories"),
      subcategory: "market-accessories",
      isNew: true,
    },
    {
      id: "checkout-counter-1500",
      name: t("checkoutCounter1500Unit"),
      price: 750.0, // Placeholder price
      image: "/images/checkout-counter-1500.jpg",
      category: t("marketAccessories"),
      subcategory: "market-accessories",
      isNew: true,
    },
    {
      id: "shelf-divider-h250",
      name: t("shelfDividerH250Unit"),
      price: 10.0, // Placeholder price
      image: "/images/shelf-divider-h250.jpg",
      category: t("marketAccessories"),
      subcategory: "market-accessories",
      isNew: true,
    },
    {
      id: "promotion-basket-90x60",
      name: t("promotionBasket90x60Unit"),
      price: 120.0, // Placeholder price
      image: "/images/promotion-basket-90x60.jpg",
      category: t("marketAccessories"),
      subcategory: "market-accessories",
      isNew: true,
    },
    {
      id: "lightbox-890x330",
      name: t("lightbox890x330Unit"),
      price: 180.0, // Placeholder price
      image: "/images/lightbox-890x330.jpg",
      category: t("marketAccessories"),
      subcategory: "market-accessories", // Or "pos-materials"
      isNew: true,
    },
    {
      id: "cash-drawer-368",
      name: t("cashDrawer368Unit"),
      price: 90.0, // Placeholder price
      image: "/images/cash-drawer-368.jpg",
      category: t("marketAccessories"),
      subcategory: "market-accessories",
      isNew: true,
    },
    {
      id: "hook-locker",
      name: t("hookLockerUnit"),
      price: 2.0, // Placeholder price
      image: "/images/hook-locker.jpg",
      category: t("marketAccessories"),
      subcategory: "market-accessories",
      isNew: true,
    },
    {
      id: "hook-locker-key",
      name: t("hookLockerKeyUnit"),
      price: 15.0, // Placeholder price
      image: "/images/hook-locker-key.jpg",
      category: t("marketAccessories"),
      subcategory: "market-accessories",
      isNew: true,
    },
    // New Market Shelves
    {
      id: "market-shelf-single-165",
      name: t("marketShelfSingle165"),
      price: 0,
      image: "/images/market-shelves/market-shelf-single-165.jpg",
      category: t("marketShelves"),
      subcategory: "market-shelves",
      isNew: true,
    },
    {
      id: "market-shelf-single-195",
      name: t("marketShelfSingle195"),
      price: 0,
      image: "/images/market-shelves/market-shelf-single-195.jpg",
      category: t("marketShelves"),
      subcategory: "market-shelves",
      isNew: true,
    },
    {
      id: "market-shelf-single-220",
      name: t("marketShelfSingle220"),
      price: 0,
      image: "/images/market-shelves/market-shelf-single-220.jpg",
      category: t("marketShelves"),
      subcategory: "market-shelves",
      isNew: true,
    },
    {
      id: "market-shelf-basket-165",
      name: t("marketShelfBasket165"),
      price: 0,
      image: "/images/market-shelves/market-shelf-basket.jpg",
      category: t("marketShelves"),
      subcategory: "market-shelves",
      isNew: true,
    },
    {
      id: "market-shelf-basket-195",
      name: t("marketShelfBasket195"),
      price: 0,
      image: "/images/market-shelves/market-shelf-basket.jpg",
      category: t("marketShelves"),
      subcategory: "market-shelves",
      isNew: true,
    },
    {
      id: "market-shelf-gondola-135",
      name: t("marketShelfGondola135"),
      price: 0,
      image: "/images/market-shelves/market-shelf-gondola-135.jpg",
      category: t("marketShelves"),
      subcategory: "market-shelves",
      isNew: true,
    },
    {
      id: "market-shelf-gondola-165",
      name: t("marketShelfGondola165"),
      price: 0,
      image: "/images/market-shelves/market-shelf-gondola-165.png",
      category: t("marketShelves"),
      subcategory: "market-shelves",
      isNew: true,
    },
    {
      id: "market-shelf-perf-165",
      name: t("marketShelfPerf165"),
      price: 0,
      image: "/images/market-shelves/market-shelf-perf-165.png",
      category: t("marketShelves"),
      subcategory: "market-shelves",
      isNew: true,
    },
    {
      id: "market-shelf-perf-195",
      name: t("marketShelfPerf195"),
      price: 0,
      image: "/images/market-shelves/market-shelf-perf-195.png",
      category: t("marketShelves"),
      subcategory: "market-shelves",
      isNew: true,
    },
    {
      id: "market-shelf-checkout-front",
      name: t("marketShelfCheckoutFront"),
      price: 0,
      image: "/images/market-shelves/market-shelf-checkout-front.jpg",
      category: t("marketShelves"),
      subcategory: "market-shelves",
      isNew: true,
    },
    {
      id: "market-shelf-single-135-w73",
      name: t("marketShelfSingle135W73"),
      price: 0,
      image: "/images/market-shelves/market-shelf-single-135w73.jpg",
      category: t("marketShelves"),
      subcategory: "market-shelves",
      isNew: true,
    },
    {
      id: "market-shelf-single-165-w73",
      name: t("marketShelfSingle165W73"),
      price: 0,
      image: "/images/market-shelves/market-shelf-single-165w73.jpg",
      category: t("marketShelves"),
      subcategory: "market-shelves",
      isNew: true,
    },
    // Kitchen Shelving Products
    {
      id: "kitchen-shelf-1",
      name: t("kitchenShelving200x60x35"),
      price: 0,
      image: "/images/kitchen-shelving/kitchen-shelf-1.png",
      category: t("kitchenShelving"),
      subcategory: "kitchen-shelving",
      isNew: true,
    },
    {
      id: "kitchen-shelf-2",
      name: t("kitchenShelving200x106x35"),
      price: 0,
      image: "/images/kitchen-shelving/kitchen-shelf-2.png",
      category: t("kitchenShelving"),
      subcategory: "kitchen-shelving",
      isNew: true,
    },
    {
      id: "kitchen-shelf-3",
      name: t("kitchenShelving200x90x53"),
      price: 0,
      image: "/images/kitchen-shelving/kitchen-shelf-3.jpg",
      category: t("kitchenShelving"),
      subcategory: "kitchen-shelving",
      isNew: true,
    },
    {
      id: "kitchen-shelf-4",
      name: t("kitchenShelving200x90x60"),
      price: 0,
      image: "/images/kitchen-shelving/kitchen-shelf-4.jpg",
      category: t("kitchenShelving"),
      subcategory: "kitchen-shelving",
      isNew: true,
    },
    {
  id: "kitchen-stainless-shelf-l120",
  name: "სამზარეულოს სტელაჟი უჟანგავი ცხაურით",
  price: 0,
  image: "/images/kitchen-shelving/stainless-steel-shelf-l120.jpeg",
  category: t("kitchenShelving"),
  subcategory: "kitchen-shelving",
  isNew: true,
    },
    {
  id: "kitchen-stainless-shelf-l180",
  name: "სამზარეულოს სტელაჟი უჟანგავი ცხაურით",
  price: 0,
  image: "/images/kitchen-shelving/stainless-steel-shelf-l180.jpeg",
  category: t("kitchenShelving"),
  isNew: true,
},
    {
  id: "kitchen-stainless-trays-600x400",
  name: "უჟანგავი ჟარონები",
  price: 0,
  image: "/images/kitchen-shelving/stainless-steel-trays.png",
  category: t("kitchenShelving"),
  isNew: true,
},
{
  id: "kitchen-chrome-wire-shelf-200x151",
  name: "ბადიანი ქრომირებული სტელაჟები",
  price: 0,
  image: "/images/kitchen-shelving/chrome-wire-shelf-200x151.jpeg",
  category: t("kitchenShelving"),
  isNew: true,
},
{
  id: "kitchen-chrome-wire-shelf-200x180",
  name: "ბადიანი ქრომირებული სტელაჟები",
  price: 0,
  image: "/images/kitchen-shelving/chrome-wire-shelf-200x180.jpeg",
  category: t("kitchenShelving"),
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
      <div className="flex flex-col min-h-screen bg-white text-black">
        <div className="flex-1">
          <div className="container px-4 py-8 md:px-6 md:py-12">
            <div className="flex flex-col gap-8">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight mb-4 text-black">{getPageTitle()}</h1>
                <p className="text-xl text-black max-w-2xl mx-auto">{getPageDescription()}</p>
                <p className="text-sm text-black mt-2">
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
