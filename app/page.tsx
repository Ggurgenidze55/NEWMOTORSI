"use client"

import Image from "next/image"
import { Star, Users, Award, TrendingUp } from "lucide-react"
import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"
import { getProductsForCategory } from "@/lib/products"

export default function HomePage() {
  const { t, language } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  const getCategoryCount = (categoryId: string) => {
    const products = getProductsForCategory(categoryId, t)
    const count = products.length

    switch (language) {
      case "en":
        return `${count} products`
      case "ru":
        return `${count} товаров`
      default:
        return `${count} პროდუქტი`
    }
  }

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const allCategories = [
    {
      id: "shelving",
      title: "სტელაჟები",
      titleEn: "Shelving",
      titleRu: "Стеллажи",
      description: "მაღალი ხარისხის სტელაჟები ნებისმიერი ზომის საწყობისთვის",
      descriptionEn: "High quality shelving for warehouses of any size",
      descriptionRu: "Высококачественные стеллажи для складов любого размера",
      image: "/images/warehouse-shelving.jpg",
      href: "/categories/shelving",
      icon: "📦",
      count: getCategoryCount("shelving"),
    },
    {
      id: "market-shelves",
      title: "მარკეტის თაროები",
      titleEn: "Market Shelves",
      titleRu: "Торговые полки",
      description: "საგამოფენო თაროები პროდუქტების ეფექტური წარმოსაჩენად",
      descriptionEn: "Display shelves for effective product presentation",
      descriptionRu: "Выставочные полки для эффективной презентации товаров",
      image: "/images/market-shelves.jpg",
      href: "/categories/market-shelves",
      icon: "🏪",
      count: getCategoryCount("market-shelves"),
    },
    {
      id: "market-accessories",
      title: "მარკეტის აქსესუარები",
      titleEn: "Market Accessories",
      titleRu: "Аксессуары для магазинов",
      description: "აქსესუარები და დამხმარე მასალები მარკეტებისთვის",
      descriptionEn: "Accessories and auxiliary materials for markets",
      descriptionRu: "Аксессуары и вспомогательные материалы для магазинов",
      image: "/images/market-accessories.jpg",
      href: "/categories/market-accessories",
      icon: "🛍️",
      count: getCategoryCount("market-accessories"),
    },
    {
      id: "pos-materials",
      title: "პოს მასალები",
      titleEn: "POS Materials",
      titleRu: "POS материалы",
      description: "სარეკლამო და საინფორმაციო მასალები მაღაზიებისთვის",
      descriptionEn: "Advertising and information materials for stores",
      descriptionRu: "Рекламные и информационные материалы для магазинов",
      image: "/images/pos-materials.jpg",
      href: "/categories/pos-materials",
      icon: "📊",
      count: getCategoryCount("pos-materials"),
    },
    {
      id: "trolleys",
      title: "ურიკები",
      titleEn: "Trolleys",
      titleRu: "Тележки",
      description: "საყიდლების ურიკები და ტრანსპორტირების საშუალებები",
      descriptionEn: "Shopping carts and transportation means",
      descriptionRu: "Тележки для покупок и средства транспортировки",
      image: "/images/trolleys.jpg",
      href: "/categories/trolleys",
      icon: "🛒",
      count: getCategoryCount("trolleys"),
    },
    {
      id: "trash-bins",
      title: "ნაგვის ურნები",
      titleEn: "Trash Bins",
      titleRu: "Мусорные баки",
      description: "მაღალი ხარისხის ნაგვის ურნები კომერციული სივრცეებისთვის",
      descriptionEn: "High quality trash bins for commercial spaces",
      descriptionRu: "Высококачественные мусорные баки для коммерческих помещений",
      image: "/images/trash-bins.jpg",
      href: "/categories/trash-bins",
      icon: "🗑️",
      count: getCategoryCount("trash-bins"),
    },
  ]

  // Stats with translations
  const getStats = () => {
    const statsData = {
      ka: [
        { number: "500+", label: "კმაყოფილი კლიენტი", icon: Users },
        { number: "15+", label: "წლიანი გამოცდილება", icon: Award },
        { number: "1000+", label: "დასრულებული პროექტი", icon: TrendingUp },
        { number: "24/7", label: "მხარდაჭერა", icon: Star },
      ],
      en: [
        { number: "500+", label: "Satisfied Clients", icon: Users },
        { number: "15+", label: "Years of Experience", icon: Award },
        { number: "1000+", label: "Completed Projects", icon: TrendingUp },
        { number: "24/7", label: "Support", icon: Star },
      ],
      ru: [
        { number: "500+", label: "Довольных клиентов", icon: Users },
        { number: "15+", label: "Лет опыта", icon: Award },
        { number: "1000+", label: "Завершенных проектов", icon: TrendingUp },
        { number: "24/7", label: "Поддержка", icon: Star },
      ],
    }
    return statsData[language] || statsData.ka
  }

  const stats = getStats()

  const getCategoryTitle = (category: (typeof allCategories)[0]) => {
    switch (language) {
      case "en":
        return category.titleEn
      case "ru":
        return category.titleRu
      default:
        return category.title
    }
  }

  const getCategoryDescription = (category: (typeof allCategories)[0]) => {
    switch (language) {
      case "en":
        return category.descriptionEn || category.description
      case "ru":
        return category.descriptionRu || category.description
      default:
        return category.description
    }
  }

  const getHeroTitle = () => {
    switch (language) {
      case "en":
        return "Our Products"
      case "ru":
        return "Наша Продукция"
      default:
        return "ჩვენი პროდუქცია"
    }
  }

  const getHeroDescription = () => {
    switch (language) {
      case "en":
        return "Professional shelving and warehouse equipment for your business"
      case "ru":
        return "Профессиональные стеллажи и складское оборудование для вашего бизнеса"
      default:
        return "პროფესიონალური სტელაჟები და საწყობის აღჭურვილობა თქვენი ბიზნესისთვის"
    }
  }

  const getButtonText = (key: string) => {
    const texts = {
      viewProducts: {
        ka: "პროდუქტების ნახვა",
        en: "View Products",
        ru: "Посмотреть продукты",
      },
      consultation: {
        ka: "კონსულტაცია",
        en: "Consultation",
        ru: "Консультация",
      },
      details: {
        ka: "დეტალურად",
        en: "Details",
        ru: "Подробнее",
      },
      contactUs: {
        ka: "დაგვიკავშირდით",
        en: "Contact Us",
        ru: "Свяжитесь с нами",
      },
      catalog: {
        ka: "კატალოგი",
        en: "Catalog",
        ru: "Каталог",
      },
    }
    return (
      texts[key as keyof typeof texts][language as keyof (typeof texts)[keyof typeof texts]] ||
      texts[key as keyof typeof texts]["ka"]
    )
  }

  const getSectionTitle = (key: string) => {
    const titles = {
      categories: {
        ka: "კატეგორიები",
        en: "Categories",
        ru: "Категории",
      },
      readyToStart: {
        ka: "მზად ხართ დაიწყოთ?",
        en: "Ready to Start?",
        ru: "Готовы начать?",
      },
    }
    return (
      titles[key as keyof typeof titles][language as keyof (typeof titles)[keyof typeof titles]] ||
      titles[key as keyof typeof titles]["ka"]
    )
  }

  const getSectionDescription = (key: string) => {
    const descriptions = {
      categories: {
        ka: "აღმოაჩინეთ ჩვენი ფართო ასორტიმენტი პროფესიონალური სტელაჟებისა და საწყობის აღჭურვილობისა",
        en: "Discover our wide range of professional shelving and warehouse equipment",
        ru: "Откройте для себя наш широкий ассортимент профессиональных стеллажей и складского оборудования",
      },
      readyToStart: {
        ka: "დაგვიკავშირდით უფასო კონსულტაციისთვის და მიიღეთ საუკეთესო შეთავაზება",
        en: "Contact us for a free consultation and get the best offer",
        ru: "Свяжитесь с нами для бесплатной консультации и получите лучшее предложение",
      },
    }
    return (
      descriptions[key as keyof typeof descriptions][
        language as keyof (typeof descriptions)[keyof typeof descriptions]
      ] || descriptions[key as keyof typeof descriptions]["ka"]
    )
  }

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen bg-hero-pattern overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/warehouse-hero.jpg"
            alt="Warehouse with shelving systems"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20 flex items-center min-h-screen">
          <div
            className={`max-w-3xl text-white transition-all duration-1000 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {getHeroTitle()}{" "}
              <span className="relative inline-block">
                <span className="relative z-10"></span>
                <span className="absolute bottom-2 left-0 w-full h-4 bg-white/30 -skew-x-12"></span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">{getHeroDescription()}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold group rounded-md transition-colors"
                onClick={() => (window.location.href = "/products")}
              >
                {getButtonText("viewProducts")}
                <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
              </button>
              <button
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold group rounded-md transition-colors"
                onClick={() => (window.location.href = "/contact")}
              >
                {getButtonText("consultation")}
                <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="h-8 w-8 flex items-center justify-center">
            <span className="text-2xl">↓</span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center group transition-all duration-500 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Categories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{getSectionTitle("categories")}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{getSectionDescription("categories")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allCategories.map((category, index) => (
              <div
                key={category.id}
                className="group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden bg-white rounded-lg border"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="p-0">
                  <div className="relative overflow-hidden">
                    <div className="aspect-[4/3] overflow-hidden bg-white p-4">
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={getCategoryTitle(category)}
                        width={600}
                        height={450}
                        className="h-full w-full object-contain transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300"></div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-bold text-gray-800 group-hover:text-primary transition-colors">
                        {getCategoryTitle(category)}
                      </h3>
                      <span className="text-sm text-white font-semibold bg-black px-3 py-1 rounded-full">
                        {category.count}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">{getCategoryDescription(category)}</p>

                    <div className="mt-auto">
                      <button
                        className="w-full bg-primary hover:bg-primary/90 group-hover:shadow-lg transition-all duration-300 text-white px-4 py-2 rounded-md flex items-center justify-center"
                        onClick={() => (window.location.href = category.href)}
                      >
                        {getButtonText("details")}
                        <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{getSectionTitle("readyToStart")}</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">{getSectionDescription("readyToStart")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold group rounded-md transition-colors"
              onClick={() => (window.location.href = "/contact")}
            >
              {getButtonText("contactUs")}
              <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold group rounded-md transition-colors"
              onClick={() => (window.location.href = "/products")}
            >
              {getButtonText("catalog")}
              <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
