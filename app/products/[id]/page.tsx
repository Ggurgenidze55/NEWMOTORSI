"use client"
import { useLanguage } from "@/contexts/language-context"
import { useEffect, useState } from "react"
import { getProductById, getSimilarProducts, type Product } from "@/lib/products-api"
import { getLocalizedProductName, getLocalizedProductDescription } from "@/lib/supabase"
import Link from "next/link"

export default function ProductPage({ params }: { params: { id: string } }) {
  const { language } = useLanguage()
  const [product, setProduct] = useState<Product | null>(null)
  const [similarProducts, setSimilarProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchProduct() {
      setLoading(true)
      setError(null)
      try {
        const productData = await getProductById(params.id)

        if (!productData) {
          setError("Product not found")
          return
        }

        setProduct(productData)

        // Fetch similar products
        const similar = await getSimilarProducts(productData.category, productData.id)
        setSimilarProducts(similar)
      } catch (error) {
        console.error("Error loading product:", error)
        setError("Failed to load product")
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [params.id])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-300 h-96 rounded-lg"></div>
            <div>
              <div className="bg-gray-300 h-8 rounded mb-4"></div>
              <div className="bg-gray-300 h-6 rounded mb-4 w-24"></div>
              <div className="bg-gray-300 h-4 rounded mb-2"></div>
              <div className="bg-gray-300 h-4 rounded mb-2"></div>
              <div className="bg-gray-300 h-4 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error || !product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {language === "ka" ? "პროდუქტი ვერ მოიძებნა" : language === "en" ? "Product not found" : "Товар не найден"}
          </h1>
          <Link
            href="/products"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            {language === "ka" ? "ყველა პროდუქტი" : language === "en" ? "All Products" : "Все товары"}
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          <li>
            <Link href="/" className="hover:text-blue-600">
              {language === "ka" ? "მთავარი" : language === "en" ? "Home" : "Главная"}
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/products" className="hover:text-blue-600">
              {language === "ka" ? "პროდუქტები" : language === "en" ? "Products" : "Товары"}
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-900">{getLocalizedProductName(product, language)}</li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Image Gallery */}
        <div>
          <div className="space-y-4">
            {product.images && product.images.length > 0 ? (
              <>
                <img
                  src={product.images[0] || "/placeholder.svg"}
                  alt={getLocalizedProductName(product, language)}
                  className="w-full rounded-lg shadow-md"
                />
                {product.images.length > 1 && (
                  <div className="grid grid-cols-3 gap-2">
                    {product.images.slice(1, 4).map((image, index) => (
                      <img
                        key={index}
                        src={image || "/placeholder.svg"}
                        alt={`${getLocalizedProductName(product, language)} ${index + 2}`}
                        className="w-full h-24 object-cover rounded cursor-pointer hover:opacity-75 transition-opacity"
                      />
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">
                  {language === "ka" ? "სურათი არ არის" : language === "en" ? "No image" : "Нет изображения"}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Product Details */}
        <div>
          {/* Product Name */}
          <h1 className="text-4xl font-bold text-gray-800 mb-6">{getLocalizedProductName(product, language)}</h1>

          {/* New Badge */}
          {product.is_new && (
            <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
              {language === "ka" ? "ახალი" : language === "en" ? "New" : "Новый"}
            </span>
          )}

          {/* Price */}
          {product.price > 0 && (
            <div className="mb-6">
              <span className="text-3xl font-bold text-blue-600">₾{product.price.toFixed(2)}</span>
            </div>
          )}

          {/* Description */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-3">
              {language === "ka" ? "აღწერა" : language === "en" ? "Description" : "Описание"}
            </h3>
            <div className="text-gray-700 whitespace-pre-line leading-relaxed">
              {getLocalizedProductDescription(product, language)}
            </div>
          </div>

          {/* Contact Buttons */}
          <div className="space-y-3">
            <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              {language === "ka"
                ? "კონსულტაციისთვის დაგვიკავშირდით"
                : language === "en"
                  ? "Contact for Consultation"
                  : "Связаться для консультации"}
            </button>
            <button className="w-full border border-blue-600 text-blue-600 py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors font-medium">
              {language === "ka" ? "ფასის გაგება" : language === "en" ? "Get Quote" : "Узнать цену"}
            </button>
          </div>
        </div>
      </div>

      {/* Similar Products Section */}
      {similarProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">
            {language === "ka" ? "მსგავსი პროდუქტები" : language === "en" ? "Similar Products" : "Похожие товары"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {similarProducts.map((similarProduct) => (
              <Link
                key={similarProduct.id}
                href={`/products/${similarProduct.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="aspect-w-16 aspect-h-12">
                  <img
                    src={similarProduct.images[0] || "/placeholder.svg"}
                    alt={getLocalizedProductName(similarProduct, language)}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {getLocalizedProductName(similarProduct, language)}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {getLocalizedProductDescription(similarProduct, language).substring(0, 100)}...
                  </p>
                  {similarProduct.price > 0 && (
                    <p className="text-blue-600 font-bold">₾{similarProduct.price.toFixed(2)}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
