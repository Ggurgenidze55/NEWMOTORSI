"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Star } from "lucide-react"

interface Product {
  id: string
  name: string
  description?: string
  price: number
  image: string
  category: string
}

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>()
  const router = useRouter()
  const { t, language } = useLanguage()

  const [product, setProduct] = useState<Product | null>(null)
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([])

  /* 1️⃣ ვიღებთ custom პროდუქტებს მხოლოდ კლაიენტზე */
  useEffect(() => {
    const stored = localStorage.getItem("customProducts")
    if (stored) {
      const list: Product[] = JSON.parse(stored)
      const found = list.find((p) => p.id === id)
      setProduct(found ?? null)

      // მსგავსი პროდუქტები იმავე კატეგორიიდან
      if (found) {
        const similar = list.filter((p) => p.category === found.category && p.id !== found.id).slice(0, 3)
        setRelatedProducts(similar)
      }
    }
  }, [id])

  /* 2️⃣ თუ პროდუქტი ვერ ვიპოვეთ → redirect / 404 */
  if (product === null) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {language === "ka"
                ? "პროდუქტი ვერ მოიძებნა"
                : language === "ru"
                  ? "Товар не найден"
                  : "Product not found"}
            </h1>
            <Link href="/products">
              <Button>
                {language === "ka" ? "ყველა პროდუქტი" : language === "ru" ? "Все товары" : "All Products"}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  /* 3️⃣ პროდუქტის დეტალების ჩვენება */
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">
              {t("home")}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/products" className="hover:text-gray-700">
              {t("products")}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href={`/categories/${product.category}`} className="hover:text-gray-700">
              {product.category}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          {/* Image gallery */}
          <div className="flex flex-col-reverse">
            <div className="w-full aspect-square">
              {product.image.startsWith("data:") ? (
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover object-center sm:rounded-lg"
                />
              ) : (
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover object-center sm:rounded-lg"
                  unoptimized
                />
              )}
            </div>
          </div>

          {/* Product info */}
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 className="text-3xl font-extrabold tracking-tight text-black">{product.name}</h1>

            {/* Category */}
            <div className="mt-4">
              <Link href={`/categories/${product.category}`}>
                <Badge variant="secondary" className="hover:bg-gray-200 cursor-pointer">
                  {product.category}
                </Badge>
              </Link>
            </div>

            {/* Reviews placeholder */}
            <div className="mt-6">
              <h3 className="sr-only">{t("reviews")}</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <Star key={rating} className="text-yellow-400 fill-current h-5 w-5 flex-shrink-0" />
                  ))}
                </div>
                <p className="sr-only">5 out of 5 stars</p>
                <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  {Math.floor(Math.random() * 20) + 5} {t("reviews")}
                </a>
              </div>
            </div>

            {/* Description */}
            {product.description && (
              <div className="mt-6">
                <h3 className="sr-only">{t("description")}</h3>
                <div className="text-base text-gray-700 space-y-6">
                  <p>{product.description}</p>
                </div>
              </div>
            )}

            {/* Contact for price */}
            <div className="mt-8">
              <p className="text-lg font-medium text-gray-900">{t("contactForPrice")}</p>
            </div>

            {/* Actions */}
            <div className="mt-8 flex gap-4">
              <Button variant="outline" onClick={() => router.back()}>
                {language === "ka" ? "უკან" : language === "ru" ? "Назад" : "Back"}
              </Button>
              <Link href="/contact">
                <Button>{language === "ka" ? "კონტაქტი" : language === "ru" ? "Контакт" : "Contact"}</Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
              {language === "ka" ? "მსგავსი პროდუქტები" : language === "ru" ? "Похожие товары" : "Related Products"}
            </h2>

            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
              {relatedProducts.map((relatedProduct) => (
                <div key={relatedProduct.id} className="group relative">
                  <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    {relatedProduct.image.startsWith("data:") ? (
                      <img
                        src={relatedProduct.image || "/placeholder.svg"}
                        alt={relatedProduct.name}
                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                      />
                    ) : (
                      <Image
                        src={relatedProduct.image || "/placeholder.svg"}
                        alt={relatedProduct.name}
                        width={500}
                        height={500}
                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                        unoptimized
                      />
                    )}
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <Link href={`/products/${relatedProduct.id}`}>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {relatedProduct.name}
                        </Link>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{relatedProduct.category}</p>
                      <div className="flex items-center mt-2">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <Star key={rating} className="text-yellow-400 fill-current h-4 w-4 flex-shrink-0" />
                        ))}
                        <p className="ml-2 text-sm text-gray-500">({Math.floor(Math.random() * 20) + 5})</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
