"use client"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

/**
 * PRODUCT PAGE
 * ------------------------------------
 * • Displays product details if available.
 * • Shows “Product not found” message if the product is not found.
 * • Placeholder data is used for compilation safety.
 * • Replace with a proper data-fetching solution
 *   (e.g. import from '@/lib/products' or an API call)
 *   when you’re ready.
 */

type Product = {
  id: string
  name: string
  price: number
  description: { ka: string; en: string; ru: string }
  features: { ka: string[]; en: string[]; ru: string[] }
  images: string[]
  colors: string[]
  sizes: string[]
  category: string
  rating: number
  reviewCount: number
}

const PRODUCTS: Record<string, Product> = {
  "warehouse-1": {
    id: "warehouse-1",
    name: "Warehouse Shelving Unit",
    price: 450,
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
    images: [
      "/images/blue-warehouse-shelving.png",
      "/images/blue-orange-warehouse-shelving.jpg",
      "/images/gray-warehouse-shelving.jpg",
      "/images/tall-warehouse-shelving.jpg",
    ],
    colors: ["blue"],
    sizes: ["200x100x60", "250x100x60"],
    category: "warehouseShelving",
    rating: 4.8,
    reviewCount: 24,
  },
  "warehouse-2": {
    id: "warehouse-2",
    name: "Warehouse Shelving Unit",
    price: 420,
    description: {
      ka: `პროფესიონალური სასაწყობე სტელაჟი ლურჯი და ნარინჯისფერი ფერებით. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია საწყობებისა და ინდუსტრიული ობიექტებისთვის.

**ტექნიკური მახასიათებლები:**
• სიმაღლე: 200 სმ
• სიგანე: 120 სმ  
• სიღრმე: 60 სმ
• იარუსების რაოდენობა: 4
• დატვირთვა: 350 კგ ერთ იარუსზე

ეს მოდელი გამოირჩევა გაძლიერებული კონსტრუქციით და მაღალი ტვირთამწეობით.`,
      en: `Professional warehouse shelving in blue and orange colors. Made from high-quality metal, ideal for warehouses and industrial facilities.

**Technical Specifications:**
• Height: 200 cm
• Width: 120 cm
• Depth: 60 cm
• Number of tiers: 4
• Load capacity: 350 kg per tier

This model features reinforced construction and high load capacity.`,
      ru: `Профессиональный складской стеллаж в синем и оранжевом цветах. Изготовлен из высококачественного металла, идеален для складов и промышленных объектов.

**Технические характеристики:**
• Высота: 200 см
• Ширина: 120 см
• Глубина: 60 см
• Количество ярусов: 4
• Нагрузка: 350 кг на ярус

Эта модель отличается усиленной конструкцией и высокой грузоподъемностью.`,
    },
    features: {
      ka: [
        "სიმაღლე: 200 სმ",
        "სიგანე: 120 სმ",
        "სიღრმე: 60 სმ",
        "იარუსების რაოდენობა: 4",
        "დატვირთვა: 350 კგ ერთ იარუსზე",
        "გაძლიერებული კონსტრუქცია",
        "კოროზიისგან დაცული",
        "მარტივი მონტაჟი",
      ],
      en: [
        "Height: 200 cm",
        "Width: 120 cm",
        "Depth: 60 cm",
        "Number of tiers: 4",
        "Load capacity: 350 kg per tier",
        "Reinforced construction",
        "Corrosion resistant",
        "Easy assembly",
      ],
      ru: [
        "Высота: 200 см",
        "Ширина: 120 см",
        "Глубина: 60 см",
        "Количество ярусов: 4",
        "Нагрузка: 350 кг на ярус",
        "Усиленная конструкция",
        "Устойчив к коррозии",
        "Простая сборка",
      ],
    },
    images: [
      "/images/blue-orange-warehouse-shelving.jpg",
      "/images/blue-warehouse-shelving.png",
      "/images/gray-warehouse-shelving.jpg",
    ],
    colors: ["blue", "orange"],
    sizes: ["200x120x60"],
    category: "warehouseShelving",
    rating: 4.7,
    reviewCount: 18,
  },
  "warehouse-3": {
    id: "warehouse-3",
    name: "Warehouse Shelving Unit",
    price: 480,
    description: {
      ka: `ნაცრისფერი სასაწყობე სტელაჟი კლასიკური დიზაინით. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია საწყობებისა და ინდუსტრიული ობიექტებისთვის.

**ტექნიკური მახასიათებლები:**
• სიმაღლე: 220 სმ
• სიგანე: 100 სმ  
• სიღრმე: 50 სმ
• იარუსების რაოდენობა: 5
• დატვირთვა: 280 კგ ერთ იარუსზე

კომპაქტური და ეფექტური გადაწყვეტა მცირე ფართობისთვის.`,
      en: `Gray warehouse shelving with classic design. Made from high-quality metal, ideal for warehouses and industrial facilities.

**Technical Specifications:**
• Height: 220 cm
• Width: 100 cm
• Depth: 50 cm
• Number of tiers: 5
• Load capacity: 280 kg per tier

Compact and efficient solution for smaller spaces.`,
      ru: `Серый складской стеллаж с классическим дизайном. Изготовлен из высококачественного металла, идеален для складов и промышленных объектов.

**Технические характеристики:**
• Высота: 220 см
• Ширина: 100 см
• Глубина: 50 см
• Количество ярусов: 5
• Нагрузка: 280 кг на ярус

Компактное и эффективное решение для небольших помещений.`,
    },
    features: {
      ka: [
        "სიმაღლე: 220 სმ",
        "სიგანე: 100 სმ",
        "სიღრმე: 50 სმ",
        "იარუსების რაოდენობა: 5",
        "დატვირთვა: 280 კგ ერთ იარუსზე",
        "კომპაქტური დიზაინი",
        "კოროზიისგან დაცული",
        "მარტივი მონტაჟი",
      ],
      en: [
        "Height: 220 cm",
        "Width: 100 cm",
        "Depth: 50 cm",
        "Number of tiers: 5",
        "Load capacity: 280 kg per tier",
        "Compact design",
        "Corrosion resistant",
        "Easy assembly",
      ],
      ru: [
        "Высота: 220 см",
        "Ширина: 100 см",
        "Глубина: 50 см",
        "Количество ярусов: 5",
        "Нагрузка: 280 кг на ярус",
        "Компактный дизайн",
        "Устойчив к коррозии",
        "Простая сборка",
      ],
    },
    images: [
      "/images/gray-warehouse-shelving.jpg",
      "/images/blue-warehouse-shelving.png",
      "/images/warehouse-shelving.jpg",
    ],
    colors: ["gray"],
    sizes: ["220x100x50"],
    category: "warehouseShelving",
    rating: 4.6,
    reviewCount: 15,
  },
  "warehouse-4": {
    id: "warehouse-4",
    name: "Warehouse Shelving Unit",
    price: 520,
    description: {
      ka: `მაღალი სასაწყობე სტელაჟი დიდი ტვირთამწეობით. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია დიდი საწყობებისა და ინდუსტრიული ობიექტებისთვის.

**ტექნიკური მახასიათებლები:**
• სიმაღლე: 300 სმ
• სიგანე: 120 სმ  
• სიღრმე: 80 სმ
• იარუსების რაოდენობა: 6
• დატვირთვა: 400 კგ ერთ იარუსზე

იდეალურია მაღალი ჭერის მქონე საწყობებისთვის.`,
      en: `Tall warehouse shelving with high load capacity. Made from high-quality metal, ideal for large warehouses and industrial facilities.

**Technical Specifications:**
• Height: 300 cm
• Width: 120 cm
• Depth: 80 cm
• Number of tiers: 6
• Load capacity: 400 kg per tier

Perfect for warehouses with high ceilings.`,
      ru: `Высокий складской стеллаж с большой грузоподъемностью. Изготовлен из высококачественного металла, идеален для больших складов и промышленных объектов.

**Технические характеристики:**
• Высота: 300 см
• Ширина: 120 см
• Глубина: 80 см
• Количество ярусов: 6
• Нагрузка: 400 кг на ярус

Идеален для складов с высокими потолками.`,
    },
    features: {
      ka: [
        "სიმაღლე: 300 სმ",
        "სიგანე: 120 სმ",
        "სიღრმე: 80 სმ",
        "იარუსების რაოდენობა: 6",
        "დატვირთვა: 400 კგ ერთ იარუსზე",
        "მაღალი ტვირთამწეობა",
        "კოროზიისგან დაცული",
        "მარტივი მონტაჟი",
      ],
      en: [
        "Height: 300 cm",
        "Width: 120 cm",
        "Depth: 80 cm",
        "Number of tiers: 6",
        "Load capacity: 400 kg per tier",
        "High load capacity",
        "Corrosion resistant",
        "Easy assembly",
      ],
      ru: [
        "Высота: 300 см",
        "Ширина: 120 см",
        "Глубина: 80 см",
        "Количество ярусов: 6",
        "Нагрузка: 400 кг на ярус",
        "Высокая грузоподъемность",
        "Устойчив к коррозии",
        "Простая сборка",
      ],
    },
    images: [
      "/images/tall-warehouse-shelving.jpg",
      "/images/blue-warehouse-shelving.png",
      "/images/warehouse-shelving.jpg",
    ],
    colors: ["blue", "gray"],
    sizes: ["300x120x80"],
    category: "warehouseShelving",
    rating: 4.9,
    reviewCount: 12,
  },
  "tire-shelving-1": {
    id: "tire-shelving-1",
    name: "Tire Shelving Unit",
    price: 680,
    description: {
      ka: `სპეციალური სტელაჟი საბურავების შენახვისთვის. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია ავტოსერვისებისა და საბურავების მაღაზიებისთვის.

**ტექნიკური მახასიათებლები:**
• სიმაღლე: 200 სმ
• სიგანე: 150 სმ  
• სიღრმე: 40 სმ
• იარუსების რაოდენობა: 4
• დატვირთვა: 200 კგ ერთ იარუსზე

სპეციალურად შექმნილია საბურავების ეფექტური შენახვისთვის.`,
      en: `Special shelving for tire storage. Made from high-quality metal, ideal for auto services and tire shops.

**Technical Specifications:**
• Height: 200 cm
• Width: 150 cm
• Depth: 40 cm
• Number of tiers: 4
• Load capacity: 200 kg per tier

Specially designed for efficient tire storage.`,
      ru: `Специальный стеллаж для хранения шин. Изготовлен из высококачественного металла, идеален для автосервисов и шинных магазинов.

**Технические характеристики:**
• Высота: 200 см
• Ширина: 150 см
• Глубина: 40 см
• Количество ярусов: 4
• Нагрузка: 200 кг на ярус

Специально разработан для эффективного хранения шин.`,
    },
    features: {
      ka: [
        "სიმაღლე: 200 სმ",
        "სიგანე: 150 სმ",
        "სიღრმე: 40 სმ",
        "იარუსების რაოდენობა: 4",
        "დატვირთვა: 200 კგ ერთ იარუსზე",
        "საბურავებისთვის ოპტიმიზებული",
        "კოროზიისგან დაცული",
        "მარტივი მონტაჟი",
      ],
      en: [
        "Height: 200 cm",
        "Width: 150 cm",
        "Depth: 40 cm",
        "Number of tiers: 4",
        "Load capacity: 200 kg per tier",
        "Optimized for tires",
        "Corrosion resistant",
        "Easy assembly",
      ],
      ru: [
        "Высота: 200 см",
        "Ширина: 150 см",
        "Глубина: 40 см",
        "Количество ярусов: 4",
        "Нагрузка: 200 кг на ярус",
        "Оптимизирован для шин",
        "Устойчив к коррозии",
        "Простая сборка",
      ],
    },
    images: ["/images/tire-shelving-1.png", "/images/tire-shelving-2.png"],
    colors: ["blue", "gray"],
    sizes: ["200x150x40"],
    category: "tireShelving",
    rating: 4.7,
    reviewCount: 9,
  },
  "clothing-shelving-1": {
    id: "clothing-shelving-1",
    name: "Clothing Shelving Unit",
    price: 380,
    description: {
      ka: `ტანსაცმლის სტელაჟი მაღაზიებისთვის. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია ტანსაცმლის მაღაზიებისა და შოურუმებისთვის.

**ტექნიკური მახასიათებლები:**
• სიმაღლე: 180 სმ
• სიგანე: 120 სმ  
• სიღრმე: 50 სმ
• ჩამოსაკიდი ღერო: 2 ცალი
• დატვირთვა: 50 კგ ღეროზე

იდეალურია ტანსაცმლის ეფექტური გამოსაჩენად.`,
      en: `Clothing rack for stores. Made from high-quality metal, ideal for clothing stores and showrooms.

**Technical Specifications:**
• Height: 180 cm
• Width: 120 cm
• Depth: 50 cm
• Hanging rods: 2 pieces
• Load capacity: 50 kg per rod

Perfect for effective clothing display.`,
      ru: `Стеллаж для одежды для магазинов. Изготовлен из высококачественного металла, идеален для магазинов одежды и шоурумов.

**Технические характеристики:**
• Высота: 180 см
• Ширина: 120 см
• Глубина: 50 см
• Штанги для вешалок: 2 штуки
• Нагрузка: 50 кг на штангу

Идеален для эффективной демонстрации одежды.`,
    },
    features: {
      ka: [
        "სიმაღლე: 180 სმ",
        "სიგანე: 120 სმ",
        "სიღრმე: 50 სმ",
        "ჩამოსაკიდი ღერო: 2 ცალი",
        "დატვირთვა: 50 კგ ღეროზე",
        "ტანსაცმლისთვის ოპტიმიზებული",
        "კოროზიისგან დაცული",
        "მარტივი მონტაჟი",
      ],
      en: [
        "Height: 180 cm",
        "Width: 120 cm",
        "Depth: 50 cm",
        "Hanging rods: 2 pieces",
        "Load capacity: 50 kg per rod",
        "Optimized for clothing",
        "Corrosion resistant",
        "Easy assembly",
      ],
      ru: [
        "Высота: 180 см",
        "Ширина: 120 см",
        "Глубина: 50 см",
        "Штанги для вешалок: 2 штуки",
        "Нагрузка: 50 кг на штангу",
        "Оптимизирован для одежды",
        "Устойчив к коррозии",
        "Простая сборка",
      ],
    },
    images: ["/images/clothing-rack-1.jpg", "/images/clothing-rack-2.png"],
    colors: ["gray", "black"],
    sizes: ["180x120x50"],
    category: "clothingShelving",
    rating: 4.5,
    reviewCount: 14,
  },
  "aluminum-rail-1": {
    id: "aluminum-rail-1",
    name: "Aluminum Rail Unit",
    price: 45,
    description: {
      ka: `ალუმინის რელსი მარკეტის აქსესუარებისთვის. მაღალი ხარისხის ალუმინისგან დამზადებული, იდეალურია მარკეტის თაროებისა და გამოფენისთვის.

**ტექნიკური მახასიათებლები:**
• სიგრძე: 100 სმ
• სიგანე: 3 სმ  
• სისქე: 2 სმ
• მასალა: ალუმინი
• დატვირთვა: 15 კგ

მარტივი დამონტაჟება და გამოყენება.`,
      en: `Aluminum rail for market accessories. Made from high-quality aluminum, ideal for market shelves and displays.

**Technical Specifications:**
• Length: 100 cm
• Width: 3 cm
• Thickness: 2 cm
• Material: Aluminum
• Load capacity: 15 kg

Easy installation and use.`,
      ru: `Алюминиевый рельс для торговых аксессуаров. Изготовлен из высококачественного алюминия, идеален для торговых полок и витрин.

**Технические характеристики:**
• Длина: 100 см
• Ширина: 3 см
• Толщина: 2 см
• Материал: Алюминий
• Нагрузка: 15 кг

Простая установка и использование.`,
    },
    features: {
      ka: [
        "სიგრძე: 100 სმ",
        "სიგანე: 3 სმ",
        "სისქე: 2 სმ",
        "მასალა: ალუმინი",
        "დატვირთვა: 15 კგ",
        "მსუბუქი და მტკიცე",
        "კოროზიისგან დაცული",
        "მარტივი მონტაჟი",
      ],
      en: [
        "Length: 100 cm",
        "Width: 3 cm",
        "Thickness: 2 cm",
        "Material: Aluminum",
        "Load capacity: 15 kg",
        "Lightweight and durable",
        "Corrosion resistant",
        "Easy installation",
      ],
      ru: [
        "Длина: 100 см",
        "Ширина: 3 см",
        "Толщина: 2 см",
        "Материал: Алюминий",
        "Нагрузка: 15 кг",
        "Легкий и прочный",
        "Устойчив к коррозии",
        "Простая сборка",
      ],
    },
    images: [
      "/images/aluminum-rail-1.jpg",
      "/images/aluminum-rail-2.jpg",
      "/images/aluminum-rail-3.jpg",
      "/images/aluminum-rail-4.jpg",
      "/images/aluminum-rail-5.jpg",
    ],
    colors: ["aluminum"],
    sizes: ["100x3x2"],
    category: "aluminumRail",
    rating: 4.6,
    reviewCount: 22,
  },
  "perforated-profile-1": {
    id: "perforated-profile-1",
    name: "Perforated Profile Unit",
    price: 85,
    description: {
      ka: `პერფორირებული პროფილი თაროს დამჭერით. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია მარკეტის თაროებისა და აქსესუარებისთვის.

**ტექნიკური მახასიათებლები:**
• სიმაღლე: 200 სმ
• სიგანე: 5 სმ  
• სისქე: 3 სმ
• პერფორაციის ზომა: 5x5 მმ
• დატვირთვა: 25 კგ

რეგულირებადი სიმაღლე და მარტივი მონტაჟი.`,
      en: `Perforated profile with shelf bracket. Made from high-quality metal, ideal for market shelves and accessories.

**Technical Specifications:**
• Height: 200 cm
• Width: 5 cm
• Thickness: 3 cm
• Perforation size: 5x5 mm
• Load capacity: 25 kg

Adjustable height and easy installation.`,
      ru: `Перфорированный профиль с кронштейном полки. Изготовлен из высококачественного металла, идеален для торговых полок и аксессуаров.

**Технические характеристики:**
• Высота: 200 см
• Ширина: 5 см
• Толщина: 3 см
• Размер перфорации: 5x5 мм
• Нагрузка: 25 кг

Регулируемая высота и простая установка.`,
    },
    features: {
      ka: [
        "სიმაღლე: 200 სმ",
        "სიგანე: 5 სმ",
        "სისქე: 3 სმ",
        "პერფორაციის ზომა: 5x5 მმ",
        "დატვირთვა: 25 კგ",
        "რეგულირებადი სიმაღლე",
        "კედლის მონტაჟი",
        "მარტივი მონტაჟი",
      ],
      en: [
        "Height: 200 cm",
        "Width: 5 cm",
        "Depth: 3 cm",
        "Perforation size: 5x5 mm",
        "Load capacity: 25 kg",
        "Adjustable height",
        "Wall mounting",
        "Easy installation",
      ],
      ru: [
        "Высота: 200 см",
        "Ширина: 5 см",
        "Толщина: 3 см",
        "Размер перфорации: 5x5 мм",
        "Нагрузка: 25 кг",
        "Регулируемая высота",
        "Настенный монтаж",
        "Простая установка",
      ],
    },
    images: [
      "/images/perforated-profile-1.jpg",
      "/images/perforated-profile-2.jpg",
      "/images/perforated-profile-3.jpg",
      "/images/perforated-profile-4.jpg",
    ],
    colors: ["white", "black"],
    sizes: ["200x5x3"],
    category: "perforatedProfile",
    rating: 4.4,
    reviewCount: 16,
  },
  "perforated-wall-1": {
    id: "perforated-wall-1",
    name: "Perforated Wall Unit",
    price: 320,
    description: {
      ka: `პერფორირებული კედელი აქსესუარების საკიდისთვის. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია მარკეტებისა და მაღაზიებისთვის.

**ტექნიკური მახასიათებლები:**
• სიმაღლე: 200 სმ
• სიღრმე: 100 სმ  
• სისქე: 2 სმ
• პერფორაციის ზომა: 5x5 მმ
• დატვირთვა: 50 კგ

მრავალფუნქციური და ეფექტური გადაწყვეტა.`,
      en: `Perforated wall for accessory hanging. Made from high-quality metal, ideal for markets and stores.

**Technical Specifications:**
• Height: 200 cm
• Depth: 100 cm
• Thickness: 2 cm
• Perforation size: 5x5 mm
• Load capacity: 50 kg

Multifunctional and efficient solution.`,
      ru: `Перфорированная стена для подвешивания аксессуаров. Изготовлена из высококачественного металла, идеальна для рынков и магазинов.

**Технические характеристики:**
• Высота: 200 см
• Глубина: 100 см
• Толщина: 2 см
• Размер перфорации: 5x5 мм
• Нагрузка: 50 кг

Многофункциональное и эффективное решение.`,
    },
    features: {
      ka: [
        "სიმაღლე: 200 სმ",
        "სიღრმე: 100 სმ",
        "სისქე: 2 სმ",
        "პერფორაციის ზომა: 5x5 მმ",
        "დატვირთვა: 50 კგ",
        "მრავალფუნქციური",
        "კედლის მონტაჟი",
        "მარტივი მონტაჟი",
      ],
      en: [
        "Height: 200 cm",
        "Depth: 100 cm",
        "Thickness: 2 cm",
        "Perforation size: 5x5 mm",
        "Load capacity: 50 kg",
        "Multifunctional",
        "Wall mounting",
        "Easy installation",
      ],
      ru: [
        "Высота: 200 см",
        "Глубина: 100 см",
        "Толщина: 2 см",
        "Размер перфорации: 5x5 мм",
        "Нагрузка: 50 кг",
        "Многофункциональная",
        "Настенный монтаж",
        "Простая установка",
      ],
    },
    images: [
      "/images/perforated-wall-1.png",
      "/images/perforated-wall-cover-1.jpg",
      "/images/perforated-wall-cover-2.jpg",
      "/images/perforated-wall-cover-3.jpg",
    ],
    colors: ["white", "black"],
    sizes: ["200x100x2"],
    category: "perforatedWall",
    rating: 4.3,
    reviewCount: 11,
  },
  "basket-shelving-1": {
    id: "basket-shelving-1",
    name: "Basket Shelving Unit",
    price: 280,
    description: {
      ka: `კალათიანი სტელაჟი 4 კალათით და საბურავით. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია სახლისა და ოფისისთვის.

**ტექნიკური მახასიათებლები:**
• სიმაღლე: 150 სმ
• სიგანე: 60 სმ  
• სიღრმე: 40 სმ
• კალათების რაოდენობა: 4
• დატვირთვა: 20 კგ კალათზე

კომპაქტური და ფუნქციური დიზაინი.`,
      en: `Basket shelving with 4 baskets and cover. Made from high-quality metal, ideal for home and office.

**Technical Specifications:**
• Height: 150 cm
• Width: 60 cm
• Depth: 40 cm
• Number of baskets: 4
• Load capacity: 20 kg per basket

Compact and functional design.`,
      ru: `Стеллаж с корзинами с 4 корзинами и крышкой. Изготовлен из высококачественного металла, идеален для дома и офиса.

**Технические характеристики:**
• Высота: 150 см
• Ширина: 60 см
• Глубина: 40 см
• Количество корзин: 4
• Нагрузка: 20 кг на корзину

Компактный и функциональный дизайн.`,
    },
    features: {
      ka: [
        "სიმაღლე: 150 სმ",
        "სიგანე: 60 სმ",
        "სიღრმე: 40 სმ",
        "კალათების რაოდენობა: 4",
        "დატვირთვა: 20 კგ კალათზე",
        "კომპაქტური დიზაინი",
        "საბურავით",
        "მარტივი მონტაჟი",
      ],
      en: [
        "Height: 150 cm",
        "Width: 60 cm",
        "Depth: 40 cm",
        "Number of baskets: 4",
        "Load capacity: 20 kg per basket",
        "Compact design",
        "With cover",
        "Easy assembly",
      ],
      ru: [
        "Высота: 150 см",
        "Ширина: 60 см",
        "Глубина: 40 см",
        "Количество корзин: 4",
        "Нагрузка: 20 кг на корзину",
        "Компактный дизайн",
        "С крышкой",
        "Простая сборка",
      ],
    },
    images: [
      "/images/basket-shelving-white.jpeg",
      "/images/basket-shelving-black.jpeg",
      "/images/basket-shelving-display.jpeg",
    ],
    colors: ["white", "black"],
    sizes: ["150x60x40"],
    category: "basketShelving",
    rating: 4.5,
    reviewCount: 19,
  },
  "tier-shelving-1": {
    id: "tier-shelving-1",
    name: "Tier Shelving Unit",
    price: 220,
    description: {
      ka: `4-იარუსიანი სტელაჟი. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია სახლისა და ოფისისთვის.

**ტექნიკური მახასიათებლები:**
• სიმაღლე: 160 სმ
• სიგანე: 80 სმ  
• სიღრმე: 35 სმ
• იარუსების რაოდენობა: 4
• დატვირთვა: 30 კგ იარუსზე

მრავალფერი ფერების არჩევანი.`,
      en: `4-tier shelving unit. Made from high-quality metal, ideal for home and office.

**Technical Specifications:**
• Height: 160 cm
• Width: 80 cm
• Depth: 35 cm
• Number of tiers: 4
• Load capacity: 30 kg per tier

Multiple color options available.`,
      ru: `4-ярусный стеллаж. Изготовлен из высококачественного металла, идеален для дома и офиса.

**Технические характеристики:**
• Высота: 160 см
• Ширина: 80 см
• Глубина: 35 см
• Количество ярусов: 4
• Нагрузка: 30 кг на ярус

Доступны различные цветовые варианты.`,
    },
    features: {
      ka: [
        "სიმაღლე: 160 სმ",
        "სიგანე: 80 სმ",
        "სიღრმე: 35 სმ",
        "იარუსების რაოდენობა: 4",
        "დატვირთვა: 30 კგ იარუსზე",
        "მრავალფერი ფერები",
        "კომპაქტური",
        "მარტივი მონტაჟი",
      ],
      en: [
        "Height: 160 cm",
        "Width: 80 cm",
        "Depth: 35 cm",
        "Number of tiers: 4",
        "Load capacity: 30 kg per tier",
        "Multiple colors",
        "Compact",
        "Easy assembly",
      ],
      ru: [
        "Высота: 160 см",
        "Ширина: 80 см",
        "Глубина: 35 см",
        "Количество ярусов: 4",
        "Нагрузка: 30 кг на ярус",
        "Различные цвета",
        "Компактный",
        "Простая сборка",
      ],
    },
    images: ["/images/tier-shelving-colors.jpeg", "/images/tier-shelving-blue.jpeg", "/images/tier-shelving-red.jpeg"],
    colors: ["blue", "red", "yellow", "green"],
    sizes: ["160x80x35"],
    category: "tierShelving",
    rating: 4.4,
    reviewCount: 25,
  },
  "pallet-shelving-1": {
    id: "pallet-shelving-1",
    name: "Pallet Shelving Unit 1",
    price: 850,
    description: {
      ka: `საპალეტე სტელაჟი 352x270x85. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია დიდი საწყობებისთვის.

**ტექნიკური მახასიათებლები:**
• სიმაღლე: 352 სმ
• სიგანე: 270 სმ  
• სიღრმე: 85 სმ
• იარუსების რაოდენობა: 3
• დატვირთვა: 1000 კგ იარუსზე

პროფესიონალური საწყობო გადაწყვეტა.`,
      en: `Pallet racking 352x270x85. Made from high-quality metal, ideal for large warehouses.

**Technical Specifications:**
• Height: 352 cm
• Width: 270 cm
• Depth: 85 cm
• Number of tiers: 3
• Load capacity: 1000 kg per tier

Professional warehouse solution.`,
      ru: `Паллетный стеллаж 352x270x85. Изготовлен из высококачественного металла, идеален для больших складов.

**Технические характеристики:**
• Высота: 352 см
• Ширина: 270 см
• Глубина: 85 см
• Количество ярусов: 3
• Нагрузка: 1000 кг на ярус

Профессиональное складское решение.`,
    },
    features: {
      ka: [
        "სიმაღლე: 352 სმ",
        "სიგანე: 270 სმ",
        "სიღრმე: 85 სმ",
        "იარუსების რაოდენობა: 3",
        "დატვირთვა: 1000 კგ იარუსზე",
        "პროფესიონალური",
        "მაღალი ტვირთამწეობა",
        "მარტივი მონტაჟი",
      ],
      en: [
        "Height: 352 cm",
        "Width: 270 cm",
        "Depth: 85 cm",
        "Number of tiers: 3",
        "Load capacity: 1000 kg per tier",
        "Professional",
        "High load capacity",
        "Easy assembly",
      ],
      ru: [
        "Высота: 352 см",
        "Ширина: 270 см",
        "Глубина: 85 см",
        "Количество ярусов: 3",
        "Нагрузка: 1000 кг на ярус",
        "Профессиональный",
        "Высокая грузоподъемность",
        "Простая сборка",
      ],
    },
    images: [
      "/images/pallet-shelving-1.jpg",
      "/images/pallet-shelving-2.jpg",
      "/images/pallet-shelving-3.jpg",
      "/images/pallet-shelving-4.png",
    ],
    colors: ["blue", "orange"],
    sizes: ["352x270x85"],
    category: "palletShelving",
    rating: 4.8,
    reviewCount: 8,
  },
  "archive-shelving-1": {
    id: "archive-shelving-1",
    name: "Archive Shelving Unit",
    price: 420,
    description: {
      ka: `საარქივო სტელაჟი დოკუმენტებისთვის. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია ოფისებისა და არქივებისთვის.

**ტექნიკური მახასიათებლები:**
• სიმაღლე: 200 სმ
• სიგანე: 100 სმ  
• სიღრმე: 35 სმ
• იარუსების რაოდენობა: 6
• დატვირთვა: 80 კგ იარუსზე

სპეციალურად შექმნილია დოკუმენტების შენახვისთვის.`,
      en: `Archive shelving for documents. Made from high-quality metal, ideal for offices and archives.

**Technical Specifications:**
• Height: 200 cm
• Width: 100 cm
• Depth: 35 cm
• Number of tiers: 6
• Load capacity: 80 kg per tier

Specially designed for document storage.`,
      ru: `Архивный стеллаж для документов. Изготовлен из высококачественного металла, идеален для офисов и архивов.

**Технические характеристики:**
• Высота: 200 см
• Ширина: 100 см
• Глубина: 35 см
• Количество ярусов: 6
• Нагрузка: 80 кг на ярус

Специально разработан для хранения документов.`,
    },
    features: {
      ka: [
        "სიმაღლე: 200 სმ",
        "სიგანე: 100 სმ",
        "სიღრმე: 35 სმ",
        "იარუსების რაოდენობა: 6",
        "დატვირთვა: 80 კგ იარუსზე",
        "დოკუმენტებისთვის",
        "კომპაქტური",
        "მარტივი მონტაჟი",
      ],
      en: [
        "Height: 200 cm",
        "Width: 100 cm",
        "Depth: 35 cm",
        "Number of tiers: 6",
        "Load capacity: 80 kg per tier",
        "For documents",
        "Compact",
        "Easy assembly",
      ],
      ru: [
        "Высота: 200 см",
        "Ширина: 100 см",
        "Глубина: 35 см",
        "Количество ярусов: 6",
        "Нагрузка: 80 кг на ярус",
        "Для документов",
        "Компактный",
        "Простая сборка",
      ],
    },
    images: ["/images/archive-shelving-1.jpg", "/images/archive-shelving-2.jpg"],
    colors: ["gray", "white"],
    sizes: ["200x100x35"],
    category: "archiveShelving",
    rating: 4.6,
    reviewCount: 13,
  },
  "shelf-price-display-1": {
    id: "shelf-price-display-1",
    name: "Shelf Price Display Unit",
    price: 25,
    description: {
      ka: `თაროს ფასმაჩვენებელი სისტემა. მაღალი ხარისხის პლასტმასისგან დამზადებული, იდეალურია მარკეტებისა და მაღაზიებისთვის.

**ტექნიკური მახასიათებლები:**
• სიგრძე: 100 სმ
• სიმაღლე: 4 სმ  
• სისქე: 2 სმ
• მასალა: გამძლე პლასტმასი
• ფერი: გამჭვირვალე

მარტივი დამონტაჟება და გამოყენება.`,
      en: `Shelf price display system. Made from high-quality plastic, ideal for markets and stores.

**Technical Specifications:**
• Length: 100 cm
• Height: 4 cm
• Thickness: 2 cm
• Material: Durable plastic
• Color: Transparent

Easy installation and use.`,
      ru: `Система ценовых полок. Изготовлена из высококачественного пластика, идеальна для рынков и магазинов.

**Технические характеристики:**
• Длина: 100 см
• Высота: 4 см
• Толщина: 2 см
• Материал: Прочный пластик
• Цвет: Прозрачный

Простая установка и использование.`,
    },
    features: {
      ka: [
        "სიგრძე: 100 სმ",
        "სიმაღლე: 4 სმ",
        "სისქე: 2 სმ",
        "მასალა: გამძლე პლასტმასი",
        "ფერი: გამჭვირვალე",
        "მარტივი დამონტაჟება",
        "ეკონომიური",
        "მრავალჯერადი გამოყენება",
      ],
      en: [
        "Length: 100 cm",
        "Height: 4 cm",
        "Thickness: 2 cm",
        "Material: Durable plastic",
        "Color: Transparent",
        "Easy installation",
        "Economical",
        "Reusable",
      ],
      ru: [
        "Длина: 100 см",
        "Высота: 4 см",
        "Толщина: 2 см",
        "Материал: Прочный пластик",
        "Цвет: Прозрачный",
        "Простая установка",
        "Экономичный",
        "Многоразовое использование",
      ],
    },
    images: ["/images/shelf-price-display-1.jpg"],
    colors: ["transparent"],
    sizes: ["100x4x2"],
    category: "shelfPriceDisplay",
    rating: 4.2,
    reviewCount: 31,
  },
  "plastic-frames-1": {
    id: "plastic-frames-1",
    name: "Plastic Frames Unit",
    price: 15,
    description: {
      ka: `ფერადი პლასტმასის ჩარჩოები. მაღალი ხარისხის პლასტმასისგან დამზადებული, იდეალურია ფასების და ინფორმაციის გამოსაჩენად.

**ტექნიკური მახასიათებლები:**
• ზომა: A4 (21x30 სმ)
• მასალა: გამძლე პლასტმასი
• სისქე: 3 მმ
• ფერები: წითელი, ლურჯი, ყვითელი, მწვანე

მრავალფერი ფერების არჩევანი.`,
      en: `Colored plastic frames. Made from high-quality plastic, ideal for displaying prices and information.

**Technical Specifications:**
• Size: A4 (21x30 cm)
• Material: Durable plastic
• Thickness: 3 mm
• Colors: Red, blue, yellow, green

Multiple color options available.`,
      ru: `Цветные пластиковые рамки. Изготовлены из высококачественного пластика, идеальны для отображения цен и информации.

**Технические характеристики:**
• Размер: A4 (21x30 см)
• Материал: Прочный пластик
• Толщина: 3 мм
• Цвета: Красный, синий, желтый, зеленый

Доступны различные цветовые варианты.`,
    },
    features: {
      ka: [
        "ზომა: A4 (21x30 სმ)",
        "მასალა: გამძლე პლასტმასი",
        "სისქე: 3 მმ",
        "ფერები: წითელი, ლურჯი, ყვითელი, მწვანე",
        "მსუბუქი",
        "ეკონომიური",
        "მრავალჯერადი გამოყენება",
        "მარტივი გამოყენება",
      ],
      en: [
        "Size: A4 (21x30 cm)",
        "Material: Durable plastic",
        "Thickness: 3 mm",
        "Colors: Red, blue, yellow, green",
        "Lightweight",
        "Economical",
        "Reusable",
        "Easy to use",
      ],
      ru: [
        "Размер: A4 (21x30 см)",
        "Материал: Прочный пластик",
        "Толщина: 3 мм",
        "Цвета: Красный, синий, желтый, зеленый",
        "Легкие",
        "Экономичные",
        "Многоразовое использование",
        "Простота использования",
      ],
    },
    images: ["/images/plastic-frames-1.jpg"],
    colors: ["red", "blue", "yellow", "green"],
    sizes: ["A4"],
    category: "plasticFrames",
    rating: 4.1,
    reviewCount: 42,
  },
  "frame-stands-1": {
    id: "frame-stands-1",
    name: "Frame Stands Unit",
    price: 35,
    description: {
      ka: `ჩარჩოს სადგამი რეგულირებადი. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია ფასების და ინფორმაციის გამოსაჩენად.

**ტექნიკური მახასიათებლები:**
• სიმაღლე: 15-25 სმ (რეგულირებადი)
• ბაზის ზომა: 10x10 სმ
• მასალა: ლითონი
• ფერი: ქრომირებული

რეგულირებადი სიმაღლე და მტკიცე კონსტრუქცია.`,
      en: `Adjustable frame stand. Made from high-quality metal, ideal for displaying prices and information.

**Technical Specifications:**
• Height: 15-25 cm (adjustable)
• Base size: 10x10 cm
• Material: Metal
• Color: Chrome

Adjustable height and sturdy construction.`,
      ru: `Регулируемая подставка для рамок. Изготовлена из высококачественного металла, идеальна для отображения цен и информации.

**Технические характеристики:**
• Высота: 15-25 см (регулируемая)
• Размер основания: 10x10 см
• Материал: Металл
• Цвет: Хром

Регулируемая высота и прочная конструкция.`,
    },
    features: {
      ka: [
        "სიმაღლე: 15-25 სმ (რეგულირებადი)",
        "ბაზის ზომა: 10x10 სმ",
        "მასალა: ლითონი",
        "ფერი: ქრომირებული",
        "რეგულირებადი სიმაღლე",
        "მტკიცე კონსტრუქცია",
        "მარტივი გამოყენება",
        "პროფესიონალური",
      ],
      en: [
        "Height: 15-25 cm (adjustable)",
        "Base size: 10x10 cm",
        "Material: Metal",
        "Color: Chrome",
        "Adjustable height",
        "Sturdy construction",
        "Easy to use",
        "Professional",
      ],
      ru: [
        "Высота: 15-25 см (регулируемая)",
        "Размер основания: 10x10 см",
        "Материал: Металл",
        "Цвет: Хром",
        "Регулируемая высота",
        "Прочная конструкция",
        "Простота использования",
        "Профессиональная",
      ],
    },
    images: ["/images/frame-stands-1.jpg"],
    colors: ["chrome"],
    sizes: ["15-25x10x10"],
    category: "frameStands",
    rating: 4.3,
    reviewCount: 18,
  },
  "pallet-trolley-1": {
    id: "pallet-trolley-1",
    name: "Pallet Trolley Unit",
    price: 180,
    description: {
      ka: `პალეტის ურიკა როხლი. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია საწყობებისა და ლოჯისტიკისთვის.

**ტექნიკური მახასიათებლები:**
• სიგრძე: 120 სმ
• სიგანე: 80 სმ  
• სიმაღლე: 15 სმ
• დატვირთვა: 1000 კგ
• თვლების რაოდენობა: 4

მძიმე ტვირთების გადასატანად.`,
      en: `Pallet trolley with wheels. Made from high-quality metal, ideal for warehouses and logistics.

**Technical Specifications:**
• Length: 120 cm
• Width: 80 cm
• Height: 15 cm
• Load capacity: 1000 kg
• Number of wheels: 4

For transporting heavy loads.`,
      ru: `Паллетная тележка с колесами. Изготовлена из высококачественного металла, идеальна для складов и логистики.

**Технические характеристики:**
• Длина: 120 см
• Ширина: 80 см
• Высота: 15 см
• Нагрузка: 1000 кг
• Количество колес: 4

Для транспортировки тяжелых грузов.`,
    },
    features: {
      ka: [
        "სიგრძე: 120 სმ",
        "სიგანე: 80 სმ",
        "სიმაღლე: 15 სმ",
        "დატვირთვა: 1000 კგ",
        "თვლების რაოდენობა: 4",
        "მძიმე ტვირთებისთვის",
        "მანევრირებადი",
        "გამძლე",
      ],
      en: [
        "Length: 120 cm",
        "Width: 80 cm",
        "Height: 15 cm",
        "Load capacity: 1000 kg",
        "Number of wheels: 4",
        "For heavy loads",
        "Maneuverable",
        "Durable",
      ],
      ru: [
        "Длина: 120 см",
        "Ширина: 80 см",
        "Высота: 15 см",
        "Нагрузка: 1000 кг",
        "Количество колес: 4",
        "Для тяжелых грузов",
        "Маневренная",
        "Прочная",
      ],
    },
    images: ["/images/pallet-trolley-red.jpeg"],
    colors: ["red"],
    sizes: ["120x80x15"],
    category: "palletTrolley",
    rating: 4.7,
    reviewCount: 12,
  },
  "platform-trolley-blue": {
    id: "platform-trolley-blue",
    name: "Platform Trolley Blue",
    price: 150,
    description: {
      ka: `პლატფორმის ურიკა ლურჯი საბურავით. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია საწყობებისა და ლოჯისტიკისთვის.

**ტექნიკური მახასიათებლები:**
• სიგრძე: 90 სმ
• სიგანე: 60 სმ  
• სიმაღლე: 85 სმ
• დატვირთვა: 300 კგ
• თვლების რაოდენობა: 4

საბურავით დაცული ტვირთისთვის.`,
      en: `Platform trolley with blue cover. Made from high-quality metal, ideal for warehouses and logistics.

**Technical Specifications:**
• Length: 90 cm
• Width: 60 cm
• Height: 85 cm
• Load capacity: 300 kg
• Number of wheels: 4

With cover for protected cargo.`,
      ru: `Платформенная тележка с синим покрытием. Изготовлена из высококачественного металла, идеальна для складов и логистики.

**Технические характеристики:**
• Длина: 90 см
• Ширина: 60 см
• Высота: 85 см
• Нагрузка: 300 кг
• Количество колес: 4

С покрытием для защищенного груза.`,
    },
    features: {
      ka: [
        "სიგრძე: 90 სმ",
        "სიგანე: 60 სმ",
        "სიმაღლე: 85 სმ",
        "დატვირთვა: 300 კგ",
        "თვლების რაოდენობა: 4",
        "საბურავით",
        "მანევრირებადი",
        "გამძლე",
      ],
      en: [
        "Length: 90 cm",
        "Width: 60 cm",
        "Height: 85 cm",
        "Load capacity: 300 kg",
        "Number of wheels: 4",
        "With cover",
        "Maneuverable",
        "Durable",
      ],
      ru: [
        "Длина: 90 см",
        "Ширина: 60 см",
        "Высота: 85 см",
        "Нагрузка: 300 кг",
        "Количество колес: 4",
        "С покрытием",
        "Маневренная",
        "Прочная",
      ],
    },
    images: ["/images/platform-trolley-blue.jpeg"],
    colors: ["blue"],
    sizes: ["90x60x85"],
    category: "platformTrolley",
    rating: 4.5,
    reviewCount: 8,
  },
  "platform-trolley-yellow": {
    id: "platform-trolley-yellow",
    name: "Platform Trolley Yellow",
    price: 150,
    description: {
      ka: `პლატფორმის ურიკა ყვითელი საბურავით. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია საწყობებისა და ლოჯისტიკისთვის.

**ტექნიკური მახასიათებლები:**
• სიგრძე: 90 სმ
• სიგანე: 60 სმ  
• სიმაღლე: 85 სმ
• დატვირთვა: 300 კგ
• თვლების რაოდენობა: 4

საბურავით დაცული ტვირთისთვის.`,
      en: `Platform trolley with yellow cover. Made from high-quality metal, ideal for warehouses and logistics.

**Technical Specifications:**
• Length: 90 cm
• Width: 60 cm
• Height: 85 cm
• Load capacity: 300 kg
• Number of wheels: 4

With cover for protected cargo.`,
      ru: `Платформенная тележка с желтым покрытием. Изготовлена из высококачественного металла, идеальна для складов и логистики.

**Технические характеристики:**
• Длина: 90 см
• Ширина: 60 см
• Высота: 85 см
• Нагрузка: 300 кг
• Количество колес: 4

С покрытием для защищенного груза.`,
    },
    features: {
      ka: [
        "სიგრძე: 90 სმ",
        "სიგანე: 60 სმ",
        "სიმაღლე: 85 სმ",
        "დატვირთვა: 300 კგ",
        "თვლების რაოდენობა: 4",
        "საბურავით",
        "მანევრირებადი",
        "გამძლე",
      ],
      en: [
        "Length: 90 cm",
        "Width: 60 cm",
        "Height: 85 cm",
        "Load capacity: 300 kg",
        "Number of wheels: 4",
        "With cover",
        "Maneuverable",
        "Durable",
      ],
      ru: [
        "Длина: 90 см",
        "Ширина: 60 см",
        "Высота: 85 см",
        "Нагрузка: 300 кг",
        "Количество колес: 4",
        "С покрытием",
        "Маневренная",
        "Прочная",
      ],
    },
    images: ["/images/platform-trolley-yellow.jpeg"],
    colors: ["yellow"],
    sizes: ["90x60x85"],
    category: "platformTrolley",
    rating: 4.5,
    reviewCount: 6,
  },
  "trash-bin-120": {
    id: "trash-bin-120",
    name: "Trash Bin 120 Unit",
    price: 85,
    description: {
      ka: `ნაგვის ურნა 120 ლიტრი HDPE მასალისგან. მაღალი ხარისხის პლასტმასისგან დამზადებული, იდეალურია საცხოვრებელი და კომერციული ობიექტებისთვის.

**ტექნიკური მახასიათებლები:**
• მოცულობა: 120 ლ
• სიგანე: 450 მმ
• სიღრმე: 570 მმ
• სიმაღლე: 970 მმ
• თვლების დიამეტრი: 200 მმ
• მასალა: HDPE
• ტევადობა: 120 კგ

ფერების ფართო არჩევანი: მწვანე, ლურჯი, წითელი, შავი.`,
      en: `120 liter HDPE trash bin. Made from high-quality plastic, ideal for residential and commercial properties.

**Technical Specifications:**
• Volume: 120 L
• Width: 450 mm
• Depth: 570 mm
• Height: 970 mm
• Wheel diameter: 200 mm
• Material: HDPE
• Capacity: 120 kg

Wide color selection: green, blue, red, black.`,
      ru: `Мусорный контейнер 120 литров из HDPE. Изготовлен из высококачественного пластика, идеален для жилых и коммерческих объектов.

**Технические характеристики:**
• Объем: 120 л
• Ширина: 450 мм
• Глубина: 570 мм
• Высота: 970 мм
• Диаметр колес: 200 мм
• Материал: HDPE
• Вместимость: 120 кг

Широкий выбор цветов: зеленый, синий, красный, черный.`,
    },
    features: {
      ka: [
        "მოცულობა: 120 ლ",
        "სიგანე: 450 მმ",
        "სიღრმე: 570 მმ",
        "სიმაღლე: 970 მმ",
        "თვლების დიამეტრი: 200 მმ",
        "მასალა: HDPE",
        "ტევადობა: 120 კგ",
        "ამინდისგან დაცული",
        "მარტივი გადაადგილება",
        "ეკოლოგიურად უსაფრთხო",
      ],
      en: [
        "Volume: 120 L",
        "Width: 450 mm",
        "Depth: 570 mm",
        "Height: 970 mm",
        "Wheel diameter: 200 mm",
        "Material: HDPE",
        "Capacity: 120 kg",
        "Weather resistant",
        "Easy mobility",
        "Environmentally safe",
      ],
      ru: [
        "Объем: 120 л",
        "Ширина: 450 мм",
        "Глубина: 570 мм",
        "Высота: 970 мм",
        "Диаметр колес: 200 мм",
        "Материал: HDPE",
        "Вместимость: 120 кг",
        "Устойчив к погоде",
        "Легкая мобильность",
        "Экологически безопасный",
      ],
    },
    images: ["/images/trash-bin-120.jpg", "/images/trash-bin-120-cover.jpg"],
    colors: ["gray", "black"],
    sizes: ["120x450x570"],
    category: "trashBin",
    rating: 4.3,
    reviewCount: 11,
  },
}

