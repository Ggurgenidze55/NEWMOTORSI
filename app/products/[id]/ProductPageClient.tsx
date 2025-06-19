"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Star } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import type { Product } from "@/lib/types"
import { allProducts as getAllProductData } from "@/lib/data"

// Helper function to get product data (simulated)
const getProductById = (productId: string, lang: string): Product | null => {
  const productsData: { [key: string]: any } = {
    "warehouse-1": {
      id: "warehouse-1",
      name: {
        ka: "სასაწყობე სტელაჟი",
        en: "Warehouse Shelving Unit",
        ru: "Складской стеллаж",
      },
      price: 450.0,
      description: {
        ka: `პროფესიონალური სასაწყობე სტელაჟი მძიმე ტვირთებისთვის. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია საწყობებისა და ინდუსტრიული ობიექტებისთვის.`,
        en: `Professional warehouse shelving for heavy loads. Made from high-quality metal, ideal for warehouses and industrial facilities.`,
        ru: `Профессиональный складской стеллаж для тяжелых грузов. Изготовлен из высококачественного металла, идеален для складов и промышленных объектов.`,
      },
      features: {
        ka: ["სიმაღლე: 200სმ", "სიგანე: 100სმ", "დატვირთვა: 300კგ/იარუსი"],
        en: ["Height: 200cm", "Width: 100cm", "Load: 300kg/tier"],
        ru: ["Высота: 200см", "Ширина: 100см", "Нагрузка: 300кг/ярус"],
      },
      images: ["/images/blue-warehouse-shelving.png", "/images/blue-orange-warehouse-shelving.jpg"],
      category: { ka: "სასაწყობე სტელაჟები", en: "Warehouse Shelving", ru: "Складские стеллажи" },
      rating: 4.8,
      reviewCount: 24,
      sku: "WH-001",
      brand: { name: "ნიუ მოტორსი" },
      availability: "https://schema.org/InStock",
      currency: "GEL",
    },
    "kitchen-shelf-1": {
      id: "kitchen-shelf-1",
      name: {
        ka: "სამზარეულოს სტელაჟი 200x60x35",
        en: "Kitchen Shelf 200x60x35",
        ru: "Кухонный стеллаж 200x60x35",
      },
      price: 0, // Price hidden
      description: {
        ka: `სამზარეულოს სტელაჟი, ვერცხლისფერი. იდეალურია სამზარეულოს ნივთების მოსახერხებლად განსათავსებლად.`,
        en: `Kitchen shelf, silver. Ideal for conveniently organizing kitchen items.`,
        ru: `Кухонный стеллаж, серебристый. Идеально подходит для удобного размещения кухонных принадлежностей.`,
      },
      features: {
        ka: ["სიმაღლე: 200სმ", "სიგანე: 60სმ", "სიღრმე: 35სმ", "5 თარო", "დატვირთვა: 250კგ/თარო"],
        en: ["Height: 200cm", "Width: 60cm", "Depth: 35cm", "5 shelves", "Load: 250kg/shelf"],
        ru: ["Высота: 200см", "Ширина: 60см", "Глубина: 35см", "5 полок", "Нагрузка: 250кг/полка"],
      },
      images: ["/images/kitchen-shelving/kitchen-shelf-1.png"],
      category: { ka: "სამზარეულოს სტელაჟები", en: "Kitchen Shelving", ru: "Кухонные стеллажи" },
      rating: 4.5,
      reviewCount: 5,
      sku: "KS-001",
      brand: { name: "ნიუ მოტორსი" },
      availability: "https://schema.org/InStock",
      currency: "GEL",
    },
    "warehouse-2": {
      id: "warehouse-2",
      name: {
        ka: "სასაწყობე სტელაჟი ნარინჯისფერი",
        en: "Warehouse Shelving Unit Orange",
        ru: "Складской стеллаж Оранжевый",
      },
      price: 460.0,
      description: {
        ka: `მტკიცე სასაწყობე სტელაჟი, ნარინჯისფერი აქცენტებით. განკუთვნილია მძიმე ტვირთისთვის.`,
        en: `Robust warehouse shelving with orange accents. Designed for heavy loads.`,
        ru: `Прочный складской стеллаж с оранжевыми акцентами. Предназначен для тяжелых грузов.`,
      },
      features: {
        ka: ["სიმაღლე: 220სმ", "სიგანე: 120სმ", "დატვირთვა: 350კგ/იარუსი"],
        en: ["Height: 220cm", "Width: 120cm", "Load: 350kg/tier"],
        ru: ["Высота: 220см", "Ширина: 120см", "Нагрузка: 350кг/ярус"],
      },
      images: ["/images/blue-orange-warehouse-shelving.jpg"],
      category: { ka: "სასაწყობე სტელაჟები", en: "Warehouse Shelving", ru: "Складские стеллажи" },
      rating: 4.7,
      reviewCount: 18,
      sku: "WH-002",
      brand: { name: "ნიუ მოტორსი" },
      availability: "https://schema.org/InStock",
      currency: "GEL",
    },
  }
  const productData = productsData[productId]
  if (!productData) return null

  return {
    id: productData.id,
    name: productData.name[lang] || productData.name.ka,
    price: productData.price,
    description: productData.description[lang] || productData.description.ka,
    features: productData.features[lang] || productData.features.ka,
    images: productData.images,
    category: productData.category[lang] || productData.category.ka,
    rating: productData.rating,
    reviewCount: productData.reviewCount,
    sku: productData.sku,
    brand: productData.brand,
    availability: productData.availability,
    currency: productData.currency,
  } as Product
}

