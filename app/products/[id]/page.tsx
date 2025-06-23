"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Star, Phone, Mail } from "lucide-react"
import Link from "next/link"
import { getProductById, getProductsByCategory } from "@/lib/products-api"
import type { Product } from "@/lib/supabase"

// Default products for fallback
const defaultProducts = [
  {
    id: "market-shelf-gondola-135",
    name: "მარკეტის თარო გონდოლა 135სმ",
    description:
      "მაღალი ხარისხის მარკეტის თარო, იდეალურია პროდუქტების ჩვენებისთვის. მტკიცე კონსტრუქცია და ელეგანტური დიზაინი.",
    price: 450,
    image: "/images/market-shelves/market-shelf-gondola-135.jpg",
    category: "market-shelves",
  },
  {
    id: "market-shelf-single-165",
    name: "მარკეტის ერთმხრივი თარო 165სმ",
    description: "ერთმხრივი მარკეტის თარო, შესანიშნავია მცირე ფართობის მაღაზიებისთვის.",
    price: 320,
    image: "/images/market-shelves/market-shelf-single-165.jpg",
    category: "market-shelves",
  },
  {
    id: "warehouse-shelving-blue",
    name: "საწყობის ლურჯი თარო",
    description: "მძლავრი საწყობის თარო, გამძლე და ფუნქციური.",
    price: 280,
    image: "/images/blue-warehouse-shelving.png",
    category: "warehouse-shelving",
  },
]

const categoryNames: Record<string, string> = {
  "market-shelves": "მარკეტის თაროები",
  "warehouse-shelving": "საწყობის თაროები",
  "kitchen-shelving": "სამზარეულოს თაროები",
  "clothing-racks": "ტანსაცმლის თაროები",
  trolleys: "ურიკები",
  accessories: "აქსესუარები",
}

export default function ProductDetailPage() {
  const params = useParams()
  const productId = params.id as string

  const [product, setProduct] = useState<Product | null>(null)
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProduct() {
      try {
        // Try to get from Supabase first
        const supabaseProduct = await getProductById(productId)

        if (supabaseProduct) {
          setProduct(supabaseProduct)
          // Get related products from same category
          const related = await getProductsByCategory(supabaseProduct.category)
          setRelatedProducts(related.filter((p) => p.id !== productId).slice(0, 4))
        } else {
          // Fallback to default products
          const defaultProduct = defaultProducts.find((p) => p.id === productId)
          if (defaultProduct) {
            setProduct({
              id: defaultProduct.id,
              name: defaultProduct.name,
              description: defaultProduct.description,
              price: defaultProduct.price,
              category: defaultProduct.category,
              image_url: defaultProduct.image,
              created_at: "",
              updated_at: "",
            })

            // Get related default products
            const related = defaultProducts
              .filter((p) => p.category === defaultProduct.category && p.id !== productId)
              .slice(0, 4)
              .map((p) => ({
                id: p.id,
                name: p.name,
                description: p.description,
                price: p.price,
                category: p.category,
                image_url: p.image,
                created_at: "",
                updated_at: "",
              }))
            setRelatedProducts(related)
          }
        }
      } catch (error) {
        console.error("Error fetching product:", error)
      } finally {
        setLoading(false)
      }
    }

    if (productId) {
      fetchProduct()
    }
  }, [productId])

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

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">პროდუქტი ვერ მოიძებნა</h1>
          <Link href="/products">
            <Button>უკან დაბრუნება</Button>
          </Link>
        </div>
      </div>
    )
  }

  const categoryName = categoryNames[product.category] || product.category

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">მთავარი</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/products">პროდუქტები</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/categories/${product.category}`}>{categoryName}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbPage>{product.name}</BreadcrumbPage>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Product Image */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
            <img
              src={product.image_url || "/placeholder.svg?height=500&width=500"}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <Link href={`/categories/${product.category}`}>
              <Badge variant="secondary" className="mb-2 cursor-pointer hover:bg-gray-200">
                {categoryName}
              </Badge>
            </Link>
            <h1 className="text-3xl font-bold text-black mb-4">{product.name}</h1>

            {/* Stars */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-gray-600">(24 მიმოხილვა)</span>
            </div>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed">
              {product.description || "მაღალი ხარისხის პროდუქტი, რომელიც აკმაყოფილებს ყველა თქვენს მოთხოვნას."}
            </p>
          </div>

          {/* Contact for Price */}
          <div className="space-y-4">
            <div className="flex gap-4">
              <Button size="lg" className="flex-1">
                <Phone className="w-4 h-4 mr-2" />
                დარეკვა ფასისთვის
              </Button>
              <Button variant="outline" size="lg" className="flex-1">
                <Mail className="w-4 h-4 mr-2" />
                კონტაქტი
              </Button>
            </div>
          </div>

          {/* Features */}
          <div className="border-t pt-6">
            <h3 className="font-semibold mb-3">მახასიათებლები:</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• მაღალი ხარისხის მასალები</li>
              <li>• გრძელვადიანი გარანტია</li>
              <li>• მარტივი ინსტალაცია</li>
              <li>• პროფესიონალური მხარდაჭერა</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">მსგავსი პროდუქტები</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Card key={relatedProduct.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={relatedProduct.image_url || "/placeholder.svg?height=300&width=300"}
                    alt={relatedProduct.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-sm mb-2 line-clamp-2">{relatedProduct.name}</h3>
                  <div className="flex items-center gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Link href={`/products/${relatedProduct.id}`}>
                    <Button variant="outline" size="sm" className="w-full">
                      დეტალები
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
