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
      mainText1:
        "სასაწყობე სტელაჟების გამოყენება საშუალებას გაძლევთ ეფექტურად გამოიყენოთ საწყობის ფართი და კომფორტულად განათავსოთ პროდუქცია.",
      mainText2:
        "ჩვენი პროფესიონალთა გუნდი აგიზომავთ ფართს, მოგიმზადებთ სტელაჟების განლაგების გეგმას, ადგილზე მოგაწვდით და აგიწყობთ უმოკლეს დროში. ყოველთვის შეგიძლიათ სტელაჟის დაშლა და ხელახლა აწყობა. ასევე, შეგიძლიათ იარუსების ჩამატება/გამოკლება და მათი დაშორებების რეგულირება.",
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
      mainText1:
        "Using warehouse shelving allows you to efficiently use warehouse space and comfortably arrange products.",
      mainText2:
        "Our team of professionals will measure your space, prepare a shelving layout plan, deliver on-site and assemble in the shortest time. You can always disassemble and reassemble the shelving. You can also add/remove tiers and adjust their spacing.",
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
      mainText1:
        "Использование складских стеллажей позволяет эффективно использовать складское пространство и удобно размещать продукцию.",
      mainText2:
        "Наша команда профессионалов измерит ваше пространство, подготовит план размещения стеллажей, доставит на место и соберет в кратчайшие сроки. Вы всегда можете разобрать и снова собрать стеллаж. Также вы можете добавлять/убирать ярусы и регулировать их расстояние.",
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
      {/* Add the banner section */}
      <div className="relative w-full h-64 md:h-80 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/abstract-blurred-photo-of-store-with-trolley-in-department-store-bokeh-background.jpg"
            alt="Store with trolley background"
            fill
            className="object-cover object-top"
            priority
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-2 drop-shadow-lg">
              {language === "ka"
                ? "ნიუ მოტორსი კომპანიის შესახებ"
                : language === "en"
                  ? "About New Motorsi Company"
                  : "О компании Нью Моторси"}
            </h1>
            <p className="text-base md:text-lg text-white/90 drop-shadow-md max-w-4xl mx-auto">
              {language === "ka"
                ? "შპს ნიუ მოტორსი გთავაზობთ სასაწყობე სტელაჟებს, თაროებს და აქსესუარებს მაღაზიებისთვის."
                : language === "en"
                  ? "New Motorsi LLC offers warehouse shelving, shelves and accessories for stores."
                  : "ООО Нью Моторси предлагает складские стеллажи, полки и аксессуары для магазинов."}
            </p>
          </div>
        </div>
      </div>

      <div className="container px-4 py-8 md:px-6 md:py-12">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 mb-16">
            <p className="text-lg leading-relaxed text-black">{content.mainText1}</p>
            <p className="text-lg leading-relaxed text-black">{content.mainText2}</p>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-black">{content.mission}</h2>
              <p className="text-black leading-relaxed">{content.missionText}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-black">{content.values}</h2>
              <ul className="space-y-3">
                {content.valuesList.map((value, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-black">{value}</span>
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
