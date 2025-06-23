"use client"

import ProductCard from "@/components/product-card"
import SubcategoryNavigation from "@/components/subcategory-navigation"
import { useLanguage } from "@/contexts/language-context"
import { useEffect, useState } from "react"
import { getProducts } from "@/lib/products-api"
import type { Product } from "@/lib/supabase"

// Default products (existing ones)
const defaultProducts = [
  {
    id: "market-shelf-gondola-135",
    name: "მარკეტის თარო გონდოლა 135სმ",
    price: 450,
    image: "/images/market-shelves/market-shelf-gondola-135.jpg",
    category: "market-shelves",
  },
  {
    id: "market-shelf-single-165",
    name: "მარკეტის ერთმხრივი თარო 165სმ",
    price: 320,
    image: "/images/market-shelves/market-shelf-single-165.jpg",
    category: "market-shelves",
  },
  {
    id: "warehouse-shelving-blue",
    name: "საწყობის ლურჯი თარო",
    price: 280,
    image: "/images/blue-warehouse-shelving.png",
    category: "warehouse-shelving",
  },
  {
    id: "kitchen-shelf-chrome",
    name: "სამზარეულოს ქრომირებული თარო",
    price: 180,
    image: "/images/kitchen-shelving/chrome-wire-shelf-200x120.jpeg",
    category: "kitchen-shelving",
  },
  {
    id: "clothing-rack-1",
    name: "ტანსაცმლის თარო",
    price: 150,
    image: "/images/clothing-rack-1.jpg",
    category: "clothing-racks",
  },
  {
    id: "platform-trolley-blue",
    name: "პლატფორმული ურიკა ლურჯი",
    price: 120,
    image: "/images/platform-trolley-blue.jpeg",
    category: "trolleys",
  },
]

export default function ProductsPage() {
  const { t, language } = useLanguage()
  const [customProducts, setCustomProducts] = useState([])
  const [supabaseProducts, setSupabaseProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  // Load custom products from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("customProducts")
    if (stored) {
      setCustomProducts(JSON.parse(stored))
    }
  }, [])

  useEffect(() => {
    async function fetchProducts() {
      try {
        const products = await getProducts()
        setSupabaseProducts(products)
      } catch (error) {
        console.error("Error fetching products:", error)
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

  // Combine default products with Supabase products
  const allProducts = [
    ...supabaseProducts.map((product) => ({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image_url,
      category: product.category,
    })),
    ...defaultProducts,
  ]

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">იტვირთება...</p>
        </div>
      </div>
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
                <h1 className="text-4xl font-bold tracking-tight mb-4 text-black">{t("allProducts")}</h1>
                <p className="text-xl text-black max-w-2xl mx-auto">{t("browseOurCompleteCollection")}</p>
                <p className="text-sm text-black mt-2">
                  {allProducts.length} {t("products")}
                </p>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {allProducts.map((product) => (
                  <ProductCard key={product.id} {...product} hidePrice={true} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {allProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">პროდუქტები ვერ მოიძებნა</p>
        </div>
      )}
    </>
  )
}
