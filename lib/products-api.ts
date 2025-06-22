import { supabase, type Product } from "./supabase"

export async function getAllProducts(): Promise<Product[]> {
  try {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("is_active", true)
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Error fetching products:", error)
      return []
    }

    return data || []
  } catch (error) {
    console.error("Error in getAllProducts:", error)
    return []
  }
}

export async function getProductById(id: string): Promise<Product | null> {
  try {
    const { data, error } = await supabase.from("products").select("*").eq("id", id).eq("is_active", true).single()

    if (error) {
      console.error("Error fetching product:", error)
      return null
    }

    return data
  } catch (error) {
    console.error("Error in getProductById:", error)
    return null
  }
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  try {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("category", category)
      .eq("is_active", true)
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Error fetching products by category:", error)
      return []
    }

    return data || []
  } catch (error) {
    console.error("Error in getProductsByCategory:", error)
    return []
  }
}

export async function getSimilarProducts(category: string, excludeId: string): Promise<Product[]> {
  try {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("category", category)
      .neq("id", excludeId)
      .eq("is_active", true)
      .limit(3)

    if (error) {
      console.error("Error fetching similar products:", error)
      return []
    }

    return data || []
  } catch (error) {
    console.error("Error in getSimilarProducts:", error)
    return []
  }
}

export async function searchProducts(query: string): Promise<Product[]> {
  try {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("is_active", true)
      .or(
        `name_ka.ilike.%${query}%,name_en.ilike.%${query}%,name_ru.ilike.%${query}%,description_ka.ilike.%${query}%,description_en.ilike.%${query}%,description_ru.ilike.%${query}%`,
      )
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Error searching products:", error)
      return []
    }

    return data || []
  } catch (error) {
    console.error("Error in searchProducts:", error)
    return []
  }
}

// Admin functions (for future use)
export async function createProduct(product: Omit<Product, "created_at" | "updated_at">): Promise<Product | null> {
  try {
    const { data, error } = await supabase.from("products").insert([product]).select().single()

    if (error) {
      console.error("Error creating product:", error)
      return null
    }

    return data
  } catch (error) {
    console.error("Error in createProduct:", error)
    return null
  }
}

export async function updateProduct(id: string, updates: Partial<Product>): Promise<Product | null> {
  try {
    const { data, error } = await supabase
      .from("products")
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq("id", id)
      .select()
      .single()

    if (error) {
      console.error("Error updating product:", error)
      return null
    }

    return data
  } catch (error) {
    console.error("Error in updateProduct:", error)
    return null
  }
}

export async function deleteProduct(id: string): Promise<boolean> {
  try {
    const { error } = await supabase.from("products").update({ is_active: false }).eq("id", id)

    if (error) {
      console.error("Error deleting product:", error)
      return false
    }

    return true
  } catch (error) {
    console.error("Error in deleteProduct:", error)
    return false
  }
}
