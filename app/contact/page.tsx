"use client"

import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import { useEffect, useRef } from "react"
import { useActionState } from "react"
import { submitContactForm } from "@/app/actions/contact"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function ContactPage() {
  const { t, language } = useLanguage()
  const [state, formAction, isPending] = useActionState(submitContactForm, null)

  const bannerRef = useRef(null)
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const formRef = useRef(null)
  const contactInfoRef = useRef(null)
  const mapRef = useRef(null)

  // Update page title for Contact page
  useEffect(() => {
    const getPageTitle = () => {
      const baseTitle = {
        ka: "ნიუ მოტორსი - სტელაჟები და საწყობის აღჭურვილობა",
        en: "New Motorsi - Shelving and Warehouse Equipment",
        ru: "Нью Моторси - Стеллажи и складское оборудование",
      }

      const contactTitle = {
        ka: "კონტაქტი",
        en: "Contact",
        ru: "Контакты",
      }

      return `${contactTitle[language]} | ${baseTitle[language]}`
    }

    document.title = getPageTitle()
  }, [language])

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Banner parallax effect
      gsap.to(bannerRef.current, {
        yPercent: -30,
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
        descriptionRef.current,
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

      // Form animation
      const formFields = formRef.current?.querySelectorAll("input, textarea, button")
      if (formFields) {
        gsap.fromTo(
          formFields,
          {
            y: 50,
            opacity: 0,
            scale: 0.9,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: formRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        )

        // Form field focus animations
        formFields.forEach((field) => {
          if (field.tagName === "INPUT" || field.tagName === "TEXTAREA") {
            field.addEventListener("focus", () => {
              gsap.to(field, {
                scale: 1.02,
                boxShadow: "0 0 20px rgba(0, 173, 239, 0.3)",
                duration: 0.3,
                ease: "power2.out",
              })
            })

            field.addEventListener("blur", () => {
              gsap.to(field, {
                scale: 1,
                boxShadow: "0 0 0px rgba(0, 173, 239, 0)",
                duration: 0.3,
                ease: "power2.out",
              })
            })
          }
        })
      }

      // Contact info cards animation
      const contactCards = contactInfoRef.current?.querySelectorAll(".contact-card")
      if (contactCards) {
        gsap.fromTo(
          contactCards,
          {
            x: 100,
            opacity: 0,
            rotationY: 15,
          },
          {
            x: 0,
            opacity: 1,
            rotationY: 0,
            duration: 1,
            stagger: 0.2,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: contactInfoRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        )

        // Hover animations for contact cards
        contactCards.forEach((card) => {
          card.addEventListener("mouseenter", () => {
            gsap.to(card, {
              scale: 1.05,
              y: -5,
              boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
              duration: 0.3,
              ease: "power2.out",
            })
          })

          card.addEventListener("mouseleave", () => {
            gsap.to(card, {
              scale: 1,
              y: 0,
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              duration: 0.3,
              ease: "power2.out",
            })
          })
        })

        // Floating animation for contact cards
        contactCards.forEach((card, index) => {
          gsap.to(card, {
            y: "+=3",
            duration: 2 + index * 0.3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.5,
          })
        })
      }

      // Map animation
      gsap.fromTo(
        mapRef.current,
        {
          scale: 0.8,
          opacity: 0,
          rotationY: -15,
        },
        {
          scale: 1,
          opacity: 1,
          rotationY: 0,
          duration: 1.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: mapRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )
    })

    return () => ctx.revert()
  }, [])

  // Success animation
  useEffect(() => {
    if (state?.success) {
      gsap.fromTo(
        ".success-message",
        {
          scale: 0,
          opacity: 0,
          rotation: -10,
        },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 0.8,
          ease: "bounce.out",
        },
      )
    }
  }, [state])

  const contactContent = {
    ka: {
      title: "კონტაქტი",
      subtitle: "დაგვიკავშირდით",
      getInTouch: "დაგვიკავშირდით",
      description: "გაქვთ კითხვები? ჩვენ აქ ვართ დასახმარებლად. დაგვიკავშირდით ნებისმიერი საშუალებით.",
      name: "სახელი",
      email: "ელ-ფოსტა",
      subject: "თემა",
      message: "შეტყობინება",
      sendMessage: "შეტყობინების გაგზავნა",
      sending: "იგზავნება...",
      contactInfo: "საკონტაქტო ინფორმაცია",
      address: "მისამართი",
      addressTextTbilisi: "თბილისი\nლევან დევდარიანის მე-3 შესახვევი #12",
      addressTextKutaisi: "ქუთაისი\nდავით აღმაშენებლის გამზ. #120",
      phone: "ტელეფონი",
      phoneText: "599 12 03 03 / 591 91 27 90 / 591 74 20 20",
      emailText: "tk@newmotorsi.ge",
      hours: "სამუშაო საათები",
      hoursText: "ორშაბათი-შაბათი: 09:00-18:00",
      formTitle: "შეტყობინება გამოგვიგზავნეთ",
      quickContact: "სწრაფი კონტაქტი",
    },
    en: {
      title: "Contact",
      subtitle: "Get in Touch",
      getInTouch: "Get in Touch",
      description: "Have questions? We're here to help. Contact us through any of the following methods.",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      sendMessage: "Send Message",
      sending: "Sending...",
      contactInfo: "Contact Information",
      address: "Address",
      addressTextTbilisi: "Tbilisi\nLevan Devdariani 3rd Lane #12",
      addressTextKutaisi: "Kutaisi\nDavit Aghmashenebeli Ave. #120",
      phone: "Phone",
      phoneText: "599 12 03 03 / 591 91 27 90 / 591 74 20 20",
      emailText: "tk@newmotorsi.ge",
      hours: "Business Hours",
      hoursText: "Monday-Saturday: 09:00-18:00",
      formTitle: "Send us a Message",
      quickContact: "Quick Contact",
    },
    ru: {
      title: "Контакты",
      subtitle: "Свяжитесь с нами",
      getInTouch: "Свяжитесь с нами",
      description: "Есть вопросы? Мы здесь, чтобы помочь. Свяжитесь с нами любым удобным способом.",
      name: "Имя",
      email: "Email",
      subject: "Тема",
      message: "Сообщение",
      sendMessage: "Отправить сообщение",
      sending: "Отправляется...",
      contactInfo: "Контактная информация",
      address: "Адрес",
      addressTextTbilisi: "Тбилиси\nПереулок Левана Девдариани 3 #12",
      addressTextKutaisi: "Кутаиси\nПр. Давида Агмашенебели #120",
      phone: "Телефон",
      phoneText: "599 12 03 03 / 591 91 27 90 / 591 74 20 20",
      emailText: "tk@newmotorsi.ge",
      hours: "Рабочие часы",
      hoursText: "Понедельник-Суббота: 09:00-18:00",
      formTitle: "Отправьте нам сообщение",
      quickContact: "Быстрый контакт",
    },
  }

  const content = contactContent[language]

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen text-black">
      {/* Banner Section */}
      <div
        ref={bannerRef}
        className="relative h-96 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/contact-banner.jpg')",
          backgroundPosition: "center top",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 ref={titleRef} className="text-5xl font-bold tracking-tight mb-6">
              {content.title}
            </h1>
            <p ref={descriptionRef} className="text-xl opacity-90 max-w-2xl mx-auto">
              {content.description}
            </p>
          </div>
        </div>
      </div>

      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl border-0 bg-white">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <MessageCircle className="h-8 w-8 text-[#00adef]" />
                    <h2 className="text-3xl font-bold text-black">{content.formTitle}</h2>
                  </div>

                  <form ref={formRef} action={formAction} className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-semibold text-black">
                          {content.name}
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          disabled={isPending}
                          className="h-12 border-2 border-gray-200 focus:border-[#00adef] text-black bg-white disabled:opacity-50"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-semibold text-black">
                          {content.email}
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          disabled={isPending}
                          className="h-12 border-2 border-gray-200 focus:border-[#00adef] text-black bg-white disabled:opacity-50"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="block text-sm font-semibold text-black">
                        {content.subject}
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        disabled={isPending}
                        className="h-12 border-2 border-gray-200 focus:border-[#00adef] text-black bg-white disabled:opacity-50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-semibold text-black">
                        {content.message}
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        disabled={isPending}
                        className="border-2 border-gray-200 focus:border-[#00adef] resize-none text-black bg-white disabled:opacity-50"
                      />
                    </div>

                    {/* Success/Error Message */}
                    {state && (
                      <div
                        className={`success-message p-4 rounded-lg ${state.success ? "bg-green-50 text-green-800 border border-green-200" : "bg-red-50 text-red-800 border border-red-200"}`}
                      >
                        {state.message}
                      </div>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isPending}
                      className="w-full h-12 text-white font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
                      style={{ backgroundColor: "#00adef" }}
                      onMouseEnter={(e) => !isPending && (e.target.style.backgroundColor = "#0099d4")}
                      onMouseLeave={(e) => !isPending && (e.target.style.backgroundColor = "#00adef")}
                    >
                      <Send className="h-5 w-5" />
                      {isPending ? content.sending : content.sendMessage}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div ref={contactInfoRef} className="space-y-6">
              <Card className="shadow-xl border-0 bg-white">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6 text-black">{content.quickContact}</h3>
                  <div className="space-y-6">
                    {/* Tbilisi Address */}
                    <div className="contact-card flex items-start space-x-4 p-4 rounded-lg bg-gray-50">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 text-black">{content.address}</h4>
                        <p className="text-gray-700 whitespace-pre-line">{content.addressTextTbilisi}</p>
                      </div>
                    </div>

                    {/* Kutaisi Address */}
                    <div className="contact-card flex items-start space-x-4 p-4 rounded-lg bg-gray-50">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 text-black">{content.address}</h4>
                        <p className="text-gray-700 whitespace-pre-line">{content.addressTextKutaisi}</p>
                      </div>
                    </div>

                    <div className="contact-card flex items-start space-x-4 p-4 rounded-lg bg-gray-50">
                      <div className="bg-green-100 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 text-black">{content.phone}</h4>
                        <p className="text-gray-700">{content.phoneText}</p>
                      </div>
                    </div>

                    <div className="contact-card flex items-start space-x-4 p-4 rounded-lg bg-gray-50">
                      <div className="bg-purple-100 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 text-black">{content.email}</h4>
                        <p className="text-gray-700">{content.emailText}</p>
                      </div>
                    </div>

                    <div className="contact-card flex items-start space-x-4 p-4 rounded-lg bg-gray-50">
                      <div className="bg-orange-100 p-3 rounded-full">
                        <Clock className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 text-black">{content.hours}</h4>
                        <p className="text-gray-700">{content.hoursText}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map Section */}
          <div ref={mapRef} className="mt-12">
            <Card className="shadow-xl border-0 bg-white overflow-hidden">
              <CardContent className="p-0">
                <div className="h-96 bg-gray-200 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <MapPin className="h-12 w-12 mx-auto mb-4" />
                    <p className="text-lg font-semibold">რუკა მალე დაემატება</p>
                    <p className="text-sm">Map coming soon</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
