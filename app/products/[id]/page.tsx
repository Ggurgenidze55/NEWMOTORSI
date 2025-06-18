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
      "accessory-holder-1": {
        id: "accessory-holder-1",
        name: t("accessoryHolderUnit"),
        price: 35.0,
        description: {
          ka: `ქრომირებული ლითონის აქსესუარების დამჭერი მაღაზიებისა და საგამოფენო სივრცეებისთვის. მაღალი ხარისხის ქრომირებული ლითონისგან დამზადებული.

**ტექნიკური მახასიათებლები:**
• მასალა: ქრომირებული ლითონი
• სიგრძე: 60 სმ
• დატვირთვა: 15 კგ
• მონტაჟი: კედელზე მაგრდება
• ფერი: ქრომი

იდეალურია აქსესუარების, ჩანთების და სხვა მსუბუქი ნივთების გამოსაფენად.`,
          en: `Chrome metal accessory holder for stores and display spaces. Made from high-quality chrome-plated metal.

**Technical Specifications:**
• Material: Chrome-plated metal
• Length: 60 cm
• Load capacity: 15 kg
• Mounting: Wall mounted
• Color: Chrome

Perfect for displaying accessories, bags and other lightweight items.`,
          ru: `Хромированный металлический держатель аксессуаров для магазинов и выставочных пространств. Изготовлен из высококачественного хромированного металла.

**Технические характеристики:**
• Материал: Хромированный металл
• Длина: 60 см
• Нагрузка: 15 кг
• Монтаж: Настенный
• Цвет: Хром

Идеален для демонстрации аксессуаров, сумок и других легких предметов.`,
        },
        features: {
          ka: [
            "მასალა: ქრომირებული ლითონი",
            "სიგრძე: 60 სმ",
            "დატვირთვა: 15 კგ",
            "კედელზე მონტაჟი",
            "მსუბუქი წონა",
            "კოროზიისგან დაცული",
            "მარტივი ინსტალაცია",
            "ელეგანტური დიზაინი",
          ],
          en: [
            "Material: Chrome-plated metal",
            "Length: 60 cm",
            "Load capacity: 15 kg",
            "Wall mounted",
            "Lightweight",
            "Corrosion resistant",
            "Easy installation",
            "Elegant design",
          ],
          ru: [
            "Материал: Хромированный металл",
            "Длина: 60 см",
            "Нагрузка: 15 кг",
            "Монтаж: Настенный",
            "Легкий вес",
            "Устойчив к коррозии",
            "Простая установка",
            "Элегантный дизайн",
          ],
        },
        images: ["/images/accessory-holder-1.jpg"],
        colors: ["ქრომი", t("silver")],
        sizes: ["60cm"],
        category: t("marketAccessories"),
        rating: 4.5,
        reviewCount: 12,
      },
      "perforated-wall-1": {
        id: "perforated-wall-1",
        name: t("perforatedWallUnit"),
        price: 180.0,
        description: {
          ka: `პერფორირებული კედელი პროდუქციის ჩამოსაკიდად. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია ინსტრუმენტების, აქსესუარების და სხვადასხვა ნივთების ორგანიზებული შენახვისთვის.

**ტექნიკური მახასიათებლები:**
• ზომა: H2000*D1000 მმ
• მასალა: ლითონი
• პერფორაცია: 25მმ ნახვრეტები
• მონტაჟი: კედელზე მაგრდება
• ფერები: ღია ნაცრისფერი, მუქი ნაცრისფერი

იდეალურია სამუშაო სივრცეების, ოფისების, მაღაზიების და საწყობების ორგანიზაციისთვის.`,
          en: `Perforated wall for hanging products. Made from high-quality metal, ideal for organized storage of tools, accessories and various items.

**Technical Specifications:**
• Size: H2000*D1000 mm
• Material: Metal
• Perforation: 25mm holes
• Mounting: Wall mounted
• Colors: Light gray, dark gray

Perfect for organizing workspaces, offices, stores and warehouses.`,
          ru: `Перфорированная стена для подвешивания продукции. Изготовлена из высококачественного металла, идеальна для организованного хранения инструментов, аксессуаров и различных предметов.

**Технические характеристики:**
• Размер: H2000*D1000 мм
• Материал: Металл
• Перфорация: отверстия 25мм
• Монтаж: Настенный
• Цвета: Светло-серый, темно-серый

Идеальна для организации рабочих пространств, офисов, магазинов и складов.`,
        },
        features: {
          ka: [
            "ზომა: H2000*D1000 მმ",
            "მასალა: ლითონი",
            "პერფორაცია: 25მმ ნახვრეტები",
            "კედელზე მონტაჟი",
            "მრავალფუნქციური",
            "კოროზიისგან დაცული",
            "მარტივი ინსტალაცია",
            "ორგანიზებული შენახვა",
          ],
          en: [
            "Size: H2000*D1000 mm",
            "Material: Metal",
            "Perforation: 25mm holes",
            "Wall mounted",
            "Multi-functional",
            "Corrosion resistant",
            "Easy installation",
            "Organized storage",
          ],
          ru: [
            "Размер: H2000*D1000 мм",
            "Материал: Металл",
            "Перфорация: отверстия 25мм",
            "Настенный монтаж",
            "Многофункциональный",
            "Устойчив к коррозии",
            "Простая установка",
            "Организованное хранение",
          ],
        },
        images: [
          "/images/perforated-wall-1.jpg",
          "/images/perforated-wall-2.jpg",
          "/images/perforated-wall-3.jpg",
          "/images/perforated-wall-4.jpg",
        ],
        colors: ["ღია ნაცრისფერი", "მუქი ნაცრისფერი"],
        sizes: ["H2000*D1000"],
        category: t("marketAccessories"),
        rating: 4.8,
        reviewCount: 16,
      },
      "shelf-divider-1": {
        id: "shelf-divider-1",
        name: t("shelfDividerUnit"),
        price: 25.0,
        description: {
          ka: `სასაწყობე სტელაჟის გამყოფი თაროზე სხვადასხვა პროდუქციის გამოსაყოფად. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია საწყობებისა და მაღაზიებისთვის.

**ტექნიკური მახასიათებლები:**
• სიმაღლე: H300 ან H450 მმ
• მასალა: მეტალი
• ფერი: ლურჯი
• დანიშნულება: პროდუქციის გამოყოფა თაროზე
• მონტაჟი: მარტივი დამაგრება

იდეალურია სხვადასხვა ზომის და ტიპის პროდუქტების ორგანიზებული შენახვისთვის.`,
          en: `Warehouse shelf divider for separating different products on shelves. Made from high-quality metal, ideal for warehouses and stores.

**Technical Specifications:**
• Height: H300 or H450 mm
• Material: Metal
• Color: Blue
• Purpose: Product separation on shelves
• Installation: Easy attachment

Perfect for organized storage of different sizes and types of products.`,
          ru: `Разделитель складской полки для разделения различных товаров на полках. Изготовлен из высококачественного металла, идеален для складов и магазинов.

**Технические характеристики:**
• Высота: H300 или H450 мм
• Материал: Металл
• Цвет: Синий
• Назначение: Разделение товаров на полках
• Монтаж: Простое крепление

Идеален для организованного хранения товаров разных размеров и типов.`,
        },
        features: {
          ka: [
            "სიმაღლე: H300 ან H450 მმ",
            "მასალა: მეტალი",
            "ფერი: ლურჯი",
            "მარტივი მონტაჟი",
            "მაღალი ხარისხის ლითონი",
            "კოროზიისგან დაცული",
            "ორგანიზებული შენახვა",
            "უნივერსალური გამოყენება",
          ],
          en: [
            "Height: H300 or H450 mm",
            "Material: Metal",
            "Color: Blue",
            "Easy installation",
            "High-quality metal",
            "Corrosion resistant",
            "Organized storage",
            "Universal use",
          ],
          ru: [
            "Высота: H300 или H450 мм",
            "Материал: Металл",
            "Цвет: Синий",
            "Простая установка",
            "Высококачественный металл",
            "Устойчив к коррозии",
            "Организованное хранение",
            "Универсальное использование",
          ],
        },
        images: ["/images/shelf-divider-1.jpg"],
        colors: [t("blue")],
        sizes: ["H300", "H450"],
        category: t("warehouseShelving"),
        rating: 4.7,
        reviewCount: 14,
      },
      "wall-grid-display-1": {
        id: "wall-grid-display-1",
        name: t("wallGridDisplayUnit"),
        price: 120.0,
        description: {
          ka: `აქსესუარების კედლის საკიდი მაღაზიებისა და საგამოფენო სივრცეებისთვის. მაღალი ხარისხის ლითონისგან დამზადებული ბადე სისტემა, იდეალურია აქსესუარების, ჩანთების და სხვა პროდუქტების ორგანიზებული გამოფენისთვის.

**ტექნიკური მახასიათებლები:**
• ზომა: H2000*D1000 მმ
• მასალა: ლითონი
• ბადის ზომა: 50x50 მმ
• მონტაჟი: კედელზე ან ფეხებზე
• ფერები: შავი, თეთრი

შესაძლებელია სხვადასხვა საკიდების და აქსესუარების დამატება.`,
          en: `Wall grid display for accessories for stores and exhibition spaces. Made from high-quality metal grid system, ideal for organized display of accessories, bags and other products.

**Technical Specifications:**
• Size: H2000*D1000 mm
• Material: Metal
• Grid size: 50x50 mm
• Mounting: Wall mounted or with legs
• Colors: Black, white

Various hooks and accessories can be added.`,
          ru: `Настенная сетка для аксессуаров для магазинов и выставочных пространств. Изготовлена из высококачественной металлической сетки, идеальна для организованной демонстрации аксессуаров, сумок и других товаров.

**Технические характеристики:**
• Размер: H2000*D1000 мм
• Материал: Металл
• Размер сетки: 50x50 мм
• Монтаж: Настенный или на ножках
• Цвета: Черный, белый

Можно добавить различные крючки и аксессуары.`,
        },
        features: {
          ka: [
            "ზომა: H2000*D1000 მმ",
            "მასალა: ლითონი",
            "ბადის ზომა: 50x50 მმ",
            "კედელზე ან ფეხებზე მონტაჟი",
            "მრავალფუნქციური",
            "კოროზიისგან დაცული",
            "მარტივი ინსტალაცია",
            "სხვადასხვა აქსესუარები",
          ],
          en: [
            "Size: H2000*D1000 mm",
            "Material: Metal",
            "Grid size: 50x50 mm",
            "Wall or leg mounting",
            "Multi-functional",
            "Corrosion resistant",
            "Easy installation",
            "Various accessories",
          ],
          ru: [
            "Размер: H2000*D1000 мм",
            "Материал: Металл",
            "Размер сетки: 50x50 мм",
            "Настенный или на ножках",
            "Многофункциональный",
            "Устойчив к коррозии",
            "Простая установка",
            "Различные аксессуары",
          ],
        },
        images: [
          "/images/wall-grid-display-1.jpg",
          "/images/wall-grid-display-2.jpg",
          "/images/wall-grid-display-3.jpg",
          "/images/wall-grid-display-4.jpg",
        ],
        colors: ["შავი", "თეთრი"],
        sizes: ["H2000*D1000"],
        category: t("marketAccessories"),
        rating: 4.6,
        reviewCount: 18,
      },
      "perforated-wall-cover-1": {
        id: "perforated-wall-cover-1",
        name: t("perforatedWallCoverUnit"),
        price: 150.0,
        description: {
          ka: `პერფორირებული კედელი საბურავით პროდუქციის ჩამოსაკიდად. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია მაღაზიებისა და საგამოფენო სივრცეებისთვის.

**ტექნიკური მახასიათებლები:**
• ზომა: H1800*D1000 მმ
• მასალა: ლითონი
• პერფორაცია: 25მმ ნახვრეტები
• მონტაჟი: ბორბლებზე მობილური
• ფერები: თეთრი მატი, შავი მატი

იდეალურია აქსესუარების, ინსტრუმენტების და სხვადასხვა პროდუქტების ორგანიზებული გამოფენისთვის.`,
          en: `Perforated wall with cover for hanging products. Made from high-quality metal, ideal for stores and exhibition spaces.

**Technical Specifications:**
• Size: H1800*D1000 mm
• Material: Metal
• Perforation: 25mm holes
• Mounting: Mobile on wheels
• Colors: Matte white, matte black

Perfect for organized display of accessories, tools and various products.`,
          ru: `Перфорированная стена с покрытием для подвешивания продукции. Изготовлена из высококачественного металла, идеальна для магазинов и выставочных пространств.

**Технические характеристики:**
• Размер: H1800*D1000 мм
• Материал: Металл
• Перфорация: отверстия 25мм
• Монтаж: Мобильная на колесах
• Цвета: Матовый белый, матовый черный

Идеальна для организованной демонстрации аксессуаров, инструментов и различных продуктов.`,
        },
        features: {
          ka: [
            "ზომა: H1800*D1000 მმ",
            "მასალა: ლითონი",
            "პერფორაცია: 25მმ ნახვრეტები",
            "მობილური ბორბლებზე",
            "მატი ზედაპირი",
            "კოროზიისგან დაცული",
            "მარტივი გადაადგილება",
            "მრავალფუნქციური",
          ],
          en: [
            "Size: H1800*D1000 mm",
            "Material: Metal",
            "Perforation: 25mm holes",
            "Mobile on wheels",
            "Matte surface",
            "Corrosion resistant",
            "Easy mobility",
            "Multi-functional",
          ],
          ru: [
            "Размер: H1800*D1000 мм",
            "Материал: Металл",
            "Перфорация: отверстия 25мм",
            "Мобильная на колесах",
            "Матовая поверхность",
            "Устойчив к коррозии",
            "Легкая мобильность",
            "Многофункциональная",
          ],
        },
        images: [
          "/images/perforated-wall-cover-1.jpg",
          "/images/perforated-wall-cover-2.jpg",
          "/images/perforated-wall-cover-3.jpg",
        ],
        colors: [t("matteWhite"), t("mattBlack")],
        sizes: ["H1800*D1000"],
        category: t("marketAccessories"),
        rating: 4.7,
        reviewCount: 13,
      },
      "basket-shelving-1": {
        id: "basket-shelving-1",
        name: t("basketShelvingUnit"),
        price: 220.0,
        description: {
          ka: `სტელაჟი 4 კალათით და პერფორირებული საბურავით. იდეალურია მაღაზიებისთვის, სუპერმარკეტებისთვის და საწყობებისთვის პროდუქტების გამოსაფენად.

**ტექნიკური მახასიათებლები:**
• ზომა: L540*W300*H1400 მმ
• მასალა: მეტალი
• კალათების რაოდენობა: 4
• პერფორირებული საბურავი ზედა ნაწილში
• ბორბლებზე მობილური
• ფერები: თეთრი, შავი

იდეალურია სასურსათო პროდუქტების, სასმელების, წვრილმანი ნივთების და სხვა საქონლის გამოსაფენად.`,
          en: `Shelving unit with 4 baskets and perforated cover. Ideal for shops, supermarkets and warehouses for displaying products.

**Technical Specifications:**
• Size: L540*W300*H1400 mm
• Material: Metal
• Number of baskets: 4
• Perforated cover at the top
• Mobile on wheels
• Colors: White, Black

Perfect for displaying groceries, beverages, small items and other merchandise.`,
          ru: `Стеллаж с 4 корзинами и перфорированной крышкой. Идеален для магазинов, супермаркетов и складов для демонстрации товаров.

**Технические характеристики:**
• Размер: L540*W300*H1400 мм
• Материал: Металл
• Количество корзин: 4
• Перфорированная крышка в верхней части
• Мобильный на колесах
• Цвета: Белый, Черный

Идеален для демонстрации продуктов питания, напитков, мелких предметов и других товаров.`,
        },
        features: {
          ka: [
            "ზომა: L540*W300*H1400 მმ",
            "მასალა: მეტალი",
            "კალათების რაოდენობა: 4",
            "პერფორირებული საბურავი",
            "მობილური ბორბლებზე",
            "ფერები: თეთრი, შავი",
            "მარტივი აწყობა",
            "მრავალფუნქციური",
          ],
          en: [
            "Size: L540*W300*H1400 mm",
            "Material: Metal",
            "Number of baskets: 4",
            "Perforated cover",
            "Mobile on wheels",
            "Colors: White, Black",
            "Easy assembly",
            "Multi-functional",
          ],
          ru: [
            "Размер: L540*W300*H1400 мм",
            "Материал: Металл",
            "Количество корзин: 4",
            "Перфорированная крышка",
            "Мобильный на колесах",
            "Цвета: Белый, Черный",
            "Простая сборка",
            "Многофункциональный",
          ],
        },
        images: [
          "/images/basket-shelving-white.jpeg",
          "/images/basket-shelving-black.jpeg",
          "/images/basket-shelving-display.jpeg",
        ],
        colors: [t("white"), t("black")],
        sizes: ["L540*W300*H1400"],
        category: t("marketShelves"),
        rating: 4.8,
        reviewCount: 12,
      },
      "basket-shelving-2": {
        id: "basket-shelving-2",
        name: t("basketShelvingLargeUnit"),
        price: 280.0,
        description: {
          ka: `დიდი ზომის სტელაჟი 4 კალათით და პერფორირებული საბურავით. იდეალურია დიდი მაღაზიებისთვის, სუპერმარკეტებისთვის და საწყობებისთვის პროდუქტების გამოსაფენად.

**ტექნიკური მახასიათებლები:**
• ზომა: L800*W300*H1700 მმ
• მასალა: მეტალი
• კალათების რაოდენობა: 4
• პერფორირებული საბურავი ზედა ნაწილში
• ბორბლებზე მობილური
• ფერები: თეთრი, შავი

იდეალურია სასურსათო პროდუქტების, სასმელების, წვრილმანი ნივთების და სხვა საქონლის გამოსაფენად. უფრო დიდი ზომის გამო მეტი პროდუქტის განთავსება შეიძლება.`,
          en: `Large shelving unit with 4 baskets and perforated cover. Ideal for large shops, supermarkets and warehouses for displaying products.

**Technical Specifications:**
• Size: L800*W300*H1700 mm
• Material: Metal
• Number of baskets: 4
• Perforated cover at the top
• Mobile on wheels
• Colors: White, Black

Perfect for displaying groceries, beverages, small items and other merchandise. The larger size allows for more product storage.`,
          ru: `Большой стеллаж с 4 корзинами и перфорированной крышкой. Идеален для больших магазинов, супермаркетов и складов для демонстрации товаров.

**Технические характеристики:**
• Размер: L800*W300*H1700 мм
• Материал: Металл
• Количество корзин: 4
• Перфорированная крышка в верхней части
• Мобильный на колесах
• Цвета: Белый, Черный

Идеален для демонстрации продуктов питания, напитков, мелких предметов и других товаров. Больший размер позволяет разместить больше товаров.`,
        },
        features: {
          ka: [
            "ზომა: L800*W300*H1700 მმ",
            "მასალა: მეტალი",
            "კალათების რაოდენობა: 4",
            "პერფორირებული საბურავი",
            "მობილური ბორბლებზე",
            "ფერები: თეთრი, შავი",
            "მარტივი აწყობა",
            "მრავალფუნქციური",
            "დიდი ტევადობა",
          ],
          en: [
            "Size: L800*W300*H1700 mm",
            "Material: Metal",
            "Number of baskets: 4",
            "Perforated cover",
            "Mobile on wheels",
            "Colors: White, Black",
            "Easy assembly",
            "Multi-functional",
            "Large capacity",
          ],
          ru: [
            "Размер: L800*W300*H1700 мм",
            "Материал: Металл",
            "Количество корзин: 4",
            "Перфорированная крышка",
            "Мобильный на колесах",
            "Цвета: Белый, Черный",
            "Простая сборка",
            "Многофункциональный",
            "Большая вместимость",
          ],
        },
        images: ["/images/basket-shelving-large-white.jpeg"],
        colors: [t("white"), t("black")],
        sizes: ["L800*W300*H1700"],
        category: t("marketShelves"),
        rating: 4.9,
        reviewCount: 8,
      },
      "tier-shelving-1": {
        id: "tier-shelving-1",
        name: t("tierShelvingUnit"),
        price: 190.0,
        description: {
          ka: `4 იარუსიანი სტელაჟი მყარი თაროებით და პერფორირებული უკანა პანელით. იდეალურია მაღაზიებისთვის, სუპერმარკეტებისთვის და საწყობებისთვის პროდუქტების გამოსაფენად.

**ტექნიკური მახასიათებლები:**
• ზომა: L540*W300*H1400 მმ
• მასალა: მეტალი
• იარუსების რაოდენობა: 4
• პერფორირებული უკანა პანელი
• მყარი თაროები
• ფერები: მწვანე, წითელი, ლურჯი

იდეალურია სხვადასხვა პროდუქტების, წიგნების, ოფისის ნივთების და სხვა საქონლის გამოსაფენად.`,
          en: `4-tier shelving unit with solid shelves and perforated back panel. Ideal for shops, supermarkets and warehouses for displaying products.

**Technical Specifications:**
• Size: L540*W300*H1400 mm
• Material: Metal
• Number of tiers: 4
• Perforated back panel
• Solid shelves
• Colors: Green, Red, Blue

Perfect for displaying various products, books, office items and other merchandise.`,
          ru: `4-ярусный стеллаж с твердыми полками и перфорированной задней панелью. Идеален для магазинов, супермаркетов и складов для демонстрации товаров.

**Технические характеристики:**
• Размер: L540*W300*H1400 мм
• Материал: Металл
• Количество ярусов: 4
• Перфорированная задняя панель
• Твердые полки
• Цвета: Зеленый, Красный, Синий

Идеален для демонстрации различных товаров, книг, офисных предметов и других товаров.`,
        },
        features: {
          ka: [
            "ზომა: L540*W300*H1400 მმ",
            "მასალა: მეტალი",
            "იარუსების რაოდენობა: 4",
            "პერფორირებული უკანა პანელი",
            "მყარი თაროები",
            "ფერები: მწვანე, წითელი, ლურჯი",
            "მარტივი აწყობა",
            "მრავალფუნქციური",
          ],
          en: [
            "Size: L540*W300*H1400 mm",
            "Material: Metal",
            "Number of tiers: 4",
            "Perforated back panel",
            "Solid shelves",
            "Colors: Green, Red, Blue",
            "Easy assembly",
            "Multi-functional",
          ],
          ru: [
            "Размер: L540*W300*H1400 мм",
            "Материал: Металл",
            "Количество ярусов: 4",
            "Перфорированная задняя панель",
            "Твердые полки",
            "Цвета: Зеленый, Красный, Синий",
            "Простая сборка",
            "Многофункциональный",
          ],
        },
        images: [
          "/images/tier-shelving-red.jpeg",
          "/images/tier-shelving-blue.jpeg",
          "/images/tier-shelving-colors.jpeg",
        ],
        colors: ["მწვანე", "წითელი", t("blue")],
        sizes: ["L540*W300*H1400"],
        category: t("marketShelves"),
        rating: 4.7,
        reviewCount: 15,
      },
      "tier-shelving-2": {
        id: "tier-shelving-2",
        name: t("largeTierShelvingUnit"),
        price: 250.0,
        description: {
          ka: `დიდი ზომის 4 იარუსიანი სტელაჟი პერფორირებული თაროებით და მყარი უკანა პანელით. იდეალურია მაღაზიებისთვის, სუპერმარკეტებისთვის და საწყობებისთვის პროდუქტების გამოსაფენად.

**ტექნიკური მახასიათებლები:**
• ზომა: L800*W300*H1700 მმ
• მასალა: მეტალი
• იარუსების რაოდენობა: 4
• პერფორირებული თაროები
• მყარი უკანა პანელი
• ფერები: თეთრი, შავი

იდეალურია სხვადასხვა პროდუქტების, წიგნების, ოფისის ნივთების და სხვა საქონლის გამოსაფენად. უფრო დიდი ზომის გამო მეტი პროდუქტის განთავსება შეიძლება.`,
          en: `Large 4-tier shelving unit with perforated shelves and solid back panel. Ideal for shops, supermarkets and warehouses for displaying products.

**Technical Specifications:**
• Size: L800*W300*H1700 mm
• Material: Metal
• Number of tiers: 4
• Perforated shelves
• Solid back panel
• Colors: White, Black

Perfect for displaying various products, books, office items and other merchandise. The larger size allows for more product storage.`,
          ru: `Большой 4-ярусный стеллаж с перфорированными полками и твердой задней панелью. Идеален для магазинов, супермаркетов и складов для демонстрации товаров.

**Технические характеристики:**
• Размер: L800*W300*H1700 мм
• Материал: Металл
• Количество ярусов: 4
• Перфорированные полки
• Твердая задняя панель
• Цвета: Белый, Черный

Идеален для демонстрации различных товаров, книг, офисных предметов и других товаров. Больший размер позволяет разместить больше товаров.`,
        },
        features: {
          ka: [
            "ზომა: L800*W300*H1700 მმ",
            "მასალა: მეტალი",
            "იარუსების რაოდენობა: 4",
            "პერფორირებული თაროები",
            "მყარი უკანა პანელი",
            "ფერები: თეთრი, შავი",
            "მარტივი აწყობა",
            "მრავალფუნქციური",
            "დიდი ტევადობა",
          ],
          en: [
            "Size: L800*W300*H1700 mm",
            "Material: Metal",
            "Number of tiers: 4",
            "Perforated shelves",
            "Solid back panel",
            "Colors: White, Black",
            "Easy assembly",
            "Multi-functional",
            "Large capacity",
          ],
          ru: [
            "Размер: L800*W300*H1700 мм",
            "Материал: Металл",
            "Количество ярусов: 4",
            "Перфорированные полки",
            "Твердая задняя панель",
            "Цвета: Белый, Черный",
            "Простая сборка",
            "Многофункциональный",
            "Большая вместимость",
          ],
        },
        images: ["/images/large-tier-shelving-colors.jpeg"],
        colors: [t("white"), t("black")],
        sizes: ["L800*W300*H1700"],
        category: t("marketShelves"),
        rating: 4.8,
        reviewCount: 10,
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
