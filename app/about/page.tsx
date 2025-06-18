"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { useEffect } from "react"

export default function AboutPage() {
  const { t, language } = useLanguage()

  // Update page title for About page
  useEffect(() => {
    const getPageTitle = () => {
      const baseTitle = {
        ka: "ნიუ მოტორსი - სტელაჟები და საწყობის აღჭურვილობა",
        en: "New Motorsi - Shelving and Warehouse Equipment",
        ru: "Нью Моторси - Стеллажи и складское оборудование",
      }

      const aboutTitle = {
        ka: "ჩვენს შესახებ",
        en: "About Us",
        ru: "О нас",
      }

      return `${aboutTitle[language]} | ${baseTitle[language]}`
    }

    document.title = getPageTitle()
  }, [language])

  const aboutContent = {
    ka: {
      title: "ჩვენს შესახებ",
      subtitle: "ჩვენი ისტორია და მისია",
      story:
        "ჩვენი კომპანია დაარსდა 2020 წელს იმ მიზნით, რომ მომხმარებლებს შევთავაზოთ მაღალი ხარისხის პროდუქცია ხელმისაწვდომ ფასად. ჩვენ გვჯერა, რომ ყველას უნდა ჰქონდეს წვდომა ხარისხიან ტანსაცმელზე და აქსესუარებზე.",
      mission: "ჩვენი მისია",
      missionText:
        "ჩვენი მისიაა მომხმარებლებისთვის საუკეთესო შოპინგის გამოცდილების შექმნა, მაღალი ხარისხის პროდუქტების შეთავაზება და განსაკუთრებული მომსახურების უზრუნველყოფა.",
      values: "ჩვენი ღირებულებები",
      valuesList: [
        "ხარისხი - ჩვენ ვირჩევთ მხოლოდ საუკეთესო მასალებს",
        "ღირსება - ყველა პროდუქტი ღირს თავის ფასს",
        "მომსახურება - მომხმარებლის კმაყოფილება ჩვენი პრიორიტეტია",
        "ინოვაცია - ჩვენ მუდმივად ვეძებთ ახალ გზებს",
      ],
    },
    en: {
      title: "About Us",
      subtitle: "Our Story and Mission",
      story:
        "Our company was founded in 2020 with the goal of offering customers high-quality products at affordable prices. We believe that everyone should have access to quality clothing and accessories.",
      mission: "Our Mission",
      missionText:
        "Our mission is to create the best shopping experience for customers, offer high-quality products, and provide exceptional service.",
      values: "Our Values",
      valuesList: [
        "Quality - We choose only the best materials",
        "Value - Every product is worth its price",
        "Service - Customer satisfaction is our priority",
        "Innovation - We constantly seek new ways",
      ],
    },
    ru: {
      title: "О нас",
      subtitle: "Наша история и миссия",
      story:
        "Наша компания была основана в 2020 году с целью предложить клиентам высококачественные товары по доступным ценам. Мы верим, что у каждого должен быть доступ к качественной одежде и аксессуарам.",
      mission: "Наша миссия",
      missionText:
        "Наша миссия - создать лучший опыт покупок для клиентов, предложить высококачественные товары и обеспечить исключительное обслуживание.",
      values: "Наши ценности",
      valuesList: [
        "Качество - Мы выбираем только лучшие материалы",
        "Ценность - Каждый товар стоит своей цены",
        "Сервис - Удовлетворение клиентов - наш приоритет",
        "Инновации - Мы постоянно ищем новые пути",
      ],
    },
  }

  const content = aboutContent[language]

  return (
    <div className="bg-white min-h-screen">
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">{content.title}</h1>
            <p className="text-xl text-muted-foreground">{content.subtitle}</p>
          </div>

          <div className="grid gap-12 md:grid-cols-2 items-center mb-16">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="About us"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">{content.story}</p>
            </div>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold mb-4">{content.mission}</h2>
              <p className="text-muted-foreground leading-relaxed">{content.missionText}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">{content.values}</h2>
              <ul className="space-y-3">
                {content.valuesList.map((value, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-muted-foreground">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
