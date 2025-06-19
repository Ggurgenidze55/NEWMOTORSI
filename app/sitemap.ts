import type { MetadataRoute } from "next"
import { allProducts, allCategories } from "@/lib/data"

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://newmotorsi.ge"

  const staticPages = [
    { url: `${siteUrl}/`, lastModified: new Date() },
    { url: `${siteUrl}/products`, lastModified: new Date() },
    { url: `${siteUrl}/categories`, lastModified: new Date() },
    { url: `${siteUrl}/about`, lastModified: new Date() },
    { url: `${siteUrl}/contact`, lastModified: new Date() },
  ]

  const categoryPages = allCategories.map((category) => ({
    url: `${siteUrl}/categories/${category.id}`,
    lastModified: new Date(),
  }))

  const productPages = allProducts.map((product) => ({
    url: `${siteUrl}/products/${product.id}`,
    lastModified: new Date(),
  }))

  return [...staticPages, ...categoryPages, ...productPages]
}
