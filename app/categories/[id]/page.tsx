"use client"

import ProductCard from "@/components/product-card"
import CategoryBanner from "@/components/category-banner"
import { useLanguage } from "@/contexts/language-context"
import SubcategoryNavigation from "@/components/subcategory-navigation"

export default function CategoryPage({ params }: { params: { id: string } }) {
  const { t, language } = useLanguage()

  // Category mapping
  const categoryNames = {
    shelving: t("shelving"),
    "warehouse-shelving": t("warehouseShelving"),
    "pallet-shelving": t("palletShelving"),
    "market-shelves": t("marketShelves"),
    "market-accessories": t("marketAccessories"),
    "pos-materials": t("posMaterials"),
    trolleys: t("trolleys"),
    "trash-bins": t("trashBins"),
    "tire-shelving": t("tireShelving"),
    "clothing-shelving": t("clothingShelving"),
    "kitchen-shelving": t("kitchenShelving"),
  }

  const categoryName = categoryNames[params.id as keyof typeof categoryNames] || t("productsLabel") // Using productsLabel for generic

  // Get category descriptions for banner subtitle
  const getCategoryDescription = (categoryId: string) => {
    const descriptions = {
      ka: {
        shelving: "მაღალი ხარისხის სტელაჟები ნებისმიერი ზომის საწყობისთვის",
        "warehouse-shelving": "პროფესიონალური სასაწყობე სტელაჟები მძიმე ტვირთებისთვის",
        "pallet-shelving": "საპალეტე სტელაჟები ინდუსტრიული საწყობებისთვის",
        "market-shelves": "საგამოფენო თაროები პროდუქტების ეფექტური წარმოსაჩენად",
        "market-accessories": "აქსესუარები და დამხმარე მასალები მარკეტებისთვის",
        "pos-materials": "სარეკლამო და საინფორმაციო მასალები მაღაზიებისთვის",
        trolleys: "საყიდლების ურიკები და ტრანსპორტირების საშუალებები",
        "trash-bins": "მაღალი ხარისხის ნაგვის ურნები კომერციული სივრცეებისთვის",
        "tire-shelving": "პროფესიონალური საბურავის სტელაჟები ავტოსერვისებისთვის",
        "clothing-shelving": "ტანსაცმლის სტელაჟები მაღაზიებისა და საწყობებისთვის",
        "kitchen-shelving": "ფუნქციონალური და გამძლე სტელაჟები თქვენი სამზარეულოსთვის",
      },
      en: {
        shelving: "High quality shelving for warehouses of any size",
        "warehouse-shelving": "Professional warehouse shelving for heavy loads",
        "pallet-shelving": "Pallet racking systems for industrial warehouses",
        "market-shelves": "Display shelves for effective product presentation",
        "market-accessories": "Accessories and auxiliary materials for markets",
        "pos-materials": "Advertising and information materials for stores",
        trolleys: "Shopping carts and transportation means",
        "trash-bins": "High quality trash bins for commercial spaces",
        "tire-shelving": "Professional tire shelving for auto services",
        "clothing-shelving": "Clothing racks for stores and warehouses",
        "kitchen-shelving": "Functional and durable shelving for your kitchen",
      },
      ru: {
        shelving: "Высококачественные стеллажи для складов любого размера",
        "warehouse-shelving": "Профессиональные складские стеллажи для тяжелых грузов",
        "pallet-shelving": "Паллетные стеллажи для промышленных складов",
        "market-shelves": "Выставочные полки для эффективной презентации товаров",
        "market-accessories": "Аксессуары и вспомогательные материалы для магазинов",
        "pos-materials": "Рекламные и информационные материалы для магазинов",
        trolleys: "Тележки для покупок и средства транспортировки",
        "trash-bins": "Высококачественные мусорные баки для коммерческих помещений",
        "tire-shelving": "Профессиональные стеллажи для шин для автосервисов",
        "clothing-shelving": "Стеллажи для одежды для магазинов и складов",
        "kitchen-shelving": "Функциональные и прочные стеллажи для вашей кухни",
      },
    }
    return descriptions[language]?.[categoryId as keyof (typeof descriptions)[typeof language]] || ""
  }

  // Sample products for the category
  const getProductsForCategory = (categoryId: string) => {
    const allProducts = {
      shelving: [
        {
          id: "warehouse-1",
          name: t("warehouseShelvingUnit"),
          price: 450.0,
          image: "/images/blue-warehouse-shelving.png",
          category: t("warehouseShelving"),
          isNew: true,
        },
        {
          id: "warehouse-2",
          name: t("warehouseShelvingUnit"),
          price: 420.0,
          image: "/images/blue-orange-warehouse-shelving.jpg",
          category: t("warehouseShelving"),
          isNew: true,
        },
        {
          id: "warehouse-3",
          name: t("warehouseShelvingUnit"),
          price: 480.0,
          image: "/images/gray-warehouse-shelving.jpg",
          category: t("warehouseShelving"),
          isNew: true,
        },
        {
          id: "warehouse-4",
          name: t("warehouseShelvingUnit"),
          price: 520.0,
          image: "/images/tall-warehouse-shelving.jpg",
          category: t("warehouseShelving"),
          isNew: true,
        },
        {
          id: "tire-shelving-1",
          name: t("tireShelvingUnit"),
          price: 680.0,
          image: "/images/tire-shelving-1.png",
          category: t("tireShelving"),
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
          id: "shelf-divider-1",
          name: t("shelfDividerUnit"),
          price: 25.0,
          image: "/images/shelf-divider-1.png",
          category: t("warehouseShelving"),
          isNew: true,
        },
        {
          id: "pallet-shelving-1",
          name: t("palletShelvingUnit1"),
          price: 850.0,
          image: "/images/pallet-shelving-1.jpg",
          category: t("palletShelving"),
          isNew: true,
        },
        {
          id: "pallet-shelving-2",
          name: t("palletShelvingUnit2"),
          price: 950.0,
          image: "/images/pallet-shelving-2.jpg",
          category: t("palletShelving"),
          isNew: true,
        },
        {
          id: "pallet-shelving-3",
          name: t("palletShelvingUnit3"),
          price: 1050.0,
          image: "/images/pallet-shelving-3.jpg",
          category: t("palletShelving"),
          isNew: true,
        },
        {
          id: "pallet-shelving-4",
          name: t("palletShelvingUnit4"),
          price: 1250.0,
          image: "/images/pallet-shelving-4.png",
          category: t("palletShelving"),
          isNew: true,
        },
        {
          id: "archive-shelving-1",
          name: t("archiveShelvingUnit"),
          price: 320.0,
          image: "/images/archive-shelving-1.jpg",
          category: t("archiveShelving"),
          isNew: true,
        },
        // Kitchen Shelves added to general shelving
        {
          id: "kitchen-shelf-1",
          name: t("kitchenShelving200x60x35"),
          price: 0,
          image: "/images/kitchen-shelving/kitchen-shelf-1.png",
          category: t("kitchenShelving"),
          isNew: true,
        },
        {
          id: "kitchen-shelf-2",
          name: t("kitchenShelving200x106x35"),
          price: 0,
          image: "/images/kitchen-shelving/kitchen-shelf-2.png",
          category: t("kitchenShelving"),
          isNew: true,
        },
        {
          id: "kitchen-shelf-3",
          name: t("kitchenShelving200x90x53"),
          price: 0,
          image: "/images/kitchen-shelving/kitchen-shelf-3.jpg",
          category: t("kitchenShelving"),
          isNew: true,
        },
        {
          id: "kitchen-shelf-4",
          name: t("kitchenShelving200x90x60"),
          price: 0,
          image: "/images/kitchen-shelving/kitchen-shelf-4.jpg",
          category: t("kitchenShelving"),
          isNew: true,
        },
      ],
      "warehouse-shelving": [
        {
          id: "warehouse-1",
          name: t("warehouseShelvingUnit"),
          price: 450.0,
          image: "/images/blue-warehouse-shelving.png",
          category: t("warehouseShelving"),
          isNew: true,
        },
        {
          id: "warehouse-2",
          name: t("warehouseShelvingUnit"),
          price: 420.0,
          image: "/images/blue-orange-warehouse-shelving.jpg",
          category: t("warehouseShelving"),
          isNew: true,
        },
        {
          id: "warehouse-3",
          name: t("warehouseShelvingUnit"),
          price: 480.0,
          image: "/images/gray-warehouse-shelving.jpg",
          category: t("warehouseShelving"),
          isNew: true,
        },
        {
          id: "warehouse-4",
          name: t("warehouseShelvingUnit"),
          price: 520.0,
          image: "/images/tall-warehouse-shelving.jpg",
          category: t("warehouseShelving"),
          isNew: true,
        },
        {
          id: "shelf-divider-1",
          name: t("shelfDividerUnit"),
          price: 25.0,
          image: "/images/shelf-divider-1.png",
          category: t("warehouseShelving"),
          isNew: true,
        },
      ],
      "pallet-shelving": [
        {
          id: "pallet-shelving-1",
          name: t("palletShelvingUnit1"),
          price: 850.0,
          image: "/images/pallet-shelving-1.jpg",
          category: t("palletShelving"),
          isNew: true,
        },
        {
          id: "pallet-shelving-2",
          name: t("palletShelvingUnit2"),
          price: 950.0,
          image: "/images/pallet-shelving-2.jpg",
          category: t("palletShelving"),
          isNew: true,
        },
        {
          id: "pallet-shelving-3",
          name: t("palletShelvingUnit3"),
          price: 1050.0,
          image: "/images/pallet-shelving-3.jpg",
          category: t("palletShelving"),
          isNew: true,
        },
        {
          id: "pallet-shelving-4",
          name: t("palletShelvingUnit4"),
          price: 1250.0,
          image: "/images/pallet-shelving-4.png",
          category: t("palletShelving"),
          isNew: true,
        },
      ],
      "market-shelves": [
        {
          id: "perforated-profile-1",
          name: t("perforatedProfileUnit"),
          price: 85.0,
          image: "/images/perforated-profile-2.jpg",
          category: t("marketShelves"),
          isNew: true,
        },
        {
          id: "basket-shelving-1",
          name: t("basketShelvingUnit"),
          price: 220.0,
          image: "/images/basket-shelving-white.jpeg",
          category: t("marketShelves"),
          isNew: true,
        },
        {
          id: "basket-shelving-2",
          name: t("basketShelvingLargeUnit"),
          price: 280.0,
          image: "/images/basket-shelving-large-white.jpeg",
          category: t("marketShelves"),
          isNew: true,
        },
        {
          id: "tier-shelving-1",
          name: t("tierShelvingUnit"),
          price: 190.0,
          image: "/images/tier-shelving-red.jpeg",
          category: t("marketShelves"),
          isNew: true,
        },
        {
          id: "tier-shelving-2",
          name: t("largeTierShelvingUnit"),
          price: 250.0,
          image: "/images/large-tier-shelving-colors.jpeg",
          category: t("marketShelves"),
          isNew: true,
        },
        // New Market Shelves
        {
          id: "market-shelf-single-165",
          name: t("marketShelfSingle165"),
          price: 0,
          image: "/images/market-shelves/market-shelf-single-165.jpg",
          category: t("marketShelves"),
          isNew: true,
        },
        {
          id: "market-shelf-single-195",
          name: t("marketShelfSingle195"),
          price: 0,
          image: "/images/market-shelves/market-shelf-single-195.jpg",
          category: t("marketShelves"),
          isNew: true,
        },
        {
          id: "market-shelf-single-220",
          name: t("marketShelfSingle220"),
          price: 0,
          image: "/images/market-shelves/market-shelf-single-220.jpg",
          category: t("marketShelves"),
          isNew: true,
        },
        {
          id: "market-shelf-basket-165",
          name: t("marketShelfBasket165"),
          price: 0,
          image: "/images/market-shelves/market-shelf-basket.jpg",
          category: t("marketShelves"),
          isNew: true,
        },
        {
          id: "market-shelf-basket-195",
          name: t("marketShelfBasket195"),
          price: 0,
          image: "/images/market-shelves/market-shelf-basket.jpg",
          category: t("marketShelves"),
          isNew: true,
        },
        {
          id: "market-shelf-gondola-135",
          name: t("marketShelfGondola135"),
          price: 0,
          image: "/images/market-shelves/market-shelf-gondola-135.jpg",
          category: t("marketShelves"),
          isNew: true,
        },
        {
          id: "market-shelf-gondola-165",
          name: t("marketShelfGondola165"),
          price: 0,
          image: "/images/market-shelves/market-shelf-gondola-165.png",
          category: t("marketShelves"),
          isNew: true,
        },
        {
          id: "market-shelf-perf-165",
          name: t("marketShelfPerf165"),
          price: 0,
          image: "/images/market-shelves/market-shelf-perf-165.png",
          category: t("marketShelves"),
          isNew: true,
        },
        {
          id: "market-shelf-perf-195",
          name: t("marketShelfPerf195"),
          price: 0,
          image: "/images/market-shelves/market-shelf-perf-195.png",
          category: t("marketShelves"),
          isNew: true,
        },
        {
          id: "market-shelf-checkout-front",
          name: t("marketShelfCheckoutFront"),
          price: 0,
          image: "/images/market-shelves/market-shelf-checkout-front.jpg",
          category: t("marketShelves"),
          isNew: true,
        },
        {
          id: "market-shelf-single-135-w73",
          name: t("marketShelfSingle135W73"),
          price: 0,
          image: "/images/market-shelves/market-shelf-single-135w73.jpg",
          category: t("marketShelves"),
          isNew: true,
        },
        {
          id: "market-shelf-single-165-w73",
          name: t("marketShelfSingle165W73"),
          price: 0,
          image: "/images/market-shelves/market-shelf-single-165w73.jpg",
          category: t("marketShelves"),
          isNew: true,
        },
      ],
      trolleys: [
        {
          id: "pallet-trolley-1",
          name: t("palletTrolleyUnit"),
          price: 450.0,
          image: "/images/pallet-trolley-red.jpeg",
          category: t("trolleys"),
          isNew: true,
        },
        {
          id: "platform-trolley-blue-1",
          name: t("platformTrolleyBlue"),
          price: 180.0,
          image: "/images/platform-trolley-blue.jpeg",
          category: t("trolleys"),
          isNew: true,
        },
        {
          id: "platform-trolley-yellow-1",
          name: t("platformTrolleyYellow"),
          price: 220.0,
          image: "/images/platform-trolley-yellow.jpeg",
          category: t("trolleys"),
          isNew: true,
        },
      ],
      "pos-materials": [
        {
          id: "shelf-price-display-1",
          name: t("shelfPriceDisplayUnit"),
          price: 12.0,
          image: "/images/shelf-price-display-1.jpg",
          category: t("posMaterials"),
          isNew: true,
        },
        {
          id: "plastic-frames-1",
          name: t("plasticFramesUnit"),
          price: 8.0,
          image: "/images/plastic-frames-1.jpg",
          category: t("posMaterials"),
          isNew: true,
        },
        {
          id: "frame-stands-1",
          name: t("frameStandsUnit"),
          price: 25.0,
          image: "/images/frame-stands-1.jpg",
          category: t("posMaterials"),
          isNew: true,
        },
      ],
      "trash-bins": [
        {
          id: "trash-bin-120",
          name: t("trashBin120Unit"),
          price: 75.0, // Example price, please adjust
          image: "/images/trash-bin-120l.jpg",
          category: t("trashBins"),
          isNew: true,
        },
        {
          id: "trash-bin-240",
          name: t("trashBin240Unit"),
          price: 110.0, // Example price, please adjust
          image: "/images/trash-bin-240l.jpg",
          category: t("trashBins"),
          isNew: true,
        },
      ],
      "market-accessories": [
        {
          id: "aluminum-rail-1",
          name: t("aluminumRailUnit"),
          price: 45.0,
          image: "/images/aluminum-rail-3.jpg",
          category: t("marketAccessories"),
          isNew: true,
        },
        
        {
          id: "perforated-wall-1",
          name: t("perforatedWallUnit"),
          price: 180.0,
          image: "/images/perforated-wall-1.png",
          category: t("marketAccessories"),
          isNew: true,
        },
        {
          id: "wall-grid-display-1",
          name: t("wallGridDisplayUnit"),
          price: 120.0,
          image: "/images/wall-grid-display-1.png",
          category: t("marketAccessories"),
          isNew: true,
        },
        {
          id: "perforated-wall-cover-1",
          name: t("perforatedWallCoverUnit"),
          price: 150.0,
          image: "/images/perforated-wall-cover-1.jpg",
          category: t("marketAccessories"),
          isNew: true,
        },
        {
          id: "shopping-basket-20l",
          name: t("shoppingBasket20lUnit"),
          price: 25.0,
          image: "/images/shopping-basket-20l-red.jpg",
          category: t("marketAccessories"),
          isNew: true,
        },
        {
          id: "perforated-hooks",
          name: t("perforatedHooksUnit"),
          price: 5.0,
          image: "/images/perforated-panel-hooks.jpg",
          category: t("marketAccessories"),
          isNew: true,
        },
        {
          id: "shelf-front-barrier",
          name: t("shelfFrontBarrierUnit"),
          price: 15.0,
          image: "/images/shelf-front-barrier.jpg",
          category: t("marketAccessories"),
          isNew: true,
        },
        {
          id: "checkout-counter-1500",
          name: t("checkoutCounter1500Unit"),
          price: 750.0,
          image: "/images/checkout-counter-1500.jpg",
          category: t("marketAccessories"),
          isNew: true,
        },
        {
          id: "shelf-divider-h250",
          name: t("shelfDividerH250Unit"),
          price: 10.0,
          image: "/images/shelf-divider-h250.jpg",
          category: t("marketAccessories"),
          isNew: true,
        },
        {
          id: "promotion-basket-90x60",
          name: t("promotionBasket90x60Unit"),
          price: 120.0,
          image: "/images/promotion-basket-90x60.jpg",
          category: t("marketAccessories"),
          isNew: true,
        },
        {
          id: "lightbox-890x330",
          name: t("lightbox890x330Unit"),
          price: 180.0,
          image: "/images/lightbox-890x330.jpg",
          category: t("marketAccessories"),
          isNew: true,
        },
        {
          id: "cash-drawer-368",
          name: t("cashDrawer368Unit"),
          price: 90.0,
          image: "/images/cash-drawer-368.jpg",
          category: t("marketAccessories"),
          isNew: true,
        },
        {
          id: "hook-locker",
          name: t("hookLockerUnit"),
          price: 2.0,
          image: "/images/hook-locker.jpg",
          category: t("marketAccessories"),
          isNew: true,
        },
        {
          id: "hook-locker-key",
          name: t("hookLockerKeyUnit"),
          price: 15.0,
          image: "/images/hook-locker-key.jpg",
          category: t("marketAccessories"),
          isNew: true,
        },
      ],
      "tire-shelving": [
        {
          id: "tire-shelving-1",
          name: t("tireShelvingUnit"),
          price: 680.0,
          image: "/images/tire-shelving-1.png",
          category: t("tireShelving"),
          isNew: true,
        },
      ],
      "clothing-shelving": [
        {
          id: "clothing-shelving-1",
          name: t("clothingShelvingUnit"),
          price: 380.0,
          image: "/images/clothing-rack-1.jpg",
          category: t("clothingShelving"),
          isNew: true,
        },
      ],
      "archive-shelving": [
        {
          id: "archive-shelving-1",
          name: t("archiveShelvingUnit"),
          price: 320.0,
          image: "/images/archive-shelving-1.jpg",
          category: t("archiveShelving"),
          isNew: true,
        },
        {
          id: "archive-shelving-2",
          name: t("archiveShelvingUnit2"),
          price: 290.0,
          image: "/images/archive-shelving-2.jpg",
          category: t("archiveShelving"),
          isNew: true,
        },
      ],
      "kitchen-shelving": [
        {
          id: "kitchen-shelf-1",
          name: t("kitchenShelving200x60x35"),
          price: 0,
          image: "/images/kitchen-shelving/kitchen-shelf-1.png",
          category: t("kitchenShelving"),
          isNew: true,
        },
        {
          id: "kitchen-shelf-2",
          name: t("kitchenShelving200x106x35"),
          price: 0,
          image: "/images/kitchen-shelving/kitchen-shelf-2.png",
          category: t("kitchenShelving"),
          isNew: true,
        },
        {
          id: "kitchen-shelf-3",
          name: t("kitchenShelving200x90x53"),
          price: 0,
          image: "/images/kitchen-shelving/kitchen-shelf-3.jpg",
          category: t("kitchenShelving"),
          isNew: true,
        },
        {
          id: "kitchen-shelf-4",
          name: t("kitchenShelving200x90x60"),
          price: 0,
          image: "/images/kitchen-shelving/kitchen-shelf-4.jpg",
          category: t("kitchenShelving"),
          isNew: true,
        },
        {
          id: "kitchen-stainless-shelf-l120",
          name: t("kitchenShelvingStainlessL120"),
          price: 0, // Set actual price if available
          image: "/images/kitchen-shelving/stainless-steel-shelf-l120.jpeg",
          category: t("kitchenShelving"),
          isNew: true,
        },
        {
          id: "kitchen-stainless-shelf-l180",
          name: t("kitchenShelvingStainlessL180"),
          price: 0, // Set actual price if available
          image: "/images/kitchen-shelving/stainless-steel-shelf-l180.jpeg",
          category: t("kitchenShelving"),
          isNew: true,
        },
        {
          id: "kitchen-stainless-trays-600x400",
          name: t("stainlessSteelTraysHL600L400"),
          price: 0, // Set actual price if available
          image: "/images/kitchen-shelving/stainless-steel-trays.png",
          category: t("kitchenShelving"),
          isNew: true,
        },
        {
          id: "kitchen-chrome-wire-shelf-200x120",
          name: t("chromeWireShelvingH200W120D53"),
          price: 0, // Set actual price if available
          image: "/images/kitchen-shelving/chrome-wire-shelf-200x120.jpeg",
          category: t("kitchenShelving"),
          isNew: true,
        },
        {
          id: "kitchen-chrome-wire-shelf-200x151",
          name: t("chromeWireShelvingH200W151D53"),
          price: 0, // Set actual price if available
          image: "/images/kitchen-shelving/chrome-wire-shelf-200x151.jpeg",
          category: t("kitchenShelving"),
          isNew: true,
        },
        {
          id: "kitchen-chrome-wire-shelf-200x180",
          name: t("chromeWireShelvingH200W180D53"),
          price: 0, // Set actual price if available
          image: "/images/kitchen-shelving/chrome-wire-shelf-200x180.jpeg",
          category: t("kitchenShelving"),
          isNew: true,
        },
      ],
    }
    // To keep the response concise, I've omitted the existing product data for other categories.
    // Assume they are still present in the actual `allProducts` object.
    // For example:
    // shelving: [ { id: "warehouse-1", ... }, ... ],
    // "warehouse-shelving": [ { id: "warehouse-1", ... }, ... ],
    // ... and so on for all other categories.

    return allProducts[categoryId as keyof typeof allProducts] || []
  }

  const products = getProductsForCategory(params.id)

  return (
    <>
      <SubcategoryNavigation />
      <div className="flex flex-col min-h-screen bg-white">
        <CategoryBanner title={categoryName} subtitle={getCategoryDescription(params.id)} />
        <div className="flex-1">
          <div className="container px-4 py-8 md:px-6 md:py-12">
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-black">{categoryName}</h2>
                <p className="text-black">
                  {products.length} {t("productsCount")} {/* Using productsCount for plural "products" */}
                  {/* The logic for "itemsInCategory" might need adjustment based on category type */}
                  {/* For simplicity, we'll keep it as is for now */}
                  {params.id === "shelving" || params.id === "market-shelves" || params.id === "kitchen-shelving"
                    ? ""
                    : t("itemsInCategory")}
                </p>
              </div>

              {/* Products Grid */}
              {products.length > 0 ? (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {products.map((product) => (
                    <ProductCard key={product.id} {...product} hidePrice={product.price === 0} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">ამ კატეგორიაში პროდუქტები მალე დაემატება</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
