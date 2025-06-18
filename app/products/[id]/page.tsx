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
          ru: `Алюминиевая рейка для торговых аксессуаров. Изготовлена из высококачественного алюминия, идеальна для торговых полок и витрин.

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
            "მსუბუქი წონა",
            "კოროზიისგან დაცული",
            "მარტივი მონტაჟი",
          ],
          en: [
            "Length: 100 cm",
            "Width: 3 cm",
            "Thickness: 2 cm",
            "Material: Aluminum",
            "Load capacity: 15 kg",
            "Lightweight",
            "Corrosion resistant",
            "Easy assembly",
          ],
          ru: [
            "Длина: 100 см",
            "Ширина: 3 см",
            "Толщина: 2 см",
            "Материал: Алюминий",
            "Нагрузка: 15 кг",
            "Легкий вес",
            "Устойчив к коррозии",
            "Простая сборка",
          ],
        },
        images: [
          "/images/aluminum-rail-3.jpg",
          "/images/aluminum-rail-1.jpg",
          "/images/aluminum-rail-2.jpg",
          "/images/aluminum-rail-4.jpg",
          "/images/aluminum-rail-5.jpg",
        ],
        colors: ["ალუმინი"],
        sizes: ["100x3x2"],
        category: t("marketAccessories"),
        rating: 4.4,
        reviewCount: 7,
      },
      "perforated-profile-1": {
        id: "perforated-profile-1",
        name: t("perforatedProfileUnit"),
        price: 85.0,
        description: {
          ka: `პერფორირებული პროფილი მარკეტის თაროებისთვის. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია მარკეტის თაროებისა და გამოფენისთვის.

**ტექნიკური მახასიათებლები:**
• სიგრძე: 120 სმ
• სიგანე: 4 სმ  
• სისქე: 2 სმ
• მასალა: ლითონი
• დატვირთვა: 25 კგ

მრავალფუნქციური და ადაპტირებადი.`,
          en: `Perforated profile for market shelves. Made from high-quality metal, ideal for market shelves and displays.

**Technical Specifications:**
• Length: 120 cm
• Width: 4 cm
• Thickness: 2 cm
• Material: Metal
• Load capacity: 25 kg

Multifunctional and adaptable.`,
          ru: `Перфорированный профиль для торговых полок. Изготовлен из высококачественного металла, идеален для торговых полок и витрин.

**Технические характеристики:**
• Длина: 120 см
• Ширина: 4 см
• Толщина: 2 см
• Материал: Металл
• Нагрузка: 25 кг

Многофункциональный и адаптируемый.`,
        },
        features: {
          ka: [
            "სიგრძე: 120 სმ",
            "სიგანე: 4 სმ",
            "სისქე: 2 სმ",
            "მასალა: ლითონი",
            "დატვირთვა: 25 კგ",
            "პერფორირებული დიზაინი",
            "კოროზიისგან დაცული",
            "მარტივი მონტაჟი",
          ],
          en: [
            "Length: 120 cm",
            "Width: 4 cm",
            "Thickness: 2 cm",
            "Material: Metal",
            "Load capacity: 25 kg",
            "Perforated design",
            "Corrosion resistant",
            "Easy assembly",
          ],
          ru: [
            "Длина: 120 см",
            "Ширина: 4 см",
            "Толщина: 2 см",
            "Материал: Металл",
            "Нагрузка: 25 кг",
            "Перфорированный дизайн",
            "Устойчив к коррозии",
            "Простая сборка",
          ],
        },
        images: [
          "/images/perforated-profile-2.jpg",
          "/images/perforated-profile-1.jpg",
          "/images/perforated-profile-3.jpg",
          "/images/perforated-profile-4.jpg",
        ],
        colors: ["ნაცარი", t("white")],
        sizes: ["120x4x2"],
        category: t("marketShelves"),
        rating: 4.3,
        reviewCount: 11,
      },
      "basket-shelving-1": {
        id: "basket-shelving-1",
        name: t("basketShelvingUnit"),
        price: 220.0,
        description: {
          ka: `კალათიანი სტელაჟი მარკეტის თაროებისთვის. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია მარკეტებისა და მაღაზიებისთვის.

