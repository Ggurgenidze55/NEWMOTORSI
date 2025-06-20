"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function AboutPage() {
  const { t, language } = useLanguage()
  const bannerRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const mainTextRef = useRef(null)
  const missionRef = useRef(null)
  const valuesRef = useRef(null)

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

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Banner parallax effect
      gsap.to(bannerRef.current, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: bannerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })

      // Banner content animation
      gsap.fromTo(
        titleRef.current,
        {
          y: 100,
          opacity: 0,
          scale: 0.8,
          rotationX: 90,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationX: 0,
          duration: 1.5,
          ease: "back.out(1.7)",
          delay: 0.3,
        },
      )

      gsap.fromTo(
        subtitleRef.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.8,
          ease: "power2.out",
        },
      )

      // Main text reveal animation
      const mainTextElements = mainTextRef.current?.children
      if (mainTextElements) {
        gsap.fromTo(
          mainTextElements,
          {
            y: 80,
            opacity: 0,
            rotationX: 45,
          },
          {
            y: 0,
            opacity: 1,
            rotationX: 0,
            duration: 1,
            stagger: 0.3,
            ease: "power2.out",
            scrollTrigger: {
              trigger: mainTextRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }

      // Mission section animation
      gsap.fromTo(
        missionRef.current,
        {
          x: -100,
          opacity: 0,
          rotationY: -15,
          scale: 0.9,
        },
        {
          x: 0,
          opacity: 1,
          rotationY: 0,
          scale: 1,
          duration: 1.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: missionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Values section animation
      const valuesList = valuesRef.current?.querySelector("ul")?.children
      if (valuesList) {
        gsap.fromTo(
          valuesList,
          {
            x: 100,
            opacity: 0,
            scale: 0.8,
            rotation: 5,
          },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: valuesRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        )

        // Floating animation for value items
        Array.from(valuesList).forEach((item, index) => {
          gsap.to(item, {
            y: "+=5",
            duration: 2 + index * 0.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.3,
          })
        })
      }

      // Values section title animation
      const valuesTitle = valuesRef.current?.querySelector("h2")
      if (valuesTitle) {
        gsap.fromTo(
          valuesTitle,
          {
            scale: 0,
            rotation: -10,
            opacity: 0,
          },
          {
            scale: 1,
            rotation: 0,
            opacity: 1,
            duration: 1,
            ease: "bounce.out",
            scrollTrigger: {
              trigger: valuesTitle,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }

      // Mission title animation
      const missionTitle = missionRef.current?.querySelector("h2")
      if (missionTitle) {
        gsap.fromTo(
          missionTitle,
          {
            scale: 0,
            rotation: 10,
            opacity: 0,
          },
          {
            scale: 1,
            rotation: 0,
            opacity: 1,
            duration: 1,
            ease: "bounce.out",
            scrollTrigger: {
              trigger: missionTitle,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }

      // Mission text typewriter effect
      const missionText = missionRef.current?.querySelector("p")
      if (missionText) {
        const text = missionText.textContent
        missionText.textContent = ""

        gsap.to(missionText, {
          duration: 2,
          text: text,
          ease: "none",
          scrollTrigger: {
            trigger: missionText,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        })
      }
    })

    return () => ctx.revert()
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
        <div ref={bannerRef} className="absolute inset-0">
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
            <h1 ref={titleRef} className="text-3xl md:text-5xl font-bold mb-2 drop-shadow-lg">
              {language === "ka"
                ? "ნიუ მოტორსი კომპანიის შესახებ"
                : language === "en"
                  ? "About New Motorsi Company"
                  : "О компании Нью Моторси"}
            </h1>
            <p ref={subtitleRef} className="text-base md:text-lg text-white/90 drop-shadow-md max-w-4xl mx-auto">
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
          <div ref={mainTextRef} className="space-y-8 mb-16">
            <p className="text-lg leading-relaxed text-black">{content.mainText1}</p>
            <p className="text-lg leading-relaxed text-black">{content.mainText2}</p>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            <div ref={missionRef}>
              <h2 className="text-2xl font-bold mb-4 text-black">{content.mission}</h2>
              <p className="text-black leading-relaxed">{content.missionText}</p>
            </div>
            <div ref={valuesRef}>
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
