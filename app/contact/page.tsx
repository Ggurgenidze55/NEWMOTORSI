"use client"

import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
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
        className="relative h-96 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/contact-banner.jpg')",
          backgroundPosition: "center top",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold tracking-tight mb-6">{content.title}</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">{content.description}</p>
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

                  <form className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-semibold text-black">
                          {content.name}
                        </label>
                        <Input
                          id="name"
                          type="text"
                          required
                          className="h-12 border-2 border-gray-200 focus:border-[#00adef] text-black bg-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-semibold text-black">
                          {content.email}
                        </label>
                        <Input
                          id="email"
                          type="email"
                          required
                          className="h-12 border-2 border-gray-200 focus:border-[#00adef] text-black bg-white"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="block text-sm font-semibold text-black">
                        {content.subject}
                      </label>
                      <Input
                        id="subject"
                        type="text"
                        required
                        className="h-12 border-2 border-gray-200 focus:border-[#00adef] text-black bg-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-semibold text-black">
                        {content.message}
                      </label>
                      <Textarea
                        id="message"
                        rows={6}
                        required
                        className="border-2 border-gray-200 focus:border-[#00adef] resize-none text-black bg-white"
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-12 text-white font-semibold flex items-center justify-center gap-2"
                      style={{ backgroundColor: "#00adef" }}
                      onMouseEnter={(e) => (e.target.style.backgroundColor = "#0099d4")}
                      onMouseLeave={(e) => (e.target.style.backgroundColor = "#00adef")}
                    >
                      <Send className="h-5 w-5" />
                      {content.sendMessage}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="shadow-xl border-0 bg-white">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6 text-black">{content.quickContact}</h3>
                  <div className="space-y-6">
                    {/* Tbilisi Address */}
                    <div className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 text-black">{content.address}</h4>
                        <p className="text-gray-700 whitespace-pre-line">{content.addressTextTbilisi}</p>
                      </div>
                    </div>

                    {/* Kutaisi Address */}
                    <div className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 text-black">{content.address}</h4>
                        <p className="text-gray-700 whitespace-pre-line">{content.addressTextKutaisi}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50">
                      <div className="bg-green-100 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 text-black">{content.phone}</h4>
                        <p className="text-gray-700">{content.phoneText}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50">
                      <div className="bg-purple-100 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 text-black">{content.email}</h4>
                        <p className="text-gray-700">{content.emailText}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50">
                      <div className="bg-orange-100 p-3 rounded-full">
                        <Clock className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 text-black">{content.hours}</h4>
                        <p className="text-gray-700 whitespace-pre-line">{content.hoursText}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Google Map */}
              <Card className="shadow-xl border-0 bg-white">
                <CardContent className="p-0">
                  <div className="h-64 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.8234567890123!2d44.7865!3d41.7151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDQyJzU0LjQiTiA0NMKwNDcnMTEuNCJF!5e0!3m2!1sen!2sge!4v1234567890123!5m2!1sen!2sge&q=ლევან+დევდარიანის+მე-3+შესახვევი+12,+თბილისი,+საქართველო"
                      width="100%"
                      height="256"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="ნიუ მოტორსი - თბილისის ოფისი"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
