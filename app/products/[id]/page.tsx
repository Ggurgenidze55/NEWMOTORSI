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
    "kitchen-shelf-1": {
      id: "kitchen-shelf-1",
      name: {
        ka: "სამზარეულოს სტელაჟი 200x60x35",
        en: "Kitchen Shelf 200x60x35",
        ru: "Кухонный стеллаж 200x60x35",
      },
      price: 0,
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
    name: productData.name, // Return the whole name object for generateMetadata
    price: productData.price,
    description: productData.description, // Return the whole description object
    features: productData.features,
    images: productData.images,
    category: productData.category,
    rating: productData.rating,
    reviewCount: productData.reviewCount,
    sku: productData.sku,
    brand: productData.brand,
    availability: productData.availability,
    currency: productData.currency,
  }
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = getProductById(params.id, "ka") // Default to 'ka' for metadata

  if (!product) {
    return {
      title: "Product Not Found",
    }
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://newmotorsi.ge"
  const productUrl = `${siteUrl}/products/${product.id}`
  const productName = product.name.ka // Use Georgian name for metadata title
  const productDescription = product.description.ka.substring(0, 160)

  return {
    title: productName,
    description: productDescription,
    alternates: {
      canonical: productUrl,
      languages: {
        "ka-GE": productUrl,
        "en-US": `${siteUrl}/en/products/${product.id}`,
        "ru-RU": `${siteUrl}/ru/products/${product.id}`,
      },
    },
    openGraph: {
      title: productName,
      description: productDescription,
      url: productUrl,
      images: product.images.map((img: string) => ({
        url: `${siteUrl}${img}`,
        width: 800,
        height: 600,
        alt: productName,
      })),
      type: "product",
      siteName: "ნიუ მოტორსი",
      priceAmount: product.price > 0 ? product.price.toString() : undefined,
      priceCurrency: product.price > 0 ? product.currency : undefined,
      availability: product.availability,
      brand: product.brand?.name,
    },
    twitter: {
      card: "summary_large_image",
      title: productName,
      description: productDescription,
      images: product.images.map((img: string) => `${siteUrl}${img}`),
    },
  }
}

export default function ProductPage({ params }: { params: { id: string } }) {
  return <ProductPageClient params={params} />
}