**ტექნიკური მახასიათებლები:**
• სიმაღლე: 150 სმ
• სიგანე: 90 სმ  
• სიღრმე: 40 სმ
• კალათების რაოდენობა: 4
• დატვირთვა: 30 კგ კალათაზე

იდეალურია პროდუქტების ორგანიზებული გამოსაჩენად.`,
          en: `Basket shelving for market shelves. Made from high-quality metal, ideal for markets and stores.

**Technical Specifications:**
• Height: 150 cm
• Width: 90 cm
• Depth: 40 cm
• Number of baskets: 4
• Load capacity: 30 kg per basket

Perfect for organized product display.`,
          ru: `Стеллаж с корзинами для торговых полок. Изготовлен из высококачественного металла, идеален для рынков и магазинов.

**Технические характеристики:**
• Высота: 150 см
• Ширина: 90 см
• Глубина: 40 см
• Количество корзин: 4
• Нагрузка: 30 кг на корзину

Идеален для организованной демонстрации товаров.`,
        },
        features: {
          ka: [
            "სიმაღლე: 150 სმ",
            "სიგანე: 90 სმ",
            "სიღრმე: 40 სმ",
            "კალათების რაოდენობა: 4",
            "დატვირთვა: 30 კგ კალათაზე",
            "მობილური კალათები",
            "კოროზიისგან დაცული",
            "მარტივი მონტაჟი",
          ],
          en: [
            "Height: 150 cm",
            "Width: 90 cm",
            "Depth: 40 cm",
            "Number of baskets: 4",
            "Load capacity: 30 kg per basket",
            "Mobile baskets",
            "Corrosion resistant",
            "Easy assembly",
          ],
          ru: [
            "Высота: 150 см",
            "Ширина: 90 см",
            "Глубина: 40 см",
            "Количество корзин: 4",
            "Нагрузка: 30 кг на корзину",
            "Мобильные корзины",
            "Устойчив к коррозии",
            "Простая сборка",
          ],
        },
        images: [
          "/images/basket-shelving-white.jpeg",
          "/images/basket-shelving-black.jpeg",
          "/images/basket-shelving-display.jpeg",
        ],
        colors: [t("white"), t("black")],
        sizes: ["150x90x40"],
        category: t("marketShelves"),
        rating: 4.6,
        reviewCount: 13,
      },
      "basket-shelving-2": {
        id: "basket-shelving-2",
        name: t("basketShelvingLargeUnit"),
        price: 280.0,
        description: {
          ka: `დიდი კალათიანი სტელაჟი მარკეტის თაროებისთვის. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია დიდი მარკეტებისა და სუპერმარკეტებისთვის.

**ტექნიკური მახასიათებლები:**
• სიმაღლე: 180 სმ
• სიგანე: 120 სმ  
• სიღრმე: 50 სმ
• კალათების რაოდენობა: 6
• დატვირთვა: 40 კგ კალათაზე

მეტი ტევადობა და ფუნქციონალობა.`,
          en: `Large basket shelving for market shelves. Made from high-quality metal, ideal for large markets and supermarkets.

**Technical Specifications:**
• Height: 180 cm
• Width: 120 cm
• Depth: 50 cm
• Number of baskets: 6
• Load capacity: 40 kg per basket

More capacity and functionality.`,
          ru: `Большой стеллаж с корзинами для торговых полок. Изготовлен из высококачественного металла, идеален для больших рынков и супермаркетов.

**Технические характеристики:**
• Высота: 180 см
• Ширина: 120 см
• Глубина: 50 см
• Количество корзин: 6
• Нагрузка: 40 кг на корзину