export default function ProductPageClient({ params }: { params: { id: string } }) {
  const { t, language } = useLanguage()
  const product = getProductById(params.id, language)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">{t("productNotFound") || "Product not found"}</h1>
          <Link href="/products" className="text-blue-600 hover:underline">
            {t("browseProducts") || "Back to products"}
          </Link>
        </div>
      </div>
    )
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://newmotorsi.ge"

  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    image: product.images.map((img) => `${siteUrl}${img}`),
    description: product.description,
    sku: product.sku,
    mpn: product.sku,
    brand: {
      "@type": "Brand",
      name: product.brand?.name || "ნიუ მოტორსი",
    },
    review:
      product.reviewCount > 0
        ? {
            "@type": "Review",
            reviewRating: {
              "@type": "Rating",
              ratingValue: product.rating.toString(),
              bestRating: "5",
            },
            author: {
              "@type": "Person",
              name: "Customer",
            },
          }
        : undefined,
    aggregateRating:
      product.reviewCount > 0
        ? {
            "@type": "AggregateRating",
            ratingValue: product.rating.toString(),
            reviewCount: product.reviewCount.toString(),
          }
        : undefined,
    offers: {
      "@type": "Offer",
      url: `${siteUrl}/products/${product.id}`,
      priceCurrency: product.currency || "GEL",
      price: product.price > 0 ? product.price.toString() : "0",
      priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString(),
      itemCondition: "https://schema.org/NewCondition",
      availability: product.availability || "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "ნიუ მოტორსი",
      },
    },
  }

  const allSiteProducts = getAllProductData
  const relatedProducts = allSiteProducts
    .filter((p: any) => {
      const pCategoryName = p.category?.[language] || p.category?.ka
      return pCategoryName === product.category && p.id !== product.id
    })
    .slice(0, 4)
    .map((p: any) => ({
      id: p.id,
      name: p.name?.[language] || p.name?.ka || "Related Product",
      image: p.images?.[0] || p.image || "/placeholder.svg",
      category: p.category?.[language] || p.category?.ka || "Category",
      rating: p.rating || 0,
      reviewCount: p.reviewCount || 0,
      price: p.price,
      currency: p.currency || "GEL",
    }))

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <div className="min-h-screen bg-gray-50">
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
              <span className="text-gray-900">{product.name}</span>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
            <div className="flex flex-col-reverse">
              <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
                <div className="grid grid-cols-4 gap-6">
                  {product.images.map((image, index) => (
                    <div
                      key={index}
                      className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-indigo-500"
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${product.name} ${index + 1}`}
                        fill
                        className="object-cover object-center rounded-md"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full aspect-square">
                <Image
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover object-center sm:rounded-lg"
                />
              </div>
            </div>

            <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{product.name}</h1>

              {product.price > 0 ? (
                <div className="mt-3">
                  <p className="text-3xl text-gray-900">
                    {product.price} {product.currency}
                  </p>
                </div>
              ) : (
                <div className="mt-3">
                  <p className="text-xl text-gray-700">{t("priceOnRequest") || "Price on request"}</p>
                </div>
              )}

              <div className="mt-6">
                <h3 className="sr-only">{t("reviews")}</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <Star
                        key={rating}
                        className={`${
                          product.rating > rating ? "text-yellow-400 fill-current" : "text-gray-300"
                        } h-5 w-5 flex-shrink-0`}
                      />
                    ))}
                  </div>
                  <p className="sr-only">{product.rating} out of 5 stars</p>
                  {product.reviewCount > 0 && (
                    <a href="#reviews" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                      {product.reviewCount} {t("reviews")}
                    </a>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <h3 className="sr-only">{t("description")}</h3>
                <div
                  className="text-base text-gray-700 space-y-6"
                  dangerouslySetInnerHTML={{
                    __html: product.description.replace(/\n/g, "<br>"),
                  }}
                />
              </div>

              {product.price === 0 && (
                <div className="mt-10">
                  <Link
                    href={`/contact?product=${encodeURIComponent(product.name)}&id=${product.id}`}
                    className="w-full bg-primary text-white py-3 px-6 rounded-md hover:bg-primary/90 transition-colors text-lg font-semibold flex items-center justify-center"
                  >
                    {t("requestQuote") || "Request a Quote"}
                  </Link>
                </div>
              )}

              <section className="mt-12" aria-labelledby="features-heading">
                <h2 id="features-heading" className="text-xl font-medium text-gray-900 mb-4">
                  {t("features")}
                </h2>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
                  {Array.isArray(product.features) ? (
                    product.features.map((feature: string, index: number) => <li key={index}>{feature}</li>)
                  ) : (
                    <p>{t("featuresNotAvailable") || "Features not available"}</p>
                  )}
                </ul>
              </section>
            </div>
          </div>

          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-6">{t("relatedProducts")}</h2>
              <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                {relatedProducts.map((relatedProduct) => (
                  <div
                    key={relatedProduct.id}
                    className="group relative bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  >
                    <div className="w-full min-h-60 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-60 lg:aspect-none">
                      <Image
                        src={relatedProduct.image || "/placeholder.svg"}
                        alt={relatedProduct.name}
                        width={300}
                        height={300}
                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                      />
                    </div>
                    <div className="mt-4 flex flex-col">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <Link href={`/products/${relatedProduct.id}`}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {relatedProduct.name}
                          </Link>
                        </h3>
                        <div className="flex items-center mt-1">
                          {[0, 1, 2, 3, 4].map((rating) => (
                            <Star
                              key={rating}
                              className={`${
                                relatedProduct.rating > rating ? "text-yellow-400 fill-current" : "text-gray-300"
                              } h-4 w-4 flex-shrink-0`}
                            />
                          ))}
                          <p className="ml-2 text-xs text-gray-500">({relatedProduct.reviewCount})</p>
                        </div>
                      </div>
                      {relatedProduct.price > 0 ? (
                        <p className="text-sm font-medium text-gray-900 mt-2">
                          {relatedProduct.price} {relatedProduct.currency}
                        </p>
                      ) : (
                        <p className="text-xs text-gray-600 mt-2">{t("priceOnRequest") || "Price on request"}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
