"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Star, Truck } from "lucide-react"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import ProductCard from "@/components/product-card"
import { useLanguage } from "@/contexts/language-context"

export default function ProductPage({ params }: { params: { id: string } }) {
  const { t, language } = useLanguage()

  // Get product data based on ID
  const getProductData = (productId: string) => {
    const products = {
      "warehouse-1": {
        id: "warehouse-1",
        name: t("warehouseShelvingUnit"),
        price: 450.0,
        description: {
          ka: `პროფესიონალური სასაწყობე სტელაჟი მძიმე ტვირთებისთვის. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია საწყობებისა და ინდუსტრიული ობიექტებისთვის.

**ტექნიკური მახასიათებლები:**
• სიმაღლე: 200 ან 250 სმ
• სიგანე: 100 სმ  
• სიღრმე: 60 სმ
• იარუსების რაოდენობა: 4
• დატვირთვა: 300 კგ ერთ იარუსზე

შესაძლებელია იარუსების რაოდენობის შეცვლა და სტელაჟების გადაბმა. ფერების ფართო არჩევანი.`,
          en: `Professional warehouse shelving for heavy loads. Made from high-quality metal, ideal for warehouses and industrial facilities.

**Technical Specifications:**
• Height: 200 or 250 cm
• Width: 100 cm
• Depth: 60 cm
• Number of tiers: 4
• Load capacity: 300 kg per tier

Adjustable tier quantity and expandable system possible. Wide color selection available.`,
          ru: `Профессиональный складской стеллаж для тяжелых грузов. Изготовлен из высококачественного металла, идеален для складов и промышленных объектов.

**Технические характеристики:**
• Высота: 200 или 250 см
• Ширина: 100 см
• Глубина: 60 см
• Количество ярусов: 4
• Нагрузка: 300 кг на ярус

Возможно изменение количества ярусов и расширение системы. Широкий выбор цветов.`,
        },
        features: {
          ka: [
            "სიმაღლე: 200 ან 250 სმ",
            "სიგანე: 100 სმ",
            "სიღრმე: 60 სმ",
            "იარუსების რაოდენობა: 4",
            "დატვირთვა: 300 კგ ერთ იარუსზე",
            "მაღალი ხარისხის ლითონი",
            "კოროზიისგან დაცული",
            "მარტივი მონტაჟი",
          ],
          en: [
            "Height: 200 or 250 cm",
            "Width: 100 cm",
            "Depth: 60 cm",
            "Number of tiers: 4",
            "Load capacity: 300 kg per tier",
            "High-quality metal",
            "Corrosion resistant",
            "Easy assembly",
          ],
          ru: [
            "Высота: 200 или 250 см",
            "Ширина: 100 см",
            "Глубина: 60 см",
            "Количество ярусов: 4",
            "Нагрузка: 300 кг на ярус",
            "Высококачественный металл",
            "Устойчив к коррозии",
            "Простая сборка",
          ],
        },
        images: ["/images/blue-warehouse-shelving.png"],
        colors: [t("blue")],
        sizes: ["200x100x60", "250x100x60"],
        category: t("warehouseShelving"),
        rating: 4.8,
        reviewCount: 24,
      },
      "pallet-shelving-1": {
        id: "pallet-shelving-1",
        name: t("palletShelvingUnit1"),
        price: 850.0,
        description: {
          ka: `პროფესიონალური საპალეტე სტელაჟი ინდუსტრიული საწყობებისთვის. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია მძიმე ტვირთების ორგანიზებული შენახვისთვის.

**ტექნიკური მახასიათებლები:**
• სიმაღლე: 352 სმ
• სიგანე: 270 სმ
• სიღრმე: 85 სმ
• დატვირთვა: 2000 კგ ერთ იარუსზე
• მასალა: მაღალი ხარისხის ლითონი

იდეალურია საპალეტე ტვირთების, დიდი ზომის ყუთების და ინდუსტრიული მასალების შენახვისთვის.`,
          en: `Professional pallet racking for industrial warehouses. Made from high-quality metal, ideal for organized storage of heavy loads.

**Technical Specifications:**
• Height: 352 cm
• Width: 270 cm
• Depth: 85 cm
• Load capacity: 2000 kg per tier
• Material: High-quality metal

Perfect for storing palletized goods, large boxes and industrial materials.`,
          ru: `Профессиональный паллетный стеллаж для промышленных складов. Изготовлен из высококачественного металла, идеален для организованного хранения тяжелых грузов.

**Технические характеристики:**
• Высота: 352 см
• Ширина: 270 см
• Глубина: 85 см
• Нагрузка: 2000 кг на ярус
• Материал: Высококачественный металл

Идеален для хранения паллетированных товаров, больших коробок и промышленных материалов.`,
        },
        features: {
          ka: [
            "სიმაღლე: 352 სმ",
            "სიგანე: 270 სმ",
            "სიღრმე: 85 სმ",
            "დატვირთვა: 2000 კგ ერთ იარუსზე",
            "მაღალი ხარისხის ლითონი",
            "კოროზიისგან დაცული",
            "გაფართოებადი სისტემა",
            "ინდუსტრიული ხარისხი",
          ],
          en: [
            "Height: 352 cm",
            "Width: 270 cm",
            "Depth: 85 cm",
            "Load capacity: 2000 kg per tier",
            "High-quality metal",
            "Corrosion resistant",
            "Expandable system",
            "Industrial grade",
          ],
          ru: [
            "Высота: 352 см",
            "Ширина: 270 см",
            "Глубина: 85 см",
            "Нагрузка: 2000 кг на ярус",
            "Высококачественный металл",
            "Устойчив к коррозии",
            "Расширяемая система",
            "Промышленный класс",
          ],
        },
        images: ["/images/pallet-shelving-1.jpg"],
        colors: [t("blue"), "ნარინჯისფერი"],
        sizes: ["352x270x85"],
        category: t("palletShelving"),
        rating: 4.9,
        reviewCount: 8,
      },
      "pallet-shelving-2": {
        id: "pallet-shelving-2",
        name: t("palletShelvingUnit2"),
        price: 950.0,
        description: {
          ka: `პროფესიონალური საპალეტე სტელაჟი ინდუსტრიული საწყობებისთვის. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია მძიმე ტვირთების ორგანიზებული შენახვისთვის.

**ტექნიკური მახასიათებლები:**
• სიმაღლე: 352 სმ
• სიგანე: 270 სმ
• სიღრმე: 105 სმ
• დატვირთვა: 3000 კგ ერთ იარუსზე
• მასალა: მაღალი ხარისხის ლითონი

იდეალურია საპალეტე ტვირთების, დიდი ზომის ყუთების და ინდუსტრიული მასალების შენახვისთვის.`,
          en: `Professional pallet racking for industrial warehouses. Made from high-quality metal, ideal for organized storage of heavy loads.

**Technical Specifications:**
• Height: 352 cm
• Width: 270 cm
• Depth: 105 cm
• Load capacity: 3000 kg per tier
• Material: High-quality metal

Perfect for storing palletized goods, large boxes and industrial materials.`,
          ru: `Профессиональный паллетный стеллаж для промышленных складов. Изготовлен из высококачественного металла, идеален для организованного хранения тяжелых грузов.

**Технические характеристики:**
• Высота: 352 см
• Ширина: 270 см
• Глубина: 105 см
• Нагрузка: 3000 кг на ярус
• Материал: Высококачественный металл

Идеален для хранения паллетированных товаров, больших коробок и промышленных материалов.`,
        },
        features: {
          ka: [
            "სიმაღლე: 352 სმ",
            "სიგანე: 270 სმ",
            "სიღრმე: 105 სმ",
            "დატვირთვა: 3000 კგ ერთ იარუსზე",
            "მაღალი ხარისხის ლითონი",
            "კოროზიისგან დაცული",
            "გაფართოებადი სისტემა",
            "ინდუსტრიული ხარისხი",
          ],
          en: [
            "Height: 352 cm",
            "Width: 270 cm",
            "Depth: 105 cm",
            "Load capacity: 3000 kg per tier",
            "High-quality metal",
            "Corrosion resistant",
            "Expandable system",
            "Industrial grade",
          ],
          ru: [
            "Высота: 352 см",
            "Ширина: 270 см",
            "Глубина: 105 см",
            "Нагрузка: 3000 кг на ярус",
            "Высококачественный металл",
            "Устойчив к коррозии",
            "Расширяемая система",
            "Промышленный класс",
          ],
        },
        images: ["/images/pallet-shelving-2.jpg"],
        colors: [t("blue"), "ნარინჯისფერი"],
        sizes: ["352x270x105"],
        category: t("palletShelving"),
        rating: 4.8,
        reviewCount: 12,
      },
      "pallet-shelving-3": {
        id: "pallet-shelving-3",
        name: t("palletShelvingUnit3"),
        price: 1050.0,
        description: {
          ka: `პროფესიონალური საპალეტე სტელაჟი ინდუსტრიული საწყობებისთვის. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია მძიმე ტვირთების ორგანიზებული შენახვისთვის.

**ტექნიკური მახასიათებლები:**
• სიმაღლე: 405 სმ
• სიგანე: 270 სმ
• სიღრმე: 105 სმ
• დატვირთვა: 3000 კგ ერთ იარუსზე
• მასალა: მაღალი ხარისხის ლითონი

იდეალურია საპალეტე ტვირთების, დიდი ზომის ყუთების და ინდუსტრიული მასალების შენახვისთვის.`,
          en: `Professional pallet racking for industrial warehouses. Made from high-quality metal, ideal for organized storage of heavy loads.

**Technical Specifications:**
• Height: 405 cm
• Width: 270 cm
• Depth: 105 cm
• Load capacity: 3000 kg per tier
• Material: High-quality metal

Perfect for storing palletized goods, large boxes and industrial materials.`,
          ru: `Профессиональный паллетный стеллаж для промышленных складов. Изготовлен из высококачественного металла, идеален для организованного хранения тяжелых грузов.

**Технические характеристики:**
• Высота: 405 см
• Ширина: 270 см
• Глубина: 105 см
• Нагрузка: 3000 кг на ярус
• Материал: Высококачественный металл

Идеален для хранения паллетированных товаров, больших коробок и промышленных материалов.`,
        },
        features: {
          ka: [
            "სიმაღლე: 405 სმ",
            "სიგანე: 270 სმ",
            "სიღრმე: 105 სმ",
            "დატვირთვა: 3000 კგ ერთ იარუსზე",
            "მაღალი ხარისხის ლითონი",
            "კოროზიისგან დაცული",
            "გაფართოებადი სისტემა",
            "ინდუსტრიული ხარისხი",
          ],
          en: [
            "Height: 405 cm",
            "Width: 270 cm",
            "Depth: 105 cm",
            "Load capacity: 3000 kg per tier",
            "High-quality metal",
            "Corrosion resistant",
            "Expandable system",
            "Industrial grade",
          ],
          ru: [
            "Высота: 405 см",
            "Ширина: 270 см",
            "Глубина: 105 см",
            "Нагрузка: 3000 кг на ярус",
            "Высококачественный металл",
            "Устойчив к коррозии",
            "Расширяемая система",
            "Промышленный класс",
          ],
        },
        images: ["/images/pallet-shelving-3.jpg"],
        colors: [t("blue"), "ნარინჯისფერი"],
        sizes: ["405x270x105"],
        category: t("palletShelving"),
        rating: 4.9,
        reviewCount: 6,
      },
      "pallet-shelving-4": {
        id: "pallet-shelving-4",
        name: t("palletShelvingUnit4"),
        price: 1250.0,
        description: {
          ka: `პროფესიონალური საპალეტე სტელაჟი ინდუსტრიული საწყობებისთვის. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია მძიმე ტვირთების ორგანიზებული შენახვისთვის.

**ტექნიკური მახასიათებლები:**
• სიმაღლე: 502 სმ
• სიგანე: 270 სმ
• სიღრმე: 105 სმ
• დატვირთვა: 3000 კგ ერთ იარუსზე
• მასალა: მაღალი ხარისხის ლითონი

იდეალურია საპალეტე ტვირთების, დიდი ზომის ყუთების და ინდუსტრიული მასალების შენახვისთვის.`,
          en: `Professional pallet racking for industrial warehouses. Made from high-quality metal, ideal for organized storage of heavy loads.

**Technical Specifications:**
• Height: 502 cm
• Width: 270 cm
• Depth: 105 cm
• Load capacity: 3000 kg per tier
• Material: High-quality metal

Perfect for storing palletized goods, large boxes and industrial materials.`,
          ru: `Профессиональный паллетный стеллаж для промышленных складов. Изготовлен из высококачественного металла, идеален для организованного хранения тяжелых грузов.

**Технические характеристики:**
• Высота: 502 см
• Ширина: 270 см
• Глубина: 105 см
• Нагрузка: 3000 кг на ярус
• Материал: Высококачественный металл

Идеален для хранения паллетированных товаров, больших коробок и промышленных материалов.`,
        },
        features: {
          ka: [
            "სიმაღლე: 502 სმ",
            "სიგანე: 270 სმ",
            "სიღრმე: 105 სმ",
            "დატვირთვა: 3000 კგ ერთ იარუსზე",
            "მაღალი ხარისხის ლითონი",
            "კოროზიისგან დაცული",
            "გაფართოებადი სისტემა",
            "ინდუსტრიული ხარისხი",
          ],
          en: [
            "Height: 502 cm",
            "Width: 270 cm",
            "Depth: 105 cm",
            "Load capacity: 3000 kg per tier",
            "High-quality metal",
            "Corrosion resistant",
            "Expandable system",
            "Industrial grade",
          ],
          ru: [
            "Высота: 502 см",
            "Ширина: 270 см",
            "Глубина: 105 см",
            "Нагрузка: 3000 кг на ярус",
            "Высококачественный металл",
            "Устойчив к коррозии",
            "Расширяемая система",
            "Промышленный класс",
          ],
        },
        images: ["/images/pallet-shelving-4.png"],
        colors: [t("blue"), "ნარინჯისფერი"],
        sizes: ["502x270x105"],
        category: t("palletShelving"),
        rating: 5.0,
        reviewCount: 4,
      },
      // Default fallback product
      "1": {
        id: params.id,
        name: t("metalShelving"),
        price: 299.99,
        description: {
          ka: "მაღალი ხარისხის ლითონის სტელაჟი, რომელიც იდეალურია მაღაზიებისა და საწყობებისთვის. მტკიცე კონსტრუქცია და მარტივი მონტაჟი.",
          en: "High-quality metal shelving unit, ideal for stores and warehouses. Sturdy construction and easy assembly.",
          ru: "Высококачественный металлический стеллаж, идеальный для магазинов и складов. Прочная конструкция и простая сборка.",
        },
        features: {
          ka: [
            "მაღალი ხარისხის ლითონისგან დამზადებული",
            "მაქსიმალური ტვირთამწეობა: 200კგ თაროზე",
            "მარტივი მონტაჟი",
            "კოროზიისგან დაცული",
            "რეგულირებადი თაროები",
          ],
          en: [
            "Made from high-quality metal",
            "Maximum load capacity: 200kg per shelf",
            "Easy assembly",
            "Corrosion resistant",
            "Adjustable shelves",
          ],
          ru: [
            "Изготовлен из высококачественного металла",
            "Максимальная нагрузка: 200кг на полку",
            "Простая сборка",
            "Устойчив к коррозии",
            "Регулируемые полки",
          ],
        },
        images: ["/placeholder.svg?height=600&width=600"],
        colors: [t("black"), t("white"), "ნაცარი", "ლურჯი"],
        sizes: ["120x40x180", "150x50x200", "180x60x220"],
        category: t("shelving"),
        rating: 4.5,
        reviewCount: 89,
      },
    }

    return products[productId as keyof typeof products] || products["1"]
  }

  const product = getProductData(params.id)

  // Related products
  const relatedProducts: any[] = []

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <div className="container px-4 py-8 md:px-6 md:py-12">
          {/* Breadcrumbs */}
          <nav className="flex items-center text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-foreground">
              {t("home")}
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link href="/products" className="hover:text-foreground">
              {t("products")}
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link href={`/categories/${product.category}`} className="hover:text-foreground">
              {product.category}
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-foreground">{product.name}</span>
          </nav>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg border">
                <Image
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
              {product.images.length > 1 && (
                <div
                  className={`grid gap-4 ${product.images.length === 2 ? "grid-cols-2" : product.images.length === 3 ? "grid-cols-3" : "grid-cols-4"}`}
                >
                  {product.images.slice(1).map((image, index) => (
                    <div key={index + 1} className="overflow-hidden rounded-lg border cursor-pointer">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${product.name} - სურათი ${index + 2}`}
                        width={150}
                        height={150}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-black">{product.name}</h1>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating)
                            ? "fill-primary text-primary"
                            : i < product.rating
                              ? "fill-primary text-primary opacity-50"
                              : "text-muted-foreground"
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-muted-foreground">
                      ({product.reviewCount} {t("reviews")})
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-black">{product.description[language]}</p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">{t("color")}</h3>
                  <RadioGroup defaultValue={product.colors[0]} className="flex flex-wrap gap-2">
                    {product.colors.map((color, index) => (
                      <div key={index} className="flex items-center">
                        <RadioGroupItem id={`color-${index}`} value={color} className="peer sr-only" />
                        <Label
                          htmlFor={`color-${index}`}
                          className="flex cursor-pointer items-center justify-center rounded-md border-2 border-muted bg-popover px-3 py-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary"
                        >
                          {color}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div>
                  <h3 className="font-medium mb-2">{t("size")} (სმ)</h3>
                  <RadioGroup defaultValue={product.sizes[0]} className="flex flex-wrap gap-2">
                    {product.sizes.map((size, index) => (
                      <div key={index} className="flex items-center">
                        <RadioGroupItem id={`size-${index}`} value={size} className="peer sr-only" />
                        <Label
                          htmlFor={`size-${index}`}
                          className="flex cursor-pointer items-center justify-center rounded-md border-2 border-muted bg-popover px-3 py-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary"
                        >
                          {size}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>

              <div className="rounded-lg border p-4 flex items-start gap-3">
                <Truck className="h-5 w-5 mt-0.5 text-muted-foreground" />
                <div>
                  <h4 className="font-medium">{t("freeShipping")}</h4>
                  <p className="text-sm text-muted-foreground">{t("freeShippingDescription")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Description */}
          <div className="mt-12">
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">{t("description")}</h3>
              <div className="prose prose-gray max-w-none">
                <div className="whitespace-pre-line text-black">{product.description[language]}</div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">{t("relatedProducts")}</h2>
            {relatedProducts.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground">მსგავსი პროდუქტები მალე დაემატება</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
