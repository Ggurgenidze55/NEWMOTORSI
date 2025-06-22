"use client"

import ProductCard from "@/components/product-card"
import SubcategoryNavigation from "@/components/subcategory-navigation"
import { useLanguage } from "@/contexts/language-context"
import { useEffect, useState } from "react"
import { getAllProducts, searchProducts, type Product } from "@/lib/products-api"
import { getLocalizedProductName } from "@/lib/supabase"

export default function ProductsPage() {
  const { t, language } = useLanguage()
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [searching, setSearching] = useState(false)

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true)
      try {
        const productsData = await getAllProducts()
        setProducts(productsData)
      } catch (error) {
        console.error("Error loading products:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

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

  const handleSearch = async (query: string) => {
    setSearchQuery(query)
    if (!query.trim()) {
      // If search is empty, reload all products
      const allProducts = await getAllProducts()
      setProducts(allProducts)
      return
    }

    setSearching(true)
    try {
      const searchResults = await searchProducts(query)
      setProducts(searchResults)
    } catch (error) {
      console.error("Error searching products:", error)
    } finally {
      setSearching(false)
    }
  }

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

  if (loading) {
    return (
      <>
        <SubcategoryNavigation />
        <div className="flex flex-col min-h-screen bg-white text-black">
          <div className="flex-1">
            <div className="container px-4 py-8 md:px-6 md:py-12">
              <div className="animate-pulse">
                <div className="text-center mb-8">
                  <div className="bg-gray-300 h-8 rounded mx-auto mb-4 w-64"></div>
                  <div className="bg-gray-300 h-4 rounded mx-auto mb-2 w-96"></div>
                  <div className="bg-gray-300 h-4 rounded mx-auto w-24"></div>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="bg-gray-300 h-80 rounded-lg"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
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

              {/* Search Bar */}
              <div className="max-w-md mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder={
                      language === "ka"
                        ? "პროდუქტების ძიება..."
                        : language === "en"
                          ? "Search products..."
                          : "Поиск товаров..."
                    }
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {searching && (
                    <div className="absolute right-3 top-2.5">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                    </div>
                  )}
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={getLocalizedProductName(product, language)}
                    price={product.price}
                    image={product.images[0] || "/placeholder.svg"}
                    category={product.category}
                    subcategory={product.subcategory}
                    isNew={product.is_new}
                    hidePrice={product.price === 0}
                  />
                ))}
              </div>

              {/* No Results */}
              {products.length === 0 && !loading && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">
                    {searchQuery
                      ? language === "ka"
                        ? "პროდუქტები ვერ მოიძებნა"
                        : language === "en"
                          ? "No products found"
                          : "Товары не найдены"
                      : language === "ka"
                        ? "პროდუქტები არ არის"
                        : language === "en"
                          ? "No products available"
                          : "Товары недоступны"}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
