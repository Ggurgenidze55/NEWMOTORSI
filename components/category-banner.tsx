"use client"

import Image from "next/image"

interface CategoryBannerProps {
  title: string
  subtitle?: string
}

export default function CategoryBanner({ title, subtitle }: CategoryBannerProps) {
  return (
    <div className="relative w-full h-64 md:h-80 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/warehouse-banner.jpg"
          alt="Warehouse with shelving systems"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-2 drop-shadow-lg">{title}</h1>
          {subtitle && <p className="text-lg md:text-xl text-white/90 drop-shadow-md">{subtitle}</p>}
        </div>
      </div>
    </div>
  )
}
