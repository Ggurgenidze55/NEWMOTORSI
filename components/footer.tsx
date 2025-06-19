"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { Facebook, MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  const { t, language } = useLanguage()

  const footerContent = {
    ka: {
      description: "პროფესიონალური სტელაჟები და საწყობის აღჭურვილობა თქვენი ბიზნესისთვის.",
      quickLinks: "სწრაფი ბმულები",
      categories: "კატეგორიები",
      contact: "კონტაქტი",
      home: "მთავარი",
      about: "ჩვენს შესახებ",
      products: "პროდუქტები",
      contactPage: "კონტაქტი",
      shelving: "სასაწყობე სტელაჟები",
      marketShelves: "მარკეტის თაროები",
      accessories: "აქსესუარები",
      rights: "ყველა უფლება დაცულია.",
    },
    en: {
      description: "Professional shelving and warehouse equipment for your business.",
      quickLinks: "Quick Links",
      categories: "Categories",
      contact: "Contact",
      home: "Home",
      about: "About Us",
      products: "Products",
      contactPage: "Contact",
      shelving: "Warehouse Shelving",
      marketShelves: "Market Shelves",
      accessories: "Accessories",
      rights: "All rights reserved.",
    },
    ru: {
      description: "Профессиональные стеллажи и складское оборудование для вашего бизнеса.",
      quickLinks: "Быстрые ссылки",
      categories: "Категории",
      contact: "Контакты",
      home: "Главная",
      about: "О нас",
      products: "Продукты",
      contactPage: "Контакты",
      shelving: "Складские стеллажи",
      marketShelves: "Торговые полки",
      accessories: "Аксессуары",
      rights: "Все права защищены.",
    },
  }

  // fall back to Georgian ("ka") if language code is missing
  const content = footerContent[(language as keyof typeof footerContent) ?? "ka"] || footerContent.ka

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image src="/images/new-motorsi-logo.png" alt="New Motorsi Logo" width={150} height={40} />
            </Link>
            <p className="text-gray-400">{content.description}</p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/newmotors.ge/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              {/* Add other social links here */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{content.quickLinks}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  {content.home}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  {content.about}
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-colors">
                  {content.products}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  {content.contactPage}
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{content.categories}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/categories/shelving" className="text-gray-400 hover:text-white transition-colors">
                  {content.shelving}
                </Link>
              </li>
              <li>
                <Link href="/categories/market-shelves" className="text-gray-400 hover:text-white transition-colors">
                  {content.marketShelves}
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/market-accessories"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {content.accessories}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{content.contact}</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 flex-shrink-0" />
                <span>{t.address}</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3" />
                <a href={`tel:${t.phone}`} className="hover:text-white transition-colors">
                  {t.phone}
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3" />
                <a href={`mailto:${t.email}`} className="hover:text-white transition-colors">
                  {t.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-950 py-4">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} New Motorsi. {content.rights}
        </div>
      </div>
    </footer>
  )
}
