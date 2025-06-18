"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Star, Truck } from "lucide-react"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import ProductCard from "@/components/product-card"
import { useLanguage } from "@/contexts/language-context"

export default function ProductPage({ params }: { params: { id: string } }) {
  const { t, language } = useLanguage()

  // Get product data based on ID
  const getProductData = (productId: string) => {
    const products = {
      "warehouse-1": {
        id: "warehouse-1",
        name: t("warehouseShelvingUnit"),
        price: 450.0,
        description: {
          ka: `პროფესიონალური სასაწყობე სტელაჟი მძიმე ტვირთებისთვის. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია საწყობებისა და ინდუსტრიული ობიექტებისთვის.

**ტექნიკური მახასიათებლები:**
• სიმაღლე: 200 ან 250 სმ
• სიგანე: 100 სმ  
• სიღრმე: 60 სმ
• იარუსების რაოდენობა: 4
• დატვირთვა: 300 კგ ერთ იარუსზე

შესაძლებელია იარუსების რაოდენობის შეცვლა და სტელაჟების გადაბმა. ფერების ფართო არჩევანი.`,
          en: `Professional warehouse shelving for heavy loads. Made from high-quality metal, ideal for warehouses and industrial facilities.

**Technical Specifications:**
• Height: 200 or 250 cm
• Width: 100 cm
• Depth: 60 cm
• Number of tiers: 4
• Load capacity: 300 kg per tier

Adjustable tier quantity and expandable system possible. Wide color selection available.`,
          ru: `Профессиональный складской стеллаж для тяжелых грузов. Изготовлен из высококачественного металла, идеален для складов и промышленных объектов.

**Технические характеристики:**
• Высота: 200 или 250 см
• Ширина: 100 см
• Глубина: 60 см
• Количество ярусов: 4
• Нагрузка: 300 кг на ярус

Возможно изменение количества ярусов и расширение системы. Широкий выбор цветов.`,
        },
        features: {
          ka: [
            "სიმაღლე: 200 ან 250 სმ",
            "სიგანე: 100 სმ",
            "სიღრმე: 60 სმ",
            "იარუსების რაოდენობა: 4",
            "დატვირთვა: 300 კგ ერთ იარუსზე",
            "მაღალი ხარისხის ლითონი",
            "კოროზიისგან დაცული",
            "მარტივი მონტაჟი",
          ],
          en: [
            "Height: 200 or 250 cm",
            "Width: 100 cm",
            "Depth: 60 cm",
            "Number of tiers: 4",
            "Load capacity: 300 kg per tier",
            "High-quality metal",
            "Corrosion resistant",
            "Easy assembly",
          ],
          ru: [
            "Высота: 200 или 250 см",
            "Ширина: 100 см",
            "Глубина: 60 см",
            "Количество ярусов: 4",
            "Нагрузка: 300 кг на ярус",
            "Высококачественный металл",
            "Устойчив к коррозии",
            "Простая сборка",
          ],
        },
        images: ["/images/blue-warehouse-shelving.png"],
        colors: [t("blue")],
        sizes: ["200x100x60", "250x100x60"],
        category: t("warehouseShelving"),
        rating: 4.8,
        reviewCount: 24,
      },
      "warehouse-2": {
        id: "warehouse-2",
        name: t("warehouseShelvingUnit"),
        price: 420.0,
        description: {
          ka: `პროფესიონალური სასაწყობე სტელაჟი მძიმე ტვირთებისთვის. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია საწყობებისა და ინდუსტრიული ობიექტებისთვის.

**ტექნიკური მახასიათებლები:**
• სიმაღლე: 200 სმ
• სიგანე: 150 სმ  
• სიღრმე: 60 სმ
• იარუსების რაოდენობა: 4
• დატვირთვა: 300 კგ ერთ იარუსზე

შესაძლებელია იარუსების რაოდენობის შეცვლა და სტელაჟების გადაბმა. ფერების ფართო არჩევანი.`,
          en: `Professional warehouse shelving for heavy loads. Made from high-quality metal, ideal for warehouses and industrial facilities.

**Technical Specifications:**
• Height: 200 cm
• Width: 150 cm
• Depth: 60 cm
• Number of tiers: 4
• Load capacity: 300 kg per tier

Adjustable tier quantity and expandable system possible. Wide color selection available.`,
          ru: `Профессиональный складской стеллаж для тяжелых грузов. Изготовлен из высококачественного металла, идеален для складов и промышленных объектов.

**Технические характеристики:**
• Высота: 200 см
• Ширина: 150 см
• Глубина: 60 см
• Количество ярусов: 4
• Нагрузка: 300 кг на ярус

Возможно изменение количества ярусов и расширение системы. Широкий выбор цветов.`,
        },
        features: {
          ka: [
            "სიმაღლე: 200 სმ",
            "სიგანე: 150 სმ",
            "სიღრმე: 60 სმ",
            "იარუსების რაოდენობა: 4",
            "დატვირთვა: 300 კგ ერთ იარუსზე",
            "მაღალი ხარისხის ლითონი",
            "კოროზიისგან დაცული",
            "მარტივი მონტაჟი",
          ],
          en: [
            "Height: 200 cm",
            "Width: 150 cm",
            "Depth: 60 cm",
            "Number of tiers: 4",
            "Load capacity: 300 kg per tier",
            "High-quality metal",
            "Corrosion resistant",
            "Easy assembly",
          ],
          ru: [
            "Высота: 200 см",
            "Ширина: 150 см",
            "Глубина: 60 см",
            "Количество ярусов: 4",
            "Нагрузка: 300 кг на ярус",
            "Высококачественный металл",
            "Устойчив к коррозии",
            "Простая сборка",
          ],
        },
        images: ["/images/blue-orange-warehouse-shelving.jpg"],
        colors: [t("blue"), "ნარინჯისფერი"],
        sizes: ["200x150x60"],
        category: t("warehouseShelving"),
        rating: 4.7,
        reviewCount: 18,
      },
      "warehouse-3": {
        id: "warehouse-3",
        name: t("warehouseShelvingUnit"),
        price: 480.0,
        description: {
          ka: `პროფესიონალური სასაწყობე სტელაჟი მძიმე ტვირთებისთვის. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია საწყობებისა და ინდუსტრიული ობიექტებისთვის.

**ტექნიკური მახასიათებლები:**
• სიმაღლე: 200 სმ
• სიგანე: 200 სმ  
• სიღრმე: 60 სმ
• იარუსების რაოდენობა: 4
• დატვირთვა: 300 კგ ერთ იარუსზე

შესაძლებელია იარუსების რაოდენობის შეცვლა და სტელაჟების გადაბმა. ფერების ფართო არჩევანი.`,
          en: `Professional warehouse shelving for heavy loads. Made from high-quality metal, ideal for warehouses and industrial facilities.

**Technical Specifications:**
• Height: 200 cm
• Width: 200 cm
• Depth: 60 cm
• Number of tiers: 4
• Load capacity: 300 kg per tier

Adjustable tier quantity and expandable system possible. Wide color selection available.`,
          ru: `Профессиональный складской стеллаж для тяжелых грузов. Изготовлен из высококачественного металла, идеален для складов и промышленных объектов.

**Технические характеристики:**
• Высота: 200 см
• Ширина: 200 см
• Глубина: 60 см
• Количество ярусов: 4
• Нагрузка: 300 кг на ярус

Возможно изменение количества ярусов и расширение системы. Широкий выбор цветов.`,
        },
        features: {
          ka: [
            "სიმაღლე: 200 სმ",
            "სიგანე: 200 სმ",
            "სიღრმე: 60 სმ",
            "იარუსების რაოდენობა: 4",
            "დატვირთვა: 300 კგ ერთ იარუსზე",
            "მაღალი ხარისხის ლითონი",
            "კოროზიისგან დაცული",
            "მარტივი მონტაჟი",
          ],
          en: [
            "Height: 200 cm",
            "Width: 200 cm",
            "Depth: 60 cm",
            "Number of tiers: 4",
            "Load capacity: 300 kg per tier",
            "High-quality metal",
            "Corrosion resistant",
            "Easy assembly",
          ],
          ru: [
            "Высота: 200 см",
            "Ширина: 200 см",
            "Глубина: 60 см",
            "Количество ярусов: 4",
            "Нагрузка: 300 кг на ярус",
            "Высококачественный металл",
            "Устойчив к коррозии",
            "Простая сборка",
          ],
        },
        images: ["/images/gray-warehouse-shelving.jpg"],
        colors: ["ნაცრისფერი", t("blue")],
        sizes: ["200x200x60"],
        category: t("warehouseShelving"),
        rating: 4.9,
        reviewCount: 12,
      },
      "warehouse-4": {
        id: "warehouse-4",
        name: t("warehouseShelvingUnit"),
        price: 520.0,
        description: {
          ka: `პროფესიონალური სასაწყობე სტელაჟი მძიმე ტვირთებისთვის. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია საწყობებისა და ინდუსტრიული ობიექტებისთვის.

**ტექნიკური მახასიათებლები:**
• სიმაღლე: 250 სმ
• სიგანე: 200 სმ  
• სიღრმე: 60 სმ
• იარუსების რაოდენობა: 4
• დატვირთვა: 300 კგ ერთ იარუსზე

შესაძლებელია იარუსების რაოდენობის შეცვლა და სტელაჟების გადაბმა. ფერების ფართო არჩევანი.`,
          en: `Professional warehouse shelving for heavy loads. Made from high-quality metal, ideal for warehouses and industrial facilities.

**Technical Specifications:**
• Height: 250 cm
• Width: 200 cm
• Depth: 60 cm
• Number of tiers: 4
• Load capacity: 300 kg per tier

Adjustable tier quantity and expandable system possible. Wide color selection available.`,
          ru: `Профессиональный складской стеллаж для тяжелых грузов. Изготовлен из высококачественного металла, идеален для складов и промышленных объектов.

**Технические характеристики:**
• Высота: 250 см
• Ширина: 200 см
• Глубина: 60 см
• Количество ярусов: 4
• Нагрузка: 300 кг на ярус

Возможно изменение количества ярусов и расширение системы. Широкий выбор цветов.`,
        },
        features: {
          ka: [
            "სიმაღლე: 250 სმ",
            "სიგანე: 200 სმ",
            "სიღრმე: 60 სმ",
            "იარუსების რაოდენობა: 4",
            "დატვირთვა: 300 კგ ერთ იარუსზე",
            "მაღალი ხარისხის ლითონი",
            "კოროზიისგან დაცული",
            "მარტივი მონტაჟი",
          ],
          en: [
            "Height: 250 cm",
            "Width: 200 cm",
            "Depth: 60 cm",
            "Number of tiers: 4",
            "Load capacity: 300 kg per tier",
            "High-quality metal",
            "Corrosion resistant",
            "Easy assembly",
          ],
          ru: [
            "Высота: 250 см",
            "Ширина: 200 см",
            "Глубина: 60 см",
            "Количество ярусов: 4",
            "Нагрузка: 300 кг на ярус",
            "Высококачественный металл",
            "Устойчив к коррозии",
            "Простая сборка",
          ],
        },
        images: ["/images/tall-warehouse-shelving.jpg", "/images/blue-industrial-shelving.jpg"],
        colors: ["ნაცრისფერი", t("blue")],
        sizes: ["250x200x60"],
        category: t("warehouseShelving"),
        rating: 5.0,
        reviewCount: 8,
      },
      "tire-shelving-1": {
        id: "tire-shelving-1",
        name: t("tireShelvingUnit"),
        price: 680.0,
        description: {
          ka: `პროფესიონალური საბურავის სტელაჟი ავტოსერვისებისა და საწყობებისთვის. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია საბურავების ორგანიზებული შენახვისთვის.

**ტექნიკური მახასიათებლები:**
• სიმაღლე: 200 ან 250 სმ
• სიგანე: 100/200/300/400/500/600 სმ
• სიღრმე: 60 სმ
• იარუსების რაოდენობა: 4
• დატვირთვა: 800 კგ ერთ იარუსზე

შესაძლებელია იარუსების რაოდენობის შეცვლა და სტელაჟების გადაბმა. ფერების ფართო არჩევანი.`,
          en: `Professional tire shelving for auto services and warehouses. Made from high-quality metal, ideal for organized tire storage.

**Technical Specifications:**
• Height: 200 or 250 cm
• Width: 100/200/300/400/500/600 cm
• Depth: 60 cm
• Number of tiers: 4
• Load capacity: 800 kg per tier

Adjustable tier quantity and expandable system possible. Wide color selection available.`,
          ru: `Профессиональный стеллаж для шин для автосервисов и складов. Изготовлен из высококачественного металла, идеален для организованного хранения шин.

**Технические характеристики:**
• Высота: 200 или 250 см
• Ширина: 100/200/300/400/500/600 см
• Глубина: 60 см
• Количество ярусов: 4
• Нагрузка: 800 кг на ярус

Возможно изменение количества ярусов и расширение системы. Широкий выбор цветов.`,
        },
        features: {
          ka: [
            "სიმაღლე: 200 ან 250 სმ",
            "სიგანე: 100-600 სმ (6 ვარიანტი)",
            "სიღრმე: 60 სმ",
            "იარუსების რაოდენობა: 4",
            "დატვირთვა: 800 კგ ერთ იარუსზე",
            "მაღალი ხარისხის ლითონი",
            "კოროზიისგან დაცული",
            "რეგულირებადი იარუსები",
            "გაფართოებადი სისტემა",
          ],
          en: [
            "Height: 200 or 250 cm",
            "Width: 100-600 cm (6 options)",
            "Depth: 60 cm",
            "Number of tiers: 4",
            "Load capacity: 800 kg per tier",
            "High-quality metal",
            "Corrosion resistant",
            "Adjustable tiers",
            "Expandable system",
          ],
          ru: [
            "Высота: 200 или 250 см",
            "Ширина: 100-600 см (6 вариантов)",
            "Глубина: 60 см",
            "Количество ярусов: 4",
            "Нагрузка: 800 кг на ярус",
            "Высококачественный металл",
            "Устойчив к коррозии",
            "Регулируемые ярусы",
            "Расширяемая система",
          ],
        },
        images: ["/images/tire-shelving-1.png", "/images/tire-shelving-2.png"],
        colors: [t("blue"), "ნარინჯისფერი"],
        sizes: [
          "200x100x60",
          "200x200x60",
          "200x300x60",
          "200x400x60",
          "200x500x60",
          "200x600x60",
          "250x100x60",
          "250x200x60",
          "250x300x60",
          "250x400x60",
          "250x500x60",
          "250x600x60",
        ],
        category: t("tireShelving"),
        rating: 4.9,
        reviewCount: 15,
      },
      "clothing-shelving-1": {
        id: "clothing-shelving-1",
        name: t("clothingShelvingUnit"),
        price: 380.0,
        description: {
          ka: `პროფესიონალური ტანსაცმლის სტელაჟი მაღაზიებისა და საწყობებისთვის. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია ტანსაცმლის ორგანიზებული შენახვისა და გამოფენისთვის.

**ტექნიკური მახასიათებლები:**
• სიმაღლე: 200 ან 250 სმ
• სიგანე: 100 სმ
• სიღრმე: 60 სმ
• იარუსების რაოდენობა: 1 ან 2
• დატვირთვა: 300 კგ ერთ იარუსზე

შესაძლებელია სტელაჟების გადაბმა და სისტემის გაფართოება.`,
          en: `Professional clothing rack for stores and warehouses. Made from high-quality metal, ideal for organized clothing storage and display.

**Technical Specifications:**
• Height: 200 or 250 cm
• Width: 100 cm
• Depth: 60 cm
• Number of tiers: 1 or 2
• Load capacity: 300 kg per tier

Expandable system with connecting capability possible.`,
          ru: `Профессиональный стеллаж для одежды для магазинов и складов. Изготовлен из высококачественного металла, идеален для организованного хранения и демонстрации одежды.

**Технические характеристики:**
• Высота: 200 или 250 см
• Ширина: 100 см
• Глубина: 60 см
• Количество ярусов: 1 или 2
• Нагрузка: 300 кг на ярус

Возможна расширяемая система с соединением стеллажей.`,
        },
        features: {
          ka: [
            "სიმაღლე: 200 ან 250 სმ",
            "სიგანე: 100 სმ",
            "სიღრმე: 60 სმ",
            "იარუსების რაოდენობა: 1 ან 2",
            "დატვირთვა: 300 კგ ერთ იარუსზე",
            "მაღალი ხარისხის ლითონი",
            "კოროზიისგან დაცული",
            "გაფართოებადი სისტემა",
            "მარტივი მონტაჟი",
          ],
          en: [
            "Height: 200 or 250 cm",
            "Width: 100 cm",
            "Depth: 60 cm",
            "Number of tiers: 1 or 2",
            "Load capacity: 300 kg per tier",
            "High-quality metal",
            "Corrosion resistant",
            "Expandable system",
            "Easy assembly",
          ],
          ru: [
            "Высота: 200 или 250 см",
            "Ширина: 100 см",
            "Глубина: 60 см",
            "Количество ярусов: 1 или 2",
            "Нагрузка: 300 кг на ярус",
            "Высококачественный металл",
            "Устойчив к коррозии",
            "Расширяемая система",
            "Простая сборка",
          ],
        },
        images: ["/images/clothing-rack-1.jpg", "/images/clothing-rack-2.png"],
        colors: [t("white"), "ნაცრისფერი"],
        sizes: ["200x100x60", "250x100x60"],
        category: t("clothingShelving"),
        rating: 4.6,
        reviewCount: 22,
      },
      "aluminum-rail-1": {
        id: "aluminum-rail-1",
        name: t("aluminumRailUnit"),
        price: 45.0,
        description: {
          ka: `ალუმინის პროფილი - რელსი გამოიყენება პროდუქციის ჩამოსაკიდად. მაღალი ხარისხის ალუმინისგან დამზადებული, იდეალურია მაღაზიებისა და საგამოფენო სივრცეებისთვის.

**ტექნიკური მახასიათებლები:**
• მასალა: ალუმინი
• ზომები: საჭიროების მიხედვით
• მაქსიმალური სიგრძე: 6 მეტრი
• საკიდების რაოდენობა: სიგრძის მიხედვით
• მონტაჟი: კედელზე მონტაჟი

იდეალურია ტანსაცმლის, აქსესუარების და სხვა პროდუქტების გამოსაფენად.`,
          en: `Aluminum profile rail used for hanging products. Made from high-quality aluminum, ideal for stores and display spaces.

**Technical Specifications:**
• Material: Aluminum
• Dimensions: As needed
• Maximum length: 6 meters
• Number of hooks: According to length
• Mounting: Wall mounted

Perfect for displaying clothing, accessories and other products.`,
          ru: `Алюминиевый профиль-рельс используется для подвешивания продукции. Изготовлен из высококачественного алюминия, идеален для магазинов и выставочных пространств.

**Технические характеристики:**
• Материал: Алюминий
• Размеры: По потребности
• Максимальная длина: 6 метров
• Количество крючков: В зависимости от длины
• Монтаж: Настенный монтаж

Идеален для демонстрации одежды, аксессуаров и других товаров.`,
        },
        features: {
          ka: [
            "მასალა: ალუმინი",
            "მაქსიმალური სიგრძე: 6 მეტრი",
            "საჭიროების მიხედვით ზომები",
            "კედელზე მონტაჟი",
            "მსუბუქი წონა",
            "კოროზიისგან დაცული",
            "მარტივი ინსტალაცია",
            "მრავალფუნქციური",
          ],
          en: [
            "Material: Aluminum",
            "Maximum length: 6 meters",
            "Custom dimensions",
            "Wall mounted",
            "Lightweight",
            "Corrosion resistant",
            "Easy installation",
            "Multi-functional",
          ],
          ru: [
            "Материал: Алюминий",
            "Максимальная длина: 6 метров",
            "Размеры по потребности",
            "Настенный монтаж",
            "Легкий вес",
            "Устойчив к коррозии",
            "Простая установка",
            "Многофункциональный",
          ],
        },
        images: [
          "/images/aluminum-rail-3.jpg",
          "/images/aluminum-rail-2.jpg",
          "/images/aluminum-rail-4.jpg",
          "/images/aluminum-rail-1.jpg",
          "/images/aluminum-rail-5.jpg",
        ],
        colors: [t("aluminum"), t("black"), t("silver")],
        sizes: ["1m", "2m", "3m", "4m", "5m", "6m"],
        category: t("marketAccessories"),
        rating: 4.7,
        reviewCount: 31,
      },
      "perforated-profile-1": {
        id: "perforated-profile-1",
        name: t("perforatedProfileUnit"),
        price: 85.0,
        description: {
          ka: `პერფორირებული პროფილი და თაროს დამჭერი მაღაზიებისა და საწყობებისთვის. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია პროდუქტების ორგანიზებული გამოფენისთვის.

**ტექნიკური მახასიათებლები:**
• პროფილის სიგრძე: 1615 ან 1915 მმ
• თაროს დამჭერი: 30სმ, 40სმ, 50სმ
• იარუსების რაოდენობა: 4
• მონტაჟი: კედელზე მაგრდება
• ფერები: თეთრი ან ნაცრისფერი

რეგულირებადი სისტემა საშუალებას გაძლევთ თაროები განათავსოთ სასურველ სიმაღლეზე.`,
          en: `Perforated profile and shelf bracket for stores and warehouses. Made from high-quality metal, ideal for organized product display.

**Technical Specifications:**
• Profile length: 1615 or 1915 mm
• Shelf brackets: 30cm, 40cm, 50cm
• Number of tiers: 4
• Mounting: Wall mounted
• Colors: White or gray

Adjustable system allows you to position shelves at desired heights.`,
          ru: `Перфорированный профиль и кронштейн полки для магазинов и складов. Изготовлен из высококачественного металла, идеален для организованной демонстрации товаров.

**Технические характеристики:**
• Длина профиля: 1615 или 1915 мм
• Кронштейны полок: 30см, 40см, 50см
• Количество ярусов: 4
• Монтаж: Настенный
• Цвета: Белый или серый

Регулируемая система позволяет размещать полки на желаемой высоте.`,
        },
        features: {
          ka: [
            "პროფილის სიგრძე: 1615 ან 1915 მმ",
            "თაროს დამჭერი: 30, 40, 50 სმ",
            "იარუსების რაოდენობა: 4",
            "კედელზე მონტაჟი",
            "რეგულირებადი სიმაღლე",
            "მაღალი ხარისხის ლითონი",
            "კოროზიისგან დაცული",
            "მარტივი ინსტალაცია",
          ],
          en: [
            "Profile length: 1615 or 1915 mm",
            "Shelf brackets: 30, 40, 50 cm",
            "Number of tiers: 4",
            "Wall mounting",
            "Adjustable height",
            "High-quality metal",
            "Corrosion resistant",
            "Easy installation",
          ],
          ru: [
            "Длина профиля: 1615 или 1915 мм",
            "Кронштейны полок: 30, 40, 50 см",
            "Количество ярусов: 4",
            "Настенный монтаж",
            "Регулируемая высота",
            "Высококачественный металл",
            "Устойчив к коррозии",
            "Простая установка",
          ],
        },
        images: [
          "/images/perforated-profile-2.jpg",
          "/images/perforated-profile-1.jpg",
          "/images/perforated-profile-3.jpg",
          "/images/perforated-profile-4.jpg",
        ],
        colors: [t("white"), "ნაცრისფერი"],
        sizes: ["1615mm + 30cm", "1615mm + 40cm", "1615mm + 50cm", "1915mm + 30cm", "1915mm + 40cm", "1915mm + 50cm"],
        category: t("marketShelves"),
        rating: 4.8,
        reviewCount: 19,
      },
      // Default fallback product
      "1": {
        id: params.id,
        name: t("metalShelving"),
        price: 299.99,
        description: {
          ka: "მაღალი ხარისხის ლითონის სტელაჟი, რომელიც იდეალურია მაღაზიებისა და საწყობებისთვის. მტკიცე კონსტრუქცია და მარტივი მონტაჟი.",
          en: "High-quality metal shelving unit, ideal for stores and warehouses. Sturdy construction and easy assembly.",
          ru: "Высококачественный металлический стеллаж, идеальный для магазинов и складов. Прочная конструкция и простая сборка.",
        },
        features: {
          ka: [
            "მაღალი ხარისხის ლითონისგან დამზადებული",
            "მაქსიმალური ტვირთამწეობა: 200კგ თაროზე",
            "მარტივი მონტაჟი",
            "კოროზიისგან დაცული",
            "რეგულირებადი თაროები",
          ],
          en: [
            "Made from high-quality metal",
            "Maximum load capacity: 200kg per shelf",
            "Easy assembly",
            "Corrosion resistant",
            "Adjustable shelves",
          ],
          ru: [
            "Изготовлен из высококачественного металла",
            "Максимальная нагрузка: 200кг на полку",
            "Простая сборка",
            "Устойчив к коррозии",
            "Регулируемые полки",
          ],
        },
        images: ["/placeholder.svg?height=600&width=600"],
        colors: [t("black"), t("white"), "ნაცარი", "ლურჯი"],
        sizes: ["120x40x180", "150x50x200", "180x60x220"],
        category: t("shelving"),
        rating: 4.5,
        reviewCount: 89,
      },
    }

    return products[productId as keyof typeof products] || products["1"]
  }

  const product = getProductData(params.id)

  // Related products
  const relatedProducts: any[] = []

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <div className="container px-4 py-8 md:px-6 md:py-12">
          {/* Breadcrumbs */}
          <nav className="flex items-center text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-foreground">
              {t("home")}
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link href="/products" className="hover:text-foreground">
              {t("products")}
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link href={`/categories/${product.category}`} className="hover:text-foreground">
              {product.category}
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-foreground">{product.name}</span>
          </nav>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg border">
                <Image
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
              {product.images.length > 1 && (
                <div
                  className={`grid gap-4 ${product.images.length === 2 ? "grid-cols-2" : product.images.length === 3 ? "grid-cols-3" : "grid-cols-4"}`}
                >
                  {product.images.slice(1).map((image, index) => (
                    <div key={index + 1} className="overflow-hidden rounded-lg border cursor-pointer">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${product.name} - სურათი ${index + 2}`}
                        width={150}
                        height={150}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-black">{product.name}</h1>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating)
                            ? "fill-primary text-primary"
                            : i < product.rating
                              ? "fill-primary text-primary opacity-50"
                              : "text-muted-foreground"
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-muted-foreground">
                      ({product.reviewCount} {t("reviews")})
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-black">{product.description[language]}</p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">{t("color")}</h3>
                  <RadioGroup defaultValue={product.colors[0]} className="flex flex-wrap gap-2">
                    {product.colors.map((color, index) => (
                      <div key={index} className="flex items-center">
                        <RadioGroupItem id={`color-${index}`} value={color} className="peer sr-only" />
                        <Label
                          htmlFor={`color-${index}`}
                          className="flex cursor-pointer items-center justify-center rounded-md border-2 border-muted bg-popover px-3 py-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary"
                        >
                          {color}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div>
                  <h3 className="font-medium mb-2">{t("size")} (სმ)</h3>
                  <RadioGroup defaultValue={product.sizes[0]} className="flex flex-wrap gap-2">
                    {product.sizes.map((size, index) => (
                      <div key={index} className="flex items-center">
                        <RadioGroupItem id={`size-${index}`} value={size} className="peer sr-only" />
                        <Label
                          htmlFor={`size-${index}`}
                          className="flex cursor-pointer items-center justify-center rounded-md border-2 border-muted bg-popover px-3 py-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary"
                        >
                          {size}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>

              <div className="rounded-lg border p-4 flex items-start gap-3">
                <Truck className="h-5 w-5 mt-0.5 text-muted-foreground" />
                <div>
                  <h4 className="font-medium">{t("freeShipping")}</h4>
                  <p className="text-sm text-muted-foreground">{t("freeShippingDescription")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Description */}
          <div className="mt-12">
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">{t("description")}</h3>
              <div className="prose prose-gray max-w-none">
                <div className="whitespace-pre-line text-black">{product.description[language]}</div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">{t("relatedProducts")}</h2>
            {relatedProducts.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground">მსგავსი პროდუქტები მალე დაემატება</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
