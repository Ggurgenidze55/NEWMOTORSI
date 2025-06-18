"use client"

import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"

interface ProductCardProps {
  id: string
  name: string
  price: number
  oldPrice?: number
  image: string
  category: string
  isNew?: boolean
  isSale?: boolean
  hidePrice?: boolean
}

export default function ProductCard({
  id,
  name,
  price,
  oldPrice,
  image,
  category,
  isNew = false,
  isSale = false,
  hidePrice = false,
}: ProductCardProps) {
  const { t } = useLanguage()

  return (
    <div className="group relative overflow-hidden rounded-lg border">
      <Link href={`/products/${id}`} className="absolute inset-0 z-10">
        <span className="sr-only">იხილეთ პროდუქტი</span>
      </Link>
      <div className="aspect-square overflow-hidden">
        <Image
          src={image || "/placeholder.svg?height=400&width=400"}
          alt={name}
          width={400}
          height={400}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="absolute top-2 left-2 z-20 flex flex-col gap-1">
        {isNew && <Badge className="pointer-events-none bg-[#00adef] text-white hover:bg-[#00adef]">{t("new")}</Badge>}
        {isSale && (
          <Badge variant="destructive" className="pointer-events-none">
            {t("sale")}
          </Badge>
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4" style={{ backgroundColor: "#00adef" }}>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium text-base truncate text-white">{name}</h3>
            <p className="text-xs text-white/90">{category}</p>
            {!hidePrice && (
              <div className="flex items-center gap-2 mt-1">
                <span className="font-medium text-white">{price.toFixed(2)}₾</span>
                {oldPrice && <span className="text-sm text-white/80 line-through">{oldPrice.toFixed(2)}₾</span>}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
