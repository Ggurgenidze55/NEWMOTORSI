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
    "market-shelves": t("marketShelves"),
    "market-accessories": t("marketAccessories"),
    "pos-materials": t("posMaterials"),
    trolleys: t("trolleys"),
    "trash-bins": t("trashBins"),
    "tire-shelving": t("tireShelving"),
    "clothing-shelving": t("clothingShelving"),
  }

  const categoryName = categoryNames[params.id as keyof typeof categoryNames] || t("products")

  // Get category descriptions for banner subtitle
  const getCategoryDescription = (categoryId: string) => {
    const descriptions = {
      ka: {
        shelving: "მაღალი ხარისხის სტელაჟები ნებისმიერი ზომის საწყობისთვის",
        "warehouse-shelving": "პროფესიონალური სასაწყობე სტელაჟები მძიმე ტვირთებისთვის",
        "market-shelves": "საგამოფენო თაროები პროდუქტების ეფექტური წარმოსაჩენად",
        "market-accessories": "აქსესუარები და დამხმარე მასალები მარკეტებისთვის",
        "pos-materials": "სარეკლამო და საინფორმაციო მასალები მაღაზიებისთვის",
        trolleys: "საყიდლების ურიკები და ტრანსპორტირების საშუალებები",
        "trash-bins": "მაღალი ხარისხის ნაგვის ურნები კომერციული სივრცეებისთვის",
        "tire-shelving": "პროფესიონალური საბურავის სტელაჟები ავტოსერვისებისთვის",
        "clothing-shelving": "ტანსაცმლის სტელაჟები მაღაზიებისა და საწყობებისთვის",
      },
      en: {
        shelving: "High quality shelving for warehouses of any size",
        "warehouse-shelving": "Professional warehouse shelving for heavy loads",
        "market-shelves": "Display shelves for effective product presentation",
        "market-accessories": "Accessories and auxiliary materials for markets",
        "pos-materials": "Advertising and information materials for stores",
        trolleys: "Shopping carts and transportation means",
        "trash-bins": "High quality trash bins for commercial spaces",
        "tire-shelving": "Professional tire shelving for auto services",
        "clothing-shelving": "Clothing racks for stores and warehouses",
      },
      ru: {
        shelving: "Высококачественные стеллажи для складов любого размера",
        "warehouse-shelving": "Профессиональные складские стеллажи для тяжелых грузов",
        "market-shelves": "Выставочные полки для эффективной презентации товаров",
        "market-accessories": "Аксессуары и вспомогательные материалы для магазинов",
        "pos-materials": "Рекламные и информационные материалы для магазинов",
        trolleys: "Тележки для покупок и средства транспортировки",
        "trash-bins": "Высококачественные мусорные баки для коммерческих помещений",
        "tire-shelving": "Профессиональные стеллажи для шин для автосервисов",
        "clothing-shelving": "Стеллажи для одежды для магазинов и складов",
      },
    }

    return descriptions[language][categoryId as keyof (typeof descriptions)[typeof language]] || ""
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
          image: "/images/shelf-divider-1.jpg",
          category: t("warehouseShelving"),
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
          image: "/images/shelf-divider-1.jpg",
          category: t("warehouseShelving"),
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
      ],
      trolleys: [],
      "pos-materials": [],
      "trash-bins": [],
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
          id: "accessory-holder-1",
          name: t("accessoryHolderUnit"),
          price: 35.0,
          image: "/images/accessory-holder-1.jpg",
          category: t("marketAccessories"),
          isNew: true,
        },
        {
          id: "perforated-wall-1",
          name: t("perforatedWallUnit"),
          price: 180.0,
          image: "/images/perforated-wall-1.jpg",
          category: t("marketAccessories"),
          isNew: true,
        },
        {
          id: "wall-grid-display-1",
          name: t("wallGridDisplayUnit"),
          price: 120.0,
          image: "/images/wall-grid-display-1.jpg",
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
    }

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
                <h2 className="text-3xl font-bold tracking-tight">{categoryName}</h2>
                <p className="text-muted-foreground">
                  {products.length} {t("products")} {categoryName.toLowerCase()}-ში
                </p>
              </div>

              {/* Products Grid */}
              {products.length > 0 ? (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {products.map((product) => (
                    <ProductCard key={product.id} {...product} hidePrice={true} />
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