Больше вместимости и функциональности.`,
        },
        features: {
          ka: [
            "სიმაღლე: 180 სმ",
            "სიგანე: 120 სმ",
            "სიღრმე: 50 სმ",
            "კალათების რაოდენობა: 6",
            "დატვირთვა: 40 კგ კალათაზე",
            "დიდი ტევადობა",
            "კოროზიისგან დაცული",
            "მარტივი მონტაჟი",
          ],
          en: [
            "Height: 180 cm",
            "Width: 120 cm",
            "Depth: 50 cm",
            "Number of baskets: 6",
            "Load capacity: 40 kg per basket",
            "Large capacity",
            "Corrosion resistant",
            "Easy assembly",
          ],
          ru: [
            "Высота: 180 см",
            "Ширина: 120 см",
            "Глубина: 50 см",
            "Количество корзин: 6",
            "Нагрузка: 40 кг на корзину",
            "Большая вместимость",
            "Устойчив к коррозии",
            "Простая сборка",
          ],
        },
        images: ["/images/basket-shelving-large-white.jpeg", "/images/basket-shelving-white.jpeg"],
        colors: [t("white")],
        sizes: ["180x120x50"],
        category: t("marketShelves"),
        rating: 4.8,
        reviewCount: 8,
      },
      "tier-shelving-1": {
        id: "tier-shelving-1",
        name: t("tierShelvingUnit"),
        price: 190.0,
        description: {
          ka: `4-იარუსიანი სტელაჟი მარკეტის თაროებისთვის. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია მარკეტებისა და მაღაზიებისთვის.

**ტექნიკური მახასიათებლები:**
• სიმაღლე: 160 სმ
• სიგანე: 80 სმ  
• სიღრმე: 35 სმ
• იარუსების რაოდენობა: 4
• დატვირთვა: 25 კგ იარუსზე

კომპაქტური და ეფექტური.`,
          en: `4-tier shelving for market shelves. Made from high-quality metal, ideal for markets and stores.

**Technical Specifications:**
• Height: 160 cm
• Width: 80 cm
• Depth: 35 cm
• Number of tiers: 4
• Load capacity: 25 kg per tier

Compact and efficient.`,
          ru: `4-ярусный стеллаж для торговых полок. Изготовлен из высококачественного металла, идеален для рынков и магазинов.

**Технические характеристики:**
• Высота: 160 см
• Ширина: 80 см
• Глубина: 35 см
• Количество ярусов: 4
• Нагрузка: 25 кг на ярус

Компактный и эффективный.`,
        },
        features: {
          ka: [
            "სიმაღლე: 160 სმ",
            "სიგანე: 80 სმ",
            "სიღრმე: 35 სმ",
            "იარუსების რაოდენობა: 4",
            "დატვირთვა: 25 კგ იარუსზე",
            "კომპაქტური დიზაინი",
            "კოროზიისგან დაცული",
            "მარტივი მონტაჟი",
          ],
          en: [
            "Height: 160 cm",
            "Width: 80 cm",
            "Depth: 35 cm",
            "Number of tiers: 4",
            "Load capacity: 25 kg per tier",
            "Compact design",
            "Corrosion resistant",
            "Easy assembly",
          ],
          ru: [
            "Высота: 160 см",
            "Ширина: 80 см",
            "Глубина: 35 см",
            "Количество ярусов: 4",
            "Нагрузка: 25 кг на ярус",
            "Компактный дизайн",
            "Устойчив к коррозии",
            "Простая сборка",
          ],
        },
        images: [
          "/images/tier-shelving-red.jpeg",
          "/images/tier-shelving-blue.jpeg",
          "/images/tier-shelving-colors.jpeg",
        ],
        colors: ["წითელი", t("blue")],
        sizes: ["160x80x35"],
        category: t("marketShelves"),
        rating: 4.4,
        reviewCount: 16,
      },
      "tier-shelving-2": {
        id: "tier-shelving-2",
        name: t("largeTierShelvingUnit"),
        price: 250.0,
        description: {
          ka: `დიდი 4-იარუსიანი სტელაჟი მარკეტის თაროებისთვის. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია დიდი მარკეტებისა და სუპერმარკეტებისთვის.

**ტექნიკური მახასიათებლები:**
• სიმაღლე: 200 სმ
• სიგანე: 100 სმ  
• სიღრმე: 40 სმ
• იარუსების რაოდენობა: 4
• დატვირთვა: 35 კგ იარუსზე

მეტი ტევადობა და სტაბილურობა.`,
          en: `Large 4-tier shelving for market shelves. Made from high-quality metal, ideal for large markets and supermarkets.

**Technical Specifications:**
• Height: 200 cm
• Width: 100 cm
• Depth: 40 cm
• Number of tiers: 4
• Load capacity: 35 kg per tier

More capacity and stability.`,
          ru: `Большой 4-ярусный стеллаж для торговых полок. Изготовлен из высококачественного металла, идеален для больших рынков и супермаркетов.

