"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { useLanguage } from "@/contexts/language-context"
import { getProductsByCollectionHandle, searchProducts } from "@/lib/shopify"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { ArrowLeft, ShoppingCart } from "lucide-react"

type ShopifyProduct = {
  id: string
  title: string
  description: string
  handle: string
  featuredImage?: {
    url: string
    altText: string
  }
  priceRange: {
    minVariantPrice: {
      amount: string
      currencyCode: string
    }
  }
}

export default function ProductPage() {
  const { handle } = useParams()
  const router = useRouter()
  const { t, language } = useLanguage()
  const [product, setProduct] = useState<ShopifyProduct | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true)
        const results = await searchProducts(String(handle))
        const match = results.find((p: ShopifyProduct) => p.handle === handle)
        if (match) {
          setProduct(match)
        } else {
          setError("Product not found")
        }
      } catch (e) {
        console.error(e)
        setError("Failed to load product")
      } finally {
        setLoading(false)
      }
    }

    if (handle) {
      fetchProduct()
    }
  }, [handle])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Skeleton className="aspect-square w-full" />
          <div className="space-y-4">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-20 w-full" />
            <Skeleton className="h-10 w-1/3" />
          </div>
        </div>
      </div>
    )
  }

  if (error || !product) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-xl text-red-600 mb-4">
          {language === "en"
            ? "Product not found or failed to load."
            : language === "ru"
            ? "Товар не найден или не удалось загрузить."
            : "პროდუქტი ვერ მოიძებნა ან ჩატვირთვა ვერ მოხერხდა."}
        </p>
        <Button onClick={() => router.push("/products")} variant="outline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          {language === "en"
            ? "Back to Products"
            : language === "ru"
            ? "Назад к товарам"
            : "პროდუქტების გვერდზე დაბრუნება"}
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Button onClick={() => router.push("/products")} variant="ghost" className="mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        {language === "en"
          ? "Back to Products"
          : language === "ru"
          ? "Назад к товарам"
          : "პროდუქტების გვერდზე დაბრუნება"}
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="aspect-square overflow-hidden rounded-lg border">
          <Image
            src={product.featuredImage?.url || "/placeholder.svg"}
            alt={product.featuredImage?.altText || product.title}
            width={600}
            height={600}
            unoptimized
            className="h-full w-full object-cover"
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-xl text-gray-800">
            {product.priceRange.minVariantPrice.amount}{" "}
            {product.priceRange.minVariantPrice.currencyCode}
          </p>
          <div className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: product.description }} />
          <Button className="mt-4">
            <ShoppingCart className="mr-2 h-4 w-4" />
            {language === "en"
              ? "Add to Cart"
              : language === "ru"
              ? "Добавить в корзину"
              : "კალათაში დამატება"}
          </Button>
        </div>
      </div>
    </div>
  )
}
