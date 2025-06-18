"use client"

import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/contexts/language-context"
import { useEffect } from "react"

export default function ContactPage() {
  const { t, language } = useLanguage()

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
      contactInfo: "საკონტაქტო ინფორმაცია",
      address: "მისამართი",
      addressText: "თბილისი, საქართველო",
      phone: "ტელეფონი",
      phoneText: "+995 555 123 456",
      emailText: "info@shop.ge",
      hours: "სამუშაო საათები",
      hoursText: "ორშაბათი - პარასკევი: 9:00 - 18:00\nშაბათი: 10:00 - 16:00\nკვირა: დახურულია",
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
      contactInfo: "Contact Information",
      address: "Address",
      addressText: "Tbilisi, Georgia",
      phone: "Phone",
      phoneText: "+995 555 123 456",
      emailText: "info@shop.ge",
      hours: "Business Hours",
      hoursText: "Monday - Friday: 9:00 - 18:00\nSaturday: 10:00 - 16:00\nSunday: Closed",
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
      contactInfo: "Контактная информация",
      address: "Адрес",
      addressText: "Тбилиси, Грузия",
      phone: "Телефон",
      phoneText: "+995 555 123 456",
      emailText: "info@shop.ge",
      hours: "Рабочие часы",
      hoursText: "Понедельник - Пятница: 9:00 - 18:00\nСуббота: 10:00 - 16:00\nВоскресенье: Закрыто",
    },
  }

  const content = contactContent[language]

  return (
    <div className="bg-white min-h-screen">
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">{content.title}</h1>
            <p className="text-xl text-muted-foreground">{content.subtitle}</p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">{content.getInTouch}</h2>
              <p className="text-muted-foreground mb-8">{content.description}</p>

              <form className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      {content.name}
                    </label>
                    <Input id="name" type="text" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      {content.email}
                    </label>
                    <Input id="email" type="email" required />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    {content.subject}
                  </label>
                  <Input id="subject" type="text" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    {content.message}
                  </label>
                  <Textarea id="message" rows={6} required />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  {content.sendMessage}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">{content.contactInfo}</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">{content.address}</h3>
                    <p className="text-muted-foreground">{content.addressText}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">{content.phone}</h3>
                    <p className="text-muted-foreground">{content.phoneText}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">{content.email}</h3>
                    <p className="text-muted-foreground">{content.emailText}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">{content.hours}</h3>
                    <p className="text-muted-foreground whitespace-pre-line">{content.hoursText}</p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-8 h-64 bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Map placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
