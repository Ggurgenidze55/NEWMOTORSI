// Define a basic Product type, expand as needed
export interface Product {
  id: string
  name: string // This will be the language-specific name
  price: number
  description: string // Language-specific
  features: string[] // Language-specific
  images: string[]
  category: string // Language-specific category name
  rating: number
  reviewCount: number
  sku?: string
  brand?: { name: string }
  availability?: string // e.g., "https://schema.org/InStock"
  currency?: string // e.g., "GEL"
  // Add any other fields that your product objects might have
  // For example, if you have language-specific versions of all fields:
  // name_ka?: string;
  // name_en?: string;
  // description_ka?: string;
  // etc.
}

export interface Category {
  id: string
  title: string
  titleEn: string
  titleRu: string
  description: string
  descriptionEn?: string
  descriptionRu?: string
  image: string
  href: string
  count: string
  subcategories?: Category[]
}
