import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Product {
  id: string
  name_ka: string
  name_en: string
  name_ru: string
  description_ka: string
  description_en: string
  description_ru: string
  price: number
  category: string
  subcategory?: string
  images: string[]
  is_new: boolean
  is_active: boolean
  created_at: string
  updated_at: string
}

// Helper function to get localized product name
export function getLocalizedProductName(product: Product, language: string): string {
  switch (language) {
    case "en":
      return product.name_en
    case "ru":
      return product.name_ru
    default:
      return product.name_ka
  }
}

// Helper function to get localized product description
export function getLocalizedProductDescription(product: Product, language: string): string {
  switch (language) {
    case "en":
      return product.description_en
    case "ru":
      return product.description_ru
    default:
      return product.description_ka
  }
}
