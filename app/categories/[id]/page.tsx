"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import WooCommerceAPI, { type WooProduct } from "@/lib/woo"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { ArrowLeft, ShoppingCart, Heart } from "lucide-react"

export default function ProductPage() {
  const { id } = useParams()
  const router = useRouter()
  const { t, language } = useLanguage()

  const [product, setProduct] = useState<WooProduct | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true)
        setError(null)

        const productId = Number(id)
        if (isNaN(productId)) {
          setError("Invalid product ID")
          return
        }

        const wooProduct = await WooCommerceAPI.getProduct(productId)
        setProduct(wooProduct)
      } catch (err) {
        console.error("Error fetching product:", err)
        setError("Failed to load product")
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchProduct()
    }
  }, [id])

  const getErrorMessage = () => {
    switch (language) {
      case "en":
        return "Product not found or failed to load."
      case "ru":
        return "Товар не найден или не удалось загрузить."
      default:
        return "პროდუქტი ვერ მოიძებნა ან ჩატვირთვა ვერ მოხერხდა."
    }
  }

  const getBackButtonText = () => {
    switch (language) {
      case "en":
        return "Back to Products"
      case "ru":
        return "Назад к товарам"
      default:
        return "პროდუქტების სიაში დაბრუნება"
    }
  }

  const getAddToCartText = () => {
    switch (language) {
      case "en":
        return "Add to Cart"
      case "ru":
        return "Добавить в корзину"
      default:
        return "კალათაში დამატება"
    }
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Skeleton className="aspect-square w-full" />
          <div className="space-y-4">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-6 w-1/4" />
            <Skeleton className="h-20 w-full" />
            <Skeleton className="h-10 w-1/3" />
          </div>
        </div>
      </div>
    )
  }

  if (error || !product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-xl text-red-600 mb-4">{getErrorMessage()}</p>
          <Button onClick={() => router.push("/products")} variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {getBackButtonText()}
          </Button>
        </div>
      </div>
    )
  }

  const productPrice = WooCommerceAPI.getProductPrice(product)
  // --- helper to make sure we never try to render an object as text -------------
  const safeDisplayPrice = (value: unknown) => {
    if (typeof value === "string" && value.trim()) return value // OK
    if (typeof value === "number") return WooCommerceAPI.formatPrice(String(value))
    // value is an object/Error/null → show a placeholder
    return language === "en" ? "Unavailable" : language === "ru" ? "Недоступно" : "მიუწვდომელია"
  }
  const mainImage = WooCommerceAPI.getProductMainImage(product)
  const isInStock = WooCommerceAPI.isProductInStock(product)
  const isOnSale = WooCommerceAPI.isProductOnSale(product)

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <Button onClick={() => router.push("/products")} variant="ghost" className="mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        {getBackButtonText()}
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-lg border">
            <Image
              src={mainImage || "/placeholder.svg"}
              alt={product.name}
              width={600}
              height={600}
              unoptimized
              className="h-full w-full object-cover"
            />
          </div>

          {/* Additional Images */}
          {product.images && product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {product.images.slice(1, 5).map((image, index) => (
                <div key={index} className="aspect-square overflow-hidden rounded border">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={`${product.name} ${index + 2}`}
                    width={150}
                    height={150}
                    unoptimized
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              {isOnSale && (
                <Badge variant="destructive">
                  {language === "en" ? "Sale" : language === "ru" ? "Скидка" : "ფასდაკლება"}
                </Badge>
              )}
              {product.featured && (
                <Badge className="bg-[#00adef] text-white">
                  {language === "en" ? "Featured" : language === "ru" ? "Рекомендуемый" : "რეკომენდებული"}
                </Badge>
              )}
              {!isInStock && (
                <Badge variant="secondary">
                  {language === "en" ? "Out of Stock" : language === "ru" ? "Нет в наличии" : "არ არის მარაგში"}
                </Badge>
              )}
            </div>

            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>

            {product.categories && product.categories.length > 0 && (
              <p className="text-sm text-gray-600 mt-1">{product.categories.map((cat) => cat.name).join(", ")}</p>
            )}
          </div>

          {/* Price */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              {isOnSale && typeof productPrice.sale === "number" ? (
                <>
                  <span className="text-2xl font-bold text-red-600">
                    {WooCommerceAPI.formatPrice(String(productPrice.sale))}
                  </span>
                  <span className="text-lg text-gray-500 line-through">
                    {WooCommerceAPI.formatPrice(String(productPrice.regular))}
                  </span>
                </>
              ) : (
                <span className="text-2xl font-bold text-gray-900">{safeDisplayPrice(productPrice.display)}</span>
              )}
            </div>
          </div>

          {/* Description */}
          {product.description && (
            <div className="prose prose-sm max-w-none">
              <div dangerouslySetInnerHTML={{ __html: product.description }} />
            </div>
          )}

          {/* Short Description */}
          {product.short_description && (
            <div className="prose prose-sm max-w-none">
              <div dangerouslySetInnerHTML={{ __html: product.short_description }} />
            </div>
          )}

          {/* Product Details */}
          <div className="space-y-2 text-sm">
            {product.sku && (
              <p>
                <strong>SKU:</strong> {product.sku}
              </p>
            )}
            {product.stock_quantity !== null && (
              <p>
                <strong>{language === "en" ? "Stock:" : language === "ru" ? "Остаток:" : "მარაგი:"}</strong>{" "}
                {product.stock_quantity}
              </p>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <Button size="lg" className="flex-1" disabled={!isInStock}>
              <ShoppingCart className="mr-2 h-4 w-4" />
              {getAddToCartText()}
            </Button>
            <Button size="lg" variant="outline">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