**Технические характеристики:**
• Высота: 200 см
• Ширина: 100 см
• Глубина: 40 см
• Количество ярусов: 4
• Нагрузка: 35 кг на ярус

Больше вместимости и стабильности.`,
        },
        features: {
          ka: [
            "სიმაღლე: 200 სმ",
            "სიგანე: 100 სმ",
            "სიღრმე: 40 სმ",
            "იარუსების რაოდენობა: 4",
            "დატვირთვა: 35 კგ იარუსზე",
            "დიდი ტევადობა",
            "კოროზიისგან დაცული",
            "მარტივი მონტაჟი",
          ],
          en: [
            "Height: 200 cm",
            "Width: 100 cm",
            "Depth: 40 cm",
            "Number of tiers: 4",
            "Load capacity: 35 kg per tier",
            "Large capacity",
            "Corrosion resistant",
            "Easy assembly",
          ],
          ru: [
            "Высота: 200 см",
            "Ширина: 100 см",
            "Глубина: 40 см",
            "Количество ярусов: 4",
            "Нагрузка: 35 кг на ярус",
            "Большая вместимость",
            "Устойчив к коррозии",
            "Простая сборка",
          ],
        },
        images: ["/images/large-tier-shelving-colors.jpeg", "/images/tier-shelving-colors.jpeg"],
        colors: ["წითელი", t("blue"), "მწვანე"],
        sizes: ["200x100x40"],
        category: t("marketShelves"),
        rating: 4.7,
        reviewCount: 10,
      },
      "pallet-shelving-1": {
        id: "pallet-shelving-1",
        name: t("palletShelvingUnit1"),
        price: 850.0,
        description: {
          ka: `პროფესიონალური საპალეტე სტელაჟი ინდუსტრიული საწყობებისთვის. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია მძიმე ტვირთების ორგანიზებული შენახვისთვის.

**ტექნიკური მახასიათებლები:**
• სიმაღლე: 352 სმ
• სიგანე: 270 სმ
• სიღრმე: 85 სმ
• დატვირთვა: 2000 კგ ერთ იარუსზე
• მასალა: მაღალი ხარისხის ლითონი

იდეალურია საპალეტე ტვირთების, დიდი ზომის ყუთების და ინდუსტრიული მასალების შენახვისთვის.`,
          en: `Professional pallet racking for industrial warehouses. Made from high-quality metal, ideal for organized storage of heavy loads.

**Technical Specifications:**
• Height: 352 cm
• Width: 270 cm
• Depth: 85 cm
• Load capacity: 2000 kg per tier
• Material: High-quality metal

Perfect for storing palletized goods, large boxes and industrial materials.`,
          ru: `Профессиональный паллетный стеллаж для промышленных складов. Изготовлен из высококачественного металла, идеален для организованного хранения тяжелых грузов.

**Технические характеристики:**
• Высота: 352 см
• Ширина: 270 см
• Глубина: 85 см
• Нагрузка: 2000 кг на ярус
• Материал: Высококачественный металл

Идеален для хранения паллетированных товаров, больших коробок и промышленных материалов.`,
        },
        features: {
          ka: [
            "სიმაღლე: 352 სმ",
            "სიგანე: 270 სმ",
            "სიღრმე: 85 სმ",
            "დატვირთვა: 2000 კგ ერთ იარუსზე",
            "მაღალი ხარისხის ლითონი",
            "კოროზიისგან დაცული",
            "გაფართოებადი სისტემა",
            "ინდუსტრიული ხარისხი",
          ],
          en: [
            "Height: 352 cm",
            "Width: 270 cm",
            "Depth: 85 cm",
            "Load capacity: 2000 kg per tier",
            "High-quality metal",
            "Corrosion resistant",
            "Expandable system",
            "Industrial grade",
          ],
          ru: [
            "Высота: 352 см",
            "Ширина: 270 см",
            "Глубина: 85 см",
            "Нагрузка: 2000 кг на ярус",
            "Высококачественный металл",
            "Устойчив к коррозии",
            "Расширяемая система",
            "Промышленный класс",
          ],
        },
        images: ["/images/pallet-shelving-1.jpg"],
        colors: [t("blue"), "ნარინჯისფერი"],
        sizes: ["352x270x85"],
        category: t("palletShelving"),
        rating: 4.9,
        reviewCount: 8,
      },
      "pallet-shelving-2": {
        id: "pallet-shelving-2",
        name: t("palletShelvingUnit2"),
        price: 950.0,
        description: {
          ka: `პროფესიონალური საპალეტე სტელაჟი ინდუსტრიული საწყობებისთვის. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია მძიმე ტვირთების ორგანიზებული შენახვისთვის.

