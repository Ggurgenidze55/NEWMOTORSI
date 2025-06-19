"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Star } from "lucide-react"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
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
        images: [
          "/images/blue-warehouse-shelving.png",
          "/images/blue-orange-warehouse-shelving.jpg",
          "/images/gray-warehouse-shelving.jpg",
          "/images/tall-warehouse-shelving.jpg",
        ],
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
        colors: [t("blue"), "ნარინჯისფერი"],
        sizes: ["200x120x60"],
        category: t("warehouseShelving"),
        rating: 4.7,
        reviewCount: 18,
      },
      "warehouse-3": {
        id: "warehouse-3",
        name: t("warehouseShelvingUnit"),
        price: 480.0,
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
        colors: ["ნაცარი"],
        sizes: ["220x100x50"],
        category: t("warehouseShelving"),
        rating: 4.6,
        reviewCount: 15,
      },
      "warehouse-4": {
        id: "warehouse-4",
        name: t("warehouseShelvingUnit"),
        price: 520.0,
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
        colors: [t("blue"), "ნაცარი"],
        sizes: ["300x120x80"],
        category: t("warehouseShelving"),
        rating: 4.9,
        reviewCount: 12,
      },
      "tire-shelving-1": {
        id: "tire-shelving-1",
        name: t("tireShelvingUnit"),
        price: 680.0,
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
        colors: [t("blue"), "ნაცარი"],
        sizes: ["200x150x40"],
        category: t("tireShelving"),
        rating: 4.7,
        reviewCount: 9,
      },
      "clothing-shelving-1": {
        id: "clothing-shelving-1",
        name: t("clothingShelvingUnit"),
        price: 380.0,
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
        colors: ["ნაცარი", t("black")],
        sizes: ["180x120x50"],
        category: t("clothingShelving"),
        rating: 4.5,
        reviewCount: 14,
      },
      "aluminum-rail-1": {
        id: "aluminum-rail-1",
        name: t("aluminumRailUnit"),
        price: 45.0,
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
        colors: [t("aluminum")],
        sizes: ["100x3x2"],
        category: t("aluminumRail"),
        rating: 4.6,
        reviewCount: 22,
      },
      "perforated-profile-1": {
        id: "perforated-profile-1",
        name: t("perforatedProfileUnit"),
        price: 85.0,
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
            "Thickness: 3 cm",
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
        colors: [t("white"), t("black")],
        sizes: ["200x5x3"],
        category: t("perforatedProfile"),
        rating: 4.4,
        reviewCount: 16,
      },
      "perforated-wall-1": {
        id: "perforated-wall-1",
        name: t("perforatedWallUnit"),
        price: 320.0,
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
          "/images/perforated-wall-cover-1.jpg",
          "/images/perforated-wall-cover-2.jpg",
          "/images/perforated-wall-cover-3.jpg",
        ],
        colors: [t("white"), t("black")],
        sizes: ["200x100x2"],
        category: t("perforatedWall"),
        rating: 4.3,
        reviewCount: 11,
      },
      "basket-shelving-1": {
        id: "basket-shelving-1",
        name: t("basketShelvingUnit"),
        price: 280.0,
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
        colors: [t("white"), t("black")],
        sizes: ["150x60x40"],
        category: t("basketShelving"),
        rating: 4.5,
        reviewCount: 19,
      },
      "tier-shelving-1": {
        id: "tier-shelving-1",
        name: t("tierShelvingUnit"),
        price: 220.0,
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
        images: [
          "/images/tier-shelving-colors.jpeg",
          "/images/tier-shelving-blue.jpeg",
          "/images/tier-shelving-red.jpeg",
        ],
        colors: [t("blue"), t("red"), "ყვითელი", "მწვანე"],
        sizes: ["160x80x35"],
        category: t("tierShelving"),
        rating: 4.4,
        reviewCount: 25,
      },
      "pallet-shelving-1": {
        id: "pallet-shelving-1",
        name: t("palletShelvingUnit1"),
        price: 850.0,
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
        colors: [t("blue"), "ნარინჯისფერი"],
        sizes: ["352x270x85"],
        category: t("palletShelving"),
        rating: 4.8,
        reviewCount: 8,
      },
      "archive-shelving-1": {
        id: "archive-shelving-1",
        name: t("archiveShelvingUnit"),
        price: 420.0,
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
        colors: ["ნაცარი", t("white")],
        sizes: ["200x100x35"],
        category: t("archiveShelving"),
        rating: 4.6,
        reviewCount: 13,
      },
      "shelf-price-display-1": {
        id: "shelf-price-display-1",
        name: t("shelfPriceDisplayUnit"),
        price: 25.0,
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
        colors: ["გამჭვირვალე"],
        sizes: ["100x4x2"],
        category: t("shelfPriceDisplay"),
        rating: 4.2,
        reviewCount: 31,
      },
      "plastic-frames-1": {
        id: "plastic-frames-1",
        name: t("plasticFramesUnit"),
        price: 15.0,
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
        colors: [t("red"), t("blue"), "ყვითელი", "მწვანე"],
        sizes: ["A4"],
        category: t("plasticFrames"),
        rating: 4.1,
        reviewCount: 42,
      },
      "frame-stands-1": {
        id: "frame-stands-1",
        name: t("frameStandsUnit"),
        price: 35.0,
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
        colors: ["ქრომირებული"],
        sizes: ["15-25x10x10"],
        category: t("frameStands"),
        rating: 4.3,
        reviewCount: 18,
      },
      "pallet-trolley-1": {
        id: "pallet-trolley-1",
        name: t("palletTrolleyUnit"),
        price: 180.0,
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
        colors: [t("red")],
        sizes: ["120x80x15"],
        category: t("palletTrolley"),
        rating: 4.7,
        reviewCount: 12,
      },
      "platform-trolley-blue": {
        id: "platform-trolley-blue",
        name: t("platformTrolleyBlue"),
        price: 150.0,
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
        colors: [t("blue")],
        sizes: ["90x60x85"],
        category: t("platformTrolley"),
        rating: 4.5,
        reviewCount: 8,
      },
      "platform-trolley-yellow": {
        id: "platform-trolley-yellow",
        name: t("platformTrolleyYellow"),
        price: 150.0,
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
        colors: ["ყვითელი"],
        sizes: ["90x60x85"],
        category: t("platformTrolley"),
        rating: 4.5,
        reviewCount: 6,
      },
      "trash-bin-120": {
        id: "trash-bin-120",
        name: t("trashBin120Unit"),
        price: 85.0,
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
        images: ["/images/trash-bin-120l.jpg"],
        colors: ["მწვანე", t("blue"), t("red"), t("black")],
        sizes: ["120L"],
        category: t("trashBins"),
        rating: 4.6,
        reviewCount: 28,
      },
      "trash-bin-240": {
        id: "trash-bin-240",
        name: t("trashBin240Unit"),
        price: 120.0,
        description: {
          ka: `ნაგვის ურნა 240 ლიტრი HDPE მასალისგან. მაღალი ხარისხის პლასტმასისგან დამზადებული, იდეალურია კომერციული და ინდუსტრიული ობიექტებისთვის.

**ტექნიკური მახასიათებლები:**
• მოცულობა: 240 ლ
• სიგანე: 570 მმ
• სიღრმე: 720 მმ
• სიმაღლე: 1068 მმ
• თვლების დიამეტრი: 200 მმ
• მასალა: HDPE
• ტევადობა: 240 კგ

დიდი მოცულობა მეტი ნაგვისთვის.`,
          en: `240 liter HDPE trash bin. Made from high-quality plastic, ideal for commercial and industrial properties.

**Technical Specifications:**
• Volume: 240 L
• Width: 570 mm
• Depth: 720 mm
• Height: 1068 mm
• Wheel diameter: 200 mm
• Material: HDPE
• Capacity: 240 kg

Large volume for more waste.`,
          ru: `Мусорный контейнер 240 литров из HDPE. Изготовлен из высококачественного пластика, идеален для коммерческих и промышленных объектов.

**Технические характеристики:**
• Объем: 240 л
• Ширина: 570 мм
• Глубина: 720 мм
• Высота: 1068 мм
• Диаметр колес: 200 мм
• Материал: HDPE
• Вместимость: 240 кг

Большой объем для большего количества отходов.`,
        },
        features: {
          ka: [
            "მოცულობა: 240 ლ",
            "სიგანე: 570 მმ",
            "სიღრმე: 720 მმ",
            "სიმაღლე: 1068 მმ",
            "თვლების დიამეტრი: 200 მმ",
            "მასალა: HDPE",
            "ტევადობა: 240 კგ",
            "ამინდისგან დაცული",
            "მარტივი გადაადგილება",
            "ეკოლოგიურად უსაფრთხო",
          ],
          en: [
            "Volume: 240 L",
            "Width: 570 mm",
            "Depth: 720 mm",
            "Height: 1068 mm",
            "Wheel diameter: 200 mm",
            "Material: HDPE",
            "Capacity: 240 kg",
            "Weather resistant",
            "Easy mobility",
            "Environmentally safe",
          ],
          ru: [
            "Объем: 240 л",
            "Ширина: 570 мм",
            "Глубина: 720 мм",
            "Высота: 1068 мм",
            "Диаметр колес: 200 мм",
            "Материал: HDPE",
            "Вместимость: 240 кг",
            "Устойчив к погоде",
            "Легкая мобильность",
            "Экологически безопасный",
          ],
        },
        images: ["/images/trash-bin-240l.jpg"],
        colors: [t("blue")],
        sizes: ["240L"],
        category: t("trashBins"),
        rating: 4.7,
        reviewCount: 15,
      },
    }

    return products[productId] || null
  }

  const product = getProductData(params.id)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Link href="/products" className="text-blue-600 hover:underline">
            Back to products
          </Link>
        </div>
      </div>
    )
  }

  // Related products (same category, different product)
  const relatedProducts = [
    {
      id: "warehouse-1",
      name: t("warehouseShelvingUnit"),
      price: 450.0,
      image: "/images/blue-warehouse-shelving.png",
      category: t("warehouseShelving"),
      rating: 4.8,
      reviewCount: 24,
    },
    {
      id: "tire-shelving-1",
      name: t("tireShelvingUnit"),
      price: 680.0,
      image: "/images/tire-shelving-1.png",
      category: t("tireShelving"),
      rating: 4.7,
      reviewCount: 9,
    },
    {
      id: "basket-shelving-1",
      name: t("basketShelvingUnit"),
      price: 280.0,
      image: "/images/basket-shelving-white.jpeg",
      category: t("basketShelving"),
      rating: 4.5,
      reviewCount: 19,
    },
    {
      id: "tier-shelving-1",
      name: t("tierShelvingUnit"),
      price: 220.0,
      image: "/images/tier-shelving-colors.jpeg",
      category: t("tierShelving"),
      rating: 4.4,
      reviewCount: 25,
    },
  ]
    .filter((p) => p.id !== product.id)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">
              {t("home")}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/products" className="hover:text-gray-700">
              {t("products")}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          {/* Image gallery */}
          <div className="flex flex-col-reverse">
            <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
              <div className="grid grid-cols-4 gap-6">
                {product.images.map((image, index) => (
                  <div
                    key={index}
                    className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-indigo-500"
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      className="object-cover object-center rounded-md"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full aspect-square">
              <Image
                src={product.images[0] || "/placeholder.svg"}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-full object-cover object-center sm:rounded-lg"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{product.name}</h1>

            <div className="mt-3">
              <h2 className="sr-only">{t("price")}</h2>
              <p className="text-3xl text-gray-900">${product.price}</p>
            </div>

            {/* Reviews */}
            <div className="mt-3">
              <h3 className="sr-only">{t("reviews")}</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <Star
                      key={rating}
                      className={`${
                        product.rating > rating ? "text-yellow-400 fill-current" : "text-gray-300"
                      } h-5 w-5 flex-shrink-0`}
                    />
                  ))}
                </div>
                <p className="sr-only">{product.rating} out of 5 stars</p>
                <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  {product.reviewCount} {t("reviews")}
                </a>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">{t("description")}</h3>
              <div
                className="text-base text-gray-700 space-y-6"
                dangerouslySetInnerHTML={{
                  __html: product.description[language].replace(/\n/g, "<br>"),
                }}
              />
            </div>

            <form className="mt-6">
              {/* Colors */}
              {product.colors && product.colors.length > 0 && (
                <div>
                  <h3 className="text-sm text-gray-600">{t("color")}</h3>
                  <RadioGroup defaultValue={product.colors[0]} className="mt-2">
                    <div className="flex items-center space-x-3">
                      {product.colors.map((color) => (
                        <div key={color} className="flex items-center">
                          <RadioGroupItem value={color} id={color} className="sr-only" />
                          <Label
                            htmlFor={color}
                            className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                          >
                            <span
                              className={`h-8 w-8 border border-black border-opacity-10 rounded-full ${
                                color === t("blue")
                                  ? "bg-blue-500"
                                  : color === t("red")
                                    ? "bg-red-500"
                                    : color === t("black")
                                      ? "bg-black"
                                      : color === t("white")
                                        ? "bg-white"
                                        : color === "მწვანე"
                                          ? "bg-green-500"
                                          : color === "ყვითელი"
                                            ? "bg-yellow-500"
                                            : color === "ნაცარი"
                                              ? "bg-gray-500"
                                              : color === "ნარინჯისფერი"
                                                ? "bg-orange-500"
                                                : color === t("aluminum")
                                                  ? "bg-gray-300"
                                                  : color === "ქრომირებული"
                                                    ? "bg-gray-400"
                                                    : color === "გამჭვირვალე"
                                                      ? "bg-gray-100 border-2 border-dashed"
                                                      : "bg-gray-200"
                              }`}
                            />
                          </Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              )}

              {/* Size */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mt-8">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm text-gray-600">{t("size")}</h3>
                  </div>
                  <RadioGroup defaultValue={product.sizes[0]} className="mt-2">
                    <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                      {product.sizes.map((size) => (
                        <div key={size}>
                          <RadioGroupItem value={size} id={size} className="sr-only" />
                          <Label
                            htmlFor={size}
                            className="cursor-pointer bg-white border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            {size}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              )}

              <div className="mt-10 flex sm:flex-col1">
                <button
                  type="submit"
                  className="max-w-xs flex-1 bg-indigo-600 border border-transparent rounded-md py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-full"
                >
                  {t("addToCart")}
                </button>

                <button className="ml-4 py-3 px-8 rounded-md border border-gray-300 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  {t("wishList")}
                </button>
              </div>
            </form>

            <section className="mt-16" aria-labelledby="features-heading">
              <h2 id="features-heading" className="text-lg font-medium text-gray-900">
                {t("features")}
              </h2>

              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                {product.features[language].map((feature, index) => (
                  <div key={index} className="flex">
                    <p className="text-sm text-gray-500">{feature}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-16">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">{t("relatedProducts")}</h2>

          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <Image
                    src={relatedProduct.image || "/placeholder.svg"}
                    alt={relatedProduct.name}
                    width={500}
                    height={500}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link href={`/products/${relatedProduct.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {relatedProduct.name}
                      </Link>
                    </h3>
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <Star
                          key={rating}
                          className={`${
                            relatedProduct.rating > rating ? "text-yellow-400 fill-current" : "text-gray-300"
                          } h-4 w-4 flex-shrink-0`}
                        />
                      ))}
                      <p className="ml-2 text-sm text-gray-500">({relatedProduct.reviewCount})</p>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-gray-900">${relatedProduct.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
