import type { Metadata } from "next"
import ProductPageClient from "./ProductPageClient"

// Helper function to get product data (simulated)
const getProductById = (productId: string, lang: string): any | null => {
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
    // Add other products here...
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
  }
  const productData = productsData[productId]
  if (!productData) return null

  return {
    id: productData.id,
    name: productData.name,
    price: productData.price,
    description: productData.description,
    features: productData.features,
    images: productData.images,
    category: productData.category,
    rating: productData.rating,
    reviewCount: productData.reviewCount,
    sku: productData.sku,
    brand: productData.brand,
    availability: productData.availability,
    currency: productData.currency,
    // Add other necessary fields from your actual product data structure
  }
}

// This function is used by Next.js to generate metadata for the page
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  // In a real app, you'd fetch product data based on params.id
  // For now, we'll use a placeholder or a simplified version of getProductById
  // The language context is not available in server components like generateMetadata directly
  // You might need a different way to get language-specific names or use a default
  const product = getProductById(params.id, "ka") // Default to 'ka' for metadata or fetch all langs

  if (!product) {
    return {
      title: "Product Not Found",
    }
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://newmotorsi.ge"
  const productUrl = `${siteUrl}/products/${product.id}`

  return {
    title: product.name.ka,
    description: product.description.ka.substring(0, 160), // Keep description concise
    alternates: {
      canonical: productUrl,
      languages: {
        "ka-GE": productUrl,
        "en-US": `${siteUrl}/en/products/${product.id}`, // Adjust if your lang routing is different
        "ru-RU": `${siteUrl}/ru/products/${product.id}`, // Adjust if your lang routing is different
      },
    },
    openGraph: {
      title: product.name.ka,
      description: product.description.ka.substring(0, 160),
      url: productUrl,
      images: product.images.map((img: string) => ({
        url: `${siteUrl}${img}`, // Ensure images are absolute URLs
        width: 800, // Provide appropriate dimensions
        height: 600,
        alt: product.name.ka,
      })),
      type: "product", // og:type for product
      siteName: "ნიუ მოტორსი",
      // OpenGraph Product specific tags
      priceAmount: product.price > 0 ? product.price.toString() : undefined,
      priceCurrency: product.price > 0 ? product.currency : undefined,
      availability: product.availability, // e.g., 'instock', 'outofstock'
      brand: product.brand?.name,
      // retailerItemId: product.sku, // If applicable
      // condition: 'new', // If applicable
    },
    twitter: {
      card: "summary_large_image",
      title: product.name.ka,
      description: product.description.ka.substring(0, 160),
      images: product.images.map((img: string) => `${siteUrl}${img}`),
    },
  }
}

export default function ProductPage({ params }: { params: { id: string } }) {
  return <ProductPageClient params={params} />
}