**ტექნიკური მახასიათებლები:**
• სიმაღლე: 352 სმ
• სიგანე: 270 სმ
• სიღრმე: 105 სმ
• დატვირთვა: 3000 კგ ერთ იარუსზე
• მასალა: მაღალი ხარისხის ლითონი

იდეალურია საპალეტე ტვირთების, დიდი ზომის ყუთების და ინდუსტრიული მასალების შენახვისთვის.`,
          en: `Professional pallet racking for industrial warehouses. Made from high-quality metal, ideal for organized storage of heavy loads.

**Technical Specifications:**
• Height: 352 cm
• Width: 270 cm
• Depth: 105 cm
• Load capacity: 3000 kg per tier
• Material: High-quality metal

Perfect for storing palletized goods, large boxes and industrial materials.`,
          ru: `Профессиональный паллетный стеллаж для промышленных складов. Изготовлен из высококачественного металла, идеален для организованного хранения тяжелых грузов.

**Технические характеристики:**
• Высота: 352 см
• Ширина: 270 см
• Глубина: 105 см
• Нагрузка: 3000 кг на ярус
• Материал: Высококачественный металл

Идеален для хранения паллетированных товаров, больших коробок и промышленных материалов.`,
        },
        features: {
          ka: [
            "სიმაღლე: 352 სმ",
            "სიგანე: 270 სმ",
            "სიღრმე: 105 სმ",
            "დატვირთვა: 3000 კგ ერთ იარუსზე",
            "მაღალი ხარისხის ლითონი",
            "კოროზიისგან დაცული",
            "გაფართოებადი სისტემა",
            "ინდუსტრიული ხარისხი",
          ],
          en: [
            "Height: 352 cm",
            "Width: 270 cm",
            "Depth: 105 cm",
            "Load capacity: 3000 kg per tier",
            "High-quality metal",
            "Corrosion resistant",
            "Expandable system",
            "Industrial grade",
          ],
          ru: [
            "Высота: 352 см",
            "Ширина: 270 см",
            "Глубина: 105 см",
            "Нагрузка: 3000 кг на ярус",
            "Высококачественный металл",
            "Устойчив к коррозии",
            "Расширяемая система",
            "Промышленный класс",
          ],
        },
        images: ["/images/pallet-shelving-2.jpg"],
        colors: [t("blue"), "ნარინჯისფერი"],
        sizes: ["352x270x105"],
        category: t("palletShelving"),
        rating: 4.8,
        reviewCount: 12,
      },
      "pallet-shelving-3": {
        id: "pallet-shelving-3",
        name: t("palletShelvingUnit3"),
        price: 1050.0,
        description: {
          ka: `პროფესიონალური საპალეტე სტელაჟი ინდუსტრიული საწყობებისთვის. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია მძიმე ტვირთების ორგანიზებული შენახვისთვის.

**ტექნიკური მახასიათებლები:**
• სიმაღლე: 405 სმ
• სიგანე: 270 სმ
• სიღრმე: 105 სმ
• დატვირთვა: 3000 კგ ერთ იარუსზე
• მასალა: მაღალი ხარისხის ლითონი

იდეალურია საპალეტე ტვირთების, დიდი ზომის ყუთების და ინდუსტრიული მასალების შენახვისთვის.`,
          en: `Professional pallet racking for industrial warehouses. Made from high-quality metal, ideal for organized storage of heavy loads.

**Technical Specifications:**
• Height: 405 cm
• Width: 270 cm
• Depth: 105 cm
• Load capacity: 3000 kg per tier
• Material: High-quality metal

Perfect for storing palletized goods, large boxes and industrial materials.`,
          ru: `Профессиональный паллетный стеллаж для промышленных складов. Изготовлен из высококачественного металла, идеален для организованного хранения тяжелых грузов.

