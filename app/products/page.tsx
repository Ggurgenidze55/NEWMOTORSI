"use client"

import { useEffect, useState } from "react"
import ProductCard from "@/components/product-card"
import SubcategoryNavigation from "@/components/subcategory-navigation"
import { useLanguage } from "@/contexts/language-context"
import { Skeleton } from "@/components/ui/skeleton"
import ShopifyAPI from "@/lib/shopify"

export default function ProductsPage() {
  const { language } = useLanguage()
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        setError(null)

        const shopifyProducts = await ShopifyAPI.getProducts(20)
        if (shopifyProducts) {
          setProducts(shopifyProducts)
        } else {
          setError("Failed to fetch products")
        }
      } catch (err) {
        console.error("Error fetching products:", err)
        setError("Failed to fetch products")
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">
        {language === "en" ? "Products" : language === "ru" ? "Товары" : "პროდუქტები"}
      </h1>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} className="aspect-square w-full" />
          ))}
        </div>
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : products.length === 0 ? (
        <p>{language === "en" ? "No products found." : language === "ru" ? "Товары не найдены." : "პროდუქტები არ მოიძებნა."}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      )}
    </div>
  )
}
