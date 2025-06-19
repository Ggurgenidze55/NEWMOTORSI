"use client"

import ProductCard from "@/components/product-card"
import CategoryBanner from "@/components/category-banner"
import { useLanguage } from "@/contexts/language-context"
import SubcategoryNavigation from "@/components/subcategory-navigation"
import { getProductsForCategory } from "@/lib/products"

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

  const products = getProductsForCategory(params.id, t)

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