**Технические характеристики:**
• Высота: 405 см
• Ширина: 270 см
• Глубина: 105 см
• Нагрузка: 3000 кг на ярус
• Материал: Высококачественный металл

Идеален для хранения паллетированных товаров, больших коробок и промышленных материалов.`,
        },
        features: {
          ka: [
            "სიმაღლე: 405 სმ",
            "სიგანე: 270 სმ",
            "სიღრმე: 105 სმ",
            "დატვირთვა: 3000 კგ ერთ იარუსზე",
            "მაღალი ხარისხის ლითონი",
            "კოროზიისგან დაცული",
            "გაფართოებადი სისტემა",
            "ინდუსტრიული ხარისხი",
          ],
          en: [
            "Height: 405 cm",
            "Width: 270 cm",
            "Depth: 105 cm",
            "Load capacity: 3000 kg per tier",
            "High-quality metal",
            "Corrosion resistant",
            "Expandable system",
            "Industrial grade",
          ],
          ru: [
            "Высота: 405 см",
            "Ширина: 270 см",
            "Глубина: 105 см",
            "Нагрузка: 3000 кг на ярус",
            "Высококачественный металл",
            "Устойчив к коррозии",
            "Расширяемая система",
            "Промышленный класс",
          ],
        },
        images: ["/images/pallet-shelving-3.jpg"],
        colors: [t("blue"), "ნარინჯისფერი"],
        sizes: ["405x270x105"],
        category: t("palletShelving"),
        rating: 4.9,
        reviewCount: 6,
      },
      "pallet-shelving-4": {
        id: "pallet-shelving-4",
        name: t("palletShelvingUnit4"),
        price: 1250.0,
        description: {
          ka: `პროფესიონალური საპალეტე სტელაჟი ინდუსტრიული საწყობებისთვის. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია მძიმე ტვირთების ორგანიზებული შენახვისთვის.

**ტექნიკური მახასიათებლები:**
• სიმაღლე: 502 სმ
• სიგანე: 270 სმ
• სიღრმე: 105 სმ
• დატვირთვა: 3000 კგ ერთ იარუსზე
• მასალა: მაღალი ხარისხის ლითონი

იდეალურია საპალეტე ტვირთების, დიდი ზომის ყუთების და ინდუსტრიული მასალების შენახვისთვის.`,
          en: `Professional pallet racking for industrial warehouses. Made from high-quality metal, ideal for organized storage of heavy loads.

**Technical Specifications:**
• Height: 502 cm
• Width: 270 cm
• Depth: 105 cm
• Load capacity: 3000 kg per tier
• Material: High-quality metal

Perfect for storing palletized goods, large boxes and industrial materials.`,
          ru: `Профессиональный паллетный стеллаж для промышленных складов. Изготовлен из высококачественного металла, идеален для организованного хранения тяжелых грузов.

**Технические характеристики:**
• Высота: 502 см
• Ширина: 270 см
• Глубина: 105 см
• Нагрузка: 3000 кг на ярус
• Материал: Высококачественный металл