/**
 * Product detail page (safe stub).
 * Shows basic info if the product exists,
 * otherwise a fallback “not found” message.
 */
export default function ProductPage({
  params,
}: {
  params: { id: string }
}) {
  const { t } = useLanguage()

  const product = PRODUCTS[params.id]

  if (!product) {
    return (
      <main className="py-20 text-center">
        <h1 className="text-2xl font-semibold">{t("productNotFound")}</h1>
        <p className="mt-4">
          <a href="/products" className="text-primary underline">
            {t("backToProducts")}
          </a>
        </p>
      </main>
    )
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">{product.name}</h1>

      {/* image gallery (single placeholder image for now) */}
      <div className="relative w-full h-64 mb-8">
        <Image src={product.images[0] || "/placeholder.svg"} alt={product.name} fill className="object-contain" />
      </div>

      <p className="text-xl font-semibold">
        {t("price")}: {product.price} ₾
      </p>

      {/* product description */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">{t("description")}</h2>
        <p className="text-lg">{product.description.en}</p>
      </div>

      {/* product features */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">{t("features")}</h2>
        <ul className="list-disc pl-6">
          {product.features.en.map((feature, index) => (
            <li key={index} className="text-lg">
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* product images */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {product.images.map((image, index) => (
          <div key={index} className="relative w-full h-64">
            <Image src={image || "/placeholder.svg"} alt={product.name} fill className="object-contain" />
          </div>
        ))}
      </div>

      {/* product colors */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">{t("colors")}</h2>
        <p className="text-lg">{product.colors.join(", ")}</p>
      </div>

      {/* product sizes */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">{t("sizes")}</h2>
        <p className="text-lg">{product.sizes.join(", ")}</p>
      </div>

      {/* product category */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">{t("category")}</h2>
        <p className="text-lg">{product.category}</p>
      </div>

      {/* product rating and review count */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">{t("ratingAndReviews")}</h2>
        <p className="text-lg">
          {t("rating")}: {product.rating} / 5
        </p>
        <p className="text-lg">
          {t("reviewCount")}: {product.reviewCount}
        </p>
      </div>
    </main>
  )
}