Идеален для хранения паллетированных товаров, больших коробок и промышленных материалов.`,
        },
        features: {
          ka: [
            "სიმაღლე: 502 სმ",
            "სიგანე: 270 სმ",
            "სიღრმე: 105 სმ",
            "დატვირთვა: 3000 კგ ერთ იარუსზე",
            "მაღალი ხარისხის ლითონი",
            "კოროზიისგან დაცული",
            "გაფართოებადი სისტემა",
            "ინდუსტრიული ხარისხი",
          ],
          en: [
            "Height: 502 cm",
            "Width: 270 cm",
            "Depth: 105 cm",
            "Load capacity: 3000 kg per tier",
            "High-quality metal",
            "Corrosion resistant",
            "Expandable system",
            "Industrial grade",
          ],
          ru: [
            "Высота: 502 см",
            "Ширина: 270 см",
            "Глубина: 105 см",
            "Нагрузка: 3000 кг на ярус",
            "Высококачественный металл",
            "Устойчив к коррозии",
            "Расширяемая система",
            "Промышленный класс",
          ],
        },
        images: ["/images/pallet-shelving-4.png"],
        colors: [t("blue"), "ნარინჯისფერი"],
        sizes: ["502x270x105"],
        category: t("palletShelving"),
        rating: 5.0,
        reviewCount: 4,
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
  // Related products - get products from the same category
  const relatedProducts = [
    // Warehouse Shelving products
    ...(product.category === t("warehouseShelving")
      ? [
          {
            id: "warehouse-1",
            name: t("warehouseShelvingUnit"),
            price: 450.0,
            image: "/images/blue-warehouse-shelving.png",
            category: t("warehouseShelving"),
            isNew: true,
          },
          {
            id: "warehouse-2",
            name: t("warehouseShelvingUnit"),
            price: 420.0,
            image: "/images/blue-orange-warehouse-shelving.jpg",
            category: t("warehouseShelving"),
          },
          {
            id: "warehouse-3",
            name: t("warehouseShelvingUnit"),
            price: 480.0,
            image: "/images/gray-warehouse-shelving.jpg",
            category: t("warehouseShelving"),
          },
          {
            id: "warehouse-4",
            name: t("warehouseShelvingUnit"),
            price: 520.0,
            image: "/images/tall-warehouse-shelving.jpg",
            category: t("warehouseShelving"),
            isNew: true,
          },
        ]
      : []),

    // Market Shelves products
    ...(product.category === t("marketShelves")
      ? [
          {
            id: "basket-shelving-1",
            name: t("basketShelvingUnit"),
            price: 220.0,
            image: "/images/basket-shelving-white.jpeg",
            category: t("marketShelves"),
          },
          {
            id: "basket-shelving-2",
            name: t("basketShelvingLargeUnit"),
            price: 280.0,
            image: "/images/basket-shelving-large-white.jpeg",
            category: t("marketShelves"),
            isNew: true,
          },
          {
            id: "tier-shelving-1",
            name: t("tierShelvingUnit"),
            price: 190.0,
            image: "/images/tier-shelving-red.jpeg",
            category: t("marketShelves"),
          },
          {
            id: "tier-shelving-2",
            name: t("largeTierShelvingUnit"),
            price: 250.0,
            image: "/images/large-tier-shelving-colors.jpeg",
            category: t("marketShelves"),
          },
          {
            id: "perforated-profile-1",
            name: t("perforatedProfileUnit"),
            price: 85.0,
            image: "/images/perforated-profile-2.jpg",
            category: t("marketShelves"),
          },
        ]
      : []),

    // Market Accessories products
    ...(product.category === t("marketAccessories")
      ? [
          {
            id: "aluminum-rail-1",
            name: t("aluminumRailUnit"),
            price: 45.0,
            image: "/images/aluminum-rail-3.jpg",
            category: t("marketAccessories"),
          },
        ]
      : []),

    // Pallet Shelving products
    ...(product.category === t("palletShelving")
      ? [
          {
            id: "pallet-shelving-1",
            name: t("palletShelvingUnit1"),
            price: 850.0,
            image: "/images/pallet-shelving-1.jpg",
            category: t("palletShelving"),
            isNew: true,
          },
          {
            id: "pallet-shelving-2",
            name: t("palletShelvingUnit2"),
            price: 950.0,
            image: "/images/pallet-shelving-2.jpg",
            category: t("palletShelving"),
          },
          {
            id: "pallet-shelving-3",
            name: t("palletShelvingUnit3"),
            price: 1050.0,
            image: "/images/pallet-shelving-3.jpg",
            category: t("palletShelving"),
          },
          {
            id: "pallet-shelving-4",
            name: t("palletShelvingUnit4"),
            price: 1250.0,
            image: "/images/pallet-shelving-4.png",
            category: t("palletShelving"),
            isNew: true,
          },
        ]
      : []),

    // Tire Shelving products
    ...(product.category === t("tireShelving")
      ? [
          {
            id: "tire-shelving-1",
            name: t("tireShelvingUnit"),
            price: 680.0,
            image: "/images/tire-shelving-1.png",
            category: t("tireShelving"),
            isNew: true,
          },
        ]
      : []),

    // Clothing Shelving products
    ...(product.category === t("clothingShelving")
      ? [
          {
            id: "clothing-shelving-1",
            name: t("clothingShelvingUnit"),
            price: 380.0,
            image: "/images/clothing-rack-1.jpg",
            category: t("clothingShelving"),
          },
        ]
      : []),
  ].filter((p) => p.id !== product.id) // Remove current product from related products

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
